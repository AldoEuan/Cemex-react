import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const Carrusel = () => {
  return (
    <Carousel>
      <div>
        <img
          src="https://www.cemexmexico.com/documents/27057941/49641127/H02_MX.jpeg/12ed9177-312e-7e2b-4be4-ce8ee32d1bc5?t=1650927439148"
          alt=""
        />
        <p className="legend">Conoce nuestra línea de productos de tecnología avanzada que reducen las emisiones de CO₂.</p>
      </div>
      <div>
        <img
          src="https://cdn-web.cemex.com/image/journal/article?img_id=57792967&t=1650928235711&fileName=image%20(4).png"
          alt=""
        />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img
          src="https://www.cemexmexico.com/documents/27057941/49642387/Tigres-CEMEX.jpg/6804ea94-fbb8-e5d5-cb71-374b7937378f?t=1650926974128"
          alt=""
        />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};
