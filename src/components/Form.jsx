import '../App.css'
import {useDispatch, useSelector} from "react-redux";
import {getPersonInfoAC} from "../redux/Form-reducer";
import {BascetReducer, submitCleanAC} from "../redux/Bascet-reducer";

const Form = () => {

    const dispatch = useDispatch()
    const check = useSelector(state => state.BascetReducer)
    const resultcheck = check.map(el => {
        return el
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getPersonInfoAC(e.target[0].value,e.target[1].value,e.target[2].value,e.target[3].value,resultcheck))
        e.target[0].value = '';
        e.target[1].value = '';
        e.target[2].value = '';
        e.target[3].value = '';
        dispatch(submitCleanAC())
    }

    const total = check.reduce((acc, count) => {
        return acc + (count.price * count.count)
    },0)

    return (
        <div className='formContainerBlock'>
            {
                check.length ? <div className='formContainerBlocktwo'>
                    <form className='formContainer' onSubmit={handleSubmit}>
                        <div className='formWrapper'><div className="formName">Имя:</div>
                            <input placeholder='Имя' className='formInput' type="text"/>
                        </div>
                        <div className='formWrapper'><div className="formName">Фамилия:</div>
                            <input placeholder='Фамилия' className='formInput' type="text"/>
                        </div>
                        <div className='formWrapper'><div className="formName">Адресс:</div>
                            <input placeholder='Адресс' className='formInput' type="text"/>
                        </div>
                        <div className='formWrapper'><div className="formName">Номер:</div>
                            <input placeholder='Номер' className='formInput' type="text"/>
                        </div>
                        <button type="submit" className='sendBtn'>отправить</button>
                    </form>
                    <div className="check">
                        {
                            check.map(el => <div className="check-item">
                                <div className="check-title">{el.count >= 2 ? el.title + " * " + el.count : el.title}</div>
                                <div className="check-price"><span>{el.price * el.count}</span>€</div>
                            </div>)
                        }
                        <div className='totalSum'>Сумма:<span>{total}</span>€</div>
                    </div>
                </div> : <h1>Спасибо, ближайшее время мы с вами свяжемся!</h1>
            }
        </div>

    )
}

export default Form;