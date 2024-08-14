import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Screens/Home';
import Aboutus from './Screens/Aboutus';
import FreeClassForm from './Screens/FreeClassForm';



const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='aboutus' element={<Aboutus/>}/>
                <Route path='/FreeClassForm' element={<FreeClassForm/>}/>
                
            </Routes>
        </Router>
    );
};

export default App;
