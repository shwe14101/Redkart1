import React from 'react';

const Paginationn = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
    {/* <nav>
      
        {pageNumbers.map(number => (
          <p key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </p>
        ))}
      
    </nav> */}

<div id="wrapper">

<div class="page-header">
  <div class="b-pagination-outer">
 
  <ul id="border-pagination">
    {/* <li><a class="" href="#">Previous</a></li> */}
    <li><button onClick={() => paginate(1)}  className='page-link'>1</button></li>
    <li><button onClick={() => paginate(2)} className='page-link'>2</button></li>
    {/* <li><Link to='/test' >2</Link></li> */}
    <li><button onClick={() => paginate(3)}  className='page-link'>3</button></li>
    <li><button onClick={() => paginate(4)} className='page-link'>4</button></li>
    <li><button onClick={() => paginate(5)}  className='page-link'>5</button></li>
    {/* <li><a href="#">Next</a></li> */}
  </ul> 
  </div>
</div>

  </div>

  </>
  );
};

export default Paginationn;