import React, { useEffect,useState } from 'react';
import List from './List';
import Form from './Form';
import { useDispatch } from 'react-redux';
import {getItems} from '../actions/listItems'

function Fridge() {
    const [isLoading,setIsLoading]=useState(true);
    const [currentId,setCurrentId]=useState(null)
    const dispatch =useDispatch();

    useEffect(()=>{
        getListItems();
    },[dispatch,isLoading])

    const getListItems =async()=>{
        await dispatch(getItems())
        await setIsLoading(false)
    }

    return (
        <div className='w-full h-full flex justify-center items-center flex-col py-10'>
            <div className='w-2/3  h-auto flex justify-center items-center flex-col text-center lg:m-5 m-1'>
                <h1 className='w-full  text-lg lg:text-xl  font-extrabold tracking-tightest text-prussian-blue lg:mb-5 mb-1'>Good Morning, Johny!</h1>
                <p className='w-full text-xsm lg:text-lg  text-slate-grey font-medium tracking-tightest'>🌤 It's better to go shopping before this friday</p>
            </div>
            <Form isLoad={isLoading} currentId={currentId} setCurrentId={setCurrentId}/>
            <List isLoad={isLoading} setCurrentId={setCurrentId}/>
        </div>
    );
}

export default Fridge;