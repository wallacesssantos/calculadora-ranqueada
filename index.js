console.log("Calculadora de partidas ranqueadas \n")

console.log("Se vitórias for menor do que 10 = Ferro")
console.log("Se vitórias for entre 11 e 20 = Bronze")
console.log("Se vitórias for entre 21 e 50 = Prata")
console.log("Se vitórias for entre 51 e 80 = Ouro")
console.log("Se vitórias for entre 81 e 90 = Diamante")
console.log("Se vitórias for entre 91 e 100= Lendário")
console.log("Se vitórias for maior ou igual a 101 = Imortal \n")


main()
function main(){
    victory(102, 60)
}
        
function victory(victories, defeat){
    console.log("Nosso pequeno guerreiro Zelda conseguiu " + victories + " vitórias")
    console.log("Ele perdeu apenas " + defeat + " ranqueadas")
let ranking = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]

if(victories <= 10){
    console.log(`O Herói tem saldo de ${victories}  está no nível ` + ranking[0])
}else if(victories <= 20){
    console.log(`O Herói tem saldo de ${victories}  está no nível ` + ranking[1])
}else if(victories <= 50){
    console.log(`O Herói tem saldo de ${victories}  está no nível ` + ranking[2])
}else if(victories <= 80){
    console.log(`O Herói tem saldo de ${victories}  está no nível ` + ranking[3])
}else if(victories <= 90){
    console.log(`O Herói tem saldo de ${victories}  está no nível ` + ranking[4])
}else if(victories <= 100){
    console.log(`O Herói tem saldo de ${victories}  está no nível ` + ranking[5])
}else if(victories >= 101){
    console.log(`O Herói tem saldo de ${victories}  está no nível ` + ranking[6])
}

}
