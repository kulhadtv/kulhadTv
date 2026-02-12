import React from "react";

export default function ComingSoonOverlay() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs">
            <div className="text-center px-4">
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#00d4ff] via-[#5de2e7] to-[#00a8cc] bg-clip-text text-transparent animate-pulse md:h-[85px] h-[55px]">
                    Coming Soon
                </h1>
                <p className="text-gray-200 mt-2 text-lg">
                    We are working on something amazing 🚀
                </p>
            </div>
        </div>
    );
}
