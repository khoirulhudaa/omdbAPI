import { combineReducers } from "redux";
import VideoSlice from './videoSlice'

const rootReducers = combineReducers({
    videoReducers: VideoSlice,
    // Reducers lainnya....
})

export default rootReducers;