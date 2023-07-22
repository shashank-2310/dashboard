import BarGraph from "./BarGraph";
import ProgressGraph from "./ProgressGraph";

export default function Home() {
  return (
    <div className="bg-white flex flex-col justify-start items-start h-screen w-1/2 px-10 overflow-hidden max-xs:hidden">
      <div className="flex flex-col justify-start items-start font-pt-serif mt-14 w-full ">
        <h3 className="text-our-blue capitalize text-sm tracking-wide font-semibold ">
          retirement income
        </h3>
        <h1 className="capitalize tracking-wide text-lg font-semibold font-mulish">
          starting year 2056
        </h1>
        <div className="flex flex-row items-start justify-between w-full font-mulish mt-6">
          <div className="flex flex-col justify-start items-start w-1/4">
            <h1 className="font-bold text-xl tracking-wide">$300,000</h1>
            <p className="text-gray-500 capitalize text-xs pt-1">my goal</p>
            <hr className="h-0.5 bg-our-blue w-full my-2" />
          </div>
          <div className="flex flex-col justify-start items-start w-1/4 ">
            <h1 className="font-bold text-xl tracking-wide">59%</h1>
            <p className="text-gray-500 capitalize text-xs pt-1">
              goal achieved
            </p>
            <hr className="h-0.5 bg-our-blue w-full my-2" />
          </div>
          <div className="flex flex-col justify-start items-start w-1/4 mb-5 ">
            <h1 className="font-bold text-xl tracking-wide">$300</h1>
            <p className="text-gray-500 capitalize text-xs pt-1">
              est. monthly income
            </p>
            <hr className="h-0.5 bg-our-blue w-full my-2" />
          </div>
        </div>
        <BarGraph />
        <div className="w-full mt-6">
          <h1 className="font-semibold text-lg tracking-wide">
            How do I compare to my peers?
          </h1>
          <p className="text-gray-500 text-xs font-mulish py-1">
            These numbers represent current goal achievement
          </p>
          <div className="flex flex-row justify-between items-center mt-4">
            <div className="flex flex-col justify-end items-start font-mulish text-xs capitalize">
              <h1 className="font-semibold tracking-wide">
                age:{" "}
                <span className="font-medium mx-2 text-gray-800">
                  under 30 <i className="bx bxs-down-arrow text-[0.5rem]" />
                </span>
              </h1>
              <hr className="w-full my-2 border-0 bg-gray-500 opacity-30 h-px" />
              <h1 className="font-semibold tracking-wide">
                salary:{" "}
                <span className="font-medium mx-2 text-gray-800">
                  k 20 - k 30 <i className="bx bxs-down-arrow text-[0.5rem]" />
                </span>
              </h1>
              <hr className="w-full my-2 border-0 bg-gray-500 opacity-30 h-px" />
              <h1 className="font-semibold tracking-wide">
                gender:{" "}
                <span className="font-medium mx-2 text-gray-800">
                  male <i className="bx bxs-down-arrow text-[0.5rem]" />
                </span>
              </h1>
              <hr className="w-full my-2 border-0 bg-gray-500 opacity-30 h-px" />
            </div>
            <ProgressGraph />
          </div>
        </div>
      </div>
    </div>
  );
}
