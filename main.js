const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");

const preguntas = [
  {
    pregunta: "1. cual es la varita mas poderosa de la saga?",
    respuestas: {
      a: "sauco",
      b: "pluma fenix",
      c: "basilisco",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "2.nombre del colegio?",
    respuestas: {
      a: "tecnica 6",
      b: "kennedy",
      c: "wogwarts",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "3. nombre del protagonista?",
    respuestas: {
      a: "harry",
      b: "ron",
      c: "malfoy",
      
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "4.cual es el hechizo mas conocido?",
    respuestas: {
      a: "abada kadabra",
      b: "espectro patronus",
      c: "matamoscas",
    },
    respuestaCorrecta: "a",
  },
];

function mostrarTest() {
  const preguntasYrespuestas = [];

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const respuestas = [];

    for (letraRespuesta in preguntaActual.respuestas) {
      respuestas.push(
        `<label>
                  <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}" />
                  ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
              </label>`
      );
    }

    preguntasYrespuestas.push(
      `<div class="cuestion">${preguntaActual.pregunta}</div>
          <div class="respuestas"> ${respuestas.join("")} </div>
          `
    );
  });

  contenedor.innerHTML = preguntasYrespuestas.join("");
}

mostrarTest();

function mostrarResultado() {
    const respuestas = contenedor.querySelectorAll(".respuestas");
    let respuestasCorrectas = 0;
     
    preguntas.forEach((preguntaActual, numeroDePregunta) => {
      const todasLasRespuestas = respuestas[numeroDePregunta];
      const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
      const respuestaElegida = (
        todasLasRespuestas.querySelector(checkboxRespuestas) || {}
      ).value;
  
      if (respuestaElegida === preguntaActual.respuestaCorrecta) {
        respuestasCorrectas+=1;
  
        respuestas[numeroDePregunta].style.color = "blue";
      } else {
        respuestas[numeroDePregunta].style.color = "red";
      }
    });
  
  let resultadoTest=respuestasCorrectas+preguntas.length;
  //console.log (resultadoTest)
  switch (resultadoTest){
    case 5:Swal.fire({
      title: 'FELICIDADES!!!',
      text: 'tu casa es: hufflepuff',
      imageUrl: 'hufflepuff.png',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    });
    break;
    case 6 :
      Swal.fire({
      title: 'FELICIDADES!!!',
      text: 'tu casa es:slytherin',
      imageUrl: 'slytherin.png',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    });
    break;
    case 7:
      Swal.fire({
      title: 'FELICIDADES!!!',
      text: 'tu casa es:ravenclaw',
      imageUrl: 'ravenclaw.jpg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
    break;
    case 8:
       Swal.fire({
      title: 'FELICIDADES!!!!',
      text: 'tu casa es:gryffindor',
      imageUrl: 'gryffindor.png',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      footer:'IMPORTANTE:NO TE OLVIDES QUE CASA SOS!!!!'
    })
  } 
       
  }
  
  botonRes.addEventListener("click", mostrarResultado);
