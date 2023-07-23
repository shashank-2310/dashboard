import InputSlider from "./InputSlider";
export default function Calculator() {
  return (
    <div className="bg-white h-screen w-max max-xs:w-full max-xs:h-full max-xs:pt-5 flex flex-col justify-center items-center">
      <div className="overflow-hidden max-xs:hidden">
        <div className="absolute pt-10 pl-10 -bg-our-light-blue bottom-0 rotate-[270deg] right-0 rounded-t-full" />
        <div className="absolute pt-8 pr-16 bg-our-blue bottom-0 right-7 rounded-tl-3xl rounded-tr-3xl " />
      </div>

      <div className="bg-[#f9f5f5] rounded-3xl capitalize font-mulish w-10/12 max-xs:w-max p-5">
        <h1 className="font-pt-serif text-lg max-xs:text-xl font-semibold w-full">
          retirement strategy
        </h1>
        <InputSlider child={"employee contribution"} />
        <InputSlider child={"retirement age"} />

        <hr className="border-0 bg-gray-500 bg-opacity-10 rounded my-5 h-px " />

        <div className="flex flex-col justify-center items-start text-xs max-xs:text-sm tracking-wide font-semibold pr-1">
          <div className="flex flex-row justify-between items-center w-full py-3">
            <p>Employer contribution</p>
            <p>8.4%</p>
          </div>
          <div className="flex flex-row justify-between items-center w-full py-1">
            <p>interest rate</p>
            <p>5%</p>
          </div>
          <button
            type="button"
            className="p-3 text-sm max-xs:text-base max-xs:tracking-widest max-xs:my-8 my-6 bg-our-blue text-white rounded-lg w-full tracking-wider hover:bg-[#07a4ff] hover:text-black hover:shadow-lg "
          >
            Update
          </button>
          <p className="text-our-blue cursor-pointer mx-auto my-1 max-xs:my-2 tracking-wide flex items-center justify-center">
            <span className="hover:underline">view help docs</span>
            <i className="bx bx-chevron-right text-lg" />
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start justify-start max-xs:justify-center max-xs:items-center bg-white font-mulish mt-8 max-xs:mt-10 max-xs:mb-14 w-3/4 border-l-2 max-xs:border-t-2 max-xs:border-l-0 rounded-sm -border-our-light-blue max-xs:py-4 max-xs:px-5 py-2 px-7">
        <h1 className="text-sm max-xs:text-base tracking-wide max-xs:text-center max-xs:w-3/4">
          Are you considering a{" "}
          <span className="font-bold capitalize">housing finance?</span>
        </h1>
        <p className="text-gray-500 py-2 max-xs:py-3 text-xs max-xs:text-sm">
          Limited time reduced interest.
        </p>
        <p className="text-our-blue cursor-pointer font-semibold text-xs max-xs:text-sm max-xs:tracking-wide capitalize flex justify-center items-center">
          <span className="hover:underline">learn more</span>
          <i className="bx bx-chevron-right text-lg" />
        </p>
      </div>
    </div>
  );
}
