import logo from '../assets/logo.png';
import toggleMenu from '../assets/toggle-menu.png'
const Navbar = () => {
    return (
      <div className="flex flex-row border-1 p-2 shadow-md sticky top-0 z-10 w-full bg-white">
        <a className="me-auto" id="headerLogo">
          <img src={logo} alt="logo" className='h-14 ml-4' />
        </a>
        <div className="d-flex align-items-center flex justify-between mr-11">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-80 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
            <button
              type="submit"
              class="text-white absolute end-1 bottom-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
          <div className="d-none d-md-block">
            <button
              type="button"
              id="signup"
              className="bg-blue-700 hover:bg-blue-800
               text-white font-bold py-3 px-4 rounded-3xl ml-3 mr-3"
            >
              Signup
            </button>

            <button
              type="button"
              id="login"
              className="bg-blue-700 hover:bg-blue-800
               text-white font-bold py-3 px-4 rounded-3xl"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
}

export default Navbar;