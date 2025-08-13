
import { DEBUG_MODE } from "./properties.js";

export async function httpMethod(url, method, body, headers){
    
    if (body != null) {
        body = JSON.stringify(body);
        if (DEBUG_MODE === "INFO") {
            console.log("Body request recibido: " + body);
        }
    }

    const ret = await fetch(url, {
        method: method,
        body: body,
        headers: headers
    });
   
    if (DEBUG_MODE === "INFO") {
        console.log("Fetch return: " + JSON.stringify(ret));
    }
    
    return await ret.json();
}

export function createHeaders(username, password) {
    
    let headers = new Headers();

    headers.set('Authorization', 'Basic ' + btoa(`${username}:${password}`));
    headers.set('Content-type', "application/json; charset=UTF-8");
    
    return headers;
}