-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               12.2.2-MariaDB - MariaDB Server
-- Server OS:                    Win64
-- HeidiSQL Version:             12.17.0.7270
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for taller_de_programacion_db
CREATE DATABASE IF NOT EXISTS `taller_de_programacion_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci */;
USE `taller_de_programacion_db`;

-- Dumping structure for table taller_de_programacion_db.addresses
CREATE TABLE IF NOT EXISTS `addresses` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `state` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `postal_code` varchar(255) NOT NULL,
  `street` varchar(255) NOT NULL,
  `number` int(11) NOT NULL,
  `floor` varchar(255) DEFAULT NULL,
  `apartment` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `addresses_user_id_foreign` (`user_id`),
  CONSTRAINT `addresses_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table taller_de_programacion_db.addresses: ~0 rows (approximately)

-- Dumping structure for table taller_de_programacion_db.cache
CREATE TABLE IF NOT EXISTS `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` bigint(20) NOT NULL,
  PRIMARY KEY (`key`),
  KEY `cache_expiration_index` (`expiration`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table taller_de_programacion_db.cache: ~0 rows (approximately)

-- Dumping structure for table taller_de_programacion_db.cache_locks
CREATE TABLE IF NOT EXISTS `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` bigint(20) NOT NULL,
  PRIMARY KEY (`key`),
  KEY `cache_locks_expiration_index` (`expiration`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table taller_de_programacion_db.cache_locks: ~0 rows (approximately)

-- Dumping structure for table taller_de_programacion_db.carrito_items
CREATE TABLE IF NOT EXISTS `carrito_items` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL,
  `product_id` bigint(20) unsigned NOT NULL,
  `amount` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `carrito_items_user_id_product_id_unique` (`user_id`,`product_id`),
  KEY `carrito_items_product_id_foreign` (`product_id`),
  CONSTRAINT `carrito_items_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  CONSTRAINT `carrito_items_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table taller_de_programacion_db.carrito_items: ~1 rows (approximately)
INSERT INTO `carrito_items` (`id`, `user_id`, `product_id`, `amount`, `created_at`, `updated_at`) VALUES
	(72, 11, 5, 1, '2026-06-17 02:11:03', '2026-06-17 02:11:03');

-- Dumping structure for table taller_de_programacion_db.consultations
CREATE TABLE IF NOT EXISTS `consultations` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `matter` varchar(255) NOT NULL,
  `message` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `consultations_user_id_foreign` (`user_id`),
  CONSTRAINT `consultations_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table taller_de_programacion_db.consultations: ~0 rows (approximately)

-- Dumping structure for table taller_de_programacion_db.contacts
CREATE TABLE IF NOT EXISTS `contacts` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `matter` varchar(255) NOT NULL,
  `message` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table taller_de_programacion_db.contacts: ~0 rows (approximately)

-- Dumping structure for table taller_de_programacion_db.email_verification_codes
CREATE TABLE IF NOT EXISTS `email_verification_codes` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL,
  `new_email` varchar(255) NOT NULL,
  `code` int(11) NOT NULL,
  `expires_at` timestamp NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `email_verification_codes_user_id_foreign` (`user_id`),
  CONSTRAINT `email_verification_codes_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table taller_de_programacion_db.email_verification_codes: ~1 rows (approximately)

-- Dumping structure for table taller_de_programacion_db.failed_jobs
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table taller_de_programacion_db.failed_jobs: ~0 rows (approximately)

-- Dumping structure for table taller_de_programacion_db.item_orders
CREATE TABLE IF NOT EXISTS `item_orders` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `amount` int(11) NOT NULL,
  `unit_price` float NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `product_id` bigint(20) unsigned NOT NULL,
  `order_id` bigint(20) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_order` (`order_id`),
  CONSTRAINT `fk_order` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table taller_de_programacion_db.item_orders: ~5 rows (approximately)
INSERT INTO `item_orders` (`id`, `amount`, `unit_price`, `created_at`, `updated_at`, `product_id`, `order_id`) VALUES
	(74, 1, 190000, '2026-05-25 01:17:47', '2026-05-25 01:17:48', 4, 98),
	(80, 1, 763000, '2026-05-27 01:26:44', '2026-05-27 01:26:44', 1, 102),
	(81, 3, 225000, '2026-05-27 02:42:54', '2026-05-27 02:42:54', 2, 103),
	(82, 1, 763000, '2026-06-06 20:04:32', '2026-06-06 20:04:32', 1, 104),
	(83, 3, 763000, '2026-06-14 04:30:33', '2026-06-14 04:30:33', 1, 105),
	(84, 2, 763000, '2026-06-16 23:38:24', '2026-06-16 23:38:24', 1, 109),
	(85, 2, 763000, '2026-06-16 23:43:00', '2026-06-16 23:43:00', 1, 110),
	(86, 4, 247170, '2026-06-17 02:01:52', '2026-06-17 02:01:52', 5, 111),
	(87, 1, 235000, '2026-06-17 20:46:11', '2026-06-17 20:46:11', 4, 112),
	(88, 1, 235000, '2026-06-17 20:47:35', '2026-06-17 20:47:35', 4, 113),
	(89, 1, 235000, '2026-06-17 20:48:13', '2026-06-17 20:48:13', 4, 114),
	(90, 1, 235000, '2026-06-17 20:49:17', '2026-06-17 20:49:17', 4, 115),
	(91, 1, 235000, '2026-06-17 20:50:19', '2026-06-17 20:50:19', 4, 116),
	(92, 1, 235000, '2026-06-17 20:50:46', '2026-06-17 20:50:46', 4, 117),
	(93, 1, 180000, '2026-06-17 20:52:19', '2026-06-17 20:52:19', 6, 118),
	(94, 1, 180000, '2026-06-17 20:52:35', '2026-06-17 20:52:35', 6, 119),
	(95, 1, 180000, '2026-06-17 20:52:55', '2026-06-17 20:52:55', 6, 120),
	(96, 1, 180000, '2026-06-17 20:53:11', '2026-06-17 20:53:11', 6, 121),
	(97, 1, 180000, '2026-06-17 20:53:29', '2026-06-17 20:53:29', 6, 122),
	(98, 1, 180000, '2026-06-17 20:56:32', '2026-06-17 20:56:32', 6, 123),
	(99, 1, 180000, '2026-06-17 20:57:42', '2026-06-17 20:57:42', 6, 124),
	(100, 1, 180000, '2026-06-17 21:00:55', '2026-06-17 21:00:55', 6, 125);

-- Dumping structure for table taller_de_programacion_db.job_batches
CREATE TABLE IF NOT EXISTS `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table taller_de_programacion_db.job_batches: ~0 rows (approximately)

-- Dumping structure for table taller_de_programacion_db.jobs
CREATE TABLE IF NOT EXISTS `jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) unsigned NOT NULL,
  `reserved_at` int(10) unsigned DEFAULT NULL,
  `available_at` int(10) unsigned NOT NULL,
  `created_at` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table taller_de_programacion_db.jobs: ~0 rows (approximately)

-- Dumping structure for table taller_de_programacion_db.migrations
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table taller_de_programacion_db.migrations: ~11 rows (approximately)
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
	(1, '0001_01_01_000000_create_users_table', 1),
	(2, '0001_01_01_000001_create_cache_table', 1),
	(3, '0001_01_01_000002_create_jobs_table', 1),
	(4, '2026_05_06_005513_create_addresses_table', 1),
	(5, '2026_05_06_010615_create_products_table', 1),
	(6, '2026_05_06_012634_create_item_orders_table', 1),
	(7, '2026_05_06_020323_create_orders_table', 1),
	(8, '2026_05_06_021917_create_contacts_table', 1),
	(9, '2026_05_06_022316_create_consultations_table', 1),
	(10, '2026_05_19_005745_create_password_resets_table', 2),
	(14, '2026_05_24_221120_create_email_verification_codes_table', 3),
	(15, '2026_05_25_012410_add_is_banned_to_users_table', 4),
	(16, '2026_06_14_000927_carrito_items', 5);

-- Dumping structure for table taller_de_programacion_db.orders
CREATE TABLE IF NOT EXISTS `orders` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `state` enum('paid','rejected','pending','created','delivered','stock_error') NOT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `orders_user_id_foreign` (`user_id`),
  CONSTRAINT `orders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=126 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table taller_de_programacion_db.orders: ~4 rows (approximately)
INSERT INTO `orders` (`id`, `state`, `user_id`, `created_at`, `updated_at`) VALUES
	(98, 'delivered', 6, '2026-05-25 01:15:26', '2026-05-27 02:41:42'),
	(102, 'delivered', 10, '2026-05-27 01:26:44', '2026-05-27 02:48:47'),
	(103, 'delivered', 10, '2026-05-27 02:42:54', '2026-06-16 23:44:41'),
	(104, 'paid', 10, '2026-06-06 20:04:32', '2026-06-16 23:46:14'),
	(105, 'created', 10, '2026-06-14 04:30:33', '2026-06-14 04:30:33'),
	(106, 'created', 10, '2026-06-16 23:34:13', '2026-06-16 23:34:13'),
	(107, 'created', 10, '2026-06-16 23:34:48', '2026-06-16 23:34:48'),
	(108, 'created', 10, '2026-06-16 23:37:02', '2026-06-16 23:37:02'),
	(109, 'created', 10, '2026-06-16 23:38:24', '2026-06-16 23:38:24'),
	(110, 'delivered', 10, '2026-06-16 23:43:00', '2026-06-17 02:17:29'),
	(111, 'delivered', 11, '2026-06-17 02:01:52', '2026-06-17 02:17:33'),
	(112, 'created', 10, '2026-06-17 20:46:11', '2026-06-17 20:46:11'),
	(113, 'created', 10, '2026-06-17 20:47:35', '2026-06-17 20:47:35'),
	(114, 'created', 10, '2026-06-17 20:48:13', '2026-06-17 20:48:13'),
	(115, 'created', 10, '2026-06-17 20:49:17', '2026-06-17 20:49:17'),
	(116, 'created', 10, '2026-06-17 20:50:19', '2026-06-17 20:50:19'),
	(117, 'created', 10, '2026-06-17 20:50:46', '2026-06-17 20:50:46'),
	(118, 'paid', 10, '2026-06-17 20:52:19', '2026-06-17 20:52:35'),
	(119, 'created', 10, '2026-06-17 20:52:35', '2026-06-17 20:52:35'),
	(120, 'paid', 10, '2026-06-17 20:52:55', '2026-06-17 20:53:11'),
	(121, 'created', 10, '2026-06-17 20:53:11', '2026-06-17 20:53:11'),
	(122, 'paid', 10, '2026-06-17 20:53:29', '2026-06-17 20:56:32'),
	(123, 'created', 10, '2026-06-17 20:56:32', '2026-06-17 20:56:32'),
	(124, 'created', 10, '2026-06-17 20:57:42', '2026-06-17 20:57:42'),
	(125, 'paid', 10, '2026-06-17 21:00:55', '2026-06-17 21:00:55');

-- Dumping structure for table taller_de_programacion_db.password_reset_tokens
CREATE TABLE IF NOT EXISTS `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table taller_de_programacion_db.password_reset_tokens: ~0 rows (approximately)

-- Dumping structure for table taller_de_programacion_db.password_resets
CREATE TABLE IF NOT EXISTS `password_resets` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `code` int(11) NOT NULL DEFAULT 0,
  `expires_at` timestamp NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `password_resets_email_unique` (`email`),
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table taller_de_programacion_db.password_resets: ~0 rows (approximately)

-- Dumping structure for table taller_de_programacion_db.products
CREATE TABLE IF NOT EXISTS `products` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `stock` int(11) NOT NULL,
  `low_stock` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table taller_de_programacion_db.products: ~8 rows (approximately)
INSERT INTO `products` (`id`, `name`, `price`, `stock`, `low_stock`, `image`, `is_active`, `created_at`, `updated_at`) VALUES
	(1, 'Down Pipe E Intermedio Amarok V6 Extreme 3.0 Acero Inox', 763000, 0, 1, 'https://res.cloudinary.com/dbaunwsqz/image/upload/v1779590999/kavdni3lv7puoerrwroi.webp', 1, NULL, '2026-06-16 23:46:14'),
	(2, 'Down Pipe Volkswagen Amarok - 2.0 Bitdi 180cv', 225000, 0, 1, '/imgs/downpipe-amarok-2.0.webp', 1, NULL, '2026-06-16 20:37:13'),
	(3, 'Downpipe Hilux 2.8 Y 2.4', 197000, 5, 5, '/imgs/downpipe-hilux.webp', 0, NULL, '2026-06-17 01:50:56'),
	(4, 'Down Pipe Chevrolet S-10 2.8 Td 200cv', 235000, 5, 1, '/imgs/downpipe-s10.webp', 1, NULL, NULL),
	(5, 'Down Pipe Volkswagen Vento - 2.0t', 247170, 0, 1, '/imgs/downpipe-vento-2.0.webp', 1, NULL, '2026-06-17 02:14:37'),
	(6, 'Downpipe - Escape Fiat Toro', 180000, 1, 1, '/imgs/downpipe-fiat-toros.webp', 1, NULL, '2026-06-17 21:00:55'),
	(10, 'sfdfd', 2222, 1, 1, 'https://res.cloudinary.com/dbaunwsqz/image/upload/v1781631211/gaz11mtzrmxitju0amdy.png', 0, '2026-06-16 20:33:30', '2026-06-16 20:36:30'),
	(11, 'Fi', 0, 0, 0, 'https://res.cloudinary.com/dbaunwsqz/image/upload/v1781650411/s56n94fbqpvd2qqipjlr.png', 1, '2026-06-17 01:53:30', '2026-06-17 01:53:30');

-- Dumping structure for table taller_de_programacion_db.sessions
CREATE TABLE IF NOT EXISTS `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) unsigned DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table taller_de_programacion_db.sessions: ~2 rows (approximately)
INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
	('2hGfHcIm6L82LjFd5B6jyfBqdQnj0teUe6zvKASw', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0', 'eyJfdG9rZW4iOiI2cmlkNnFFTGc2SERWcjZlZldMalFPOGk0b1BnTUhxako1dHR4d3Z4IiwidXJsIjp7ImludGVuZGVkIjoiaHR0cDpcL1wvcHJpbWVyLXByb3llY3RvLWludGVncmFkb3IudGVzdFwvc3VjY2Vzcz9vcmRlcl9pZD0xMjUifSwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL3ByaW1lci1wcm95ZWN0by1pbnRlZ3JhZG9yLnRlc3RcL2Zvcm11bGFyaW8tZGUtbG9naW4iLCJyb3V0ZSI6ImxvZ2luIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1781729941),
	('5bB8DkyUQCLcq97sus74wrIqcB8s5eu2hZbroiKw', 10, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0', 'eyJfdG9rZW4iOiJsNkZteHo2T2x5VFRkSmM1UWx4YUVYb3lycmoyVDlXOWUyWXlOYlZHIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL3ByaW1lci1wcm95ZWN0by1pbnRlZ3JhZG9yLnRlc3RcL2FwaVwvY2Fycml0byIsInJvdXRlIjpudWxsfSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119LCJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI6MTB9', 1781719255);

-- Dumping structure for table taller_de_programacion_db.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `cuil_cuit` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `role` enum('client','admin','unverified') NOT NULL,
  `password` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `province` varchar(255) NOT NULL,
  `postcode` int(11) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `is_banned` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_cuil_cuit_unique` (`cuil_cuit`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table taller_de_programacion_db.users: ~2 rows (approximately)
INSERT INTO `users` (`id`, `name`, `lastname`, `cuil_cuit`, `email`, `role`, `password`, `city`, `province`, `postcode`, `remember_token`, `created_at`, `updated_at`, `is_banned`) VALUES
	(6, 'Ana Maria', 'Mancedo', '20462450247', 'anamariamancedo@gmail.com', 'client', '$2y$12$eQ0/QeSiDby6gVwxNwFoz.nGHmS4g8jY0K2oWNOPH8gUl7CE.xzhO', 'Corrientes - Capital', 'Corrientes', 3400, NULL, '2026-05-21 02:19:50', '2026-06-17 01:50:24', 0),
	(10, 'Juan Maria', 'Mancedo', '20462450447', 'juanmaninc@gmail.com', 'admin', '$2y$12$IgQgxeh9MVb9E/qq6i5Me.ODdqms64GGp1wyTQLpgwh4V0T6EXfcy', 'Corrientes - Capital', 'Corrientes', 3401, NULL, '2026-05-25 21:36:12', '2026-06-16 21:15:40', 0),
	(11, 'Juan Maria', 'Mancedo', '20462430447', 'juanmariamancedo@icloud.com', 'client', '$2y$12$9ps3WTVQpxnqfX7mQ4meA.f5r87Trufc9bFyeP4KpHYE3kVoh/ywm', 'Corrientes - Capital', 'Corrientes', 3401, NULL, '2026-06-17 01:58:49', '2026-06-17 02:00:45', 0);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
