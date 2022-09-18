import type { NextPage } from "next";
import Container from "../layouts/Container";

const Home: NextPage = () => {
  return (
    <>
      <section className="my-32 pt-8">
        <Container>
          <p className="mt-8 text-center text-2xl">
            Get Started Template built with Next JS and Tailwind CSS. <br /> It
            {"'"}s a great starting point for your next Next.js project.
          </p>
        </Container>
      </section>
    </>
  );
};

export default Home;
