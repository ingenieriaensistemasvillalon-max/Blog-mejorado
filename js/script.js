window.onload = function() {
    
    // ---- BLOQUE DE SEGURIDAD ----
    let pass = prompt("Introduce la contraseña para acceder al blog:");
    const passwordCorrecta = "2312";

    if (pass !== passwordCorrecta) {
        document.body.innerHTML = "<h1>Acceso denegado 🔒</h1>";
        return; // ❗ Muy importante: detener aquí
    }

    // ---- CARGAR COMENTARIOS ----
    const comentariosGuardados = JSON.parse(localStorage.getItem('comentarios')) || [];
    comentariosGuardados.forEach(c => {
        if (typeof mostrarComentario === 'function') {
            mostrarComentario(c);
        } else {
            console.error('La función mostrarComentario no está definida');
        }
    });
}
