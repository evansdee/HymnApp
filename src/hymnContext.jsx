import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import{hymns} from "../data";

const HymnContext = createContext();
const init = {
  bgColor: "#c8e6c9",
  clr: "green",
  midClr: "#a5d6a7",
  hymns: [...hymns],
};
const url = "http://localhost:8000";

function reducer(state, action) {
  switch (action.type) {
    case "DarkMode":
      return { ...state, bgColor: "#28282b5b", clr: "#28282b" };
 
    case "updateHymn":
      return { ...state, hymns: action.payload };
    default:
      return state;
  }
}


function HymnProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, init);
  const { bgColor, clr, hymns, hymn, midClr } = state;

  const [text, setText] = useState("");

  function handleClearButtonClick() {
    setText("");
  }

 
//   async function getHymn(id) {
//     const res = await fetch(`${url}/hymns/${id}`);

//     const data = await res.json();
//     dispatch({ type: "Hymn", payload: data });
//   }

  async function getFav(id) {
    const update = hymns.map((ele) => {
      return ele.number === id ? { ...ele, isFav: !ele.isFav } : ele;
    });

    dispatch({ type: "updateHymn", payload: update });

  }

  //   function getFav(id) {
  //     const update = hymns.map((ele) => {
  //       return ele.id === id ? { ...ele, isFav: !ele.isFav } : ele;
  //     });

  //     dispatch({ type: "updateHymn", payload: update });
  //   }

  return (
    <HymnContext.Provider
      value={{
        midClr,
        bgColor,
        clr,
        hymns,
        hymn,
        text,
        setText,
        dispatch,
        handleClearButtonClick,
        getFav,
      }}
    >
      {children}
    </HymnContext.Provider>
  );
}

function useHymn() {
  const context = useContext(HymnContext);

  return context;
}

export { useHymn, HymnProvider };
