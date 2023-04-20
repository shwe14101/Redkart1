import { useEffect, useState } from 'react';
import axios from 'axios';
import { useFilter } from '../Filter/filtercontext';



import {InputBase, Box, styled} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
const SearchContainer = styled (Box)`
background:#fff;
width: 38%;
border-radius : 2px;
margin-left: 60px;
display:flex;


`;

const InputSearchBase = styled (InputBase)`
padding-left: 20px;
width: 100%;
font-size:unset;

`;

const SearchIconWrapper = styled (Box)`
color:blue;
padding:5px;

`;

//{ posts, setSearchResults }
const Search = () => {
    

    const {filterDispatch,search} = useFilter();

    const handleSearchChange = (e) => {
        debugger;
        
        //const check = e.target.checked
        
            filterDispatch({

                type: "SEARCH",
                payload: e.target.value
            })
        }


    return(
        <>
        <SearchContainer>
            <InputSearchBase placeholder='Search for products and brands' onChange={(e)=>handleSearchChange(e)}>
            </InputSearchBase>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
        </SearchContainer>
        </>
        
    )
}
export default Search;
















// const handleSubmit = (e) => e.preventDefault()

    // const {filterDispatch, size} = useFilter();

   
        
  

    // const handleSearchChange = (e) => {
    //     if (!e.target.value) return setSearchResults(posts)

    //     const resultsArray = posts.filter(post => post.title.includes(e.target.value) || post.catogory.includes(e.target.value)||post.brand.includes(e.target.value))

    //     setSearchResults(resultsArray)

    //     filterDispatch({
    //         type: "SEARCH",
    //         payload: {e}
    //     })
    // }
