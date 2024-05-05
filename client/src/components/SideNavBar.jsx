import homeicon from "../assets/home.icon.png";
import learningicon from "../assets/learning.icon.png";
const SideNavBar = ({isLogin=false}) => {
  return (
    <div className="fixed h-full overflow-x-hidden bg-blue-50 w-1/5 pl-4 pt-5 pl-10">
      <div className="text-nowrap p-4 nav flex-column ">
        <p className="py-3 fw-bold font-xs text-slate-500 nav-item">
          MAIN MENU
        </p>

        {/* main div for side-bar options */}
        <div className="flex flex-col py-4">
          <div className="flex flex-row items-center py-2">
            <a
              href=""
              className="hover:underline active:text-blue-800 active:font-bold"
            >
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
        {isLogin && (
          <div className="mt-3">
            <hr className="border-1 mb-5" />
            <div className="flex flex-row items-center py-2">
              <a
                href=""
                className="hover:underline active:text-blue-800 active:font-bold"
              >
                <img
                  src={homeicon}
                  alt=""
                  className="inline size-4 mr-3 mb-1"
                />
                Home
              </a>
            </div>
            <div className="flex flex-row items-center py-2">
              <a href="" className="hover:underline">
                <img src={learningicon} alt="" className="inline size-5 mr-2" />
                Courses
              </a>
            </div>

            <div className="flex flex-row items-center py-2">
              <a href="" className="hover:underline">
                <img src={learningicon} alt="" className="inline size-5 mr-2" />
                Logout
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideNavBar;
