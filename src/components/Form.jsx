import React from 'react'

function Form() {
  return (
    <section id="Design-Your-Neon">
        <div className="container dyn_bdy">
            <div className="row">
                <div className="col-md-12 cntc_form align-self-center" id="Design-Your-Neon">
                    <span className="sub_head">Feel to Create Your Custome Lights</span>
                    <h2 className="s_head">Customize Your Lights</h2>
                    <form style={{marginTop: '20px'}}>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group ">
                                    <label className="mx-3">Name *</label>
                                    <input className="form-control" type="text" placeholder="Enter your name" required/>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="mx-3">Email *</label>
                                    <input type="email" className="form-control" placeholder="Enter your e-mail" required/>
                                </div>
                            </div>

                        </div>

                        <div className="row my-3">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="mx-3">Mobile  *</label>
                                    <input type="text" className="form-control" placeholder="Enter your mobile" required/>
                                </div>
                            </div>
                            
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="mx-3">Select files</label>
                                    <input className="form-control" type="file" placeholder="Select files" required/>
                                </div>
                            </div>
                        </div>

                        <div className="row ">
                            
                            <label className="mx-4 my-auto"><p>Type of Lights * :</p> </label>
                            <div className="col-md-12 mb-3">
                                <div className="radio-input-style col-md-7">
                                    <div className="row">

                                        <div className="col-md-4">
                                            <div className="form-group mb-0">
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                                    <label className="form-check-label" htmlFor="inlineRadio1"><p>Neon Signs</p> </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="form-group mb-0">
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                                    <label className="form-check-label" htmlFor="inlineRadio2"><p>LED Signs</p></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="form-group mb-0">
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
                                                    <label className="form-check-label" htmlFor="inlineRadio3"><p>Flex Board</p></label>
                                                </div>
                                            </div>
                                        </div>






                                    </div>


                                </div>
                            </div>

                            <div className="col-md-6 mb-3 form-inline">
                                <label className="mx-3 my-2"> Add Size * :</label>
                                <div className="">

                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="form-group mb-0">
                                                <input type="text" className="form-control" placeholder="Width" required/>
                                            </div>
                                        </div>
                                        <div className="col-md-2 d-flex align-items-center justify-content-center">
                                            <div className="form-group mb-0">
                                                <p className="mb-0"><strong>x</strong></p>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="form-group mb-0">
                                                <input type="text" className="form-control" placeholder="Height" required/>
                                            </div>
                                        </div>






                                    </div>


                                </div>
                            </div>
                            
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="mx-3 my-3">Message</label>
                                    <textarea className="form-control" placeholder="Enter text" rows="3"></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <a href="#" className="button_main btn">Send</a>
                        </div>
                        {/* <!--<button type="submit" className="button_main"></button>--> */}
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Form