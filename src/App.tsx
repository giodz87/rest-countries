import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  const [dark, setDark] = useState<boolean>(false);

  return (
    <>
      <Header dark={dark} setDark={setDark} />
      <Search dark={dark} setDark={setDark} />
      <div></div>
    </>
  );
}

export default App;
