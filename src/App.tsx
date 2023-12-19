import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  const [dark, setDark] = useState<boolean>(false);
  const [getInfo, setGetInfo] = useState<string>("");
  const [info, setInfo] = useState<any[]>([]); // Adjust the type according to your data structure

  return (
    <>
      <Header dark={dark} setDark={setDark} />
      <Search
        dark={dark}
        setDark={setDark}
        getInfo={getInfo}
        setGetInfo={setGetInfo}
        info={info}
        setInfo={setInfo}
      />
      <div></div>
    </>
  );
}

export default App;
