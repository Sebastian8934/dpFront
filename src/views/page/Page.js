import React from "react";

// Hoja de estilos
import './inicioStyle.css';

//Imagenes
import image2 from '../../assets/image/portada2.jpg'
import image4 from '../../assets/image/portada4.jpg'
import image5 from '../../assets/image/portada5.jpg'
import image6 from '../../assets/image/portada6.jpg'

//Component
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";

function Page() {
  return (
    <>
      {/* <!-- Navbar --> */}
      <Navbar />

      <div
        id="myCarousel"
        className="carousel slide carousel-backgourd-color"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner container">
          <div className="carousel-item active">
            {/* <!-- <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg> --> */}

            <div className="w-100 p-3 d-flex justify-content-end">
              <img
                style={{maxHeight:'515px'}}
                src="https://i.pinimg.com/564x/86/aa/84/86aa846a0a38bce74d111b278c196587.jpg"
                className=""
                alt="..."
              />
            </div>

            <div className="container">
              <div className="mb-5 carousel-caption text-start">
                <h1>Tu próximo compañero literario.</h1>
                <p>Un buen libro es el mejor compañero, ¿ya tienes el tuyo?.</p>
                {/* <!-- <p><a className="btn btn-lg btn-primary">Sign up today</a></p> --> */}
              </div>
            </div>
          </div>

          <div className="carousel-item">
            {/* <!-- <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg> --> */}

            <div className="w-100 p-3 d-flex justify-content-center">
              <img
                style={{maxHeight:'515px'}}
                src="https://i.pinimg.com/564x/b9/dc/d8/b9dcd83c0155f9eb286f42eee09b9fee.jpg"
                className=""
                alt="..."
              />
            </div>

            <div className="container">
              <div className="mb-5 carousel-caption">
                <h1>Aventuras en cada página.</h1>
                <p>
                  Descubre nuevas aventuras en cada página, ¡haz tuyo un libro
                  hoy!.
                </p>
                {/* <!-- <p><a className="btn btn-lg btn-primary">Learn more</a></p> --> */}
              </div>
            </div>
          </div>

          <div className="carousel-item">
            {/* <!-- <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg> --> */}

            <div className="w-100 p-3 d-flex justify-content-start">
              <img
                style={{maxHeight:'515px'}}
                src="https://i.pinimg.com/564x/60/06/e0/6006e0176e40867f0c8c96543e144d13.jpg"
                className=""
                alt="..."
              />
            </div>

            <div className="container">
              <div className="mb-5 carousel-caption text-end">
                <h1>Viaje a mundos mágicos.</h1>
                <p>
                  Sumérgete en un mundo de dragones, magia y héroes. ¡Lleva la
                  fantasía contigo en un libro!.
                </p>
                {/* <!-- <p><a className="btn btn-lg btn-primary">Browse gallery</a></p> --> */}
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="b-example-divider"></div>

      {/* <!-- Section 1 --> */}
      <section>
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              {/* <!-- <img src="https://i.pinimg.com/564x/60/06/e0/6006e0176e40867f0c8c96543e144d13.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy"> --> */}
              <img
                src={image2}
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3">Acerca de</h1>
              <p className="lead">
                Nuestra misión es crear un espacio donde los lectores puedan
                encontrar no solo libros, sino también experiencias. Ya sea que
                estés buscando una novela que te transporte a otro universo, una
                historia que te haga reflexionar o simplemente el placer de una
                tarde tranquila con un buen libro, nuestra librería es tu lugar.
              </p>
              {/* <!-- <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
            </div> --> */}
            </div>
          </div>
        </div>
      </section>

      <div className="b-example-divider"></div>

      {/* <!-- Section 2 --> */}
      <section>
        <div className="container py-5">
          <div className="text-center">
            <h1 className="display-4 fw-bold lh-1 mb-3">Libros en venta</h1>
          </div>

          <div className="row d-flex justify-content-center">
            <div className="col-md-3 mt-3">
              <div className="card" style={{width:"18rem"}}>
                <img
                  width="236"
                  height="376"
                  src={image4}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Sinopsis</h5>
                  <p className="card-text">
                    El rey Arturo es venerado como un líder sabio y valiente,
                    pero detrás del poder del trono de Camelot se ocultan
                    secretos y magia. La princesa Ginebra ha sido enviada a
                    Camelot para casarse con Arturo, pero su verdadero propósito
                    es mucho más oscuro.
                  </p>
                  {/* <!-- <a className="btn btn-primary">Go somewhere</a> --> */}
                </div>
              </div>
            </div>

            <div className="col-md-3 mt-3">
              <div className="card" style={{width:"18rem"}}>
                <img
                  width="236"
                  height="376"
                  src={image5}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Sinopsis</h5>
                  <p className="card-text">
                    En un cruce inesperado de mundos mágicos, Alicia, que una
                    vez cayó por una madriguera de conejo, se encuentra atrapada
                    en un nuevo lugar: Nunca Jamás. Aquí, los niños nunca crecen
                    y las aventuras parecen no tener fin.Alicia pronto descubre
                    que este no es el paraíso.
                  </p>
                  {/* <!-- <a className="btn btn-primary">Go somewhere</a> --> */}
                </div>
              </div>
            </div>

            <div className="col-md-3 mt-3">
              <div className="card" style={{width:"18rem"}}>
                <img
                  width="236"
                  height="376"
                  src={image6}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Sinopsis</h5>
                  <p className="card-text">
                    Poppy nunca ha tenido la oportunidad de vivir su vida como
                    una persona normal. Desde que nació, ha sido la Doncella,
                    una joven destinada a vivir aislada, sin contacto y sin
                    amor. Con el objetivo de su Ascensión, un ritual que
                    determinará el futuro del reino.
                  </p>
                  {/* <!-- <a className="btn btn-primary">Go somewhere</a> --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="b-example-divider"></div>

      {/* <!-- Section 3 --> */}
      <section>
        <div className="container col-xl-10 col-xxl-8 px-4 py-5">
          <div className="row align-items-center g-lg-5 py-5">
            <div className="col-lg-7 text-center text-lg-start">
              <h1 className="display-4 fw-bold lh-1 mb-3">Contacto</h1>
              <p className="col-lg-10 fs-4">
                ¿Listo para descubrir tu próxima lectura? Explora nuestro
                catálogo de libros y contáctanos para cualquier consulta o
                recomendación personalizada. ¡Estamos aquí para ayudarte a
                encontrar la historia perfecta!.
              </p>
            </div>
            <div className="col-md-10 mx-auto col-lg-5">
              <form className="p-4 p-md-5 border rounded-3 bg-light">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Nombres</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Correo</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPassword">Telefono</label>
                </div>
                <div>
                  <button
                    id="btnContact"
                    className="w-100 btn btn-lg btn-primary"
                    type="submit"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="b-example-divider"></div>

      {/* <!-- Footer --> */}
      <Footer />

    </>
  );
}

export default Page;
