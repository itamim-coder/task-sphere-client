"use client";
import React from "react";


const DashboardPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Profile Section */}
        <div className="aspect-video rounded-xl bg-gradient-to-r from-blue-400 to-teal-500 text-white flex items-center justify-center shadow-lg hover:scale-105 transition duration-300 relative">
          <div className="absolute top-4 left-4 bg-white/30 text-white text-sm py-1 px-3 rounded-full">
            Profile
          </div>
          <div className="text-center">
            <img
              className="w-24 h-24 rounded-full mx-auto mb-4"
              src="https://www.w3schools.com/w3images/avatar2.png"
              alt="Profile Avatar"
            />
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-sm">User bio or description...</p>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="aspect-video rounded-xl bg-gradient-to-r from-purple-400 to-pink-500 text-white flex items-center justify-center shadow-lg hover:scale-105 transition duration-300 relative">
          <div className="absolute top-4 left-4 bg-white/30 text-white text-sm py-1 px-3 rounded-full">
            Recent Activity
          </div>
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mb-4 mx-auto text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 9l4-4m0 0l4 4m-4-4v12"
              />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Last Booking</h3>
            <p className="text-sm">
              Completed booking for event XYZ on 12th Jan.
            </p>
            <p className="text-xs text-white/60 mt-2">
              View all recent activity
            </p>
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div className="aspect-video rounded-xl bg-gradient-to-r from-yellow-400 to-red-500 text-white flex items-center justify-center shadow-lg hover:scale-105 transition duration-300 relative">
          <div className="absolute top-4 left-4 bg-white/30 text-white text-sm py-1 px-3 rounded-full">
            Upcoming Events
          </div>
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mb-4 mx-auto text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 9l4-4m0 0l4 4m-4-4v12"
              />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Upcoming Event</h3>
            <p className="text-sm">
              Music concert happening on 20th Jan, tickets available.
            </p>
            <p className="text-xs text-white/60 mt-2">
              View all upcoming events
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min"></div>
    </div>
  );
};

export default DashboardPage;
