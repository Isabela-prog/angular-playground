type Hero = {
    nome: string;
    vulgo: string;
    telefone: string;
}

function ligarPara(heroi: Hero) {
    console.log("ligando para: " + heroi.telefone);
}

ligarPara({
    nome: "Felipe",
    vulgo: "Capitão América",
    telefone: "13 99155789",
});