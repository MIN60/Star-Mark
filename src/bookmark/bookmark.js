import gsap from 'gsap'
import React, { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import axios from 'axios';
import './bookmark.css';

export const Bookmark = () => {
    return (
        <div style={{position: "absolute", top: "0px", left: "0px"}}>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 750 500" preserveAspectRatio="xMidYMax slice">
                <defs>
                    <radialGradient id="bg2-grad" cx="365.22" cy="500" r="631.74"
                        gradientTransform="translate(750 552.6) rotate(180) scale(1 1.11)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="hsla(349, 94%, 75%, 1)" />
                        <stop offset="0.12" stopColor="hsla(342, 49%, 62%, 1)" />
                        <stop offset="0.18" stopColor="hsla(328, 37%, 56%, 1)" />
                        <stop offset="0.33" stopColor="hsla(281, 33%, 48%, 1)" />
                        <stop offset="0.41" stopColor="hsla(268, 38%, 48%, 1)" />
                        <stop offset="0.45" stopColor="hsla(266, 38%, 43%, 1)" />
                        <stop offset="0.55" stopColor="hsla(261, 37%, 32%, 1)" />
                        <stop offset="0.64" stopColor="hsla(253, 36%, 24%, 1)" />
                        <stop offset="0.72" stopColor="hsla(244, 33%, 19%, 1)" />
                        <stop offset="0.78" stopColor="hsla(240, 33%, 17%, 1)" />
                    </radialGradient>
                    <radialGradient id="fstar-grad" cx="1362.39" cy="-53.7" r="39.39"
                                gradientTransform="matrix(0.89, -0.45, -0.45, -0.89, -473.7, 640.57)"
                                gradientUnits="userSpaceOnUse">
                                <stop offset="0" stopColor="#fff" />
                                <stop offset="0.06" stopColor="#fff" stopOpacity="0.8" />
                                <stop offset="0.12" stopColor="#fff" stopOpacity="0.62" />
                                <stop offset="0.19" stopColor="#fff" stopOpacity="0.45" />
                                <stop offset="0.26" stopColor="#fff" stopOpacity="0.31" />
                                <stop offset="0.33" stopColor="#fff" stopOpacity="0.2" />
                                <stop offset="0.41" stopColor="#fff" stopOpacity="0.11" />
                                <stop offset="0.49" stopColor="#fff" stopOpacity="0.05" />
                                <stop offset="0.59" stopColor="#fff" stopOpacity="0.01" />
                                <stop offset="0.72" stopColor="#fff" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="linear-gradient" x1="472" y1="461.56" x2="872.58" y2="461.56"
                        gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#fd75a8" />
                        <stop offset="1" stopColor="#5a2d81" />
                    </linearGradient>
                    <linearGradient id="linear-gradient-2" x1="214.61" y1="508.49" x2="166.09" y2="361.12"
                        xlinkHref="#linear-gradient" />
                    <linearGradient id="linear-gradient-3" x1="57.65" y1="508.01" x2="448.08" y2="508.01"
                        xlinkHref="#linear-gradient" />
                    <linearGradient id="linear-gradient-4" x1="193.48" y1="508.3" x2="761.05" y2="508.3"
                        xlinkHref="#linear-gradient" />
                </defs>

                <g id="scene3">
                    <rect id="bg2" y="-59.8" width="750" height="612.4" transform="translate(750 492.8) rotate(180)"
                        fill="url(#bg2-grad)" />
                    <g id="info">
                        <text x="34%" y="300" fontSize="50" fontFamily="Bebas Neue">STAR MARK</text>
                    </g>
                    <g id="hills3">
                        <polygon id="h3-5"
                            points="756.31 330.55 750.57 327.01 742.42 331.08 719.12 317.36 705.87 311.91 695.11 307.32 688.01 314.24 675.69 336.9 665.32 346.76 657.77 353.08 641.17 353.46 633.52 362.58 626.63 373.11 618.53 378.94 596.8 411.28 588.95 404.93 578.86 406.48 539.9 443.36 472 493.8 556 490.91 756.14 490.91 756.31 330.55"
                            fill="url(#linear-gradient)" />
                        <path id="h3-4"
                            d="M453.13,471.05c-20-.31-48.49-14.38-68.14-10.05-13.54-4.69-34.51-19.93-48.25-23.77-4.06-5.13-13.21-13.57-18.27-16.88L297,425.44c-25.78-9-71.66-48.83-92.2-70.78-23.25,8-24.38,17.46-52.47,13.47L125.84,344.9c-7.26,4.7-21.45,3.12-28.92.05C86.58,332.65,59.21,300,46.18,293.73L19.53,333.39l-21.39-3.8V490.91l204.07-2.72,2.2,2.72H456.94Z"
                            fill="url(#linear-gradient-2)" />
                        <path id="h3-3"
                            d="M369.27,490.91h71.81l-20.37-23.39c-12.47-1.8-31-7.32-43-11.44-4.42,2-12-2.38-15.74-5.28-24-16.39-52.39-28.74-75.56-47.77L250.16,416,237,405.49l-44.35,23c-4.14-6-13.7-11.83-19.85-12.43-29.3,7.48-89.69,52.2-115.13,72.82C114.24,491.53,309.43,490.93,369.27,490.91Z"
                            fill="url(#linear-gradient-3)" />
                        <path id="h3-2"
                            d="M756.14,490.91l-8-59.58-53-.18c-15.09-2.44-50.94-7.67-64.22,4.91-19.09-2.89-49.68-19.29-69.12-17.53-5.3-5.72-16.93-13.13-23.69-14.8l-26.87,20.38c-26.86,1.93-30.42-8.09-52.55-17.23l-12.86,14.87c-8.76-4.86-25.28-12.15-33.64-18.06-22.67,22.21-39,46.13-70,32.86-19.43,17.89-46.64,30.57-69.37,40.53-20.6-4.23-50.78,9.69-71.71,9.85l-.81,4Z"
                            fill="url(#linear-gradient-4)" />
                        <path id="h3-1"
                            d="M754.08,270.8c-9.14,15.25-28.22,45.59-38,59.95-4.61,3.06-20.35,7.4-25.57,8.91L643.7,401c-25.83,9.4-65.64,40.62-89.22,55.62l-7.13-3c-18.15,15-47.22,22.84-68.46,20.49-9.82-6.6-45.32-31-54.87-36-26.29,17.87-45.79,32-76.1,17.57a96.12,96.12,0,0,0-21.71,12.72c-6.43.64-19,3.94-25.11,6.51-13.74-7.23-27.75-13.32-31.55-9.38L232.73,428l-8.08,6.7c-24.6-11.43-37.11-14.88-54.06-43.59l-8.4,4.76c-26.49-10.44-21.1-21.55-39-31.82-10.53,4.63-25.1,12-37.85,19.27C71,369.57,53.3,344.41,43.42,325c-16.37-6.4-30.9-30.44-40.59-47.58l-4.69,2v211.5H756.31V271.05Z" />
                    </g>
                </g>
            </svg>
        </div>
    )
}