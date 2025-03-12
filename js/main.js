// Використайте JavaScript та IntersectionObserver, щоб додати анімацію для кожного елемента li, коли він входить 
// в зону видимості користувача. Конкретно, коли елемент входить в зону видимості, його картинка змінюється на іншу
//  (можливо, зображення з вищою якістю), а назва фрукту змінює свій колір.
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
            img.src = img.getAttribute()
        }
    })
}
// 🦧🦧🦧 //





















