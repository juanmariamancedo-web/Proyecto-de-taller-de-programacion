# FLOWTECH — Documentación del Sistema

## 1. Visión de FlowTech

**¿Qué estás construyendo?**
FlowTech es una plataforma web orientada a la comercialización de downpipes, que integra funcionalidades de catálogo, gestión de usuarios, administración de órdenes y un panel de control para la gestión del sistema.

**¿Por qué lo construí?**
Se construye con el objetivo de facilitar la compra y el seguimiento de productos de performance automotriz, centralizando la información y permitiendo una gestión más clara y organizada de las órdenes y los usuarios.

**¿Para quién es?**
Está dirigido a usuarios interesados en productos de mejora de rendimiento automotriz, así como a administradores que requieren herramientas para gestionar usuarios, productos y órdenes dentro del sistema.

---

## 2. Navegación del Sistema

El sistema cuenta con diferentes secciones según el tipo de usuario:

### 2.1 Secciones públicas

| Sección          | Descripción                                               |
| ---------------- | --------------------------------------------------------- |
| Inicio           | Página principal con banner y productos destacados        |
| Quiénes somos    | Información institucional del proyecto                    |
| Catálogo         | Listado de productos o servicios disponibles              |
| Comercialización | Información sobre pagos, envíos o condiciones de servicio |
| Términos y usos  | Condiciones legales del uso del sistema                   |
| Contacto         | Formulario de consultas                                   |

---

### 2.2 Secciones para usuarios autenticados

| Sección | Descripción                                   |
| ------- | --------------------------------------------- |
| Perfil  | Gestión de datos del usuario                  |
| Órdenes | Historial de pedidos o solicitudes realizadas |

---

### 2.3 Panel de administración

Accesible únicamente para usuarios con rol administrador.

Permite la gestión de:

* Usuarios
* Productos
* Órdenes


---

## 3. Requisitos Funcionales — FLOWTECH (Versión Final)

---

### 1. Autenticación y Usuarios

* RF-01: El sistema debe permitir el registro de nuevos usuarios
* RF-02: El sistema debe permitir el inicio de sesión mediante email y contraseña
* RF-03: El sistema debe permitir la edición de los datos del perfil del usuario autenticado
* RF-04: El sistema debe permitir la recuperación de contraseña mediante email
* RF-05: El sistema debe verificar el email del usuario mediante un código de verificación
* RF-06: El sistema no debe permitir el acceso a usuarios con estado "suspendido"
* RF-07: El sistema debe validar el estado del usuario antes de permitir el inicio de sesión
* RF-08: El sistema debe requerir la verificación del email para habilitar el acceso a funcionalidades protegidas
* RF-09: El sistema debe notificar al usuario cuando su cuenta no esté verificada

---

### 2. Navegación

* RF-10: El sistema debe permitir la navegación entre las distintas secciones del sitio
* RF-11: El sistema debe permitir el acceso a las secciones según el rol del usuario

---

### 3. Catálogo y Productos

* RF-12: El sistema debe mostrar un catálogo de productos o servicios
* RF-13: El sistema debe mostrar información detallada de cada producto
* RF-14: El sistema debe permitir buscar productos por nombre
* RF-15: El sistema debe permitir ordenar productos por precio
* RF-16: El sistema debe permitir ordenar productos por stock

---

### 4. Órdenes

* RF-17: El sistema debe permitir la creación de órdenes asociadas a un usuario
* RF-18: El sistema debe almacenar las órdenes en la base de datos
* RF-19: El sistema debe permitir visualizar el historial de órdenes del usuario
* RF-20: El sistema debe permitir consultar el estado de una orden
* RF-21: El sistema debe permitir el pago de órdenes (en caso de estar implementado)

---

### 5. Contacto

* RF-22: El sistema debe permitir enviar consultas mediante un formulario de contacto
* RF-23: El sistema debe validar los datos ingresados antes de enviar la consulta

---

### 6. Panel de Administración

#### 6.1 Acceso

* RF-24: El sistema debe permitir el acceso al panel de administración solo a usuarios con rol administrador

---

#### 6.2 Gestión de Usuarios

