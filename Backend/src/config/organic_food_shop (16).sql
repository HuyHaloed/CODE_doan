-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 05, 2024 lúc 05:25 AM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `organic_food_shop`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `addresses`
--

CREATE TABLE `addresses` (
  `street` varchar(100) NOT NULL,
  `town` varchar(100) NOT NULL,
  `district` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `user_id` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bills`
--

CREATE TABLE `bills` (
  `id` varchar(36) NOT NULL,
  `order_id` varchar(36) NOT NULL,
  `buyer_id` varchar(36) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `buyers`
--

CREATE TABLE `buyers` (
  `user_id` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `buyers`
--

INSERT INTO `buyers` (`user_id`) VALUES
('e7ae9a95-2112-4396-a8a3-8a674f1877fa'),
('user1'),
('user3');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `carts`
--
CREATE TABLE `carts` (
  `id` varchar(36) NOT NULL,
  `buyer_id` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `carts`
--

INSERT INTO `carts` (`id`, `buyer_id`) VALUES
('cart1733341880390', 'e7ae9a95-2112-4396-a8a3-8a674f1877fa'),
('cart1733153953092', 'user1'),
('cart1', 'user3');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cart_product`
--

CREATE TABLE `cart_product` (
  `cart_id` varchar(36) NOT NULL,
  `product_id` varchar(36) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `cart_product`
--

INSERT INTO `cart_product` (`cart_id`, `product_id`, `quantity`) VALUES
('cart1', '9fa7a00d-afef-11ef-b2c3-74d4dd0c2a47', 2),
('cart1', '9fa80770-afef-11ef-b2c3-74d4dd0c2a47', 100),
('cart1', 'prod1', 3),
('cart1', 'prod2', 5),
('cart1733341880390', '9fa80770-afef-11ef-b2c3-74d4dd0c2a47', 110),
('cart1733341880390', '9fa808e9-afef-11ef-b2c3-74d4dd0c2a47', 7),
('cart1733341880390', '9fa80c14-afef-11ef-b2c3-74d4dd0c2a47', 1),
('cart1733341880390', 'b1ce9a37-aff0-11ef-b2c3-74d4dd0c2a47', 100),
('cart1733341880390', 'b1cece3f-aff0-11ef-b2c3-74d4dd0c2a47', 3);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `id` varchar(36) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`id`, `name`, `description`) VALUES
('153579b0-aff0-11ef-b2c3-74d4dd0c2a47', 'Snacks', NULL),
('1535db50-aff0-11ef-b2c3-74d4dd0c2a47', 'Seafood', NULL),
('1535dc34-aff0-11ef-b2c3-74d4dd0c2a47', 'Fast Food', NULL),
('cat1', 'test1', 'Fresh organic fruits'),
('cat2', 'test', 'Green and organic vegetables'),
('e66abf11-afee-11ef-b2c3-74d4dd0c2a47', 'Vegetables', 'Fresh and healthy vegetables'),
('e66b16aa-afee-11ef-b2c3-74d4dd0c2a47', 'Fruits', 'Fresh fruits'),
('e66b177d-afee-11ef-b2c3-74d4dd0c2a47', 'Nuts', 'High-quality nuts'),
('e66b17be-afee-11ef-b2c3-74d4dd0c2a47', 'Condiments', 'Spices and condiments'),
('e66b17f6-afee-11ef-b2c3-74d4dd0c2a47', 'Meat', 'Fresh meat products');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `coupons`
--

CREATE TABLE `coupons` (
  `id` varchar(36) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(100) DEFAULT NULL,
  `discount_percent` decimal(5,2) DEFAULT NULL CHECK (`discount_percent` between 0 and 100),
  `due_date` date NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `coupons`
--

INSERT INTO `coupons` (`id`, `name`, `description`, `discount_percent`, `due_date`, `quantity`) VALUES
('f95bba23-afea-11ef-b2c3-74d4dd0c2a47', 'GREEN20', 'Giảm 20k cho đơn từ 100k', 20.00, '2024-12-30', 100),
('f95c0dfa-afea-11ef-b2c3-74d4dd0c2a47', 'FREESHIP', 'Miễn phí vận chuyển cho đơn từ 200k', 0.00, '2024-12-30', 50),
('f95c1dd4-afea-11ef-b2c3-74d4dd0c2a47', 'SALE50', 'Giảm 50k cho đơn từ 500k', 50.00, '2024-12-30', 75),
('f95c2906-afea-11ef-b2c3-74d4dd0c2a47', 'SUMMER10', 'Giảm 10% cho đơn hàng mùa hè', 10.00, '2024-12-30', 60),
('f95c2b10-afea-11ef-b2c3-74d4dd0c2a47', 'WELCOME15', 'Giảm 15k cho khách hàng mới', 15.00, '2024-12-30', 80),
('f95c2b4c-afea-11ef-b2c3-74d4dd0c2a47', 'BUY2GET1', 'Mua 2 tặng 1 cho sản phẩm chọn lọc', 0.00, '2024-12-30', 120),
('f95c2b87-afea-11ef-b2c3-74d4dd0c2a47', 'FLASHSALE', 'Giảm 30% trong 24 giờ tới', 30.00, '2024-12-30', 200),
('f95c2c10-afea-11ef-b2c3-74d4dd0c2a47', 'HEALTHY30', 'Giảm 30k cho đơn hàng thực phẩm sạch', 30.00, '2024-12-30', 90),
('f95c2c54-afea-11ef-b2c3-74d4dd0c2a47', 'CHIPSLIFE', 'Giảm 20% cho tất cả sản phẩm snack', 20.00, '2024-12-30', 50);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `coupon_order`
--

CREATE TABLE `coupon_order` (
  `coupon_id` varchar(36) NOT NULL,
  `order_id` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `deliveried_by`
--

CREATE TABLE `deliveried_by` (
  `order_id` varchar(36) NOT NULL,
  `delivery_id` varchar(36) DEFAULT NULL,
  `expected_date` date DEFAULT NULL,
  `arrival_date` date DEFAULT NULL,
  `departure_date` date DEFAULT NULL,
  `shipper_id` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `delivery`
--

CREATE TABLE `delivery` (
  `id` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `follow`
--

CREATE TABLE `follow` (
  `buyer_id` varchar(36) NOT NULL,
  `seller_id` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `id` varchar(36) NOT NULL,
  `buyer_id` varchar(36) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` enum('Pending','Accepted','Delivered') DEFAULT 'Pending',
  `number_of_products` int(11) NOT NULL,
  `total_price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`id`, `buyer_id`, `date`, `status`, `number_of_products`, `total_price`) VALUES
('order1', 'user3', '2024-12-01 10:01:01', 'Pending', 2, 6.50);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order_product`
--

CREATE TABLE `order_product` (
  `order_id` varchar(36) NOT NULL,
  `product_id` varchar(36) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `order_product`
--

INSERT INTO `order_product` (`order_id`, `product_id`, `quantity`) VALUES
('order1', 'prod1', 3),
('order1', 'prod2', 5);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` varchar(36) NOT NULL,
  `name` varchar(100) NOT NULL,
  `quantity` int(11) NOT NULL,
  `description` varchar(100) DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `seller_id` varchar(36) DEFAULT NULL,
  `category_id` varchar(36) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `name`, `quantity`, `description`, `price`, `image`, `seller_id`, `category_id`) VALUES
('9fa7a00d-afef-11ef-b2c3-74d4dd0c2a47', 'Hành hoa', 100, 'Fresh green onions', 50000.00, 'https://i.pinimg.com/736x/f3/cf/7d/f3cf7dcc9659b26070dc992b755ee5a9.jpg', 'ad600d7f-afee-11ef-b2c3-74d4dd0c2a47', 'e66abf11-afee-11ef-b2c3-74d4dd0c2a47'),
('9fa80106-afef-11ef-b2c3-74d4dd0c2a47', 'Cần tây', 50, 'Fresh celery', 120000.00, 'https://i.pinimg.com/736x/52/16/30/52163035cc1bdebd100316d5a693f6a5.jpg', 'ad600d7f-afee-11ef-b2c3-74d4dd0c2a47', 'e66abf11-afee-11ef-b2c3-74d4dd0c2a47'),
('9fa80482-afef-11ef-b2c3-74d4dd0c2a47', 'Khoai lang', 200, 'Sweet potatoes', 35000.00, 'https://i.pinimg.com/736x/0a/66/d2/0a66d2d5bfda1fa0bcd240620b3b18bd.jpg', 'ad600d7f-afee-11ef-b2c3-74d4dd0c2a47', 'e66abf11-afee-11ef-b2c3-74d4dd0c2a47'),
('9fa805fe-afef-11ef-b2c3-74d4dd0c2a47', 'Súp lơ', 80, 'Fresh cauliflower', 75000.00, 'https://i.pinimg.com/736x/b7/f2/3f/b7f23fe82a2f1c47c4c826d0a196ac71.jpg', 'ad600d7f-afee-11ef-b2c3-74d4dd0c2a47', 'e66abf11-afee-11ef-b2c3-74d4dd0c2a47'),
('9fa80770-afef-11ef-b2c3-74d4dd0c2a47', 'Cải thảo nhà trồng', 150, 'Locally grown napa cabbage', 30000.00, 'https://i.pinimg.com/736x/ee/bc/53/eebc53bf8a2813ee654f351e52c18bcf.jpg', 'ad600d7f-afee-11ef-b2c3-74d4dd0c2a47', 'e66abf11-afee-11ef-b2c3-74d4dd0c2a47'),
('9fa808e9-afef-11ef-b2c3-74d4dd0c2a47', 'Củ dền', 120, 'Fresh beets', 78000.00, 'https://i.pinimg.com/736x/ee/59/70/ee5970a4cc4f66965d42e2ace382fda7.jpg', 'ad600d7f-afee-11ef-b2c3-74d4dd0c2a47', 'e66abf11-afee-11ef-b2c3-74d4dd0c2a47'),
('9fa80a47-afef-11ef-b2c3-74d4dd0c2a47', 'Sầu riêng Đắk Lắk', 30, 'Durian from Dak Lak', 80000.00, 'https://i.pinimg.com/736x/2b/39/57/2b3957f114ea136697805f508682f4e1.jpg', 'ad600d7f-afee-11ef-b2c3-74d4dd0c2a47', 'e66b16aa-afee-11ef-b2c3-74d4dd0c2a47'),
('9fa80c14-afef-11ef-b2c3-74d4dd0c2a47', 'Hạt óc chó', 100, 'Walnuts', 135000.00, 'https://i.pinimg.com/236x/4e/91/11/4e911118b84a0da507f2e7f3bfa4dac6.jpg', 'ad600d7f-afee-11ef-b2c3-74d4dd0c2a47', 'e66b177d-afee-11ef-b2c3-74d4dd0c2a47'),
('9fa80d70-afef-11ef-b2c3-74d4dd0c2a47', 'Mắm mực Khánh Hòa 500ml', 150, 'Squid paste from Khanh Hoa', 75000.00, 'https://i.pinimg.com/736x/f3/62/aa/f362aa15e2c0dd16e73c0953257bdba6.jpg', 'ad600d7f-afee-11ef-b2c3-74d4dd0c2a47', 'e66b17be-afee-11ef-b2c3-74d4dd0c2a47'),
('9fa80ead-afef-11ef-b2c3-74d4dd0c2a47', 'Gà ta', 70, 'Free-range chicken', 180000.00, 'https://i.pinimg.com/736x/ee/ab/9e/eeab9e39737fc183c28b627d915d8798.jpg', 'ad600d7f-afee-11ef-b2c3-74d4dd0c2a47', 'e66b17f6-afee-11ef-b2c3-74d4dd0c2a47'),
('b1ce9a37-aff0-11ef-b2c3-74d4dd0c2a47', 'Hạt dẻ cười', 40, 'Pistachios', 427000.00, 'https://i.pinimg.com/236x/79/c8/23/79c823fa4cff546a3b1ae384e98a2474.jpg', 'user2', 'e66b177d-afee-11ef-b2c3-74d4dd0c2a47'),
('b1cec9b5-aff0-11ef-b2c3-74d4dd0c2a47', 'Giò heo', 50, 'Pig trotters', 200000.00, 'https://i.pinimg.com/736x/ff/1b/ac/ff1bacf2568fde566555fb851de4ce9a.jpg', 'ad606f2b-afee-11ef-b2c3-74d4dd0c2a47', 'e66b17f6-afee-11ef-b2c3-74d4dd0c2a47'),
('b1cecb3e-aff0-11ef-b2c3-74d4dd0c2a47', '10 cái Nem chua Lai Vung Giao Tho', 100, 'Lai Vung sour fermented pork rolls', 30000.00, 'https://i.pinimg.com/736x/07/33/9c/07339cc4a6816a65ef9f400d6b285211.jpg', 'user1', '153579b0-aff0-11ef-b2c3-74d4dd0c2a47'),
('b1cecc45-aff0-11ef-b2c3-74d4dd0c2a47', 'Gà ủ muối', 90, 'Salt-baked chicken', 150000.00, 'https://i.pinimg.com/736x/67/31/0b/67310b1a694d6f6c90097eaa653d7276.jpg', 'ad606f2b-afee-11ef-b2c3-74d4dd0c2a47', 'e66b17f6-afee-11ef-b2c3-74d4dd0c2a47'),
('b1cecd17-aff0-11ef-b2c3-74d4dd0c2a47', '1kg Trâu gác bếp', 30, 'Smoked buffalo', 450000.00, 'https://i.pinimg.com/736x/db/d7/72/dbd772d6c48f6bc93cfa474c03398f74.jpg', 'ad600d7f-afee-11ef-b2c3-74d4dd0c2a47', 'e66b17f6-afee-11ef-b2c3-74d4dd0c2a47'),
('b1cece3f-aff0-11ef-b2c3-74d4dd0c2a47', 'Mực tẩm gia vị', 150, 'Seasoned squid', 80000.00, 'https://i.pinimg.com/736x/5f/95/ae/5f95ae03e236c3cc72a307636080cc66.jpg', 'ad606f2b-afee-11ef-b2c3-74d4dd0c2a47', '1535db50-aff0-11ef-b2c3-74d4dd0c2a47'),
('b1cecf02-aff0-11ef-b2c3-74d4dd0c2a47', '1kg Bánh tráng muối', 80, 'Salty rice paper', 70000.00, 'https://i.pinimg.com/736x/c3/46/70/c34670067645b6a06312fc6468b34b5e.jpg', 'ad600d7f-afee-11ef-b2c3-74d4dd0c2a47', '153579b0-aff0-11ef-b2c3-74d4dd0c2a47'),
('b1cecfbd-aff0-11ef-b2c3-74d4dd0c2a47', 'Bánh mì thịt nướng', 200, 'Grilled meat sandwich', 20000.00, 'https://i.pinimg.com/736x/c9/e9/80/c9e98025e17d0ccb54822d38bac38d35.jpg', 'user2', '1535dc34-aff0-11ef-b2c3-74d4dd0c2a47'),
('b1ced079-aff0-11ef-b2c3-74d4dd0c2a47', 'Trái cây nhiệt đới', 120, 'Tropical fruits', 180000.00, 'https://i.pinimg.com/736x/6a/35/5f/6a355f67c3b15ebee0f4ea9f1d0ad4de.jpg', 'ad607fb1-afee-11ef-b2c3-74d4dd0c2a47', 'e66b16aa-afee-11ef-b2c3-74d4dd0c2a47'),
('b1ced1bb-aff0-11ef-b2c3-74d4dd0c2a47', 'Mắm tôm', 60, 'Shrimp paste', 50000.00, 'https://i.pinimg.com/736x/8d/9b/ea/8d9bea271a3b5b4b988f302207e289db.jpg', 'user1', 'e66b17be-afee-11ef-b2c3-74d4dd0c2a47'),
('prod1', 'Organic Apple', 50, 'Fresh organic apples from local farms', 1.50, 'apple.jpg', 'user1', 'cat1'),
('prod2', 'Organic Carrot', 100, 'High-quality organic carrots', 0.80, 'carrot.jpg', 'user2', 'cat2');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `reviews`
--

CREATE TABLE `reviews` (
  `id` varchar(36) NOT NULL,
  `buyer_id` varchar(36) NOT NULL,
  `product_id` varchar(36) NOT NULL,
  `rate` int(11) DEFAULT NULL CHECK (`rate` between 1 and 5),
  `comment` varchar(100) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `reviews`
--

INSERT INTO `reviews` (`id`, `buyer_id`, `product_id`, `rate`, `comment`, `image`) VALUES
('cd20ecf2-affd-11ef-b2c3-74d4dd0c2a47', 'user3', 'prod1', 5, 'Sản phẩm tuyệt vời, tôi rất hài lòng!', NULL),
('d9d92a0c-affd-11ef-b2c3-74d4dd0c2a47', 'user3', 'b1ced079-aff0-11ef-b2c3-74d4dd0c2a47', 4, 'Chất lượng tốt, nhưng giao hàng hơi chậm.', NULL),
('d9d95c83-affd-11ef-b2c3-74d4dd0c2a47', 'user3', 'b1ced1bb-aff0-11ef-b2c3-74d4dd0c2a47', 3, 'Sản phẩm ổn nhưng không đúng mô tả lắm.', NULL),
('d9d95f27-affd-11ef-b2c3-74d4dd0c2a47', 'user3', '9fa80a47-afef-11ef-b2c3-74d4dd0c2a47', 5, 'Giá cả hợp lý, chất lượng tốt.', NULL),
('d9d98996-affd-11ef-b2c3-74d4dd0c2a47', 'user3', 'b1cecfbd-aff0-11ef-b2c3-74d4dd0c2a47', 2, 'Không hài lòng với dịch vụ.', NULL),
('d9d98d1e-affd-11ef-b2c3-74d4dd0c2a47', 'user3', '9fa80ead-afef-11ef-b2c3-74d4dd0c2a47', 1, 'Sản phẩm lỗi, cần được đổi trả.', NULL),
('d9d98ea3-affd-11ef-b2c3-74d4dd0c2a47', 'user3', 'b1cecb3e-aff0-11ef-b2c3-74d4dd0c2a47', 4, 'Hàng đúng như mô tả, sẽ mua lại.', NULL),
('d9d9903b-affd-11ef-b2c3-74d4dd0c2a47', 'user3', '9fa805fe-afef-11ef-b2c3-74d4dd0c2a47', 3, 'Cần cải thiện chất lượng đóng gói.', NULL),
('d9d9919b-affd-11ef-b2c3-74d4dd0c2a47', 'user3', '9fa80770-afef-11ef-b2c3-74d4dd0c2a47', 5, 'Mua lần thứ hai và vẫn rất hài lòng.', NULL),
('d9d99352-affd-11ef-b2c3-74d4dd0c2a47', 'user3', 'b1cec9b5-aff0-11ef-b2c3-74d4dd0c2a47', 4, 'Sản phẩm rất tốt, giá cả phải chăng.', NULL),
('d9d9946e-affd-11ef-b2c3-74d4dd0c2a47', 'user3', 'b1cec9b5-aff0-11ef-b2c3-74d4dd0c2a47', 2, 'Hàng giao thiếu phụ kiện.', NULL),
('d9d995a8-affd-11ef-b2c3-74d4dd0c2a47', 'user3', 'b1ced079-aff0-11ef-b2c3-74d4dd0c2a47', 5, 'Shop tư vấn rất nhiệt tình.', NULL),
('d9d996b7-affd-11ef-b2c3-74d4dd0c2a47', 'user3', '9fa80a47-afef-11ef-b2c3-74d4dd0c2a47', 1, 'Không đúng với hình ảnh quảng cáo.', NULL),
('d9d997b9-affd-11ef-b2c3-74d4dd0c2a47', 'user3', '9fa80ead-afef-11ef-b2c3-74d4dd0c2a47', 5, 'Hàng đẹp, chất lượng tốt.', NULL),
('d9d998ce-affd-11ef-b2c3-74d4dd0c2a47', 'user3', 'b1cecb3e-aff0-11ef-b2c3-74d4dd0c2a47', 3, 'Sản phẩm chưa được như kỳ vọng.', NULL),
('d9d999f5-affd-11ef-b2c3-74d4dd0c2a47', 'user3', '9fa7a00d-afef-11ef-b2c3-74d4dd0c2a47', 4, 'Dịch vụ chăm sóc khách hàng tốt.', NULL),
('d9d99b57-affd-11ef-b2c3-74d4dd0c2a47', 'user3', 'b1cece3f-aff0-11ef-b2c3-74d4dd0c2a47', 5, 'Rất hài lòng với đơn hàng này.', NULL),
('d9d99c98-affd-11ef-b2c3-74d4dd0c2a47', 'user3', '9fa7a00d-afef-11ef-b2c3-74d4dd0c2a47', 2, 'Sản phẩm bị lỗi kỹ thuật.', NULL),
('d9d99dc0-affd-11ef-b2c3-74d4dd0c2a47', 'user3', '9fa80c14-afef-11ef-b2c3-74d4dd0c2a47', 4, 'Thời gian giao hàng nhanh, đóng gói cẩn thận.', NULL),
('d9d99ef5-affd-11ef-b2c3-74d4dd0c2a47', 'user3', '9fa805fe-afef-11ef-b2c3-74d4dd0c2a47', 5, 'Đáng đồng tiền bát gạo.', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sellers`
--

CREATE TABLE `sellers` (
  `user_id` varchar(36) NOT NULL,
  `name` varchar(100) NOT NULL,
  `tax_code` varchar(50) NOT NULL,
  `description` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sellers`
--

INSERT INTO `sellers` (`user_id`, `name`, `tax_code`, `description`) VALUES
('ad600d7f-afee-11ef-b2c3-74d4dd0c2a47', 'Công ty A', '', NULL),
('ad606f2b-afee-11ef-b2c3-74d4dd0c2a47', 'Công ty B', '', NULL),
('ad607fb1-afee-11ef-b2c3-74d4dd0c2a47', 'Công ty A', '', NULL),
('user1', 'Công ty C', '123456789', 'Specializes in organic fruits'),
('user2', 'Công ty D', '987654321', 'Offers high-quality organic vegetables');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `shippers`
--

CREATE TABLE `shippers` (
  `id` varchar(36) NOT NULL,
  `name` varchar(100) NOT NULL,
  `phone_number` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` varchar(36) NOT NULL,
  `name` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `bank_name` varchar(100) DEFAULT NULL,
  `account_number` varchar(50) DEFAULT NULL,
  `role` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `email`, `phone_number`, `bank_name`, `account_number`, `role`) VALUES
('3c8be0d4-3a58-46b9-bb3b-466aa77de783', 'user1', '$2a$10$.tuZDMmQ3kFxWyWDEj3tP.KU6EpZGj2wpaaPvlpfW5EzGGnhgDrze', 'huy.dang9999haloed@hcmut.edu.vn', NULL, NULL, NULL, NULL),
('747b147e-0fb8-4122-aa75-002694ee7ebd', 'user1', '$2a$10$1dX5zc0Tbje6UB7OTSstCO8eP80Mma16isBP0jS9sKT3ZFgHAu5E6', 'xuanhuy6a1@gmail.com', NULL, NULL, NULL, NULL),
('ad600d7f-afee-11ef-b2c3-74d4dd0c2a47', 'Nguyen Van A', 'password123', 'a.nguyen@example.com', '0123456789', 'Vietcombank', '123456789', NULL),
('ad606f2b-afee-11ef-b2c3-74d4dd0c2a47', 'Tran Thi B', 'password456', 'b.tran@example.com', '0987654321', 'Techcombank', '987654321', NULL),
('ad607fb1-afee-11ef-b2c3-74d4dd0c2a47', 'Le Van C', 'password789', 'c.le@example.com', '0321654987', 'BIDV', '456123789', NULL),
('e7ae9a95-2112-4396-a8a3-8a674f1877fa', 'Huy', '$2a$10$tSmDjtCNrcfeM6CJe0gRu.41nBafkUlUQEtcrtPKlZMA.gsW2hML2', 'xuanhaloed@gmail.com', '0857777771', NULL, NULL, 'BUYER'),
('user1', 'Alice Smith', 'password123', 'alice@example.com', '1234567890', 'Bank A', '123456789', NULL),
('user2', 'Bob Johnson', 'password123', 'bob@example.com', '0987654321', 'Bank B', '987654321', NULL),
('user3', 'Charlie Brown', 'password123', 'charlie@example.com', '1122334455', 'Bank C', '456789123', NULL);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`street`,`town`,`district`,`city`),
  ADD KEY `user_id` (`user_id`);

--
-- Chỉ mục cho bảng `bills`
--
ALTER TABLE `bills`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `buyer_id` (`buyer_id`);

--
-- Chỉ mục cho bảng `buyers`
--
ALTER TABLE `buyers`
  ADD PRIMARY KEY (`user_id`);

--
-- Chỉ mục cho bảng `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `buyer_id` (`buyer_id`);

--
-- Chỉ mục cho bảng `cart_product`
--
ALTER TABLE `cart_product`
  ADD PRIMARY KEY (`cart_id`,`product_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `coupons`
--
ALTER TABLE `coupons`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `coupon_order`
--
ALTER TABLE `coupon_order`
  ADD PRIMARY KEY (`coupon_id`,`order_id`),
  ADD KEY `order_id` (`order_id`);

--
-- Chỉ mục cho bảng `deliveried_by`
--
ALTER TABLE `deliveried_by`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `shipper_id` (`shipper_id`),
  ADD KEY `delivery_id` (`delivery_id`);

--
-- Chỉ mục cho bảng `delivery`
--
ALTER TABLE `delivery`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `follow`
--
ALTER TABLE `follow`
  ADD PRIMARY KEY (`buyer_id`,`seller_id`),
  ADD KEY `seller_id` (`seller_id`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `buyer_id` (`buyer_id`);

--
-- Chỉ mục cho bảng `order_product`
--
ALTER TABLE `order_product`
  ADD PRIMARY KEY (`order_id`,`product_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `seller_id` (`seller_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Chỉ mục cho bảng `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `buyer_id` (`buyer_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Chỉ mục cho bảng `sellers`
--
ALTER TABLE `sellers`
  ADD PRIMARY KEY (`user_id`);

--
-- Chỉ mục cho bảng `shippers`
--
ALTER TABLE `shippers`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `addresses`
--
ALTER TABLE `addresses`
  ADD CONSTRAINT `addresses_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `bills`
--
ALTER TABLE `bills`
  ADD CONSTRAINT `bills_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `bills_ibfk_2` FOREIGN KEY (`buyer_id`) REFERENCES `buyers` (`user_id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `buyers`
--
ALTER TABLE `buyers`
  ADD CONSTRAINT `buyers_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`buyer_id`) REFERENCES `buyers` (`user_id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `cart_product`
--
ALTER TABLE `cart_product`
  ADD CONSTRAINT `cart_product_ibfk_1` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `cart_product_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Các ràng buộc cho bảng `coupon_order`
--
ALTER TABLE `coupon_order`
  ADD CONSTRAINT `coupon_order_ibfk_1` FOREIGN KEY (`coupon_id`) REFERENCES `coupons` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `coupon_order_ibfk_2` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `deliveried_by`
--
ALTER TABLE `deliveried_by`
  ADD CONSTRAINT `deliveried_by_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `deliveried_by_ibfk_2` FOREIGN KEY (`shipper_id`) REFERENCES `shippers` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `deliveried_by_ibfk_3` FOREIGN KEY (`delivery_id`) REFERENCES `delivery` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `follow`
--
ALTER TABLE `follow`
  ADD CONSTRAINT `follow_ibfk_1` FOREIGN KEY (`buyer_id`) REFERENCES `buyers` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `follow_ibfk_2` FOREIGN KEY (`seller_id`) REFERENCES `sellers` (`user_id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`buyer_id`) REFERENCES `buyers` (`user_id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `order_product`
--
ALTER TABLE `order_product`
  ADD CONSTRAINT `order_product_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `order_product_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`seller_id`) REFERENCES `sellers` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE NO ACTION;

--
-- Các ràng buộc cho bảng `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`buyer_id`) REFERENCES `buyers` (`user_id`) ON DELETE NO ACTION,
  ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `sellers`
--
ALTER TABLE `sellers`
  ADD CONSTRAINT `sellers_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
