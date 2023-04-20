import {Box, Button, styled, Typography} from '@mui/material'
import {ShoppingCart} from '@mui/icons-material';
import './cart.css';
import { Link } from 'react-router-dom';
const Wrapper = styled(Box)`
display:flex;
margin: 0 3% 0 auto;
&> button , &> div{
    margin-right: 40px;
    font-size:14px;
    align-items:center;
    
}

`;

const Container = styled(Box)`
display:flex;
`;


const LoginButton = styled(Button)`
display:flex;
color: #2874f0;
background:#FFF;
text-transform:none;
padding: 10px 30px;
border-radius: 2px;
box-shadow:none;
height:43px;


`;



const CustomerButtons = ({ setShow, size }) => {
    return(
      <Wrapper>

        <LoginButton variant = "contained" >Login</LoginButton>
        <Container>
        <div className="cart"   onClick={() => setShow(false)}>
          <span>
          <Link to="/Cart">
                        <i className="fas fa-cart-plus" />
          </Link>
          </span>
          
        </div>

        </Container>
        
      </Wrapper>

    )

}

export default CustomerButtons;