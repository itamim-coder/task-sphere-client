import { baseApi } from "@/redux/api/baseApi";

const AUTH_URL = "/auth";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: ["user"],
    }),
    userSignup: build.mutation({
      query: (signupData) => ({
        url: `${AUTH_URL}/register`,
        method: "POST",
        data: signupData,
      }),
      invalidatesTags: ["user"],
    }),
    userProfile: build.query({
      query: () => {
        return {
          url: `${AUTH_URL}/profile`,
          method: "GET",
        };
      },
      providesTags: ["user"],
    }),
    profileUpdate: build.mutation({
      query: ({ updatedData }) => {
        return {
          url: `${AUTH_URL}/profile`,
          method: "PUT",
          data: updatedData,
        };
      },
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useUserSignupMutation,
  useUserLoginMutation,
  useUserProfileQuery,
  useProfileUpdateMutation,
} = authApi;
