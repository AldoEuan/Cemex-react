import React from 'react'
import '../styles/Footer.scss'
function Footer () {
  return (
    <footer>
        <div className='caja1'>
        <div className='acerca_cemex'>
            <p>/Acerca de CEMEX</p>
            <ul>
                <a href=""><li>Misión</li></a>
                <a href=""><li>Valores</li></a>
                <a href=""><li>Trabaja con Nosotros</li></a>
                <a href=""><li>Jubilados</li></a>
                <a href=""><li>Premio Obra CEMEX</li></a>
            </ul>
        </div>
        <div className='media_links'>
            <p>/Media & Links</p>
            <ul>
                <a href=""><li>CEMEX te acompaña</li></a>
                <a href=""><li>Sala de Prensa</li></a>
                <a href=""><li>Privacidad</li></a>
                <a href=""><li>Mapa del Sitio</li></a>
            </ul>
        </div>
        <div className='caja_botones'>
            <ul>
                <li><a href="">Encuentra tu Ubicación</a></li>
                <li><a href="">Sostenibilidad</a></li>
                <li><a href="">Calculadora de Cemento</a></li>
            </ul>
        </div>
        <div className='caja_descargas'>
            <p>Descarga CEMEX Go</p>
            <button >Descargalo de la appstore</button>
            <button >Disponible en google play</button>
            <p>Social</p>
            <a href="">F</a><a href="">T</a><a href="">I</a><a href="">Y</a>
        </div>
        </div>
        <div className='caja2'>
        <div className='caja_terminos'>
            <a href="">Terminos y Condiciones</a> <a href="">/Cookies y Políticas</a>
            <p>©2021 CEMEX S.A.B de C.V</p>
        </div>
        </div>
    </footer>
  )
}

export default Footer
