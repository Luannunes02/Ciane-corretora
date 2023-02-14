import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./imovel.scss";

import WhatsAppLogo from "../../assets/whatsapp.png"
import InstagramLogo from "../../assets/instagram.png"
import EmailLogo from "../../assets/email.png"

import HeaderImovel from "../../components/HeaderImovel";

import ImovelApi from "../../api/imoveis.json";

export default function Imovel() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const { id } = useParams();
    const imovel = ImovelApi.imoveis[id];

    return (
        <div className="mb-5">
            <HeaderImovel />
            <div className="container mt-5">
                <div className="imovelContainer">
                    <h1 className="mt-3">{imovel.title}</h1>
                    <div className="row mt-5 aboutImovelContainer" data-aos="fade-up" data-aos-duration="1000">
                        <div className="col col-lg-6">
                            <img className="cover" src={imovel.cover} alt='capa' />
                        </div>
                        <div className="col col-lg-6">
                            <h2>{imovel.name}</h2>
                            <ul className="descriptionUl">
                                <li className="mb-4">Descrição:</li>
                                {imovel.description.map((item) => {
                                    return (
                                        <li key={item}>{item}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="mt-5 row" data-aos="fade-up" data-aos-duration="1000">
                        <ul className="observationUl">
                            {imovel.observation.map((item) => {
                                return (
                                    <li className="fs-6" key={item}>{item}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>

                <section className="container" id="carousel" data-aos="fade-up" data-aos-duration="1000">
                    <h1 className="mt-5 mb-5">FOTOS</h1>
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner imgsCarouselContainer">
                            <div className="carousel-item active">
                                <img src={imovel.cover} className="d-block w-100 imgCarousel" alt="..." />
                            </div>
                            {imovel.imgs.map((img) => {
                                return (
                                    <div key={img} className="carousel-item">
                                        <img src={img} className="d-block w-100 imgCarousel" alt={imovel.name} />
                                    </div>
                                )
                            })}
                        </div>
                        <button className="carousel-control-prev btnCarousel" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next btnCarousel" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </section>
            </div>

            <div id="contactImovel" className="text-center container">
                <div className="col col-lg-6 text-center" data-aos="flip-left" data-aos-duration="1000">
                    <h2 className="mt-5">Entre em contato comigo para mais detalhes</h2>
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=+55(61) 98261-9378&text=Olá Ciane Monteiro, tudo bem? Desejo alugar ou comprar um imóvel.">
                        <div className="midiaContainer">
                            <img src={WhatsAppLogo} alt="whatsapplogo" />
                            <p>(61) 98261-9378</p>
                        </div>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/cianymonteiro1corretora/">
                        <div className="midiaContainer">
                            <img src={InstagramLogo} alt="instagramLogo" />
                            <p>@cianymonteiro1corretora</p>
                        </div>
                    </a>
                    <a target="_blank" href="mailto:cianymonteiro1@creci.org.br?subject=Locação/Compra de imóvel&body=Ol%C3%A1%20Ciane%20Monteiro%2C%20tudo%20bem%3F%20%0A%0ADesejo%20alugar%20ou%20comprar%20um%20im%C3%B3vel.">
                        <div className="midiaContainer">
                            <img src={EmailLogo} alt="EmailLogo" />
                            <p>cianymonteiro1@creci.org.br</p>
                        </div>
                    </a>
                    <div className="registrations mt-5 mb-4 ">
                        <div>
                            <h3>CRECI/DF: 23.592</h3>
                            <h3>CNAI: 34.258</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}