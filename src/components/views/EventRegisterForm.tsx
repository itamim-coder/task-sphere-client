import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useRegisterEventMutation } from "@/redux/features/booking/bookingApi";
import { useAppSelector } from "@/redux/hooks";
import { useState } from "react";
import { toast } from "sonner";

const EventRegisterForm = ({ params }: any) => {
  // console.log(params);
  const user = useAppSelector(selectCurrentUser); // User details from Redux
  const [ticket, setTickets] = useState(1); // Counter for tickets

  const handleDecrement = () => {
    if (ticket > 1) setTickets(ticket - 1);
  };

  const handleIncrement = () => {
    setTickets(ticket + 1);
  };
  const [eventBooking] = useRegisterEventMutation();

  const handleRegister = async () => {
    try {
      const bookingData = {
        event: params,
        ticket,
      };
      const res = await eventBooking(bookingData).unwrap();
      //   console.log(res);

      if (res?._id) {
        toast.success("Event Registered Successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="w-full bg-blue-600 text-white text-center py-2 px-4 mt-4 rounded-lg hover:bg-blue-700 transition duration-300"
          variant="outline"
        >
          Register Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Register for Event</DialogTitle>
          <DialogDescription>
            Provide details to register for the event.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* User Details */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={user?.name || ""}
              disabled
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              value={user?.email || ""}
              disabled
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right">
              Phone
            </Label>
            <Input
              id="phone"
              value={user?.phone || ""}
              disabled
              className="col-span-3"
            />
          </div>

          {/* Ticket Counter */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Tickets</Label>
            <div className="col-span-3 flex items-center gap-2">
              <Button onClick={handleDecrement} variant="outline">
                -
              </Button>
              <span className="px-4">{ticket}</span>
              <Button onClick={handleIncrement} variant="outline">
                +
              </Button>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleRegister}>
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default EventRegisterForm;
