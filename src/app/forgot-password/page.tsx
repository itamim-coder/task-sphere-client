"use client";

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
import { useForgotPasswordMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";

const ForgotPasswordPage = () => {
  const form = useForm({
    defaultValues: { email: "" },
  });

  const [forgotPassword, { isSuccess, isLoading }] = useForgotPasswordMutation();

  const onSubmit = async (data: { email: string }) => {
    console.log("Forgot Password Data:", data);
    try {
      const res = await forgotPassword(data);
      console.log(res);
      if ("data" in res && res.data.statusCode === 200) {
        toast.success("Check Your Email for Reset Link");
      } else {
        throw new Error("Something Went Wrong, Try Again");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Forgot Password
        </h2>
        
        {isSuccess ? (
          <p className="text-green-600 text-center font-semibold">
            ✅ A reset link has been sent to your email. Please check your inbox.
          </p>
        ) : (
          <>
            <p className="text-gray-600 text-center mb-6">
              Enter your email, and we'll send you a password reset link.
            </p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  rules={{ required: "Email is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          {...field}
                          disabled={isLoading} // Disable while loading
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send Reset Link"}
                </Button>
              </form>
            </Form>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
