import { useState, createContext } from "react";

const DataContext = createContext();

function Provider({ children }) {
  const [data, setdata] = useState([
    { title: 1, category: "data 1", content: "shantinath" },
  ]);

  const NewData = (event) => {
    setdata([...data, event]);
  };
  const editData = (title, updatedContent) => {
    const updatedData = data.map((post) =>
      post.title === title ? { ...post, content: updatedContent } : post
    );
    setdata(updatedData);
  };
  const deleteData = (event) => {
    setdata(event);
  };
  const valueToShare = {
    data,
    NewData,
    deleteData,
    editData,
  };
  return (
    <DataContext.Provider value={valueToShare}>{children}</DataContext.Provider>
  );
}

export { Provider };
export default DataContext;
