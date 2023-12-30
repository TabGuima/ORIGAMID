setInterval(() => {
  const valorBitcoin = document.querySelector("#valorBitcoin");
  const buscaValor = `https://blockchain.info/ticker`;

  fetch(buscaValor).then((response) => {
    response.json().then((response) => {
      const precoCompra = response.BRL.buy;
      valorBitcoin.innerText = `Um bitcoin custa ${precoCompra.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`;
    });
  });
}, 30000);