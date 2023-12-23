import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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
      <div>
        {selectedCountry && (
          <>
            <h2>{selectedCountry.name.common}</h2>
            <img
              src={selectedCountry.flags?.svg}
              alt={`Flag of ${selectedCountry.name.common}`}
              className="w-[100px] h-[80px]"
            />
            <div>
              <p>Population: {selectedCountry.population}</p>
              <p>Region: {selectedCountry.region}</p>
              <p>Capital: {selectedCountry.capital}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
