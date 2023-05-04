import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Event() {
  const location = useLocation();
  const navigate = useNavigate();
  const event = location.state;
  const date1 = new Date(event.startDate);
  const date2 = new Date(event.endDate);
  const hourDiff = Math.abs(date2.getTime() - date1.getTime()) / 36e5;
  let day = date1.getDate();
  let month = date1.toLocaleString("default", { month: "long" });
  const startDate = `${day} ${month}`;
  day = date2.getDate();
  month = date2.toLocaleString("default", { month: "long" });
  const endDate = `${day} ${month}`;

  useEffect(() => {
    console.log(event);
  }, []);
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className=" bg-slate-50 w-full flex items-center justify-center">
        <h1 className="text-4xl font-medium p-10">{event.name}</h1>
      </div>

      <div className="w-10/12 md:w-2/3 mt-5">
        <p className="text-xl font-semibold">Description:</p>
      </div>
      <div className="flex w-10/12 md:w-2/3 mx-auto my-4 space-y-10 md:space-y-0 md:space-x-10 items-start flex-col md:flex-row">
        {/* Left */}
        <div className="text-xl flex-[2]">{event.description}</div>

        {/* Right */}
        <div className="flex-1 h-[40vh] w-full">
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 h-64 md:h-3/5">
            <div className="flex-1 flex flex-col space-y-3">
              <div className="rounded-2xl bg-indigo-100 flex-1 flex justify-center items-center ">
                <p className="md:text-[1.3vw] w-full text-center font-medium">
                  {event.eventMode}
                </p>
              </div>
              <div className=" rounded-2xl bg-indigo-100 flex-1 flex justify-center items-center ">
                <p className="md:text-[1.3vw]  w-full text-center font-medium">
                  {hourDiff}hr
                </p>
              </div>
            </div>
            <div className="flex-1 rounded-2xl bg-indigo-100  flex justify-center items-center ">
              <p className="md:text-[1.3vw] w-full text-center font-medium">
                <p>{startDate}</p> to <p>{endDate}</p>
              </p>
            </div>
          </div>
          <button
            onClick={() => (window.location.href = event.registrationLink)}
            className="mt-3 shadow-4xl w-full rounded-xl border border-indigo-700 bg-indigo-600 py-4 px-6 font-semibold text-white transition duration-200 ease-in-out hover:bg-indigo-700 focus:ring focus:ring-indigo-300"
          >
            Register
          </button>
          <button
            onClick={() => {
              const startDateTime = date1
                .toISOString()
                .replace(/-|:|\.\d+/g, "");
              const endDateTime = date2.toISOString().replace(/-|:|\.\d+/g, "");
              window.open(
                `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                  event.name
                )}&dates=${encodeURIComponent(
                  startDateTime
                )}%2F${encodeURIComponent(
                  endDateTime
                )}&details=${encodeURIComponent(
                  event.description
                )}&location=${encodeURIComponent(event.venue)}`,
                "_blank"
              );
            }}
            className="mt-3 shadow-4xl w-full rounded-xl bg-indigo-100 py-4 px-6 font-medium text-black transition duration-200 ease-in-out hover:bg-indigo-200 "
          >
            Add to Calendar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Event;
