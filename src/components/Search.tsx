import search from "../assets/search.svg";
import searchDark from "../assets/searchDark.svg";
import arrow from "../assets/arrow.svg";
import arrowDark from "../assets/arrowDark.svg";
import { Key } from "react";
import { useEffect } from "react";
type darkMode = {
  dark: boolean;
  setDark: (dark: boolean) => void;
  getInfo: string;
  setGetInfo: (getInfo: string) => void;
  info: any;
  setInfo: (info: any) => void;
};

export default function Search({
  dark,
  setDark,
  getInfo,
  setGetInfo,
  info,
  setInfo,
}: darkMode) {
  const getCountry = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${getInfo}`
      );
      const data = await response.json();

      if (response.ok) {
        setInfo(data);
      }
    } catch (err) {}
  };

  useEffect(() => {
    getCountry();
  }, [getInfo]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGetInfo(event.target.value);
  };

  const regions = [
    { name: "europe", label: "E" },
    { name: "america", label: "A" },
    { name: "azia", label: "A" },
    /// ??? wtf :D :D :D
  ];

  return (
    <div
      className={` ${
        dark ? "bg-[#FAFAFA]" : "bg-[#202C36] "
      } px-4 pt-6 flex flex-col items-center justify-center gap-10`}
    >
      <div className="relative ">
        {" "}
        {dark ? (
          <img
            src={search}
            alt=""
            className=" absolute w-[16px] h-[16px] left-8 top-4"
          />
        ) : (
          <img
            src={searchDark}
            alt=""
            className="absolute w-[16px] h-[16px] left-8 top-4"
          />
        )}
        <input
          type="search"
          alt="search"
          value={getInfo}
          onChange={handleInputChange}
          placeholder="Search for a country…"
          className={`${
            dark ? "bg-[#FFFFFF]" : "bg-[#2B3844]"
          }   w-[342px] h-[48px] rounded-[5px] shadow-sm pl-[74px]`}
        />
      </div>

      <div
        className={`${
          dark ? " bg-[#FFFFFF]" : "bg-[#2B3844]"
        } w-[200px] h-[48px] shadow-sm rounded-[5px] pl-[24px] pr-[19px] flex flex-row items-center justify-between  `}
      >
        <p
          className={`${
            dark ? "text-[#111517] " : "text-[#fff]"
          } text-[12px] font-normal leading-[20px]`}
        >
          Filter by Region
        </p>
        {dark ? (
          <img src={arrow} alt="" className=" w-[10px] h-[10px] " />
        ) : (
          <img src={arrowDark} alt="" className=" w-[10px] h-[10px] " />
        )}
      </div>
      <section className="">
        {info.map(
          (
            item: {
              name: { common: string };
              population: number;
              region: string[];
              flags: { svg: string };
              capital: string[];
            },
            index: React.Key | null | undefined
          ) => (
            <div key={index}>
              <img src={item.flags?.svg} alt={`Flag of ${item.name?.common}`} />
              <h2>{item.name?.common}</h2>
              <p>Population: {item.population}</p>
              <p>Region: {item.region?.[0]}</p>
              <p>Capital:{item.capital}</p>
            </div>
          )
        )}
      </section>
    </div>
  );
}
