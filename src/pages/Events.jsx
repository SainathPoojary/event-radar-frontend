import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "flowbite";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

function Events() {
  const navigate = useNavigate();
  const [initializing, setInitializing] = useState(true);
  const [events, setEvents] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [eventFeeType, setEventFeeType] = useState("all");
  const [eventMode, setEventMode] = useState("all");
  const [typeOfEvent, setTypeOfEvent] = useState("all");

  useEffect(() => {
    console.log("Called");
    fetch("https://event-radar.herokuapp.com/getEvents")
      .then((res) => res.json())
      .then((events) => {
        console.log(events);
        setEvents(events);
        setInitializing(false);
      });
  }, []);

  function getEvents() {
    return events
      .filter((event) =>
        event.name.toLowerCase().includes(searchText.toLowerCase())
      )
      .filter((event) => {
        if (eventMode == "all" || event.eventMode == eventMode) return true;
        else false;
      })
      .filter((event) => {
        if (eventFeeType == "all" || event.eventFeeType == eventFeeType)
          return true;
        else false;
      })
      .filter((event) => {
        if (typeOfEvent == "all" || event.typeOfEvent == typeOfEvent)
          return true;
        else false;
      });
  }
  if (initializing) return <Loader />;

  return (
    <div>
      <div className="mx-auto w-full px-5 md:px-0 sm:w-10/12 2xl:w-2/3 mt-10">
        <div className="relative border-gray-200 border-2  dark:bg-gray-800 sm:rounded-lg">
          <div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
            <div className="w-full">
              <form className="flex items-center">
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
                    type="text"
                    id="simple-search"
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    required
                  />
                </div>
              </form>
            </div>

            <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
              <div className="flex items-center w-full space-x-3 md:w-auto">
                <select
                  onChange={(e) => {
                    setEventFeeType(e.target.value);
                  }}
                  id="actionsDropdown"
                  className="w-full px-5 py-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  <option value="all">All</option>
                  <option value="free">Free</option>
                  <option value="paid">Paid</option>
                </select>
              </div>
              <div className="flex items-center w-full space-x-3 md:w-auto">
                <select
                  onChange={(e) => {
                    setEventMode(e.target.value);
                  }}
                  id="actionsDropdown"
                  className="w-full px-5 py-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  <option value="all">All</option>
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                </select>
              </div>
              <div className="flex items-center w-full space-x-3 md:w-auto">
                <select
                  onChange={(e) => {
                    setTypeOfEvent(e.target.value);
                  }}
                  id="actionsDropdown"
                  className="w-full px-5 py-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  <option value="all">All</option>
                  <option value="hackathon">Hackathon</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full sm:w-10/12 2xl:w-2/3 px-5 md:px-0 mx-auto mt-10">
        {getEvents().map((event) => (
          <div
            key={event._id}
            className="max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {event.name}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {event.description.split(" ").slice(0, 20).join(" ")}...
            </p>
            <button
              onClick={() => {
                navigate("/event", { state: event });
              }}
              className="inline-flex items-center px-10 py-2 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
