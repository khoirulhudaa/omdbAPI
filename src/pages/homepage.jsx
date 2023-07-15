import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ListVideos, MainFrame, Navbar } from '../comnents'
import { getVideos } from '../redux/reducers/videoSlice'
import API from '../services/api'

const Homepage = () => {
  const dispatch = useDispatch()
  const genre = useSelector(state => state.videoReducers.genre)
  const title = useSelector(state => state.videoReducers.title)

  useEffect(() => {
    const getAllVideos = async () => {
      if(title !== null && title !== '') {
        const res = await API.getAllByTitle(title);
        dispatch(getVideos(res.data));
        console.log('data by title:' ,res.data);
      }else { 
        const res = await API.getAll(genre);
        dispatch(getVideos(res.data));
        console.log('data:',res.data);
      }
      try {
      } catch (error) {
        console.log(error)
        dispatch(getVideos(error.message));
      }
    };

    getAllVideos()
  }, [genre, title])

  return (
    <div>
      <Navbar />
      <div className='block overflow-x-hidden relative top-[60px] p-[10px] lg:p-[24px] w-screen h-max'>
        <div className='w-[100%] w-[100%] overflow-hidden h-max p-[10px]'>
          <MainFrame />
        </div>
        <div className='w-max flex items-center h-max overflow-x-auto overflow-y-auto p-[10px]'>
          <ListVideos />
        </div>
      </div>
    </div>
  )
}

export default Homepage