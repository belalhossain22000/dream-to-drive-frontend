import { baseApi } from "./baseApi";

const usersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all pet
    getAllUsers: build.query({
      query: () => ({
        url: `/users`,
        method: "GET",
      }),
      providesTags: ["Users"],
    }),
    // get all pet
    updateUsersProfile: build.mutation({
      query: (payload: any) => {
        return {
          url: `/users/profile`,
          method: "PUT",
          body: payload,
        };
      },
      invalidatesTags: ["Users"],
    }),
  }),
});

export const { useGetAllUsersQuery, useUpdateUsersProfileMutation } = usersApi;
