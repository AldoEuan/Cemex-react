import React from 'react'
import '../styles/Footer.scss'
import Appstore from '../Assets/app_store.png'
import Googleplay from '../Assets/google_play.png'
import Calculadora from "../Assets/Calculadora.svg";
import Plant from "../Assets/Plants.svg";
import Facebook from "../Assets/Facebook.svg";
import Twitter from "../Assets/Twitter.svg";
import Instagram from "../Assets/Instagram.svg";
import Youtube from "../Assets/Youtube.svg";

import { LeftArrow, MapsIcon } from "../utils/Icons";

function Footer() {
  return (
    <footer>
      <div className="caja1">
        <div className="acerca_cemex">
          <p>/Acerca de CEMEX</p>
          <ul>
            <li>
              <a href="/">Misión</a>
            </li>
            <li>
              <a href="/">Valores</a>
            </li>
            <li>
              <a href="/">Trabaja con Nosotros </a>
            </li>
            <li>
              <a href="/">Jubilados </a>
            </li>
            <li>
              <a href="/">Premio Obra CEMEX</a>
            </li>
          </ul>
        </div>
        <div className="media_links">
          <p>/Media & Links</p>
          <ul>
            <li>
              <a href="/">CEMEX te acompaña</a>
            </li>
            <li>
              <a href="/">Sala de Prensa</a>
            </li>
            <li>
              <a href="/">Privacidad</a>
            </li>
            <li>
              <a href="/">Mapa del Sitio</a>
            </li>
          </ul>
        </div>
        <div className="caja_botones">
          <ul>
            <li>
              <a href="/">
                <button>
                  <MapsIcon width={24} height={24} />
                </button>{" "}
                <span> Encuentra tu Ubicación</span>
              </a>
            </li>
            <li>
              <a href="/">
                <button>
                  <MapsIcon width={24} height={24} />
                </button>
                <span>Sostenibilidad </span>
              </a>
            </li>
            <li>
              <a href="/">
                <button>
                  <img src={Calculadora} alt="" />
                </button>
                <span>Calculadora de Cemento</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="caja_descargas">
          <p>Descarga CEMEX Go</p>
          <img src={Appstore} alt="Appstore" />
          <img src={Googleplay} alt="googleplay" />

          <div className="social">
            <p>Social</p>
            <a href="/">
              <img src={Facebook} alt="" />
            </a>
            <a href="/">
              <img src={Twitter} alt="" />
            </a>
            <a href="/">
              <img src={Instagram} alt="" />
            </a>
            <a href="/">
              <img src={Youtube} alt="" />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="caja2">
        <div className="caja_terminos">
          <a href="/">Terminos y Condiciones</a>{" "}
          <a href="/">/Cookies y Políticas</a>
          <span>©2021 CEMEX S.A.B de C.V</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer
