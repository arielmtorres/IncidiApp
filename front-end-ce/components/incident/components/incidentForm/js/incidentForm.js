import { populateSelect } from "../../../../../js/utils/formUtils.js";
import { getDocs } from "../../../../../js/utils/couchDBUtils.js";

import { DATABASE_EDUCATIONAL_LEVELS, DATABASE_SCHOOLS, DATABASE_WORK_LOCATIONS } from "../../../../../js/properties.js";

async function initIncidentForm() {

    let educationalLevel = document.getElementById("educationalLevel");
    populateSelect(educationalLevel, await getValues(DATABASE_EDUCATIONAL_LEVELS), "Seleccione un Nivel de educación");

    let school = document.getElementById("school");
    populateSelect(school, await getValues(DATABASE_SCHOOLS), "Seleccione una Escuela");

    let workLocation = document.getElementById("workLocation");
    populateSelect(workCategory, await getValues(DATABASE_WORK_LOCATIONS), "Seleccione un Área/Dependencia");
    
    let workCategory = document.getElementById("workCategory");
    workCategory.addEventListener("change", displayWorkCategory);

}

function displayWorkCategory() {

    if (workCategory.value === "servicios") {

        serviceDetails.style.display="block";
        infrastructureDetails.style.dislay = "none";
    } else {
        serviceDetails.style.display="none";
        infrastructureDetails.style.dislay = "block";
    }

}

async function getValues(database) {

    let values = await getDocs(database);
    return values.map(value => value.value);

}



