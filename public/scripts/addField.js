//Procurar o botão
document.querySelector("#add-time")
//Quando clicar no botão
.addEventListener('click', cloneField);

//Executar uma ação
function cloneField() {
    //Duplicar os campos. Que campo?
    const newFielContainer = document.querySelector('.schedule-item').cloneNode(true);

    //Pegar os campos
    const fields = newFielContainer.querySelectorAll('input');

    //Para cada campo, limpar
    fields.forEach(function(field) {
        //pegar o field do momento e limpa ele
        field.value = "";
    })

    //Colocar na página. Onde?
    document.querySelector('#schedule-items').appendChild(newFielContainer);

}