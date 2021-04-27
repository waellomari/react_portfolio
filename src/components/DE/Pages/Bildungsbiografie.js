import React from 'react';

export default () => {
    return (
        <>
        <section className="resume-section" id="education">
        <div className="resume-section-content">
            <h2 className="mb-5">Bildungsbiografie</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <h3 className="mb-0">Full-Stack-Web-Entwicklung</h3>
                    <div className="subheading mb-3">DCI Digital Career Institute gGmbH, Leipzig, Germany</div>
                    <ul>
                        <li>erfolgreich abgeschlossene einjährige Fortbildung einschließlich
                            der MERN-Stack-Technologien</li>
                        <li>Durchführung diverser praktischer Projekte zur Erlangung von
                            Programmierfertigkeiten.</li>
                    </ul>
                </div>
                <div className="flex-shrink-0"><span className="text-primary">(06/2020 – 6/2021)</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
                <div className="flex-grow-1">
                    <h3 className="mb-0">Elektrischer Diplom-Ingenieursassistent</h3>
                    <div className="subheading mb-3">Bildungsministerium, Damaskus, Syrien</div>
                    <ul>
                        <li>Abschluss mit einem Notendurchschnitt von 75%</li>
                        <li>Deutsche Anerkennung als Elektrotechniker</li>
                    </ul>
                </div>
                <div className="flex-shrink-0"><span className="text-primary">(10/2001 – 05/2005)</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
                <div className="flex-grow-1">
                    <h3 className="mb-0">Computerwartung</h3>
                    <div className="subheading mb-3">Al Mamoun Zentrum, Damaskus, Syrien</div>
                    <ul>
                        <li>erfolgreich abgeschlossene praktische Fortbildung in der
                            Computerwartung mit einem Abschluss von (A+)</li>
                    </ul>
                </div>
                <div className="flex-shrink-0"><span className="text-primary">(10/2000 – 12/2000)</span></div>
            </div>
        </div>
    </section>
    <hr className="m-0" />
        </>
    )
};