let menuVisible = false;

//funcion que oculta o muestra el menú

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="responsive";
        menuVisible = false;
    }else {
        document.getElementById("nav").classList="responsive2";
        menuVisible = true;
    }
}

function seleccionar() {
    //oculto el menu una ves apretado la opción
    document.getElementById("nav").classList="responsive2";
    menuVisible = false;
}

//funcion para recibir Email
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_6gebvwb';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});