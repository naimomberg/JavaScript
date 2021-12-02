var idade = 18
console.log(`Você tem ${idade} anos. Seu voto é:`)
if (idade < 16) {
    console.log('Você não Vota')
} else if (idade < 18 || idade > 65) {
    console.log('Opcional')
} else if (idade >= 18) {
    console.log('Obrigatório')
}