"use client";
import { Camera, LogOut, Pencil, Settings } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  useProfileUpdateMutation,
  useUserProfileQuery,
} from "@/redux/features/auth/authApi";
import Loading from "@/app/loading";
import { toast } from "sonner";
import { removeUserInfo } from "@/services/auth.services";
import { authKey } from "@/constants/storageKey";
import { useRouter } from "next/navigation";

const DashboardPage = () => {
  const router = useRouter();
  const [editMode, setEditMode] = useState(false);
  const { data: profileData, isLoading } = useUserProfileQuery(undefined);
  const [updateProfileData] = useProfileUpdateMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: profileData?.username || "",
      password: "",
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  const onSubmit = async (data: any) => {
    try {
      const res = await updateProfileData({
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
  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/");
  };
  return (
    <section className="container mx-auto max-w-3xl py-16">
      <Card className="shadow-lg rounded-lg bg-white p-6 text-center">
        <div className="relative mx-auto w-32 h-32">
          <Avatar className="size-full border-4 border-purple-500">
            <AvatarImage
              src="https://shadcnblocks.com/images/block/avatar-1.webp"
              alt="User Avatar"
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <button className="absolute bottom-2 right-2 flex items-center justify-center size-10 bg-purple-500 rounded-full text-white hover:bg-purple-600 transition">
            <Camera className="size-5" />
          </button>
        </div>

        <h2 className="mt-4 text-2xl font-bold">{profileData?.username}</h2>
        <p className="text-gray-500">{profileData?.email}</p>

        <Button
          className="mt-6 w-full bg-purple-500 text-white hover:bg-purple-600"
          onClick={() => setEditMode(!editMode)}
        >
          <Pencil className="size-4 mr-2" /> Edit Profile
        </Button>

        <div className="mt-4 flex justify-between">
          <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
            <Settings className="size-4 mr-2" /> Settings
          </Button>
          <Button
            onClick={logOut}
            variant="ghost"
            className="text-red-500 hover:text-red-700"
          >
            <LogOut className="size-4 mr-2" /> Logout
          </Button>
        </div>
      </Card>

      {editMode && (
        <Card className="mt-6 shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold">Edit Profile</h3>
          <form
            className="mt-4 flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <Label>Name</Label>
              <Input
                type="text"
                defaultValue={profileData?.username}
                {...register("username", { required: "Name is required" })}
              />
              {errors.username && (
                <span className="text-red-600">{errors.username.message}</span>
              )}
            </div>
            <div>
              <Label>New Password</Label>
              <Input
                type="password"
                {...register("password")}
                placeholder="Enter new password"
              />
            </div>
            <Button
              className="bg-purple-500 text-white hover:bg-purple-600 w-full mt-4"
              type="submit"
            >
              Save Changes
            </Button>
          </form>
        </Card>
      )}
    </section>
  );
};

export default DashboardPage;
