
import React, { useEffect, useState } from "react";
import { createContext, useContext, useReducer} from "react";
import axios from 'axios';
import ProductCard from "./prdcard";
import Filter from "../Filter/Filterfunctions/Filter";
import Pagination from "./pagination";
import {getProductsByPriceSort, getProductsBySize, getProductsByCategory, getProductsByBrand, getProductsBySearch} from '../Filter/utils';
import  {useFilter}  from '../Filter/filtercontext';
import { FilterProvider } from "../Filter/filtercontext";
import '../Filter/utils/index'
//import { log } from "console";

//import Cart from "../Cart/Cart";

function Productdisplay  (props) {
  //const pageNumber = props.params.pageNumber || 1;
    const handleClick = props.handleClick;
    const [products, setProducts] = useState([]);
    
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  
  
    useEffect(()=>{
    function fetchProducts(){
  
  
    axios
    .get(`http://localhost:5000/prod/?page=${page}`)
    .then((res)=>{
        setProducts(res.data);
    })
    .catch((err)=>{
        console.log("Could not load the list");
    });
 }

     fetchProducts();

    },[page]);

    



    //Search

   
 
   




    //Search

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);
  
 const a=[];
 
 currentPosts.map((product,k) => a.push( <ProductCard product = {product} key = {k}  handleClick={handleClick}/>));

console.log(a);
 const {sort, size, category, brand, search} = useFilter();
const filteredProductsByPrice = getProductsByPriceSort(products, sort);
const filteredProductsBySize = getProductsBySize(filteredProductsByPrice, size);
const filteredProductsByCategory = getProductsByCategory(filteredProductsBySize, category);
const filteredProductsByBrand = getProductsByBrand(filteredProductsByCategory, brand);
const filteredProductBySearch = getProductsBySearch(filteredProductsByBrand,search);
console.log(filteredProductBySearch);
const a1=[];
 filteredProductBySearch.length > 0 ? filteredProductBySearch.map((product,k) => a1.push( <ProductCard product = {product} key = {k}  handleClick={handleClick}/>)):(<span>Nothing to display</span>);

//end of display


  // Change page

  const paginate = pageNumber => setPage(pageNumber);
    return (
        <>
         <div className='grid-container'>
            {a1}
           
        </div>
        <Pagination
        postsPerPage={postsPerPage}
        totalPosts={products.length}
        paginate={paginate}
      />




        </>

    )

}

export default Productdisplay;

//const a=[];
//products.slice(indexOfFirstPost, indexOfLastPost).map((product,k) => a.push( <ProductCard product = {product} key = {k}  handleClick={handleClick}/>));