import logo from "../assets/butterfly.png";

export default function SideNav() {
  return (
    <div className="bg-white flex max-xs:flex-row flex-col max-xs:w-full w-min px-3 max-xs:h-min h-screen text-2xl text-gray-500 sticky max-xs:fixed max-xs:bottom-0 max-xs:inset-x-0">
      <div className="h-full max-xs:h-min max-xs:w-full flex max-xs:flex-row flex-col justify-evenly max-xs:justify-between">
        <ul className="max-xs:hidden">
          <li className="py-3">
            <img src={logo} alt="logo" />
          </li>
          <li className="py-3">
            <button
              type="button"
              className="hover:text-our-blue  focus:text-our-blue  "
            >
              <i className="bx bx-search"></i>
            </button>
          </li>
        </ul>
        <div className="flex max-xs:flex-row flex-col justify-between w-full h-full max-xs:h-min pt-12 max-xs:py-3 ">
          <ul className="max-xs:flex-row max-xs:flex max-xs:justify-between w-full">
            <li className="max-xs:px-4 max-xs:py-0 py-5">
              <button
                type="button"
                className="hover:bg-white hover:text-gray-500 hover:shadow-none text-white shadow shadow-blue-600 bg-our-blue  rounded-md"
              >
                <i className="p-1 bx bx-home-alt"></i>
              </button>
            </li>
            <li className="max-xs:px-4 max-xs:py-0 py-5">
              <button
                type="button"
                className="hover:bg-our-blue hover:text-white hover:shadow hover:shadow-blue-600  rounded-md"
              >
                <i className="p-1 bx bx-news"></i>
              </button>
            </li>
            <li className="max-xs:px-4 max-xs:py-0 py-5">
              <button
                type="button"
                className="hover:bg-our-blue  hover:text-white hover:shadow hover:shadow-blue-600 rounded-md"
              >
                <i className="p-1 bx bx-list-ul"></i>
              </button>
            </li>
            <li className="max-xs:px-4 max-xs:py-0 py-5">
              <button
                type="button"
                className="hover:bg-our-blue  hover:text-white hover:shadow hover:shadow-blue-600 rounded-md"
              >
                <i className="p-1 bx bx-user"></i>
              </button>
            </li>
            <li className="max-xs:my-auto max-xs:block hidden">
              <button
                type="button"
                className="hover:bg-our-blue  hover:text-white hover:shadow hover:shadow-blue-600 rounded-md "
              >
                <i className="bx bx-search p-1"></i>
              </button>
            </li>
          </ul>
          <ul className="max-xs:hidden">
            <li className="max-xs:px-1 py-3">
              <button
                type="button"
                className="hover:text-our-blue  focus:text-our-blue "
              >
                <i className="bx bx-bell"></i>
              </button>
            </li>
            <li className="max-xs:px-1 py-3">
              <button
                type="button"
                className="hover:text-our-blue  focus:text-our-blue "
              >
                <i className="bx bx-exit"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
