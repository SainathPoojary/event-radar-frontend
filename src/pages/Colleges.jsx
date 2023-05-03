import React, { useEffect, useState } from "react";
import "flowbite";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { collegeInfo } from "../assets/data/colleges";

function Colleges() {
  // const events = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const navigate = useNavigate();

  const [initializing, setInitializing] = useState(true);
  const [colleges, setColleges] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("Called");
    fetch("https://event-radar.herokuapp.com/getColleges")
      .then((res) => res.json())
      .then((events) => {
        console.log(events);
        setColleges(events);
        setInitializing(false);
      });
  }, []);

  function getColleges() {
    return colleges.filter((college) =>
      collegeInfo[college.collegeId].name
        .toLowerCase()
        .includes(searchText.toLowerCase())
    );
  }

  if (initializing) return <Loader />;

  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex items-center w-full px-5 sm:w-10/12 2xl:w-2/3 m-auto mt-10"
      >
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-3.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
          />
        </div>
        <button className="p-3.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </form>

      {/* Cards Section */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full sm:w-10/12 2xl:w-2/3 px-5 md:px-0 mx-auto mt-10">
        {getColleges().map((college) => (
          <div
            key={college._id}
            onClick={() => {
              navigate("/college", {
                state: college,
              });
            }}
            className="cursor-pointer text-left flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg aspect-[9/12]"
              src={collegeInfo[college.collegeId].img}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {collegeInfo[college.collegeId].name}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {collegeInfo[college.collegeId].description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Colleges;
