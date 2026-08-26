/* =========================================================
   MENÚ MOBILE
   ========================================================= */

const menuButton =
    document.getElementById("menuButton");

const navigation =
    document.getElementById("navigation");


menuButton.addEventListener("click", () => {

    const isOpen =
        navigation.classList.toggle("open");


    menuButton.setAttribute(
        "aria-expanded",
        isOpen
    );

});


/* =========================================================
   CERRAR MENÚ AL SELECCIONAR UNA SECCIÓN
   ========================================================= */

const navigationLinks =
    document.querySelectorAll(
        ".navigation a"
    );


navigationLinks.forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove("open");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


/* =========================================================
   MARCAR LA SECCIÓN ACTUAL EN EL MENÚ
   ========================================================= */

const sections =
    document.querySelectorAll(
        "main section"
    );


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }


                const sectionId =
                    entry.target.id;


                navigationLinks.forEach(link => {

                    link.classList.remove(
                        "active"
                    );


                    if (
                        link.getAttribute("href") ===
                        `#${sectionId}`
                    ) {

                        link.classList.add(
                            "active"
                        );

                    }

                });

            });

        },

        {
            threshold: 0.35
        }

    );


sections.forEach(section => {

    observer.observe(section);

});