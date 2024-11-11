import { Link, useHref, useNavigate } from "react-router-dom";
import styles from "./nav.module.css";
import { useState } from "react";
import { useHymn } from "../hymnContext";

function Nav({
  head = "Head Text",
  ulNum = [],
  clr = "green",
}) {

  const {isBool} = useHymn()
  return (
    <nav className={styles.nav} style={{ background: clr }}>
      {
        <>
          <h1>{head}</h1>

          <ul className={styles.ulNav}>
            {Array.from({ length: ulNum.length }, (_, index) => (
              <LiElement
                key={index}
                index={index}
                ulNum={ulNum}
              />
            ))}
          </ul>
        </>
      }
    </nav>
  );
}

function LiElement({ index, ulNum }) {
  const {setIsBool} = useHymn()

  const navigate = useNavigate()

  return (
    <li>
      <Link
      to={ulNum[index].location}
      >
        {ulNum[index].icon}
      </Link>
    </li>
  );
}
export default Nav;
