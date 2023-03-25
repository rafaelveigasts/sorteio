const compradores = [
  { nome: 'BRUNO CUNHADO', numeros: [7, 9] },
  { nome: 'CRIS CASA LIMPA', numeros: [42] },
  { nome: 'DORA', numeros: [13, 18, 30, 39, 40] },
  { nome: 'FEFE', numeros: [4, 10, 28] },
  { nome: 'JEFF', numeros: [2, 6, 33, 35] },
  { nome: 'JULIANA PRIMA CAROL', numeros: [44] },
  { nome: 'JULIANA VEIGA', numeros: [1, 8, 12, 20, 31, 36, 41, 43, 45, 48] },
  { nome: 'LAIS', numeros: [22, 23, 24, 26] },
  { nome: 'LEANDRO VERÇOZA', numeros: [5, 11, 21, 32, 47] },
  { nome: 'NATHALIA BERTIOGA', numeros: [15] },
  { nome: 'RONALDO', numeros: [38] },
  { nome: 'REINALDO MESQUITA', numeros: [3, 14, 17, 19, 29] },
  { nome: 'ROSANA VEIGA', numeros: [16, 37] },
  { nome: 'SANDRA MACHADO', numeros: [25, 50] },
  { nome: 'SEU CARLINHOS', numeros: [27, 34, 46, 49] },
]
const button = document.querySelector('button')
const numeros = [...Array(50)].map((_, i) => i + 1)

/**
 * Sorteia um número aleatório de 1 a 50 e busca entre os compradores quem tem um ou mais números iguais ao sorteado.
 * Atualiza o texto do botão com o número sorteado e o nome do ganhador após um atraso de 3 segundos.
 */
function sortear(event) {
  event.preventDefault()

  const numerosSorteados = [numeros[Math.floor(Math.random() * 50)]]
  const ganhador = compradores.find((comprador) =>
    comprador.numeros.some((numero) => numerosSorteados.includes(numero)),
  )

  setTimeout(() => {
    button.innerHTML = `O número sorteado foi ${numerosSorteados[0]} e o ganhador é ${ganhador.nome}`
  }, 3000)
}

module.exports = sortear
