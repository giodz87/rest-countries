import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import goBackImg from "../assets/call-made.svg";
type CountryProps = {
  getCountry: (value: string) => void;
  info: any[];
  getInfo: string;
  setGetInfo: (getInfo: string) => void;
  allCountry: any[];
  setAllCountry: (allCountry: any) => void;
};

export default function Country({
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
    <div>
      <button
        onClick={() => {
          goBack();
        }}
        className="flex flex-row items-center gap-2 px-6 py-2 shadow-md"
      >
        {" "}
        <img src={goBackImg} alt="" /> Back
      </button>
      <div>
        {selectedCountry && (
          <>
            <img
              src={selectedCountry.flags?.svg}
              alt={`Flag of ${selectedCountry.name.common}`}
              className="w-[100px] h-[80px]"
            />
            <h2>{selectedCountry.name.common}</h2>

            <div>
              <p>Native Name: {selectedCountry?.nativeName}</p>
              <p>Population: {selectedCountry.population.toLocaleString()}</p>
              <p>Region: {selectedCountry.region}</p>
              <p>Sub Region: {selectedCountry.subregion}</p>
              <p>Capital: {selectedCountry.capital}</p>
            </div>

            <div>
              <p>Top Levle Domain: {selectedCountry.tld}</p>
              <p>Currencies: </p>
              <p>Languages: </p>
            </div>
            <div>
              <p>Border Countries: </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
