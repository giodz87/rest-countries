import search from "../assets/search.svg";
import searchDark from "../assets/searchDark.svg";
import arrow from "../assets/arrow.svg";
import arrowDark from "../assets/arrowDark.svg";
import { useNavigate } from "react-router-dom";
import { Key, useState } from "react";

type darkMode = {
  dark: boolean;
  getCountry: (value: string) => void;
  allCountry: any;
  setAllCountry: (value: any) => void;
  setSearchData: (value: any) => void;
  searchData: any;
};

export default function Search({
  dark,
  allCountry,
  setAllCountry,
  searchData,
  setSearchData,
}: darkMode) {
  const [filterByRegion, setFilterByRegion] = useState<boolean>(false);
  const navigate = useNavigate();
  console.log(allCountry);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(
      allCountry.filter((item: any) =>
        item.name.common
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      )
    );
  };

  // const handleRegionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const findRegion = allCountry.filter((item: any) => {
  //     item.region.toLowerCase().includes(event.target.value.toLowerCase());
  //   });
  //   setAllCountry(findRegion);
  // };

  const handleRegionChange = (region: string) => {
    const findRegion = allCountry.filter((item: any) =>
      item.region.toLowerCase().includes(region.toLowerCase())
    );

    setAllCountry(findRegion);
  };

  return (
    <div
      className={` ${
        dark ? "bg-[#FAFAFA]" : "bg-[#202C36] "
      } transition-colors duration-500 px-4 pt-6 flex flex-col items-start justify-center gap-10 w-full relative `}
      onClick={() => {
        // searchData([]);
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
          onChange={handleInputChange}
          placeholder="Search for a country…"
          className={`${
            dark ? "bg-[#FFFFFF] text-black" : "bg-[#2B3844]  text-white"
          } transition-colors duration-500 mx-4  w-[343px] h-[48px] rounded-[5px] shadow-sm pl-[74px]`}
        />
      </div>
      <div>
        <div
          className={`${
            dark ? " bg-[#FFFFFF]" : "bg-[#2B3844]"
          }  w-[200px] h-[48px] shadow-sm mx-4 rounded-[5px] pl-[24px] pr-[19px] flex flex-row items-center justify-between  `}
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
            }    w-[200px] text-[12px] font-normal leading-4 shadow-sm rounded-[5px] pl-[24px]  flex flex-col items-strart  justify-start  gap-2 mt-1 py-[16px]  absolute z-10  mx-4`}
          >
            <p
              onClick={() => {
                handleRegionChange("Africa"),
                  setFilterByRegion(!filterByRegion);
              }}
            >
              Africa
            </p>
            <p onClick={() => handleRegionChange("America")}>America</p>
            <p onClick={() => handleRegionChange("Asia")}>Asia</p>
            <p onClick={() => handleRegionChange("Europe")}>Europe</p>
            <p onClick={() => handleRegionChange("Oceania")}>Oceania</p>
          </div>
        ) : (
          ""
        )}
      </div>
      <section
        className={`${
          dark ? "text-[#111517] " : "text-[#fff]"
        } text-[14px] font-semibold leading-[16px] flex flex-col  absolute top-20 w-[342px]   `}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {searchData.map(
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
            } mx-[54px] mb-[40px] rounded-[5px] flex flex-col gap-6 shadow-md w-[264px] `}
          >
            <img
              src={item.flags?.svg}
              alt={`Flag of ${item.name?.common}`}
              className=" rounded-t-[5px] w-[264px]"
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
