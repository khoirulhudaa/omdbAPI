import React, { useEffect, useState } from 'react'
import { Wallpaper1, Wallpaper2, Wallpaper3, Wallpaper4, Wallpaper5, Wallpaper6} from '../../assets'
import { useSelector } from 'react-redux'

const MainFrame = () => {

  const [listVideoMain, setListVideoMain] = useState([])
  const dataVideoMain = useSelector(state => state.videoReducers.listVideo)
  const genre = useSelector(state => state.videoReducers.genre)
  const title = useSelector(state => state.videoReducers.title)

  useEffect(() => {
    setListVideoMain(dataVideoMain)
  })
  return (
    <div className='w-full h-full overflow-hidden'>
        <div className='relative h-max lg:h-[82vh] overflow-hidden rounded-lg w-[100%] border border-slate-100 shadow-lg mb-[20px]'>
            <h1 className='font-bold text-white text-white shadow-lg w-[90%] lg:w-[60%] text-[20px] lg:text-[70px] absolute left-[60px] bottom-[40px] z-[3]'>{genre === 'Cartoon' ? 'Various fun events and fun cartoons' : genre === 'Anime' ? 'Japanese anime with various characters' : genre === 'Action' ? 'Exciting action and cool scenes presented' : genre === 'Sports' ? 'Sports that are physically healthy' : genre === 'Comedy' ? 'Very entertaining witty attitude' : 'A challenging and exciting journey'}</h1>
            <img src={
                genre === 'Cartoon'
                ? Wallpaper1
                : genre === 'Action'
                ? Wallpaper3
                : genre === 'Sports'
                ? Wallpaper5
                : genre === 'Comedy'
                ? Wallpaper4 
                : genre === 'Adventure'
                ? Wallpaper6
                : Wallpaper2    
                } 
                className='w-auto' alt="thumbanil" 
            />
        </div>
        <h2 className='font-bold text-[24px] mb-4 text-black'>OMDB API INTEGRATION</h2>
        <div className='w-max h-max flex items-center'>
            <div className='w-max h-max flex items-center'>
                <h3 className='font-bold  w-max h-max px-[16px] bg-yellow-500 text-white py-[6px] rounded-full text-[16px]'>{title !== null ? (listVideoMain && listVideoMain.length ? listVideoMain[0]?.Type : null) : null}</h3>
                <p className='text-[14px] ml-4'>
                  {
                  title !== null ? 
                    (listVideoMain && listVideoMain.length ? listVideoMain[0]?.Year : null) : null
                  }
                  </p>
            </div>
        </div>
        <div className='w-[100%] font-normal text-[14px] h-max rounded-lg p-5 mt-[30px] bg-slate-100 text-black'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Hic, commodi error saepe eius repellat inventore esse veniam. 
            Qui dignissimos iure laborum. Neque tenetur aperiam in ut consectetur 
            dicta. Omnis, deserunt.
        </div>
    </div>
  )
}

export default MainFrame
