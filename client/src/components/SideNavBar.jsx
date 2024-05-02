import homeicon from "../assets/home.icon.png";
import learningicon from "../assets/learning.icon.png";
const SideNavBar = () => {
  return (
    <div className="side-nav-bar fixed h-full bg-blue-50 w-1/5 pl-4">
      <div className="text-nowrap p-4 nav flex-column ">
        <p className="ps-3 py-3 fw-bold font-xs text-slate-500 nav-item">
          MAIN MENU
        </p>
        <div className="flex flex-col py-4">
          <div className="flex flex-row items-center py-2">
            <a href="" className="hover:underline">
              <img src={homeicon} alt="" className="inline size-4 mr-3 mb-1" />
              Home
            </a>
          </div>
          <div className="flex flex-row items-center py-2">
            <a href="" className="hover:underline">
              <img src={learningicon} alt="" className="inline size-5 mr-2" />
              Courses
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
