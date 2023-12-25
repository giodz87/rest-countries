import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Country from "./pages/Country";
function App() {
  const [dark, setDark] = useState<boolean>(false);
  const [getInfo, setGetInfo] = useState<string>("");
  const [info, setInfo] = useState<any[]>([]);
  const [allCountry, setAllCountry] = useState([]);

  // const { userId } = useParams();

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

  // const getCountry = async () => {
  //   try {
  //     const response = await fetch(`https://restcountries.com/v3.1/all`);
  //     const data = await response.json();
  //     setInfo(data);
  //     setAllCountry(data);
  //   } catch (err) {}
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

  // const getCountry = async () => {
  //   try {
  //     const response = await fetch(
  //       getInfo.trim()
  //         ? `https://restcountries.com/v3.1/name/${getInfo.trim()}`
  //         : "https://restcountries.com/v3.1/all"
  //     );
  //     const data = await response.json();

  //     console.log("Fetched data:", data);

  //     if (response.ok) {
  //       if (getInfo.trim()) {
  //         setInfo(data); // Assuming data is an array of countries
  //         setAllCountry([]); // Clear allCountry when searching by name
  //       } else {
  //         setInfo([]); // Clear info when fetching all countries
  //         setAllCountry(data); // Set allCountry when fetching all countries
  //       }
  //     } else {
  //       setInfo([]);
  //       setAllCountry([]);
  //     }
  //   } catch (err) {
  //     console.error("Error fetching data:", err);
  //     setInfo([]);
  //     setAllCountry([]);
  //   }
  // };

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
          <Route
            path="/:userId"
            element={
              <Country
                dark={dark}
                getCountry={getCountry}
                info={info}
                getInfo={getInfo}
                setGetInfo={setGetInfo}
                allCountry={allCountry}
                setAllCountry={setAllCountry}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
