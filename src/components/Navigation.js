import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const location = useLocation();
  const Navi = React.useMemo(
    () => [
      { name: "HomePage", value: "back to home", path: "/" },
      { name: "NewBlog", value: "New Post", path: "/NewBlog" },
    ],
    []
  );

  useEffect(() => {
    const pathname = location.pathname;
    const matchedOption = Navi.find((item) => item.path === pathname);
    setSelectedOption(matchedOption ? matchedOption.name : null);
  }, [location, Navi]);
  return (
    <div>
      <div className="w-full md:flex md:justify-between md:items-center ">
        <div className="m-3 gap-4 bg-white/30 rounded-full backdrop-blur-xl ring-transparent">
          {Navi.map((item) => {
            return (
              <Link
                key={item.name}
                to={item.path}
                className={` m-2 p-2 px-4 font-medium rounded-3xl text-gray-500 hover:text-gray-800  ${
                  selectedOption !== item.name
                    ? "border border-black border-5"
                    : ""
                } focus:outline-none focus:ring-2 focus:ring-inset focus:ring-transparent`}
              >
                {selectedOption !== item.name ? item.value : ""}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
