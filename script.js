var vetor = []
var vetor1 = []

function adicionarNoVet(nome,nasc,cpf,entrada,saida,nquart){
    console.log("na funcao add: " + nome)
    console.log("tamanho do vetor: " + vetor.length)
    if(vetor1[nquart]!=undefined){
        window.alert("Esse quarto está com hóspede. Por favor, escolha outro!")
    }else if(saida<entrada){
        window.alert("[E R R O] As datas estão trocadas, por favor coloque as na ordem corretas")
    }else{
        num1 = new Date(entrada)
        num2 = new Date(saida)
        dias = Math.abs((num1 - num2))/(1000*60*60*24)
        valor = dias*25;
        vetor1[nquart] = nome;
        informacoes = {
            nome1: nome,
            valor1: valor,
            nasc1: nasc,
            cpf1: cpf,
            entrada1: entrada,
            saida1: saida, 
            nquart1: nquart,
            gastos: "Hospedagem <br>",
            valorGast: valor + "<br>",
            soma: valor,
        };
    window.alert(`O senhor(a) ${informacoes.nome1} irá pagar R$: ${informacoes.valor1} pela hospedagem`)
    vetor[nquart] = informacoes;
    }
}
function quanto(entrada, saida){
        num1 = new Date(entrada)
        num2 = new Date(saida)
        dias = Math.abs((num1 - num2))/(1000*60*60*24)
        return dias*25;
}
function hospedar(){
    var nome = document.querySelector("#nome").value
    var nasc = document.querySelector("#nasc").value
    var cpf = document.querySelector("#cpf").value
    var entrada = document.querySelector("#entrada").value
    var saida = document.querySelector("#saida").value
    var quart = document.querySelector("#quart")
    nquart = quart.options[quart.selectedIndex].value

    
    if (nome.length == 0 || cpf.length == 0 || nasc.length == 0 || entrada.length == 0 || saida.length == 0) {
       window.alert("Por favor, preencha todos os campos para efetuar a reserva")
    }else{
        adicionarNoVet(nome,nasc,cpf,entrada,saida,nquart)
    }
}
function disponivel(){
    var resp = document.querySelector("#resp")
    resp.innerHTML = " "
    for(i = 0; i < 10; i++){
        if(vetor1[i] == undefined){
            resp.innerHTML += `${i+1}  `
        }
    }
}
function imprimir(){
    var nome = document.querySelector("#nome2").value
    var res2 = document.querySelector("#res2")
    var l1 = document.querySelector("#lado1")
    var l2 = document.querySelector("#lado2")
    res2.innerHTML = " ";
    l2.innerHTML = " ";
    l1.innerHTML = " ";
    pos = vetor1.indexOf(nome)
    console.log("VALOR POS: " + pos)
        if(pos == -1){
            window.alert("Hóspede não encontrado")
            
        }else{
            res2.innerHTML += `<br><b> HOSPEDE DO QUARTO ${pos+1} </b><br>`
            res2.innerHTML += `NOME: ${vetor[pos].nome1} <br>` 
            res2.innerHTML += `DATA DE NASCIMENTO: ${vetor[pos].nasc1} <br>` 
            res2.innerHTML += `CPF: ${vetor[pos].cpf1} <br>` 
            res2.innerHTML += `ENTRADA: ${vetor[pos].entrada1} <br>` 
            res2.innerHTML += `SAÍDA: ${vetor[pos].entrada1} <br>`
            res2.innerHTML += `VALOR DA HOSPEDAGEM R$: ${vetor[pos].valor1} <br>`
            if(vetor[pos].gastos == " "){

            }else{
                res2.innerHTML += "<b>GASTOS NO ESTABELECIMENTO</b> <br>"
                l1.innerHTML += `Nome produto: <br> ${vetor[pos].gastos} <br>`
                l2.innerHTML += `Valor do produto: <br>${vetor[pos].valorGast} <br>`
                l1.innerHTML += "<b> TOTAL: </b>";
                l2.innerHTML += `R$: ${vetor[pos].soma}`
            }
            
        }
}
function Todos(){
    var res2 = document.querySelector("#res2")
    res2.innerHTML = " ";
    if(vetor1.length == 0){
        window.alert("O hotel não possui hóspedes hospedados")
    }else{
        for(i = 0; i <10; i++){
            if(vetor1[i]!= undefined){
                res2.innerHTML += `<b> HOSPEDE DO QUARTO ${i+1} </b><br>`
                res2.innerHTML += `NOME: ${vetor[i].nome1} <br>` 
                res2.innerHTML += `DATA DE NASCIMENTO: ${vetor[i].nasc1} <br>` 
                res2.innerHTML += `CPF: ${vetor[i].cpf1} <br>` 
                res2.innerHTML += `ENTRADA: ${vetor[i].entrada1} <br>` 
                res2.innerHTML += `SAÍDA: ${vetor[i].entrada1} <br>`
                res2.innerHTML += `VALOR DA HOSPEDAGEM R$: ${vetor[i].valor1} <br> <br>` 
           }    
        }
    }
}
function Liberar(){
    nome3 = document.querySelector("#nome3").value
        pos = vetor1.indexOf(nome3)
        if(pos == -1){
            window.alert("Hóspede não encotrado. Verifique o nome e tente novamente")
        }else{
            vetor1[pos] = undefined;
            vetor[pos].nome1 = undefined;
            vetor[pos].nasc1 = undefined;
            vetor[pos].cpf1 = undefined;
            vetor[pos].entrada1 = undefined;
            vetor[pos].saida1 = undefined;
            vetor[pos].valor1 = undefined;
            window.alert("Quarto liberado!")
        }          
}
function addGastos(){
    var nome4 = document.querySelector("#nome4").value
    var prod = document.querySelector("#prod").value
    var valorProd = document.querySelector("#valorProd")
    novoValor = Number(valorProd.value)
    if(nome4.length==0|| prod.length == 0|| novoValor.length == 0){
        window.alert("Por favor, preencha todos os campos")
    }else{
        pos = vetor1.indexOf(nome4)
        vetor[pos].gastos =  vetor[pos].gastos + " " + prod + "<br>";
        vetor[pos].valorGast = vetor[pos].valorGast + " " + novoValor + "<br>"
        vetor[pos].soma = vetor[pos].soma + novoValor; 
        console.log(vetor)
    }
}
function mascaraCpf(){
    var cpf = document.getElementById("cpf")
    if(cpf.value.length == 3 || cpf.value.length == 7){
        cpf.value += "."
    }else if(cpf.value.length == 11){
        cpf.value += "-"
    }
}