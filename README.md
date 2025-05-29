# Ecommerce Angular

Este proyecto es una aplicación de comercio electrónico desarrollada en Angular 19. Incluye:

- Panel de administración para gestión de productos, categorías y órdenes.
- Vista pública para clientes con navegación de productos, carrito de compras y checkout.

---

## Tecnologías

- [Angular 19](https://angular.io/)
- [Bootstrap 5](https://getbootstrap.com/)
- [RxJS](https://rxjs.dev/)
- [Angular Router](https://angular.io/guide/router)
- [Formularios Reactivos](https://angular.io/guide/reactive-forms)
- API REST (conectado a backend Laravel.)

---

## Estructura del Proyecto

```sh
src/
├── app/
│ ├── admin/ # Módulo del administrador
│ │ ├── components/ # Componentes del admin
│ │ └── views/ # Páginas como dashboard, productos, etc.
│ ├── public/ # Módulo público (tienda)
│ │ ├── components/ # Componentes públicos
│ │ └── views/ # Página de inicio, productos, carrito, etc.
│ └── app.routes.ts
```