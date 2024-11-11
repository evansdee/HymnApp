import { Link } from "react-router-dom";


function Nopage() {
    return ( 
        <div>
            Nigga go back

            <Link to={`/`}>
                Go back Home
            </Link>
        </div>
     );
}

export default Nopage;