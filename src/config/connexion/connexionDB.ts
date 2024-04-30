import { connect } from "mongoose";

const connexionDB = () => {
  const URL = String(process.env.URL_SERVER_MONGO);

  connect(URL)
    .then(() => {
      console.log("Conexion establecida con " + URL);
    })
    .catch((miErrorsito) => {
      console.log(miErrorsito);
    });
};

export default connexionDB;
