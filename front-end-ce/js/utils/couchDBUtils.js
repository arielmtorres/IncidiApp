import { createHeaders } from "./httpUtils.js";
import { httpMethod } from "./httpUtils.js";

import { DATABASE_URL_BASE } from "../properties.js";

import { DATABASE_USERNAME } from "../properties.js";
import { DATABASE_PASSWORD } from "../properties.js";


export function createDoc(doc, database){

    let requestUri = `${DATABASE_URL_BASE}/${database}`;
    let headers = createHeaders(DATABASE_USERNAME, DATABASE_PASSWORD);

    httpMethod(requestUri, "POST", doc, headers);
}

export async function getDocs(database) {

    let requestUri = `${DATABASE_URL_BASE}/${database}/_all_docs?include_docs=true`;
    let headers = createHeaders(DATABASE_USERNAME, DATABASE_PASSWORD);
    let data = await httpMethod(requestUri, "GET", null, headers);

    return data.rows.map(row => row.doc);
}

export async function getDocsWithFind(database, find) {

    let requestUri = `${DATABASE_URL_BASE}/${database}`;
    let headers = createHeaders(DATABASE_USERNAME, DATABASE_PASSWORD);
    let data = await httpMethod(requestUri, "POST", find, headers);

    return data.docs;
}

