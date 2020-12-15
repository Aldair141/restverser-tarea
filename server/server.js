const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3500;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/usuario", (req, res) => {
    let data = {
        nombres: "Juan Aldair",
        apellidos: "Ruiz Carmona",
        edad: 26,
        cargo: "Analista Programador .NET"
    };

    res.json(data);
});

app.post("/usuario", (req, res) => {
    let body = req.body;
    let errores = "Falta ingresar los campos: ";
    let error = false;
    if (body.nombres === undefined) {
        errores += "nombre, "
        error = true;
    }

    if (body.apellidos === undefined) {
        errores += "apellidos, "
        error = true;
    }

    if (body.edad === undefined) {
        errores += "edad, "
        error = true;
    }

    if (body.cargo === undefined) {
        errores += "cargo, "
        error = true;
    }

    if (error) {
        errores = errores.substring(0, errores.length - 2);
        res.status(400).json({
            mensaje: errores
        });
    } else {
        res.status(200).json({
            mensaje: "Registro guardado satisfactoriamente."
        });
    }
});

app.put("/usuario/:id?", (req, res) => {
    let body = req.body;
    let errores = "Falta ingresar los campos: ";
    let error = false;

    if (req.params.id === undefined) {
        errores += "id, "
        error = true;
    }

    if (body.nombres === undefined) {
        errores += "nombre, "
        error = true;
    }

    if (body.apellidos === undefined) {
        errores += "apellidos, "
        error = true;
    }

    if (body.edad === undefined) {
        errores += "edad, "
        error = true;
    }

    if (body.cargo === undefined) {
        errores += "cargo, "
        error = true;
    }

    if (error) {
        errores = errores.substring(0, errores.length - 2);
        res.status(400).json({
            mensaje: errores
        });
    } else {
        res.status(200).json({
            mensaje: `Registro ${ req.params.id } actualizado satisfactoriamente.`
        });
    }
});

app.delete("/usuario/:id?", (req, res) => {
    if (req.params["id"] === undefined) {
        res.status(400).json({
            error: "Debe ingresar el id del usuario para eliminar."
        });
    } else {
        res.status(200).json({
            mensaje: "Usuario eliminado satisfactoriamente"
        });
    }
});

app.listen(port, () => {
    console.log(`Escuchando el puerto ${ port }`);
})