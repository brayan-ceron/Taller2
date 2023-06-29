function calcularEdad(event) {
    event.preventDefault(); // Evitar el envío del formulario y recarga de la página
    
    const fechaNacimiento = new Date(document.getElementById('fechaNacimiento').value);
    const edadEnMilisegundos = Date.now() - fechaNacimiento.getTime();
    const edad = new Date(edadEnMilisegundos).getFullYear() - 1970;
    document.getElementById('campo1').value = edad;
  }
  

  function calcularAntiguedad(event) {
    event.preventDefault(); // Evitar el envío del formulario y recarga de la página

    const fechaIngreso = new Date(document.getElementById('fechaIngreso').value);
    const antiguedadEnMilisegundos = Date.now() - fechaIngreso.getTime();
    const antiguedad = new Date(antiguedadEnMilisegundos).getFullYear() - 1970;
    document.getElementById('campo2').value = antiguedad;
  }

  function calcularPrestaciones(event) {
    event.preventDefault(); // Evitar el envío del formulario y recarga de la página

    const antiguedad = parseInt(document.getElementById('campo2').value);
    const salario = parseFloat(document.getElementById('salario').value);
    const prestaciones = (antiguedad * salario)/12;
    document.getElementById('campo3').value = prestaciones;
  }
  function modificarSalario( event) {
    event.preventDefault(); 
    var nuevoSalario = prompt("Ingrese el nuevo salario:");
    var campoSalario = document.getElementById("salario");
    campoSalario.value = nuevoSalario;
    // Aquí puedes realizar cualquier acción adicional con el nuevo salario, como enviarlo al servidor o actualizar la interfaz de usuario.
  }
  function informacion() {
    // Arreglo para almacenar la formación académica
    var formacionAcademica = [];

    // Mostrar cuadro de diálogo (alerta) con formulario
    var nivel = prompt("Ingrese el nivel de formación académica:");
    var institucion = prompt("Ingrese la institución de formación:");
    var titulo = prompt("Ingrese el título obtenido:");

    if (nivel && institucion && titulo) {
      formacionAcademica.push({
        nivel: nivel,
        institucion: institucion,
        titulo: titulo
      });

      var mensaje = "Formación Académica:\n";
      for (var i = 0; i < formacionAcademica.length; i++) {
        mensaje += "- Nivel: " + formacionAcademica[i].nivel + "\n";
        mensaje += "  Institución: " + formacionAcademica[i].institucion + "\n";
        mensaje += "  Título: " + formacionAcademica[i].titulo + "\n";
      }

      // Mostrar el alerta con la formación académica ingresada
      alert(mensaje);
    }
  }
  function opcion() {
    var horasTrabajadas = parseFloat(prompt("Ingrese la cantidad de horas extras trabajadas:"));
    var valorHoraExtra = parseFloat(prompt("Ingrese el valor de la hora extra:"));
    var resultado = horasTrabajadas * valorHoraExtra;
    alert("El resultado de las horas extras trabajadas es: " + resultado);
}