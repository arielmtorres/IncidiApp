
export function populateSelect(select, options) {

    let selectOptionsHtml = ``
    
    for (let option of options) {
        selectOptionsHtml += `<option value=${option}>${option}</option>`;
    }

    select.innerHTML = selectOptionsHtml;
}