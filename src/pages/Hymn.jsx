import { Link, useNavigate, useParams } from "react-router-dom";
import { useHymn } from "../hymnContext";
import { useEffect } from "react";
import styles from "./hymn.module.css";
import {
    FaBackspace,
    FaHeart,
    FaHome,
    FaRegHeart,
} from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import Nav from "../components/nav";

function Hymn() {
    const { hymns, bgColor, midClr, getFav, clr,handleClearButtonClick } = useHymn();
    const navigate = useNavigate()
    const { id } = useParams();



    const y = hymns.filter((ele) => ele.isFav);
    console.log(y);
    const hymn = hymns.find((ele) => ele.number === id);

    if (!hymn) return;

    console.log(hymn.verses);
    return (
        <div className={styles.hymn}>
            <div className="sticky">

                <Nav
        head="Hymn Details Page"
        ulNum={[{icon:<FaBackspace onClick={() => navigate(-1)}/>},{ icon:<FaHome onClick={() => handleClearButtonClick()}/>,location:'/'}, {icon:<BsThreeDotsVertical />}]}
        />


                <header className={`${styles.header}`} style={{ background: midClr }}>
                    <h3>{hymn.categories}</h3>
                    <h3>LYRICS</h3>
                </header>

                <div className={`${styles.titleHead}`} style={{ background: bgColor }}>
                    <h3>
                        <span> {hymn.number}</span> {hymn.title}
                    </h3>

                    <div className={styles.favIcon} onClick={() => getFav(hymn.number)}>
                        {hymn.isFav ? <FaHeart /> : <FaRegHeart />}
                    </div>
                </div>
            </div>

            <section className={styles.section} style={{ background: bgColor }}>
                {Array.from({ length: hymn.verses.length }, (_, index) => (
                    <div key={index}>
                        <main>
                            <p>

                                {index + 1}
                            </p>
                            <aside>
                                <p>

                                    {hymn.verses[index]}
                                </p>
                                {hymn.chorus && <p><strong>ch:</strong> {hymn.chorus}</p>}
                            </aside>

                        </main>


                    </div>
                ))}
            </section>

            {/* <audio src={hymn.sound}></audio> */}
        </div>
    );
}

export default Hymn;
