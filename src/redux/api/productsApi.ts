import { baseApi } from "./baseApi";

const productsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all products
    getAllProducts: build.query({
      query: (params) => {
        const queryString = new URLSearchParams(params).toString();
        // console.log(queryString)
        return({
        url: `/products?${queryString}`,
        method: "GET",
      })},
      providesTags: ["Products"],
    }),
    // get featured products
    getFeaturedProducts: build.query({
      query: () => ({
        url: `/products/featured`,
        method: "GET",
      }),
      providesTags: ["Products"],
    }),
    // get single products
    getSingleProducts: build.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: ["Products"],
    }),
    // get all products
    createProducts: build.mutation({
      query: (payload: any) => {
        return {
          url: `/products`,
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["Products"],
    }),
    // crate products products
    updateProducts: build.mutation({
      query: (payload: any) => {
        return {
          url: `/products/${payload.id}`,
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["Products"],
    }),
    // create Featured products
    createFeaturedProducts: build.mutation({
      query: (id: any) => {
        return {
          url: `/products/create-featured/${id}`,
          method: "PUT",
          body: id,
        };
      },
      invalidatesTags: ["Products"],
    }),
    
    // delete products
    deleteProducts: build.mutation({
      query: (id: any) => {
        return {
          url: `/products/create-featured/${id}`,
          method: "PUT",
          body: id,
        };
      },
      invalidatesTags: ["Products"],
    }),

    // filter
    filterProduct: build.query({
      query: (params: any) => {
        return {
          url: `/products?searchTerm=${params}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useCreateFeaturedProductsMutation,
  useCreateProductsMutation,
  useDeleteProductsMutation,
  useGetAllProductsQuery,
  useGetFeaturedProductsQuery,
  useGetSingleProductsQuery,
  useUpdateProductsMutation,
  useFilterProductQuery
} = productsApi;
