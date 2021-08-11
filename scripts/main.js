function maiorNum(lista){
    var numero = 0;
    for (var i in lista){
        if (lista[i] > numero){
            numero = lista[i];
        }
    }
    document.write("Maior número da função: ")
    return numero;
}

function mediaArit(lista){
    var media = 0;
    for (var i in lista){
        media = media + lista[i];
    }
    media = media/lista.length;
    document.write("<br>" + "Média aritmética: ")
    return media;
}

function tamanhoString(lista){
    for (var i in lista){
        document.write("<br>" + "String N" + i + ": ")
        document.write(lista[i].length)
    }
}