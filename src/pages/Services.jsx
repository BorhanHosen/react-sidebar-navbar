import { Outlet } from "react-router-dom";

const Services = () => {
  return (
    <div className="flex justify-center flex-col">
      <h1 className="flex justify-center text-5xl font-bold text-white mt-10">
        Services Page
      </h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Services;
