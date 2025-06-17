const cars = [
  {
    name: "MClaren 720 Spider",
    img: "../images/showroom/car5.webp",
    desc: "The McLaren 720S Spider is an open-top variant of the McLaren 720S, part of the British automaker's Super Series lineup"
  },
  {
    name: "McLaren 765LT",
    img: "../images/showroom/car6.jpg",
    desc: "The McLaren 765LT is a high-performance variant of the 720S, part of McLaren's Longtail (LT) series",
  },
  {
    name: "Bugatti Divo-F34",
    img: "../images/showroom/car7.webp",
    desc: "The Bugatti Divo is a limited-edition hypercar produced by the French automaker Bugatti",
  },
  {
    name: "Porsche-Taycan",
    img: "../images/showroom/car8.jpg",
    desc: "The Porsche Taycan is an all-electric sports sedan that marks Porsche's entry into the electric vehicle market.",
  },
];

function addCars(cars) {
  cars.forEach((car, i) => {
    const carDiv = document.createElement("button");
    carDiv.classList.add("car");
    carDiv.addEventListener("click", () => {
      carDiv.classList.add("active");
      document.querySelectorAll(".car").forEach((item, index) => {
        if (index !== i) {
          item.classList.remove("active");
        }
      });
      changeShown(i);
    });
    carDiv.innerHTML = `
    <img
        src="${car.img}"
        alt="${car.name}"
    />
    `;
    document.querySelector(".bar").appendChild(carDiv);
  });
}

addCars(cars);

function changeShown(index) {
  const container = document.querySelector(".show");
  const car = cars[index];
  container.innerHTML = `
    <div>
        <div>
            <h3>${car.name}</h3>
            <p>${car.desc}</p>
        </div>
        <button>Buy Now</button>
    </div>
    <img src="${car.img}" alt="${car.name}" />
    `;
}

document.querySelector(".bar").querySelector(".car").click();
