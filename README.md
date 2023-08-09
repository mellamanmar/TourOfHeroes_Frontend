## API rest de una lista de tareas
<img src='image/heroes.png' alt="Heroes" width="230" height="190">

### Autor: Marianny Márquez
### Prográmate Academy
<img src='image/programate.png' alt='Logo Prográmate' width="180" height="70">

## Descripción

Este proyecto está pensado para realizar una lista de súperheroes con su súperpoder, nivel y nombre del mismo, conectándolo con la API restful que se realizó con el mismo tema.
Esta API rest esta ideada para trabajarla desde el framework Angular versión 16.1.6 <img src='image/Logo angular.png' alt='Logo Angular' width="50" height="40">

## Funcionalidades
- Obtener los súperheroes.

## Pendientes
- Obtener súperheroeseas por ID.
- Obtener detalles de súperheroes.
- Crear nuevos súperheroes.
- Eliminar un súperheroes.

## Tecnologías utilizadas
- JavaScript.
- TypeScript.
- HTML y CSS
- Angular.
- rxjs.

## Instalación
1. Clona este repositorio en tu máquina local.
2. Navega hasta el directorio del proyecto.
3. Instala las dependencias necesarias para poder usar la API:
    npm i cors rxjs

## Uso
1. Inicia la aplicación, se deben abrir dos termianles
node index.js ó npm run dev (Para el backend desde el repositorio de https://github.com/mellamanmar/TourOfHeroes_Backend/tree/main) 
ng server (Para el frontend)
2. Accede a la ruta del frontend http://localhost:4200 y así podrás consumir la API desde tu servidor local.
3. Desde la ruta inicial puedes acceder al dashboard de la API.
4. Desde la ruta http://localhost:4200/api/heroes se deben ver los héroes traídos desde el servidor backend, sin embargo se presenta un error de CORS el cual no permite continuar con la petición, este error esta pendiente a revisón.


### A tomar en cuenta
Este proyecto no esta terminado ya que se presentaron dificultades al momento de conectar y trabajar con los datos del backend en el framework de angular.
