import Nav from "../components/nav";
import { FaHome, FaSearch } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useHymn } from "../hymnContext";
import { Link } from "react-router-dom";
import styles from "./search.module.css";
import { useState } from "react";
import InputField from "../components/inputField";

function SearchHymn() {
  const [isBool, setIsBool] = useState(false);

  const { text,handleClearButtonClick,hymns, clr} = useHymn();

  const searchText = hymns
    ?.filter((ele) => {
      return `${ele.title} ${ele.number} ${ele.chorus}`
        .toLocaleLowerCase()
        .includes(text.toLocaleLowerCase());
    })
    .map((ele) => <LiElement key={ele.number} ele={ele} />);

  const fullText = hymns.map((ele) => <LiElement key={ele.number} ele={ele} />);

  return (
    <>
 
      <nav className={styles.nav} style={{ background: clr }} onMouseLeave={()=>setIsBool(false)}>
        {!isBool ? (
          <>
            <h1>Search Hymn</h1>

            <ul className={styles.ulNav}>
              <li>
                <Link>
                  <FaSearch onClick={() => setIsBool(true)} />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaHome onClick={()=>handleClearButtonClick()}/>
                </Link>
              </li>
              <li>
                <Link>
                  <BsThreeDotsVertical />
                </Link>
              </li>
            </ul>
          </>
        ) : (
          <>
            <InputField />
            <Link to="/">
              <FaHome onClick={()=>handleClearButtonClick()} className={styles.homeIcon}/>
            </Link>
          </>
        )}
      </nav>

      <ul className='ul'>{text ? searchText : fullText}</ul>
    </>
  );
}

function LiElement({ ele }) {
  const { clr } = useHymn();

  return (
    <li style={{ borderBottom: `solid 2px ${clr}` }}>
      <Link to={ele.number}>
        {ele.number}. {ele.title}
      </Link>
    </li>
  );
}
export default SearchHymn;
