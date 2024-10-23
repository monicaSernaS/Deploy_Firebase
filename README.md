# To-Do-List App 📝

¡Bienvenido a la **To Do List App**! Esta es una aplicación sencilla y práctica que te permite gestionar tus tareas diarias de forma efectiva y divertida. Ideal para quienes buscan organizar su día a día. 
![Portada del PDF](https://github.com/monicaSernaS/Deploy_Firebase/raw/main/nombre_de_la_imagen.jpg)
## 🌟 Características

- **Agregar nuevas tareas** a la lista.
- **Eliminar tareas** completadas con facilidad.
- Interfaz **intuitiva** y **amigable**.
- Ideal para practicar la gestión de estado en React.

## 🛠️ Tecnologías Utilizadas

- **React**: La biblioteca de JavaScript para construir interfaces de usuario.
- **Vite**: Un entorno de desarrollo rápido y ligero para aplicaciones web.
- **Firebase**: Para el despliegue en la nube y la gestión del hosting.

## 📥 Instalación

¡Es muy fácil! Solo sigue estos pasos:

1. Clona el repositorio:
   
   ```bash
   git clone https://github.com/monicaSernaS/Deploy_Firebase

2. Navega al directorio del proyecto:

   ```bash
   cd to-do-list-app

3. Instala las dependencias:

   ```bash
   npm install
    
## 🚦 Uso de la Aplicación

1. Inicia la aplicación en tu entorno local:

    ```bash
    npm run dev

2. Abre tu navegador y ve a http://localhost:3000 (o la URL que indique la consola).

3. ¡Agrega tus tareas! Escribe en el campo de texto y presiona el botón "Add Task" para añadirlas a la lista.

4. Para eliminar una tarea, simplemente haz clic en el botón "X" al lado de la tarea que deseas borrar.

## 🔥 Despliegue en Firebase

Este proyecto se realizó como un ejercicio sencillo para practicar el despliegue en Firebase. Aquí están los pasos para hacerlo:

### Crear un Proyecto en Firebase

  1. Ve a Firebase Console y crea un nuevo proyecto.
  2. Activa Firebase Hosting en tu proyecto.

### Inicializar Firebase en tu Proyecto

1. En tu terminal, inicializa Firebase en el directorio de tu proyecto:
   ```bash
  	firebase init

2. Selecciona "Hosting" y sigue las instrucciones.

3. Cuando se te pregunte por la carpeta pública, escribe dist.

### Configuración del Archivo firebase.json

Asegúrate de que tu archivo firebase.json contenga lo siguiente:

   ```bash
   {
     "hosting": {
       "public": "dist",
       "ignore": [
         "firebase.json",
         "**/.*",
         "**/node_modules/**"
       ],
       "rewrites": [
         {
           "source": "**",
           "destination": "/index.html"
         }
       ]
     }
   }
```
## Construir y Desplegar tu Aplicación

1. Construye la aplicación:
```bash
npm run build
```
Esto creará la carpeta dist que contiene los archivos listos para producción.

2. Despliega tu aplicación en Firebase:
```bash
firebase deploy
```
Una vez completado, recibirás una URL donde podrás ver tu aplicación en línea.

## 🎤 Presentación
Para saber un poco más de deploy Firebase, puedes ver la presentación de Canva aquí: [Presentación de Canva](https://github.com/monicaSernaS/Deploy_Firebase/blob/main/deploy_firebase.pdf)

## 🤝 Contribuciones
Si deseas contribuir al proyecto, no dudes en hacer un fork y enviar un pull request. ¡Todas las contribuciones son bienvenidas!

## 📜 Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.


