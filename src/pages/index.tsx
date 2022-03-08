import React from "react";
import Head from "next/head";

import { Container } from "../styles/pages/Home";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Chá de fraldas da Celina</title>
      </Head>

      <main>
        <h1>
          <span>Celina.</span>
          <span>Está.</span>
          <span>Chegando.</span>
        </h1>

        <h2>
          Em meio a esse momento que estamos vivendo, mamãe e papai resolveram
          inovar, pensando na saúde de todos, nosso encontro será depois que eu
          sair do forninho 👼🏻. Faremos um chá sorteio para comemorar, e em
          agradecimento a quem participar sortearemos um brinde.😱🎉
        </h2>

        <div className="buttons">
          <Link href="https://listasmagalu.com/chadebebe/celina--andrinne-alves-e-henrique-costa">
            <button>Lista de Presentes</button>
          </Link>
        </div>
      </main>

      <footer>Agradecemos de ❤️.</footer>
    </Container>
  );
};

export default Home;
