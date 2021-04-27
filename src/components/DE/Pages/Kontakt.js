import React, { useRef }  from 'react';

export default () => {

    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();


    const submitBtnClick = (e) => {
        e.preventDefault()
        const sendData = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value,
            language: "De"
        } 
        fetch('/contact', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(sendData)
        }).then(response =>{ 
            if (response.status === 200){
                response.json().then(data =>{
                    if (data === 1) {
                        // show success message
                    } else {
                        // show error message
                    } 
                }).catch(err => {
                    // show error message
                })
            } else {
                // show error message
            }
        }).catch(err => {
            // show error message
        })
    }


    return (
        <>
            <section className="resume-section" id="contact">
                <div className="container ">
                    <div className="d-flex justify-content-center">
                        <div className="col-md-6 col-md-offset-3">
                            <div className="well well-sm">
                                <form className="form-horizontal " action="" method="post">
                                    <fieldset>
                                        <legend className="text-center h2">Kontaktformular</legend>
                                
                                        <p className="text-center pt-5">Schreiben Sie uns eine E-Mail</p>
                                        <p className="text-center">Wir freuen uns auf Ihre Kontaktaufnahme</p>
                                        <div className="form-group">
                                        <label className="col-md-3 control-label text-primary h4" for="name">Name</label>
                                        <div className="col-md-9">
                                            <input id="name" name="name" type="text" placeholder="Ihre Name" className="form-control" ref={nameRef}/>
                                        </div>
                                        </div>
                                
                                        
                                        <div className="form-group">
                                        <label className="col-md-3 control-label  text-primary h4" for="email">E-mail Adresse</label>
                                        <div className="col-md-9">
                                            <input id="email" name="email" type="text" placeholder="Ihr Email" className="form-control" ref={emailRef}/>
                                        </div>
                                        </div>
                                
                                        
                                        <div className="form-group">
                                        <label className="col-md-3 control-label  text-primary h4" for="message">Ihre Nachrischt</label>
                                        <div className="col-md-9">
                                            <textarea className="form-control" id="message" name="message" placeholder="Bitte schreiben Sie hier Ihre Nachricht ..." rows="5"  ref={messageRef}></textarea>
                                        </div>
                                        </div>
                                
                                    
                                        <div className="form-group">
                                        <div className="col-md-9 text-right">
                                            <button type="submit" className="btn btn-primary btn-lg" onClick={(e)=>{submitBtnClick(e)}}>Submit</button>
                                        </div>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>        
            </section>
            <hr className="m-0" />
            </>
    )
};