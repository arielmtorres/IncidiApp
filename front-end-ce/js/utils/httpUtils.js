

export async function httpMethod(url, method, body, headers) {
    
    if (body != null) {
        body = JSON.stringify(body);
    }

    const ret = await fetch(url, {
        method: method,
        body: body,
        headers: headers
    });
    
    return await ret.json();
}

export function createHeaders(username, password) {
    
    let headers = new Headers();

    headers.set('Authorization', 'Basic ' + btoa(`${username}:${password}`));
    headers.set('Content-type', "application/json; charset=UTF-8");
    
    return headers;
}