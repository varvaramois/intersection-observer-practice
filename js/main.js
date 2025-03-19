// Використайте JavaScript та IntersectionObserver, щоб додати анімацію для кожного елемента li, коли він входить 
// в зону видимості користувача. Конкретно, коли елемент входить в зону видимості, його картинка змінюється на іншу
// (можливо, зображення з вищою якістю), а назва фрукту змінює свій колір.
// Коли елемент виходить з зони видимості, картинка та назва фрукту знову змінюються на початкові значення.
// function scrollAndHover(entries, observer) {
//     entries.forEach(element => {
//         if (element.isIntersecting) {
//             element.target.classList.add("visible");
//         } else {
//             element.target.classList.remove("visible");
//         }
//     })
// }
// const element = new IntersectionObserver(scrollAndHover, {
//   threshold:0.5
// });
// const div = document.querySelectorAll(".container");
// div.forEach((item) => element.observe(item))

function getCats(elements) {
    elements.forEach(element => {
        const img = element.target.querySelector("img");
        const text = element.target.querySelector("h3");
        if (element.isIntersecting) {
            img.src = img.dataset.altSrc;
            text.style.color = "red";
        } else {
            img.src = img.dataset.src;
            text.style.color = "green";
        }
    })
}

const observer = new IntersectionObserver(getCats, {
  threshold:0.5
});

const li = document.querySelectorAll(".fruits-list li");
li.forEach((item) => observer.observe(item))
// 🦧🦧🦧 зробила так як Ви казали, чесне слово, передивилася(переслухала) разів 5 кінцівку заняття //





















