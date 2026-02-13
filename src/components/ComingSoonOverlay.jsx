import React, { useEffect, useState } from "react";

export default function ComingSoonOverlay() {
    // calculate top inset based on header height; we only update on resize or header changes
    const [topInset, setTopInset] = useState(0);

    useEffect(() => {
        function updateTop() {
            const header = document.getElementById("app-header");
            const top = header ? Math.ceil(header.getBoundingClientRect().bottom) : 0;
            setTopInset(top);
        }

        updateTop();
        window.addEventListener("resize", updateTop);

        let ro;
        if (typeof ResizeObserver !== "undefined") {
            ro = new ResizeObserver(updateTop);
            const headerEl = document.getElementById("app-header");
            if (headerEl) ro.observe(headerEl);
        }

        return () => {
            window.removeEventListener("resize", updateTop);
            if (ro) ro.disconnect();
        };
    }, []);

    const style = {
        position: "fixed",
        left: 0,
        right: 0,
        top: `${topInset}px`,
        bottom: 0,
        zIndex: 50,
    };

    return (
        <div style={style} className="flex items-center justify-center bg-black/40 backdrop-blur-xs">
            <div className="text-center px-4 my-auto w-full max-w-full sm:max-w-xl">
                <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Coming Soon
                </h1>
                <p className="text-gray-200 mt-2 text-sm sm:text-base md:text-lg">
                    We are working on something amazing 🚀
                </p>
            </div>
        </div>
    );
}
