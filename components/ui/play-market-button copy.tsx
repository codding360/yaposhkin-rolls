import React from "react";
import Link from "next/link";

interface PlayMarketButtonProps {
    href?: string;
    onClick?: () => void;
    className?: string;
}

export const PlayMarketButton: React.FC<PlayMarketButtonProps> = ({ href, onClick, className }) => {
    const content = (
        <span className="flex items-center gap-3 px-4 py-2 bg-black rounded-xl hover:bg-gray-800 transition-colors text-white font-medium shadow-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-green-400 active:scale-95 select-none whitespace-nowrap">
            <svg className="w-7 h-7 md:w-8 md:h-8 flex-shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <mask id="mask0_87_8320" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="7" y="3" width="24" height="26"> <path d="M30.0484 14.4004C31.3172 15.0986 31.3172 16.9014 30.0484 17.5996L9.75627 28.7659C8.52052 29.4459 7 28.5634 7 27.1663L7 4.83374C7 3.43657 8.52052 2.55415 9.75627 3.23415L30.0484 14.4004Z" fill="#C4C4C4"></path> </mask> <g mask="url(#mask0_87_8320)"> <path d="M7.63473 28.5466L20.2923 15.8179L7.84319 3.29883C7.34653 3.61721 7 4.1669 7 4.8339V27.1664C7 27.7355 7.25223 28.2191 7.63473 28.5466Z" fill="url(#paint0_linear_87_8320)"></path> <path d="M30.048 14.4003C31.3169 15.0985 31.3169 16.9012 30.048 17.5994L24.9287 20.4165L20.292 15.8175L24.6923 11.4531L30.048 14.4003Z" fill="url(#paint1_linear_87_8320)"></path> <path d="M24.9292 20.4168L20.2924 15.8179L7.63477 28.5466C8.19139 29.0232 9.02389 29.1691 9.75635 28.766L24.9292 20.4168Z" fill="url(#paint2_linear_87_8320)"></path> <path d="M7.84277 3.29865L20.2919 15.8177L24.6922 11.4533L9.75583 3.23415C9.11003 2.87878 8.38646 2.95013 7.84277 3.29865Z" fill="url(#paint3_linear_87_8320)"></path> </g> <defs> <linearGradient id="paint0_linear_87_8320" x1="15.6769" y1="10.874" x2="7.07106" y2="19.5506" gradientUnits="userSpaceOnUse"> <stop stopColor="#00C3FF"></stop> <stop offset="1" stopColor="#1BE2FA"></stop> </linearGradient> <linearGradient id="paint1_linear_87_8320" x1="20.292" y1="15.8176" x2="31.7381" y2="15.8176" gradientUnits="userSpaceOnUse"> <stop stopColor="#FFCE00"></stop> <stop offset="1" stopColor="#FFEA00"></stop> </linearGradient> <linearGradient id="paint2_linear_87_8320" x1="7.36932" y1="30.1004" x2="22.595" y2="17.8937" gradientUnits="userSpaceOnUse"> <stop stopColor="#DE2453"></stop> <stop offset="1" stopColor="#FE3944"></stop> </linearGradient> <linearGradient id="paint3_linear_87_8320" x1="8.10725" y1="1.90137" x2="22.5971" y2="13.7365" gradientUnits="userSpaceOnUse"> <stop stopColor="#11D574"></stop> <stop offset="1" stopColor="#01F176"></stop> </linearGradient> </defs> </g></svg>
            <span className="flex flex-col items-start leading-tight">
                <span className="text-[10px] md:text-xs font-normal">GET IT ON</span>
                <span className="text-base md:text-lg font-semibold -mt-1">Google Play</span>
            </span>
        </span>
    );

    if (href) {
        return (
            <Link href={href} target="_blank" rel="noopener noreferrer" className={className} aria-label="Get it on Google Play">
                {content}
            </Link>
        );
    }
    return (
        <button type="button" onClick={onClick} className={className} aria-label="Get it on Google Play">
            {content}
        </button>
    );
}; 