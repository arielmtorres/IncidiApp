import { populateSelect } from "../../../../../js/utils/formUtils";

import { DATABASE_URL_BASE } from "../../../../../js/properties";

import { DATABASE_EDUCATIONAL_LEVELS } from "../../../../../js/properties";

import { DATABASE_USERNAME } from "../../../../../js/properties";
import { DATABASE_PASSWORD } from "../../../../../js/properties";


async function initIncidentForm() {

    let educationalLevel = document.getElementById("educationalLevel");
    populateSelect(educationalLevel, await getEducationalLevels());

    let school = document.getElementById("school");
    populateSelect(school, await getSchools());

}

async function getEducationalLevels() {

    let requestUri = `${DATABASE_URL_BASE}/${DATABASE_EDUCATIONAL_LEVELS}/_all_docs?include_docs=true`;
    let levels = await getDocs(requestUri, DATABASE_USERNAME, DATABASE_PASSWORD);
    
    return levels.map(level => level.value);
}

async function getSchools() {

    let requestUri = `${DATABASE_URL_BASE}/${DATABASE_SCHOOLS}/_all_docs?include_docs=true`;
    let schools = await getDocs(requestUri, DATABASE_USERNAME, DATABASE_PASSWORD);
    
    return schools.map(school => school.value);
}

