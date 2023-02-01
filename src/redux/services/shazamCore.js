import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        '4924414459mshfcfa4f722b4563dp1b0040jsn595fe6913461'
      )
      headers.set('X-RapidAPI-Host', 'shazam-core.p.rapidapi.com\n')
      return headers
    },
  }),
  endpoints: (builder) => ({
    getTopChart: builder.query({
      query: () => `charts/world`,
    }),
    getGenreList: builder.query({
      query: () => `genres`,
    }),
    getGenreChart: builder.query({
      query: (genreId) => `charts/genre/${genreId}`,
    }),
    getTrack: builder.query({
      query: (trackId) => `tracks/${trackId}`,
    }),
  }),
})

export const {
  useGetTopChartQuery,
  useGetGenreListQuery,
  useGetGenreChartQuery,
  useGetTrackQuery,
} = shazamCoreApi
