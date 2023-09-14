//Log in//

const login = document.getElementById("loginform");
const button = document.getElementById("loginbutton");

button.addEventListener("click", function login() {

    const username = document.getElementById("username").value;
    const userpassword = document.getElementById("userpassword").value;

    if (username === "" || userpassword === "") {
        Swal.fire({
          icon: "error",
          title: "Oops!!!",
          text: "Por favor, completa todos los campos del formulario."
        });

    } else if (username == "user" && userpassword == 12345) {
        Swal.fire({
            icon: "success",
            title: "Sesión iniciada correctamente.",
            text: "Bienvenido!"
        })
    } else {
        Swal.fire({
            icon: "warning",
            title: "Datos incorrectos.",
            text: "Valida tus datos o regístrate!"
        })
    }
})