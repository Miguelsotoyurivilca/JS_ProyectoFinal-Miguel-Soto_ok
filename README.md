# 🍜 ReservApp - Sistema de Reservas para un Bar Vietnamita

## 📌 Descripción
Este proyecto es un simulador interactivo para la gestión de reservas en un bar vietnamita. Permite a los usuarios reservar mesas, ver el menú, agregar productos al carrito y simular un pedido anticipado. Se implementa con **HTML, CSS, JavaScript, Bootstrap y SweetAlert2**.

## 🚀 Características Principales
✅ **Sistema de Reservas**: Los usuarios pueden seleccionar fecha, hora, número de mesa y tipo de mesa.  
✅ **Menú Dinámico**: Se carga desde un archivo JSON y permite agregar productos al carrito.  
✅ **Carrito de Compras**: Almacena los pedidos del usuario con la opción de pago anticipado.  
✅ **Confirmaciones Interactivas**: Se usa SweetAlert2 para mejorar la experiencia del usuario.  
✅ **Uso de LocalStorage**: Se almacenan reservas y pedidos para una experiencia más fluida.  
✅ **Generación de Código QR (opcional)**: Puede implementarse para facilitar check-in.  

## 📂 Estructura del Sistema de Reservas
```
JS_ProyectoFinal+Miguel Soto/
├── reservations.html
├── styles.css
├── script.js
├── modules/
│   ├── reservation.js  # Lógica de reservas
│   ├── menu.js         # Gestión del menú
│   ├── cart.js         # Carrito de compras
│   ├── ui.js           # Manejo de UI y eventos
└── data/
    └── menu.json       # Datos del menú en formato JSON
```

## 🛠️ Tecnologías Utilizadas
- **HTML5, CSS3, Bootstrap** → Diseño responsivo y estilizado.  
- **JavaScript (ES6+)** → Lógica de negocio y manipulación del DOM.  
- **SweetAlert2** → Alertas interactivas en las reservas y pedidos.  
- **LocalStorage** → Almacenamiento temporal de reservas y carrito.  

## ⚡ Instalación y Uso
1️⃣ **Clonar el repositorio**
```bash
 git clone https://github.com/Miguelsotoyurivilca/JS_ProyectoFinal-Miguel-Soto_ok.git
```
2️⃣ **Abrir `reservations.html` en un navegador** o usar **Live Server en VS Code**.
3️⃣ **Probar las funcionalidades**: Reservar una mesa, agregar productos y verificar el carrito.  

## 🔥 Mejoras Futuras
🔹 Integración con APIs de pago como **MercadoPago o PayPal**.  
🔹 Envío de confirmaciones por **WhatsApp o EmailJS**.  
🔹 Sistema de **puntos de fidelidad** para clientes recurrentes.  

## 💡 Contribuciones
Si deseas contribuir, abre un **Pull Request** con mejoras o reporta problemas en **Issues**.

## 🏆 Créditos
Desarrollado por [Miguel Soto] 🚀 con pasión por la tecnología y el UX.  


