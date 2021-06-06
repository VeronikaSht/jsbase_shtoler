// task 5

// var computerChoise = Math.random();
// alert(computerChoise);
var counterHum = 0;
var counterComp = 0;
var score;

function play() {
    // Обработка выбора пользователя и машины
    var humanChoise = prompt("Введите: камень, ножницы или бумага");
    var computerChoise = transCompChoise();

    // Если пользователь ввел вё правильно
    if (isDataCorrect(humanChoise)) {

        // Обработка побед
        if (humanChoise.toLowerCase() == "камень") {
            if (computerChoise.toLowerCase() == "камень") {
                alert("Победила дружба!\n" + recordScore(counterComp, counterHum));
            }
            else if (computerChoise.toLowerCase() == "ножницы") {
                counterHum++;
                alert("Победил человеческий разум...\n"  + recordScore(counterComp, counterHum));

            }
            else {
                counterComp++
                alert("Победил искусственный интеллект!))))\n" + recordScore(counterComp, counterHum));
            }
        }
        else if (humanChoise.toLowerCase() == "ножницы") {
            if (computerChoise.toLowerCase() == "ножницы") {
                alert("Победила дружба!\n" + recordScore(counterComp, counterHum));
            }
            else if (computerChoise.toLowerCase() == "бумага") {
                counterHum++;
                alert("Победил человеческий разум...\n" + recordScore(counterComp, counterHum));
            }
            else {
                counterComp++
                alert("Победил искусственный интеллект!))))\n" + recordScore(counterComp, counterHum));
            }
        }
        else {
            if (computerChoise.toLowerCase() == "бумага") {
                alert("Победила дружба!\n" + recordScore(counterComp, counterHum));
            }
            else if (computerChoise.toLowerCase() == "камень") {
                counterHum++;
                alert("Победил человеческий разум...\n" + recordScore(counterComp, counterHum));
            }
            else {
                counterComp++;
                alert("Победил искусственный интеллект!))))\n" + recordScore(counterComp, counterHum));
            }
        }

        wantReplay(counterComp, counterHum);
    }
    else {
        // Повторно запросить пользователя ввести данные
        play();
    }
}

// Обработка выбора компьютера
function transCompChoise() {
    var compChoise = Math.floor(Math.random() * (1 + 1) - 1);

    if (compChoise == -1) {
        return "Камень";
    }
    else if (compChoise == 0) {
        return "Ножницы";
    }
        
    return "Бумага";

}

// Предложение повторно сыграть
function wantReplay(counterComp, counterHum) {
    var offer;

    if (counterComp == counterHum) {
        offer = confirm("Можем сыграть ещё раз!");
    }
    else if (counterComp < counterHum) {
        offer = confirm("Давай сыграем ещё раз!!");
    }
    else {
        offer = confirm("Может, ты хочешь отыграться?))");
    }

    if (offer == true) {
        play();
    }
    else {
        alert("Как хочешь!(\n Финальный счет: " + finalScore(counterComp, counterHum));
    }
}

// Проверка введенных данных
function isDataCorrect(humanChoise) {
    if (humanChoise == null) {
        alert("Поле не может быть пустым!");
        return false;
    }
    else if (typeof humanChoise === 1) {
        alert("Введите одно из трёх слов: камень, ножницы или бумага.");
        return false;
    }
    else if (humanChoise.toLowerCase() != "камень" &&
                humanChoise.toLowerCase() != "ножницы" &&
                    humanChoise.toLowerCase() != "бумага") {
        alert("Введите одно из трёх слов: камень, ножницы или бумага.");
        return false;
    }
    else {
        return true;
    }
}

// Запись финального счёта
function finalScore(counterComp, counterHum) {
    var final;

    if (counterComp < counterHum) {
        final = counterHum + " : " + counterComp + " в пользу кожаного.";
    }
    else if (counterComp > counterHum) {
        final = counterComp + " : " + counterHum + " в пользу ИИ!";
    }
    else {
        final = counterHum + " : " + counterComp;
    }

    return final;
}

// Запись счёта
function recordScore(counterComp, counterHum) {
    score = "ИИ    Кожаный\n" + counterComp + "       " + counterHum;
    return score;
}

// play!
play();