/*
console.log("ciao")
*/

/*
function capitalizefirstletter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const prompt = require('prompt-sync')();
var str = prompt('Enter a string: ');
console.log("Hai inserito " + str);
str = capitalizefirstletter(str);
console.log("Hai inserito dopo " + str);
*/
const prompt = require('prompt-sync')();
function VerificaNumero(sNum)
{
    for( i=0; i<sNum.lenght; i++)
        {
            if((sNum.charAt(i) < '0') || (sNum.charAt(i)>'9'))
                {
                    return false;
                }
        }
    return true;
}

function parseIntMy(sNum)
{
    bEsito = VerificaNumero(sNum);
    if(bEsito==true)
        return parseInt(sNum);
    for(i=0;i<3;i++)
        {
            sNum1 = prompt("Attenzione, numero errato, riprova ");
            bEsito = VerificaNumero(sNum1);
            if(bEsito==true)
                return parseInt(sNum1);
        }
        
}
var bEsito = VerificaNumero("3o8");
if(bEsito == true)
    console.log("Mi hai passato un numero")
else
    console.log("Non mi hai passato un numero");

process.exit(0);




//Inserisci primo numero e salvi su sPrimoNumero
var sPrimoNum = prompt("Inserisci primo numero ");
var iPrimoNum = parseInt(sPrimoNum);

//Inserisci secondo numero
var sSecondoNum = prompt("Inserisci secondo numero ");
var iSecondoNum = parseInt(sSecondoNum)
//Fai la somma
var sSomma = iPrimoNum + iSecondoNum
//Stampi a schermo la somma
console.log("La somma vale " + sSomma)


