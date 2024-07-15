import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

export const data = [
  { title: "Home", url: "/home" },
  { title: "About", url: "/about" },
  {
    title: "Services",
    url: "/services",
    submenu: [
      { title: "Web Development", url: "/services/web-development" },
      { title: "App Development", url: "/services/app-development" },
    ],
  },
  { title: "Contact", url: "/contact" },
];

const Sidebar = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-64 p-4 bg-gray-900 text-white border-r-[1px] border-slate-600">
      <h2 className="text-xl font-bold">My Sidebar</h2>
      <div className="mt-4">
        {data.map((item, index) => (
          <div key={index}>
            {item.submenu ? (
              <>
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full text-left py-2 px-4 hover:bg-gray-700 rounded focus:outline-none flex justify-between items-center"
                >
                  {item.title}
                  <i className={`${openIndex === index ? "up" : "down"}`}>
                    {openIndex === index ? <FaAngleUp /> : <FaAngleDown />}
                  </i>
                </button>
                {openIndex === index && (
                  <div className="ml-4">
                    {item.submenu.map((subItem, subIndex) => (
                      <NavLink
                        key={subIndex}
                        to={subItem.url}
                        className={({ isActive }) =>
                          isActive
                            ? "block py-2 px-4 bg-gray-700 rounded"
                            : "block py-2 px-4 hover:bg-gray-700 rounded"
                        }
                      >
                        {subItem.title}
                      </NavLink>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <NavLink
                to={item.url}
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-4 bg-gray-700 rounded"
                    : "block py-2 px-4 hover:bg-gray-700 rounded"
                }
              >
                {item.title}
              </NavLink>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
