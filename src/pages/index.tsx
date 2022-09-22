import type { NextPage } from "next";
import { SendTicket } from "./sendTicket";

const Home: NextPage = () => {
  const onClick = () => {
    console.log("here");
  };
  return <SendTicket message="test" title="title" onClick={onClick} />;
};

export default Home;
