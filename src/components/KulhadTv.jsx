import { FaSearch } from "react-icons/fa";

const KulhadTv = () => {
    return (
        <div className="bg-[#0f2942] px-6 py-4 flex items-center justify-between">

            {/* CHAICHAT */}
            <div className="text-xl font-bold text-white">
                CHAICHAT
            </div>

            {/* Left Section (Logo + Search) */}
            <div className="flex items-center gap-6">
                   {/* Search Field */}
                <div className="flex items-center bg-[#213f5b] px-4 py-2 rounded-xl w-80 hidden">
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

export default KulhadTv;
