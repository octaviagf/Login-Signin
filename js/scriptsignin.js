//Sign in//

const signin = document.getElementById("signinform");
const signinbutton = document.getElementById("signinbutton");

signinbutton.addEventListener("click", function signin() {

    const signinUser = document.getElementById("signinusername").value;
    const email = document.getElementById("email").value;
    const signinPassword = document.getElementById("signinpassword").value;
    const confirmPassword = document.getElementById("passwordconfirmation").value;

    if (signinUser === "" || email === "" || signinPassword === "" || confirmPassword === "") {
        Swal.fire({
          icon: "error",
          title: "Oops!!!",
          text: "Por favor, completa todos los campos del formulario."
        });

    } else if (signinPassword === confirmPassword) {
        Swal.fire({
            icon: "success",
            title: "Registrado correctamente.",
            text: "Bienvenido!"
        })
    } else {
            Swal.fire({
                icon: "warning",
                title: "Confirmación de contraseña incorrecta.",
                text: "Valida tus datos correctamente."
            })
        }   
    })