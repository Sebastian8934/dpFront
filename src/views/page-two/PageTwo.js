import React from "react";

//Hoja de estilo
import "./pageTwo.css";

//Component
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";

function PageTwo() {
  return (
    <>
      {/* <!-- Navbar --> */}
      <Navbar />

      {/* <!-- section 1 --> */}
      <section>
        <div class="container py-5">
          <div class="text-center">
            <h5>Historia de la libreria, el rincón de los libros olvidados</h5>
          </div>
          <div class="text-center">
            <p>
              En un pequeño callejón, casi oculto por el bullicio de la ciudad,
              se encontraba una vieja librería llamada "El rincón de los libros
              olvidados". Desde afuera, las ventanas estaban cubiertas por polvo
              y sus estantes de madera crujían bajo el peso de libros antiguos,
              algunos con portadas desvanecidas, otros con páginas que parecían
              haber sido tocadas por siglos de historia. Sin embargo, los pocos
              que se aventuraban a entrar siempre salían con una sonrisa en el
              rostro, como si hubieran descubierto un tesoro oculto.
            </p>
          </div>
        </div>
      </section>

      <div class="b-example-divider"></div>

      {/* <!-- section 2 --> */}
      <section>
        {/* <!-- <div class="d-flex justify-content-center"> --> */}
        <div class="container py-5">
          <div class="section2-position-text">
            <div class="text-center">
              <h5>Servicios</h5>
            </div>
            <div>
              <ul>
                <li>
                  Préstamo de libros: Explicación de cómo solicitar préstamos de
                  libros (físicos o digitales).
                </li>
                <li>
                  Consulta de disponibilidad: Opción para que los usuarios
                  revisen la disponibilidad de libros.
                </li>
                <li>
                  Sala de estudio: Información sobre la reserva de salas de
                  estudio o áreas de lectura.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>

      <div class="b-example-divider"></div>

      {/* <!-- section 3 --> */}
      <section>
        <div class="container py-5">
          <div class="text-center mb-5">
            <h5>Libros mas populares</h5>
          </div>

          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Vendidos</th>
                <th scope="col">Alquilados</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>El engaño de la princesa</td>
                <td>150</td>
                <td>120</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Alicia en el País de las Maravillas</td>
                <td>40</td>
                <td>30</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Sangre y cenizas</td>
                <td>20</td>
                <td>10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div class="b-example-divider"></div>

      {/* <!-- Footer --> */}
      <Footer />

    </>
  );
}

export default PageTwo;
