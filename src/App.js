import "./App.css";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewBlog from "./components/NewBlog";
import Blogcontent from "./components/Blogcontent";
// import { useState } from "react";

function App() {
  //uncomment below if not using Context API
  // const [data, setdate] = useState([
  //   { title: 1, category: "data 1", content: "shantinath" },
  // ]);

  // const NewData = (event) => {
  //   setdate([...data, event]);
  // };

  return (
    <div className="App">
      <BrowserRouter>
        {/* Without using context API */}
        {/* <Routes>
          <Route path="/" element={<HomePage data={data} />}></Route>
          <Route
            path="/NewBlog"
            element={<NewBlog newData={NewData} />}
          ></Route>
        </Routes> */}
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/NewBlog" element={<NewBlog />}></Route>
          <Route path="/blog/:index" element={<Blogcontent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
