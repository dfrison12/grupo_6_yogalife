-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 08-02-2022 a las 05:24:17
-- Versión del servidor: 5.7.33
-- Versión de PHP: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `yogalife_db`
--
CREATE DATABASE IF NOT EXISTS `yogalife_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `yogalife_db`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` int(5) NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Otra Categoria'),
(2, 'Mysore Supplex'),
(3, 'Yoga Trip Coleccion'),
(4, 'Yoga Trip Arizona Coleccion'),
(5, 'Classic Coleccion'),
(6, 'Yoga Freestyle');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colors`
--

DROP TABLE IF EXISTS `colors`;
CREATE TABLE `colors` (
  `id` int(5) NOT NULL,
  `color_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `color_originalname` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `colors`
--

INSERT INTO `colors` (`id`, `color_name`, `color_originalname`) VALUES
(1, 'bosque-encantado', 'bosque-encantado.jpg'),
(2, 'hora-magica', 'hora-magica.jpg'),
(3, 'selva', 'selva.jpg'),
(4, 'tibet', 'tibet.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `images`
--

DROP TABLE IF EXISTS `images`;
CREATE TABLE `images` (
  `id` int(5) NOT NULL,
  `image_originalname` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `images`
--

INSERT INTO `images` (`id`, `image_originalname`) VALUES
(1, 'topO-vishnu-1.jpg'),
(2, 'topO-vishnu-2.jpg'),
(3, 'topO-vishnu-3.jpg'),
(4, 'topO-vishnu-4.jpg'),
(5, 'legging38-yogaTrip-1.jpg'),
(6, 'legging38-yogaTrip-2.jpg'),
(7, 'legging38-yogaTrip-3.jpg'),
(8, 'legging38-yogaTrip-4.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `id` int(10) NOT NULL,
  `user_id` int(5) NOT NULL,
  `ammount` int(6) NOT NULL,
  `order_adress` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `order_email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `order_status` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `order_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `order_detail`
--

DROP TABLE IF EXISTS `order_detail`;
CREATE TABLE `order_detail` (
  `id` int(5) NOT NULL,
  `order_id` int(5) NOT NULL,
  `product_id` int(5) NOT NULL,
  `price` int(5) NOT NULL,
  `sku` varchar(9) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quatity` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` int(5) NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cost` int(5) DEFAULT NULL,
  `price` int(5) DEFAULT NULL,
  `discount` int(5) DEFAULT NULL,
  `descriptions` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `stock` int(5) DEFAULT NULL,
  `image_1` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image_2` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image_3` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image_4` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `cost`, `price`, `discount`, `descriptions`, `category_id`, `stock`, `image_1`, `image_2`, `image_3`, `image_4`) VALUES
(3, 'Legging 3/8 Yoga Trip', 2500, 5600, 5, 'Nuevo! Top Yoguini Monte\r\n\r\nNuevo diseño de Top, muy cómodo y con excelente sostén. Breteles rectos, espalda escotada para sumar frescura, y costados cerrados para darte seguridad durante la práctica sabiendo que todo queda donde debe estar! Trae recortes en su delantera realizados con costuras planas, garantizándote confort y libertad de movimiento. Está internamente forrado en algodón garantizándote un contacto suave con tu piel.', 3, 4, 'legging38-yogaTrip-1.jpg', 'legging38-yogaTrip-2.jpg', 'legging38-yogaTrip-3.jpg', 'legging38-yogaTrip-4.jpg'),
(4, 'Leggign 7/8 Yoga Trip', 4500, 8000, 10, 'Nuevo! Leggign 7/8 Yoga TripTela: Está confeccionada en Polisap, una tela deportiva inteligente de alta calidad. Cede para permitirte mayor elongación y libertad de movimiento, y no pierde sus propiedades con el uso. Es de fácil lavado y secado rápido. No transparenta. No se arruga.', 3, 4, 'legging78-yogaTripArizona-1.jpg', 'legging78-yogaTripArizona-2.jpg', 'legging78-yogaTripArizona-3.jpg', 'legging78-yogaTripArizona-4.jpg'),
(5, 'Legging Larga', 3500, 5000, 0, 'Tela: Está confeccionada en Polisap, una tela deportiva inteligente de alta calidad. Cede para permitirte mayor elongación y libertad de movimiento, y no pierde sus propiedades con el uso. Es de fácil lavado y secado rápido. No transparenta. No se arruga.\r\n\r\nMonte está inspirada en cada árbol, planta, flor, semilla. En las raíces que dialogan entre sí tejiendo redes subterráneas. Monte es un reflejo de nuestra vida en comunidad, brindándonos apoyo, protección y respeto. Sanándonos unxs a otrxs, como lo hacen los árboles que fortalecen su vínculo en la profundidad del suelo. Monte es poder reconocer la inteligencia emocional que compartimos entre reinos y que nos enlaza como partes perfectas y necesarias de un Todo.\r\n\r\nGARANTIA por 6 meses (ver detalle)\r\n\r\n \r\n\r\nBolsa luleå GRATIS con tu compra superior a $7.500', 5, 4, 'leggingLarga-cns-2.JPG', 'leggingLarga-cns-2.JPG', 'leggingLarga-CNS-3.JPG', 'leggingLarga-cns-1.JPG'),
(6, 'Legging 7/8 White Om', 3400, 5700, 5, 'Tela: Está confeccionada en Polisap, una tela deportiva inteligente de alta calidad. Cede para permitirte mayor elongación y libertad de movimiento, y no pierde sus propiedades con el uso. Es de fácil lavado y secado rápido. No transparenta. No se arruga.\r\n\r\nMonte está inspirada en cada árbol, planta, flor, semilla. En las raíces que dialogan entre sí tejiendo redes subterráneas. Monte es un reflejo de nuestra vida en comunidad, brindándonos apoyo, protección y respeto. Sanándonos unxs a otrxs, como lo hacen los árboles que fortalecen su vínculo en la profundidad del suelo. Monte es poder reconocer la inteligencia emocional que compartimos entre reinos y que nos enlaza como partes perfectas y necesarias de un Todo.\r\n\r\nGARANTIA por 6 meses (ver detalle)', 6, 4, 'legging-yogaFreestyle-1.jpg', 'legging-yogaFreestyle-2.jpg', 'legging-yogaFreestyle-3.jpg', 'legging-yogaFreestyle-4.jpg'),
(7, 'Maillot Yoga Trip', 4200, 6000, 0, 'Tela: Está confeccionada en Polisap, una tela deportiva inteligente de alta calidad. Cede para permitirte mayor elongación y libertad de movimiento, y no pierde sus propiedades con el uso. Es de fácil lavado y secado rápido. No transparenta. No se arruga.\r\n\r\nMonte está inspirada en cada árbol, planta, flor, semilla. En las raíces que dialogan entre sí tejiendo redes subterráneas. Monte es un reflejo de nuestra vida en comunidad, brindándonos apoyo, protección y respeto. Sanándonos unxs a otrxs, como lo hacen los árboles que fortalecen su vínculo en la profundidad del suelo. Monte es poder reconocer la inteligencia emocional que compartimos entre reinos y que nos enlaza como partes perfectas y necesarias de un Todo.\r\n\r\nGARANTIA por 6 meses (ver detalle)\r\n\r\n \r\n\r\nBolsa luleå GRATIS con tu compra superior a $7.500', 3, 6, 'maillot-yogaTrip-1.jpg', 'maillot-yogaTrip-2.jpg', 'maillot-yogaTrip-3.jpg', 'maillot-yogaTrip-4.jpg'),
(8, 'Top Vinshu Yoga Trip', 2000, 4000, 5, 'Tela: Está confeccionada en Polisap, una tela deportiva inteligente de alta calidad. Cede para permitirte mayor elongación y libertad de movimiento, y no pierde sus propiedades con el uso. Es de fácil lavado y secado rápido. No transparenta. No se arruga.\r\n\r\nMonte está inspirada en cada árbol, planta, flor, semilla. En las raíces que dialogan entre sí tejiendo redes subterráneas. Monte es un reflejo de nuestra vida en comunidad, brindándonos apoyo, protección y respeto. Sanándonos unxs a otrxs, como lo hacen los árboles que fortalecen su vínculo en la profundidad del suelo. Monte es poder reconocer la inteligencia emocional que compartimos entre reinos y que nos enlaza como partes perfectas y necesarias de un Todo.\r\n\r\nGARANTIA por 6 meses (ver detalle)\r\n\r\n \r\n\r\nBolsa luleå GRATIS con tu compra superior a $7.500', 3, 4, 'topO-vishnu-3.jpg', 'topO-vishnu-2.jpg', 'topO-vishnu-1.jpg', 'topO-vishnu-4.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_color`
--

DROP TABLE IF EXISTS `product_color`;
CREATE TABLE `product_color` (
  `id` int(5) NOT NULL,
  `product_id` int(5) NOT NULL,
  `color_id` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_image`
--

DROP TABLE IF EXISTS `product_image`;
CREATE TABLE `product_image` (
  `id` int(5) NOT NULL,
  `product_id` int(5) NOT NULL,
  `image_id` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_size`
--

DROP TABLE IF EXISTS `product_size`;
CREATE TABLE `product_size` (
  `id` int(5) NOT NULL,
  `size_id` int(5) NOT NULL,
  `product_id` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sizes`
--

DROP TABLE IF EXISTS `sizes`;
CREATE TABLE `sizes` (
  `id` int(5) NOT NULL,
  `size_letter` char(2) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `sizes`
--

INSERT INTO `sizes` (`id`, `size_letter`) VALUES
(1, 'S'),
(2, 'M'),
(3, 'L'),
(4, 'XL');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(5) NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `full_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dni` int(8) NOT NULL,
  `user_category_id` tinyint(1) NOT NULL,
  `address` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'avatar_default.jpg'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `full_name`, `dni`, `user_category_id`, `address`, `avatar`) VALUES
(22, 'dariohfrison@gmail.com', '$2a$10$d2I.2B93JVqg7OiogR/Ooe5iNRzfE3MAEGKn84qnn9yykgYoSSOdi', 'Dario Frison', 37094890, 2, 'Av Mitre 1500, Villa Mercedes, San Luis', 'user_default.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_categories`
--

DROP TABLE IF EXISTS `user_categories`;
CREATE TABLE `user_categories` (
  `id` tinyint(1) NOT NULL,
  `category_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `user_categories`
--

INSERT INTO `user_categories` (`id`, `category_name`) VALUES
(1, 'Usuario'),
(2, 'Administrador');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_id_order` (`user_id`);

--
-- Indices de la tabla `order_detail`
--
ALTER TABLE `order_detail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_order_id` (`order_id`),
  ADD KEY `fk_product_id_order` (`product_id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_id_category` (`category_id`);

--
-- Indices de la tabla `product_color`
--
ALTER TABLE `product_color`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_product_id_color` (`product_id`),
  ADD KEY `fk_color_id_color` (`color_id`);

--
-- Indices de la tabla `product_image`
--
ALTER TABLE `product_image`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_image_id_image` (`image_id`),
  ADD KEY `fk_product_id_image` (`product_id`);

--
-- Indices de la tabla `product_size`
--
ALTER TABLE `product_size`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_product_id` (`product_id`),
  ADD KEY `fk_size_id` (`size_id`);

--
-- Indices de la tabla `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_id_user_category` (`user_category_id`);

--
-- Indices de la tabla `user_categories`
--
ALTER TABLE `user_categories`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `colors`
--
ALTER TABLE `colors`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `images`
--
ALTER TABLE `images`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `order_detail`
--
ALTER TABLE `order_detail`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `product_color`
--
ALTER TABLE `product_color`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `product_image`
--
ALTER TABLE `product_image`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `product_size`
--
ALTER TABLE `product_size`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sizes`
--
ALTER TABLE `sizes`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `user_categories`
--
ALTER TABLE `user_categories`
  MODIFY `id` tinyint(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `fk_user_id_order` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `fk_id_category` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `product_size`
--
ALTER TABLE `product_size`
  ADD CONSTRAINT `fk_product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_size_id` FOREIGN KEY (`size_id`) REFERENCES `sizes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `fk_id_user_category` FOREIGN KEY (`user_category_id`) REFERENCES `user_categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
