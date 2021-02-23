import { useEffect, useState } from "react";
import { Container, Center, SimpleGrid, Button } from "@chakra-ui/react";

import Header from "components/Header";
import Filter from "components/Filter";
import CharacterCard from "components/CharacterCard";
import Footer from "components/Footer";

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
    <>
      <Header />

      <Container maxW="container.lg" p={7}>
        <Center d="flex" flexDirection="column">
          <Filter onSubmit={handleSearch} />

          <SimpleGrid
            columns={[1, 1, 2, 3]}
            spacing={[2, 3, 5]}
            mt={10}
            mb={10}
          >
            {results.map((res) => (
              <CharacterCard
                key={res.id}
                name={res.name}
                image={res.image}
                status={res.status}
                species={res.species}
                type={res.type}
                gender={res.gender}
              />
            ))}
          </SimpleGrid>

          <Button colorScheme="primary" onClick={handleLoadMore}>
            LOAD MORE
          </Button>
        </Center>
      </Container>

      <Footer />
    </>
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
