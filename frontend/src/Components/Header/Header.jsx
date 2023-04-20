import {AppBar, Toolbar, Typography ,Box, styled} from '@mui/material';
import '../../App';

import Homepage from '../Home/Homepage';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Search from './Search';
import CustomerButtons from './CartButton';
//import Searchfn from '../Home/searchfn';


const StyledHeader = styled(AppBar)`
background: #2874f0;
height:58px;
`;

const Component = styled(Box)`
margin-left: 18%;
line-height:0;
cursor:pointer
`;

const SubHeading = styled(Typography)`
font-size:13px;
font-style:italic;
cursor:pointer
`;

const CustomerButtonsW = styled(Box)`
margin: 0 5% o auto; 
padding-left:4%
`;


const Header = ({ setShow, size }) =>{
   
    const [cart, setCart] = useState([]);
   

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    //const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return(
        <StyledHeader>
             
            <Toolbar style = {{minHeight :55}}>
                <Component>
                    <img src = {logoURL} alt = 'logo'  style = {{ width:75}}/>
                    <Box>
                        <div>
                         
                    <SubHeading  onClick={() => setShow(true)}><Link to="/" style = {{color:'#ffffff'}}>Explore</Link>
                    
                        <Box component = "span"  style = {{color:'#FFE500'}} > Plus</Box>
                        </SubHeading>
                        </div>
                        
                </Box>
                </Component>
                <Search />
                <CustomerButtonsW>
                    <CustomerButtons setShow={setShow} size={cart.length}/>
                </CustomerButtonsW>
            </Toolbar>
        </StyledHeader>
        
    )
}

export default Header;