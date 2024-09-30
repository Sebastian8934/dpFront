import React from 'react'

function Footer() {
  return (
    <>
    
        <div className="container">
            <footer className="py-5 px-5">
            <div className="row">
                <div className="col-md-5 col-12 py-3">
                <h5>Informacion del creador</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                    <a href="/#" className="nav-link p-0 text-muted">
                        Nombre: juan sebastian{" "}
                    </a>
                    </li>
                    <li className="nav-item mb-2">
                    <a href="/#" className="nav-link p-0 text-muted">
                        Apellidos: quiroz soto
                    </a>
                    </li>
                    <li className="nav-item mb-2">
                    <a href="/#" className="nav-link p-0 text-muted">
                        Telefeono: 3147961800
                    </a>
                    </li>
                    {/* <!-- <li className="nav-item mb-2"><a className="nav-link p-0 text-muted">FAQs</a></li> -->
                <!-- <li className="nav-item mb-2"><a className="nav-link p-0 text-muted">About</a></li> --> */}
                </ul>
                </div>

                <div className="col-md-5 col-12 py-3">
                <h5>Redes sociales</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                    <a href="/#" className="nav-link p-0 text-muted">
                        Linkedin
                    </a>
                    </li>
                    <li className="nav-item mb-2">
                    <a href="/#" className="nav-link p-0 text-muted">
                        Instagram
                    </a>
                    </li>
                    <li className="nav-item mb-2">
                    <a href="/#" className="nav-link p-0 text-muted">
                        Twitter
                    </a>
                    </li>
                    {/* <!-- <li className="nav-item mb-2"><a className="nav-link p-0 text-muted">FAQs</a></li> -->
                <!-- <li className="nav-item mb-2"><a className="nav-link p-0 text-muted">About</a></li> --> */}
                </ul>
                </div>

                <div className="col-md-2 col-12 py-3">
                <h5>Enlaces de interes</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                    <a
                        href="https://co.pinterest.com/search/pins/?q=imagenes%20de%20libros%20aesthetic%20horizontal&rs=guide&journey_depth=3&source_module_id=OB_imagenes_de_libros_d3196f46-870a-42e7-b0ee-5b2335940877&add_refine=Horizontal%7Cguide%7Cword%7C11"
                        className="nav-link p-0 text-muted"
                    >
                        Libreria 1
                    </a>
                    </li>
                    <li className="nav-item mb-2">
                    <a
                        href="https://www.librerianacional.com/?srsltid=AfmBOoq_jS_xOISsKW3Qbrehg5M3UR033guyRty-VbdY7Xgr3TX7LAep"
                        className="nav-link p-0 text-muted"
                    >
                        Libreria 2
                    </a>
                    </li>
                    <li className="nav-item mb-2">
                    <a
                        href="https://www.buscalibre.com.co/"
                        className="nav-link p-0 text-muted"
                    >
                        Libreria 3
                    </a>
                    </li>
                    {/* <!-- <li className="nav-item mb-2"><a className="nav-link p-0 text-muted">FAQs</a></li> -->
                <!-- <li className="nav-item mb-2"><a className="nav-link p-0 text-muted">About</a></li> --> */}
                </ul>
                </div>
            </div>
            <div className="d-flex justify-content-between py-4 my-4 border-top">
                <p>&copy; 2021 Company, Inc. All rights reserved.</p>
                <ul className="list-unstyled d-flex">
                <li className="ms-3">
                    <a href="/#" className="link-dark">
                    <svg className="bi" width="24" height="24">
                    </svg>
                    </a>
                </li>
                <li className="ms-3">
                    <a href="/#" className="link-dark">
                    <svg className="bi" width="24" height="24">
                    </svg>
                    </a>
                </li>
                <li className="ms-3">
                    <a href="/#" className="link-dark">
                    <svg className="bi" width="24" height="24">
                    </svg>
                    </a>
                </li>
                </ul>
            </div>
            </footer>
        </div>

    </>
  )
}

export default Footer