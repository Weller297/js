let imya = prompt('Введите своё имя')
let age = +prompt('Введите ваш год рождения')
let year = +prompt('Введите нынешний год')

function  res() {
    let info = 'Ваше имя ' + imya + ', вам ' + (year-age) + ' лет' 
    return info
}

alert(res());


let kolvo = prompt('Введите количество примеров')
let num_1 = +prompt('Введите минимальное число')
let num_2 = +prompt('Введите максимальное число')
let zero = +prompt('Вв;?:едит;е п?*арол%ь [ _ _ _ _ ]')

if (zero == 7586) {
    alert('К*О"Н"*С*О:"Л*Ь')
    console.log('Мне было скучно, и я сделал это:), когда узнаю больше команд сделаю чтонибудь гораздо лучше');
}else {
    console.log('Wrong');
    
}
function r(min, max) {
    return Math.floor( Math.random() * (max + 1 - min) + min)
}
function r_2(one, four) {
    return Math.floor( Math.random() * (one + 1 - four) + four)
}
let sign = (r_2(0,5));


for (let i = 1; i <= kolvo; i++) {

if (sign == 1) {
    for(let i = 1; i <= 1; i++) {
        let one = r(num_1,num_2)
        let two = r(num_1,num_2)
        let primer = +prompt(one + '+' + two + ' =')
        let word = primer == ( one + two ) ? 'Молодэц :)' : 'Козьёль :O'
        alert(one + '+' + two + '=' + (one + two) + ' Ваш ответ ' + primer + ', ' + word)
   }



sign = (r_2(0,5));


}else if(sign == 2) {
    for(let i = 1; i <= 1; i++) {
        let one = r(num_1,num_2)
        let two = r(num_1,num_2)
        let primer = +prompt(one + '-' + two + ' =')
        let word = primer == ( one - two ) ? 'Молодэц :)' : 'Козьёль :O'
        alert(one + '-' + two + '=' + (one - two) + ' Ваш ответ ' + primer + ', ' + word)
   }



sign = (r_2(0,5));


}else if(sign == 3) {
    for(let i = 1; i <= 1; i++) {
        let one = r(num_1,num_2)
        let two = r(num_1,num_2)
        let primer = +prompt(one + '*' + two + ' =')
        let word = primer == ( one * two ) ? 'Молодэц :)' : 'Козьёль :O'
        alert(one + '*' + two + '=' + (one * two) + ' Ваш ответ ' + primer + ', ' + word)
   }



sign = (r_2(0,5));


}else if(sign == 4) {
    for(let i = 1; i <= 1; i++) {
        let one = r(num_1,num_2)
        let two = r(num_1,num_2)
        let primer = +prompt(one + ':' + two + ' =' + '   (Недумаю что это легко решить))')
        let word = primer == ( one / two ) ? 'Молодэц :)' : 'Козьёль :O'
        alert(one + ':' + two + '=' + (one / two) + ' Ваш ответ ' + primer + ', ' + word)
   }



sign = (r_2(0,5));


}else {
    console.log('Error');
}
}






