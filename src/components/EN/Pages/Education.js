import React from 'react';

export default () => {
    return (
        <>
        <section className="resume-section" id="education">
        <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <h3 className="mb-0">Full stack Web Development</h3>
                    <div className="subheading mb-3">DCI Digital Career Institute gGmbH, Leipzig, Germany</div>
                    <ul>
                        <li>Accomplishing a one-year-full-time training including technologies
                            from MERN stack.</li>
                        <li>Completing multiple small and one final large practical project to
                            practice programming skills.</li>
                    </ul>
                </div>
                <div className="flex-shrink-0"><span className="text-primary">(06/2020 – 6/2021)</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
                <div className="flex-grow-1">
                    <h3 className="mb-0">Electrical Engineering Assistance Diploma</h3>
                    <div className="subheading mb-3">Ministry of Education, Damascus, Syria</div>
                    <ul>
                        <li>Graduating with a GPA of 75%</li>
                        <li>Proved in Germany as an Information Electronics Technician</li>
                    </ul>
                </div>
                <div className="flex-shrink-0"><span className="text-primary">(10/2001 – 05/2005)</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
                <div className="flex-grow-1">
                    <h3 className="mb-0">Computer Maintenance</h3>
                    <div className="subheading mb-3">Al Mamoun Centre, Damascus, Syria</div>
                    <ul>
                        <li>Completion of practical training in computer maintenance with a
                            degree (A+)</li>
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