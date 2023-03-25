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
];

function sortear(event) {
  event.preventDefault();

  const button = document.querySelector('button');

  const numeros = [];
  for (let i = 0; i < 50; i++) {
    numeros.push(i + 1);
  }

  const numerosSorteados = [];
  for (let i = 0; i < 1; i++) {
    const numeroSorteado = numeros.splice(
      Math.floor(Math.random() * numeros.length),
      1,
    )[0];
    numerosSorteados.push(numeroSorteado);
  }

  const ganhador = compradores.find((comprador) =>
    comprador.numeros.some((numero) => numerosSorteados.includes(numero)),
  );

  setTimeout(() => {
    return (button.innerHTML = `O número sorteado foi ${numerosSorteados[0]} e o ganhador é ${ganhador.nome}`);
  }, 3000);
}

module.exports = sortear;
