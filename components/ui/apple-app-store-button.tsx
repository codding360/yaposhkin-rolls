import React from "react";
import Link from "next/link";

interface AppleAppStoreButtonProps {
    href?: string;
    onClick?: () => void;
    className?: string;
}

export const AppleAppStoreButton: React.FC<AppleAppStoreButtonProps> = ({ href, onClick, className }) => {
    const content = (
        <span className="flex items-center gap-3 px-4 py-2 bg-black rounded-xl hover:bg-gray-800 transition-colors text-white font-medium shadow-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-green-400 active:scale-95 select-none whitespace-nowrap">
            <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-7 h-7 md:w-8 md:h-8 flex-shrink-0"
                aria-hidden="true"
            >
                <path d="M248.644,123.476c-5.45-29.71,8.598-60.285,25.516-80.89 c18.645-22.735,50.642-40.17,77.986-42.086c4.619,31.149-8.093,61.498-24.826,82.965 C309.37,106.527,278.508,124.411,248.644,123.476z M409.034,231.131c8.461-23.606,25.223-44.845,51.227-59.175 c-26.278-32.792-63.173-51.83-97.99-51.83c-46.065,0-65.542,21.947-97.538,21.947c-32.96,0-57.965-21.947-97.866-21.947 c-39.127,0-80.776,23.848-107.19,64.577c-9.712,15.055-16.291,33.758-19.879,54.59c-9.956,58.439,4.916,134.557,49.279,202.144 c21.57,32.796,50.321,69.737,87.881,70.059c33.459,0.327,42.951-21.392,88.246-21.616c45.362-0.258,53.959,21.841,87.372,21.522 c37.571-0.317,67.906-41.199,89.476-73.991c15.359-23.532,21.167-35.418,33.11-62.023 C414.435,352.487,389.459,285.571,409.034,231.131z" />
            </svg>
            <span className="flex flex-col items-start leading-tight">
                <span className="text-[10px] md:text-xs font-normal">Download on the</span>
                <span className="text-base md:text-lg font-semibold -mt-1">App Store</span>
            </span>
        </span>
    );

    if (href) {
        return (
            <Link href={href} target="_blank" rel="noopener noreferrer" className={className} aria-label="Download on the App Store">
                {content}
            </Link>
        );
    }
    return (
        <button type="button" onClick={onClick} className={className} aria-label="Download on the App Store">
            {content}
        </button>
    );
}; 