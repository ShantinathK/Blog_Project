import React, { useContext } from "react";
import Showblog from "./Showblog";
import DataContext from "../context/use-context";

//  without ContextAPI
// const Bloglist = ({ data }) => {
const Bloglist = () => {
  const { data } = useContext(DataContext);
  const renderedData = data.map((ele, i) => {
    return <Showblog key={ele.title} ele={ele} index={i} />;
  });
  return (
    <div>
      <ul className="m-2 p-2">{renderedData}</ul>
    </div>
  );
};

export default Bloglist;
