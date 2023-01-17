function inflationCalculator() {
  let inflacija = document.querySelector("#inflationRate");
  let money = document.querySelector("#money");
  let godine = document.querySelector("#years");

  inflacija = parseFloat(inflacija.value);
  money = parseFloat(money.value);
  godine = parseFloat(godine.value);
  let vrijednost = money + (money * (inflacija / 100));

  for (let i = 1; i < godine; i++) {
    vrijednost += vrijednost * (inflacija / 100);
    
   

   
  }
  vrijednost = vrijednost.toFixed(2);

  let novi_element = document.createElement("div");
  
  novi_element.innerText = `Danasnjih ${money} eura vrijedi isto kao ${vrijednost}eura  za ${godine} godina`;
  document.querySelector(".container").appendChild(novi_element);
}
