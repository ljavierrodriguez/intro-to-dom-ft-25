// BOM = Browser Object Model
//window.alert()
//window.prompt()
//window.confirm()
//window.open()

//alert("Hola")
//prompt("Por favor ingrese nombre")
//confirm("Desea cerrar la ventana?")
//window.open("www.google.com")


// DOM = Document Object Model
//document

console.log(document)
console.log(document.title)
console.log(document.body)

// Metodos para acceder a los elementos dentro del html
/*  

getElementById(id) // devuelve un elemento con el id indicado
getElementsByClassName(class) // devuelve todos los elementos con la clase indicada
getElementsByTagName(tag) // devuelve todos los elementos con la etiqueta indicada
getElementsByName(name) // devuelve todos los elementos con el nombre indicado name="name_value"
querySelector(selector) // devuelve el primer elemento con el selector indicado
querySelectorAll(selector) // devuele todos los elementos con el selector indicado


createElement(tag)
*/

let home = document.getElementById('home');
//home.style.backgroundColor = 'green';
home.classList.add('bg')

let listas = document.getElementsByClassName('lista')

console.log(listas)
for(let i = 0; i < listas.length; i++){
    console.log(listas[i])
    listas[i].style.color = 'white'
}

/* 
// error porque listas no es un array
listas.forEach(element => {
    console.log(element)
}); 
*/

let lis = document.getElementsByTagName('li');
console.log(lis)

let parrafos = document.getElementsByTagName('p')
console.log(parrafos)

let nuevo_elemento = document.getElementsByName('nuevo_elemento')
console.log(nuevo_elemento[0].value)

//nuevo_elemento.forEach(element => console.log(element))

let header = document.querySelector('header')
console.log(header)
header.style.backgroundColor = 'white'

let home2 = document.querySelector('#home')

let listas2 = document.querySelectorAll('.lista')
console.log(listas2)

let lis2 = document.querySelectorAll('li');
console.log(lis2)

let input = document.querySelector('#home .container main input')
input.value = "Hola Mundo"


let h1 = document.createElement('h1')
h1.innerHTML = "<h1>Hola Mundo</h1>"
console.log(h1)

let footer = document.querySelector('footer')
footer.appendChild(h1)

document.body.appendChild(h1)

// eliminar un elemento
/* let delElem = listas2[1].querySelector(':nth-child(4)')
delElem.style.color = 'red'
listas2[1].removeChild(delElem) */
//console.log(listas2[1].children[3].innerHTML)
//listas2[1].removeChild(listas2[1].children[3])

let name = document.createAttribute('name')
name.innerHTML = "Hola"
//input.setAttribute('class', 'form-control')

let texto = document.createTextNode('hola mundo')

footer.appendChild(texto)

document.body.innerHTML = `

    <h1>Hola Mundo desde Javascript</h1>
    <p>Este es mi parrafo</p>

`