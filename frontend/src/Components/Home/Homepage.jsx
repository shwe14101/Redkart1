
import {Box, Pagination, styled} from '@mui/material';
import './Homepage.css'
import Filterss from './Filters';
import {Filter} from '../Filter/Filterfunctions/Filter'
import Paginationn from './pagination';
import { Link } from 'react-router-dom';
//import Pagen from './pagen';
import  {FilterProvider}  from '../Filter/filtercontext';

import ProductCard from './prdcard';
import Productdisplay from './productsdisplay';

 
const Component = styled(Box)`
//   display:flex;
`

const Homepage = ({ handleClick }) => {
    return (
        
        <div>
        
            <div className='block-left'>
                <Filter/>
                
                <Filterss/> 
            </div>

            <div className='block-right'> 
            <Productdisplay  handleClick={handleClick} />
                
                    
                 
                    <br/>
                <div className='page'></div>
            </div>
        </div>
   
        

    )

}

export default Homepage;