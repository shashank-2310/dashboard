import mark from "../assets/mz.png";

export default function Profile() {
  return (
    <div className="bg-[#f9f5f5] max-xs:bg-white text-left h-screen w-auto max-xs:w-full flex flex-col justify-start items-start max-xs:justify-start max-xs:items-center max-xs:overflow-y-scroll">
      <div className="font-pt-serif flex flex-row justify-start items-start mt-8 max-xs:mt-3">
        <img
          src={mark}
          alt="mark"
          className="w-1/4 ml-14 max-xs:ml-0 max-xs:w-1/6 "
        />
        <div className="flex flex-col justify-center items-start mx-4 my-auto w-full">
          <h1 className="capitalize font-semibold text-2xl max-xs:text-xl tracking-wider text-black">
            hi mike,
          </h1>
          <p className="text-gray-500 max-xs:text-sm">welcome back.</p>
        </div>
        <div className="justify-end items-end w-1/2 hidden max-xs:flex">
          <button
            type="button"
            className="hover:text-our-blue focus:text-our-blue text-xl"
          >
            <i className="bx bx-bell"></i>
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start w-full max-xs:w-3/4 max-xs:rounded-3xl max-xs:mt-10 max-xs:mb-3 max-xs:p-7 max-xs:bg-opacity-50 max-xs:bg-[#f1eded] pt-8 px-16 font-mulish">
        <div className="flex flex-col justify-start items-start w-full">
          <p className="capitalize font-pt-serif font-semibold tracking-wide text-base max-xs:text-lg ">
            today
          </p>
          <h1 className="text-2xl max-xs:text-3xl font-extrabold pt-3">
            $19,892
          </h1>
          <p className="text-gray-500 capitalize text-xs max-xs:text-sm pt-1">
            account balance
          </p>

          <div className="flex max-xs:flex-row flex-col justify-between items-start w-full">
            <div className="flex flex-col justify-start items-start">
              <h1 className="text-lg max-xs:text-xl font-extrabold pt-2">
                $4,000
              </h1>
              <p className="text-gray-500 capitalize text-xs max-xs:text-sm pt-1">
                year-to-date{" "}
                <span className="max-xs:hidden">contributions</span>
              </p>
            </div>
            <div className="flex flex-col justify-start items-start">
              <h1 className="text-lg max-xs:text-xl font-extrabold pt-2">
                $1,892
              </h1>
              <p className="text-gray-500 capitalize text-xs max-xs:text-sm pt-1">
                total interest
              </p>
            </div>
          </div>
          <button
            type="button"
            className="py-2 px-8 mt-3 font-semibold max-xs:mt-6 max-xs:mb-0 max-xs:w-full max-xs:text-lg max-xs:tracking-wider mb-2 bg-our-blue  text-white rounded-md tracking-wide hover:bg-[#07a4ff] hover:text-black hover:shadow-lg "
          >
            I want to <i className="bx bxs-down-arrow text-[0.6rem] " />
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start max-xs:h-full max-xs:w-3/4 max-xs:rounded-3xl max-xs:mt-5 max-xs:mb-2 max-xs:p-7 max-xs:bg-opacity-50 max-xs:bg-[#f1eded] pt-5 mx-auto font-mulish">
        <p className="capitalize font-pt-serif font-semibold tracking-wide text-base max-xs:text-lg ">
          recent transactions
        </p>
        <p className="text-gray-500 text-xs pt-3">2020-08-07</p>
        <h1 className="text-sm max-xs:tracking-tight tracking-wide font-extrabold capitalize py-1 ">
          withdrawal transfer to bank-XXX11
        </h1>
        <hr className="w-full my-2 border-0 bg-gray-500 h-px opacity-30" />
        <p className="text-gray-500 text-xs pt-2">2020-07-21</p>
        <h1 className="text-sm max-xs:tracking-tight tracking-wide font-extrabold capitalize py-1 ">
          withdrawal transfer to bank-XXX11
        </h1>
        <hr className="w-full my-2 border-0 bg-gray-500 h-px opacity-30" />
        <p className="text-gray-500 text-xs pt-2">2020-07-16</p>
        <h1 className="text-sm max-xs:tracking-tight tracking-wide font-extrabold capitalize py-1 ">
          withdrawal transfer to bank-XXX11
        </h1>
        <hr className="w-full mt-2 border-0 bg-gray-500 h-px opacity-30" />
      </div>
    </div>
  );
}
