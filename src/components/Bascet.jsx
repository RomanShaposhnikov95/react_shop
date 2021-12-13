import '../App.css'
import BascetItem from "./Bascet-item";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Bascet = () => {

    const bascetArr = useSelector(state => state.BascetReducer)

    const total = bascetArr.reduce((acc, count) => {
        return acc + (count.price * count.count)
    },0)

    return (
       <div className="bascetContainer">
           {
               bascetArr.length ? bascetArr.map(el => <BascetItem key={el.id} {...el}/>) : <p className='empty'>Корзина пуста</p>
           }
           {
               bascetArr.length ? <div className="itemTotal">Сумма:
                   <div className="itemPrice">{total}</div> евро
                   <NavLink to='/form'><button className='order'>Оформить</button></NavLink>
               </div> : ''
           }
       </div>
    )
}

export default Bascet;