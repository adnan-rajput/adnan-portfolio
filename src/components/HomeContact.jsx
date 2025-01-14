import { useRef } from "react";
import emailjs from "@emailjs/browser"

const HomeContact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_iami3xo', 'template_j9q382d', form.current, {
            publicKey: 'HuS5I_2dsfk6BOaO0',
        })
            .then(
                () => {
                    alert("Message Sent Successfully");
                    e.target.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };


    return (
        <>
            <section className="section" id="contact" style={{ backgroundColor: 'cyan' }}>
                <div className="container text-center">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600PX' }}>
                        <p className="d-inline-block border rounded-pill py-1 px-4 mt-5">Contact Me</p>
                        <h1>How can you communicate??</h1>
                    </div>

                    <form action="" className="contact-form col-md-10 col-lg-8 m-auto" ref={form} onSubmit={sendEmail}>
                        <div className="form-row">
                            <div className="form-group col-sm-6">
                                <input type="text" size="50" className="form-control" placeholder="Your Name" name="user_name" required/>
                            </div>
                            <div className="form-group col-sm-6">
                                <input type="email" className="form-control" placeholder="Enter Email" name="user_email" required/>
                            </div>
                            <div className="form-group col-sm-12">
                                <textarea name="message" id="comment" rows="6" className="form-control"
                                    placeholder="Write Something"></textarea>
                            </div>
                            <div className="form-group col-sm-12 mt-3">
                                <input type="submit" value="Send Message" className="btn btn-lg my-font btn-light rounded custom-btn mb-3" />
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
export default HomeContact;