import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({setPageNumber, pageNumber}) => {

  return (
    <div>
      <ReactPaginate pageCount={42}
      className='pagination justify-content-center gap-3 my-4'
                     previousLabel='<'
                     nextLabel=">"
                     pageClassName='page-item'
                     pageLinkClassName='page-link'
                     activeClassName='active'
                     onPageChange={(data)=>{
                      setPageNumber(data.selected + 1)
                     }}
      />

    </div>
  )
}

export default Pagination
