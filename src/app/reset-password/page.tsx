"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { toast } from "sonner";
import { useResetPasswordMutation } from "@/redux/features/auth/authApi";
import { useEffect } from "react";
import { authKey } from "@/constants/storageKey";
import { deleteCookies } from "@/services/deleteCookies";

const ResetPasswordPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("userId");
  const token = searchParams.get("token");
  //   console.log({ id, token });
  const form = useForm({
    defaultValues: { password: "" },
  });
  const router = useRouter();

  const [resetPassword, { isLoading, isSuccess }] = useResetPasswordMutation();
  useEffect(() => {
    if (!token) return;
    localStorage.setItem(authKey, token);
  }, [token]);

  const onSubmit = async (values) => {
    console.log(values);
    const updatedData = { ...values, id };

    try {
       const res = await resetPassword(updatedData);

       if ('data' in res && res.data.statusCode === 200) {
          toast.success('Password Reset Successful');
          localStorage.removeItem(authKey);
          deleteCookies([authKey, 'refreshToken']);
          router.push('/login');
       } else {
          throw new Error('Something Went Wrong, Try Again');
       }
    } catch (error) {
       toast.success('Something Went Wrong, Try Again');
    }
 };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Reset Password
        </h2>

        {isSuccess ? (
          <p className="text-green-600 text-center font-semibold">
            ✅ Your password has been reset. You can now log in.
          </p>
        ) : (
          <>
            <p className="text-gray-600 text-center mb-6">
              Enter a new password to reset your account.
            </p>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                {/* Password Field */}
                <FormField
                  control={form.control}
                  name="password"
                  rules={{ required: "Password is required", minLength: 6 }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>New Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter new password"
                          {...field}
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Resetting..." : "Reset Password"}
                </Button>
              </form>
            </Form>
          </>
        )}
      </div>
    </div>
  );
};

export default ResetPasswordPage;
