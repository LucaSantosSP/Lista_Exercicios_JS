function maiorNum(lista){
    var numero = 0;
    for (var i in lista){
        if (lista[i] > numero){
            numero = lista[i];
        }
    }
    return numero;
}