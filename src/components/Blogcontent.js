import React, { useState, useContext } from "react";

import DataContext from "../context/use-context";
import { useLocation, useNavigate } from "react-router-dom";
import Editblog from "./Editblog";
import Navigation from "./Navigation";

const Blogcontent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { content, title } = location.state;
  const [showModal, setShowModal] = useState(false);
  const [newUpdated, setNewUpdated] = useState(content);

  const { data } = useContext(DataContext);
  const { deleteData } = useContext(DataContext);

  //Edit
  const handleEdit = () => {
    setShowModal(!showModal);
  };
  //click anywhere ouside modal to close
  const OnClickClose = (term) => {
    setShowModal(term);
  };
  //save
  const updatedContent = (event) => {
    setShowModal(!showModal);
    setNewUpdated(event);
    console.log(newUpdated);
  };
  //open modal to edit
  const modal = (
    <Editblog
      showModal={showModal}
      OnClickClose={OnClickClose}
      updatedContent={updatedContent}
    >
      {newUpdated}
    </Editblog>
  );

  //delete blog feature
  const handleDelete = () => {
    const newdata = data.filter((ele) => {
      return ele.title !== title;
    });
    deleteData(newdata);
    navigate("/");
  };

  return (
    <div>
      <div className="m-3 flex justify-between items-center">
        <Navigation />
        <div className="m-2 p-2 gap-5 flex justify-around items-center">
          <button className="m-1 py-1 px-3 border border-black rounded">
            Like
          </button>
          <button
            className="m-1 py-1 px-3 border border-black rounded"
            onClick={() => handleEdit()}
          >
            Edit
          </button>
          <button
            className="m-1 py-1 px-3 border border-black rounded"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="m-5 p-2 ">
        <p className="">{newUpdated}</p>
      </div>

      {showModal && modal}
    </div>
  );
};

export default Blogcontent;