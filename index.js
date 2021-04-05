/* 
1. С использованием значений массива создать 
маркированный список.
 Создать кнопки 'добавить' и 'удалить', 
 которые будут 
 менять состав списка.
 Для оптимизации списка нужно добавить кастомный 
 атрибут id. 
 В списке четное значение должно красится красным 
 а не четные в синим цветом.
*/
const cars = ["Mercedes", 'BMW', 'Volvo'];

const ulList = document.createElement("ul");
ulList.id = 'carsContainer';

const parentContainer = document.getElementById("container");

parentContainer.append(ulList);

cars.forEach((car, index) => {
    const liItem = document.createElement("li");
    liItem.textContent = car;
    if (index % 2 === 0) {
        liItem.classList.add("even");
    } else {
        liItem.classList.add("odd");
    }
    ulList.append(liItem);
})

const buttonContainer = document.createElement('div');

// buttonContainer.setAttribute('id', 'btnContainer');
buttonContainer.id = "btnContainer";

parentContainer.append(buttonContainer);

const btnContainer = document.getElementById('btnContainer');

const addInput = document.createElement('input');

addInput.id = "addInput"

btnContainer.append(addInput);
addInput.style.display = 'block';
addInput.style.marginBottom = "10px"

const btnAdd = document.createElement("button");

btnContainer.append(btnAdd);
btnAdd.style.marginRight = '35px';


btnAdd.textContent = "Добавить";

const btnRemove = document.createElement("button");

btnContainer.append(btnRemove);
btnRemove.textContent = "Удалить";

btnAdd.addEventListener('click', event => {
    console.log(event);
    const input = document.getElementById('addInput')
    console.log(input.value)
    const carsContainer = document.getElementById('carsContainer');
    const newItem = document.createElement('li');
    newItem.textContent = input.value;
    carsContainer.appendChild(newItem);
    
})

