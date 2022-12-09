import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../models/IUser";


export const userAPI = createApi({
    reducerPath: "userAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/",
    }),
    endpoints: (build) => ({
        fetchUsers: build.query<IUser[], string>({
            query: () => `users`
        }),
        fetchUser: build.query<IUser, number>({
            query: (id) => ({
                url: `users/${id}`,
                method: 'GET',
            })
        }),
        createUser: build.mutation<IUser, IUser>({
            query: (user) => ({
                url: `users`,
                method: 'POST',
                body: user
            })
        }),
    }),
});

export const { useFetchUsersQuery, useLazyFetchUserQuery, useCreateUserMutation } = userAPI