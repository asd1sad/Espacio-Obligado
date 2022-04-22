//! Display de menus
function abrirMenu(menu) {
    if (menu == "menuIntro") {
        document.querySelector("#menuIntro").style.display = "block";
        document.querySelector("#menuCatalogo").style.display = "none";
        document.querySelector("#menuContacto").style.display = "none";
        document.querySelector("#menuColeccion").style.display = "none";
    } else if (menu == "menuCatalogo") {
        document.querySelector("#menuCatalogo").style.display = "block";
        document.querySelector("#menuContacto").style.display = "none";
        document.querySelector("#menuIntro").style.display = "none";
        document.querySelector("#menuColeccion").style.display = "none";
    } else if (menu == "menuContacto") {
        document.querySelector("#menuContacto").style.display = "block";
        document.querySelector("#menuCatalogo").style.display = "none";
        document.querySelector("#menuIntro").style.display = "none";
        document.querySelector("#menuColeccion").style.display = "none";
    } else if (menu == "menuColeccion") {
        document.querySelector("#menuColeccion").style.display = "block";
        document.querySelector("#menuContacto").style.display = "none";
        document.querySelector("#menuCatalogo").style.display = "none";
        document.querySelector("#menuIntro").style.display = "none";
    } else {
        document.querySelector("#menuIntro").style.display = "block";
        document.querySelector("#menuCatalogo").style.display = "none";
        document.querySelector("#menuContacto").style.display = "none";
        document.querySelector("#menuColeccion").style.display = "none";
    }
}

//! Eventos click menus ida 
document.querySelector(".catalogo").addEventListener("click", () => abrirMenu("menuCatalogo"));
document.querySelector(".footerCatalogo").addEventListener("click", () => abrirMenu("menuContacto"));
document.querySelector(".contacto").addEventListener("click", () => abrirMenu("menuContacto"));
document.querySelector("#contacto2").addEventListener("click", () => abrirMenu("menuContacto"));
document.querySelector("#catalogo2").addEventListener("click", () => abrirMenu("menuCatalogo"));
document.querySelector(".coleccion").addEventListener("click", () => abrirMenu("menuColeccion"));
document.querySelector(".catalogo").addEventListener("click", () => abrirMenu("menuCatalogo"));
document.querySelector("#coleccion2").addEventListener("click", () => abrirMenu("menuColeccion"));
document.querySelector("#contacto3").addEventListener("click", () => abrirMenu("menuContacto"));
document.querySelector("#catalogo2").addEventListener("click", () => abrirMenu("menuCatalogo"));
document.querySelector("#coleccion3").addEventListener("click", () => abrirMenu("menuColeccion"));




 //! Eventos click menus , vuelta





//  contadorCarrito.innerText = [...carritoDeCompras].reduce((acc,el)=> acc + el.cantidad, 0)
