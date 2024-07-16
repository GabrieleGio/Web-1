// /*
// console.log("ciao")
// */

// /*
// function capitalizefirstletter(string)
// {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }

// const prompt = require('prompt-sync')();
// var str = prompt('Enter a string: ');
// console.log("Hai inserito " + str);
// str = capitalizefirstletter(str);
// console.log("Hai inserito dopo " + str);
// */
// const prompt = require('prompt-sync')();
// function VerificaNumero(sNum)
// {
//     for( i=0; i<sNum.lenght; i++)
//         {
//             if((sNum.charAt(i) < '0') || (sNum.charAt(i)>'9'))
//                 {
//                     return false;
//                 }
//         }
//     return true;
// }

// function parseIntMy(sNum)
// {
//     bEsito = VerificaNumero(sNum);
//     if(bEsito==true)
//         return parseInt(sNum);
//     for(i=0;i<3;i++)
//         {
//             sNum1 = prompt("Attenzione, numero errato, riprova ");
//             bEsito = VerificaNumero(sNum1);
//             if(bEsito==true)
//                 return parseInt(sNum1);
//         }
        
// }
// var bEsito = VerificaNumero("3o8");
// if(bEsito == true)
//     console.log("Mi hai passato un numero")
// else
//     console.log("Non mi hai passato un numero");

// process.exit(0);




// //Inserisci primo numero e salvi su sPrimoNumero
// var sPrimoNum = prompt("Inserisci primo numero ");
// var iPrimoNum = parseInt(sPrimoNum);

// //Inserisci secondo numero
// var sSecondoNum = prompt("Inserisci secondo numero ");
// var iSecondoNum = parseInt(sSecondoNum)
// //Fai la somma
// var sSomma = iPrimoNum + iSecondoNum
// //Stampi a schermo la somma
// console.log("La somma vale " + sSomma)

// var A;
// var B;
// A = 3;
// B = "buongiorno a tutti";
// console.log("Il tipo della var A e' " + typeof(A) + "\n");
// console.log("Il tipo della var B e' " + typeof (B) + "\n");

// process.exit(0);

// var A=3;
// console.log("Il tipo della var A e' " + typeof(A) + "\n");
// A = "Ciao";
// console.log("Il tipo della var A e' " + typeof(A) + "\n");

// var iPosizione;
// var sMiaStringa;
// sMiaStringa = "paperino"
// iPosizione = sMiaStringa.indexOf("z");
// if((iPosizione == -1) || (iPosizione > 3))
// 	console.log("La z non c'e' nei primi 4 caratteri")
// else
// 	console.log("La z c'e' nei primi 4 caratteri");

// var iPosizione;
// var sMiaStringa;
// sMiaStringa = "paperino"
// iPosizione = sMiaStringa.indexOf("f");
// if(iPosizione == -1)
//     console.log("La f non c'è")
// else
//     console.log("La f c'è");

function TerminaConLettera(sStringa, sTermine)
{
    var lunghezzatermine = sTermine.lenght;
    var lunghezzastringa = sStringa.lenght;
    if(len_termine>len)
        return 0;
    var iPosizione = sStringa.indexOf(sTermine,(lunghezzastringa-lunghezzatermine));
    if (iPosizione >= 0)
        return true
    else
        return false
}
bret = TerminaConLettera("paperino","ino")
console.log(bret)





