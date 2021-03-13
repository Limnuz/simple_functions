// substitui todas as ocorrências de um determinado termo em uma string.
function replaceAll(str, before, later){
    while(str.indexOf(before) != -1){
        str = str.replace(before, later)
    }

    return str
}


//testes:
/*
var text = 'Olá, boa noite. Qual é o+seu nome? '
text = replaceAll(text, ' ', '+')
console.log(text)
text = replaceAll(text, '+', ' ')
console.log(text)
*/
