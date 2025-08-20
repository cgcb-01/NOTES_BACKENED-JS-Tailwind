import { createApi, fetchBaseQuery } from "reduxjs/toolkit/query/react";
createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyhson.com" }), // here we need o mention the ase url from where the data will be fetched. The api build by express and MongoDB but here we will use a Dummy API
  endPoints: (builder) => ({
    //GetAllProducts from base+endpoint url (reading) so quer for changes or updates: mutation
    getAllProducts: builder.query({
      query: () => "/products",
    }),
  }),
});
export const { useGetAllProductsQuery } = productsApi; //useGetAllProductsQuery is a hook that can be used in components to fetch data