* RF-25: El sistema debe permitir al administrador buscar usuarios por nombre
* RF-26: El sistema debe permitir al administrador ordenar usuarios por ID
* RF-27: El sistema debe permitir al administrador ordenar usuarios por nombre
* RF-28: El sistema debe permitir al administrador ordenar usuarios por CUIL/CUIT
* RF-29: El sistema debe permitir al administrador ordenar usuarios por provincia
* RF-30: El sistema debe permitir al administrador ordenar usuarios por ciudad
* RF-31: El sistema debe permitir al administrador ordenar usuarios por código postal
* RF-32: El sistema debe permitir al administrador ordenar usuarios por rol
* RF-33: El sistema debe permitir al administrador modificar el rol de los usuarios
* RF-34: El sistema debe permitir al administrador suspender o desactivar usuarios

---

#### 6.3 Gestión de Productos

* RF-35: El sistema debe permitir al administrador crear productos
* RF-36: El sistema debe permitir al administrador editar productos
* RF-37: El sistema debe permitir al administrador eliminar productos
* RF-38: El sistema debe permitir al administrador desactivar productos
* RF-39: El sistema debe permitir al administrador buscar productos por nombre
* RF-40: El sistema debe permitir al administrador ordenar productos por nombre
* RF-41: El sistema debe permitir al administrador ordenar productos por stock
* RF-42: El sistema debe permitir al administrador ordenar productos por estado

---

#### 6.4 Gestión de Órdenes

* RF-43: El sistema debe permitir al administrador visualizar todas las órdenes
* RF-44: El sistema debe permitir al administrador buscar órdenes por cliente
* RF-45: El sistema debe permitir al administrador ordenar órdenes por total
* RF-46: El sistema debe permitir al administrador ordenar órdenes por estado
* RF-47: El sistema debe permitir al administrador cambiar el estado de una orden

---

## 4. Casos de Uso

### 4.2 Matrices de Casos de Uso

#### CU-01: Registro y Verificación de Cuenta
* **Actor:** Invitado.
* **Descripción:** Permite a un visitante crear una cuenta en la plataforma y activarla mediante un código enviado a su email.
* **Precondición:** El visitante no debe estar autenticado en el sistema.
* **Flujo Principal:**
  1. El usuario accede a la opción de registro.
  2. El usuario introduce su email, nombre, contraseña y datos de localización.
  3. El sistema valida los datos y envía un código de verificación vía SMTP (RF-01, RF-05).
  4. El sistema muestra la pantalla de verificación restringiendo las rutas protegidas (RF-08).
  5. El usuario ingresa el código correcto.
  6. El sistema cambia el estado del usuario a "verificado" y habilita su acceso completo.
* **Flujos Alternativos:**
  * **5.a** Código incorrecto: El sistema notifica el error y solicita el ingreso válido nuevamente.

#### CU-02: Creación y Pago de una Orden
* **Actor:** Cliente Autenticado.
* **Descripción:** Un usuario añade un downpipe a su carrito, confirma sus datos y procesa el pago.
* **Precondición:** El cliente debe estar autenticado y verificado (RF-08).
* **Flujo Principal:**
  1. El cliente visualiza el detalle de un producto del catálogo (RF-13).
  2. El cliente selecciona la opción de comprar, generando una nueva orden en el sistema (RF-17).
  3. El sistema guarda la orden con estado "created" en la base de datos (RF-18).
  4. El sistema redirige a la pasarela de MercadoPago para procesar la transacción (RF-21).
  5. Una vez aprobado el pago, la pasarela notifica al sistema y la orden cambia a estado "Pagada".
* **Flujos Alternativos:**
  * **4.a** El entorno se encuentra en versión de bypass escolar (versión posterior a `96da641`): El pago se simula de manera automática aprobando la orden directamente sin interacción externa.

#### CU-03: Administración del Catálogo de Productos (CRUD)
* **Actor:** Administrador.
* **Descripción:** Permite la creación, edición, desactivación y eliminación de productos (downpipes) en el catálogo.
* **Precondición:** El usuario debe estar autenticado con el rol de Administrador (RF-24).
* **Flujo Principal:**
  1. El administrador ingresa al Panel de Control en la sección de Productos.
  2. Selecciona la opción "Crear Producto" e introduce nombre, descripción, precio y stock (RF-35).
  3. Sube la imagen del producto; el sistema procesa el archivo y lo almacena de forma remota en Cloudinary.
  4. El administrador guarda los cambios.
  5. El sistema actualiza la base de datos y refresca el catálogo público.

