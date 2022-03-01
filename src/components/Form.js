import React, {useEffect, useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux';
import {addItems,updateItems} from '../actions/listItems'




function Form({isLoad,currentId,setCurrentId}) {
    const [startDate, setStartDate] = useState(null);
    const [itemData,setItemData]=useState({title:'',expiry:''});
    const isLoading=isLoad;
    const dispatch=useDispatch();
    const Items=useSelector((state)=>state.listItems)
    const selectedItem=useSelector((state)=> currentId ? state.listItems.find((itm)=>itm._id===currentId):null)
    


    useEffect(()=>{
        if(selectedItem) setItemData(selectedItem);
    },[selectedItem])

    const handleSubmit=async()=>{ 
        const title=itemData.title
        const result = Items.find(itm => {
            return itm.title === title
          })
        if(itemData.title!=='' && itemData.expiry!==''){
            if(currentId){
               await dispatch(updateItems(currentId,itemData));
               await clear();
            }
            else{
                if(result===undefined){
                    await  dispatch(addItems(itemData));
                    await  clear();
                }
                else{
                    alert('Already exists.')
                }
            }         
        }else{
            alert('Fill the item details before add to fridge.')
        }  
    }

    const clear=()=>{ 
        setCurrentId(null)
        setItemData({title:'',expiry:''})
    }

    return (
        <div className='lg:w-2/3  w-5/6 bg-white h-1/4 lg:m-10 m-5 drop-shadow-lg rounded-lg border border-solid border-solitude box-border'>
            <form className="w-full  flex justify-center items-end h-2/3 lg:mx-10 mx-3">
                <div className="w-full md:w-1/3 px-1 lg:px-3">
                    <label className="block uppercase tracking-wide text-gray-700 lg:text-sm text-tiny font-bold lg:mb-2 mb-1">
                    🍉 Item Name
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-tiny lg:text-md"  type="text" onChange={(e)=>{setItemData({...itemData,title:e.target.value})}} value={itemData.title}/>
                </div>
                <div className="w-full md:w-1/3 px-1 lg:px-3">
                    <label className="block uppercase tracking-wide text-gray-700 lg:text-sm text-tiny font-bold lg:mb-2 mb-1" >
                    ⏰ Expiry Date
                    </label>
                    <DatePicker className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-tiny lg:text-md" format='yyyy-MM-dd'  selected={startDate} onChange={(date) => { setStartDate(date) ;setItemData({...itemData,expiry:moment(date).format('YYYY-MM-DD')})}} value={itemData.expiry}/>
                </div>
                <div className="w-full md:w-1/3 px-1 lg:px-3" onClick={()=>handleSubmit()}>
                    <button disabled={isLoading} className="flex-shrink-0 bg-dark-cerulean hover:bg-prussian-blue border-dark-cerulean hover:border-prussian-blue lg:text-sm text-tiny border-4 text-white py-1 px-2 w-4/5 rounded" type="button">
                        {currentId ? 'Update':'Add to Fridge'}
                    </button>
                </div>
            </form>
            <div className='lg:w-full w-5/6 lg:text-xsm text-tiny  flex justify-start items-start h-1/3  lg:mx-12 mx-6 text-slate-grey lg:mt-2 mt-2 lg:px-2 px-0'>
            ⚠️ We don't want more than one piece of the same food in our fridge.
            </div>
        </div>
    );
}

export default Form;