import React from 'react';
import Footer from '../../components/Footer';

import Header from '../../components/Header/';

import './style.css';

const cards = [
    {
        id: 1,
        title: "WDB",
        description: "Web Dev Brasil, site criado em grupo para TCC, uma empresa, Startup, focada em criação de sites e aplicativos.",
        img: "wdb.png",
        link: "http://wdb-c.epizy.com"
    },
    {
        id: 2,
        title: "PetWash",
        description: "Um Petshop, para vários tipos de Pets! Site responsivo e com estruturas otimizadas.",
        img: "pet.png",
        link: "http://petwash.epizy.com"
    },
    {
        id: 3,
        title: "Dogs",
        description: "Uma rede social para Postar fotos de seus Pets. Criado com React.js utilizando uma API WordPress para cadastrar usuários e posts.",
        img: "dogs.png",
        link: "http://rede-cachorro.epizy.com"
    },
    {
        id: 4,
        title: "Notícia cidade",
        description: "Seu portal de notícias diário! um blog otimizado e simplificado com WordPress.",
        img: "portal.png",
        link: "http://portalcidade.epizy.com/"
    },
    {
        id: 5,
        title: "WDB blog",
        description: "Web Dev Brasil, site criado em grupo para TCC, uma empresa Startup, transformado em um blog com WordPress.",
        img: "wdb-blog.png",
        link: "http://wdb.epizy.com/blog/"
    },
];

function Home() {
    return (
        <>
            <Header />

            <main className="background-img">
                <section className="container bg-white p-3">
                    <div className="gallery">
                        <div className="row p-4">
                            {cards.map((card) =>
                                <div className="col-md-6 mt-4" key={card.id}>
                                    <div style={{ backgroundImage: `url(./img/bg/${card.img})` }} className="img">
                                        <div className="overlay-img"></div>
                                        <div className="animation-description">
                                            <h2>{card.title}</h2>
                                            <p>{card.description}</p>
                                            <span className="icons">
                                                <button className="icon fas fa-eye border-0"
                                                    onClick={() => {
                                                        window.open(card.link, '_blank');
                                                    }}
                                                ></button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

        </>
    );
}

export default Home;
