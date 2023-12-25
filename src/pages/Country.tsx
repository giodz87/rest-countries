import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import goBackImg from "../assets/call-made.svg";
type CountryProps = {
  dark: boolean;
  getCountry: (value: string) => void;
  info: any[];
  getInfo: string;
  setGetInfo: (getInfo: string) => void;
  allCountry: any[];
  setAllCountry: (allCountry: any) => void;
};

export default function Country({
  dark,
  getCountry,
  info,
  getInfo,
  setGetInfo,
  allCountry,
  setAllCountry,
}: CountryProps) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const { userId } = useParams<{ userId?: string }>();
  const [selectedCountry, setSelectedCountry] = useState<any | undefined>(
    undefined
  );

  useEffect(() => {
    // Find the country based on the user ID
    const foundCountry = info.find(
      (item) => item.name.common?.toLowerCase() === userId?.toLowerCase()
    );

    // If not found in the filtered info, look in allCountry
    if (!foundCountry) {
      const foundAllCountry = allCountry.find(
        (item) => item.name.common?.toLowerCase() === userId?.toLowerCase()
      );
      setSelectedCountry(foundAllCountry);
    } else {
      setSelectedCountry(foundCountry);
    }
  }, [userId, info, allCountry]);

  return (
    <div
      className={`w-full ${
        dark ? "bg-[#FAFAFA] text-black" : "bg-[#202C36]  text-white"
      } transition-colors duration-500  flex flex-col items-start justify-center gap-[64px]`}
    >
      <button
        onClick={() => {
          goBack();
        }}
        className="flex flex-row items-center gap-2 px-6 py-2 shadow-md  mt-[40px]"
      >
        {" "}
        <img src={goBackImg} alt="" /> Back
      </button>
      <div className="flex flex-col gap-8">
        {selectedCountry && (
          <>
            <img
              src={selectedCountry.flags?.svg}
              alt={`Flag of ${selectedCountry.name.common}`}
            />
            <div className=" flex flex-col gap-2">
              <h2 className=" text-[22px] font-extrabold  ">
                {selectedCountry.name.common}
              </h2>
              <div className="text-14px font-light opacity-[0.7] flex flex-col gap-1 ">
                <p>Native Name: {selectedCountry?.nativeName}</p>
                <p>Population: {selectedCountry.population.toLocaleString()}</p>
                <p>Region: {selectedCountry.region}</p>
                <p>Sub Region: {selectedCountry.subregion}</p>
                <p>Capital: {selectedCountry.capital}</p>
              </div>
            </div>

            <div className="text-14px font-light">
              <p>Top Levle Domain: {selectedCountry.tld}</p>
              <p>Currencies: </p>
              <p>Languages: </p>
            </div>
            <div>
              <p className="text-[16px] leading-[24px] font-semibold">
                Border Countries:
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
