import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/',
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
      query: () => `v1/charts/world`,
    }),
    getGenreList: builder.query({
      query: () => `v1/genres`,
    }),
    getGenreChart: builder.query({
      query: (genreId) => `v1/charts/genre/${genreId}`,
    }),
    getSongDetails: builder.query({
      query: (trackId) => `v1/tracks/details?track_id=${trackId}`,
    }),
    getSongRelated: builder.query({
      query: (trackId) => `v1/tracks/related?track_id=${trackId}`,
    }),
    getArtistDetails: builder.query({
      query: (artistId) => `v2/artists/details?artist_id=${artistId}`,
    }),
  }),
})

export const {
  useGetTopChartQuery,
  useGetGenreListQuery,
  useGetGenreChartQuery,
  useGetSongDetailsQuery,
  useGetArtistDetailsQuery,
  useGetSongRelatedQuery,
} = shazamCoreApi
