import '../App.css'
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addInBascet} from "../redux/Bascet-reducer";

const Item = (props) => {
    const {img, id, title, price} = props
    const dispatch = useDispatch()

    const addHandler = () => {
        dispatch(addInBascet(id,title, price))
    }

    return (
        <div className="item">
            <NavLink to={'/productId/' + `#${id}`}><img className='img' src={img} alt=""/></NavLink>
            <div className="title">{title}</div>
            <div className="item-info">
                <div className="price">{price}</div>
                <button onClick={addHandler} className="btn">Купить</button>
            </div>
        </div>
    )
}

export default Item