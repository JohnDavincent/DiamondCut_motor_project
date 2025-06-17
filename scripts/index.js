const items = [
  {
    img: "./images/home page/slider1.jpeg",
    title: "New Featured:  McLaren 650S ",
    desc: "This car has a unique rear wing. This is what makes the McLaren type 650s unique and much sought after",
  },
  {
    img: "./images/home page/slider2.jpeg",
    title: "New Featured: McLaren 765LT ",
    desc: "McLaren has released its newest car in the elegant Curaçao Blue color",
  },
  {
    img: "./images/home page/slider3.jpg",
    title: "New Featured: Bugatti La Voiture Noire",
    desc: "This latest car is characterized by a horse-tread-shaped front grille, which makes it unique and sought after by many people",
  },
];

function addSlideItems(items) {
  items.forEach((item) => {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    slide.innerHTML = `
        <img src="${item.img}" alt="${item.title}" />
        <div class="caption">
            <div class="desc">
            <h2>${item.title}</h2>
            <p>${item.desc}</p>
            </div>
            <button>Learn more</button>
        </div>
        `;
    document.querySelector(".slides").appendChild(slide);
  });
}

addSlideItems(items);

const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

next.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

prev.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

showSlide(currentIndex);

const cars = [
  {
    name: "Bugatti Divo 2022",
    img: "./images/home page/Bugatti Divo 2022.jpeg",
    price: "700,000",
  },
  {
    name: "Ferrari",
    img: "./images/home page/ferrari.jpeg",
    price: "800,000",
  },
  {
    name: "Bugatti Chiron",
    img: "./images/home page/bugatti's 110th anniversary chiron sport is a tribute to france.jpeg",
    price: "1,200,000",
  },
  {
    name: "Porsche Panamera Turbo S",
    img: "./images/home page/Porsche Panamera Turbo S E-Hybrid for sale _ Romans International.jpeg",
    price: "1,400,000",
  },
];

function toFormattedDollar(num) {
  return `$${num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

function addCars(cars) {
  cars.forEach((car) => {
    const carItem = document.createElement("div");
    carItem.classList.add("car");
    carItem.innerHTML = `
        <h3>${car.name}</h3>
        <img src="${car.img}" alt="${car.name}" />
        <p><span> Price: </span> ${toFormattedDollar(car.price)}</p>
    `;
    document.querySelector(".cars").appendChild(carItem);
  });
}

addCars(cars);
