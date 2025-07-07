import Image from "next/image";
import banner from "@/app/assets/img/l3.jpg";
import "./banner.css";

export function Banner() {
  return (
    <section className="banner">
      <div className="banner-container">
        <div className="banner-left">
          <h1 className="titulo">Dev3C Solutions</h1>
          <h3 className="">Tecnología que conecta, crea y transforma.</h3>
          <p>
            Desarrollamos soluciones digitales personalizadas para empresas,
            emprendedores y personas que buscan crecer en el mundo digital.
          </p>
          <button className="btn">CLICK HERE</button>
        </div>
        <div className="banner-right">
          <Image src={banner} alt="Banner" className="banner-image" priority />
        </div>
      </div>
      <div className="wave">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.00,49.98 C261.57,-36.00 275.11,227.47 516.64,63.66 L500.00,150.00 L0.00,150.00 Z"
            fill="#f0f0f0"
            stroke="none"
          />
        </svg>
      </div>
      {/* <div className="element"></div> */}
    </section>
  );
}
