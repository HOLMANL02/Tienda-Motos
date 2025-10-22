import { Injectable } from '@angular/core';

/**
 * Representa un producto de la tienda.
 */
export interface Product {
  id: number; /** Identificador único del producto */
  name: string; /** Nombre del producto */
  description: string; /** Descripción detallada del producto */
  price: number; /** Precio en pesos colombianos (COP) */
  image: string; /** Ruta de la imagen asociada al producto */
  category: string; /** Categoría del producto */
  features?: string[]; /** Características destacadas del producto */
  includes?: string[]; /** Elementos incluidos */
  slogan?: string; /** Frase promocional */
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { 
      id: 1, 
      name: 'Cama Doble "Serenity Dream"', 
      description: 'Cama Doble 150x190 cm',
      slogan: 'Experimenta el Lujo y Confort Absoluto',
      features: [
        'Diseño Vanguardista: Tapizada en lino beige elegante',
        'Estructura Roalsta: Fabricada con madera premium de alta durabilidad',
        'Confort Superior: Cabecero acolchado con relleno de espuma',
        'Medidas Ideales: 150x190 cm',
        'Fácil Montrojie: Incluye instrucciones detalladas'
      ],
      includes: [
        'Estructura de cama doble',
        'Base de listones reforzada'
      ],
      price: 1700000, 
      image: '/Imagenes/Cama1.jpg', 
      category: 'Camas' 
    },
    { 
      id: 2, 
      name: 'Cama SemiDoble "Comfort Plus"', 
      description: 'Cama SemiDoble 135x190cm',
      slogan: 'Tu Descanso, Nuestra Prioridad',
      features: [
        'Diseño Moderno: Acabado en tela suave al tacto',
        'Estructura Resistente: Madera maciza de primera calidad',
        'Cabecero Ergonómico: Ideal para leer o ver TV',
        'Medidas Perfectas: 135x190 cm',
        'Montaje Sencillo: Sistema de ensamble rápido'
      ],
      includes: [
        'Estructura de cama semidoble',
        'Base de soporte con listones'
      ],
      price: 1500000, 
      image: '/Imagenes/Cama2.jpg', 
      category: 'Camas' 
    },
    { 
      id: 3, 
      name: 'Closet "Organizador Premium"', 
      description: 'Closet 160x58cm',
      slogan: 'Organiza tu Vida con Estilo',
      features: [
        'Diseño Funcional: Múltiples compartimentos',
        'Materiales de Calidad: Melamina resistente',
        'Acabados Elegantes: Bordes con tratamiento anti-impacto',
        'Dimensiones Ideales: 160x58 cm',
        'Fácil Instalación: Incluye herrajes de montaje'
      ],
      includes: [
        'Estructura del closet',
        'Barras para colgar',
        'Estantes ajustables'
      ],
      price: 1300000, 
      image: '/Imagenes/Closet1.png', 
      category: 'Closet' 
    },
    { 
      id: 4, 
      name: 'Closet "Space Saver"', 
      description: 'Closet 180x60cm',
      slogan: 'Más Espacio, Mejor Orden',
      features: [
        'Diseño Amplio: Mayor capacidad de almacenamiento',
        'Construcción Robusta: Soporta gran peso',
        'Acabado Profesional: Bordes sellados',
        'Medidas Generosas: 180x60 cm',
        'Sistema Modular: Personalizable según tus necesidades'
      ],
      includes: [
        'Estructura completa',
        'Cajones deslizantes',
        'Barras cromadas'
      ],
      price: 900000, 
      image: '/Imagenes/Closet2.png', 
      category: 'Closet' 
    },
    { 
      id: 5, 
      name: 'Sala "Basic Elegance"', 
      description: 'Sala Basic',
      slogan: 'Confort y Estilo en tu Hogar',
      features: [
        'Diseño Contemporáneo: Líneas modernas y limpias',
        'Tapizado Premium: Tela resistente y fácil de limpiar',
        'Estructura Sólida: Bastidor de madera reforzado',
        'Cojines Incluidos: Relleno de espuma de alta densidad',
        'Versatilidad: Se adapta a cualquier decoración'
      ],
      includes: [
        'Sofá de 3 puestos',
        'Cojines decorativos'
      ],
      price: 1200000, 
      image: '/Imagenes/Sala1.png', 
      category: 'Salas' 
    },
    { 
      id: 6, 
      name: 'Sala "Complete Living"', 
      description: 'Sala + Mesita + 4 Puf',
      slogan: 'Todo lo que Necesitas para tu Sala',
      features: [
        'Set Completo: Sofá, mesa y puffs coordinados',
        'Diseño Integral: Elementos que combinan perfectamente',
        'Materiales Premium: Durabilidad garantizada',
        'Multifuncional: Ideal para recibir visitas',
        'Fácil Mantenimiento: Tapizado antimanchas'
      ],
      includes: [
        'Sofá de 3 puestos',
        'Mesa de centro',
        '4 puffs auxiliares',
        'Cojines decorativos'
      ],
      price: 2000000, 
      image: '/Imagenes/Sala2.png', 
      category: 'Salas' 
    },
    { 
      id: 7, 
      name: 'Escritorio "Work Station"', 
      description: 'Escritorio 120x60cm',
      slogan: 'Productividad con Estilo',
      features: [
        'Diseño Ergonómico: Altura ideal para trabajo',
        'Superficie Amplia: 120x60 cm de espacio útil',
        'Material Resistente: Tablero melamínico de alta calidad',
        'Acabado Moderno: Resistente a rayones',
        'Fácil Montaje: Sistema de ensamble intuitivo'
      ],
      includes: [
        'Estructura del escritorio',
        'Cajón organizador',
        'Pasacables integrado'
      ],
      price: 700000, 
      image: '/Imagenes/Escritorio1.jpg', 
      category: 'Escritorios' 
    },
    { 
      id: 8, 
      name: 'Escritorio "Executive Desk"', 
      description: 'Escritorio 140x70cm',
      slogan: 'El Espacio Perfecto para tus Ideas',
      features: [
        'Diseño Ejecutivo: Elegancia y funcionalidad',
        'Dimensiones Amplias: 140x70 cm',
        'Materiales Premium: Acabado de lujo',
        'Sistema de Organización: Múltiples compartimentos',
        'Estructura Reforzada: Soporta equipos pesados'
      ],
      includes: [
        'Escritorio completo',
        'Cajones con cerradura',
        'Organizador de cables'
      ],
      price: 900000, 
      image: '/Imagenes/Escritorio2.jpg', 
      category: 'Escritorios' 
    },
    { 
      id: 9, 
      name: 'Comedor "Family Table"', 
      description: 'Comedor 4 Sillas',
      slogan: 'Donde la Familia se Reúne',
      features: [
        'Diseño Clásico: Atemporal y elegante',
        'Set Completo: Mesa y 4 sillas coordinadas',
        'Madera Resistente: Durabilidad garantizada',
        'Acabado Protector: Barniz anti-manchas',
        'Capacidad Ideal: Para 4 personas cómodamente'
      ],
      includes: [
        'Mesa de comedor',
        '4 sillas tapizadas',
        'Protector de mesa'
      ],
      price: 800000, 
      image: '/Imagenes/Comedor1.jpg', 
      category: 'Comedores' 
    },
    { 
      id: 10, 
      name: 'Comedor "Grand Dining"', 
      description: 'Comedor 6 Sillas',
      slogan: 'Espacio para Compartir Momentos',
      features: [
        'Diseño Amplio: Perfecto para reuniones familiares',
        'Set de 7 Piezas: Mesa extensible y 6 sillas',
        'Construcción Sólida: Madera maciza de calidad',
        'Acabado Refinado: Detalles elegantes',
        'Versatilidad: Mesa con opción de extensión'
      ],
      includes: [
        'Mesa extensible',
        '6 sillas con respaldo alto',
        'Mantel de obsequio'
      ],
      price: 1200000, 
      image: '/Imagenes/Comedor2.jpg', 
      category: 'Comedores' 
    },
    { 
      id: 11, 
      name: 'Silla de Oficina "ErgoPlus"', 
      description: 'Silla Ergonómica Negra',
      slogan: 'Comodidad Durante Toda tu Jornada',
      features: [
        'Diseño Ergonómico: Soporte lumbar ajustable',
        'Materiales Premium: Malla transpirable',
        'Ajuste de Altura: Sistema neumático',
        'Reposabrazos Ajustables: Máximo confort',
        'Base Giratoria: Ruedas de alta calidad'
      ],
      includes: [
        'Silla ergonómica',
        'Cojín lumbar',
        'Manual de ajustes'
      ],
      price: 300000, 
      image: '/Imagenes/Silla1.jpg', 
      category: 'Sillas' 
    },
    { 
      id: 12, 
      name: 'Silla de Comedor "Classic Wood"', 
      description: 'Silla de Madera y Tela',
      slogan: 'Elegancia Natural',
      features: [
        'Diseño Tradicional: Elegancia atemporal',
        'Madera Noble: Acabado natural',
        'Tapizado Confortable: Tela suave y resistente',
        'Estructura Reforzada: Durabilidad superior',
        'Fácil Limpieza: Mantenimiento sencillo'
      ],
      includes: [
        'Silla de comedor',
        'Protectores de piso'
      ],
      price: 130000, 
      image: '/Imagenes/Silla2.jpg', 
      category: 'Sillas' 
    },
    { 
      id: 13, 
      name: 'Mesa de Centro "Modern Style"', 
      description: 'Mesa de Centro Moderna',
      slogan: 'El Centro de tu Sala',
      features: [
        'Diseño Minimalista: Líneas contemporáneas',
        'Material Resistente: Tablero de alta calidad',
        'Acabado Elegante: Superficie lisa y brillante',
        'Tamaño Versátil: Se adapta a diferentes espacios',
        'Fácil Mantenimiento: Limpieza simple'
      ],
      includes: [
        'Mesa de centro',
        'Patas metálicas',
        'Niveladores ajustables'
      ],
      price: 400000, 
      image: '/Imagenes/Mesa1.jpg', 
      category: 'Mesas' 
    },
    { 
      id: 14, 
      name: 'Mesa Auxiliar "Wood Touch"', 
      description: 'Mesa Auxiliar de Madera',
      slogan: 'Funcionalidad con Estilo',
      features: [
        'Diseño Compacto: Perfecta para espacios reducidos',
        'Madera Natural: Vetas únicas',
        'Versatilidad: Úsala donde la necesites',
        'Acabado Artesanal: Atención al detalle',
        'Fácil Movilidad: Ligera y resistente'
      ],
      includes: [
        'Mesa auxiliar',
        'Protectores de superficie'
      ],
      price: 250000, 
      image: '/Imagenes/Mesa2.jpg', 
      category: 'Mesas' 
    },
    { 
      id: 15, 
      name: 'Mueble de TV "Media Center"', 
      description: 'Mueble de TV 120cm',
      slogan: 'Organiza tu Entretenimiento',
      features: [
        'Diseño Moderno: Líneas limpias y funcionales',
        'Dimensión Ideal: 120 cm de ancho',
        'Compartimentos Múltiples: Organización perfecta',
        'Gestión de Cables: Sistema integrado',
        'Material Resistente: Soporta pantallas grandes'
      ],
      includes: [
        'Mueble para TV',
        'Estantes ajustables',
        'Sistema de organización de cables'
      ],
      price: 600000, 
      image: '/Imagenes/MuebleTV1.jpg', 
      category: 'Muebles de TV' 
    },
    { 
      id: 16, 
      name: 'Mueble de TV "Entertainment Plus"', 
      description: 'Mueble de TV 150cm',
      slogan: 'Tu Centro de Entretenimiento Completo',
      features: [
        'Diseño Amplio: 150 cm de espacio',
        'Múltiples Niveles: Organización optimizada',
        'Acabado Premium: Detalles de calidad',
        'Capacidad de Carga: Soporta TVs hasta 65"',
        'Cajones Incluidos: Almacenamiento extra'
      ],
      includes: [
        'Mueble para TV',
        'Cajones con rieles metálicos',
        'Repisas de vidrio templado'
      ],
      price: 1200000, 
      image: '/Imagenes/MuebleTV2.jpg', 
      category: 'Muebles de TV' 
    },
    { 
      id: 17, 
      name: 'Biblioteca "Book Tower"', 
      description: 'Biblioteca Alta 180cm',
      slogan: 'Organiza tu Conocimiento',
      features: [
        'Diseño Vertical: Aprovecha el espacio',
        'Altura Generosa: 180 cm de almacenamiento',
        'Estantes Ajustables: Personaliza tu espacio',
        'Material Resistente: Soporta gran peso',
        'Acabado Profesional: Detalles cuidados'
      ],
      includes: [
        'Biblioteca de 180cm',
        'Estantes regulables',
        'Sistema anti-volcamiento'
      ],
      price: 700000, 
      image: '/Imagenes/Biblioteca1.jpg', 
      category: 'Bibliotecas' 
    },
    { 
      id: 18, 
      name: 'Biblioteca "Compact Library"', 
      description: 'Biblioteca Baja 120cm',
      slogan: 'Estilo y Funcionalidad a tu Alcance',
      features: [
        'Diseño Horizontal: Ideal para espacios bajos',
        'Dimensión Práctica: 120 cm de ancho',
        'Múltiples Compartimentos: Organización versátil',
        'Acabado Elegante: Se integra a cualquier decoración',
        'Base Reforzada: Estabilidad garantizada'
      ],
      includes: [
        'Biblioteca de 120cm',
        'Divisores ajustables',
        'Cajón organizador'
      ],
      price: 900000, 
      image: '/Imagenes/Biblioteca2.jpg', 
      category: 'Bibliotecas' 
    },
    { 
      id: 19, 
      name: 'Mueble de Exterior "Rattan Garden"', 
      description: 'Mueble de Exterior Rattan',
      slogan: 'Disfruta al Aire Libre',
      features: [
        'Diseño Resistente: Materiales para exteriores',
        'Rattan Sintético: No se deteriora con el clima',
        'Cojines Impermeables: Protección contra agua',
        'Fácil Limpieza: Mantenimiento mínimo',
        'Estilo Moderno: Elegancia para tu jardín'
      ],
      includes: [
        'Set de muebles de rattan',
        'Cojines impermeables',
        'Funda protectora'
      ],
      price: 1300000, 
      image: '/Imagenes/MuebleExterior1.jpg', 
      category: 'Muebles de Exterior' 
    },
    { 
      id: 20, 
      name: 'Mueble de Exterior "Wood Nature"', 
      description: 'Mueble de Exterior Madera',
      slogan: 'Naturaleza en tu Terraza',
      features: [
        'Madera Tratada: Resistente a la intemperie',
        'Diseño Robusto: Construcción sólida',
        'Acabado Natural: Belleza rústica',
        'Tratamiento Protector: Barniz especial para exterior',
        'Confort Superior: Ergonomía pensada para relajación'
      ],
      includes: [
        'Set de muebles de madera',
        'Cojines para exterior',
        'Kit de mantenimiento'
      ],
      price: 2300000, 
      image: '/Imagenes/MuebleExterior2.jpg', 
      category: 'Muebles de Exterior' 
    },
    { 
      id: 21, 
      name: 'Cojín Decorativo "Blue Comfort"', 
      description: 'Cojín Decorativo Azul',
      slogan: 'Dale Color a tu Espacio',
      features: [
        'Diseño Elegante: Color azul vibrante',
        'Tela Premium: Suave al tacto',
        'Relleno de Calidad: Mantiene su forma',
        'Funda Removible: Fácil de lavar',
        'Versátil: Combina con cualquier decoración'
      ],
      includes: [
        'Cojín decorativo',
        'Funda con cierre'
      ],
      price: 80000, 
      image: '/Imagenes/Accesorio1.jpg', 
      category: 'Accesorios' 
    },
    { 
      id: 22, 
      name: 'Lámpara de Mesa "Light Style"', 
      description: 'Lámpara de Mesa Moderna',
      slogan: 'Ilumina con Estilo',
      features: [
        'Diseño Contemporáneo: Elegancia moderna',
        'Iluminación Eficiente: LED de bajo consumo',
        'Base Estable: No se voltea fácilmente',
        'Interruptor Touch: Control intuitivo',
        'Acabado Premium: Materiales de calidad'
      ],
      includes: [
        'Lámpara de mesa',
        'Bombillo LED',
        'Cable de alimentación'
      ],
      price: 120000, 
      image: '/Imagenes/Accesorio2.jpg', 
      category: 'Accesorios' 
    },
    { 
      id: 23, 
      name: 'Reloj de Pared "Vintage Time"', 
      description: 'Reloj de Pared Vintage',
      slogan: 'El Tiempo con Estilo',
      features: [
        'Diseño Retro: Estética vintage',
        'Mecanismo Silencioso: No hace ruido',
        'Números Grandes: Fácil lectura',
        'Acabado Envejecido: Efecto antiguo',
        'Batería de Larga Duración: Bajo mantenimiento'
      ],
      includes: [
        'Reloj de pared',
        'Kit de montaje',
        'Batería incluida'
      ],
      price: 90000, 
      image: '/Imagenes/Accesorio3.jpg', 
      category: 'Accesorios' 
    },
    { 
      id: 24, 
      name: 'Alfombra "Persian Design"', 
      description: 'Alfombra Persa 200x300cm',
      slogan: 'Elegancia Bajo tus Pies',
      features: [
        'Diseño Persa: Patrones tradicionales',
        'Tamaño Generoso: 200x300 cm',
        'Materiales de Calidad: Fibras resistentes',
        'Colores Vibrantes: No se destiñen',
        'Antideslizante: Base segura'
      ],
      includes: [
        'Alfombra persa',
        'Base antideslizante',
        'Instrucciones de cuidado'
      ],
      price: 400000, 
      image: '/Imagenes/Accesorio4.jpg', 
      category: 'Accesorios' 
    },
    { 
      id: 25, 
      name: 'Mesa de Noche "Night Storage"', 
      description: 'Mesa de Noche con Cajones',
      slogan: 'Todo a tu Alcance',
      features: [
        'Diseño Funcional: Múltiples cajones',
        'Tamaño Perfecto: Ideal junto a la cama',
        'Cajones Deslizantes: Apertura suave',
        'Superficie Amplia: Espacio para lámpara y más',
        'Acabado Elegante: Detalles cuidados'
      ],
      includes: [
        'Mesa de noche',
        'Cajones con rieles',
        'Manijas metálicas'
      ],
      price: 350000, 
      image: '/Imagenes/MesaNoche1.jpg', 
      category: 'Mesas de Noche' 
    },
    { 
      id: 26, 
      name: 'Mesa de Noche "Minimal Night"', 
      description: 'Mesa de Noche Minimalista',
      slogan: 'Simplicidad Elegante',
      features: [
        'Diseño Minimalista: Líneas simples',
        'Espacio Optimizado: Perfecto para espacios reducidos',
        'Acabado Moderno: Estética contemporánea',
        'Fácil Limpieza: Superficie lisa',
        'Construcción Sólida: Durabilidad garantizada'
      ],
      includes: [
        'Mesa de noche',
        'Estante inferior',
        'Protectores de piso'
      ],
      price: 250000, 
      image: '/Imagenes/MesaNoche2.jpg', 
      category: 'Mesas de Noche' 
    },
    { 
      id: 27, 
      name: 'Sofá Cama "Convert Comfort"', 
      description: 'Sofá Cama 3 Plazas',
      slogan: 'Dos Muebles en Uno',
      features: [
        'Diseño Convertible: De sofá a cama en segundos',
        'Capacidad 3 Personas: Amplio y cómodo',
        'Mecanismo Resistente: Sistema de conversión duradero',
        'Colchón Incluido: Espuma de alta densidad',
        'Tapizado Premium: Fácil de limpiar'
      ],
      includes: [
        'Sofá cama',
        'Colchón integrado',
        'Cojines decorativos'
      ],
      price: 1800000, 
      image: '/Imagenes/SofaCama1.jpg', 
      category: 'Sofás Cama' 
    },
    { 
      id: 28, 
      name: 'Sofá Cama "Compact Sleep"', 
      description: 'Sofá Cama 2 Plazas',
      slogan: 'Espacio Inteligente',
      features: [
        'Diseño Compacto: Ideal para apartamentos',
        'Sistema Desplegable: Fácil conversión',
        'Capacidad 2 Personas: Perfecto para parejas',
        'Estructura Reforzada: Alta resistencia',
        'Acabado Moderno: Estilo contemporáneo'
      ],
      includes: [
        'Sofá cama',
        'Colchoneta plegable',
        'Cojines incluidos'
      ],
      price: 1500000, 
      image: '/Imagenes/SofaCama2.jpg', 
      category: 'Sofás Cama' 
    },
    { 
      id: 29, 
      name: 'Taburete "Bar High"', 
      description: 'Taburete Alto de Bar',
      slogan: 'Estilo para tu Barra',
      features: [
        'Diseño Alto: Perfecto para barras',
        'Base Giratoria: Movimiento 360°',
        'Altura Regulable: Ajuste neumático',
        'Asiento Acolchado: Máximo confort',
        'Base Metálica: Resistente y elegante'
      ],
      includes: [
        'Taburete de bar',
        'Base cromada',
        'Reposapiés circular'
      ],
      price: 120000, 
      image: '/Imagenes/Taburete1.jpg', 
      category: 'Taburetes' 
    },
    { 
      id: 30, 
      name: 'Taburete "Wood Low"', 
      description: 'Taburete Bajo de Madera',
      slogan: 'Funcionalidad Natural',
      features: [
        'Diseño Bajo: Versátil y práctico',
        'Madera Maciza: Construcción sólida',
        'Acabado Natural: Belleza rústica',
        'Fácil Movilidad: Ligero pero resistente',
        'Uso Múltiple: Perfecto para cualquier espacio'
      ],
      includes: [
        'Taburete de madera',
        'Protectores de piso'
      ],
      price: 100000, 
      image: '/Imagenes/Taburete2.jpg', 
      category: 'Taburetes' 
    },
    { 
      id: 31, 
      name: 'Lámpara de Pie "Modern Light"', 
      description: 'Lámpara de Pie Moderna',
      slogan: 'Ilumina con Elegancia',
      features: [
        'Diseño Contemporáneo: Estética moderna',
        'Altura Ajustable: Se adapta a tus necesidades',
        'Iluminación Direccional: Enfoca donde necesites',
        'Base Estable: No se voltea',
        'Acabado Premium: Materiales de calidad'
      ],
      includes: [
        'Lámpara de pie',
        'Bombillo LED',
        'Interruptor de pie'
      ],
      price: 220000, 
      image: '/Imagenes/LamparaPie1.jpg', 
      category: 'Lámparas de Pie' 
    },
    { 
      id: 32, 
      name: 'Lámpara de Pie "Classic Glow"', 
      description: 'Lámpara de Pie Clásica',
      slogan: 'Elegancia Tradicional',
      features: [
        'Diseño Clásico: Estilo atemporal',
        'Pantalla de Tela: Luz difusa y cálida',
        'Base de Madera: Acabado noble',
        'Interruptor de Cadena: Detalles vintage',
        'Estabilidad: Base pesada y segura'
      ],
      includes: [
        'Lámpara de pie',
        'Pantalla de tela',
        'Bombillo incluido'
      ],
      price: 180000, 
      image: '/Imagenes/LamparaPie2.jpg', 
      category: 'Lámparas de Pie' 
    },
    { 
      id: 33, 
      name: 'Perchero "Wood Stand"', 
      description: 'Perchero de Pie de Madera',
      slogan: 'Organiza tu Entrada',
      features: [
        'Diseño de Pie: No requiere instalación',
        'Madera Natural: Acabado elegante',
        'Múltiples Ganchos: Amplia capacidad',
        'Base Estable: No se voltea',
        'Fácil Ensamble: Montaje rápido'
      ],
      includes: [
        'Perchero de pie',
        'Base circular',
        'Ganchos incluidos'
      ],
      price: 150000, 
      image: '/Imagenes/Perchero1.jpg', 
      category: 'Percheros' 
    },
    { 
      id: 34, 
      name: 'Perchero "Metal Wall"', 
      description: 'Perchero de Pared Metálico',
      slogan: 'Ahorra Espacio con Estilo',
      features: [
        'Diseño de Pared: Optimiza tu espacio',
        'Metal Resistente: Construcción duradera',
        'Acabado Cromado: Elegante y moderno',
        'Fácil Instalación: Incluye herrajes',
        'Capacidad Alta: Soporta gran peso'
      ],
      includes: [
        'Perchero de pared',
        'Kit de montaje',
        'Tornillos y tacos'
      ],
      price: 80000, 
      image: '/Imagenes/Perchero2.jpg', 
      category: 'Percheros' 
    },
    { 
      id: 35, 
      name: 'Espejo de Pared "Round Mirror"', 
      description: 'Espejo de Pared Redondo',
      slogan: 'Amplía tu Espacio Visualmente',
      features: [
        'Diseño Redondo: Forma moderna',
        'Cristal de Alta Calidad: Reflejo nítido',
        'Marco Elegante: Acabado premium',
        'Fácil Instalación: Sistema de colgado seguro',
        'Tamaño Ideal: Perfecto para cualquier pared'
      ],
      includes: [
        'Espejo redondo',
        'Sistema de montaje',
        'Protector de pared'
      ],
      price: 130000, 
      image: '/Imagenes/Espejo1.jpg', 
      category: 'Espejos' 
    },
    { 
      id: 36, 
      name: 'Espejo de Pared "Square Design"', 
      description: 'Espejo de Pared Cuadrado',
      slogan: 'Elegancia Geométrica',
      features: [
        'Diseño Cuadrado: Líneas definidas',
        'Cristal Premium: Sin distorsión',
        'Marco Minimalista: Estilo contemporáneo',
        'Versátil: Horizontal o vertical',
        'Calidad Superior: Biselado en los bordes'
      ],
      includes: [
        'Espejo cuadrado',
        'Herrajes de montaje',
        'Nivel de burbuja'
      ],
      price: 110000, 
      image: '/Imagenes/Espejo2.jpg', 
      category: 'Espejos' 
    },
    { 
      id: 37, 
      name: 'Colchón "Foam Dream"', 
      description: 'Colchón Espuma 140x190cm',
      slogan: 'Descanso Reparador Garantizado',
      features: [
        'Espuma de Alta Densidad: Soporte óptimo',
        'Dimensiones Ideales: 140x190 cm',
        'Hipoalergénico: Protección contra ácaros',
        'Funda Removible: Fácil de lavar',
        'Garantía Extendida: Durabilidad comprobada'
      ],
      includes: [
        'Colchón de espuma',
        'Funda protectora',
        'Certificado de garantía'
      ],
      price: 600000, 
      image: '/Imagenes/Colchon1.jpg', 
      category: 'Colchones' 
    },
    { 
      id: 38, 
      name: 'Colchón "Spring Comfort"', 
      description: 'Colchón Resortes 150x200cm',
      slogan: 'La Tecnología del Mejor Descanso',
      features: [
        'Sistema de Resortes: Soporte independiente',
        'Dimensiones Premium: 150x200 cm',
        'Capas de Confort: Espuma viscoelástica',
        'Ventilación Perfecta: Transpirable',
        'Refuerzo en Bordes: Mayor durabilidad'
      ],
      includes: [
        'Colchón de resortes',
        'Protector acolchado',
        'Manual de cuidado'
      ],
      price: 900000, 
      image: '/Imagenes/Colchon2.jpg', 
      category: 'Colchones' 
    }
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }
}