import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import ListItems from './ListItems';


function List({isLoad,setCurrentId}) {
  
    
    const Items=useSelector((state)=>state.listItems)
    const isLoading=isLoad;
    

    return (
        
        <div className='h-2/3 lg:w-2/3 w-5/6 overflow-auto scroll-auto'>
            
            {isLoading ?
                <div className='w=full h-full flex justify-center items-center text-dark-cerulean font-semibold flex-col lg:text-md text-sm'>
                    <p>...</p>
                    <p>Loading fridge items</p>
                </div>
                :
               (
                !Items.length? 
                    <div className='w=full h-full flex justify-center items-center text-dark-cerulean font-semibold flex-col lg:text-md text-sm'>
                        <p>Empty.</p>
                    </div>
                :
                    <>
                        <div className='w-full text-right lg:mb-6 mb-3 lg:mt-0 mt-3 pr-2 lg:text-sm2 text-tiny'> Total-Items - {Items.length}</div>
                        {Items.map((item)=>(
                            <ListItems key={item._id} item={item} setCurrentId={setCurrentId}/>
                        ))}
                    </>            
               )    
             }
        </div>
    );
}

export default List;