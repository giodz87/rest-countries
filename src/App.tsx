import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Country from "./pages/Country";
function App() {
  const [dark, setDark] = useState<boolean>(false);
  const [getInfo, setGetInfo] = useState<string>("");
  const [info, setInfo] = useState<any[]>([]); // Adjust the type according to your data structure
  const [allCountry, setAllCountry] = useState([]);
  const { userId } = useParams();

  // const getCountry = async () => {
  //   try {
  //     const response = await fetch(
  //       getInfo.trim()
  //         ? `https://restcountries.com/v3.1/name/${getInfo.trim()}`
  //         : "https://restcountries.com/v3.1/all"
  //     );
  //     const data = await response.json();

  //     if (response.ok) {
  //       setInfo(getInfo.trim() ? data : data.slice());
  //     } else {
  //       setInfo([]);
  //     }
  //   } catch (err) {
  //     setInfo([]);
  //   }
  // };

  const getCountry = async () => {
    try {
      const response = await fetch(
        getInfo.trim()
          ? `https://restcountries.com/v3.1/name/${getInfo.trim()}`
          : "https://restcountries.com/v3.1/all"
      );
      const data = await response.json();

      if (response.ok) {
        if (getInfo.trim()) {
          setInfo(data);
        } else {
          setAllCountry(data);
        }
      } else {
        setInfo([]);
      }
    } catch (err) {
      setInfo([]);
      setAllCountry([]);
    }
  };

  return (
    <>
      <Header dark={dark} setDark={setDark} />

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Search
                dark={dark}
                setDark={setDark}
                getInfo={getInfo}
                setGetInfo={setGetInfo}
                info={info}
                setInfo={setInfo}
                getCountry={getCountry}
                allCountry={allCountry}
                setAllCountry={setAllCountry}
              />
            }
          />
          <Route path="/country:" element={<Country />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
