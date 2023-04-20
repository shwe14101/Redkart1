import { createContext, useContext, useReducer} from "react";
import { filterReducer } from './filterreducer';


const initialState ={
    sort:"",
    size:"",
    brand:"",
    search:""


};
const FilterContext = createContext(initialState);
console.log(FilterContext);

console.log("Hi");

const FilterProvider = ({children}) => {

    const [{sort, brand, category, size,search}, filterDispatch] = useReducer(filterReducer, {
        sort: "",
        brand: [],
        category: "all",
        size: [],
        search:"",
    })

    console.log(FilterProvider);
    console.log("Hello");

    return (
        <FilterContext.Provider value={{sort, brand, category, size, search, filterDispatch}}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilter = () => useContext(FilterContext);
console.log("usefilter");
console.log(useFilter);

export  { useFilter,FilterProvider };