import BarGraph from "./BarGraph";
import ProgressGraph from "./ProgressGraph";

export default function Home() {
  return (
    <div className="bg-white flex flex-col justify-start items-start h-screen w-1/2 px-10 max-xs:px-5 overflow-hidden max-xs:w-full max-xs:h-full ">
      <div className="flex flex-col justify-start items-start font-pt-serif mt-14 max-xs:mt-5 w-full">
        <h3 className="text-our-blue capitalize text-sm max-xs:text-base tracking-wide font-semibold max-xs:px-5">
          retirement income
        </h3>
        <h1 className="capitalize tracking-wide text-lg max-xs:text-xl font-semibold font-mulish max-xs:px-5">
          starting year 2056
        </h1>
        <div className="flex flex-row max-xs:flex-col items-start justify-between max-xs:justify-center w-full max-xs:h-full font-mulish mt-6 max-xs:px-5 max-xs:mb-5">
          <div className="flex flex-col justify-start items-start w-1/4 max-xs:w-full max-xs:my-5">
            <h1 className="font-bold text-xl tracking-wide max-xs:text-3xl">$300,000</h1>
            <p className="text-gray-500 capitalize text-xs max-xs:text-sm pt-1">my goal</p>
            <hr className="h-0.5 -bg-our-light-blue w-full my-2" />
          </div>
          <div className="flex flex-row justify-between items-center w-full mb-4">
            <div className="flex flex-col justify-start items-start lg:mx-auto w-1/4 max-xs:w-2/5 ">
              <h1 className="font-bold text-xl tracking-wide max-xs:text-2xl">59%</h1>
              <p className="text-gray-500 capitalize text-xs max-xs:text-sm pt-1">
                goal achieved
              </p>
              <hr className="h-0.5 -bg-our-light-blue w-full my-2" />
            </div>
            <div className="flex flex-col justify-start items-start w-1/4 max-xs:w-1/2 ">
              <h1 className="font-bold text-xl tracking-wide max-xs:text-2xl">$300</h1>
              <p className="text-gray-500 capitalize text-xs max-xs:text-sm pt-1">
                est. monthly income
              </p>
              <hr className="h-0.5 -bg-our-light-blue w-full my-2" />
            </div>
          </div>
        </div>
        <BarGraph />
        <div className="w-full mt-6 max-xs:px-5 max-xs:py-5 max-xs:h-full">
          <h1 className="font-semibold text-lg max-xs:text-xl tracking-wide">
            How do I compare to my peers?
          </h1>
          <p className="text-gray-500 text-xs max-xs:py-2 font-mulish py-1">
            These numbers represent current goal achievement
          </p>
          <div className="flex flex-row max-xs:flex-col max-xs:w-full max-xs:justify-start max-xs:items-start justify-between items-center mt-4">
            <div className="flex flex-col justify-end max-xs:w-full max-xs:mt-2 max-xs:mb-8 items-start font-mulish text-xs max-xs:text-sm capitalize">
              <h1 className="font-semibold tracking-wide">
                age:{" "}
                <span className="font-medium mx-2 max-xs:mx-14 text-gray-800">
                  under 30 <i className="bx bxs-down-arrow text-[0.5rem]" />
                </span>
              </h1>
              <hr className="w-full my-2 max-xs:my-3 border-0 bg-gray-500 opacity-30 h-px" />
              <h1 className="font-semibold tracking-wide">
                salary:{" "}
                <span className="font-medium mx-2 max-xs:mx-10 text-gray-800">
                  k 20 - k 30 <i className="bx bxs-down-arrow text-[0.5rem]" />
                </span>
              </h1>
              <hr className="w-full my-2 max-xs:my-3 border-0 bg-gray-500 opacity-30 h-px" />
              <h1 className="font-semibold tracking-wide">
                gender:{" "}
                <span className="font-medium mx-2 max-xs:mx-8 text-gray-800">
                  male <i className="bx bxs-down-arrow text-[0.5rem]" />
                </span>
              </h1>
              <hr className="w-full my-2 max-xs:my-3 border-0 bg-gray-500 opacity-30 h-px" />
            </div>
            <ProgressGraph />
          </div>
        </div>
      </div>
    </div>
  );
}
