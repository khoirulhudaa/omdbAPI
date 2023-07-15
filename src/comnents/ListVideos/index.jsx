import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeGenre, changeGetByTitle, changeTitle } from '../../redux/reducers/videoSlice'
import { useNavigate } from 'react-router-dom'

const ListVideos = () => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [listVideoMain, setListVideoMain] = useState([])
    const [genre, setGenre] = useState("")
    const [title, setTitle] = useState("noSearch")

    const dataVideoMain = useSelector(state => state.videoReducers.listVideo)
    const genreNow = useSelector(state => state.videoReducers.genre)
    const titleNow = useSelector(state => state.videoReducers.title)
    
    useEffect(() => {
        setListVideoMain(dataVideoMain)
        setGenre(genreNow)
        setTitle(titleNow)
    })

    const handleGenre = (e) => {
        axios.get(`http://www.omdbapi.com/?s=${e}&apikey=${import.meta.env.VITE_PUBLIC_API_KEY_YOUTUBEAPI}`)
        .then((result) => {
            const resultJSON = result.data.Search;
            console.log('result', resultJSON)
            dispatch(changeGenre(e))
          })
        .catch(error => {
        console.log(error);
    });
};

const handleReset = () => {
    axios.get(`http://www.omdbapi.com/?s=${genreNow}&apikey=${import.meta.env.VITE_PUBLIC_API_KEY_YOUTUBEAPI}`)
    .then((result) => {
        const resultJSON = result.data.Search;
        console.log('result', resultJSON)
        dispatch(changeGenre(genreNow))
        dispatch(changeTitle(null))
    })
    .catch(error => {
        console.log(error);
    });
}

const handleDetail = (e) => {
    dispatch(changeGetByTitle(e))
    navigate('/detailPage')
  }

return (
    <div className='w-screen h-max'>
        <div className='w-max flex items-center my-8'>
            <div onClick={() => handleGenre('Action')} className={`w-max h-max flex items-center mr-4 cursor-pointer rounded-full hover:brightness-[90%] active:scale-[0.98] border ${genre === 'Action' ? 'bg-yellow-500 text-white' : 'bg-trnasparent border-slate-400 justify-center'} text-center px-4 py-1`}>
                Action
            </div>
            <div onClick={() => handleGenre('Anime')} className={`w-max h-max flex items-center mr-4 cursor-pointer rounded-full hover:brightness-[90%] active:scale-[0.98] border ${genre === 'Anime' ? 'bg-yellow-500 text-white' : 'bg-trnasparent border-slate-400 justify-center'} text-center px-4 py-1`}>
                Anime
            </div>
            <div onClick={() => handleGenre('Sports')} className={`w-max h-max flex items-center mr-4 cursor-pointer rounded-full hover:brightness-[90%] active:scale-[0.98] border ${genre === 'Sports' ? 'bg-yellow-500 text-white' : 'bg-trnasparent border-slate-400 justify-center'} text-center px-4 py-1`}>
                Sports
            </div>
            <div onClick={() => handleGenre('Comedy')} className={`w-max h-max flex items-center mr-4 cursor-pointer rounded-full hover:brightness-[90%] active:scale-[0.98] border ${genre === 'Comedy' ? 'bg-yellow-500 text-white' : 'bg-trnasparent border-slate-400 justify-center'} text-center px-4 py-1`}>
                Comedy
            </div>
            <div onClick={() => handleGenre('Cartoon')} className={`w-max h-max flex items-center mr-4 cursor-pointer rounded-full hover:brightness-[90%] active:scale-[0.98] border ${genre === 'Cartoon' ? 'bg-yellow-500 text-white' : 'bg-trnasparent border-slate-400 justify-center'} text-center px-4 py-1`}>
                Cartoon
            </div>
            <div onClick={() => handleGenre('Adventure')} className={`w-max h-max flex items-center mr-4 cursor-pointer rounded-full hover:brightness-[90%] active:scale-[0.98] border ${genre === 'Adventure' ? 'bg-yellow-500 text-white' : 'bg-trnasparent border-slate-400 justify-center'} text-center px-4 py-1`}>
                Adventure
            </div>
            <div onClick={() => handleReset()} className={`w-max h-max flex items-center mr-4 cursor-pointer rounded-full hover:brightness-[90%] hover:bg-yellow-100 active:scale-[0.98] border bg-trnasparent border-slate-400 justify-center text-center px-4 py-1`}>
                Reset
            </div>
        </div>
        <div className='flex w-screen flex-wrap w-max'>
            {
                title !== null ? (
                    <div onClick={() => handleDetail(listVideoMain?.Title)} className='lg:w-[23%] w-[90%] mr-4 mb-[40px] lg:mb-5 hover:brightness-[96%] active:scale-[0.99] cursor-pointer overflow-hidden min-h-[330px] max-h-[400px] rounded-lg border border-slate-400 shadow-lg block'>
                        <div className='w-[100%] h-[65%] overflow-hidden rounded-lg bg-sz-cover bg-center'>
                            <img src={listVideoMain?.Poster} alt="thumnail" className='w-full h-auto' />
                        </div>
                        <div className='w-[100%] h-[35%] bg-white p-4 flex flex-col justify-start items-start'>
                            <h3 className='w-full font-bold text-[18px]'>{listVideoMain?.Title}</h3>
                            <p className='font-500 text-[14px]'>{listVideoMain?.Title}</p>
                            <small>{listVideoMain?.Type}</small>
                        </div>
                    </div>
                ): 
                listVideoMain !== '' || listVideo !== null && (
                    listVideoMain?.map((data, index) => (
                        <div key={index} onClick={() => handleDetail(data.Title)} className='lg:w-[23%] w-[90%] mr-4 mb-[40px] lg:mb-5 hover:brightness-[96%] active:scale-[0.99] cursor-pointer overflow-hidden min-h-[330px] max-h-[400px] rounded-lg border border-slate-400 shadow-lg block'>
                            <div className='w-[100%] h-[65%] overflow-hidden rounded-lg bg-sz-cover bg-center'>
                                <img src={data.Poster} alt="thumnail" className='w-full h-auto' />
                            </div>
                            <div className='w-[100%] h-[35%] bg-white p-4 flex flex-col justify-start items-start'>
                                <h3 className='w-full font-bold text-[18px]'>{data.Title}</h3>
                                <p className='font-500 text-[14px]'>{data.Title}</p>
                                <small>{data.Type}</small>
                            </div>
                        </div>
                    ))
                )
            }
        </div>
    </div>
  )
}

export default ListVideos
