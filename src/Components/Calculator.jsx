import InputSlider from "./InputSlider";
export default function Calculator() {
  return (
    <div className="bg-white h-screen w-1/4 pl-10 max-xs:hidden">
      {/* //Todo */}
      <div className="overflow-hidden hidden">
        <div className="absolute w-10 h-10 bg-[#7996FF] bottom-0 right-2 rotate-45 rounded-t-3xl" />
        <div className="absolute w-10 h-10  bg-our-blue bottom-0 right-8 rotate-45 rounded-2xl" />
      </div>

      <div className="bg-[#f9f5f5] rounded-xl mt-16 capitalize font-mulish w-10/12 p-3">
        <h1 className="font-pt-serif text-lg font-semibold w-full">
          retirement strategy
        </h1>
        <InputSlider child={"employee contribution"} />
        <InputSlider child={"retirement age"} />

        <hr className="border-0 bg-gray-500 bg-opacity-10 rounded my-5 h-px " />

        <div className="flex flex-col justify-center items-start text-xs tracking-wide font-semibold pr-2">
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
            className="p-3 text-sm my-6 bg-our-blue text-white rounded-lg w-full tracking-wider hover:bg-[#07a4ff] hover:text-black hover:shadow-lg "
          >
            Update
          </button>
          <p className="text-our-blue mx-auto my-1 tracking-wide flex items-center justify-center">
            view help docs
            <i className="bx bx-chevron-right text-lg" />
          </p>
        </div>
      </div>
    </div>
  );
}
