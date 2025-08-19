import { createApi, fetcbaseQuery } from "reduxjs/toolkit/query/react";
createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyhson.com" }), // here we need o mention the ase url from where the data will be fetched. The api build by express and MongoDB but here we will use a Dummy API
  endPoints: (builder) => ({
    getAllProducts: builder.query({
      quer: () => "/products",
    }),
  }),
});
