import { useState } from "react";

import ReactDOM from "react-dom";

function Editblog({ OnClickClose, showModal, children, updatedContent }) {
  const [term, setTerm] = useState(null);
  const [newContent, setNewcontent] = useState(children);
  // close
  const Close = () => {
    setTerm(true);
    OnClickClose(term);
  };
  //track changes done in text area
  const handleChange = (e) => {
    console.log(e.target.value);
    setNewcontent(e.target.value);
  };
  //update changes
  const handleClick = () => {
    updatedContent(newContent);
  };

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={Close}
        className="absolute inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="absolute inset-40 p-9 bg-white">
        {children}
        <textarea
          id="content"
          name="content"
          value={newContent}
          onChange={handleChange}
          rows="6"
          className="form-textarea border border-black rounded mt-1 block w-full"
          required
        ></textarea>
        <button
          onClick={handleClick}
          className="m-1 py-1 px-3 border border-black rounded"
        >
          Save
        </button>
      </div>
    </div>,
    document.querySelector(".modal-container") // modal-container in index.html
  );
}

export default Editblog;
