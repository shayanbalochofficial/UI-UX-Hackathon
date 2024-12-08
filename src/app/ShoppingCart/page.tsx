import React from "react";
import Nav2 from "@/components/Nav2";
import Body from "./components/body";
import Header from "./components/header";

function page() {
  return (
    <>
          <Nav2 />
          <Header />
      <div className="w-full bg-white">
        <Body />
      </div>
    </>
  );
}

export default page;
