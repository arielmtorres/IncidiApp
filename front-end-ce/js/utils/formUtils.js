
export function populateSelect(select, options, defaultOption) {


    let selectOptionsHtml = `<option value="" disabled selected>${defaultOption}</option>`
    
    for (let option of options) {
        selectOptionsHtml += `<option value=${option}>${option}</option>`;
    }

    select.innerHTML = selectOptionsHtml;
}