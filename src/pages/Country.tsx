import { useParams, useNavigate } from "react-router-dom";
import goBackImg from "../assets/call-made.svg";
import goBackWhiteImg from "../assets/call-w.svg";
type CountryProps = {
  dark: boolean;

  allCountry: any[];
};

export default function Country({ dark, allCountry }: CountryProps) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const { userId } = useParams<{ userId?: string }>();

  const foundCountry = allCountry.find(
    (item) => item.name.common?.toLowerCase() === userId?.toLowerCase()
  );

  console.log(foundCountry.name.common);
  return (
    <div
      className={`w-full ${
        dark ? "bg-[#FAFAFA]  text-black" : "bg-[#202C36]  text-white"
      } transition-colors duration-500  flex flex-col items-start  gap-[64px] px-7 h-full`}
    >
      <button
        onClick={() => {
          goBack();
        }}
        className="flex flex-row items-center gap-2 px-6 py-2 shadow-md  mt-[40px]"
      >
        {" "}
        {dark ? (
          <img src={goBackImg} alt="" />
        ) : (
          <img src={goBackWhiteImg} alt="" />
        )}
        Back
      </button>
      <div className="flex flex-col gap-8  h-full">
        <>
          <div className="flex gap-10 flex-col xl:flex-row xl:items-center xl:justify-center xl:gap-[120px] ">
            <img
              src={foundCountry.flags?.svg}
              alt={`Flag of ${foundCountry.name.common}`}
              className="xl:w-[550px]"
            />

            <div className=" flex flex-col gap-2">
              <h2 className=" text-[22px] font-extrabold  ">
                {foundCountry.name.common}
              </h2>
              <div className="text-14px font-light opacity-[0.7] flex flex-col gap-1 ">
                <p>
                  {" "}
                  <span> Native Name: </span>
                  {foundCountry.name.common}
                </p>
                <p>
                  {" "}
                  <span>Population: </span>{" "}
                  {foundCountry.population.toLocaleString()}
                </p>
                <p>
                  {" "}
                  <span> Region: </span>
                  {foundCountry.region}
                </p>
                <p>
                  {" "}
                  <span> Sub Region: </span>
                  {foundCountry.subregion}
                </p>
                <p>
                  {" "}
                  <span>Capital: </span> {foundCountry.capital}
                </p>
              </div>
            </div>

            <div className="text-14px font-light opacity-[0.7] flex flex-col gap-1 ">
              <p>
                {" "}
                <span>Top Levle Domain:</span> {foundCountry.tld}
              </p>
              <p>
                {" "}
                <span> Currencies: </span>
                {foundCountry.currencies.name}{" "}
              </p>
              <p>
                <span> Languages: </span>
                {foundCountry.languages.eng}{" "}
              </p>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}
