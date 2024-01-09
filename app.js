/*
  01

  - Crie uma função que recebe uma data por parâmetro e retorna a data na 
    formatação "DD/MM/AAAA". Exemplo: 03/07/2021;
  - Não utilize a date-fns.
*/

const zeroLeft = (num) => String(num).length === 1 ? `0${num}` : num;

const formateDate = (data) => {
  const dia = zeroLeft(data.getDate());
  const mes = zeroLeft(data.getMonth() + 1);
  const year = zeroLeft(data.getFullYear());

  return `${dia}/ ${mes}/ ${year}`

}

const data = new Date();
const dateBrasil = formateDate(data)
// console.log(dateBrasil)


/*
  02

  - Crie uma função que recebe uma data por parâmetro e retorna o horário e a 
    data na formatação: "03:07 - domingo, 7 de junho de 2020";
  - Não utilize a date-fns.
*/

const dias = [
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sabado',
  'Domingo'
]
const meses = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho'
]

const randomFormat = (data) => {
  const hour = zeroLeft(data.getHours());
  const minutes = zeroLeft(data.getMinutes());
  const weekday = dias[data.getDay() - 1];
  const MonthDay = zeroLeft(data.getDate());
  const month = meses[data.getMonth()];
  const year = zeroLeft(data.getFullYear());

  return `${hour}: ${minutes} - ${weekday}, ${MonthDay} de ${month} de ${year}`
}


const dataAtual = new Date();
const dados = randomFormat(dataAtual)
// console.log(dados)

/*
  03

  - Faça um destructuring nas propriedades "id" e "isVerified" do objeto abaixo;
  - Exiba os valores lado a lado, no console;
  - Não modifique a declaração da const user.
*/

const user = { id: 42, isVerified: true };
const { id, isVerified } = user

// console.log(id , isVerified)

/*
  04

  - Faça um destructuring nas propriedades "name" dos objetos abaixo;
  - No destructuring, faça "Bender" ser armazenado por uma const "nameA" e 
    "HAL 9000" ser armazenado por uma const "nameB";
  - Exiba os valores das consts lado a lado, no console;
  - Não modifique a declaração das consts "robotA" e "robotB".
*/

const robotA = { name: 'Bender' }
const robotB = { name: 'HAL 9000' }

const { name: nameA } = robotA;
const { name: nameB } = robotB;

// console.log(nameA, nameB)

/*
  05

  - Usando shorthand property names, crie um objeto com as propriedades "a", 
    "b" e "c";
  - O valor dessas propriedades deve ser o mesmo das consts "a", "b" e "c";
  - Exiba o objeto no console.
*/

const a = 'a'
const b = 'b'
const c = 'c'

const obj = { a, b, c }
// console.log(obj)

/*
  06

  - Refatore o código abaixo.
*/

const useDataSomewhereElse = value => console.log(value)

const updateSomething = ({ target, property, willChange } = {}) => {
  if (willChange) willChange = 'valor desejado';
  useDataSomewhereElse({ target, property, willChange })

}

const obje = {
  target: '1',
  property: '2',
  willChange: 'valor indesejado'
}

// updateSomething(obje)

/*
  07

  - O código abaixo é o mesmo do relógio digital que implementamos na aula 
    passada. Refatore-o.
*/

const clockContainer = document.querySelector('.clock-container')

const createClock = (hours, minutes, seconds) => {

  clockContainer.innerHTML = `
    <span>${zeroLeft(hours)}</span> :
    <span>${zeroLeft(minutes)}</span>:
    <span>${zeroLeft(seconds)}</span>
  `
}

const updateClock = () => {
  const present = new Date()
  const hours = present.getHours()
  const minutes = present.getMinutes()
  const seconds = present.getSeconds()

  createClock(hours, minutes, seconds)

}

setInterval(updateClock, 1000)
