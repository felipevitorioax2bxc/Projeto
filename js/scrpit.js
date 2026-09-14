/*
    MATH+

    Sistema simples de progresso
*/


// Recuperar progresso salvo

let progresso =
    Number(
        localStorage.getItem("progressoMath")
    ) || 0;


// Elementos da página

const numeroProgresso =
    document.getElementById("progresso");

const barraProgresso =
    document.getElementById("barraProgresso");


// Atualizar visual

if (
    numeroProgresso &&
    barraProgresso
) {

    numeroProgresso.innerText =
        progresso + "%";

    barraProgresso.style.width =
        progresso + "%";

}


// Função para aumentar progresso

function aumentarProgresso(valor) {

    progresso += valor;

    if (progresso > 100) {

        progresso = 100;

    }

    localStorage.setItem(
        "progressoMath",
        progresso
    );

    location.reload();

}
