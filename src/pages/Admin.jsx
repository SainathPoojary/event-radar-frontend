import React, { useEffect, useState } from "react";
import Login from "../components/Login";
import { colleges } from "../assets/data/colleges";

function Admin() {
  const [user, setUser] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const json = {};
    for (const [key, value] of formData.entries()) {
      if (key === "startDate" || key === "endDate") {
        json[key] = new Date(value).getTime();
      } else {
        json[key] = value;
      }
    }

    try {
      const response = await fetch(
        "https://event-radar.herokuapp.com/addEvent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(json),
        }
      );
      if (response.ok) {
        console.log("Event added successfully");
        console.log(await response.json());
        form.reset();
      } else {
        console.error("Failed to add event");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(true);
    }
  }, []);

  function fillData(link) {
    fetch("https://event-radar.herokuapp.com/scrape", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: link }),
    })
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("name").value = data.name;
        document.getElementById("description").value = data.description;
      })
      .catch((error) => console.error(error));
  }

  if (!user) return <Login setUser={setUser} />;

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Add a new event
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            {/* Registration Link Input */}
            <div className="sm:col-span-2">
              <label
                htmlFor="registrationLink"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Registration Link
              </label>
              <input
                onChange={(e) => fillData(e.target.value)}
                type="url"
                name="registrationLink"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Registration Link"
                required
              />
            </div>

            {/* Event name Input */}

            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Event Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Event Name"
                required
              />
            </div>

            {/* College name Input */}
            <div className="sm:col-span-2">
              <label
                htmlFor="collegeId"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                College
              </label>
              <select
                required
                name="collegeId"
                id="category"
                defaultValue=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                {colleges.map((college, index) => (
                  <option key={index} value={index}>
                    {college}
                  </option>
                ))}
                <option disabled value="">
                  Select category
                </option>
              </select>
            </div>

            {/* Online/Offline Input */}
            <div>
              <label
                htmlFor="eventMode"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Online/Offline
              </label>
              <select
                required
                name="eventMode"
                id="eventMode"
                defaultValue=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option disabled value="">
                  Select category
                </option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </select>
            </div>

            {/* typeOfEvent Input */}
            <div className="w-full">
              <label
                htmlFor="typeOfEvent"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Type of Event
              </label>
              <select
                required
                name="typeOfEvent"
                id="typeOfEvent"
                defaultValue=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option disabled value="">
                  Select category
                </option>
                <option value="hackathon">Hackathon</option>
                <option value="other">Other Event</option>
              </select>
            </div>

            {/* Free/Paid Input */}

            <div>
              <label
                htmlFor="eventFeeType"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Free/Paid
              </label>
              <select
                name="eventFeeType"
                id="eventFeeType"
                defaultValue=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option disabled value="">
                  Select category
                </option>
                <option value="free">Free</option>
                <option value="paid">Paid</option>
              </select>
            </div>

            {/* Fee Input */}
            <div className="w-full">
              <label
                htmlFor="fee"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Fee
              </label>
              <input
                type="number"
                name="fee"
                id="fee"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Rs 2999"
                required
              />
            </div>

            {/* Start Date Input */}
            <div className="w-full">
              <label
                htmlFor="startDate"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Start Date
              </label>
              <input
                type="date"
                name="startDate"
                id="startDate"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              />
            </div>

            {/* End Date Input */}
            <div className="w-full">
              <label
                htmlFor="endDate"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                End Date
              </label>
              <input
                type="date"
                name="endDate"
                id="endDate"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              />
            </div>

            {/* Description Input */}

            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                rows={8}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your description here"
                defaultValue={""}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Add Event
          </button>
        </form>
      </div>
    </section>
  );
}

export default Admin;
