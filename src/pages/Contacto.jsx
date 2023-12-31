import React from "react";
import "./contacto.scss";
import { TextField } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
const Contacto = () => {
  return (
    <>
      <h1 className="titulo__contacto">Contactate con nosotros</h1>
      <main className="container__contacto">
        <div className="container__contacto__datos">
          <h2 className="mb-4">¿Tenes alguna duda o consulta ?</h2>
          <p>
            Tu estilo habla por ti en la ciudad. Si necesitas ayuda para
            expresarte con nuestras prendas o tienes alguna pregunta sobre
            nuestros productos, estamos a un mensaje de distancia. ¡Hablemos de
            tu estilo!
          </p>
          <h2 className="mt-5">Comunicate</h2>
          <ul>
            <li>
              <WhatsAppIcon />
              <a href="#"> 3543-123456</a>
            </li>
            <li>
              <InstagramIcon />
              <a href="#"> Ropa_Streetware</a>
            </li>
            <li>
              <FacebookIcon />
              <a href="#"> Ropa_Streetware</a>
            </li>
          </ul>
          <h2 className="mt-5">Encontranos en nuestro local</h2>
          <ul>
            <li>
              <LocationOnIcon /> <a href="#">Calle falsa 1234, Cordoba</a>
            </li>
            <li>
              <WatchLaterIcon />
              <a href="#">lunes a viernes: 9hs - 13hs y 16hs a 21hs</a>
            </li>
          </ul>
        </div>
        <div className="container__contacto__form">
          <form action="/" method="POST" className="form__contacto">
            <legend>Dejanos tu consulta</legend>
            <div>
              <label htmlFor="name"></label>
              <TextField
                id="form__contacto__input"
                margin="normal"
                fullWidth={true}
                label="Nombre"
                variant="standard"
              />
            </div>
            <div>
              <label htmlFor="last name"></label>
              <TextField
                id="form__contacto__input"
                margin="normal"
                fullWidth={true}
                label="Apellido"
                variant="standard"
              />
            </div>
            <div>
              <label htmlFor="phono"></label>
              <TextField
                id="form__contacto__input"
                margin="normal"
                fullWidth={true}
                label="Telefono"
                variant="standard"
              />
            </div>
            <div>
              <label htmlFor="phono"></label>
              <TextField
                id="form__contacto__input"
                margin="normal"
                fullWidth={true}
                label="Mail"
                variant="standard"
              />
            </div>
            <div>
              <label htmlFor="commit"></label>
              <TextField
                id="form__contacto__input"
                margin="normal"
                fullWidth={true}
                label="Escriba su consulta..."
                variant="standard"
              />
            </div>
            <br />
            <div>
              <button type="submit" className="btn btn-success me-2">
              Enviar
            </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Contacto;
