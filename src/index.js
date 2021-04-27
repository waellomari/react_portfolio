import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import SideBar from './components/SideBar';
import About from './components/EN/Pages/About';
import Experience from './components/EN/Pages/Experience';
import Education from './components/EN/Pages/Education';
import Skills from './components/EN/Pages/Skills';
import Interests from './components/EN/Pages/Interests';
import Contact from './components/EN/Pages/Contact'

import Uber from './components/DE/Pages/Uber';
import Erfahrungen from './components/DE/Pages/Erfahrungen';
import Bildungsbiografie from './components/DE/Pages/Bildungsbiografie';
import Kompetenzen from './components/DE/Pages/Kompetenzen';
import Interessen from './components/DE/Pages/Interessen';
import Kontakt from './components/DE/Pages/Kontakt';
import Footer from './components/Footer';
import Page404 from './components/Page404';


const App = () => {

    return ( 
    <Router>
        <SideBar/>
        
        <div className="container-fluid p-0">
            <Switch>
                <Route exact path='/en/about' ><About/></Route>
                <Route exact path='/de/about' ><Uber/></Route>
                <Route exact path='/en/experience'><Experience/></Route>
                <Route exact path='/de/experience'><Erfahrungen/></Route>
                <Route exact path='/en/education'><Education/></Route>
                <Route exact path='/de/education'><Bildungsbiografie/></Route>
                <Route exact path='/en/skills'><Skills/></Route>
                <Route exact path='/de/skills'><Kompetenzen/></Route>
                <Route exact path='/en/interests'><Interests/></Route>
                <Route exact path='/de/interests'><Interessen/></Route>
                <Route exact path='/en/contact'><Contact/></Route>
                <Route exact path='/de/contact'><Kontakt/></Route>
                <Route path='/'><Page404/></Route>
            </Switch>
        </div>
        
        <Footer/>
    </Router>
        )

}

ReactDOM.render(<App/>, document.getElementById('root'))