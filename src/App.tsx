import { useEffect, useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Country from "./pages/Country";
function App() {
  const [dark, setDark] = useState<boolean>(false);
  const [searchData, setSearchData] = useState<any[]>([]);
  const [allCountry, setAllCountry] = useState<any>([]);

  useEffect(() => {
    getCountry();
  }, []);

  const getCountry = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();

      if (response.ok) {
        setAllCountry(data);
      } else {
        setAllCountry([]);
      }
    } catch (err) {
      setAllCountry([]);
    }
  };

  return (
    <BrowserRouter>
      <Header dark={dark} setDark={setDark} />
      <Routes>
        <Route
          path="/"
          element={
            <Search
              dark={dark}
              getCountry={getCountry}
              allCountry={allCountry}
              setAllCountry={setAllCountry}
              setSearchData={setSearchData}
              searchData={searchData}
            />
          }
        />
        <Route
          path="/:userId"
          element={<Country dark={dark} allCountry={allCountry} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
