import NavbarComponent from "./components/NavbarComponent";
import logo2 from "./assets/images/soundcloundButton.png";
import logo1 from "./assets/images/podcastButton.png";
import ReactAudioPlayer from "react-audio-player";
import podcast from "./assets/images/podcast.jpg";
import banner from "./assets/images/banner.png";
import song from "./assets/song/podcast.mp3";
import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import FooterComponent from "./components/FooterComponent";

import barro from "./assets/images/barro.jpeg"
import bini from "./assets/images/bini.png"
import beke from "./assets/images/beke.png"
import ble from "./assets/images/ble.png"
import brou from "./assets/images/brou.png"
import aude from "./assets/images/aude.png"

function App() {
  return (
    <div className="App">
      <section className="w-screen relative">
        <img id="home" src={banner} className="h-[750px] w-full object-cover" alt="" />
        <NavbarComponent />
        <div className="lg:px-24 p-4 absolute top-[160px]">
          <p className="text-white [text-shadow:_2px_2px_4px_rgb(0_0_0_/_20%)] md:leading-[1.4em] leading-[1.4em] md:text-7xl text-6xl font-bold lg:w-[10em]">
            Nouvel épisode disponible
          </p>
           <p className="sm:text-lg text-bold [text-shadow:_2px_2px_4px_rgb(0_0_0_/_20%)] text-base lg:text-white text-white mt-6">
            Disponible en exclusivité sur notre plateforme
          </p>
          <div className="flex gap-4 mt-9">
            <img className="h-11 w-32" src={logo1} alt="" />
            <img className="h-11 w-32" src={logo2} alt="" />
          </div>
        </div>
        <div id="podcast" className="absolute sm:bottom-[-150px] w-full sm:flex sm:justify-center p-4">
          <div className="sm:flex sm:justify-between sm:w-5/6 shadow-lg rounded-2xl bg-white">
            <img
              src={podcast}
              className="lg:flex hidden rounded-l-2xl h-full w-60 object-cover"
              alt=""
            />
            <div className="sm:px-11 py-5 px-4">
              <p className="text-3xl font-bold">
                VITIB levier du developpement durable et de l'innovation technologique en Côte d'ivoire
              </p>
              <p className="text-basic mt-4 text-gray-600">
                Episode 1 podcast numéro 1
              </p>
              <ReactAudioPlayer
                className="w-full mt-3 hover:animate-pulse"
                src={song}
                controls
              />
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="w-full flex flex-col justify-center items-center sm:mt-56 mt-96 mb-9">
        <p className="mb-11 p-2 text-center text-3xl font-bold mt-11">Participants aux podcast</p>
        <Carousel autoPlay className="md:w-3/5 w-5/6">
          <div>
            <img alt="" src={barro} className="md:h-[700px] object-cover" />
            <p className="legend text-bold text-xl">Barro Anne Joëlle, <br /> Docteur en Économie Numérique</p>
          </div>
          <div>
            <img alt="" src={beke} className="md:h-[700px] object-cover" />
            <p className="legend text-bold text-xl">Béké Ogo Isaac, <br /> Directeur Général du VITIB</p>
          </div>
          <div>
            <img alt="" src={bini} className="md:h-[700px] object-cover" />
            <p className="legend text-bold text-xl">Bini Abo Kouamé, <br /> Directeur Général du VITIB</p>
          </div>
          <div>
            <img alt="" src={ble} className="md:h-[700px] object-cover" />
            <p className="legend text-bold text-xl">Blé Baka Junior Cédric, <br /> Responsable des Bioechnologies</p>
          </div>
          <div>
            <img alt="" src={brou} className="md:h-[700px] object-cover" />
            <p className="legend text-bold text-xl">Brou Yao Marc-Emmanuel, <br /> Responsable du Département des Tecnologies de l'Information</p>
          </div>
          <div>
            <img alt="" src={aude} className="md:h-[700px] object-cover" />
            <p className="legend text-bold text-xl">Camara Mahoua Aude Aymone Priscille, <br /> Responsable du Département Juridique et de la Conformité</p>
          </div>
        </Carousel>
      </section>

      <FooterComponent />
    </div>
  );
}

export default App;
