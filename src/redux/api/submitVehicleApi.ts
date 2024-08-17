import { baseApi } from "./baseApi";

const usersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all pet
    getAllVehicle: build.query({
      query: () => ({
        url: `/vehicleInfo`,
        method: "GET",
      }),
      providesTags: ["Vehicles"],
    }),
    // get all pet
    submitVehicle: build.mutation({
      query: (payload: any) => {
        return {
          url: `/vehicleInfo`,
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["Vehicles"],
    }),
  }),
});

export const { useGetAllVehicleQuery, useSubmitVehicleMutation } = usersApi;
