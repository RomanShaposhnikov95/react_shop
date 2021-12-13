import '../App.css'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";



const Header = () => {

    const bascetArr = useSelector(state => state.BascetReducer)

    return (
        <div className="header">
            <div className="logo">React Shop</div>
            <div className='headerInfo'>
                <NavLink activeClassName='active' className='link' to='/product'>товар</NavLink>
                <NavLink activeClassName='active' className='link bascetLink' to='/bascet'>корзина
                    {
                        bascetArr.length ? <div className="lenght">{bascetArr.length}</div> : ''
                    }
                </NavLink>
            </div>
        </div>
    )
}

export default Header