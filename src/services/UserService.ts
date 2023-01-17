import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../models/IUser";


export const userAPI = createApi({
    reducerPath: "userAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5001/",
    }),
    endpoints: (build) => ({
        fetchUsers: build.query<IUser[], string>({
            query: () => `users`
        }),
        fetchUser: build.query<IUser, string>({
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
        updateUser: build.mutation<IUser, IUser>({
            query: (body) => ({
                url: `users/${body.id}`,
                method: 'PUT',
                body
            })
        }),
    }),
});

export const { useFetchUsersQuery, useLazyFetchUserQuery, useCreateUserMutation, useUpdateUserMutation } = userAPI