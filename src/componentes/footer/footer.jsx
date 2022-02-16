import "./footer.scss";
import iconos_styles from "../../ui/iconos/iconos_styles";

export function Footer() {
  return (
    <footer className="footerF text-white">
      <hr className="py-4 " />
      <section className="footer_1">
        <div>
          <a href="#">
            <h2>Aviso Legal</h2>
            <div className="aviso">
              <img src={iconos_styles.img5} alt="" />
              <img src={iconos_styles.img3} alt="" />
            </div>
          </a>
        </div>
        <div>
          <a href="#">
            <h2>Cuenta Protegida</h2>
            <div className="aviso">
              <img src={iconos_styles.img6} alt="" />
              <img src={iconos_styles.img3} alt="" />
            </div>
          </a>
        </div>
        <div className="text-center">
          <h2>Siguenos en:</h2>
          <div className="aviso">
            <a href="https://facebook.com/">
              <img className="px-5" src={iconos_styles.img2} alt="" />
            </a>
            <a href="https://twitter.com/">
              <img className="px-5" src={iconos_styles.img4} alt="" />
            </a>
            <a href="https://instagram.com/">
              <img className="px-5" src={iconos_styles.img5} alt="" />
            </a>
          </div>
        </div>
      </section>
      <section className="footer_2 p-8">
        <h2>
          Compra y vende en<a href="#"> deTodo.com</a> y disfruta
        </h2>
        <p>
          Avisos Clasificados. @ 2010-2022 <a href="">deTodo.com</a>{" "}
        </p>
      </section>
    </footer>
  );
}
