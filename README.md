Este proyecto se construyo con [Create React App](https://github.com/facebook/create-react-app).

## Iniciar proyecto
Despues de clonar deberas ejecutar `npm install` para instalar todas las dependencias.

## DotEnv
El proyecto requiere que se cree el siguiente archivo `.env.development.local` con las variables de entorno para trabajar en desarrollo, basandose en el achivo `env.example`

## Arrancar el servidor
`npm start` se levantara un servidor local sobre `localhost:3000` por default.

## Producción
Para levantar el proyecto a produccion, primero se debe crear el archivo `.env.production.local` con las variables de entorno que se requieren en produccion y despues construir la carpeta de `build` que contendra el codigo transpilado con el comando `npm run build`.

## Estructuración del proyecto
A continuacion se describen cada una de las carpetas dentro del nivel de `src`

### Pages
Esta carpeta debera contener los componentes que son a nivel superior, especificamente como si se trataran de páginas.

### Components
La carpeta components debera contener aquellas estructuras de codigo que seran reutilizables y que su logica puede estar separada sin afectar a un componente padre o contenedor.

### Constants
Contiene todas aquellas variables constantes que no cambiaran en el proyecto.

### Services
Contiene todos los servicios/funciones que pueden ser utilizados en el proyecto por ejemplo `axios`.

### Routes
Contiene todas las rutas del sistema, se debe especificar los atributos que contiene cada ruta para evaluar el reenderizado.

### Hooks
Contiene todos aquellos Hooks personalizados que pueden estar separados de cada componente, esto le da mayor autonomia al desarrollador para tener una mejor estructura en cuanto logica y componente.


