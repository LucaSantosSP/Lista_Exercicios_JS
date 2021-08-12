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
    document.write("<br> Média aritmética: ")
    return media;
}

function tamanhoString(lista){
    for (var i in lista){
        document.write("<br> String N" + i + ": ")
        document.write(lista[i].length)
    }
}

function tamanhoString2(lista){
    var quantidade = [];
    for (var i in lista){
        var x = lista[i].length
        quantidade.push(x);
    }
    document.write("<br> Tamanho das strings: ")
    return quantidade;
}
function ordemReversa(lista){
    var reverso = [];
    for (var i in lista){
        reverso.unshift(lista[i])
    }
    document.write("<br> Lista em ordem reversa: ")
    return reverso;
}

function nElementos(n, arr){
    var retorno = [];
    for (var i in n){
        retorno.push(arr[i])
    }
    document.write("<br> Primeiros " + n + " elementos da lista: ")
    return retorno;
}