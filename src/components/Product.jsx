import '../App.css'
import Item from "./Item";
import {useSelector} from "react-redux";



const Product = () => {
    const productArr = useSelector(state => state.ProductReducer)

    return (
        <div className="container">
            {
                productArr.map(el => <Item key={el.id} {...el}/>)
            }
        </div>
    )
}

export default Product