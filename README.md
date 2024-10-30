# GifsApp

Aunque este proyecto fue creado la versión del [Angular CLI](https://github.com/angular/angular-cli) 18.2.10, utiliza características clásicas de Angular con fines de aprendezaje.

## Servidor de Desarrollo

Este proyecto usa **Deno 2.0**, una vez instalado, ejectuar todos los comando con **deno run**, para iniciar el server de desarrollo usar ```deno run start```

#### Importante
Generar una nueva apiKey de Giphy, y agregarla en el **gifs service**

## Build

Ejectuar `deno run build` para hacer *build* del proyecto. Los archivos estáticos se generan en la carpeta `dist/`.

## Temas aprendidos

- Uso del @Input
- Componetización básica con Angular
- Manejo de ***Estados globales***, haciendo uso de ***Services***
- Manejo de eventos y directivas de Angular
- Manejo de ***Modules***, importando y exportando componentes
- Realizar peticiones HTTP haciendo del HTTPModule
- Uso de **getters** para proteger las propiedades de los servicios, tanto en los **Servicios** como en los **Componentes**
