import type { NextPage } from "next";
import { SendTicket } from "./components/sendTicket";

const Home: NextPage = () => {
  const onClick = () => {
    console.log("here");
  };
  return (
    <>
      <div className="container mx-auto">
        <section className="mt-10 flex  w-full justify-center">
          <SendTicket message="test" title="title" onClick={onClick} />
        </section>
      </div>
    </>
  );
};

export default Home;
