
export async function loadComponent(html, css, js, targetElementId = "principalBody") {

    const targetElement = document.getElementById(targetElementId);

    let htmlContent = await fetch(html);
    
    if (htmlContent.ok) {
        targetElement.innerHTML = await htmlContent.text();
        
        if (js != null) {
            const script = document.createElement("script");
            script.src = js;
            script.type = "module"; 
            document.body.appendChild(script);
        }

        if (css != null) {
            const link = document.createElement("link");
            link.rel = "stylesheet"     ;
            link.href = css;
            document.head.appendChild(link);
        }

    }
}