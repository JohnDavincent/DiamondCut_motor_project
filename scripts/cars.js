const brands = [
  {
    name: "McLaren",
    img: "../images/brand/mclaren.png",
  },
  {
    name: "Porsche",
    img: "../images/brand/porcshe.png",
  },
  {
    name: "Bugatti",
    img: "../images/brand/buggati.png",
  },
  {
    name: "Ferrari",
    img: "../images/brand/ferrari.png",
  },
  {
    name: "Mercedes",
    img: "../images/brand/mercedes.webp",
  },
];

function addBrandSlides(brands) {
  const brandContainer = document.querySelector(".slides");
  brands.forEach((brand) => {
    const brandElement = document.createElement("div");
    brandElement.classList.add("slide");
    brandElement.innerHTML = `
        <img src="${brand.img}" alt="${brand.name}" />
    `;
    brandContainer.appendChild(brandElement);
  });
}

addBrandSlides(brands);

const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
let currentIndex = 0;

function showSlide(index) {
  const maxItems = parseInt(
    document.querySelector(".slides").computedStyleMap().get("--max-items")
  );

  const rearranged = [];
  for (let i = 0; i < maxItems; i++) {
    const slideIndex = (index + i) % brands.length;
    rearranged.push(brands[slideIndex]);
  }

  const brandContainer = document.querySelector(".slides");
  brandContainer.innerHTML = "";
  addBrandSlides(rearranged);
}

next.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % brands.length;
  showSlide(currentIndex);
});

prev.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + brands.length) % brands.length;
  showSlide(currentIndex);
});

showSlide(currentIndex);

window.addEventListener("resize", () => {
  showSlide(currentIndex);
});

const newCars = [
  {
    name: "Porsche Taycan",
    img: "../images/car/car1.webp",
    brand: "Porsche",
    price: "850000",
  },
  {
    name: "McLaren 720 Spider",
    img: "../images/car/car2.webp",
    brand: "McLaren",
    price: "950000",
  },
  {
    name: "Bugatti Divo-F34",
    img: "../images/car/car3.webp",
    brand: "Bugatti",
    price: "550000",
  },
  {
    name: "Mercedes-AMG GT",
    img: "../images/car/car4.jpg",
    brand: "Mercedes",
    price: "820000",
  },
  {
    name: "McLaren 765LT",
    img: "../images/car/car5.jpg",
    brand: "McLaren",
    price: "750000",
  },
  {
    name: "Bugatti W16",
    img: "../images/car/car6.jpg",
    brand: "Bugatti",
    price: "750000",
  },
];

const usedCars = [
  {
    name: "Porsche Taycan",
    img: "../images/car/car1.webp",
    brand: "Porsche",
    price: "550000",
  },
  {
    name: "Porsche 718 Cayman",
    img: "../images/car/car7.jpeg",
    brand: "Porsche",
    price: "650000",
  },
  {
    name: "Merceces-AMG GT",
    img: "../images/car/car8.jpeg",
    brand: "Mercedes",
    price: "450000",
  },
  {
    name: "Bugatti Veyron",
    img: "../images/car/car9.jpeg",
    brand: "Bugatti",
    price: "450000",
  },
  {
    name: "Ferrari SF90 Stradale",
    img: "../images/car/car10.jpeg",
    brand: "Ferrari",
    price: "750000",
  },
  {
    name: "Mercedes AMG",
    img: "../images/car/car11.jpeg",
    brand: "Mercedes",
    price: "650000",
  },
];

function toFormattedDollar(num) {
  return `$${num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

function addNewCars(cars, target) {
  cars.forEach((car) => {
    const carElement = document.createElement("div");
    carElement.classList.add("car");
    carElement.innerHTML = `
        <img src="${car.img}" alt="${car.name}" />
        <div class="desc">
            <h3>${car.name}</h3>
            <p>${car.brand}</p>
            <hr />
            <span>${toFormattedDollar(car.price)}</span>
        </div>
    `;
    target.appendChild(carElement);
  });
}
addNewCars(newCars, document.querySelector(".new-cars"));

addNewCars(usedCars, document.querySelector(".used-cars"));
