import React, { useEffect, useState } from 'react'
import { Wallpaper1 } from '../assets'
import { useSelector } from 'react-redux'
import API from '../services/api'
import { Footer, Navbar } from '../comnents'

const detailpage = () => {

  const [data, setData] = useState('')

  const title = useSelector(state => state.videoReducers.getByTitle)
  console.log(title)

  useEffect(() => {
    const getData = async () => {
        const res = await API.getAllByTitle(title)
        setData(res.data)
    }
    getData()
  }, [])


  return (
    <div className='w-screen h-screen'>
        <Navbar />
        <div className='w-screen shadow-lg w-[90vw] ml-auto mr-auto bg-white rounded-lg lg:p-[60px] justify-center lg:flex h-[80vh] relative top-[100px] items-center'>
            <div className='w-[100%] lg:w-[30%] h-max'>
                <div className='w-[90%] h-max lg:h-[400px] overflow-hidden'>
                    <img src={data.Poster} className='w-full rounded-lg' alt="thumbnail" />
                </div>
            </div>
            <div className='w-[100%] lg:w-[70%] lg:px-[30px] pt-[40px] h-max flex flex-wrap'>
                <div className='w-[100%] lg:w-[50%] mb-[30px] flex-col flex'>
                    <h3 className='text-[22px] mb-[20px] font-bold'>Title</h3>
                    <div className='w-max mb-4 h-max flex items-center mr-4 cursor-pointer rounded-full hover:brightness-[90%] active:scale-[0.98] border bg-trnasparent border-slate-400 justify-center text-center px-4 py-1'>
                        {data.Title}
                    </div>
                </div>
                <div className='w-[100%] lg:pl-7 lg:w-[50%] mb-[30px] flex-col flex'>
                    <h3 className='text-[22px] mb-[20px] font-bold'>Actors</h3>
                    <div className='w-max mb-4 h-max flex items-center mr-4 cursor-pointer rounded-full hover:brightness-[90%] active:scale-[0.98] border bg-trnasparent border-slate-400 justify-center text-center px-4 py-1'>
                        {data.Actors}
                    </div>
                </div>
                <div className='w-[100%] lg:w-[50%] mb-[30px] flex-col flex-wrap flex'>
                    <h3 className='text-[22px] mb-[20px] font-bold'>Writer</h3>
                    <div className='w-max mb-4 h-max flex items-center mr-4 cursor-pointer rounded-full hover:brightness-[90%] active:scale-[0.98] border bg-trnasparent border-slate-400 justify-center text-center px-4 py-1'>
                        {data.Writer}
                    </div>
                </div>
                <div className='w-[100%] lg:pl-7 lg:w-[50%] mb-[30px] flex-col flex-wrap flex'>
                    <h3 className='text-[22px] mb-[20px] font-bold'>Released</h3>
                    <div className='w-max mb-4 h-max flex items-center mr-4 cursor-pointer rounded-full hover:brightness-[90%] active:scale-[0.98] border bg-trnasparent border-slate-400 justify-center text-center px-4 py-1'>
                        {data.Released}
                    </div>
                </div>
                <div className='w-[100%] mb-[30px] flex-col flex-wrap flex'>
                    <h3 className='text-[22px] mb-[20px] font-bold'>Plot</h3>
                    <div className='w-[90%] mb-4 h-max flex items-center mr-4'>
                        {data.Plot}
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default detailpage
