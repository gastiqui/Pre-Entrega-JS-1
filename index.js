// Calcular pagos en cuotas sobre un monto determinado.


let monto = 1500

let cuotas = 12

const credito = (monto, cuotas) => {
    if(monto != 0 && cuotas != 0){
        return monto / cuotas
    }else{
        return "Número Inválido"
    }
}

console.log(credito(monto,cuotas))

console.log(credito(1500,12))



// Calcular porcentaje sobre numero


const porcentaje = (num, porcentaje) =>{
    if(porcentaje < 0 || porcentaje > 100){
        return `El número ${porcentaje} es un porcentaje inválido.`
    }else if(num === 0){
        return `Cualquier porcentaje aplicado sobre cero, siempre será cero.`
    }else{
        return num * parseFloat("0." + porcentaje)
    }
}
console.log(porcentaje(20, 50))



// Calcular qué cantidad de vocales tiene una palabra


const vocales = (palabra) => {
    let cont = 0
    for(let i = 0; i < palabra.length; i++){
        if(palabra[i].match(/[aeiouAEIOUáéíóúÁÉÍÓÚ]/)){
            cont++
        }
    }
    return cont
}

console.log("La palabra tiene " + vocales("Gastón N. Quiroga") + " vocales")