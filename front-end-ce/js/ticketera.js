import { createDoc } from "./couchDBUtils.js";
import { DATABASE_TICKET_NAME } from "./properties.js";
import { DEBUG_MODE } from "./properties.js";

addEventListener("DOMContentLoaded", ()=>{

    btnCargar.addEventListener("click", cargarCuota);

});

function cargarCuota() {

    let cuota = {
        "mes": mes.value,
        "monto": montoCuota.value
    };

    if (DEBUG_MODE === "INFO")
        console.log (cuota);

    createDoc(cuota, DATABASE_TICKET_NAME);
}