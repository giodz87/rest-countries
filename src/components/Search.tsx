import search from "../assets/search.svg";
import searchDark from "../assets/searchDark.svg";
import arrow from "../assets/arrow.svg";
import arrowDark from "../assets/arrowDark.svg";
type darkMode = {
  dark: boolean;
  setDark: (dark: boolean) => void;
};

export default function Search({ dark, setDark }: darkMode) {
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
    </div>
  );
}
