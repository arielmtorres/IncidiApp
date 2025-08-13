import { createHeaders } from "./httpUtils.js";
import { httpMethod } from "./httpUtils.js";

import { DATABASE_URL_BASE } from "./properties.js";

import { USERNAME } from "./properties.js";
import { PASSWORD } from "./properties.js";

import { DEBUG_MODE } from "./properties.js";

export function createDoc(doc, database){

    let requestUri = `${DATABASE_URL_BASE}/${database}`;
    let headers = createHeaders(USERNAME, PASSWORD);

    if (DEBUG_MODE === "INFO") {
        console.log("URL donde crear documento: " + requestUri);
        console.log("Headers: " + [...headers.entries()]);
    }

    httpMethod(requestUri, "POST", doc, headers);
}

export function getDocs(database) {


    
    
    return documents;

}
