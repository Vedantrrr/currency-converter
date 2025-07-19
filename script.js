function convert() {
  const amount = document.getElementById("amount").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  if (amount === "") {
    alert("Please enter an amount");
    return;
  }

  fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
    .then(response => response.json())
    .then(data => {
      const rate = data.rates[to];
      const result = (amount * rate).toFixed(2);
      document.getElementById("result").innerText = `${amount} ${from} = ${result} ${to}`;
    })
    .catch(() => {
      document.getElementById("result").innerText = "Error fetching data.";
    });
}
