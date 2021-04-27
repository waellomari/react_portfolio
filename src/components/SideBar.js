import React from 'react';
import {  useLocation} from 'react-router-dom';
import SideBarEN from './EN/Pages/SideBar'
import SideBarDE from './DE/Pages/SideBar'

export default () => {
    //const history = useHistory()
    const {pathname} = useLocation()
    const language = pathname.substr(1, 2);
    
     if (language == 'en'  ){
        return <SideBarEN/>}
    else return <SideBarDE/>

     }