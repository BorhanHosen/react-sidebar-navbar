import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const data = [
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

  const [activeLink, setActiveLink] = useState(data[0].title); // Initialize with the first link as active
  const [openMenu, setOpenMenu] = useState(false); // State to track the open submenu

  useEffect(() => {
    // Parse the pathname to get the active link's title from the URL params
    const pathname = location.pathname;
    const activeTitle = data.find((link) => pathname === link.url)?.title;

    if (activeTitle) {
      setActiveLink(activeTitle);
    }
  }, [location.pathname, data]);

  const handleMouseEnter = () => {
    setOpenMenu(true);
  };

  const handleMouseLeave = () => {
    setOpenMenu(false);
  };

  const handleClick = (event, title, url) => {
    event.preventDefault(); // Prevent the default behavior of reloading the page
    setActiveLink(title);
    navigate(url); // Navigate to the specified URL using useNavigate
  };

  return (
    <div className="flex-none bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <a href="/">
            <span className="text-white text-lg font-semibold">Logo</span>
          </a>
        </div>
        <div className="flex">
          {data.map((link, index) => (
            <div key={index} className="relative">
              <a
                href={link.url}
                className={`text-white hover:text-gray-300 block py-2 px-4 hover:bg-gray-700 rounded ${
                  activeLink === link.title
                    ? "font-bold bg-gray-700 rounded"
                    : ""
                }`}
                onClick={(event) => handleClick(event, link.title, link.url)}
                onMouseEnter={index === 2 ? handleMouseEnter : undefined}
                onMouseLeave={index === 2 ? handleMouseLeave : undefined}
              >
                {link.title}
              </a>
              {link.submenu && index === 2 && (
                <div
                  className={`${
                    openMenu ? "block" : "hidden"
                  } absolute top-full left-0 bg-gray-800 shadow-lg rounded mt-1`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {link.submenu.map((sublink, subIndex) => (
                    <a
                      key={subIndex}
                      href={sublink.url}
                      className="block py-2 px-4 text-white hover:bg-gray-700"
                      onClick={(event) =>
                        handleClick(event, sublink.title, sublink.url)
                      }
                    >
                      {sublink.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
