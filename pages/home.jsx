import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import Navbar from "@/components/Layout";
import Layout from "@/components/Layout";

const Home = () => {
  return (
     <Layout>
    <div className=" h-full">
      <div className=" fixed w-full">
       
      </div>
      <div className=" flex h-full">
        <Sidebar />
        <Chat />
      </div>
    </div>
     </Layout>
  );
};

export default Home;
