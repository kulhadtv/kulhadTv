import { FaSearch } from "react-icons/fa";

const Header = () => {
    return (
        <div id="app-header" className="fixed top-0 left-0 w-full z-50 bg-[#0f2942] px-6 py-4 flex items-center justify-between">

            {/* CHAICHAT */}
            <div className="text-xl font-bold text-white">
                BOLOO
            </div>

            {/* Left Section (Logo + Search) */}
            <div className="flex items-center gap-6">
                   {/* Search Field */}
                {/* show search only on md+ because it’s wide */}
                <div className="hidden md:flex items-center bg-[#213f5b] px-4 py-2 rounded-xl w-80">
                    <FaSearch className="text-gray-400 mr-2 text-sm" />
                    <input
                        type="text"
                        placeholder="Search movies, shows..."
                        className="bg-transparent outline-none text-white w-full placeholder-gray-400"
                    />
                </div>
                {/* Right Logo */}
                <div className="text-xl font-bold bg-gradient-to-r from-[#00d4ff] via-[#5de2e7] to-[#00a8cc] bg-clip-text text-transparent">
                    KULHAD TV
                </div>
             
            </div>

        </div>

    );
};

export default Header;
