import darkImg from "../assets/dark.svg";
import lightImg from "../assets/light.svg";
import "../index.css";
type darkMode = {
  dark: boolean;
  setDark: (dark: boolean) => void;
};

export default function Header({ dark, setDark }: darkMode) {
  return (
    <header
      className={`${
        dark ? " bg-white" : " bg-[#2B3844]"
      } flex flex-row items-center justify-between px-4 w-[375px] h-[80px] shadow-md `}
    >
      <h2 className={`${dark ? "text-[#111517]" : "text-white"}`}>
        Where in the world?
      </h2>
      <button
        onClick={() => {
          setDark(!dark);
        }}
        className="flex flex-row items-center justify-center gap-2"
      >
        {dark ? <img src={darkImg} alt="" /> : <img src={lightImg} alt="" />}{" "}
        <p className={`${dark ? "text-[#111517]" : "text-white"}`}>Dark Mode</p>
      </button>
    </header>
  );
}
