import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  const { info, results: initialResults = [] } = data;
  const [results, setResults] = useState(initialResults);
  const [page, setPage] = useState({
    ...info,
    current: process.env.BASE_URL,
  });

  const { current } = page;

  useEffect(() => {
    // Check if it's the first render
    if (current === process.env.BASE_URL) return;

    const request = async () => {
      const res = await fetch(current);
      const nextData = await res.json();

      setPage({
        current,
        ...nextData.info,
      });

      // If our request does not have a previous value,
      // that means it’s the first set of results for the given request,
      // so we should completely replace our results to start from scratch
      if (!nextData.info?.prev) {
        setResults(nextData.results);
      }

      setResults((prevResults) => {
        return [...prevResults, ...nextData.results];
      });
    };

    request();
  }, [current]);

  const handleLoadMore = () => {
    setPage((prev) => {
      return {
        ...prev,
        current: page?.next,
      };
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const { currentTarget = {} } = e;
    const fields = Array.from(currentTarget?.elements);
    const fieldQuery = fields.find((field) => field.name === "query");

    const value = fieldQuery.value || "";
    const endpoint = `https://rickandmortyapi.com/api/character/?name=${value}`;

    setPage({
      current: endpoint,
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <form onSubmit={handleSearch}>
          <input name="query" type="search" />
          <button type="submit">SEARCH</button>
        </form>

        <ul className={styles.grid}>
          {results.map((res) => (
            <li className={styles.card} key={res.id}>
              <a href="https://nextjs.org/docs">
                <img src={res.image} alt={res.name} />
                <h3>{res.name}</h3>
              </a>
            </li>
          ))}
        </ul>

        <p>
          <button onClick={handleLoadMore} type="button">
            LOAD MORE
          </button>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(process.env.BASE_URL);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
