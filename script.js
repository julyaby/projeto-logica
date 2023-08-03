
function algoritmo18 (){

    let  resultado,valorDespesas,valorGorjeta,valorTotal;
    valorDespesas= parseFloat(prompt("Digite o valor gasto com as despesas no restaurante: "));
    
    valorGorjeta=valorDespesas*0.1
    valorTotal=valorDespesas+valorGorjeta
    resultado ="Valor total com a gorjeta: "+valorTotal
    
    console.log(resultado)
    document.getElementById("resultado").innerHTML= resultado;
    
    }