import React from 'react'
import '../styles/Footer.scss'
function Footer () {
  return (
    <footer>
        <div className='caja1'>
        <div className='acerca_cemex'>
            <p>Acerca de CEMEX</p>
            <ul>
                <li>Misión</li>
                <li>Valores</li>
                <li>Trabaja con Nosotros</li>
                <li>Jubilados</li>
                <li>Premio Obra CEMEX</li>
            </ul>
        </div>
        <div className='media_links'>
            <p>Media & Links</p>
            <ul>
                <li>CEMEX te acompaña</li>
                <li>Sala de Prensa</li>
                <li>Privacidad</li>
                <li>Mapa del Sitio</li>
            </ul>
        </div>
        <div className='caja_botones'>
            <a href="">Encuentra tu Ubicación</a>
            <a href="">Sostenibilidad</a>
            <a href="">Calculadora de Cemento</a>
        </div>
        <div className='caja_descargas'>
            <p>Descarga CEMEX Go</p>
            <button value={'Descargalo en la App Store'}></button>
            <button value={'Disponible en google play'}></button>
            <p>Social</p>
            <a href="">F</a><a href="">T</a><a href="">I</a><a href="">Y</a>
        </div>
        </div>
        <div className='caja2'>
        <div className='caja_terminos'>
            <a href="">Terminos y Condiciones</a> <a href="">Cookies y Políticas</a>
        </div>
        </div>
    </footer>
  )
}

export default Footer
