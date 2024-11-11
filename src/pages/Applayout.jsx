import { useEffect } from "react";
import { useState } from "react";

function Applayout() {
  const [hymns, setHymns] = useState(null);
  const [inp, setInp] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const url = "http://localhost:8000/hymns";

  useEffect(() => {
    async function fetchHymn() {
      const res = await fetch(`${url}`);

      const data = await res.json();
      setHymns(data);
      setIsLoading(false);
    }

    fetchHymn();
  }, []);

  const y = hymns?.filter((ele) => {
    return `${ele.title} ${ele.number}`
      .toLocaleLowerCase()
      .includes(inp.toLocaleLowerCase());
  });

  console.log(y);

  if (isLoading) return <p>....Losding</p>;
  return (
    <div>
      <input type="text" value={inp} onChange={(e) => setInp(e.target.value)} />

      {inp && y.map((ele) => <p key={ele.title}>{ele.title}</p>)}
    </div>
  );
}

export default Applayout;
