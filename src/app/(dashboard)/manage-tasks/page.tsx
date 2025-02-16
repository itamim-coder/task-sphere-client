"use client";
import Loading from "@/app/loading";
import AddTaskForm from "@/components/views/AddTaskForm";
import TaskList from "@/components/views/TaskList";

import { useGetAllEventsQuery } from "@/redux/features/events/eventsApi";

import Image from "next/image";
import React from "react";

const ManageTasks = () => {
  return (
    <div className="min-h-screen flex-1 rounded-xl bg-muted/50 p-4 md:min-h-min">
      <div className="flex justify-between mb-6">
        {" "}
        <h1 className="text-xl font-bold"></h1>
        <AddTaskForm />
      </div>
      <div >
        <TaskList />
      </div>
    </div>
  );
};

export default ManageTasks;
