import Calculator from "./Components/Calculator";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import SideNav from "./Components/SideNav";

function App() {
  return (
    <div className="bg-black flex max-xs:flex-col-reverse flex-row justify-start items-center h-screen scroll-smooth">
      <SideNav />
      <Profile />
      <Home />
      <Calculator />
    </div>
  );
}

export default App;
