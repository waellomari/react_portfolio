import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';


export default () => {

    const history = useHistory()
    const {pathname} = useLocation()

    const onChangeLanguageClick = () => {
        
        const newPath = pathname.replace('/de', '/en')
        
        history.push(newPath);
        
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <Link className="navbar-brand js-scroll-trigger mb-5" to="/en/">
                <span className="d-block d-lg-none">Mhd Waell Al Omari</span>
                <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="/assets/img/profile.png" alt="" /></span>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/de/about">Über</Link></li>
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/de/experience">Erfahrungen</Link></li>
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/de/education">Bildungsbiografie</Link></li>
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/de/skills">Kompetenzen</Link></li>
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/de/interests">Interese</Link></li>
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/de/contact">kontaktiere mich</Link></li>
                    <li className="nav-item mt-5"><a className="nav-link js-scroll-trigger text-dark" href="#" onClick={onChangeLanguageClick}>English</a></li>

                </ul>
            </div>
        </nav>
    )
};