#### CU-04: Control y Actualización de Órdenes comerciales
* **Actor:** Administrador.
* **Descripción:** El administrador supervisa el estado de las compras del sistema y despacha los productos.
* **Precondición:** El usuario debe estar autenticado con el rol de Administrador.
* **Flujo Principal:**
  1. El administrador accede al apartado de gestión de órdenes (RF-43).
  2. Utiliza filtros u ordenamientos por total o estado para auditar los pedidos (RF-45, RF-46).
  3. Selecciona una orden "paid" y cambia su estado a "delivered" tras realizar el despacho del downpipe (RF-47).
  4. El sistema actualiza el registro y despacha una notificación por email al comprador a través del servicio SMTP.

---

## 5. Requisitos No Funcionales

### 5.1 Seguridad
* RNF-01 (Cifrado de Credenciales): Las contraseñas en base de datos deben procesarse mediante funciones de hash robustas (como bcrypt) con salt aleatorio.
* RNF-02 (Seguridad en Endpoints): El backend debe denegar peticiones y rechazar tokens de forma estricta en las rutas protegidas `/admin` si el rol no es equivalente al de Administrador.

### 5.2 Rendimiento y Disponibilidad
* RNF-03 (Tiempos de Respuesta): La carga del catálogo y los detalles de producto de performance deben resolverse en un tiempo inferior a los 2.0 segundos en condiciones normales de red.
* RNF-04 (Concurrencia): El sistema web y la base de datos asociada deben mantener la estabilidad operativa procesando un mínimo de 100 peticiones simultáneas.
* RNF-05 (Disponibilidad del Servicio): La plataforma web debe garantizar una tasa de operatividad de al menos el 99.5% mensual.

### 5.3 Mantenibilidad y Usabilidad
* RNF-06 (Arquitectura Limpia): El código fuente debe dividirse en una arquitectura limpia multicapa (Controladores, modelos, vistas).
* RNF-07 (Diseño Fluido y Responsivo): La UI/UX debe ser completamente flexible (`responsive`), adaptándose eficientemente tanto a teléfonos celulares como a pantallas de escritorio.

---

## 6. Instrucciones de ejecución

1. **Clonar el repositorio:**
```bash
   git clone <url-del-repositorio>
   cd primer-proyecto-integrador
```

2. **Instalar dependencias y compilar el entorno:**

```bash
    npm install
   npm run build
```
2. **Configurar variables de entorno:**
APP_URL=[http://primer-proyecto-integrador.test](http://primer-proyecto-integrador.test)
     VITE_HMR_HOST=[http://primer-proyecto-integrador.test](http://primer-proyecto-integrador.test)
     ```
     *(Nota: Ambas variables deben ser estrictamente iguales para garantizar el correcto enrutamiento).*

   * **Pasarela de Pagos (MercadoPago):**
```env
     MERCADOPAGO_ACCESS_TOKEN=<tu_access_token>
     ```
     *(Requerido para la gestión y simulación de transacciones de la versión `96da641`).*

   * **Almacenamiento de Imágenes (Cloudinary):**
```env
     CLOUDINARY_CLOUD_NAME=<tu_cloud_name>
     CLOUDINARY_API_KEY=<tu_api_key>
     CLOUDINARY_API_SECRET=<tu_api_secret>
     ```
     *(Esencial para permitir la subida de imágenes de los productos desde el panel de administración).*

   * **Servicio de Notificaciones (Email):**
```env
     MAIL_USERNAME=<tu_usuario_smtp>
     MAIL_PASSWORD=<tu_contraseña_smtp>
     ```
     *(Obligatorio para procesar el envío de correos de verificación y alertas del estado de las órdenes).*
```

4.**Ejecutar el servidor en entorno de desarrollo:**

```bash
   npm run dev
```
o

```bash
   npm run build
```
---

## 7. Consideraciones

* El pago de la orden contiene un bypass en la última  versión debido a solicitud del profesor, para utilizar el mismo se debe de restaurar al commit 96da641
* El email del usuario administrador es juanmaninc@gmail.com y la contraseña es beamerboy
