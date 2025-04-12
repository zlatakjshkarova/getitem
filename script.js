//запись даныч в LocalStorage
//setItem - принимает два параметра:ключ и значение
localStorage.setItem("key", "text")
//получить данные из локального xранилища
//getItem - принимает один  параметр:ключ

let str = localStorage.getItem('key')
console.log(str)


localStorage.setItem("nut", 2)
localStorage.setItem("nat", 3)
localStorage.setItem("ner", 5)
let nut = localStorage.getItem("nut")
let nat = localStorage.getItem("nat")
let der = localStorage.getItem("ner")
let syt = +nut + +nat + +der
console.log(syt)
//oчистка локального хранили
//localStorage.clear()

const btn = document.querySelector('#btn')
btn.addEventListener('click', () => {
    localStorage.clear()
}
)

//удалить коркретный ключь
localStorage.removeItem('key')