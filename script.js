// =========================
// CONFIGURACIÓN DEL EVENTO
// =========================

// Cambiar a true cuando haya un evento.
// Cambiar a false cuando NO haya evento.

const hayEvento = false;


// =========================
// INFORMACIÓN DEL EVENTO
// =========================

const evento = {
    titulo: "Nombre del evento",

    fecha: "Sábado 20 de septiembre - 19:00 hs",

    descripcion: "Acá podés escribir una breve descripción del evento.",

    imagen: "imagenes/evento.jpg"
};


// =========================
// MOSTRAR / OCULTAR EVENTO
// =========================

const seccionEvento = document.getElementById("evento");

if (hayEvento) {

    seccionEvento.innerHTML = `
        <h2>
            <i class="fa-solid fa-calendar-star"></i>
            Evento
        </h2>

        <div class="evento-card">

            <img
                src="${evento.imagen}"
                alt="${evento.titulo}"
            >

            <div class="evento-texto">

                <h3>${evento.titulo}</h3>

                <p>
                    <strong>${evento.fecha}</strong>
                </p>

                <p>
                    ${evento.descripcion}
                </p>

            </div>

        </div>
    `;

} else {

    // Si no hay evento, se elimina completamente la sección.
    seccionEvento.remove();

}