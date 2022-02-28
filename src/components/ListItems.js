import React, { useEffect, useState } from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import moment from 'moment'
import { useDispatch } from 'react-redux';
import { deleteItems } from '../actions/listItems';


function ListItems({item,setCurrentId}) {
   const [expDate,setExpDate]=useState(null)
   const dispatch=useDispatch()

    useEffect(()=>{
        checkExpiryDate()
    },[])

    const checkExpiryDate=()=>{
        var given = moment(item.expiry, "YYYY-MM-DD");
        var current = moment().startOf('day');
        const diff=moment.duration(given.diff(current)).asDays();
        setExpDate(diff);
    }



    return (
        <div  className='w-auto h-12 bg-white rounded border border-solid border-alice-blue box-border flex justify-center items-center mb-3' >
            <div className='w-1/4 flex h-full flex items-center pl-5 font-semibold text-licorice lg:text-md text-xsm' onClick={()=>{setCurrentId(item._id)}}>
                {item.title}
            </div>
            <div className='w-2/4 flex h-full flex items-center pl-5 font-semibold  text-slate-grey lg:text-xsm text-tiny'>
                {item.expiry}
            </div>
            <div className='lg:w-1/4 flex h-full w-2/5 justify-end items-center lg:flex-row flex-col mr-5'>
                {expDate<0 ? 
                    <div className='bg-expired text-txt-expired lg:text-sm text-tiny px-3 py-1 rounded-full font-semibold  lg:text-xsm text-tiny lg:w-3/6 w-full flex justify-center items-center'>
                        Expired
                    </div>
                :
                expDate<30  ?
                    <div className='bg-expired-soon text-txt-expired-soon lg:text-sm text-tiny px-3 py-1 rounded-full font-semibold  lg:text-xsm text-tiny w-full lg:w-3/6 flex justify-center items-center'>
                        Expiring soon
                    </div>   
                :
                    <div className='bg-healthy text-txt-healthy lg:text-sm text-tiny px-3 py-1 rounded-full font-semibold lg:text-xsm text-tiny lg:w-3/6  w-full flex justify-center items-center'>
                        Healthy
                    </div>  
                }
                
                
                <div className='lg:text-lg text-sm lg:ml-5 lg:mt-0 mt-1 flex items-center lg:h-full mb-1 hover:text-cinnabar'>
                    <AiOutlineDelete onClick={() => {dispatch(deleteItems(item._id)) } }/>
                </div>
            </div>
        </div>
    );
}

export default ListItems;