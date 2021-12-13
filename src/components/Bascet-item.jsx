import '../App.css'
import {useDispatch} from "react-redux";
import {
    minusCountAC,
    plusCountAC,
    removeFromBascet
} from "../redux/Bascet-reducer";
import {NavLink} from "react-router-dom";

const BascetItem = (props) => {
    const {id, price, title, count} = props
    const dispatch = useDispatch()

    const removeHandler = () => {
        dispatch(removeFromBascet(id))
    }

    const plusHandler = () => {
        dispatch(plusCountAC(id))
    }

    const minusHandler = () => {
        dispatch(minusCountAC(id))
    }

    return (
        <div className="bascetItem">
            <div className='bascetInfo'>
                <NavLink className="bascetTitle" to={'/productId/' + `#${id}`}><div className="bascetTitle">{title.slice(0,13)}...</div></NavLink>
                <div className='changeValue'>
                    <button onClick={minusHandler} className='changeValueBtn'>-</button>
                    <span className='changeValueSpan'>{count}</span>
                    <button onClick={plusHandler} className='changeValueBtn'>+</button>
                </div>
            </div>
            <div className="bascetPrice">{price}€ * {count} = {price * count}€</div>
            <button onClick={removeHandler} className='removeItem'>X</button>
        </div>
    )
}

export default BascetItem;