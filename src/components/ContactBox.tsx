export const ContactBox = () => {
    return (
        <div className="contact-box">
            <h2>Contact</h2>
            <div className="sub-box"> 
            <form action="https://formsubmit.co/pavelramcas@gmail.com" method="POST" >
            <label htmlFor="Nombre">Nombre</label >
            <input type="text" name="name" />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" />

            <label htmlFor="subject">Asunto</label>
            <input type="text" name="subject" />

            <input type="submit" value="Enviar" />

             <input type="hidden" name="_next" value="https://www.pavelramcas.net/" />
        </form>
        </div>
            </div>
    );
};