import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com',
    }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: ({ url, method, payload }) => {
                let headers: any = {
                    'Content-Type': 'application/json',
                };

                if (localStorage.getItem('token')) {
                    headers = {
                        ...headers,
                        authorization:
                            'Bearer ' + localStorage.getItem('token'),
                    };
                }

                let parameter: any = {
                    url: url,
                    method: method,
                    headers,
                };

                if (String(method).toLowerCase() === 'get') {
                    parameter = { ...parameter, params: payload };
                } else {
                    parameter = { ...parameter, body: payload };
                }

                return parameter;
            },
        }),
    }),
});
export default apiSlice;
