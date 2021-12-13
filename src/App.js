import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Product from "./components/Product";
import Bascet from "./components/Bascet";
import {BrowserRouter, Route} from "react-router-dom";
import OneProduct from "./components/OneProduct";
import Form from "./components/Form";

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Header/>
            <div className="wrapper">
                <Route path='/product' render={()=> <Product/>}/>
                <Route path='/bascet' render={()=> <Bascet/>}/>
                <Route path='/productId/:id?' render={()=> <OneProduct/>}/>
                <Route path='/form' render={()=> <Form/>}/>
            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
