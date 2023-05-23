const form = document.querySelector('form');
const resFoto = document.getElementById("resFoto")
const resNome = document.getElementById("resNome");
const resDescricao = document.getElementById("resDescricao");
const resAltura = document.getElementById("resAltura");
const resPeso = document.getElementById("resPeso");
const resImc = document.getElementById("resImc");
const resRes = document.getElementById("resRes");

form.onsubmit = (e) => {
 
    const inputs = new FormData(e.target);

    e.preventDefault();

   const foto = inputs.get('url_foto')
    const nome = inputs.get('nome');
    const descricao = inputs.get('descricao');
    const altura = Number(inputs.get('altura'));
    const peso = Number(inputs.get('peso_corporal'));
    const calcImc = (peso / (altura * altura)).toFixed(2)


    if (nome !== '' && descricao !== '' && altura !== '' && peso !== '' && foto !== '') {
        if (calcImc <= 18.5) {
        
            resNome.textContent = nome
            resDescricao.textContent = descricao
            resAltura.textContent = "Altura: " + altura
            resPeso.textContent = "Peso: " + peso
            resImc.textContent = "IMC: " + calcImc
            resRes.textContent = "MAGREZA"

        } else if (calcImc > 18.5 && calcImc <= 24.9) {
            resNome.textContent = nome
            resDescricao.textContent = descricao
            resAltura.textContent = "Altura: " + altura
            resPeso.textContent = "Peso: " + peso
            resImc.textContent = "IMC: " + calcImc
            resRes.textContent = "NORMAL"
        } else if (calcImc > 24.9 && calcImc <= 29.9) {
            resNome.textContent = nome
            resDescricao.textContent = descricao
            resAltura.textContent = "Altura: " + altura
            resPeso.textContent = "Peso: " + peso
            resImc.textContent = "IMC: " + calcImc
            resRes.textContent = "SOBREPESO"
        } else if (calcImc > 29.9 && calcImc <= 39.9) {
            resNome.textContent = nome
            resDescricao.textContent = descricao
            resAltura.textContent = "Altura: " + altura
            resPeso.textContent = "Peso: " + peso
            resImc.textContent = "IMC: " + calcImc
            resRes.textContent = "OBESIDADE"
        } else if (calcImc > 39.9) {
            resNome.textContent = nome
            resDescricao.textContent = descricao
            resAltura.textContent = "Altura: " + altura
            resPeso.textContent = "Peso: " + peso
            resImc.textContent = "IMC: " + calcImc
            resRes.textContent = "OBESIDADE GRAVE"
        } else {
            alert("Erro no Sistema!\nPor Favor Reinicie o Sistema")
        }
    } else {
        alert("Preencha os campos!!")
    }

};