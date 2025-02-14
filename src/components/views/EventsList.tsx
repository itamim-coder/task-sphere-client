"use client";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Edit, Trash } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import UpdateEventForm from "./UpdateEventForm";
import {
  useDeleteEventMutation,
  useGetUserCreatedEventQuery,
} from "@/redux/features/events/eventsApi";
import { toast } from "sonner";
import Loading from "@/app/loading";

const EventsList = () => {
  // const { data: userEventData, isLoading } =
  //   useGetUserCreatedEventQuery(undefined);
  // if (isLoading) {
  //   <Loading />;
  // }
  // const [deleteEvent] = useDeleteEventMutation();
  // // Display loading spinner while data is loading
  // const handleDelete = async (id: string) => {
  //   toast.promise(deleteEvent(id), {
  //     loading: "Deleting...",
  //     success: "Delete Successfully",
  //     error: "Could not delete.",
  //   });
  // };
  const userEventData = [];
  return (
    <div className="">
      <Card x-chunk="dashboard-06-chunk-0">
        <CardHeader>
          <CardTitle className="text-lg font-bold">
            Events created by <span className="text-primary">Me</span>
          </CardTitle>
          <CardDescription>
            Manage your events and view their details.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table className="overflow-x-scroll">
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Location</TableHead>
                <TableHead> Available Slot</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {userEventData?.map((event: any) => (
                <TableRow key={event._id}>
                  <TableCell className="font-medium">{event.name}</TableCell>
                  <TableCell>{event.location}</TableCell>
                  <TableCell>{event.maxAttendees}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{event.status}</Badge>
                  </TableCell>
                  <TableCell className="flex justify-start items-center gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Edit className="h-4 w-4 cursor-pointer" />
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>
                            Update This{" "}
                            <span className="text-primary">Event</span>
                          </DialogTitle>
                          <DialogDescription>
                            Give Proper Information
                          </DialogDescription>
                        </DialogHeader>
                        <UpdateEventForm eventData={event} />
                      </DialogContent>
                    </Dialog>

                    <Popover>
                      <PopoverTrigger
                        onClick={() => handleDelete(event?._id)}
                        asChild
                      >
                        <Trash className="h-4 w-4 text-primary cursor-pointer" />
                      </PopoverTrigger>
                    </Popover>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventsList;
