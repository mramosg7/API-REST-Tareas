# API de Tareas

La API de Tareas, desarrollada en Node.js utilizando el framework Express y respaldada por una base de datos MySQL, ofrece una solución completa para la gestión de tareas pendientes. Diseñada para ser eficiente y escalable, esta API proporciona operaciones clave para manejar tareas de manera efectiva.



## Documentación Básica de la API (Solo Orientativa)

Lo siguiente es una documentación básica de la API y se proporciona únicamente como referencia rápida. 

**Nota Importante:** Esta API ha sido completamente documentada utilizando Swagger. Para obtener información detallada sobre cada ruta, parámetros, y respuestas posibles, te invitamos a explorar la documentación interactiva en `/api-docs`.

### Obtener todas las tareas

```
  GET /api/tarea/tareas
```
#### Ejemplo de respuesta: 
```json
{
  "tareas": [
    {
      "id": 4,
      "text": "Tarea de ejemplo",
      "estado": "Pendiente",
      "fecha": "2023-12-06T23:00:00.000Z"
    },
    {
      "id": 5,
      "text": "Tarea de ejemplo",
      "estado": "Pendiente",
      "fecha": "2023-12-06T23:00:00.000Z"
    }
  ]
}
```
### Crear Nueva Tarea

```
  POST /api/tarea/crear
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `text` | `string` | **Required**. El texto de la tarea |

#### Ejemplo de respuesta:  
```json
{
  "message": "Tarea creada correctamente"
}
```

### Actualizar Estado de Tarea

```
  PUT /api/tarea/update
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `int` | **Required**. El id de la tarea |
| `id` | `String` | **Required**. El nuevo estado, solo se pueden: Pendiente, En proceso y Completada |

#### Ejemplo de respuesta: 
```json
{
  "message": "Tarea actualizada correctamente"
}
```

### Eliminar Tarea

```
  DELETE /api/tarea/delete
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `int` | **Required**. El id de la tarea |

#### Ejemplo de respuesta: 
```json
{
  "message": "Tarea eliminada correctamente"
}
```
## Ejecucion local

Clona el proyecto:

```bash
  git clone https://github.com/mramosg7/API-REST-Tareas
```
Entra dentro:

```bash
  cd API_REST_Tareas
```
Instala las dependencias:
```bash
  npm install
```
Arranca el servidor:

```bash
  npm start
```

## Configuración del Proyecto

Antes de ejecutar este proyecto, asegúrate de configurar las dependencias según tus preferencias. Puedes personalizar estas configuraciones en el archivo `.env`.

Las dependencias de entorno necesarias incluyen:

`DB_HOST`

`DB_USER`

`DB_PASSWORD`

`DB_PORT`

`DB_DATABASE`

## Contribuciones

¡Contribuciones son bienvenidas! Si encuentras algún problema o tienes sugerencias, por favor abre un [issue](https://github.com/mramosg7/API-REST-Tareas/issues).

---

© 2023 mramosg2 

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-800080?style=for-the-badge&logo=ko-fi&logoColor=white)](https://katherineoelsner.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)
[![github](https://img.shields.io/badge/github-000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/mramosg7)

