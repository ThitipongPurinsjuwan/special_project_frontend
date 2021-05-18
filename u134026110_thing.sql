-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 18, 2021 at 06:56 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.4.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u134026110_thing`
--

-- --------------------------------------------------------

--
-- Table structure for table `sbshop_categories`
--

CREATE TABLE `sbshop_categories` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(100) CHARACTER SET utf8mb4 NOT NULL,
  `categories_type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sbshop_categories`
--

INSERT INTO `sbshop_categories` (`category_id`, `category_name`, `categories_type`) VALUES
(1, 'Sneakers', 2),
(2, 'Slippers', 2),
(3, 'High-Heels', 2),
(4, 'Leather', 2),
(5, 'Wallet Bags', 1),
(6, 'Hand Bags', 1),
(7, 'Shoulder Bags', 1),
(8, 'Luggage Bags', 1);

-- --------------------------------------------------------

--
-- Table structure for table `sbshop_categories_type`
--

CREATE TABLE `sbshop_categories_type` (
  `categories_type_id` int(11) NOT NULL,
  `categories_type_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sbshop_categories_type`
--

INSERT INTO `sbshop_categories_type` (`categories_type_id`, `categories_type_name`) VALUES
(1, 'bag'),
(2, 'shoes');

-- --------------------------------------------------------

--
-- Table structure for table `sbshop_in_orders`
--

CREATE TABLE `sbshop_in_orders` (
  `in_order_id` int(11) NOT NULL,
  `in_order_product_id` int(11) NOT NULL,
  `in_order_user_id` int(11) NOT NULL,
  `in_order_quantity` int(11) NOT NULL,
  `in_order_price` double NOT NULL,
  `in_order_total` int(11) NOT NULL,
  `in_order_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `in_order_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sbshop_in_orders`
--

INSERT INTO `sbshop_in_orders` (`in_order_id`, `in_order_product_id`, `in_order_user_id`, `in_order_quantity`, `in_order_price`, `in_order_total`, `in_order_date`, `in_order_status`) VALUES
(2, 26, 2, 1, 350, 350, '2021-04-12 16:48:23', 1),
(4, 1, 1, 1, 100, 100, '2021-04-14 14:25:56', 1),
(8, 21, 1, 4, 265, 1060, '2021-04-24 18:47:03', 2),
(9, 23, 1, 3, 181, 543, '2021-04-24 18:52:19', 2),
(14, 37, 1, 2, 126, 252, '2021-04-25 06:32:18', 2),
(20, 37, 2, 4, 126, 504, '2021-05-18 03:52:35', 2);

-- --------------------------------------------------------

--
-- Table structure for table `sbshop_like`
--

