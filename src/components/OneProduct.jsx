import '../App.css'
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addInBascet} from "../redux/Bascet-reducer";


const img ='https://www.tele2.lv/image/131f05f22901072efc5776b01b78d186/apple-iphone-12-128gb.png'

const OneProduct = () => {
    const {goBack} = useHistory()

    const productArr = useSelector(state => state.ProductReducer)
    const one = productArr.find(el => {
        if(Number(el.id) === Number(window.location.hash.slice(1))) {
            return el
        }
    })

    const dispath = useDispatch()


    const addHandler = () => {
        dispath(addInBascet(one.id, one.title, one.price))
    }

    return (
        <div className='oneProductWrapperG'>
            <div className='oneProductWrapper'>
                <div className="left">
                    <img className='foto' src={one.img} alt=""/>
                </div>
                <div className="right">
                    <div className="titleName">{one.title}</div>
                    <div className="description">
                        iPhone давно известны как очень мощные и невероятно простые в использовании телефоны.
                        Всё в них кажется интуитивно понятным. А новый процессор A14 обеспечивает действительно
                        приятную скорость во всем, что Ты делаешь. Опять же, инженеры Apple не преследовали цель –
                        показать астрономические цифры в разрешении камеры, но первого снимка будет достаточно,
                        чтобы понять, что двойная камера на 12 MP просто оживляет Твои фотографии.
                        И т.д. и т.п… Этому телефону даже вода не сможет навредить.
                    </div>
                    <div className="buyInfo">
                        <div className="priceName">{one.price} евро</div>
                        <button onClick={addHandler} className='btn buy'>купить</button>
                    </div>
                </div>
            </div>
            <button className="back" onClick={goBack}>назад</button>
        </div>
    )
}

export default OneProduct