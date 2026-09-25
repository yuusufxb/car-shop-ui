import { useState } from "react"
import "./css/contact.css"

export default function Contact(){
    const [contactForm,SetcontactForm] = useState({
        name :"" ,
        email:"" ,
        message : "" ,
    });
    const handleChange = (e) => {
        const  {name,value} = e.target  ;
        SetcontactForm((prev)=>({
            ...prev ,
            [name]:value ,
        }))
    }; 

    const handleSubmit = async (e)=>{
        e.preventDefault() ;
        console.log(contactForm);
    }



    return(
        <>
        <div className="contact-container">
            <h1>Contact</h1>
            <p className="subtitle">Have a question? Send me a message.</p>

            <form onSubmit={handleSubmit}className="contact-form">
            <div className="input-group">
                <label htmlFor="name">Name</label>
                <input
                value={contactForm.name}
                name="name"
                id="name"
                type="text"
                required
                placeholder="Example"
                onChange={handleChange}
                />
            </div>

            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                value={contactForm.email}
                name="email"
                id="email"
                type="email"
                required
                placeholder="example@example.com"
                onChange={handleChange}
                />
            </div>

            <div className="input-group">
                <label htmlFor="content">Message</label>
                <textarea
                value={contactForm.message}
                name="message"
                id="content"
                required
                placeholder="Write your message..."
                onChange={handleChange}
                />
            </div>

            <button type="submit">Send Message</button>
            </form>
        </div>
        </>

    )
}