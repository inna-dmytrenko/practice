// const ingredients = [
//   "Картошка",
//   "Грибы",
//   "Чеснок",
//   "Помидоры",
//   "Зелень",
//   "Приправы",
// ];

// const ingredientsRef = document.querySelector(".gallery");

// const makeIngredients = ingredients.map((ingredient) => {
//   const li = document.createElement("li");
//   li.textContent = ingredient;
//   return li;
// });

// ingredientsRef.append(...makeIngredients);

// const images = [
//   {
//     url:
//       "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];

// document.querySelector(".gallery").insertAdjacentHTML(
//   "beforeend",
//   images.reduce(
//     (acc, { url, alt }) =>
//       acc + `<li><img width="300" src="${url}" alt="${alt}"></li>`,
//     ""
//   )
// );

// function makeGallery({ url, alt }) {
//   return `<li><img width="300" src="${url}" alt="${alt}"></li>`;
// }
// const string = images.map(makeGallery).join("");
// ingred.insertAdjacentHTML("beforeend", string);

// const refs = {
//   buttonDecrement: document.querySelector('[data-action="decrement"]'),
//   buttunIncrement: document.querySelector('[data-action="increment"]'),
//   span: document.querySelector("#value"),
// };
// let counterValue = 0;

// const increment = () => {
//   counterValue += 1;
//   refs.span.textContent = counterValue;
// };

// const decrement = () => {
//   counterValue -= 1;
//   refs.span.textContent = counterValue;
// };

// refs.buttunIncrement.addEventListener("click", increment);
// refs.buttonDecrement.addEventListener("click", decrement);

/* <input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1> */

// const refs = {
//   inputName: document.querySelector("#name-input"),
//   title: document.querySelector("h1"),
//   outputName: document.querySelector("#name-output"),
// };

// const change = ({ target: { value } }) => refs.outputName.textContent = value.length !== 0 ? value : "Незнакомец";

// refs.inputName.addEventListener("input", change);

// const input = document.querySelector("#validation-input");

// input.addEventListener("blur", (e) => {
//   +e.target.dataset.length !== input.value.length
//     ? input.classList.add("invalid")
//     : input.classList.add("valid");
// });

/* <input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span> */

// const input = document.querySelector("#font-size-control");
// const spanRef = document.querySelector("#text");
// input.addEventListener("input", ({ target: { value } }) => {
//   spanRef.style.fontSize = value + "px";
// });

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

// class Component {
//   constructor(selector) {
//     this.selector = document.querySelector(selector);
//   }

//   hide() {
//     this.selector.style.display = "none";
//   }

//   show() {
//     this.selector.style.display = "block";
//   }

//   changeRadius(value) {
//     this.selector.style.borderRadius = `${value}px`;
//   }
// }

// class Boxes extends Component {
//   constructor(options) {
//     super(options.selector);
//     this.selector.style.width = this.selector.style.height = options.size;
//     this.selector.style.backgroundColor = options.color;
//   }
// }

// const [input, btnCreate, btnDelete] = [
//   ...document.querySelector("#controls").children,
// ];
// const refs = {
//   input,
//   btnCreate,
//   btnDelete,
//   boxes: document.querySelector("#boxes"),
// };

// function createRandom() {
//   return `rgb(${(Math.random() * 255) << 0}, ${(Math.random() * 255) << 0}, ${
//     (Math.random() * 255) << 0
//   })`;
// }

// const obj = {
//   arr: [],
// };

// function createBoxes(amount) {
//   let size = 30;
//   refs.boxes.innerHTML = "";
//   for (let i = 0; i < amount; i += 1) {
//     const newDiv = document.createElement("div");
//     newDiv.classList.add(`div${i}`);
//     boxes.append(newDiv);
//     const div = new Boxes({
//       selector: `.div${i}`,
//       color: createRandom(),
//       size: `${size}px`,
//     });
//     obj.arr.push(div);
//     // const div = document.createElement("div");
//     // div.style.width = div.style.height = size + "px";
//     // div.style.backgroundColor = createRandom();
//     // arr.push(div);
//     size += 10;
//   }
//   refs.boxes.append(...obj.arr);
// }

// refs.btnCreate.addEventListener("click", () => createBoxes(+refs.input.value));
// refs.btnDelete.addEventListener("click", () => {
//   refs.input.value = "";
//   refs.boxes.innerHTML = "";
// });
import gallery from "./gallery-items.js";

const refs = {
  gallery: document.querySelector(".gallery"),
  modal: document.querySelector(".lightbox"),
  modalImg: document.querySelector(".lightbox__image"),
};

let activeIndex = null;

const markup = gallery.map(({ original, preview, description }) => {
  return `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" data-source="${original}" src="${preview}" alt="${description}"></a></li>`;
});

refs.gallery.insertAdjacentHTML("beforeend", markup.join(""));

refs.gallery.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  markup.forEach((el, ind) => {
    if (el.includes(e.target.src)) {
      activeIndex = ind;
      return;
    }
  });
  refs.modal.classList.add("is-open");
  refs.modalImg.src = e.target.dataset.source;
  refs.modalImg.alt = e.target.alt;
});

function closeModal() {
  refs.modal.classList.remove("is-open");
  refs.modalImg.src = "";
  refs.modalImg.alt = "";
}

refs.modal.addEventListener("click", (e) => {
  if (e.target.nodeName !== "IMG") {
    closeModal();
  }
});

// window.addEventListener("keyup", (e) => {
//   if (e.key === "Escape") {
//     closeModal();
//   }
// });

function keyboardManipulation({ key }) {
  switch (key) {
    case gallery.length - 1 > activeIndex && "ArrowRight":
      activeIndex += 1;
      refs.modalImg.src = gallery[activeIndex].original;
      break;
    case activeIndex > 0 && "ArrowLeft":
      activeIndex -= 1;
      refs.modalImg.src = gallery[activeIndex].original;
      break;
    case activeIndex === gallery.length - 1 && "ArrowRight":
      activeIndex = 0;
      refs.modalImg.src = gallery[activeIndex].original;
      break;
    case activeIndex === 0 && "ArrowLeft":
      activeIndex = gallery.length - 1;
      refs.modalImg.src = gallery[activeIndex].original;
      break;
    case "Escape":
      closeModal();
      break;
    default:
      alert("что-то пошло не так");
  }
}

window.addEventListener("keyup", keyboardManipulation);

// window.addEventListener("keyup", (e) => {
//   if (e.key === "ArrowRight" && gallery.length - 1 > activeIndex) {
//     activeIndex += 1;
//     refs.modalImg.src = gallery[activeIndex].original;
//     return;
//   }
//   if (e.key === "ArrowLeft" && activeIndex > 0) {
//     activeIndex -= 1;
//     refs.modalImg.src = gallery[activeIndex].original;
//     return;
//   }
//   if (e.key === "ArrowRight" && activeIndex === gallery.length - 1) {
//     activeIndex = 0;
//     refs.modalImg.src = gallery[activeIndex].original;
//     return;
//   }
//   if (e.key === "ArrowLeft" && activeIndex === 0) {
//     activeIndex = gallery.length - 1;
//     refs.modalImg.src = gallery[activeIndex].original;
//     return;
//   }
// });
