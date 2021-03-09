import React from 'react';
import Typist from 'react-text-typist';

import Footer from '../../components/Footer';
import Header from '../../components/Header';

function Error() {
    return (
        <div>
            <Header />

            <main className="background-img">
                <section className="container bg-white p-3">
                    <div className="container-line p-5 d-flex justify-content-center">
                        <Typist className='myTypist text-danger' sentences={['Erro 404, página não encontrada.', 'Selecione a página na barra de navegação.']} loop={false} />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Error;
