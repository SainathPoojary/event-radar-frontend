import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container mx-auto overflow-hidden">
      <div className="relative z-20 flex items-center justify-between bg-transparent px-4 py-5">
        <div className="w-auto">
          <div className="flex flex-wrap items-center">
            <div className="mr-14 w-auto ">
              <Link
                className="text-2xl font-bold leading-none flex items-center"
                to="/"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 95 95"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 mr-4"
                >
                  <path
                    d="M47.4974 90.0514C70.9983 90.0514 90.0495 71.0002 90.0495 47.4993C90.0495 23.9985 70.9983 4.94727 47.4974 4.94727C23.9965 4.94727 4.94531 23.9985 4.94531 47.4993C4.94531 71.0002 23.9965 90.0514 47.4974 90.0514Z"
                    stroke="#4338CA"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.9086 28.8555C17.2142 35.2988 15.1227 43.2756 16.0518 51.1934C16.981 59.1111 20.8623 66.3871 26.9208 71.5685C32.9794 76.75 40.7694 79.4557 48.7354 79.1454C56.7014 78.835 64.2573 75.5315 69.8944 69.8944C75.5315 64.2573 78.835 56.7014 79.1454 48.7354C79.4557 40.7694 76.75 32.9794 71.5685 26.9208C66.3871 20.8623 59.1111 16.981 51.1934 16.0518C43.2756 15.1227 35.2988 17.2142 28.8555 21.9086"
                    stroke="#4338CA"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M30.5213 57.3959C28.7309 54.3326 27.8033 50.8416 27.8368 47.2936C27.8703 43.7456 28.8638 40.2728 30.7117 37.2438C32.5596 34.2148 35.1931 31.7426 38.3326 30.0895C41.4722 28.4364 45.0007 27.6641 48.5438 27.8545C52.0868 28.0449 55.5123 29.191 58.4566 31.171C61.4009 33.1511 63.7542 35.8914 65.2668 39.101C66.7795 42.3106 67.395 45.8698 67.048 49.401C66.7011 52.9322 65.4046 56.3035 63.2963 59.1574M59.0806 63.3334C55.9959 65.5987 52.3169 66.914 48.4952 67.1179C44.6735 67.3219 40.8754 66.4055 37.5671 64.4813"
                    stroke="#4338CA"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M47.4552 56.2678C52.2975 56.2678 56.2229 52.3424 56.2229 47.5001C56.2229 42.6579 52.2975 38.7324 47.4552 38.7324C42.6129 38.7324 38.6875 42.6579 38.6875 47.5001C38.6875 52.3424 42.6129 56.2678 47.4552 56.2678Z"
                    stroke="#4338CA"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M25.112 30.0638C27.8446 30.0638 30.0599 27.8485 30.0599 25.1159C30.0599 22.3832 27.8446 20.168 25.112 20.168C22.3793 20.168 20.1641 22.3832 20.1641 25.1159C20.1641 27.8485 22.3793 30.0638 25.112 30.0638Z"
                    stroke="#4338CA"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M33.7448 66.1634C36.4775 66.1634 38.6927 63.9482 38.6927 61.2155C38.6927 58.4828 36.4775 56.2676 33.7448 56.2676C31.0121 56.2676 28.7969 58.4828 28.7969 61.2155C28.7969 63.9482 31.0121 66.1634 33.7448 66.1634Z"
                    stroke="#4338CA"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M61.1719 64.2051C62.8115 64.2051 64.1406 62.8759 64.1406 61.2363C64.1406 59.5967 62.8115 58.2676 61.1719 58.2676C59.5323 58.2676 58.2031 59.5967 58.2031 61.2363C58.2031 62.8759 59.5323 64.2051 61.1719 64.2051Z"
                    stroke="#4338CA"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Event Radar
              </Link>
            </div>
          </div>
        </div>
        <div className="w-auto">
          <div className="hidden w-auto lg:block">
            <ul className="mr-16 flex items-center text-lg font-semibold">
              <li className="mr-9 font-medium">
                <Link to="/events">Events</Link>
              </li>
              <li className="mr-9 font-medium">
                <Link to="/colleges">Colleges</Link>
              </li>
              <li className="font-medium">
                <a href="#">About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
