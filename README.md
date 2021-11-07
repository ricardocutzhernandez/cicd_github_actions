# Cicd Gitlab

CI/CD example for gitlab

### Uso de github actions

<p style='text-align: justify;'> 
Son tareas que permiten automatizar las tareas que componen el cíclo de vida de una aplicación.
</p>

Los componentes de github actions:

*  Workflows: describe un conjunto de "job" que seran ejecutados cuando un evento suceda.
*  Events: Los eventos que inician la ejecución del workflow. Puede ser un push, pull request, etc.

*  Jobs: Contiene una serie de pasos que se ejecutan, estos pueden ejecutarse en paralelo, pueden ser secuenciales.

*  Actions: Son comandos que pueden ejecutarse e incluirse en un job.


Ejemplo: iniciar el uso con workflow:

* En el repositorio se deben crear los siguientes directorios **.github/workflows/**
* En este directorio podemos crear el un archivo YAML que permita agregar las tareas que se ejecutaran por medio de gtihub actions.

```yaml
name: ejemplo

on:
  push:  # eventos
    branches: [master]

jobs:
  build:
    runs-on: ubuntu-latest
    env:
      # variables de ambiente
    steps:
      # comandos a ejecutar
  deploy:
    runs-on: ubuntu-latest
    needs: [build]
    steps:
      # comandos a ejecutar
```

* En el ejemplo anterior podemos observar las siguientes partes del archivo.

  * Este es opcional y permite colocarle nombre al **workflow** que se ejecutará

  ```yaml
  name: ejemplo
  ```

  * La siguiente porción define el evento que va a iniciar las acciones, en este caso el evento será un **push** en la rama **master** 

  ```yaml
  on:
    push:
      branches: [master]
  ```

  * La definición de los **jobs** permite definir cada una de las tareas que se ejecutarán como parte de la automatizaciones.

  ```yaml
  jobs:
    build:
      # definición de las acciones de build
    deploy:
      # definición de las acciones de deploy
  ```

### Documentación de referencia

  * [Documentación de Github Actions](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions)


### Youtube Playlist

* [Playlist de video ejemplos](https://youtube.com/playlist?list=PL8Xnw9lMxPCGY_YChsjd8dEEbladBWGPl)
