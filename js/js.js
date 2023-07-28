$(function(){  
    $("#butao").on("click",function(){
        // var um;
        // um = document.getElementById("number1").value;
        // /*eu estou pegando o valor que tem dentro do id=number1 */
        // var dois;
        // dois = document.getElementById("dia").innerHTML = um;
        // var treis;
        // treis = document.getElementById("number2").value;
        // var quatro;
        // quatro = document.getElementById("mes").innerHTML = treis;
        // var cinco;
        cinco = document.getElementById("number3").value;
        var cincos;
        /*estou convertendo o tipo primitivo da minha variavel */
        cincos = 2023 - Number(cinco);
        var seis;
        seis = document.getElementById("ano").innerHTML = cincos;
    
    })

})