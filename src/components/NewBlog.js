import React, { useContext, useState } from "react";
import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";
import DataContext from "../context/use-context";

const NewBlog = ({ data, newData }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    content: "",
  });
  const { NewData } = useContext(DataContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // newData(formData); //without using context API
    NewData(formData);
    setFormData({
      title: "",
      category: "",
      content: "",
    });
    navigate("/");
  };

  const handleCancel = () => {
    // Add your cancel logic here
    navigate("/");
  };

  return (
    <div>
      <Navigation />
      NewBlog
      <div className="container mx-auto py-8">
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="form-input border border-black rounded mt-1 block w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700">
              Category:
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="form-input border border-black rounded mt-1 block w-full"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="content" className="block text-gray-700">
              Content:
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows="6"
              className="form-textarea border border-black rounded mt-1 block w-full"
              required
            ></textarea>
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewBlog;
