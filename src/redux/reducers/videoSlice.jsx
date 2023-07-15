import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listVideo: null,
    genre: 'action',
    title: null,
    getByTitle: ''
}

const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        getVideos: (state, {payload}) => {
            state.listVideo = payload.Search ? payload.Search : payload
        },
        changeGenre: (state, {payload}) => {
            state.genre = payload
        },
        changeTitle: (state, {payload}) => {
            state.title = payload
        },
        changeGetByTitle: (state, {payload}) => {
            state.getByTitle = payload
        }
    }
})

export const { getVideos, changeGenre, changeTitle, changeGetByTitle } = videoSlice.actions
export default videoSlice.reducer