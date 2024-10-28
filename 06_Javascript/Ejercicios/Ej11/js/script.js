window.addEventListener("DOMContentLoaded", () => {
    let cards = document.querySelectorAll(".layout__card");
    
    cards.forEach(card => {
        let btn = document.createElement("button");
        let text = document.createTextNode("Eliminar tarjeta");
        btn.appendChild(text);
        btn.classList.add("content__btn");

        card.children[1].appendChild(btn);

        btn.addEventListener("click", () => {
            card.remove();
        });
    });
 })