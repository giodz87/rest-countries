import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

type country = {
  getCountry: (value: string) => void;
  info: any;

  getInfo: string;
  setGetInfo: (getInfo: string) => void;

  allCountry: any;
  setAllCountry: (allCountry: any) => void;
};

export default function Country({
  getCountry,
  info,
  getInfo,
  setGetInfo,
  allCountry,
  setAllCountry,
}: country) {
  const { userId } = useParams<{ userId?: string }>();
  const [countryId, setCountryId] = useState<string>();
  useEffect(() => {
    if (userId) {
      localStorage.setItem("userId", userId);
      getCountry(userId);
    }
  }, [userId]);
  const dodo = info.filter(() => {
    info.id?.common == userId;
  });
  console.log(info.name?.common);
  console.log(userId);
  return (
    <div>
      <div>
        <div>
          <h2>{dodo.name}</h2>
          <img
            src={info.flags?.svg}
            alt={`Flag of ${info?.name?.common}`}
            className="w-[100px] h-[80px]"
          />
          <div>
            <p>Population: {info.population}</p>
            <p>Region: {info.region}</p>
            <p>Capital: {info.capital}</p>
          </div>
          <div>dodo{allCountry.name?.common}</div>
        </div>
      </div>
    </div>
  );
}
