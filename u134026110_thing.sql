-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 18, 2021 at 09:07 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.7

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
  `in_order_date` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
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
(20, 37, 2, 4, 126, 504, '2021-05-18 03:52:35', 2),
(21, 21, 1, 1, 268, 268, '2021-05-18 15:42:06', 2);

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
(1, 'Converse Chuck Taylor All Star Seasonal', 46, 150, 1, 'https://www.converse.co.th/wp-content/uploads/2020/01/M7652_shot3-1000x932.jpg', 1, 'รองเท้าผ้าใบของสาวห้าวสายลุย สีขาวล้วน ใส่ได้ทุกลุคในวันสบาย ๆ ทั้งหมดนี้คือชื่อเรียกของรองเท้าผ้าใบสุดคลาสสิคของคอนเวิร์สซึ่งเดิมทีคือรองเท้าสำหรับนักกีฬาบาสเก็ตบอล เริ่มต้นจากการที่ นักบาสเก็ตบอลชื่อดัง Charles H. “Chuck” Taylor ที่เป็นแฟนพันธุ์แท้ของ Converse All Star รุ่นแรกๆ มาบอกกับบริษัทว่ารองเท้าที่ผลิตอยู่นั้นมีปัญหาเรื่องส้นรองเท้า ทำให้ใส่ไม่สะดวกและยังทำให้เจ็บเท้าด้วย ทางบริษัทจึงได้ร่วมมือกับนักบาสท่านนี้ เพื่อออกแบบและพัฒนารองเท้าที่เหมาะสำหรับการใส่เล่น บาสเก็ตบอลให้มากที่สุด และต่อมาก็ได้รับความนิยมอย่างมากจนกลายมาเป็นรองเท้าแฟชั่นสุดคลาสสิคแห่งยุค'),
(2, 'Converse Costa OX', 46, 100, 1, 'https://di2ponv0v5otw.cloudfront.net/posts/2020/07/28/5f207b9eefd0e4e71dc85408/m_5f207bcee107bb3d5d460c1f.jpg', 1, 'รองเท้าผ้าใบสีเข้ม ๆ ใส่ได้ไม่กลัวเลอะ พื้นยางนุ่ม Converse เปิดตัวสินค้าไลน์ใหม่ในราคาเบาๆให้เพื่อนๆได้ใส่กันก่อนใครกับ Converse Costa Ox รองเท้าผ้าใบเนื้อผ้าเนียนนุ่มสไตล์สุดเรียบง่ายในราคาประหยัดสุดๆพร้อมพื้น Converse Comfort Cushioning ซึ่งนุ่มและมีน้ำหนักเบาสุดๆ คาดข้างด้วย Chevron Logo สีขาวสุดโดดเด่น ซึ่งทางร้านวางจำหน่ายก่อนกำหนดตั้งแต่วันนี้จำนวน 84 คู่ และวางจำหน่ายพร้อมทั่วโลกอีกครั้งในเดือนมกราคม 2019 ซึ่งเพื่อนๆสามารถเป็นเจ้าของคอลเล็คชั่นใหม่นี้ได้ก่อนใครแล้ววันนี้'),
(3, 'Adidas Run Falcon Shoes', 63, 89, 1, 'https://www.messisport.com/30652-medium_default/a5002-adidas-runfalcon-shoes-legend-ink-cloud-white-clear-pink.jpg', 1, 'รองเท้าวิ่ง น้ำหนักเบามาก มีคุชชั่นรองรับแรงกระแทก เริ่มออกวิ่งเก็บระยะไปพร้อมกับรองเท้าวิ่งน้ำหนักเบาคู่นี้ ไม่ว่าจะวิ่งบนลู่ไฟฟ้าหรือท้องถนน รองเท้าคู่นี้จะช่วยเพิ่มความสบายให้ทุกย่างก้าวด้วยส่วนรับแรงกระแทกที่มีความนุ่ม มาพร้อมอัปเปอร์จากวัสดุผสมที่ระบายอากาศได้ดีและเกราะช่วงกลางเท้าที่ช่วยรองรับเท้าเป็นพิเศษ'),
(4, 'Fila Disruptor 3 Formation', 79, 82, 1, 'https://my-test-11.slatic.net/p/65bb9f04b4ae4d674c9fdcbbb7c9eae0.jpg', 1, 'รองเท้าผ้าใบสายเกาหลี เสริมส้นเพิ่มความสูง รองเท้าลำลองผู้ชาย FILA D-Formation มอบลุคสปอร์ตสุดคูลให้กับคุณ ด้วยดีไซน์สุดโมเดิร์นและวัสดุคุณภาพสูง ให้ดูดีและใส่สบายในเวลาเดียวกัน ทั้งอัปเปอร์หนังนิ่มสังเคราะห์ รอบข้อเท้าและลิ้นรองเท้าบุ่นุ่ม และพื้นรองเท้า EVA ช่วยรองรับแรงกระแทกและนุ่มสบายเท้าทุกย่างก้าว'),
(5, 'Nike Cortez Forrest Gump GS', 95, 120, 1, 'https://www.mainstand.co.th/photos/3/cortez/fd.jpg', 1, 'รองเท้าผ้าใบชิค ๆ แบบในหนัง Forest Gump อันโด่งดัง คู่นี้คลาสสิกมากก อย่างที่เราเห็นกันอยู่บ่อยๆว่าในฐานะแบรนด์ระดับโลกอย่าง Nike ที่มี \" นิสัย \" ชอบใส่ไอเดียความสดใหม่ และ สุดล้ำ เข้าไปให้ไอเท็มของตัวเองอยู่เสมอ อย่างการใช้เทคโนโลยี Flyknit หรือจะเป็นรองเท้าตระกูล Air Max ที่มีอายุเกือบ 30 ปีแล้ว หรือรุ่นอื่น ๆ อย่าง Air Force แต่ถ้าจะให้มองกลับไปที่จุดเริ่มต้นของ Nike จริง ๆ นั้น ประวัติของ Air นั้น ถือว่า เล็กน้อยมากๆ เมื่อเทียบกับรองเท้าชูโรงตัวแรกอย่างแท้จริงของแบรนด์นี้ รองเท้าที่เป็นรากฐานให้อดีตบริษัทนำเข้ารองเท้าญี่ปุ่นกลายเป็นแบรนด์ทีทุกคนต้องจับตามอง นั้นก็คือ Nike Cortez หรือที่เรียกกันในชื่อเดิมของมันว่า “ Tiger Cortez ภายใต้แบรนด์ Onitsuka Tiger ”'),
(6, 'Nike Benassi Duo Ultra', 47, 65, 2, 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/349aec29-e50b-48bf-a850-84e5781d4143/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B9%81%E0%B8%95%E0%B8%B0%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%AA%E0%B8%A7%E0%B8%A1%E0%B8%9C%E0%B8%B9%E0%B9%89-benassi-duo-ultra-VrTWZZ7g.jpg', 1, 'รองเท้ากีฬายี่ห้อดัง การันตีได้ถึงความนิยม Nike Benassi Duo Ultra ยกระดับรูปทรงดั้งเดิมด้วยแถบคาดจากหนังสังเคราะห์บุนวม 2 เส้นรอบปลายเท้า มาพร้อมพื้นรองเท้าโฟมชั้นกลางที่นุ่มพิเศษเพื่อเพิ่มสัมผัสนุ่มเหลือเชื่อ ในขณะเดียวกันดีไซน์พื้นรองเท้าชั้นนอกที่ไม่เหมือนใครก็มีน้ำหนักเบา จึงเป็นรองเท้าแตะ Benassi คู่ที่เบาที่สุดเท่าที่เคยมีมา'),
(7, 'Puma Fenty Fur Sildes by Rihanna', 111, 42, 2, 'https://cdn.vox-cdn.com/thumbor/JaD3tVr4XQ0LbnMzcC-5BVBQKLU=/56x0:966x683/1400x1400/filters:focal(56x0:966x683):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/55594157/rihanna-fenty-puma-fur-slide-4-copy.0.0.jpg', 1, 'รองเท้าแตะเฟอร์นุ่มที่ดีไซน์โดยสาวริฮานน่า มีทั้งหมด 3 สี ใสยังไงก็ดูดี มีความคิ้วท์อีกแล้วว!! Rihanna x PUMA Fenty Fur Slide รองเท้าแตะขนเฟอร์สุดมุ้งมิ้งสีเขียวมิ้นท์สดใสเป็นรองเท้าที่นำกระแส Fur Slide ฮิตจนหลายแบรนด์ออกไลน์ที่เป็นรองเท้าแตะมาสู้เลยทีเดียว สำหรับรองเท้าแตะขนเฟอร์สุดมุ้งมิ้งจากนักร้องสาวมากความสามารถ Rihana (รีฮาน่า) ที่ได้ร่วมมือการออกแบบร่วมกับแบรน์รองเท้าชื่อดังอย่าง PUMA “The Fur Slide by FENTY” ที่เคยสร้างปรากฎการณ์ขายหมดภายในไม่กี่นาที ซึ่งตอนนี้มีข่าวลือว่ากำลังจะออกโทนสีเขียวมินต์ที่ทวีนคูณความมุ้งมิ้งเข้าไปอีก งานนี้จะวางจำหน่ายเป็นทางการเมื่อไหร่ เราจะรีบมาอัพเดทให้รู้กันเป็นที่แรกๆเลย'),
(8, 'Birkenstock', 89, 163, 2, 'https://cf.shopee.co.th/file/9b1b337e9e71fbee644c8ae4154a6327', 1, 'เป็นรองเท้าเพื่อสุขภาพ เพราะจุดประสงค์แรกสุดของผู้ผลิต คือ การสร้างรองเท้าที่ใส่สบาย ใส่มาหลายคู่แล้ว แต่ถ้าไม่แน่ใจกันเล่าให้ฟังอีกนิดก็ได้ Birkenstock มีประวัติความเป็นมาจากประเทศเยอรมันตั้งแต่ปี 1774 อายุอานามปาเข้าไปสองร้อยกว่าปีแล้ว มีต้นกำเนิดจากคุณหมอคนหนึ่งซึ่งต้องยืนผ่าตัดเป็นเวลานานจนปวดเท้า และนั่นจึงเป็นแรงบันดาลใจในการสร้างรองเท้าแบรนด์นี้ขึ้นมา เพราะต้องการรองเท้าที่ใส่สบาย เพราะอะไรถึงใส่สบาย ? เพราะ ต้นฉบับพื้นรองเท้า (Footbed) ระดับพรีเมี่ยมของเบอร์เคนสต๊อก ที่เป็นหัวใจหลักของรองเท้าทุกรุ่น คำว่า “Footbed” (พื้นรองเท้า) ถูกนำมาใช้ครั้งแรกในปี 1930 โดยเบอร์เคนสต๊อกได้อธิบายถึงพื้นรองเท้าด้านในที่มีรูปร่างทางกายวิภาค พร้อมเลียนแบบรอยเท้าตามธรรมชาติบนพื้นทรายช่วยให้เท้ารู้สึกสบายที่สุดเท่าที่จะเป็นได้แม้จะยืนอยู่อย่างชั่วโมงก็ตาม'),
(9, 'Havaianas Flash Urban', 38, 59, 2, 'https://image.brazilianbikinishop.com/images/products/sandals-havaianas-havaianas-flash-rosa-0.jpg', 1, 'มีหลายลายหลายสี ใส่สวยและทนมาก เข้ากับชุดต่างๆ ได้ง่าย HAVAIANAS Flash Urban รองเท้าแตะ HAVAIANAS แบบมีสายรัดส้น มาพร้อมสายอัปเปอร์ทำจากวัสดุ PVC มีความทนทานสูงและมีน้ำหนักเบา พื้นรองเท้าด้านในทำจากยางนุ่มและซัพพอร์ตเท้าอย่างยืดหยุ่น ส่วนพื้นรองเท้าด้านนอกมีความทนทานและเสริมการยึดเกาะพื้นได้ดี เหมาะสำหรับสวมใส่ได้ทุกวัน'),
(10, 'FitFlop', 127, 78, 2, 'https://backend.central.co.th/media/catalog/product/C/D/CDS12909865.jpg', 1, 'ออกแบบตกแต่งด้วยกลิตเตอร์ที่บริเวณสายคาดด้านบนทั้ง 2 สาย ที่ดูสะดุดตา ทั้งใส่สวยและถนอมเท้า รองเท้า FitFlop เป็นแบรนด์จากประเทศอังกฤษ มีวางจำหน่ายทั่วโลก แต่จะมีแหล่งผลิตใหญ่อยู่ที่เอเชีย ฐานการผลิตจะอยู่ที่ประเทศจีน  เวียดนาม  และไทย  โดยที่ประเทศจีนจะเป็นฐานการผลิตที่ใหญ่ที่สุดของ FitFlop  ซึ่งขั้นตอนการผลิตนั้น  ทางอังกฤษจะส่งผู้เชี่ยวชาญมาควบคุมคุณภาพ โดยควบคุมในทุกขั้นตอนของการผลิตเพื่อให้ได้รองเท้าสุขภาพ FitFlop ที่มีประสิทธิภาพสมบรูณ์'),
(11, 'Valentino Rockstud Leather Pumps', 155, 112, 3, 'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/4d/P00266135.jpg', 1, 'รองเท้าส้นสูงประดับหมุดเหล็ก ยอดนิยมของสาวเซเลปคนดังที่จะใส่ออกโชว์หลายๆ งาน Rockstud ของ Valentino นอกจากกระเป๋าที่ได้รับความนิยมเป็นอย่างสูงแล้ว รองเท้าส้นสูงในคอลเล็กชั่นนี้ก็ยังได้ความนิยมไม่แพ้กัน ความโดดเด่นด้วยเส้นสายที่มีหมุดหลายชิ้นที่ประดับอยู่บนทุกส่วนของรองเท้า กลายเป็นจุดเด่นที่สาวๆ ทุกคนให้การยอมรับ และกลายเป็นเอกลักษณ์ที่ส่งต่อสู่รองเท้าดีไซน์อื่นๆ หลากหลายแบบ ตั้งแต่รองเท้าแตะจนถึงส้นสูง\r\n\r\nรองเท้า Rockstud มีเปิดตัวเมื่อปี 2011 โดย Maria Grazia Chiuri และ Pierpaolo Piccioli ครีเอทีฟไดเร็กเตอร์คู่หูของ Valentino โดยรองเท้าดีไซน์ต่างๆ ที่แตกต่างกัน '),
(12, 'Stuart Weitzman Ankle Strap Sandals', 142, 115, 3, 'https://www.assets.jades24.com/data/resizer/crop/374x480/products/nudistsong-black-suede___a_1557821691_original.jpg', 1, 'รองเท้าส้นสูงที่มีสายรัดแค่ข้อเท้า และนิ้วเท้า และหุ้มส้นเท้าเพียงเล็กน้อย ดูเรียบง่าย Stuart Weitzman เริ่มต้นอาชีพใน Wall Street แต่สายตาที่เป็นธรรมชาติของเขาในเรื่องความงามความใส่ใจในรายละเอียดและความเชี่ยวชาญด้านเทคนิคทำให้เขาหันมาสนใจการออกแบบรองเท้าแทน Weitzman ทำงานให้กับ บริษัท ของพ่อของเขาซึ่งเขาเข้ามาในปี 1965 และนับตั้งแต่นั้นเป็นต้นมาได้หล่อหลอมประเพณีการปั๊มเก๋ ๆ ไปจนถึงรองเท้าบู๊ตที่มีสไตล์และรองเท้าส้นเข็ม รองเท้า Stuart Weitzman ผลิตจากหนังและหนังกลับที่หรูหรามีทั้งคุณภาพสูงและความเป็นเลิศทางศิลปะ ดูบทวิจารณ์ Stuart Weitzman ทั้งหมด'),
(13, 'YSL Tribute T-Strap Platform Sandals', 168, 104, 3, 'https://cdn.theluxurycloset.com/uploads/opt/products/750x750/luxury-women-saint-laurent-paris-used-shoes-p295833-009.jpg', 1, 'รองเท้าส้นสูงมีสายรัดที่ดูเริ่ดๆ เหมาะใส่ให้ดูโดดเด่นออกงานได้ รองเท้าส้นสูงสุดคลาสสิกจากแบรนด์ Hi-end ฝรั่งเศสอย่าง Yves Saint Laurent (อีฟ แซงต์ โลรองต์) ที่ได้อดีตดีไซน์เนอร์ของ YSL Francesco Russo เป็นผู้ออกแบบให้ สำหรับ YSL Tribute ได้ถูกออกแบบเป็น Patent Leather หรือหนังแก้ว มีทั้ง Low-heel ส้นสูง 3 นิ้ว ความหนาของ Platform 1 นิ้ว และ High-heel ส้นสูง 4 นิ้ว ความหนา Platform 1 นิ้ว จุดเด่นของ The Tribute คือเป็นรองเท้าหัวเปิดรัดข้อที่บริเวณหน้าเท้าใช้การซ้อนทับกันของสายจนทำให้กลายเป็น Signature ที่เมื่อเห็นรองเท้าคู่นี้ก็จะรู้ได้ทันทีว่าเป็นของแบรนด์ YSL ถึงแม้ว่ารองเท้าคู่นี้จะมีส้นเข็มที่แหลมและสูงแต่ก็ไม่ทำให้เมื่อยเท้ามากนักเพราะมีความหนาของ Platform ที่ค่อนข้างหนาจึงสามารถรองรับการยืนบนส้นสูงนาน ๆ ได้ '),
(14, 'Christian Louboutin So Kate', 173, 75, 3, 'https://static-eu.christianlouboutin.com/media/catalog/product/cache/50910a554f402a7e962c16653ab289e4/3/1/3130694bk01-3130694bk01-main_image-ecommerce-christianlouboutin-sokate-3130694_bk01_1_1200x1200.jpg', 1, 'รองเท้าส้นเข็ม หัวจิก พื้นด้านหลังเป็นสีแดงอันเป็นเอกลักษณ์ ใส่แล้วดูเซ็กซี่ เริ่มกันที่แบรนด์ดังที่เรามั่นใจว่าสาวๆ ค่อนโลกต้องอยากมีไว้ในครอบครองอย่าง Christian Louboutin (คริสเตียน ลูบูแตง) แบรนด์รองเท้าอันโด่งดังด้วยพื้นรองเท้าสีแดงที่ใครเห็นเป็นต้องร้องอ๋อ ด้วยส้นสีแดงอันเป็นเอกลักษณ์และดีไซน์รองเท้าสุดเซ็กซี่ที่ช่วยเพิ่มความมั่นใจให้ผู้สวมใส่ได้เป็นอย่างดี ทำให้แบรนด์นี้เป็นอีกหนึ่งแบรนด์ที่เหล่าเซเลปมักจะเลือกใส่ในโอกาสพิเศษตั้งแต่งานพรมแดงไปจนถึงแฟชั่นโชว์ ส่วนพื้นรองเท้าสีแดงซิกเนเจอร์ของแบรนด์นั้น ขอบอกว่ามาจากความบังเอิญล้วนๆ เพราะว่า Mr. Louboutin ดีไซน์เนอร์เจ้าของแบรนด์ดังเหลือบไปเห็นผู้ช่วยของเขาที่กำลังนั่งทาเล็บสีแดงอยู่ จึงคว้าเอายาทาเล็บนั้นมาทาลงบนพื้นรองเท้าส้นสูงตัวอย่าง เพิ่มความพิเศษจนกลายมาเป็นเอกลักษณ์ของแบรนด์จนถึงปัจจุบัน'),
(15, 'Manolo Blahnik Hangisi pumps', 182, 98, 3, 'https://www.antonia.it/pub/media/catalog/product/cache/9b795eecd2d32e1bd1e4618d2f0c430e/s/s/ss21-manolo-blahnik-9xx-031743265p.jpg', 1, 'รองเท้าส้นสูง 4 นิ้วที่มีเอกลักษณ์ตรงมีเพชร Swarovski ประดับอยู่อย่างโดดเด่น ด้านนอกเป็นผ้าซาตินที่ให้ความเงางามสีสันสวยสด รองเท้า Manolo Blahnik เป็นอีกหนึ่งแบรนด์ที่สาวๆ ไม่ควรพลาด เพราะรองเท้าแบบคลาสสิกที่ใส่เมื่อไหร่ก็ไม่เอ้าท์ ไม่ได้จะหากันได้ง่ายๆ และรองเท้าจาก Manolo Blahnik คือหนึ่งในนั้น แบรนด์สัญชาติสเปนอย่าง Manolo Blahnik เป็นที่รู้จักกันดีว่ามีรองเท้าคู่สวยให้เลือกนับไม่ถ้วน สาวๆ หลายคนต่างอยากมีรองเท้าจาก Manolo Blahnik ไว้ครอบครองกันทั้งนั้น เพราะนอกจากดีไซน์จะสวยคลาสสิก ไม่ตกเทรนด์แล้ว ในภาพยนตร์เรื่องดัง Sex and the City ก็มีตอนที่รองเท้าคู่งามจาก Manolo Blahnik เข้าฉากด้วย กับฉากสุดโรแมนติกที่ Mr.Big คุกเข่าขอ Carrie Bradshaw แต่งงานเป็นรอบที่สอง ทำให้รองเท้าจากแบรนด์นี้ได้รับความนิยมไม่น้อย'),
(16, 'Heavy Shoes VC8776', 46, 59, 4, 'https://f.btwcdn.com/store-46391/product/9249c4ca-f2f0-94f3-5366-5e8fe0758048.jpg', 1, 'ดีไซน์ที่สวยงามและทันสมัย สามารถเข้าได้กับทุกลุค รองเท้าหนังแบบสวม แบรนด์Heavy สำหรับผู้ชาย ผลิตจากหนังแท้ 100% รูปทรงรับกับรูปเท้า นุ่มสบาย สีสันสวยสะดุดตา ช่วยเสริมบุคลิกของคุณให้ดูโดดเด่น เท่ ทุกมุมมอง'),
(17, 'Brown Stone Penny Leather Loafer', 48, 32, 4, 'https://cdn1.productnation.co/stg/sites/6/6018c10a2644a.jpeg', 1, 'ผลิตจากหนังแท้และเป็นหนังออยล์ แบบพรีเมียม ซึ่งมีคุณสมบัติแห้งไว ไม่ดูดซึมน้ำ BROWN STONE Casualist Leather Loafer : The Normal Oil Toffee Tan คุณภาพสูงที่ จังหวัดกรุงเทพมหานคร ในราคา ฿1,590 คุณจะได้รับการรับประกันที่บ้านหากสินค้าตรงตามเงื่อนไขที่เรากำหนดไว้. ร้านค้ายังไม่ได้รับการรับรองความถูกต้องดังนั้นไม่ว่าราคาจะดีเพียงใดคุณยังคงต้องหารือเกี่ยวกับวิธีการตรวจสอบสินค้าอย่างรอบคอบเพื่อให้ทั้งสองฝ่ายพอใจ'),
(18, 'Dapper Plain Moccasin Loafers', 88, 40, 4, 'https://cf.shopee.co.th/file/68dfd500373589bb0fa70febd838db16', 1, 'สวยงามและทันสมัย ทำให้สามารถสวมใส่เข้าได้กับเสื้อผ้าในทุก ๆ ชุด รองเท้าลำลองแบบสวมสไตล์ Moccasins ตัดเย็บด้วยหนังวัวนิ่ม Nappa สีน้ำตาลผิวเรียบ ขัดสีหนังให้ดูมีมิติ ประกอบซับในสีเบจ ประกอบพื้นยางแบบสูงถึงด้านหลัง พื้นด้านในเสริมนุ่ม'),
(19, 'ECCO Vitrus II Black Santiago Men Shoes', 95, 110, 4, 'https://cf.shopee.co.th/file/b0a52c3283ea322cb0d7d06d0bccd437', 1, 'สวมใส่นิ่มสบาย ไม่เมื่อยเท้า พื้นรองเท้าได้รับการออกแบบให้เหมาะสมกับสรีระของเท้า สำหรับรองเท้าหนังผู้ชายคู่ถัดมาอย่าง ECCO Vitrus II Black Santiago Men Shoes เป็นรองเท้าที่มีความโดดเด่นเรื่องการสวมใส่ที่นิ่มสบาย ไม่เมื่อยเท้า เนื่องจากแกนของพื้นรองเท้าได้รับการออกแบบมาให้มีส่วนเว้าและส่วนโค้งที่เหมาะสมกับสรีระของเท้า ทำให้สามารถสวมใส่ได้อย่างสบายและมั่นใจ โดยนอกจากในเรื่องของการสวมใส่ที่นิ่มสบายแล้ว รองเท้าคู่นี้ยังมีความโดดเด่นในเรื่องของดีไซน์ที่สวยงามและมีความคลาสสิก เหมาะสำหรับการใส่ออกงานต่าง ๆ หรือจะสวมใส่ออกไปทำงานก็สามารถทำได้ รีวิวผู้ใช้ ใส่สบาย จัดส่งรวดเร็ว คุ้มค่ามาก'),
(20, 'Baoji BK3015', 57, 70, 4, 'https://cdn1.productnation.co/stg/sites/6/6018d0737fc14.jpeg', 1, 'รองเท้ายังได้รับการดีไซน์ออกมาให้มีลักษณะหัวมน ทำให้เมื่อสวมใส่แล้วหน้าเท้าจะดูมีความเรียว หัวตัด หน้ากว้าง สวมใส่สบาย พื้นบุนุ่ม ผลิตจากหนังสังเคราะห์คุณภาพดี จาก Baoji เหมาะทั้งใส่เรียน ใส่ทำงาน หรือใส่งานทางการ'),
(21, 'Givenchy Black Croc gold s1', 268, 150, 5, 'https://image.goxip.com/IYHmUM1x5SIiEvwQTDx4-CCKxHs=/fit-in/400x400/filters:fill(white):format(jpeg):quality(80)/https:%2F%2Fres.cloudinary.com%2Fssenseweb%2Fimage%2Fupload%2Fb_white%252Cc_lpad%252Cg_center%252Ch_960%252Cw_960%2Fc_scale%252Ch_680%2Ff_auto%252Cdpr_1.0%2Fv572%2F201278F040150_1.jpg', 1, 'ดีเทลกระเป๋าดูหรูหรา มาพร้อมกับอะไหล่โลโก้แบรนด์สีทองตัว G ดูดีมีเอกลักษณ์ กระเป๋าสตางค์แบรนด์ Givenchy รุ่น Black Croc GV3 Bifold Wallet ดีเทลกระเป๋าดูหรูหรา มาพร้อมกับอะไหล่โลโก้แบรนด์สีทองตัว G ดูดีมีเอกลักษณ์ สาวๆคนไหนใช้กระเป๋าใบนี้แล้ว ใครเห็นก็ดูออกว่าเป็นแบรนด์ Givenchy แน่นอนค่ะ ด้านในกระเป๋ามีช่องใส่บัตรจำนวน 5 ช่อง พร้อมช่องใส่เหรียญชิคๆ แค่ใช้กระเป๋าสตางค์ใบนี้ใบเดียวก็เอาอยู่ ไม่ว่าบัตรและแบงค์จะเยอะแค่ไหน จัดไปค่าสาวๆ'),
(22, 'Saint Laurent Black Small Compact Monogramme Wallet', 214, 200, 5, 'https://image.goxip.com/DSjSTZJplfOuU6Q4iR-9HqBVspQ=/fit-in/400x400/filters:fill(white):format(jpeg):quality(80)/https:%2F%2Fres.cloudinary.com%2Fssenseweb%2Fimage%2Fupload%2Fb_white%252Cc_lpad%252Cg_center%252Ch_960%252Cw_960%2Fc_scale%252Ch_680%2Ff_auto%252Cdpr_1.0%2Fv572%2F201418F040239_1.jpg', 1, 'กระเป๋าสตางค์แบรนด์ Saint Laurent รุ่น Black Small Compact Monogramme Wallet รุ่นนี้หรูหรามาก ดีเทลสวยงาม มาพร้อมกับอะไหล่โลโก้แบรนด์สีเงิน YSL ดูดีมีซิกเนเจอร์สุดๆ ใช้แล้วก็รู้ว่าเป็นของแบรนด์อะไร ใครเห็นก็ต้องจำได้ สาวๆที่ชอบความหรูหรา ต้องใช้กระเป๋าสตางค์ใบนี้ของแบรนด์ Saint Laurent นะคะ ด้านในมีช่องใส่บัตรมากถึง 10 ช่อง บัตรเครดิตเยอะแค่ไหนก็ใส่ได้ในกระเป๋าสตางค์ใบเดียว ด้านหลังกระเป๋ามีช่องใส่เหรียญพร้อมซิป ช่วยให้หยิบจับได้ง่ายกว่าเดิม ไม่ต้องเปิดกระเป๋าด้านในให้เสียเวลาเลย'),
(23, 'Gucci Pink Small GG Marmont Trifold Wallet', 181, 120, 5, 'https://image.goxip.com/QCk6Mat6FbyVgEw2MpppUHe5RSk=/fit-in/400x400/filters:fill(white):format(jpeg):quality(80)/https:%2F%2Fres.cloudinary.com%2Fssenseweb%2Fimage%2Fupload%2Fb_white%252Cc_lpad%252Cg_center%252Ch_960%252Cw_960%2Fc_scale%252Ch_680%2Ff_auto%252Cdpr_1.0%2Fv572%2F181451F040002_1.jpg', 1, 'กระเป๋าสตางค์แบรนด์ Gucci รุ่น Pink Small GG Marmont Trifold Wallet รุ่นนี้มีสีชมพู เหมาะกับสาวหวานสุดๆ ใช้แล้วดูเป็นผู้ดีม๊าก ด้านหน้ากระเป๋าสตางค์มีอะไหล่ GG สีทอง บ่งบอกถึงความเป็นแบรนด์ Gucci ได้เป็นอย่างดี มีช่องใส่บัตรจำนวน 4 ช่อง พร้อมช่องใส่เหรียญ ใบนี้สวยหรูดูแพงมาก (ก็แพงจริงๆอ่ะเนอะ) สาวๆที่่หลงรักแบรนด์ Gucci ต้องมีแล้ว'),
(24, 'Alexander McQueen Black Croc Skull Bifold Wallet', 162, 78, 5, 'https://res.cloudinary.com/ssenseweb/image/upload/b_white%2Cc_lpad%2Cg_center%2Ch_960%2Cw_960/c_scale%2Ch_680/f_auto%2Cdpr_1.0/v572/202259F037169_1.jpg', 1, 'กระเป๋าสตางค์แบรนด์ Alexander McQueen รุ่น Black Croc Skull Bifold Wallet รุ่นนี้ชิคมาก ดีเทลดี๊ดี มีอะไหล่รูปหัวกะโหลกด้านหน้ากระเป๋า ซึ่งหัวกะโหลกนี้ถือเป็นสัญลักษณ์ของแบรนด์ Alexander McQueen เลยล่ะค่ะ ใครเห็นก็ต้องจำได้ ส่วนด้านหลังกระเป๋ามีสกรีนโลโก้แบรนด์ Alexander McQUEEN ไว้ ไม่ว่าจะถือไปไหน ก็ต้องมีคนจำได้ว่าใช้แบรนด์อะไรแน่นอน ที่สุดของความปัง! ด้านในมีช่องใส่บัตรจำนวน 3 ช่อง พร้อมช่องใส่เหรียญ ใบนี้ชิคมาก สายแฟต้องมี'),
(25, 'Valentino Blue Valentino Garavani Small Rockstud Wallet', 140, 66, 5, 'https://clothbase.s3.amazonaws.com/uploads/8a24756a-2e2b-4f48-8ab1-ddf487084050/201476F040285_1.jpg', 1, ' กระเป๋าสตางค์แบรนด์ Valentino รุ่น Blue Valentino Garavani Small Rockstud Wallet มาพร้อมกับกระดุมรูปทรงพีระมิด ซึ่งถือเป็นเอกลักษณ์ของแบรนด์ Valentino ใครดูก็รู้ว่าใช้แบรนด์อะไร ไม่ต้องพูดเยอะ สวยหรูที่แท้ทรู! นอกจากนั้นด้านหน้ากระเป๋ายังมีโลโก้แบรนด์ Valentino บ่งบอกอย่างชัดเจนอีกด้วย ไม่ต้องกลัวคนอื่นไม่รู้ว่าใช้แบรนด์อะไรนะคะ สาวปังๆเค้าต้องใช้ใบนี้กัน'),
(26, 'Louis Vuitton Nano Speedy', 350, 111, 6, 'https://luxsurie.com/sites/8903/files/s/products/o_1ekiqi45m1u381ibfquj6li15lkb.jpg', 1, 'กระเป๋าแบรนด์เนมรุ่นฮิต แบรนด์ในตำนาน ทรงจุของได้เยอะ กระเป๋ารุ่น Nano Speedy รุ่นนี้คือกระเป๋า Speedy อันเป็นเอกลักษณ์ของหลุยส์ วิตตองในขนาดย่อส่วนที่สมบูรณ์แบบ โดยรังสรรค์ขึ้นจาก Monogram แคนวาสพร้อมแต่งขอบด้วยหนังธรรมชาติ มาพร้อมหูจับ 2 เส้นและสายยาวสำหรับสะพายไหล่หรือสะพายเฉียง กระเป๋ามีน้ำหนักเบาเป็นพิเศษและมีพื้นที่เพียงพอสำหรับใส่สมาร์ทโฟน บัตร และกุญแจ ทำให้กระเป๋าใบนี้เป็นกระเป๋าใส่ของที่เปี่ยมด้วยสไตล์'),
(27, 'BOYY Lucas Canard Green', 436, 200, 6, 'https://mp-media.reebonz.com/images/p-46/reebonz-boyy-lucas-boyy-2-46d7f022-b870-4e3d-a814-250b731497e9.jpg;mode=pad;bgcolor=fff;404=404.jpg;width=402;height=500;quality=100', 1, 'กระเป๋าแบรนด์เนมรุ่นฮิตมาดเว่อร์ ทำจากหนังลูกวัว สีเขียวมะกอก “BOYY” ต้องบอกเลยว่าไม่มีใครไม่รู้จักจริงไหมล่ะคะ เพราะแบรนด์เขาดังระดับโลกดาราฮอลลีวู้ด เซเลบริตี้ใช้กันทั่วบ้านทั่วเมือง ที่สำคัญเป็นแบรนด์สัญชาติไทย ผลิตที่เมืองไทยที่มีผู้ร่วมก่อตั้งและร่วมออกแบบ คือ คุณบอย-วรรณศิริ คงมั่น ดีไซน์เนอร์สาวชาวไทยที่มีความหลงใหลในกระเป๋าอย่างที่สุด นอกจากดีไซน์ที่เป็นเอกลักษณ์แบบฉบับ BOYY แล้ว หนังของเค้าก็ทำมาจากหนังวัวแท้  คุณภาพก็ไม่แพ้กระเป๋าแบรนด์ดังอื่น ๆ แน่นอน  สาว ๆ คนไหนกำลังสนใจแบรนด์นี้อยู่ วันนี้ Wongnai Beauty รวบรวมกระเป๋ารุ่นยอดฮิตมาให้ดูกันแล้วว '),
(28, 'Balenciaga Ville Top Handle XXS', 329, 198, 6, 'https://image.goxip.com/StTYMxb3txkwauYWJkf0iWeJvcc=/fit-in/400x400/filters:fill(white):format(jpeg):quality(80)/https:%2F%2Fres.cloudinary.com%2Fssenseweb%2Fimage%2Fupload%2Fb_white%252Cc_lpad%252Cg_center%252Ch_960%252Cw_960%2Fc_scale%252Ch_680%2Ff_auto%252Cdpr_1.0%2Fv572%2F191342F046011_1.jpg', 1, 'กระเป๋าหนังทรงแข็งสีดำลายขาว ใบเล็กกะทัดรัด บ้านแฟชั่นสไตล์สเปนของ Balenciaga นำเสนอรูปแบบล้ำสมัยที่สร้างความสมดุลให้กับเงาที่ดูสะอาดตาและทันสมัยด้วยรูปทรงที่แข็งแกร่งและนวัตกรรมที่มีการปรับแต่งดังที่นำเสนอโดยกระเป๋าหิ้ว XXS หนังหลากสี Ville โดดเด่นด้วยการติดซิปสองทางฮาร์ดแวร์โทนสีทองตราประทับโลโก้นูนด้านหน้าตราประทับโลโก้ภายในและโลโก้พิมพ์สีขาวตัดกันที่ด้านหน้า'),
(29, 'Celine Micro Belt Bag in Grained Calfskin', 460, 69, 6, 'https://twicpics.celine.com/product-prd/images/large/189153ZVA.10DC_3_SPR19_130595.jpg', 1, 'กระเป๋าแบรนด์เนมเรียบหรู ทรงสวย หนังดี เป็นรอยยาก สีเทาคลาสสิก Belt Bag เป็นกระเป๋ามาจากแบรนด์ดังที่สาว ๆ หลายคนคุ้นหูอย่าง เซลีน (Celine) เป็น ITEM ฮิตไม่มีวันตกแทรนด์ อย่างแน่นอน ทั้งรูปลักษณ์ ดีไซน์ที่ดูสวยงามสะดุดตา พร้อมทั้งยังมีขนาดให้เลือกหลากหลาย สามารถนำออกมาใช้งานได้ในชีวิตประจำวันอีกด้วย แถมคอลเล็กชั่นนี้ยังเป็นที่หมายปองของสาว ๆ หลายต่อหลายคน'),
(30, 'Givenchy Medium Antigona Bag', 470, 10, 6, 'https://cdn.jeab.com/wp-content/uploads/2016/07/Antigona.jpg', 1, 'กระเป๋าหนังแข็งทรงอ้วน ๆ จุของได้เยอะ เป็นหนึ่งในรุ่นที่ได้รับความนิยมสูงที่สุดของแบรนด์จนขึ้นชื่อว่าเป็นกระเป๋าไอคอน (Iconic Bag) โดยสาเหตุที่หลายคนชื่นชอบนั้นมาจากสไตล์ที่ดูสะอาดสะอ้านและทันสมัยแบบไม่ซ้ำใคร อีกทั้งยังมีส่วนโค้งที่ดูสมูธและไม่ซับซ้อน นอกจากนี้ในด้านของคุณสมบัติการใช้งานนั้นเรียกได้ว่าอเนกประสงค์สุด ๆ เพราะใส่ของได้มากและเข้ากับการแต่งตัวหลายสไตล์ ตั้งแต่สไตล์สาวออฟฟิศไปจนถึงแนว Street เลยทีเดียว '),
(31, 'Gucci Dionysus GG Supreme Super Mini Bag', 250, 98, 7, 'https://media.shopat24.com/pdmain/410973_00_coach.jpg', 1, 'กระเป๋าแคนวาสลาย GG สายโซ่ ไว้ใส่ของกระจุกกระจิก ออกงาน กระเป๋าซูเปอร์มินิโซ่ GG Supreme canvas ที่มีรูปแบบสายเป็นสายโซ่ เป็นกระเป๋าใบเล็กกะทัดรัด ใช้งานได้หลายโอกาส พกพาง่าย มีช่องใส่ของที่ใหญ่ สามารถใสของกระจุก กระจิกได้จุใจสาวๆ ไม่ว่าจะเป็นเครื่องสำอางหรือมือถือก็ใส่ได้หมดค่า ที่ปิดกระเป๋าเป็นรูปคล้ายหัวเสือ เปิดปิดง่าย\r\nกระเป๋ารุ่นนี้เป็นผ้าใบ GG Supreme หนังกลับสีน้ำตาลอมเทา ที่เปิดปิดเป็นหัวเสือผลิตจากฮาร์ดแวร์ที่กระชับด้วยแพลเลเดียม เป็นสายสะพายโซ่เก๋ๆ ยาว 23.5 นิ้วขนาดกระเป๋า 6.5 “W x 4” H x 1.5 “D ผลิตจากประเทศอิตาลี'),
(32, 'Proenza Schouler PS11 Mini Classic', 286, 76, 7, 'https://cdn-images.farfetch-contents.com/proenza-schouler-ps11-mini-classic-bag_12163263_28370098_1320.jpg', 1, 'กระเป๋าแบรนด์เนมคลาสสิก สไตล์สาวออฟฟิศอีกใบที่ใช้ทน หนังแข็งไม่เป็นรอย ขนาด mini เป็นขนาดยอดนิยมในฝั่งเอเซีย เพราะมีขนาดเล็ก น่ารัก คล่องตัว น้ำหนักไม่มาก  แต่ติดที่ขนาดบรรจุที่น้อยไปหน่อย ขนาด classic มีขนาดใหญ่ขึ้น ความจุมากขึ้น แต่ก็มีน้ำหนักมากตามไปด้วย เหมาะกับผู้ใช้ที่ต้องเดินทางบ่อย แบบใบเดียวจบ ขณะที่ราคา รุ่น mini กับ  classic ต่างกัน 175€ ประมาณ 7000 บาท แต่ BRANDinCITY เอาใจลูกค้าที่กำลังลังเลโดยเสนอราคาที่ต่างกันไม่มาก ในขนาด mini ที่  49,000 บาท  กับขนาด classic ที่ 50,000 บาท'),
(33, 'Saint Laurent Kate Medium with Tassel in Embossed Crocodile Shiny Leather', 275, 130, 7, 'https://media-cdn.yoogiscloset.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/6/269902_01.jpg', 1, 'กระเป๋าหนังจระเข้สีดำ สะพายข้างหรือถือเป็นคลัตช์ออกงาน คอลเลคชันนี้ได้รับความนิยมเป็นอย่างมากนับตั้งแต่มีการเปิดตัว ทำให้ได้รับการผลิตออกมาในทุก ๆ ซีซัน แต่ละซีซันผู้ออกแบบจะมีการเพิ่มดีเทลต่าง ๆ รวมถึงการเลือกใช้สีที่แตกต่างกันออกไปตามเทรนด์ของแต่ละปี โดยความโดดเด่นของกระเป๋ารุ่นนี้อยู่ที่การออกแบบและการตัดเย็บที่ดูคลาสสิก ด้านข้างจะสามารถขยายขนาดได้ตามความจุที่ต้องการ นอกจากนี้ ยังมาพร้อมกับสายที่ปรับความยาวและถอดได้ตามความเหมาะสม'),
(34, 'Burberry Medium Quilted Monogram Lambskin TB Bag', 295, 115, 7, 'https://assets.burberry.com/is/image/Burberryltd/23849466c6ac55622a835a21387fe1cb68b7ad8e.jpg?$BBY_V2_SL_1x1$&wid=2800&hei=2800', 1, 'กระเป๋าหนังแกะนุ่มนิ่ม ลายควิลต์โมโนแกรม Burberry สีน้ำผึ้ง มีสไตล์ที่หลากหลายให้คุณเลือกสะพายแบบสะพายไหล่ คาดเอว หรือคลัทช์ได้ตามความเหมาะสม ที่สำคัญคือ วัสดุที่ใช้ผลิตกระเป๋ามีตั้งแต่แคนวาสไปจนถึงหนังสัตว์พิมพ์ลายนูน มาพร้อมกับโลโก้ TB หลายสีให้เลือก ไม่ว่าจะเป็นสีเงิน สีทอง และสีน้ำเงินอมเขียว เนื่องจากกระเป๋าในรุ่นนี้มีให้เลือกหลายรูปแบบทำให้ความเหมาะกับใช้งานของแต่ละแบบก็แตกต่างกันออกไป ขึ้นอยู่กับความต้องการของแต่ละคน'),
(35, 'Fendi Baguette Brown Fabric Bag', 298, 112, 7, 'https://i.pinimg.com/originals/7a/b0/c9/7ab0c97bb6eee2ff7003b730cf515603.jpg', 1, 'กระเป๋าแบรนด์เนมของสาวสายแฟชั่น ทรง Baguette ที่เป็น Signature สีน้ำตาลลาย FF กระเป๋าถัก แบรนด์หรู FENDI FF BRAIDED BAGUETTE BROWN AND BEIGE JACQUARD INTERLACE WOVEN FABRIC CROSSBODY SHOULDER BAG กระเป๋าเฟนดิ รุ่นแบกูเลต ผ้าแคนวาสเนื้อหนาอย่างดี ตัวกระเป๋าถักแน่นหนา ดีเทลละเอียด งานสวยเก๋มากๆค่ะ มาพร้อมสายคล้องแขน และสายสะพายข้างครอสบอดี้ สีน้ำตาลคลาสสิค หยิบใช้ได้บ่อยนะคะดีไซน์แบบนี้ สินค้าคุณภาพนำเข้า งาน hi end เทียบแท้ 1:1 ราคา 5,800+100ems เท่านั้น (ของแท้ในช้อปราคาอยู่ที่ $2700 หรือ 94,500.- บาทไทยเลยหน่า) สั่งงานก๊อปเทพๆ ใช้แทนของแท้เนียนๆ ไม่ต้องจ่ายเงินแพงหลักแสน'),
(36, 'Samsonite ENWRAP', 108, 97, 8, 'https://img10.jd.co.th/n0/jfs/t19/273/720842100/165051/13bca3f3/5d077079N24c90236.jpg!q70.jpg', 1, 'แบรนด์ดังระดับโลกที่ขึ้นชื่อเรื่องกระเป๋าเดินทางที่ทั้งถึกและทน รุ่น ENWRAP มาในคอนเซ็ปต์การ Wrap สิ่งของ ทำให้ดูแลห่อหุ้มสัมภาระได้ปลอดภัย แถมป้องกันรอยขีดข่วน กระเป๋าเดินทาง Samsonite รุ่น ENWRAP มีคอนเซปต์การออกแบบมาจากการ Wrap สิ่งของ หรือการห่อของขวัญล้ำค่า ที่กระเป๋าเดินทางรุ่น Enwrap จะดูแลห่อหุ้มสัมภาระของคุณอย่างปลอดภัยตลอดทริปการเดินทาง พร้อมดีไซน์ที่เป็น แนวทางด้านหน้าจะช่วยลดการเกิดรอยขีดข่วนได้ดี โดดเด่นยิ่งขึ้นสำหรับสีกระเป๋าที่มีให้เลือกทั้งผิวด้านอย่าง MATTE LATTE และ MATTE BLACK หรือผิวเงางามอย่าง METALLIC GREEN ที่สามารถเลือกให้เหมาะกับสไตล์ของคุณเอง\r\n'),
(37, 'American Tourister Sunside', 126, 160, 8, 'https://doa.robinson.co.th/media/catalog/product/R/B/RBS34174357.jpg', 1, 'ทำจากโพลีโพรพิลีนหรือ PP มีขนาดใหญ่ถึง 29 นิ้ว กระเป๋าเดินทางรุ่น TRIBUS กับรุปแบบกระเป๋าเดินทางแบบเฟรม(ไร้ซิบ) และระบบ 3 point TSA lock ระบบล๊อค3จุด แข็งแรง มั่นใจความปลอดภัยทุกการเดินทาง ป้องกันการกรีดซิบ Double wheel ล้อคู่ลากลื่นไม่ติดขัดรองรับน้ำหนักได้ดี พื้นผิวป้องกันรอยขูดขีด Name Tag ป้ายชื่อ วัสดุโพลีพรอพเพอลีน 100%'),
(38, 'Rimowa Limbo', 291, 143, 8, 'https://img.kingpowerclick.com/cdn-cgi/image/format=auto/kingpower-com/image/upload/w_640,h_640,f_auto/v1594889384/prod/8212073-L1.jpg', 1, 'ดีไซน์เรียบหรู คลาสสิก น้ำหนักเบา ทำจากอะลูมิเนียม RIMOWA เป็นบริษัทที่เชี่ยวชาญในการผลิตกระเป๋าเดินทางด้วยไม้และหนัง ก่อตั้งขึ้นเมื่อปี 1898 โดยนาย Paul Morszeck\r\nระหว่างปี 1930 โรงงานของ RIMOWA ได้เกิดอุบัติเหตุไฟไหม้ ทำให้โครงสร้างและวัตถุดิบต่างๆ ไหม้ไปเกือบหมด เหลือเพียงแต่ อะลูมิเนียม'),
(39, 'Legend Walker', 123, 75, 8, 'https://img.wongnai.com/p/1600x0/2019/03/19/78006e60afbb41baad61dfa4a583f006.jpg', 1, 'ดีไซน์เก๋ไก๋ไม่เหมือนใคร สีแนวคลาสสิกตัดขอบสีน้ำตาลให้ความรู้สึกวินเทจ ทำจากโพลีโพรพิลีน (PP) นอกจากทนทานแล้วน้ำหนักยังเบา แถมกันรอยขีดข่วน LEGEND WALKER กระเป๋าเดินทางคุณภาพเยี่ยม คัดสรรวัสดุที่แข็งแรง ทนทาน มั่นใจได้ในทุกการเดินทาง กระเป๋าเดินทาง LEGEND WALKER มีดีไซน์สวย เรียบหรู ทันสมัย เหมาะสำหรับทุกโอกาสการใช้งาน เลือกกระเป๋าเดินทาง LEGEND WALKER หลากหลายสไตล์ที่เหมาะกับตัวคุณได้ อาทิ กระเป๋าเดินทางทรงแข็ง กระเป๋าเดินทาง 4 ล้อ เป็นต้น'),
(40, 'Elements PCLV-1265 edit v2 ', 1200, 110, 8, 'https://backend.central.co.th/media/catalog/product/1/9/19122052c.jpg', 1, 'ผลิตจากโพลีคาร์บอเนต (PC) ทนทาน แถมยังมีโครงสร้างภายในที่ทำให้เบาเป็นพิเศษ ดีไซน์จะเป็นเรียบ ๆ ดูทันสมัย ไซส์ใหญ่ถึง 28 นิ้ว'),
(94, 'test', 2, 2, 0, 'https://cdn4.425degree.com/media/catalog/product/cache/d25d11de8f4b58d9b6af3e60b30398ee/o/z/ozuko-recreational-waist-bag.jpg', 0, '');

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
(21, 1, 'very'),
(26, 2, 'beautiful');

-- --------------------------------------------------------

--
-- Table structure for table `sbshop_promotion`
--

CREATE TABLE `sbshop_promotion` (
  `promotion_id` int(11) NOT NULL,
  `promotion_name` varchar(255) NOT NULL,
  `sales_percentage` int(11) NOT NULL,
  `promotion_date_start` timestamp NULL DEFAULT current_timestamp(),
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
(1, 'thitipong', 'purinsuwan', 'admin', 'admin', 'tan.admin@mail.com', 3, '101 ม.13 ท่าศาลา,ท่าศาลา', '0999999999', 'https://scontent.furt2-1.fna.fbcdn.net/v/t1.6435-9/42837654_1578695845610208_2201200443193819136_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=9fUuh7ouJxAAX8Dm7pI&_nc_ht=scontent.furt2-1.fna&oh=eadf67062dd0915a7972cf5f23125e06&oe=60C7F7D7'),
(2, 'chutima', 'anantakul', 'customer', 'customer', 'chu.admin@mail.com', 2, '383 หมู่ 10', '098520', 'https://scontent.furt2-1.fna.fbcdn.net/v/t1.6435-9/67908210_861324394268267_1717379743168331776_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=174925&_nc_ohc=B8VhyeoSKq4AX_Wx_Vr&_nc_ht=scontent.furt2-1.fna&oh=3c4902fc9b48a2b65240d1ef5a39881e&oe=60CA2F60'),
(3, 'piyamin', 'chaima', 'em1', 'em1', 'piyamin@mail.com', 1, '222 m.10 ', '0884726598', 'https://scontent.fhdy3-1.fna.fbcdn.net/v/t1.15752-9/186561541_194602595730457_426405025948894986_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeF0NRZwF5AjwRV-UAoPRezKbkZoUfsErnRuRmhR-wSudD74T2F9ZXOVIDKiCRyL8Yef5AMEGJcXurSClJDgGzj8&_nc_ohc=9mngVt_6hWgAX_ENhN9&_nc_ht=scontent.fhdy3-1.fna&oh=ed896bab93f47053ec812f300de767dc&oe=60C9FE20'),
(4, 'chanikan', 'potjamanpong', 'em2', 'em2', 'chanikan@mail.com', 1, '123 m.3 ', '0984567832', 'https://scontent.fhdy3-1.fna.fbcdn.net/v/t1.15752-9/187114452_817826275606472_405779122854283764_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeFBbdcve6DqKl-112RDPdewc9448G_-7IBz3jjwb_7sgP5SI4N_Hln714PStyqpsCh_QpjIMYPdmcU6lxKDlBxb&_nc_ohc=nTB7LH5v9IYAX-NOLYz&_nc_ht=scontent.fhdy3-1.fna&oh=3aaca09b3a4d014d80b357c1c6e4de45&oe=60C9F5AD');

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
  MODIFY `in_order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `sbshop_order_status`
--
ALTER TABLE `sbshop_order_status`
  MODIFY `order_status_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `sbshop_product`
--
ALTER TABLE `sbshop_product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=119;

--
-- AUTO_INCREMENT for table `sbshop_promotion`
--
ALTER TABLE `sbshop_promotion`
  MODIFY `promotion_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `sbshop_user`
--
ALTER TABLE `sbshop_user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `sbshop_user_status`
--
ALTER TABLE `sbshop_user_status`
  MODIFY `user_status_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