CREATE TABLE `sbshop_like` (
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sbshop_like`
--

INSERT INTO `sbshop_like` (`user_id`, `product_id`) VALUES
(2, 3),
(2, 26),
(2, 37);

-- --------------------------------------------------------

--
-- Table structure for table `sbshop_order_status`
--

CREATE TABLE `sbshop_order_status` (
  `order_status_id` int(11) NOT NULL,
  `order_status_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sbshop_order_status`
--

INSERT INTO `sbshop_order_status` (`order_status_id`, `order_status_name`) VALUES
(1, 'success'),
(2, 'in order'),
(3, 'fails');

-- --------------------------------------------------------

--
-- Table structure for table `sbshop_product`
--

CREATE TABLE `sbshop_product` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `product_price` double DEFAULT NULL,
  `product_quantity` int(11) DEFAULT NULL,
  `product_category` int(11) DEFAULT NULL,
  `product_img` varchar(2000) DEFAULT NULL,
  `product_promotion` int(11) DEFAULT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sbshop_product`
--

INSERT INTO `sbshop_product` (`product_id`, `product_name`, `product_price`, `product_quantity`, `product_category`, `product_img`, `product_promotion`, `description`) VALUES
(1, 'Converse Chuck Taylor All Star Seasonal', 46, 150, 1, 'https://www.converse.co.th/wp-content/uploads/2020/01/M7652_shot3-1000x932.jpg', 1, ''),
(2, 'Converse Costa OX', 46, 100, 1, 'https://di2ponv0v5otw.cloudfront.net/posts/2020/07/28/5f207b9eefd0e4e71dc85408/m_5f207bcee107bb3d5d460c1f.jpg', 1, ''),
(3, 'Adidas Run Falcon Shoes', 63, 89, 1, 'https://www.messisport.com/30652-medium_default/a5002-adidas-runfalcon-shoes-legend-ink-cloud-white-clear-pink.jpg', 1, ''),
(4, 'Fila Disruptor 3 Formation', 79, 82, 1, 'https://my-test-11.slatic.net/p/65bb9f04b4ae4d674c9fdcbbb7c9eae0.jpg', 1, ''),
(5, 'Nike Cortez Forrest Gump GS', 95, 120, 1, 'https://www.mainstand.co.th/photos/3/cortez/fd.jpg', 1, ''),
(6, 'Nike Benassi Duo Ultra', 47, 65, 2, 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/349aec29-e50b-48bf-a850-84e5781d4143/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B9%81%E0%B8%95%E0%B8%B0%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%AA%E0%B8%A7%E0%B8%A1%E0%B8%9C%E0%B8%B9%E0%B9%89-benassi-duo-ultra-VrTWZZ7g.jpg', 1, ''),
(7, 'Puma Fenty Fur Sildes by Rihanna', 111, 42, 2, 'https://cdn.vox-cdn.com/thumbor/JaD3tVr4XQ0LbnMzcC-5BVBQKLU=/56x0:966x683/1400x1400/filters:focal(56x0:966x683):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/55594157/rihanna-fenty-puma-fur-slide-4-copy.0.0.jpg', 1, ''),
(8, 'Birkenstock', 89, 163, 2, 'https://cf.shopee.co.th/file/9b1b337e9e71fbee644c8ae4154a6327', 1, ''),
(9, 'Havaianas Flash Urban', 38, 59, 2, 'https://image.brazilianbikinishop.com/images/products/sandals-havaianas-havaianas-flash-rosa-0.jpg', 1, ''),
(10, 'FitFlop', 127, 78, 2, 'https://backend.central.co.th/media/catalog/product/C/D/CDS12909865.jpg', 1, ''),
(11, 'Valentino Rockstud Leather Pumps', 155, 112, 3, 'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/4d/P00266135.jpg', 1, ''),
(12, 'Stuart Weitzman Ankle Strap Sandals', 142, 115, 3, 'https://www.assets.jades24.com/data/resizer/crop/374x480/products/nudistsong-black-suede___a_1557821691_original.jpg', 1, ''),
(13, 'YSL Tribute T-Strap Platform Sandals', 168, 104, 3, 'https://cdn.theluxurycloset.com/uploads/opt/products/750x750/luxury-women-saint-laurent-paris-used-shoes-p295833-009.jpg', 1, ''),
(14, 'Christian Louboutin So Kate', 173, 75, 3, 'https://static-eu.christianlouboutin.com/media/catalog/product/cache/50910a554f402a7e962c16653ab289e4/3/1/3130694bk01-3130694bk01-main_image-ecommerce-christianlouboutin-sokate-3130694_bk01_1_1200x1200.jpg', 1, ''),
(15, 'Manolo Blahnik Hangisi pumps', 182, 98, 3, 'https://www.antonia.it/pub/media/catalog/product/cache/9b795eecd2d32e1bd1e4618d2f0c430e/s/s/ss21-manolo-blahnik-9xx-031743265p.jpg', 1, ''),
(16, 'Heavy Shoes VC8776', 46, 59, 4, 'https://f.btwcdn.com/store-46391/product/9249c4ca-f2f0-94f3-5366-5e8fe0758048.jpg', 1, ''),
(17, 'Brown Stone Penny Leather Loafer', 48, 32, 4, 'https://cdn1.productnation.co/stg/sites/6/6018c10a2644a.jpeg', 1, ''),
(18, 'Dapper Plain Moccasin Loafers', 88, 40, 4, 'https://cf.shopee.co.th/file/68dfd500373589bb0fa70febd838db16', 1, ''),
(19, 'ECCO Vitrus II Black Santiago Men Shoes', 95, 110, 4, 'https://cf.shopee.co.th/file/b0a52c3283ea322cb0d7d06d0bccd437', 1, ''),
(20, 'Baoji BK3015', 57, 70, 4, 'https://cdn1.productnation.co/stg/sites/6/6018d0737fc14.jpeg', 1, ''),
(21, 'Givenchy Black Croc gold s1', 268, 150, 5, 'https://image.goxip.com/IYHmUM1x5SIiEvwQTDx4-CCKxHs=/fit-in/400x400/filters:fill(white):format(jpeg):quality(80)/https:%2F%2Fres.cloudinary.com%2Fssenseweb%2Fimage%2Fupload%2Fb_white%252Cc_lpad%252Cg_center%252Ch_960%252Cw_960%2Fc_scale%252Ch_680%2Ff_auto%252Cdpr_1.0%2Fv572%2F201278F040150_1.jpg', 1, ''),
(22, 'Saint Laurent Black Small Compact Monogramme Wallet', 214, 200, 5, 'https://image.goxip.com/DSjSTZJplfOuU6Q4iR-9HqBVspQ=/fit-in/400x400/filters:fill(white):format(jpeg):quality(80)/https:%2F%2Fres.cloudinary.com%2Fssenseweb%2Fimage%2Fupload%2Fb_white%252Cc_lpad%252Cg_center%252Ch_960%252Cw_960%2Fc_scale%252Ch_680%2Ff_auto%252Cdpr_1.0%2Fv572%2F201418F040239_1.jpg', 1, ''),
(23, 'Gucci Pink Small GG Marmont Trifold Wallet', 181, 120, 5, 'https://image.goxip.com/QCk6Mat6FbyVgEw2MpppUHe5RSk=/fit-in/400x400/filters:fill(white):format(jpeg):quality(80)/https:%2F%2Fres.cloudinary.com%2Fssenseweb%2Fimage%2Fupload%2Fb_white%252Cc_lpad%252Cg_center%252Ch_960%252Cw_960%2Fc_scale%252Ch_680%2Ff_auto%252Cdpr_1.0%2Fv572%2F181451F040002_1.jpg', 1, ''),
(24, 'Alexander McQueen Black Croc Skull Bifold Wallet', 162, 78, 5, 'https://res.cloudinary.com/ssenseweb/image/upload/b_white%2Cc_lpad%2Cg_center%2Ch_960%2Cw_960/c_scale%2Ch_680/f_auto%2Cdpr_1.0/v572/202259F037169_1.jpg', 1, ''),
(25, 'Valentino Blue Valentino Garavani Small Rockstud Wallet', 140, 66, 5, 'https://clothbase.s3.amazonaws.com/uploads/8a24756a-2e2b-4f48-8ab1-ddf487084050/201476F040285_1.jpg', 1, ''),
(26, 'Louis Vuitton Nano Speedy', 350, 111, 6, 'https://luxsurie.com/sites/8903/files/s/products/o_1ekiqi45m1u381ibfquj6li15lkb.jpg', 1, ''),
(27, 'BOYY Lucas Canard Green', 436, 200, 6, 'https://mp-media.reebonz.com/images/p-46/reebonz-boyy-lucas-boyy-2-46d7f022-b870-4e3d-a814-250b731497e9.jpg;mode=pad;bgcolor=fff;404=404.jpg;width=402;height=500;quality=100', 1, ''),
(28, 'Balenciaga Ville Top Handle XXS', 329, 198, 6, 'https://image.goxip.com/StTYMxb3txkwauYWJkf0iWeJvcc=/fit-in/400x400/filters:fill(white):format(jpeg):quality(80)/https:%2F%2Fres.cloudinary.com%2Fssenseweb%2Fimage%2Fupload%2Fb_white%252Cc_lpad%252Cg_center%252Ch_960%252Cw_960%2Fc_scale%252Ch_680%2Ff_auto%252Cdpr_1.0%2Fv572%2F191342F046011_1.jpg', 1, ''),
(29, 'Celine Micro Belt Bag in Grained Calfskin', 460, 69, 6, 'https://twicpics.celine.com/product-prd/images/large/189153ZVA.10DC_3_SPR19_130595.jpg', 1, ''),
(30, 'Givenchy Medium Antigona Bag', 470, 10, 6, 'https://cdn.jeab.com/wp-content/uploads/2016/07/Antigona.jpg', 1, ''),
(31, 'Gucci Dionysus GG Supreme Super Mini Bag', 250, 98, 7, 'https://media.shopat24.com/pdmain/410973_00_coach.jpg', 1, ''),
(32, 'Proenza Schouler PS11 Mini Classic', 286, 76, 7, 'https://cdn-images.farfetch-contents.com/proenza-schouler-ps11-mini-classic-bag_12163263_28370098_1320.jpg', 1, ''),
(33, 'Saint Laurent Kate Medium with Tassel in Embossed Crocodile Shiny Leather', 275, 130, 7, 'https://media-cdn.yoogiscloset.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/6/269902_01.jpg', 1, ''),
(34, 'Burberry Medium Quilted Monogram Lambskin TB Bag', 295, 115, 7, 'https://assets.burberry.com/is/image/Burberryltd/23849466c6ac55622a835a21387fe1cb68b7ad8e.jpg?$BBY_V2_SL_1x1$&wid=2800&hei=2800', 1, ''),
(35, 'Fendi Baguette Brown Fabric Bag', 298, 112, 7, 'https://i.pinimg.com/originals/7a/b0/c9/7ab0c97bb6eee2ff7003b730cf515603.jpg', 1, ''),
(36, 'Samsonite ENWRAP', 108, 97, 8, 'https://img10.jd.co.th/n0/jfs/t19/273/720842100/165051/13bca3f3/5d077079N24c90236.jpg!q70.jpg', 1, ''),
(37, 'American Tourister Sunside', 126, 160, 8, 'https://doa.robinson.co.th/media/catalog/product/R/B/RBS34174357.jpg', 1, ''),
(38, 'Rimowa Limbo', 291, 143, 8, 'https://img.kingpowerclick.com/cdn-cgi/image/format=auto/kingpower-com/image/upload/w_640,h_640,f_auto/v1594889384/prod/8212073-L1.jpg', 1, ''),
(39, 'Legend Walker', 123, 75, 8, 'https://img.wongnai.com/p/1600x0/2019/03/19/78006e60afbb41baad61dfa4a583f006.jpg', 1, ''),
(40, 'Elements PCLV-1265 editv2', 1200, 110, 8, 'https://backend.central.co.th/media/catalog/product/1/9/19122052c.jpg', 1, ''),
(94, 'test', 2, 2, 0, 'https://cdn4.425degree.com/media/catalog/product/cache/d25d11de8f4b58d9b6af3e60b30398ee/o/z/ozuko-recreational-waist-bag.jpg', 0, ''),
(117, 'Season', 460, 150, 1, 'jpg', 1, '');

-- --------------------------------------------------------

--
-- Table structure for table `sbshop_product_review`
--

CREATE TABLE `sbshop_product_review` (
  `product_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `text_review` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sbshop_product_review`
--

INSERT INTO `sbshop_product_review` (`product_id`, `user_id`, `text_review`) VALUES
(3, 2, 'good'),
(26, 2, 'beautiful');

-- --------------------------------------------------------

--
-- Table structure for table `sbshop_promotion`
--

CREATE TABLE `sbshop_promotion` (
  `promotion_id` int(11) NOT NULL,
  `promotion_name` varchar(255) NOT NULL,
  `sales_percentage` int(11) NOT NULL,
  `promotion_date_start` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `promotion_date_end` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sbshop_promotion`
--

INSERT INTO `sbshop_promotion` (`promotion_id`, `promotion_name`, `sales_percentage`, `promotion_date_start`, `promotion_date_end`) VALUES
(1, 'Discount all items', 5, '2021-04-12 16:38:56', '2021-04-30');

-- --------------------------------------------------------

--
-- Table structure for table `sbshop_user`
--

CREATE TABLE `sbshop_user` (
  `user_id` int(11) NOT NULL,
  `user_firstname` varchar(50) CHARACTER SET utf8mb4 NOT NULL,
  `user_lastname` varchar(50) CHARACTER SET utf8mb4 NOT NULL,
  `user_username` varchar(50) CHARACTER SET utf8mb4 NOT NULL,
  `user_password` varchar(50) CHARACTER SET utf8mb4 NOT NULL,
  `user_email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_status_id` int(11) NOT NULL,
  `user_address` varchar(200) CHARACTER SET utf8mb4 NOT NULL,
  `user_phone_number` varchar(10) CHARACTER SET utf8mb4 NOT NULL,
  `image` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sbshop_user`
--

INSERT INTO `sbshop_user` (`user_id`, `user_firstname`, `user_lastname`, `user_username`, `user_password`, `user_email`, `user_status_id`, `user_address`, `user_phone_number`, `image`) VALUES
(1, 'thitipong2', 'purinsuwan', 'admin', 'admin', 'tan.admin@mail.com', 3, '101 ม.13 ท่าศาลา,ท่าศาลา', '0999999999', ''),
(2, 'chutima', 'anantakul', 'customer', 'customer', 'chu.admin@mail.com', 2, '383 หมู่ 10', '098520', '');

-- --------------------------------------------------------

--
-- Table structure for table `sbshop_user_status`
--

CREATE TABLE `sbshop_user_status` (
  `user_status_id` int(11) NOT NULL,
  `user_status_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sbshop_user_status`
--

INSERT INTO `sbshop_user_status` (`user_status_id`, `user_status_name`) VALUES
(1, 'พนักงาน'),
(2, 'ลูกค้า'),
(3, 'แอดมิน');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sbshop_categories`
--
ALTER TABLE `sbshop_categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `sbshop_categories_type`
--
ALTER TABLE `sbshop_categories_type`
  ADD PRIMARY KEY (`categories_type_id`);

--
-- Indexes for table `sbshop_in_orders`
--
ALTER TABLE `sbshop_in_orders`
  ADD PRIMARY KEY (`in_order_id`);

--
-- Indexes for table `sbshop_like`
--
ALTER TABLE `sbshop_like`
  ADD PRIMARY KEY (`user_id`,`product_id`);

--
-- Indexes for table `sbshop_order_status`
--
ALTER TABLE `sbshop_order_status`
  ADD PRIMARY KEY (`order_status_id`);

--
-- Indexes for table `sbshop_product`
--
ALTER TABLE `sbshop_product`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `sbshop_product_review`
--
ALTER TABLE `sbshop_product_review`
  ADD PRIMARY KEY (`product_id`,`user_id`);

--
-- Indexes for table `sbshop_promotion`
--
ALTER TABLE `sbshop_promotion`
  ADD PRIMARY KEY (`promotion_id`);

--
-- Indexes for table `sbshop_user`
--
ALTER TABLE `sbshop_user`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_username` (`user_username`);

--
-- Indexes for table `sbshop_user_status`
--
ALTER TABLE `sbshop_user_status`
  ADD PRIMARY KEY (`user_status_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sbshop_categories`
--
ALTER TABLE `sbshop_categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `sbshop_categories_type`
--
ALTER TABLE `sbshop_categories_type`
  MODIFY `categories_type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sbshop_in_orders`
--
ALTER TABLE `sbshop_in_orders`
  MODIFY `in_order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `sbshop_order_status`
--
ALTER TABLE `sbshop_order_status`
  MODIFY `order_status_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `sbshop_product`
--
ALTER TABLE `sbshop_product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=118;

--
-- AUTO_INCREMENT for table `sbshop_promotion`
--
ALTER TABLE `sbshop_promotion`
  MODIFY `promotion_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `sbshop_user`
--
ALTER TABLE `sbshop_user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sbshop_user_status`
--
ALTER TABLE `sbshop_user_status`
  MODIFY `user_status_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
