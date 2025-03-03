import { Link, Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <>
      <Outlet />
      <Link to={"/"} style={{ padding: "1rem" }}>
        <button>Back</button>
      </Link>
    </>
  );
};

export default HomeLayout;
