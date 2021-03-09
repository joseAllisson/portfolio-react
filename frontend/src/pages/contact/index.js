import React from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';

import './style.css';

function Contact() {
    return (
        <div>
            <Header />

            <main className="background-img">
                <section className="container bg-white p-3">
                    <div className="container-line p-lg-4 p-2">
                        <section className="contact">
                            <h2 className="primary bold text-center">Contato</h2>
                            <hr />
                            <div className="row">
                                <div className="col-md m-4 d-flex flex-column">
                                    <i className="far fa-envelope contact-icon"></i>
                                    <h2 className="primary bold">E-mail</h2>
                                    <p className="common text-secondary">Tem alguma dúvida.</p>
                                    <p className="common bold">josealissonbezerra3@gmail.com</p>
                                </div>
                                <div className="col-md m-4 d-flex flex-column">
                                    <i className="fas fa-mobile-alt contact-icon"></i>
                                    <h2 className="primary bold">Celular</h2>
                                    <p className="common text-secondary">Disponível para ligação.</p>
                                    <p className="common bold">+55 (11) 958607498</p>
                                </div>
                                <div className="col-md m-4 d-flex flex-column">
                                    <i className="fab fa-whatsapp contact-icon"
                                        onClick={() => {
                                            window.open("https://api.whatsapp.com/send?phone=5511958607498", '_blank');
                                        }}>
                                    </i>
                                    <h2 className="primary bold">Whatsapp</h2>
                                    <p className="common text-secondary">Mensagem rápida!</p>
                                    <p className="common bold">
                                        Click no ícone acima!
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </main>

            <Footer />

        </div>
    );
}

export default Contact;
