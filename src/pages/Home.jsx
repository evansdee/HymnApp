import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./home.module.css";
import logo from "../assets/nil.png";
import { useHymn } from "../hymnContext";
import Nav from "../components/nav";
import { BsThreeDotsVertical } from "react-icons/bs";

function Home() {
  const { bgColor,clr} = useHymn();

  return (
    <div className={styles.home} style={{ background: bgColor }}>
      <Nav clr={clr} head="Home Page" ulNum={[{icon:<BsThreeDotsVertical/>,location:""}]}/>

      <div className={styles.imgs}>
        <img src={logo} alt="" />
      </div>

      <ul className={styles.btnNav} >
        <li style={{background:clr}}>
          <Link to='/hymns'>go to hymns</Link>
        </li>
        <li style={{background:clr}}>
          <Link to='/favourites'>favourites</Link>
        </li>
        <li style={{background:clr}}>
          <Link to='/search-hymns'>search hymns</Link>
        </li>
        <li style={{background:clr}}>
          <Link to='/categories'>categories</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
