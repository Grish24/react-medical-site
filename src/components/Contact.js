import React from 'react'

const Contact = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-xl-4">
                    <h3>FIND US HERE</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28620.55499514913!2d-80.087265!3d26.275636!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91d46273e0c45%3A0xc9e497f3ae06e4dd!2sLighthouse%20Point%2C%20FL!5e0!3m2!1sen!2sus!4v1566842967802!5m2!1sen!2sus"
                        width="100%" height="200" frameborder="0" allowfullscreen=""/>
                    <h3 className="mt-5">COMPANY INFORMATION :</h3>
                    <address>
                        500 Lorem Ipsum Dolor Sit,<br/>
                        22-56-2-9 Sit Amet, Lorem,<br/>
                        USA<br/>
                        Phone:(00) 222 666 444<br/>
                        Fax: (000) 000 00 00 0<br/>
                        Email: mail@example.com<br/>
                        Follow on: Facebook, Twitter
                    </address>
                </div>
                <div className="col-xl-8">
                    <h3>CONTACT US</h3>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">NAME</label>
                            <input type="email" className="form-control rounded-0" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">NAME</label>
                            <input type="email" className="form-control rounded-0" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">NAME</label>
                            <input type="email" className="form-control rounded-0" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                            <textarea className="form-control rounded-0" id="exampleFormControlTextarea1" rows="3"/>
                        </div>

                        <button className="btn btn-primary rounded-0">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Contact