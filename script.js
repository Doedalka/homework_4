const student = "Малеечев Максим Ильич"; 
document.getElementById("student").innerHTML = student; 
const shansik_err = 0.2; 
function throwRandomError(shans) { // начало функции
    let maximalochka = 1; 
    let minimalochka = 0.0; 
    if ((shans >= minimalochka) || (shans <= maximalochka)) { // условия для "рандомайзера"
        random = Math.random(maximalochka).toFixed(1); // задает кол-во символов после запятой
        console.log(`рандомное число: ${random}`)
    }
    if (random <= shans) { 
        throw new Error(`Упс...что-то не так`)
    }
}
try{
    throwRandomError(shansik_err) 
    console.log('Всё в порядке, приложение работает в штатном режиме')
} catch (oshibka){ 
   console.log('ОШИБКА!пЕрЕЗаГРузИ СтРАниЦУ')
   console.log('Ооооооо нееееет,всё сломалось.....')
}