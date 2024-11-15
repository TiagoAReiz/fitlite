//Definindo variaveis
let imc = 0
let imcinf = ""
let dieta = 1
let treino = 1
let altura = 0
let peso = 0
let cafe
let lancheM
let almoco
let lancheT
let janta
let carboidratos
let proteinas
let saladas
let bebidas
let shakes
let frutas
let geral
let cafeP = ["Ovo mexido", "Pate de Frango", "Pate de Atum"]
let cafeC = [ "Pão de forma", "Torrada"]
let cafeB = ["Suco de fruta", "Café"]
let lancheMs = [
  "Whey com banana e leite(preferêncialmente desnatado)",
  "Whey com morango e leite(preferêncialmente desnatado)",
  "Whey com um mix de frutas e leite(preferêncialmente desnatado)",
]
let almocoP = [
  "Salmão grelhado",
  "Frango grelhado",
  "Tilapia grelhada",
  "Carne vermelha magra grelhada",
]
let almocoC = [
  "Batata assada",
  "Batata Doce assada",
  "Arroz branco",
  "Macarrão",
  "Pure de batatas",
]
let almocoS = [
  "Alface e tomate",
  "Brocolis cozido",
  "Cenoura cozida",
  "Vagem cozida",
]
let almocoB = ["Refrigerante zero", "Água", "Suco de fruta"]
let lacheTf = ["Maça", "Banana", "Morango", "Manga", "Abacaxi", "Outra"]
let lancheTg = ["iorgute"]
let jantaP = [
  "Salmão grelhado",
  "Frango grelhado",
  "Tilapia grelhada",
  "Carne vermelha magra grelhada",
]
let jantaC = [
  "Batata assada",
  "Batata Doce assada",
  "Arroz branco",
  "Macarrão",
  "Pure de batatas",
]
let jantaS = [
  "Alface e tomate",
  "Brocolis cozido",
  "Cenoura cozida",
  "Vagem cozida",
]
let jantaB = ["Refrigerante zero", "Água", "Suco de fruta"]

//calculadora de IMC
function calcularIMC() {
  imc = peso / (altura * altura)
}
if (imc >= 40) {
  imcinf = "Obesidade Muito severa"
} else if (imc >= 35) {
  imcinf = "Obesidade severa"
} else if (imc >= 30) {
  imcinf = "Obesidade moderada"
} else if (imc >= 25) {
  imcinf = "Pre-Obesidade"
} else if ((imc >= 18, 5)) {
  imcinf = "Eutrofia"
} else if (imc >= 17) {
  imcinf = "Magreza grau 1"
} else if (imc >= 16) {
  imcinf = "Magreza grau 2"
} else if (imc < 16 && imc > 0) {
  imcinf = "Magreza grau 3"
} else {
  imcinf = "imc inválido."
}
// condição para saber treino e dieta
if (imc >= 30) {
  dieta = 3
  treino = 3
} else if (imc >= 18.5) {
  dieta = 2
  treino = 2
} else if (imc < 18.5) {
  dieta = 1
  treino = 1
}

//definindo as dietas
if (dieta == 1) {
  cafe = 1
  lancheM = 1
  almoco = 1
  lancheT = 1
  janta = 1
} else if (dieta == 2) {
  cafe = 2
  lancheM = 2
  almoco = 2
  lancheT = 2
  janta = 2
} else if (dieta == 3) {
  cafe = 3
  lancheM = 3
  almoco = 3
  lancheT = 3
  janta = 3
}
//definindo os alimentos
if (cafe == 1) {
  carboidratos = 4 + "Fatias ou torradas"
  proteinas = 120 + "g"
} else if (cafe == 2) {
  carboidratos = 2 + 'Fatias ou torradas'
  proteinas = 150 + "g"
} else if (cafe == 3) {
  carboidratos = 80 + 'g'
  proteinas = 1 + "Fatias ou torradas"
}

if (lancheM == 1) {
  shakes = 50 + "g de whey GROWTH"
} else if (lancheM == 2) {
  shakes = 60 + "g de whey GROWTH"
} else if (lancheM == 3) {
  shakes = 30 + "g de whey GROWTH"
}
if (almoco == 1) {
  proteinas = 200 +"g"
} else if (almoco == 2) {
  proteinas = 220 + "g"
} else if (almoco == 3) {
  proteinas = 150 + "g"
}
if (lancheT == 1) {
} else if (lancheT == 2) {
} else if (lancheT == 3) {
}
if (janta == 1) {
} else if (janta == 2) {
} else if (janta == 3) {
}

//definindo os treinos
if (treino == 1) {
} else if (treino == 2) {
} else if (treino == 3) {
}
