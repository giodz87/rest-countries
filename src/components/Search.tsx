import search from "../assets/search.svg";
import searchDark from "../assets/searchDark.svg";
import arrow from "../assets/arrow.svg";
import arrowDark from "../assets/arrowDark.svg";
import { useNavigate } from "react-router-dom";
import { Key, useEffect, useState } from "react";

type darkMode = {
  dark: boolean;
  setDark: (dark: boolean) => void;
  getInfo: string;
  setGetInfo: (getInfo: string) => void;
  info: any;
  setInfo: (info: any) => void;
  getCountry: (value: string) => void;
  allCountry: any;
  setAllCountry: (allCountry: any) => void;
};

export default function Search({
  dark,
  setDark,
  getInfo,
  setGetInfo,
  info,
  setInfo,
  getCountry,
  allCountry,
  setAllCountry,
}: darkMode) {
  const [filterByRegion, setFilterByRegion] = useState<boolean>(false);
  const navigate = useNavigate();
  // const getCountry = async () => {
  //   try {
  //     const response = await fetch(
  //       `https://restcountries.com/v3.1/name/${getInfo}`
  //     );
  //     const data = await response.json();

  //     if (response.ok) {
  //       setInfo(data);
  //     } else {
  //       setInfo([]);
  //     }
  //   } catch (err) {}
  // };

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await fetch(
  //         getInfo.trim()
  //           ? `https://restcountries.com/v3.1/name/${getInfo.trim()}`
  //           : "https://restcountries.com/v3.1/all"
  //       );
  //       const data = await response.json();

  //       if (response.ok) {
  //         setInfo(getInfo.trim() ? data : data.slice(157, 165));
  //       } else {
  //         setInfo([]);
  //       }
  //     } catch (err) {
  //       setInfo([]);
  //     }
  //   })();
  // }, [getInfo]);

  useEffect(() => {
    getCountry(getInfo);
  }, [getInfo]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGetInfo(event.target.value);
  };

  return (
    <div
      className={` ${
        dark ? "bg-[#FAFAFA]" : "bg-[#202C36] "
      } transition-colors duration-500 px-4 pt-6 flex flex-col items-start justify-center gap-10 relative`}
      onClick={() => {
        setInfo([]);
      }}
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
          type="text"
          alt="search"
          value={getInfo}
          onChange={handleInputChange}
          placeholder="Search for a country…"
          className={`${
            dark ? "bg-[#FFFFFF] text-black" : "bg-[#2B3844]  text-white"
          } transition-colors duration-500  w-[342px] h-[48px] rounded-[5px] shadow-sm pl-[74px]`}
        />
      </div>
      <div>
        <div
          className={`${
            dark ? " bg-[#FFFFFF]" : "bg-[#2B3844]"
          }  w-[200px] h-[48px] shadow-sm rounded-[5px] pl-[24px] pr-[19px] flex flex-row items-center justify-between  `}
          onClick={() => {
            setFilterByRegion(!filterByRegion);
          }}
        >
          <p
            className={`${
              dark ? "text-[#111517] " : "text-[#fff]"
            } transition-colors duration-500 text-[12px] font-normal leading-[20px]`}
          >
            Filter by Region
          </p>
          {dark ? (
            <img src={arrow} alt="" className=" w-[10px] h-[10px] " />
          ) : (
            <img src={arrowDark} alt="" className=" w-[10px] h-[10px] " />
          )}
        </div>
        {filterByRegion ? (
          <div
            className={`${
              dark ? " bg-[#FFFFFF] text-[#111517]" : "bg-[#2B3844] text-[#fff]"
            }    w-[200px] text-[12px] font-normal leading-4 shadow-sm rounded-[5px] pl-[24px]  flex flex-col items-strart   gap-2 mt-1 py-[16px]  absolute z-10 `}
          >
            <p>Africa</p>
            <p>America</p>
            <p>Asia</p>
            <p>Europe</p>
            <p>Oceania</p>
            <p>Antarctica</p>
          </div>
        ) : (
          ""
        )}
      </div>
      <section
        className={`${
          dark ? "text-[#111517] " : "text-[#fff]"
        } text-[14px] font-semibold leading-[16px] flex flex-col  absolute top-20 w-[342px]  `}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
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
            <div
              onClick={() => {
                navigate(`/${item.name.common}`);
              }}
              key={index}
              className={`${
                dark ? "bg-[#FFF]" : "bg-[#2B3844]"
              } flex flex-row items-start justify-between px-6   shadow-md gap-1`}
            >
              <h2 className="text-[18px] font-extrabold leading-7">
                {item.name?.common}
              </h2>
              <img
                src={item.flags?.svg}
                alt={`Flag of ${item.name?.common}`}
                className="w-[30px] h-[30px]"
              />
            </div>
          )
        )}
      </section>
      <section>
        {allCountry.map((item: any, index: Key | null | undefined) => (
          <div
            onClick={() => {
              navigate(`/${item.name.common}`);
            }}
            key={index}
            className={`${
              dark ? "text-[#111517] " : "text-[#fff] bg-[#2B3844]"
            } mx-[54px] mb-[40px] rounded-[5px] flex flex-col gap-6 shadow-md`}
          >
            <img
              src={item.flags?.svg}
              alt={`Flag of ${item.name?.common}`}
              className=" rounded-t-[5px]"
            />
            <h2 className="text-[18px] font-extrabold leading-7 pl-6">
              {item.name?.common}
            </h2>
            <div className="flex flex-col  gap-2 pl-6 pb-10">
              <p className="flex flex-row gap-1 items-center">
                Population:{" "}
                <p className=" text-[14px] font-light leading-[16px]">
                  {" "}
                  {item.population}
                </p>
              </p>
              <p className="flex flex-row gap-1 items-center">
                Region:{" "}
                <p className=" text-[14px] font-light leading-[16px]">
                  {" "}
                  {item.region}
                </p>
              </p>
              <p className="flex flex-row gap-1 items-center">
                Capital:{" "}
                <p className=" text-[14px] font-light leading-[16px]">
                  {" "}
                  {item.capital}
                </p>
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
