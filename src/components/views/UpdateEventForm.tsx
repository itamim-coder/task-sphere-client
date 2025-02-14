"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getBaseUrl } from "@/helpers/config/envConfig";

import { useRouter } from "next/navigation";

import { useAppSelector } from "@/redux/hooks";
import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { toast } from "sonner";
import { useEventUpdateMutation } from "@/redux/features/events/eventsApi";

const UpdateEventForm = ({ eventData }: any) => {
  const router = useRouter();
  const { _id } = eventData;
  // console.log(eventData);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: eventData?.name,
      location: eventData?.location,
      maxAttendees: eventData?.maxAttendees,
      status: eventData?.status,
      date: eventData?.date,
    },
  });
  const token = useAppSelector(useCurrentToken);
  const [updateEventData] = useEventUpdateMutation();
  //   const onSubmit = async (data: any) => {
  //     try {
  //       const response = await fetch(`${getBaseUrl()}/event/${_id}`, {
  //         method: "PUT",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //         body: JSON.stringify(data),
  //       });
  //       const result = await response.json();
  //       console.log("Backend response:", result);

  //       if (result?.statusCode === 200) {
  //         toast.success("Event updated successfully");
  //         console.log("Redirecting to dashboard...");
  //         router.push("/dashboard");
  //         router.refresh(); // Ensure the new data loads
  //       } else {
  //         toast.error(result.message || "Failed to update Event");
  //       }
  //     } catch (error) {
  //       console.error("Error updating Event:", error);
  //       toast.error("An error occurred while updating the Event.");
  //     }
  //   };
  const onSubmit = async (data: any) => {
    // toast.loading("Updating....");
console.log(data, "update")
    try {
      const res = await updateEventData({
        id: _id,
        updatedData: data,
      });
      console.log(res);
      if (res) {
        toast.success("Updated Successfully");
      }
    } catch (err) {
      toast.error("failed");
      console.log(err);
    }
  };
  return (
    <>
      <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            defaultValue={eventData?.name}
            placeholder="Event Name"
            {...register("name")}
          />
          {errors.name && (
            <span className="text-red-600">{errors.name.message}</span>
          )}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            type="text"
            placeholder="e.g. Roof"
            {...register("location")}
          />
          {errors.location && (
            <span className="text-red-600">{errors.location.message}</span>
          )}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="maxAttendees">Max Attendees</Label>
          <Input
            id="maxAttendees"
            type="number"
            placeholder="e.g. 50"
            {...register("maxAttendees")}
          />
          {errors.maxAttendees && (
            <span className="text-red-600">{errors.maxAttendees.message}</span>
          )}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="status">Status</Label>
          <select
            {...register("status")}
            id="status"
            className="p-1.5 bg-inherit border border-muted rounded-md"
          >
            <option value="unavailable">Unavailable</option>
            <option value="available">Available</option>
          </select>
          {errors.status && (
            <span className="text-red-600">{errors.status.message}</span>
          )}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="date">Date</Label>
          <Input
            id="date"
            type="date"
            placeholder="Event Date"
            {...register("date")}
          />
          {errors.date && (
            <span className="text-red-600">{errors.date.message}</span>
          )}
        </div>

        <Button type="submit" className="w-full">
          Confirm
        </Button>
      </form>
    </>
  );
};

export default UpdateEventForm;
