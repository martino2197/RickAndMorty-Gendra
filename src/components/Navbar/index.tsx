import { NavLink } from "react-router-dom";
import rickAndMortyLogo from "../../assets/rickAndMortyLogo.png";

const Navbar = () => {
  return (
    <nav className="bg-primary-color mb-8">
      <div className="flex flex-col sm:flex-row w-full justify-between pr-8 pl-8">
        <div className="">
          <img src={rickAndMortyLogo} className="sm:w-1/4" alt="" />
        </div>
        <div
          className="flex justify-center items-center"
          id="navbarNavAltMarkup"
        >
          <div className="flex text-white text-2xl space-x-4">
            <NavLink className="" to={"/"}>
              Characters
            </NavLink>
            <div className="">Episode</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
