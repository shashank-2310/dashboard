import Calculator from "./Components/Calculator";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import SideNav from "./Components/SideNav";

function App() {
  return (
    <>
      <div className="bg-black flex max-xs:hidden flex-row justify-start items-center h-screen scroll-smooth">
        <SideNav />
        <Profile />
        <Home />
        <Calculator />
      </div>
      <div className="bg-black hidden max-xs:flex flex-col justify-start items-center h-full scroll-smooth">
        <Profile />
        <Home />
        <Calculator />
        <SideNav />
      </div>
    </>
  );
}

export default App;
