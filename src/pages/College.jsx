import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { collegeInfo } from "../assets/data/colleges";
import Loader from "../components/Loader";

function College() {
  // const events = [1, 2, 3];
  const navigate = useNavigate();
  const college = useLocation().state;
  const [events, setEvents] = useState([]);
  const [initializing, setInitializing] = useState(true);

  async function getEvents() {
    let datas = await Promise.all(
      college.events.map(async (eventId) => {
        let response = await fetch(
          `https://event-radar.herokuapp.com/getEvent/${eventId}`
        );
        let json = await response.json();
        return json;
      })
    );
    setEvents(datas);
  }
  useEffect(() => {
    getEvents().then(() => {
      setInitializing(false);
    });
  }, []);

  if (initializing) return <Loader />;
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className=" bg-slate-50 w-full flex items-center justify-center">
        <h1 className="text-4xl font-bold p-10">
          {collegeInfo[college.collegeId].name}
        </h1>
      </div>
      {/* Cards Section */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full sm:w-10/12 2xl:w-2/3 px-5 md:px-0 mx-auto mt-10">
        {events.map((event) => (
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

export default College;
