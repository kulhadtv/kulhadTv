import React from "react";
import {
    AiOutlineHome,
    AiOutlineSearch,
    AiOutlineDownload,
    AiOutlineUser,
} from "react-icons/ai";
import { HiOutlineNewspaper } from "react-icons/hi";

const navItems = [
    { id: 1, label: "Home", icon: AiOutlineHome },
    { id: 2, label: "Search", icon: AiOutlineSearch },
    { id: 3, label: "Downloads", icon: AiOutlineDownload },
    { id: 4, label: "News", icon: HiOutlineNewspaper },
    { id: 5, label: "Profile", icon: AiOutlineUser },
];

export default function Navigation() {
    return (
        <>
            {/*  Desktop Horizontal Nav (Transparent) */}
            <div className="hidden md:flex w-fit justify-start gap-10 py-4 px-4 backdrop-blur-xl bg-gradient-to-r from-black/60 via-black/40 to-transparent shadow-2xl">
                {navItems
                    .filter(item => item.label !== "Search")   // remove search
                    .map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.id}
                                className="flex items-center gap-2 text-white hover:text-cyan-300 cursor-pointer transition"
                            >
                                <Icon size={20} />
                                <span className="text-sm">{item.label}</span>
                            </div>
                        );
                    })}

            </div>

            {/* Mobile Bottom Navigation */}
            <div className="fixed bottom-0 left-0 w-full backdrop-blur-xl bg-gradient-to-r from-black/60 via-black/40 to-transparent shadow-2xl md:hidden flex justify-around items-center py-2 rounded-t-2xl shadow-lg">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={item.id}
                            className="flex flex-col items-center text-white hover:text-cyan-300 cursor-pointer transition"
                        >
                            <Icon size={22} />
                            <span className="text-xs mt-1">{item.label}</span>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
