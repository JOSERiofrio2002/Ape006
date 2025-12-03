🎨 Prototipo UI – Plataforma de Trueques Online (TruequePlus) Este documento describe el flujo principal del prototipo diseñado en Stitch, junto con la especificación de cada una de las pantallas requeridas: propósito, componentes, estructura y referencia a capturas.

🖼️ 2. Pantallas del Prototipo

A continuación se presentan las 8 pantallas con su descripción detallada.

🔖 Pantalla – Inicio

📌 Propósito: Introducir la plataforma a los usuarios, destacar su propósito y mostrar una vista previa de los trueques más recientes.

🧩 Componentes: • Barra de navegación superior con enlaces a "Explorar Trueques", "Iniciar Sesión" y "Registrarme". • Sección principal con el logo "TruequePlus", un título llamativo ("La forma más inteligente de cambiar lo que tienes por lo que quieres") y una breve descripción de la plataforma. • Botón de llamada a la acción "Comienza a Intercambiar Ahora". • Sección "Últimos Trueques" mostrando productos en formato de cards con imagen, nombre y una breve descripción, y un botón "Ver más". • Footer con información de copyright, enlaces "Sobre Nosotros", "FAQ" y "Términos de Servicio".


🔖 Pantalla – Registro de Usuario

📌 Propósito: Permitir a los nuevos usuarios crear una cuenta en la plataforma TruequePlus.

🧩 Componentes: • Logotipo de "TruequePlus". • Título "Crea tu cuenta" y una breve frase invitando a unirse. • Formulario con campos de texto para "Nombre", "Correo Electrónico" y "Contraseña" (con opción de mostrar/ocultar). • Botón destacado "Crear Cuenta". • Enlace "¿Ya tienes una cuenta? Inicia sesión" para redirigir a la página de login.


🔖 Pantalla – Inicio de Sesión

📌 Propósito: Permitir a los usuarios existentes acceder a su cuenta en TruequePlus.

🧩 Componentes: • Logotipo de "TruequePlus". • Título "Bienvenido de vuelta" y una frase invitando a iniciar sesión. • Formulario con campos de texto para "Correo Electrónico" y "Contraseña" (con opción de mostrar/ocultar). • Casilla de verificación "Recordarme". • Enlace "¿Olvidaste tu contraseña?". • Botón destacado "Iniciar Sesión". • Enlace "¿No tienes una cuenta? Regístrate" para redirigir a la página de registro.


🔖 Pantalla – Dashboard del Usuario

📌 Propósito: Proporcionar al usuario un panel de control personal para gestionar su perfil y sus productos publicados.

🧩 Componentes: • Barra lateral de navegación con opciones como "Dashboard", "Mis Trueques", "Mensajes" y "Configuración", y un botón "Cerrar Sesión". • Sección principal con el título "Mi Panel". • Información de perfil rápido con avatar, nombre de usuario y una breve descripción. • Indicadores numéricos de "Productos Activos" y "Trueques Completados". • Sección "Tus Productos en TruequePlus" mostrando los productos del usuario en formato de cards con imagen, nombre y opciones de editar o eliminar. • Botón destacado "Publicar Producto" en la parte superior derecha.

🔖 Pantalla – Publicar Nuevo Producto

📌 Propósito: Guiar al usuario a través del proceso de añadir un nuevo producto para trueque en la plataforma.

🧩 Componentes: • Barra de navegación superior con opciones como "Explorar", "Mis Trueques", "Mensajes", "Publicar Producto" y un avatar de usuario. • Título "Publicar un Nuevo Producto" y una breve instrucción. • Sección "Detalles del Producto" con campos de texto para "Nombre del producto", un selector para "Categoría" y un área de texto grande para "Descripción detallada". • Sección "Sube una imagen" con un área de carga de archivos (arrastrar y soltar o hacer clic) e indicación de formatos y tamaño máximos. • Área de "Vista Previa" de la imagen seleccionada. • Botones "Cancelar" y "Publicar Producto".

🔖 Pantalla – Explorar Trueques

📌 Propósito: Permitir a los usuarios navegar y descubrir los productos disponibles para trueque en la plataforma.

🧩 Componentes: • Barra de navegación superior con opciones como "Explorar", "Mis Trueques", "Perfil" y un botón "Cerrar Sesión". • Título "Explora Todos los Trueques" y una barra de búsqueda para "Busca un producto...". • Opciones de filtro y ordenación: "Categoría", "Más Recientes", "Electrónica", "Hogar", "Ropa". • Grid de productos en formato de cards, cada una con imagen, nombre del producto y un botón "Ver Detalles". • Paginación en la parte inferior para navegar entre los resultados.

🔖 Pantalla – Detalle del Trueque

📌 Propósito: Mostrar la información completa de un producto específico, permitiendo al usuario interesado proponer un trueque y visualizar sus propios productos disponibles para ello.

🧩 Componentes: • Barra de navegación superior con el logo "TruequePlus", una barra de búsqueda, y enlaces a "Explorar", "Mis Trueques", "Mensajes" y notificaciones. • Migas de pan de navegación ("Inicio / Electrónica / Cámara Vintage Modelo X"). • Área principal con una imagen grande del producto y un carrusel de miniaturas en la parte inferior. • Información detallada del producto: "Electrónica", "Usado", "Cámara Vintage Modelo X", fecha de publicación, descripción completa. • Datos del usuario que publicó: avatar, nombre ("Carlos Pérez"), "Miembro desde 2022" y un enlace "Ver perfil". • Botón destacado "Proponer trueque". • Sección "Qué ofreces a cambio?" con una breve instrucción y una galería de los propios productos del usuario interesado, cada uno con imagen, nombre y un botón "Seleccionar".

🔖 Pantalla – Perfil del Usuario

📌 Propósito: Permitir al usuario ver y gestionar su información personal y su historial de trueques.

🧩 Componentes: • Barra de navegación superior con el logo "TruequePlus", y enlaces a "Inicio", "Mis Productos", "Notificaciones", "Mi Perfil", un icono de configuración y un toggle de modo claro/oscuro. • Título "Mi Perfil". • Panel lateral izquierdo con avatar de usuario, nombre de usuario, correo electrónico, una breve biografía, y botones "Editar Perfil" y "Cambiar Contraseña". • Sección principal "Historial de Trueques" con pestañas para "Trueques Propuestos" y "Trueques Aceptados". • Lista de trueques, cada uno mostrando una imagen de los productos involucrados, sus nombres y estados (Completado, Pendiente, Cancelado), y la fecha.


