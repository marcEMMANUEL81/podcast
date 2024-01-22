import NavbarComponent from "./components/NavbarComponent";
import logo2 from "./assets/images/soundcloundButton.png";
import logo1 from "./assets/images/podcastButton.png";
import ReactAudioPlayer from "react-audio-player";
import podcast from "./assets/images/podcast.jpg";
import banner from "./assets/images/banner2.jpg";
import song from "./assets/song/song2.mp3";
import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div className="App">
      <section className="w-screen relative">
        <img src={banner} className="h-[650px] w-full object-cover" alt="" />
        <NavbarComponent />
        <div className="lg:px-24 p-4 absolute top-[110px]">
          <p className="text-white [text-shadow:_2px_2px_4px_rgb(0_0_0_/_20%)] md:leading-[1.4em] leading-[1.4em] md:text-7xl text-6xl font-bold lg:w-[10em]">
            Nouvel épisode disponible
          </p>
           <p className="sm:text-lg text-bold [text-shadow:_2px_2px_4px_rgb(0_0_0_/_20%)] text-base lg:text-white text-white mt-6">
            Disponible en exclusivité sur notre plateforme
          </p>
          <div className="sm:flex gap-3 mt-9">
            <img src={logo1} alt="" />
            <img className="mt-5 lg:mt-0" src={logo2} alt="" />
          </div>
        </div>
        <div className="absolute sm:bottom-[-120px] w-full sm:flex sm:justify-center">
          <div className="sm:flex sm:w-5/6 px-4 rounded-2xl bg-white">
            <img
              src={podcast}
              className="lg:flex hidden rounded-l-2xl h-full w-56 object-cover"
              alt=""
            />
            <div className="sm:px-11 py-5 sm:w-5/6">
              <p className="text-3xl font-bold">
                VITIB levier du developpement durable et de l'innovation technologique en Côte d'ivoire
              </p>
              <p className="text-basic mt-3 text-gray-600">
                Episode 1 podcast numéro 1
              </p>
              <ReactAudioPlayer
                className="w-full mt-6 hover:animate-pulse"
                src={song}
                controls
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col justify-center items-center mt-56 mb-9">
        <p className="mb-11 p-2 text-center text-3xl font-bold mt-11">Participants aux podcast</p>
        <Carousel autoPlay className="md:w-3/5 w-5/6">
          <div>
            <img alt="" src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            <p className="legend text-bold text-xl">Barro Anne Joëlle</p>
          </div>
          <div>
            <img alt="" src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            <p className="legend text-bold text-xl">Béké Ogo Isaac</p>
          </div>
          <div>
            <img alt="" src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            <p className="legend text-bold text-xl">Bini Abo</p>
          </div>
          <div>
            <img alt="" src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            <p className="legend text-bold text-xl">Blé Baka Junio Cédric</p>
          </div>
          <div>
            <img alt="" src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            <p className="legend text-bold text-xl">Brou Yao Marc-Emmanuel</p>
          </div>
          <div>
            <img alt="" src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            <p className="legend text-bold text-xl">Camara Mahoua Aude Aymone Priscille</p>
          </div>
        </Carousel>
      </section>

      <FooterComponent />
    </div>
  );
}

export default App;
