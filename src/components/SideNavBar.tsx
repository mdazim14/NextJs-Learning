import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";

const sideBarItems = [
  {
    title: "Home",
    url: "/home",
  },
  {
    title: "Blog",
    url: "/blog",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Service",
    url: "/service",
  },
  {
    title: "Address",
    url: "/address",
  },
];
type PropsType = {
  toggleSideBar: (isToggle: boolean) => void;
};
const SideNavBar: FC<PropsType> = ({ toggleSideBar }) => {
  const router = useRouter();
  console.log(router);

  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div style={{
        width: !toggle?"250px": "80px",
        height: "100vh",
        borderRight: "3px solid red",
        backgroundColor: "lightgreen",
        overflow: "hidden",
        transition: "0.5s"
      }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          margin: "20px",
        }}
      >
        <button
          onClick={handleClick}
          style={{ padding: "5px", fontWeight: "bold", fontSize: "14px" }}
        >
          Click
        </button>
      </div>

      <div
        className="sideBarItems"
        style={{ display: "flex", flexDirection: "column", marginTop: "120px" }}
      >
        {sideBarItems.map((item, idx) => (
          <Link
            key={idx}
            style={{
              marginTop: "10px",
              fontSize: "20px",
              color: "red",
              fontWeight: "bold",
              textDecoration: "none",
              backgroundColor: router.pathname === item.url ? "white" : "",
            }}
            href={item.url}
          >
            {/* {toggle? <h5>H</h5> : `${item.title}` } */}
            {toggle? <h5>H</h5> : <h5>{item.title}`</h5> }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideNavBar;
