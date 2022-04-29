import React from 'react'
import '../styles/Navbar.scss'

function Navbar () {
  return (
    <nav>
 <div className="menu">
            <div className="logo">
                <img src="https://www.cemexmexico.com/image/layout_set_logo?img_id=55000653&t=1650289093464"
                    alt="Logo de cemex"/>
            </div>
            <div className="items">
                <ul>
                    <li className="menu_items"><a href="">Productos y Servicios</a></li>
                    <li className="menu_items"><a href="">Soluciones</a></li>
                    <li className="menu_items"><a href="">Herramientas y Soporte</a></li>
                    <li className="menu_items"><a href="">Sostenibilidad</a></li>
                    <li className="menu_items"><a href="">Compra Nuestros Productos</a></li>
                </ul>
            </div>
            <div className="icono_lupa">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path
                        d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z">
                    </path>
                </svg>
            </div>
            <div className="btn_cotiza">
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                        <path d="m18.988 2.012 3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287-3-3L8 13z"></path>
                        <path
                            d="M19 19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2V19z">
                        </path>
                    </svg>
                    Cotiza Aquí
                </a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
