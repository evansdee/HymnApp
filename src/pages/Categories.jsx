import { func } from "prop-types";
import { catName,catBody } from "../../data";

function Category() {

console.log(catName)
    
    return ( 
        <>
        <ul>
            {
                catName.map(ele=>{
                    return <LiElement key={ele} ele={ele}/>
                })
            }
        </ul>
        </>
     );
}

export default Category;

function LiElement({ele}){
    return <li>
        
    </li>
}