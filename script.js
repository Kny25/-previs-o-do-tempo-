const key = "c56bdab526927a406e406b9b943bdc9a";

function ColocarDados(dados) {
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp - 273.15) + "ºC";
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "% de umidade";
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function BuscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=matrics`)
        .then(resposta => resposta.json());
    ColocarDados(dados);
}

function CliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value;
    BuscarCidade(cidade);
}
