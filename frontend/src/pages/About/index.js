import React from 'react';
import Typist from 'react-text-typist';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Profile from '../../assets/img/perfil.png';

import './style.css';

function About() {
    return (
        <div>
            <Header />

            <main className="background-img">
                <section className="container bg-white p-3">
                    <div className="container-line p-lg-4 p-2">
                        <section>
                            <h2 className="primary bold text-center">Sobre</h2>
                            <hr />
                            <div className="row p-lg-5" >
                                <h2 className="secondary text-center py-2">
                                    Desenvolvedor <Typist sentences={['Front-end', 'Back-end', "Full Stack"]} loop={true} pauseTime={2000} />
                                </h2>
                                <div className="col-md-6 d-flex justify-content-center">
                                    <img src={Profile} alt="Jose Alisson Bezerra" />
                                </div>
                                <div className="col-md-6 d-flex align-items-center">
                                    <p className="common">
                                        Bem vindo! sou um estudante de TI, desde criança sempre gostei de tecnologia, então sempre busquei entender sobre e todo dia acabava gostando cada vez mais.
                                    </p>
                                </div>
                            </div>
                        </section>
                        <hr />
                        <section className="pt-2">
                            <h3 className="h2 primary bold text-center">Formação</h3>
                            <div className="row p-lg-5 p-2">
                                <div className="col-md-6 d-flex flex-column justify-content-around text-center">
                                    <h3 className="profile-title">Ensino médio</h3>
                                    <p className="common text-center">
                                        (2015 - 2018)
                                    </p>
                                    <p className="common text-center bold">
                                        E.E Joaquin Silvado
                                    </p>
                                </div>
                                <div className="col-md-6 d-flex flex-column justify-content-around text-center">
                                    <h3 className="profile-title">Técnico em analise e desenvolvimento de sistemas</h3>
                                    <p className="common text-center">
                                        (2019 - 2020)
                                    </p>
                                    <p className="common text-center bold">
                                        ETEC Paulistano
                                    </p>
                                </div>
                            </div>
                        </section>
                        <section className="pt-2">
                            <h3 className="h2 primary bold text-center">Cursos</h3>
                            <div className="row p-lg-5 p-2">
                                <div className="col-md-6 d-flex flex-column justify-content-around text-center">
                                    <h3 className="profile-title">Operador de microcomputador</h3>
                                    <p className="common text-center">
                                        Carga Horária: 160 horas
                                    </p>
                                    <p className="common text-center bold">
                                        SENAI Theobaldo De Nigris – SP
                                    </p>
                                </div>
                                <div className="col-md-6 d-flex flex-column justify-content-around text-center">
                                    <h3 className="profile-title">Programação Web</h3>
                                    <p className="common text-center">
                                        Carga horaria: 106 horas
                                    </p>
                                    <p className="common text-center bold">
                                        Udemy
                                    </p>
                                </div>
                            </div>
                        </section>

                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default About
