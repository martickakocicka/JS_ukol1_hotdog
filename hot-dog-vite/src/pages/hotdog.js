export const toppings = [
  { name: "Hořčice", price: 5, selected: false },
  { name: "Kečup", price: 5, selected: false },
  { name: "Cibule", price: 5, selected: false },
  { name: "Okurka", price: 5, selected: false },
  { name: "Paprika", price: 5, selected: false },
  { name: "Rajče", price: 5, selected: false },
  { name: "Chilli", price: 5, selected: false },
  { name: "Sýr", price: 10, selected: false },
  { name: "Slanina", price: 10, selected: false },
];

export const renderToppings = () => {
  document.body.innerHTML = "";
  toppings.forEach((polozka, index) => {
    if (polozka.selected === true) {
      document.body.innerHTML += `
        <div class="topping--selected"> 
            <h3 id= ${index}> ${polozka.name} ${polozka.price} </h3>
         </div>`;
    } else {
      document.body.innerHTML += `
    <div class="topping"> 
        <h3 id= ${index}> ${polozka.name} ${polozka.price} </h3>
        </div>`;
    }
  });

  const topping = document.querySelectorAll("h3");
  topping.forEach((prisada) => {
    prisada.addEventListener("click", vyber);
  });
};

const vyber = (event) => {
  let klik = event.target;
  console.log(klik);
  let zjistimIndex = klik.id;
  console.log(zjistimIndex);
  toggleToping(zjistimIndex);
};

export const toggleToping = (index) => {
  let prisada = toppings[index];

  if (prisada.selected === false) {
    prisada.selected = true;
  } else {
    prisada.selected = false;
  }
  console.log(prisada);
  console.log(prisada.selected);

  renderToppings();
};
