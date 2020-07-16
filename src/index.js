import React from 'react';
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import MainContent from "./components/MainContent";
import Reducer from "./store/reducer";
import 'bootstrap/dist/css/bootstrap.css'

const store = createStore(Reducer, applyMiddleware(thunk))

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Provider store={store}><MainContent /></Provider>, wrapper) : false;
