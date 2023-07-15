import React, { useEffect, useState } from 'react'
import { FaBell, FaChevronLeft, FaSearchengin } from "react-icons/fa6";
import { Foto } from '../../assets';
import { useDispatch } from 'react-redux'
import { changeTitle } from '../../redux/reducers/videoSlice'
import { useLocation } from 'react-router-dom';

const Navbar = () => {

 const dispatch = useDispatch()
 const location = useLocation()

 const [activeSearch, setActiveSearch] = useState(false) 

 useEffect(() => {
    dispatch(changeTitle(null))
 }, [])

 const handleSearch = (e) => {
    dispatch(changeTitle(e))
 }

  return (
    <div className='fixed z-[3] w-screen h-max pl-[25px] lg:pl-[40px] pr-[25px] lg:pr-[60px] py-[12px] shadow-lg bg-white flex items-center justify-between'>
    {
        activeSearch ? (
            <div className='w-[100vw] h-[60px] left-0 top-0 absolute flex lg:hidden items-center bg-white px-5 z-[4]'>
                <div onClick={() => setActiveSearch(false)} className='w-[40px] mr-4 h-[40px] border relative border-slate-400 rounded-full flex items-center cursor-pointer justify-center'>
                    <FaChevronLeft />
                </div>
                <div className='w-[90%] flex items-center border border-slate-300 bg-slate-100 h-[40px] w-[90%] rounded-full'>
                    <input type='text' onChange={(e) => handleSearch(e.target.value)} name='search' className='border-0 bg-transparent outline-0 px-4 py-2 w-[90%]' />
                    <div className='cursor-pointer hover:brightness-[94%] rounded-br-full bg-slate-200 rounded-tr-full flex items-center justify-center h-full w-[15%]'>
                        <FaSearchengin />
                    </div>
                </div>
            </div>
        ):
        <></>
    }
      <div onClick={() => window.location.reload()} className='flex border border-slate-500 rounded-lg w-max px-2 py-1 items-center cursor-pointer hover:brightness-[90%] active:scale-[0.99]'>
        <h2 className='font-bold text-black text-[18px]'>OMDB API</h2>
      </div>
      <div className='w-max flex items-center'>
        {
            location.pathname === '/' && (
                <>
                    <div className='w-max hidden lg:flex items-center border border-slate-300 bg-slate-100 h-[40px] w-[550px] rounded-full'>
                        <input type='text' onChange={(e) => handleSearch(e.target.value)} name='search' className='border-0 bg-transparent outline-0 px-4 py-2 w-[85%]' />
                        <div className='cursor-pointer hover:brightness-[94%] rounded-br-full bg-slate-200 rounded-tr-full flex items-center justify-center h-full w-[15%]'>
                            <FaSearchengin />
                        </div>
                    </div>
                    <div onClick={(e) => handleSearch(e.target.value)} className='w-[40px] ml-4 h-[40px] border flex lg:hidden relative border-slate-400 rounded-full flex items-center cursor-pointer justify-center'>
                        <FaSearchengin />
                    </div>
                </>
            )
        }
        <div className='w-[40px] hidden lg:flex ml-4 h-[40px] border relative border-slate-400 rounded-full items-center cursor-pointer justify-center'>
            <FaBell />
            <div className='w-[8px] h-[8px] bg-green-400 absolute top-2 right-3 rounded-full'>
            </div>
        </div>
        <div className='bg-slate-300 ml-4 w-[40px] border border-slate-400 cursor-pointer hover:brightness-[92%] h-[40px] rounded-full flex justify-center items-center overflow-hidden bg-sz-contain'>
            <img src={Foto} alt="foto-profile" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
