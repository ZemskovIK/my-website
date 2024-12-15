const textElement = document.getElementById("text"); // Находим элемент по ID
const text = textElement.textContent; // Берём текст из элемента

let index = 0;

function type() {
    if (index < text.length) {
        textElement.textContent += text.charAt(index); // Добавляем букву к тексту
        index++;
        setTimeout(type, 30); // Задержка между печатью букв
    }
}

textElement.textContent = ""; // Очищаем текст перед началом
type(); // Запускаем функцию
