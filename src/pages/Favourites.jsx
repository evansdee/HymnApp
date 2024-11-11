import { FaHome } from "react-icons/fa";
import Nav from "../components/nav";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useHymn } from "../hymnContext";
import { Link } from "react-router-dom";

function Favourites() {
    const { hymns, clr } = useHymn()
    const favHymn = hymns.filter(ele => ele.isFav)

    console.log(favHymn)
    const p = {
        textAlign: 'center',
        margin: "3em auto",
        color: clr,
        fontSize: '2em'
    }

    return (
        <>
            <Nav head="Favourite Page" ulNum={[{ icon: <FaHome />, location: '/' }, { icon: <BsThreeDotsVertical /> }]} />

            {favHymn.length ===0 ? <p style={p}>No Favourite Hymn</p> : <ul className="ul">
                {
                    favHymn.map(ele => (<li key={ele.number} style={{ borderBottom: `solid 2px ${clr}` }}><Link to={`/search-hymns/${ele.number}`}>{ele.number}. {ele.title}</Link></li>))
                }
            </ul>}

        </>
    );
}

export default Favourites;