import React from 'react';
import { useGlobalContext } from './context';


const Pagination = () => {
    const {page,pageCount,getPrevPage,getNextPage} = useGlobalContext();
  return (
    <>
        <div className='pagination-btn'>
            <button onClick={() => getPrevPage()}> PREV</button>
            <p>
                {page} of {pageCount}
            </p>
            <button onClick={() => getNextPage()}>NEXT</button>
        </div>
    </>
  )
};



export default Pagination;
