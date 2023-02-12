import React from "react";
import "./home.scss"

import Header from "../../components/Header"
import Button from "../../components/common/Button";
import Card from "../../components/common/Card";

import CianePhoto from "../../assets/ciane.jpeg"
import GivingHouse from "../../assets/handleHome.png"
import Accommodation from "../../assets/services/aco.png"
import AdminPublic from "../../assets/services/admin.png"
import Avaliation from "../../assets/services/ava.png"
import Profissionalism from "../../assets/profissionalismo.jpg"
import CredPago from "../../assets/credpago.jpeg"
import WhatsAppLogo from "../../assets/whatsapp.png"
import InstagramLogo from "../../assets/instagram.png"
import EmailLogo from "../../assets/email.png"

import ImoveisAPI from "../../api/imoveis.json"

const imoveis = ImoveisAPI.imoveis;

export default function Home() {
    return (

        <div id="start">
            <Header />
            <div className="container">
                <div className="row mt-6" id="introduction" >
                    <div className="col col-lg-6 textIntroductionContainer" data-aos="fade-up" data-aos-duration="1000">
                        <h1 className="display-5">DIVERSOS IMÓVEIS TANTO PARA LOCAÇÃO QUANTO PARA VENDA</h1>
                        <h3 className="mt-4 pt-3">IMÓVEIS DE ALTO PADRÃO EM BRASÍLIA, DO JEITO QUE VOCÊ SEMPRE IMAGINOU!</h3>
                        <div className="mt-5">
                            <a href="#properties">
                                <Button className="me-4" content={'IMÓVEIS'} />
                            </a>
                        </div>
                    </div>
                    <div className="col col-lg-6 mt-5" data-aos="fade-up" data-aos-duration="1000">
                        <img className="giving-house" src={GivingHouse} alt="giving-house" />
                    </div>
                </div>
            </div>

            <section className="" id="about">
                <div className="aboutContainer container">
                    <h1 className="text-center mt-5 display-4" data-aos="fade-right" data-aos-duration="1000">SOBRE MIM</h1>
                    <div className="row mb-5">
                        <div className="col col-lg-5" data-aos="fade-right" data-aos-duration="1500">
                            <img className="mt-5 cianePhoto" src={CianePhoto} alt="CianePhoto" />
                        </div>

                        <div className="aboutTextContainer col col-lg-7 mt-5" data-aos="fade-right" data-aos-duration="1000">
                            <h3 className="display-6">Ciane Monteiro
                                Corretora de imóveis especialista em locação e venda imóvel na região de Brasília-DF.
                                <br />
                                Ao longo de  7 anos atuando na administração, captação, venda e avaliação imobiliária de mercado.</h3>
                        </div>
                    </div>
                </div>
            </section>


            <section id="services" >
                <div className="container mb-5">
                    <div>
                        <h1 className="text-center display-4 mt-5 mb-0 pb-0" data-aos="fade-up" data-aos-duration="1000">MEUS SERVIÇOS</h1>
                        <h3 className="text-center mt-0 pt-0" data-aos="fade-up" data-aos-duration="1200">que realizo com excelência</h3>
                    </div>
                    <div className="servicesDetailsContainer row px-5 mb-5 pb-5">
                        <div className="mt-5 text-center col col-lg-3" data-aos="fade-up" data-aos-duration="1000">
                            <img src={Accommodation} alt="accommodation" />
                            <h5 className="mt-4 mb-0">Prestação serviços de hospedagem</h5>
                            <p className="d-flex align-items-end">Acomodação em brasilia e prestação serviços de hospedagem.</p>
                        </div>
                        <div className="mt-5 text-center col col-lg-3" data-aos="fade-up" data-aos-duration="2000">
                            <img src={AdminPublic} alt="AdminPublic" />
                            <h5 className="mt-4 mb-0">ADMINISTRAÇÃO IMOBILIÁRIA</h5>
                            <p className="d-flex align-items-end">Serviço de gestão do aluguel imobiliário de forma organizada e competente.</p>
                        </div>
                        <div className="mt-5 text-center col col-lg-3 serviceDiv" data-aos="fade-up" data-aos-duration="3000">
                            <img src={Avaliation} alt="Avaliation" />
                            <h5 className="mt-4 mb-0">AVALIAÇÃO E VENDA DE IMÓVEL</h5>
                            <p className="d-flex align-items-end">Está tentando vender seu imóvel? eu faço a avaliação e ajudo a vende-lo rapidamente.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="professionalismAndParalaxxContainer">
                <div id="paralaxx">
                    <div className="container">
                        <h2 className="display-6 text-center" data-aos="flip-left" data-aos-duration="1000">MAIS DE 7 ANOS DE LEGADO E EXPERIÊNCIA NESSA ÁREA</h2>
                    </div>
                </div>
                <div className="professionalism">
                    <div className="container mb-5 pb-5">
                        <h1 className="mt-5 text-center display-4" data-aos="fade-up" data-aos-duration="1000">PROFISSIONALISMO</h1>
                        <div className="row mt-5">
                            <div className="col col-lg-5" data-aos="fade-up" data-aos-duration="1000">
                                <img src={Profissionalism} alt="profissionalismo" />
                            </div>
                            <div className="col col-lg-7" data-aos="fade-up" data-aos-duration="1500">
                                <h4 className="fs-5">Com mais de 7 anos de experiência no mercado imobiliário, sou uma corretora comprometida em oferecer aos nossos clientes um atendimento personalizado e eficiente. Sei que a compra ou venda de um imóvel é uma decisão importante na vida de uma pessoa e, por isso, trabalho com dedicação e profissionalismo para tornar esse momento o mais suave e satisfatório possível. Ofereço serviços completos, desde a administração e captação de imóveis, passando pela avaliação e, claro, a venda. Não importa qual seja o seu objetivo imobiliário, estou aqui para ajudá-lo a alcançá-lo.</h4>
                                <h4 className="fs-5">Venha me conhecer melhor e veja que sou altamente capacitada e descubra por que sou a escolha certa para cuidar de todas as suas necessidades imobiliárias. Eu acredito que a satisfação dos meus clientes é o meu maior sucesso e, por isso, sempre busco ir além das expectativas. Entre em contato comigo e experimente a diferença de trabalhar com uma corretora eficiente.</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="professionalism">
                    <div className="container mb-5 pb-5">
                        <h1 className="mt-5 text-center display-4" data-aos="fade-up" data-aos-duration="800">GARANTIA: SEGURO FIANÇA PARCERIA CredPago</h1>
                        <div className="row mt-5 d-block text-center ">
                            <div className="col col-lg-12" data-aos="fade-up" data-aos-duration="800">
                                <h4 className="fs-5">Avaliação rápida, segura e on-line que facilita o processo de locação.</h4>
                            </div>
                            <div className="col col-lg-12" data-aos="fade-up" data-aos-duration="1300">
                                <img src={CredPago} alt="CredPago" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="properties">
                <div className="container mb-5">
                    <div className="mt-5">
                        <h1 className="mb-4" data-aos="fade-up" data-aos-duration="1000">IMÓVEIS:</h1>
                        <div className="propertiesContainer" data-aos="fade-up" data-aos-duration="1500">
                            {imoveis.map((imovel) => {
                                return (
                                    <Card key={imovel.id} id={imovel.id} title={imovel.title} apName={imovel.name} cover={imovel.cover} description={imovel.description} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact">
                <div className="container">
                    <div className="row text-center d-flex justify-content-center">
                        <div className="col col-lg-6" data-aos="flip-left" data-aos-duration="1500">
                            <h2 className="mt-5">Entre em contato comigo e acompanhe as novidades em minhas rede sociais.</h2>
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
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}