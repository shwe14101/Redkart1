import { useFilter } from '../filtercontext';
import '../utils/index'

export const Category = () => {

    const {filterDispatch, category} = useFilter();

    const handleCategoryChange = (option) => {
        filterDispatch({
            type: "CATEGORY",
            payload: option
        })
    }

    return (
        <div className="category">
            <div className="category-title">Category</div>
            <div className="category-size category-select d-flex direction-column gap-10px">
            <label className="d-flex align-center gap-10px">
                    <input className="input" type="radio" name="category" onChange={() => handleCategoryChange("all")} value="all" checked={category=== "all"}/>
                    <span>All</span>
                </label>
                <label className="d-flex align-center gap-10px">
                    <input className="input" type="radio" name="category" onChange={() => handleCategoryChange("Men")} value="Men" checked={category=== "Men"}/>
                    <span>Men</span>
                </label>
                <label className="d-flex align-center gap-10px">
                    <input className="input" type="radio" name="category" onChange={() => handleCategoryChange("Women")} value="Women" checked={category=== "Women"}/>
                    <span>Women</span>
                </label>
                
            </div>
        </div>
    )
}
