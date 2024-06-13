import React from "react";
import { useNavigate } from "react-router-dom";

const Showblog = ({ ele, index }) => {
  const navigate = useNavigate();
  const handleClick = (index) => {
    // Navigate to a new page with the content of the clicked blog as a URL parameter
    navigate(`/blog/${index}`, {
      state: { content: ele.content, title: ele.title },
    });
  };
  return (
    <div className=" w-full m-1 p-2 border border-black rounded cursor-pointer">
      <h1 onClick={() => handleClick(index)}>
        <span>{index + 1}.</span> {ele.title}
      </h1>
    </div>
  );
};

export default Showblog;
