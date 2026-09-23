function mostrarAlerta(){
    alert("Bom dia turma do 2ºAno Exatas!")
}    

    function pedirNome(){
        let nome = prompt("Informe seu nome: ")
        alert("Bom dia, " + nome)
}             

function somarNumeros(){
    let primeiroValor = Number(prompt("Informe o primeiro numero: "))
    let segundoValor = Number(prompt("informe o segundo numero"))
    let soma = primeiroValor + segundoValor

    alert("A soma dos numeros é: " + soma)
}    
function mudarFormatação(){
    let resultado = document.getElementById("resultado")
    let nome = prompt("informe o seu nome: ")
    resultado.textContent = "Bom dia! " + nome
    resultado.style.background = "pink"