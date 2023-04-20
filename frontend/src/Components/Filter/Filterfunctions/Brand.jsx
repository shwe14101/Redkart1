import { useFilter } from '../filtercontext';
import '../utils/index'

export const Brand = () => {

    const {filterDispatch, brand} = useFilter();

    const handleBrandChange = (e, option) => {
        const check = e.target.checked
            filterDispatch({
                type: "BRAND",
                payload: {option, check}
            })
        }

    return (
        <div className="category">
            <div className="category-title">Brand</div>
            <div className="category-size category-select d-flex direction-column gap-10px">
                <label className="d-flex align-center gap-10px">
                    <input className="input" type="checkbox" value="Nike" onChange={(e) => handleBrandChange(e, "Nike")} checked={brand.includes("Nike")}/>
                    <span>Nike</span>
                </label>
                <label className="d-flex align-center gap-10px">
                    <input className="input" type="checkbox" value="Puma" onChange={(e) => handleBrandChange(e, "Puma")} checked={brand.includes("Puma")}/>
                    <span>Puma</span>
                </label>
                <label className="d-flex align-center gap-10px">
                    <input className="input" type="checkbox" value="Adidas" onChange={(e) => handleBrandChange(e, "Adidas")} checked={brand.includes("Adidas")}/>
                    <span>Adidas</span>
                </label>
            </div>
        </div>
    )
}