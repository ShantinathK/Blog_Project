import React from "react";

import Bloglist from "./Bloglist";
import Navigation from "./Navigation";

// const HomePage = ({ data }) => {
const HomePage = () => {
  return (
    <div className="w-full">
      <div className="w-full h-full m-2 p-2 flex justify-end items-end">
        <button>
          {/* without ContextAPI */}
          {/* <Navigation data={data} />  */}
          <Navigation />
        </button>
      </div>

      <div>
        {/* without ContextAPI */}
        {/* <Bloglist data={data} /> */}
        <Bloglist />
      </div>
    </div>
  );
};

export default HomePage;
