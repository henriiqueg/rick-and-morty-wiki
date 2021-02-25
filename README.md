## Introdução

---

### Qual a motivação da pílula de hoje?

- Apresentar uma alternativa à biblioteca de componentes que usamos hoje na Loomi
- Apresentar um framework para React que proporciona mais facilidade e mais robustez nas aplicações

---

## Chakra-UI

### Por que pensar em outra biblioteca de componentes?

---

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9061b292-6448-47a2-8e89-c5a83e666323/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9061b292-6448-47a2-8e89-c5a83e666323/Untitled.png)

---

### Além disso, existem alguns pontos que me levaram a questionar o uso do Ant Design. Alguns deles são:

- Grande parte da documentação em chinês
- Sem suporte built-in para responsividade nos componentes (precisa usar *Col* ou *Row*)
- Necessita de muita configuração de bibliotecas externas para alterar os temas (Styled-components)
- Algumas configurações precisam ser feita utilizando *Craco* com *Less*

E por que não testar bibliotecas novas?

---

### E por que Chakra-UI?

---

- Vasta biblioteca de componentes
- Theme Context imbutido (style guides)
- Variants (versões diferentes de um mesmo componente)
- Hooks para manipulações de componentes
- Dark mode 🦉
- Integração com Framer Motion
- Os componentes na versão nativa já são muito bonitos

### Então o Chakra é perfeito?

---

**Não**

- Qualquer biblioteca que traga tantas facilidades, também traz algumas limitações
- Alguns componentes são muito difíceis de se customizar, outros até impossíveis
- Às vezes somente o CSS puro seria mais fácil
- Alguns desenvolvedores não gostam de estilizar no componente em si

### Qual a saída para esses problemas?

---

Trabalhar junto ao time de design para que as interfaces sejam construídas já se baseando no Chakra.

## Next.js

---

### O que o Next.js?

É um framework React, criado pelo Guilhermo Rauch (Vercel, Socket.IO, mongoose, etc), para produção focado em criar aplicações de altíssima qualidade utilizando os padrões mais atuais de frontend e provendo uma experiência de desenvolvimento produtiva e fácil.

### Quem usa o Next.js hoje?

Github, netflix, nubank, uber, twitch, docker, starbucks, etc

### Por que Next.js?

- Setup Zero Config
- SSG e SSR
- Roteamento Dinâmico (File-system routing)
- Suporte para Typescript built-in
- Monolito (Rotas API)
- Otimização de Imagem
- Deploy
- Entre outros
