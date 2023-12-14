const key = "8149313b67dd53e6a639d43102a828c0"

// buscar a informaçao na API
async function buscarCidade(cidade){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}"`).then(resposta => resposta.json())
}

// funcao botao
function cliqueiNoBotao(){
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}