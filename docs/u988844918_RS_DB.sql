-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 16, 2026 at 09:22 AM
-- Server version: 11.8.9-MariaDB-log
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u988844918_RS_DB`
--

-- --------------------------------------------------------

--
-- Table structure for table `Amenity`
--

CREATE TABLE `Amenity` (
  `id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `name` varchar(191) NOT NULL,
  `icon` varchar(191) DEFAULT NULL,
  `category` enum('SECURITY','RECREATION','CONVENIENCE','ENVIRONMENT','SPORTS','UTILITY','OTHER') NOT NULL DEFAULT 'OTHER',
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `AttendanceLog`
--

CREATE TABLE `AttendanceLog` (
  `id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `check_in_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `check_out_at` datetime(3) DEFAULT NULL,
  `working_duration_minutes` int(11) DEFAULT NULL,
  `status` varchar(191) NOT NULL,
  `source` varchar(191) NOT NULL DEFAULT 'QR_SCAN',
  `branch_id` int(11) DEFAULT NULL,
  `notes` varchar(191) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `AttendanceLog`
--

INSERT INTO `AttendanceLog` (`id`, `employee_id`, `check_in_at`, `check_out_at`, `working_duration_minutes`, `status`, `source`, `branch_id`, `notes`) VALUES
(1, 2, '2026-09-01 04:55:51.109', '2026-09-01 12:31:32.032', 456, 'PRESENT', 'QR_SCAN', 1, NULL),
(2, 3, '2026-09-01 05:00:21.635', '2026-09-01 12:31:55.363', 452, 'PRESENT', 'QR_SCAN', 1, NULL),
(3, 4, '2026-09-01 05:00:21.867', '2026-09-01 12:33:24.099', 453, 'PRESENT', 'QR_SCAN', 1, NULL),
(4, 7, '2026-09-01 05:00:41.705', '2026-09-01 12:33:34.749', 533, 'PRESENT', 'QR_SCAN', 1, NULL),
(5, 6, '2026-09-01 05:00:03.685', '2026-09-01 12:35:23.275', 535, 'PRESENT', 'QR_SCAN', 1, NULL),
(6, 2, '2026-09-02 04:21:05.941', '2026-09-02 12:31:08.847', 490, 'PRESENT', 'QR_SCAN', 1, NULL),
(7, 4, '2026-09-02 04:22:59.924', '2026-09-02 12:31:27.279', 488, 'PRESENT', 'QR_SCAN', 1, NULL),
(8, 3, '2026-09-02 04:53:45.419', '2026-09-02 12:31:43.274', 458, 'PRESENT', 'QR_SCAN', 1, NULL),
(9, 7, '2026-09-02 04:45:05.652', '2026-09-02 12:36:42.565', 417, 'PRESENT', 'QR_SCAN', 1, NULL),
(10, 2, '2026-09-03 04:14:37.707', '2026-09-03 12:31:06.373', 496, 'PRESENT', 'QR_SCAN', 1, NULL),
(11, 3, '2026-09-03 04:40:25.114', '2026-09-03 12:31:42.835', 471, 'PRESENT', 'QR_SCAN', 1, NULL),
(12, 7, '2026-09-03 04:53:16.595', '2026-09-03 13:45:08.701', 532, 'PRESENT', 'QR_SCAN', 1, NULL),
(13, 4, '2026-09-03 05:00:11.181', '2026-09-03 12:31:22.949', 451, 'PRESENT', 'QR_SCAN', 1, NULL),
(14, 6, '2026-09-03 05:15:55.200', '2026-09-03 13:08:51.075', 473, 'LATE', 'QR_SCAN', 1, NULL),
(15, 17, '2026-09-03 09:28:35.067', '2026-09-03 13:20:16.383', 232, 'PRESENT', 'QR_SCAN', 1, NULL),
(16, 2, '2026-09-04 04:25:03.096', '2026-09-04 12:31:10.304', 486, 'PRESENT', 'QR_SCAN', 1, NULL),
(17, 3, '2026-09-04 04:26:48.478', '2026-09-04 12:32:37.741', 486, 'PRESENT', 'QR_SCAN', 1, NULL),
(18, 4, '2026-09-04 05:25:35.713', '2026-09-04 12:32:15.067', 427, 'LATE', 'QR_SCAN', 1, NULL),
(19, 7, '2026-09-04 04:55:46.701', '2026-09-04 13:32:25.752', 517, 'PRESENT', 'QR_SCAN', 1, NULL),
(20, 6, '2026-09-04 05:49:32.126', '2026-09-04 13:32:25.752', 463, 'APPROVED_LATE', 'QR_SCAN', 1, NULL),
(21, 17, '2026-09-04 09:38:37.804', '2026-09-04 14:02:09.454', 264, 'PRESENT', 'QR_SCAN', 1, NULL),
(22, 2, '2026-09-05 04:12:33.867', '2026-09-05 12:56:53.090', 524, 'PRESENT', 'QR_SCAN', 1, NULL),
(23, 4, '2026-09-05 04:49:35.667', '2026-09-05 12:56:53.090', NULL, 'PRESENT', 'QR_SCAN', 1, NULL),
(24, 7, '2026-09-05 04:35:10.782', '2026-09-05 12:56:53.090', NULL, 'PRESENT', 'QR_SCAN', 1, NULL),
(25, 2, '2026-09-07 04:59:45.756', '2026-09-07 12:31:06.414', 451, 'PRESENT', 'QR_SCAN', 1, NULL),
(26, 3, '2026-09-07 04:45:11.034', '2026-09-07 12:31:42.279', 467, 'PRESENT', 'QR_SCAN', 1, NULL),
(27, 4, '2026-09-07 04:42:06.365', '2026-09-07 12:31:22.117', 469, 'PRESENT', 'QR_SCAN', 1, NULL),
(28, 7, '2026-09-07 04:45:56.605', '2026-09-07 12:31:22.117', NULL, 'PRESENT', 'QR_SCAN', 1, NULL),
(29, 6, '2026-09-07 06:00:42.773', '2026-09-07 12:31:22.117', NULL, 'LATE', 'QR_SCAN', 1, NULL),
(30, 2, '2026-09-08 04:27:21.313', '2026-09-08 12:34:19.239', 487, 'PRESENT', 'QR_SCAN', 1, NULL),
(31, 4, '2026-09-08 04:35:38.697', '2026-09-08 12:34:37.624', 479, 'PRESENT', 'QR_SCAN', 1, NULL),
(32, 3, '2026-09-08 04:54:09.649', '2026-09-08 12:34:54.415', 461, 'PRESENT', 'QR_SCAN', 1, NULL),
(33, 7, '2026-09-08 04:54:09.649', '2026-09-08 13:03:21.505', NULL, 'PRESENT', 'QR_SCAN', 1, NULL),
(34, 6, '2026-09-08 04:54:09.649', '2026-09-08 13:03:21.505', 489, 'PRESENT', 'QR_SCAN', 1, NULL),
(35, 2, '2026-09-09 04:10:10.839', '2026-09-09 12:31:07.884', 501, 'PRESENT', 'QR_SCAN', 1, NULL),
(36, 4, '2026-09-09 04:42:21.254', '2026-09-09 12:31:48.979', 469, 'PRESENT', 'QR_SCAN', 1, NULL),
(37, 3, '2026-09-09 04:50:47.915', '2026-09-09 12:32:34.077', 462, 'PRESENT', 'QR_SCAN', 1, NULL),
(38, 6, '2026-09-09 04:53:47.630', '2026-09-09 12:31:32.198', 458, 'PRESENT', 'QR_SCAN', 1, NULL),
(39, 7, '2026-09-09 04:57:05.778', '2026-09-09 12:31:14.500', 454, 'PRESENT', 'QR_SCAN', 1, NULL),
(40, 2, '2026-09-10 04:22:15.568', '2026-09-10 12:31:12.333', 489, 'PRESENT', 'QR_SCAN', 1, NULL),
(41, 4, '2026-09-10 04:26:06.141', '2026-09-10 12:32:41.504', 487, 'PRESENT', 'QR_SCAN', 1, NULL),
(42, 3, '2026-09-10 04:53:56.055', '2026-09-10 12:32:11.523', 458, 'PRESENT', 'QR_SCAN', 1, NULL),
(43, 6, '2026-09-10 05:48:11.890', '2026-09-10 12:32:11.523', NULL, 'LATE', 'QR_SCAN', 1, NULL),
(44, 7, '2026-09-10 04:50:42.492', '2026-09-10 12:32:11.523', NULL, 'PRESENT', 'QR_SCAN', 1, NULL),
(45, 17, '2026-09-10 07:24:12.480', '2026-09-10 12:32:11.523', NULL, 'PRESENT', 'QR_SCAN', 1, NULL),
(47, 2, '2026-09-11 04:15:43.391', '2026-09-11 13:48:26.528', 573, 'PRESENT', 'QR_SCAN', 1, NULL),
(48, 33, '2026-09-11 04:23:32.035', '2026-09-11 18:30:00.000', 846, 'PRESENT', 'QR_SCAN', 1, NULL),
(49, 4, '2026-09-11 04:45:54.079', '2026-09-11 13:48:39.782', 543, 'PRESENT', 'QR_SCAN', 1, NULL),
(50, 3, '2026-09-11 04:49:59.626', '2026-09-11 13:49:02.905', 539, 'PRESENT', 'QR_SCAN', 1, NULL),
(51, 17, '2026-09-11 07:31:45.979', '2026-09-11 18:30:00.000', 658, 'PRESENT', 'QR_SCAN', 1, NULL),
(52, 6, '2026-09-11 05:30:51.724', '2026-09-11 18:30:00.000', 779, 'LATE', 'QR_SCAN', 1, NULL),
(53, 16, '2026-09-11 13:21:03.355', '2026-09-11 18:30:00.000', 309, 'HALF_DAY', 'QR_SCAN', 1, NULL),
(54, 2, '2026-09-12 03:56:22.609', '2026-09-12 12:31:04.441', 515, 'PRESENT', 'QR_SCAN', 1, NULL),
(55, 4, '2026-09-12 04:03:10.727', '2026-09-12 12:34:19.356', 511, 'PRESENT', 'QR_SCAN', 1, NULL),
(56, 33, '2026-09-12 04:28:12.302', '2026-09-12 18:30:00.000', 842, 'PRESENT', 'QR_SCAN', 1, NULL),
(57, 3, '2026-09-12 04:42:29.096', '2026-09-12 12:33:24.211', 471, 'PRESENT', 'QR_SCAN', 1, NULL),
(58, 6, '2026-09-12 06:41:04.551', '2026-09-12 18:30:00.000', 709, 'HALF_DAY', 'QR_SCAN', 1, NULL),
(59, 17, '2026-09-12 08:37:46.870', '2026-09-12 18:30:00.000', 592, 'PRESENT', 'QR_SCAN', 1, NULL),
(60, 2, '2026-09-15 03:59:02.208', '2026-09-15 12:31:03.242', 512, 'PRESENT', 'QR_SCAN', 1, NULL),
(61, 3, '2026-09-15 04:32:50.813', '2026-09-15 12:31:34.779', 479, 'PRESENT', 'QR_SCAN', 1, NULL),
(62, 33, '2026-09-15 04:39:57.583', NULL, NULL, 'PRESENT', 'QR_SCAN', 1, NULL),
(63, 4, '2026-09-15 04:42:13.751', '2026-09-15 12:31:25.383', 469, 'PRESENT', 'QR_SCAN', 1, NULL),
(64, 7, '2026-09-15 04:51:02.166', NULL, NULL, 'PRESENT', 'QR_SCAN', 1, NULL),
(65, 6, '2026-09-15 05:31:22.986', NULL, NULL, 'LATE', 'QR_SCAN', 1, NULL),
(66, 2, '2026-09-16 04:13:43.508', NULL, NULL, 'PRESENT', 'QR_SCAN', 1, NULL),
(67, 3, '2026-09-16 04:48:02.337', NULL, NULL, 'PRESENT', 'QR_SCAN', 1, NULL),
(68, 4, '2026-09-16 05:14:17.793', NULL, NULL, 'LATE', 'QR_SCAN', 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `AttendanceProposal`
--

CREATE TABLE `AttendanceProposal` (
  `id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `type` varchar(191) NOT NULL,
  `target_date` datetime(3) NOT NULL,
  `reason` varchar(191) NOT NULL,
  `status` varchar(191) NOT NULL DEFAULT 'PENDING',
  `reviewed_by` int(11) DEFAULT NULL,
  `reviewed_at` datetime(3) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `AttendanceProposal`
--

INSERT INTO `AttendanceProposal` (`id`, `employee_id`, `type`, `target_date`, `reason`, `status`, `reviewed_by`, `reviewed_at`, `created_at`, `updated_at`) VALUES
(1, 2, 'LEAVE', '2026-09-02 18:30:00.000', 'Good afternoon, Sir. I’m not feeling well( personal problem)need to take rest . I kindly request you to grant me leave for tomorrow. I apologize for the short notice and request your understa', 'REJECTED', 1, '2026-09-03 07:11:03.899', '2026-09-02 06:36:15.975', '2026-09-03 07:11:03.900'),
(2, 6, 'LATE_CHECKIN', '2026-09-04 05:30:00.000', 'Krishna ashtami Puja so that s why I want take one hour extra time ', 'APPROVED', 1, '2026-09-04 10:12:32.422', '2026-09-04 03:36:14.806', '2026-09-04 10:12:32.423'),
(3, 3, 'LEAVE', '2026-09-04 18:30:00.000', 'Good morning, Sir. I would like to request leave for tomorrow due to some personal work, including an online job application at MeeSeva and some bank work. Kindly grant me leave for tomorrow.', 'APPROVED', 1, '2026-09-08 09:46:37.792', '2026-09-04 05:44:02.744', '2026-09-08 09:46:37.793');

-- --------------------------------------------------------

--
-- Table structure for table `AuditEvent`
--

CREATE TABLE `AuditEvent` (
  `id` int(11) NOT NULL,
  `actor_id` int(11) NOT NULL,
  `action` varchar(191) NOT NULL,
  `entity_type` varchar(191) NOT NULL,
  `entity_id` int(11) NOT NULL,
  `old_value` varchar(191) DEFAULT NULL,
  `new_value` varchar(191) DEFAULT NULL,
  `reason` text DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `AuditEvent`
--

INSERT INTO `AuditEvent` (`id`, `actor_id`, `action`, `entity_type`, `entity_id`, `old_value`, `new_value`, `reason`, `created_at`) VALUES
(1, 1, 'SECURITY_ALERT', 'AUTH_FAILED', 1, NULL, 'Invalid password attempt', NULL, '2026-09-10 07:19:45.436'),
(2, 1, 'SECURITY_ALERT', 'AUTH_FAILED', 1, NULL, 'Invalid password attempt', NULL, '2026-09-10 07:19:56.737'),
(3, 1, 'SECURITY_ALERT', 'TOKEN_FAMILY_REVOKED', 1, NULL, 'Refresh token reuse detected', NULL, '2026-09-10 09:57:12.964'),
(4, 0, 'SECURITY_ALERT', 'AUTH_FAILED', 0, NULL, 'Attempted login with invalid/inactive code', NULL, '2026-09-10 09:57:43.110'),
(5, 3, 'SECURITY_ALERT', 'AUTH_FAILED', 3, NULL, 'Invalid password attempt', NULL, '2026-09-10 10:18:43.697'),
(6, 2, 'KIOSK_CREDENTIAL_CREATED', 'KIOSK_CREDENTIAL', 1, NULL, '{\"branch_id\":1,\"branch_name\":\"Miyapur (Main Branch)\",\"label\":\"Attendance\",\"username\":\"RRH-ATD-143\",\"company_id\":1}', NULL, '2026-09-10 10:29:42.768'),
(7, 2, 'KIOSK_CREDENTIAL_UPDATED', 'KIOSK_CREDENTIAL', 1, '{\"label\":\"Attendance\",\"is_active\":true,\"credential_version\":1,\"branch_id\":1,\"branch_name\":\"Miyapur (Main Branch)\"}', '{\"label\":\"Attendance\",\"is_active\":false,\"credential_version\":2,\"branch_id\":1,\"branch_name\":\"Miyapur (Main Branch)\",\"changed_fields\":[\"is_active\"]}', NULL, '2026-09-10 10:29:59.742'),
(8, 2, 'KIOSK_CREDENTIAL_UPDATED', 'KIOSK_CREDENTIAL', 1, '{\"label\":\"Attendance\",\"is_active\":false,\"credential_version\":2,\"branch_id\":1,\"branch_name\":\"Miyapur (Main Branch)\"}', '{\"label\":\"Attendance\",\"is_active\":true,\"credential_version\":3,\"branch_id\":1,\"branch_name\":\"Miyapur (Main Branch)\",\"changed_fields\":[\"is_active\"]}', NULL, '2026-09-10 10:30:04.485'),
(9, 1, 'KIOSK_LOGIN', 'KIOSK_CREDENTIAL', 1, NULL, '{\"branch_name\":\"Miyapur (Main Branch)\",\"label\":\"Attendance\"}', NULL, '2026-09-10 10:32:20.092'),
(10, 5, 'SECURITY_ALERT', 'TOKEN_FAMILY_REVOKED', 5, NULL, 'Refresh token reuse detected', NULL, '2026-09-10 10:38:03.057'),
(11, 5, 'SECURITY_ALERT', 'TOKEN_FAMILY_REVOKED', 5, NULL, 'Refresh token reuse detected', NULL, '2026-09-10 10:40:48.985'),
(12, 5, 'SECURITY_ALERT', 'TOKEN_FAMILY_REVOKED', 5, NULL, 'Refresh token reuse detected', NULL, '2026-09-10 10:49:40.855'),
(13, 5, 'SECURITY_ALERT', 'TOKEN_FAMILY_REVOKED', 5, NULL, 'Refresh token reuse detected', NULL, '2026-09-10 10:49:41.400'),
(14, 5, 'SECURITY_ALERT', 'TOKEN_FAMILY_REVOKED', 5, NULL, 'Refresh token reuse detected', NULL, '2026-09-10 10:57:39.080'),
(15, 5, 'SECURITY_ALERT', 'TOKEN_FAMILY_REVOKED', 5, NULL, 'Refresh token reuse detected', NULL, '2026-09-10 10:57:39.362'),
(16, 5, 'SECURITY_ALERT', 'TOKEN_FAMILY_REVOKED', 5, NULL, 'Refresh token reuse detected', NULL, '2026-09-10 10:57:39.658'),
(17, 2, 'PROPERTY_MD_APPROVED_LIVE', 'PROPERTY', 1, '{\"status\":\"PENDING_MD_APPROVAL\"}', '{\"status\":\"LIVE\",\"comments\":\"MD Decision Executed\"}', NULL, '2026-09-10 12:01:56.684'),
(18, 1, 'SECURITY_ALERT', 'AUTH_FAILED', 1, NULL, 'Invalid password attempt', NULL, '2026-09-11 06:15:17.287'),
(19, 4, 'SECURITY_ALERT', 'TOKEN_FAMILY_REVOKED', 4, NULL, 'Refresh token reuse detected', NULL, '2026-09-11 11:58:12.329'),
(20, 1, 'LEAD_MANUAL_REASSIGNMENT_OVERRIDE', 'LEAD', 30, '{\"assigned_to_id\":2}', '{\"assigned_to_id\":3,\"reason\":\"Inline reassignment\"}', NULL, '2026-09-11 12:04:29.896'),
(21, 3, 'SECURITY_ALERT', 'TOKEN_FAMILY_REVOKED', 3, NULL, 'Refresh token reuse detected', NULL, '2026-09-11 12:04:43.048'),
(22, 4, 'SECURITY_ALERT', 'TOKEN_FAMILY_REVOKED', 4, NULL, 'Refresh token reuse detected', NULL, '2026-09-11 12:17:50.962'),
(23, 31, 'PROPERTY_MD_APPROVED_LIVE', 'PROPERTY', 2, '{\"status\":\"PENDING_MD_APPROVAL\"}', '{\"status\":\"LIVE\",\"comments\":\"MD Decision Executed\"}', NULL, '2026-09-11 12:18:25.686'),
(24, 2, 'SECURITY_ALERT', 'TOKEN_FAMILY_REVOKED', 2, NULL, 'Refresh token reuse detected', NULL, '2026-09-11 12:38:38.205'),
(25, 2, 'SECURITY_ALERT', 'TOKEN_FAMILY_REVOKED', 2, NULL, 'Refresh token reuse detected', NULL, '2026-09-11 12:48:28.132'),
(26, 16, 'SECURITY_ALERT', 'TOKEN_FAMILY_REVOKED', 16, NULL, 'Refresh token reuse detected', NULL, '2026-09-11 12:49:39.287'),
(27, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 9, '{\"permissions\":[\"employees.view_sensitive\",\"leads.read\",\"customers.kyc_write\",\"properties.read\",\"projects.read\",\"bookings.read\",\"bookings.update\",\"payments.create\",\"payments.read\",\"payments.u', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 13:01:29.316'),
(28, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 2, '{\"permissions\":[\"employees.create\",\"employees.read\",\"employees.update\",\"employees.delete\",\"employees.view_sensitive\",\"employees.manage_default:all\",\"employees.reset_password\",\"leads.create\",\"', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 13:01:30.852'),
(29, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 10, '{\"permissions\":[\"leads.read\",\"customers.read\",\"customers.update\",\"customers.convert\",\"properties.read\",\"site_visits.read\",\"site_visits.complete\",\"projects.read\",\"bookings.read\",\"payments.read', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 13:01:32.189'),
(30, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 13, '{\"permissions\":[\"leads.create\",\"leads.read\",\"leads.update\",\"customers.read\",\"customers.update\",\"customers.convert\",\"properties.read\",\"site_visits.create\",\"site_visits.read\",\"site_visits.compl', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 13:01:33.422'),
(31, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 6, '{\"permissions\":[\"employees.read\",\"leads.create\",\"leads.read\",\"leads.update\",\"leads.assign\",\"leads.bulk_upload\",\"leads.distribution_monitor\",\"customers.create\",\"customers.read\",\"customers.upda', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 13:01:35.130'),
(32, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 11, '{\"permissions\":[\"employees.read\",\"leads.read\",\"leads.update\",\"properties.read\",\"properties.dm_polish\",\"site_visits.read\",\"projects.read\",\"tasks.read\",\"tasks.update\",\"attendance.read_own\",\"att', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 13:01:36.584'),
(33, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 8, '{\"permissions\":[\"employees.read\",\"leads.read\",\"properties.read\",\"properties.dm_polish\",\"projects.read\",\"reports.targets.configure\",\"expenses.create\",\"expenses.read_own\",\"performance.read_team', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 13:01:37.882'),
(34, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 3, '{\"permissions\":[\"employees.create\",\"employees.read\",\"employees.update\",\"employees.view_sensitive\",\"employees.reset_password\",\"customers.kyc_write\",\"properties.read\",\"projects.read\",\"tasks.cre', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 13:01:39.214'),
(35, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 1, '{\"permissions\":[\"employees.create\",\"employees.read\",\"employees.update\",\"employees.delete\",\"employees.view_sensitive\",\"employees.manage_default:all\",\"employees.reset_password\",\"leads.create\",\"', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 13:01:40.577'),
(36, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 4, '{\"permissions\":[\"employees.read\",\"leads.create\",\"leads.read\",\"leads.update\",\"leads.delete\",\"leads.assign\",\"leads.bulk_upload\",\"customers.create\",\"customers.read\",\"customers.update\",\"customers', '{\"granted\":[\"site_visits.assign_agent\",\"site_visits.complete\",\"demos.create\",\"demos.read\",\"demos.assign_agent\",\"demos.accept\"],\"denied\":[],\"actions\":[\"GRANT site_visits.assign_agent\",\"GRANT s', NULL, '2026-09-11 13:01:42.891'),
(37, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 5, '{\"permissions\":[\"leads.read\",\"customers.read\",\"customers.update\",\"properties.create\",\"properties.read\",\"properties.update\",\"properties.verify\",\"site_visits.read\",\"site_visits.assign_agent\",\"p', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 13:01:44.138'),
(38, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 12, '{\"permissions\":[\"leads.read\",\"leads.update\",\"leads.assign\",\"leads.distribution_monitor\",\"leads.whatsapp_proposal\",\"customers.read\",\"customers.update\",\"properties.read\",\"site_visits.read\",\"sit', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 13:01:45.521'),
(39, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 7, '{\"permissions\":[\"leads.create\",\"leads.read\",\"leads.update\",\"leads.whatsapp_proposal\",\"customers.read\",\"customers.update\",\"customers.convert\",\"properties.read\",\"site_visits.create\",\"site_visit', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 13:01:46.829'),
(40, 2, 'SECURITY_ALERT', 'TOKEN_FAMILY_REVOKED', 2, NULL, 'Refresh token reuse detected', NULL, '2026-09-11 13:05:06.559'),
(41, 1, 'SECURITY_ALERT', 'TOKEN_FAMILY_REVOKED', 1, NULL, 'Refresh token reuse detected', NULL, '2026-09-11 13:08:31.798'),
(42, 1, 'SECURITY_ALERT', 'TOKEN_FAMILY_REVOKED', 1, NULL, 'Refresh token reuse detected', NULL, '2026-09-11 13:08:32.203'),
(43, 1, 'SECURITY_ALERT', 'TOKEN_FAMILY_REVOKED', 1, NULL, 'Refresh token reuse detected', NULL, '2026-09-11 13:19:48.465'),
(44, 1, 'KIOSK_LOGIN', 'KIOSK_CREDENTIAL', 1, NULL, '{\"branch_name\":\"Miyapur (Main Branch)\",\"label\":\"Attendance portal\"}', NULL, '2026-09-11 13:20:46.978'),
(45, 16, 'TASK_COMPLETED', 'TASK', 2, NULL, '{\"points\":1,\"taskTitle\":\"Demo to Nune Prem Swaroop\"}', NULL, '2026-09-11 13:22:27.015'),
(46, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 9, '{\"permissions\":[\"employees.view_sensitive\",\"leads.read\",\"customers.kyc_write\",\"properties.read\",\"projects.read\",\"bookings.read\",\"bookings.update\",\"payments.create\",\"payments.read\",\"payments.u', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 13:23:55.078'),
(47, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 2, '{\"permissions\":[\"employees.create\",\"employees.read\",\"employees.update\",\"employees.delete\",\"employees.view_sensitive\",\"employees.manage_default:all\",\"employees.reset_password\",\"leads.create\",\"', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 13:23:56.400'),
(48, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 10, '{\"permissions\":[\"leads.read\",\"customers.read\",\"customers.update\",\"customers.convert\",\"properties.read\",\"site_visits.read\",\"site_visits.complete\",\"projects.read\",\"bookings.read\",\"payments.read', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 13:23:57.551'),
(49, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 13, '{\"permissions\":[\"leads.create\",\"leads.read\",\"leads.update\",\"customers.read\",\"customers.update\",\"customers.convert\",\"properties.read\",\"site_visits.create\",\"site_visits.read\",\"site_visits.compl', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 13:23:58.634'),
(50, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 6, '{\"permissions\":[\"employees.read\",\"leads.create\",\"leads.read\",\"leads.update\",\"leads.assign\",\"leads.bulk_upload\",\"leads.distribution_monitor\",\"customers.create\",\"customers.read\",\"customers.upda', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 13:23:59.711'),
(51, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 11, '{\"permissions\":[\"employees.read\",\"leads.read\",\"leads.update\",\"properties.read\",\"properties.dm_polish\",\"site_visits.read\",\"projects.read\",\"tasks.read\",\"tasks.update\",\"attendance.read_own\",\"att', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 13:24:00.869'),
(52, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 8, '{\"permissions\":[\"employees.read\",\"leads.read\",\"properties.read\",\"properties.dm_polish\",\"projects.read\",\"reports.targets.configure\",\"expenses.create\",\"expenses.read_own\",\"performance.read_team', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 13:24:02.162'),
(53, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 3, '{\"permissions\":[\"employees.create\",\"employees.read\",\"employees.update\",\"employees.view_sensitive\",\"employees.reset_password\",\"customers.kyc_write\",\"properties.read\",\"projects.read\",\"tasks.cre', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 13:24:03.591'),
(54, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 1, '{\"permissions\":[\"employees.create\",\"employees.read\",\"employees.update\",\"employees.delete\",\"employees.view_sensitive\",\"employees.manage_default:all\",\"employees.reset_password\",\"leads.create\",\"', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 13:24:05.349'),
(55, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 4, '{\"permissions\":[\"employees.read\",\"leads.create\",\"leads.read\",\"leads.update\",\"leads.delete\",\"leads.assign\",\"leads.bulk_upload\",\"customers.create\",\"customers.read\",\"customers.update\",\"customers', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 13:24:06.746'),
(56, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 5, '{\"permissions\":[\"leads.read\",\"customers.read\",\"customers.update\",\"properties.create\",\"properties.read\",\"properties.update\",\"properties.verify\",\"site_visits.read\",\"site_visits.assign_agent\",\"p', '{\"granted\":[\"demos.create\",\"site_visits.complete\"],\"denied\":[],\"actions\":[\"GRANT demos.create\",\"GRANT site_visits.complete\"]}', NULL, '2026-09-11 13:24:08.682'),
(57, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 12, '{\"permissions\":[\"leads.read\",\"leads.update\",\"leads.assign\",\"leads.distribution_monitor\",\"leads.whatsapp_proposal\",\"customers.read\",\"customers.update\",\"properties.read\",\"site_visits.read\",\"sit', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 13:24:10.071'),
(58, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 7, '{\"permissions\":[\"leads.create\",\"leads.read\",\"leads.update\",\"leads.whatsapp_proposal\",\"customers.read\",\"customers.update\",\"customers.convert\",\"properties.read\",\"site_visits.create\",\"site_visit', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 13:24:11.446'),
(59, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 9, '{\"permissions\":[\"employees.view_sensitive\",\"leads.read\",\"customers.kyc_write\",\"properties.read\",\"projects.read\",\"bookings.read\",\"bookings.update\",\"payments.create\",\"payments.read\",\"payments.u', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 13:24:36.527'),
(60, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 2, '{\"permissions\":[\"employees.create\",\"employees.read\",\"employees.update\",\"employees.delete\",\"employees.view_sensitive\",\"employees.manage_default:all\",\"employees.reset_password\",\"leads.create\",\"', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 13:24:37.836'),
(61, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 10, '{\"permissions\":[\"leads.read\",\"customers.read\",\"customers.update\",\"customers.convert\",\"properties.read\",\"site_visits.read\",\"site_visits.complete\",\"projects.read\",\"bookings.read\",\"payments.read', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 13:24:38.973'),
(62, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 13, '{\"permissions\":[\"leads.create\",\"leads.read\",\"leads.update\",\"customers.read\",\"customers.update\",\"customers.convert\",\"properties.read\",\"site_visits.create\",\"site_visits.read\",\"site_visits.compl', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 13:24:40.054'),
(63, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 6, '{\"permissions\":[\"employees.read\",\"leads.create\",\"leads.read\",\"leads.update\",\"leads.assign\",\"leads.bulk_upload\",\"leads.distribution_monitor\",\"customers.create\",\"customers.read\",\"customers.upda', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 13:24:41.257'),
(64, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 11, '{\"permissions\":[\"employees.read\",\"leads.read\",\"leads.update\",\"properties.read\",\"properties.dm_polish\",\"site_visits.read\",\"projects.read\",\"tasks.read\",\"tasks.update\",\"attendance.read_own\",\"att', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 13:24:42.688'),
(65, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 8, '{\"permissions\":[\"employees.read\",\"leads.read\",\"properties.read\",\"properties.dm_polish\",\"projects.read\",\"reports.targets.configure\",\"expenses.create\",\"expenses.read_own\",\"performance.read_team', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 13:24:44.061'),
(66, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 3, '{\"permissions\":[\"employees.create\",\"employees.read\",\"employees.update\",\"employees.view_sensitive\",\"employees.reset_password\",\"customers.kyc_write\",\"properties.read\",\"projects.read\",\"tasks.cre', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 13:24:45.609'),
(67, 3, 'SECURITY_ALERT', 'AUTH_FAILED', 3, NULL, 'Invalid password attempt', NULL, '2026-09-11 13:29:34.182'),
(68, 2, 'SECURITY_ALERT', 'TOKEN_FAMILY_REVOKED', 2, NULL, 'Refresh token reuse detected', NULL, '2026-09-11 13:39:48.600'),
(69, 4, 'SUBMIT_DAILY_REPORT', 'DAILY_REPORT', 43, NULL, '{\"calls\":0,\"visits\":0,\"deals\":0,\"isBelowTarget\":false}', NULL, '2026-09-11 13:47:03.739'),
(70, 16, 'SUBMIT_DAILY_REPORT', 'DAILY_REPORT', 44, NULL, '{\"calls\":0,\"visits\":0,\"deals\":0,\"isBelowTarget\":false}', NULL, '2026-09-11 13:47:23.242'),
(71, 2, 'SUBMIT_DAILY_REPORT', 'DAILY_REPORT', 45, NULL, '{\"calls\":20,\"visits\":0,\"deals\":0,\"isBelowTarget\":false}', NULL, '2026-09-11 13:47:30.149'),
(72, 3, 'SUBMIT_DAILY_REPORT', 'DAILY_REPORT', 46, NULL, '{\"calls\":16,\"visits\":0,\"deals\":2,\"isBelowTarget\":false}', NULL, '2026-09-11 13:48:14.990'),
(73, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 9, '{\"permissions\":[\"employees.view_sensitive\",\"leads.read\",\"customers.kyc_write\",\"properties.read\",\"projects.read\",\"bookings.read\",\"bookings.update\",\"payments.create\",\"payments.read\",\"payments.u', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 15:13:27.249'),
(74, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 2, '{\"permissions\":[\"employees.create\",\"employees.read\",\"employees.update\",\"employees.delete\",\"employees.view_sensitive\",\"employees.manage_default:all\",\"employees.reset_password\",\"leads.create\",\"', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 15:13:28.754'),
(75, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 10, '{\"permissions\":[\"leads.read\",\"customers.read\",\"customers.update\",\"customers.convert\",\"properties.read\",\"site_visits.read\",\"site_visits.complete\",\"projects.read\",\"bookings.read\",\"payments.read', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 15:13:30.121'),
(76, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 13, '{\"permissions\":[\"leads.create\",\"leads.read\",\"leads.update\",\"customers.read\",\"customers.update\",\"customers.convert\",\"properties.read\",\"site_visits.create\",\"site_visits.read\",\"site_visits.compl', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 15:13:31.467'),
(77, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 6, '{\"permissions\":[\"employees.read\",\"leads.create\",\"leads.read\",\"leads.update\",\"leads.assign\",\"leads.bulk_upload\",\"leads.distribution_monitor\",\"customers.create\",\"customers.read\",\"customers.upda', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 15:13:32.589'),
(78, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 11, '{\"permissions\":[\"employees.read\",\"leads.read\",\"leads.update\",\"properties.read\",\"properties.dm_polish\",\"site_visits.read\",\"projects.read\",\"tasks.read\",\"tasks.update\",\"attendance.read_own\",\"att', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 15:13:33.706'),
(79, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 8, '{\"permissions\":[\"employees.read\",\"leads.read\",\"properties.read\",\"properties.dm_polish\",\"projects.read\",\"reports.targets.configure\",\"expenses.create\",\"expenses.read_own\",\"performance.read_team', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 15:13:34.811'),
(80, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 3, '{\"permissions\":[\"employees.create\",\"employees.read\",\"employees.update\",\"employees.view_sensitive\",\"employees.reset_password\",\"customers.kyc_write\",\"properties.read\",\"projects.read\",\"tasks.cre', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 15:13:35.944'),
(81, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 1, '{\"permissions\":[\"employees.create\",\"employees.read\",\"employees.update\",\"employees.delete\",\"employees.view_sensitive\",\"employees.manage_default:all\",\"employees.reset_password\",\"leads.create\",\"', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 15:13:37.066'),
(82, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 4, '{\"permissions\":[\"employees.read\",\"leads.create\",\"leads.read\",\"leads.update\",\"leads.delete\",\"leads.assign\",\"leads.bulk_upload\",\"customers.create\",\"customers.read\",\"customers.update\",\"customers', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 15:13:38.201'),
(83, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 5, '{\"permissions\":[\"leads.read\",\"customers.read\",\"customers.update\",\"properties.create\",\"properties.read\",\"properties.update\",\"properties.verify\",\"site_visits.read\",\"site_visits.assign_agent\",\"s', '{\"granted\":[\"site_visits.verify\"],\"denied\":[],\"actions\":[\"GRANT site_visits.verify\"]}', NULL, '2026-09-11 15:13:39.609'),
(84, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 12, '{\"permissions\":[\"leads.read\",\"leads.update\",\"leads.assign\",\"leads.distribution_monitor\",\"leads.whatsapp_proposal\",\"customers.read\",\"customers.update\",\"properties.read\",\"site_visits.read\",\"sit', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 15:13:40.709'),
(85, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 7, '{\"permissions\":[\"leads.create\",\"leads.read\",\"leads.update\",\"leads.whatsapp_proposal\",\"customers.read\",\"customers.update\",\"customers.convert\",\"properties.read\",\"site_visits.create\",\"site_visit', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 15:13:41.828'),
(86, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 9, '{\"permissions\":[\"employees.view_sensitive\",\"leads.read\",\"customers.kyc_write\",\"properties.read\",\"projects.read\",\"bookings.read\",\"bookings.update\",\"payments.create\",\"payments.read\",\"payments.u', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 15:14:05.228'),
(87, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 2, '{\"permissions\":[\"employees.create\",\"employees.read\",\"employees.update\",\"employees.delete\",\"employees.view_sensitive\",\"employees.manage_default:all\",\"employees.reset_password\",\"leads.create\",\"', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 15:14:06.620'),
(88, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 10, '{\"permissions\":[\"leads.read\",\"customers.read\",\"customers.update\",\"customers.convert\",\"properties.read\",\"site_visits.read\",\"site_visits.complete\",\"projects.read\",\"bookings.read\",\"payments.read', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 15:14:07.741'),
(89, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 13, '{\"permissions\":[\"leads.create\",\"leads.read\",\"leads.update\",\"customers.read\",\"customers.update\",\"customers.convert\",\"properties.read\",\"site_visits.create\",\"site_visits.read\",\"site_visits.compl', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 15:14:08.795'),
(90, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 6, '{\"permissions\":[\"employees.read\",\"leads.create\",\"leads.read\",\"leads.update\",\"leads.assign\",\"leads.bulk_upload\",\"leads.distribution_monitor\",\"customers.create\",\"customers.read\",\"customers.upda', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 15:14:09.867'),
(91, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 11, '{\"permissions\":[\"employees.read\",\"leads.read\",\"leads.update\",\"properties.read\",\"properties.dm_polish\",\"site_visits.read\",\"projects.read\",\"tasks.read\",\"tasks.update\",\"attendance.read_own\",\"att', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 15:14:10.985'),
(92, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 8, '{\"permissions\":[\"employees.read\",\"leads.read\",\"properties.read\",\"properties.dm_polish\",\"projects.read\",\"reports.targets.configure\",\"expenses.create\",\"expenses.read_own\",\"performance.read_team', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 15:14:12.108'),
(93, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 3, '{\"permissions\":[\"employees.create\",\"employees.read\",\"employees.update\",\"employees.view_sensitive\",\"employees.reset_password\",\"customers.kyc_write\",\"properties.read\",\"projects.read\",\"tasks.cre', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 15:14:13.213'),
(94, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 1, '{\"permissions\":[\"employees.create\",\"employees.read\",\"employees.update\",\"employees.delete\",\"employees.view_sensitive\",\"employees.manage_default:all\",\"employees.reset_password\",\"leads.create\",\"', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 15:14:14.440'),
(95, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 4, '{\"permissions\":[\"employees.read\",\"leads.create\",\"leads.read\",\"leads.update\",\"leads.delete\",\"leads.assign\",\"leads.bulk_upload\",\"customers.create\",\"customers.read\",\"customers.update\",\"customers', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 15:14:15.527'),
(96, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 5, '{\"permissions\":[\"leads.read\",\"customers.read\",\"customers.update\",\"properties.create\",\"properties.read\",\"properties.update\",\"properties.verify\",\"site_visits.read\",\"site_visits.verify\",\"site_vi', '{\"granted\":[\"site_visits.create\"],\"denied\":[],\"actions\":[\"GRANT site_visits.create\"]}', NULL, '2026-09-11 15:14:16.930'),
(97, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 12, '{\"permissions\":[\"leads.read\",\"leads.update\",\"leads.assign\",\"leads.distribution_monitor\",\"leads.whatsapp_proposal\",\"customers.read\",\"customers.update\",\"properties.read\",\"site_visits.read\",\"sit', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 15:14:18.478'),
(98, 1, 'UPDATE_ROLE_PERMISSIONS', 'ROLE', 7, '{\"permissions\":[\"leads.create\",\"leads.read\",\"leads.update\",\"leads.whatsapp_proposal\",\"customers.read\",\"customers.update\",\"customers.convert\",\"properties.read\",\"site_visits.create\",\"site_visit', '{\"granted\":[],\"denied\":[],\"actions\":[]}', NULL, '2026-09-11 15:14:20.104'),
(99, 1, 'SECURITY_ALERT', 'TOKEN_FAMILY_REVOKED', 1, NULL, 'Refresh token reuse detected', NULL, '2026-09-11 17:45:24.404'),
(100, 1, 'SECURITY_ALERT', 'TOKEN_FAMILY_REVOKED', 1, NULL, 'Refresh token reuse detected', NULL, '2026-09-11 17:45:24.719'),
(101, 33, 'ATTENDANCE_AUTO_CHECKOUT_MIDNIGHT', 'ATTENDANCE_LOG', 48, NULL, '{\"check_out_at\":\"2026-09-11T18:30:00.000Z\"}', 'Employee did not check out; auto-closed at midnight.', '2026-09-11 18:30:00.292'),
(102, 17, 'ATTENDANCE_AUTO_CHECKOUT_MIDNIGHT', 'ATTENDANCE_LOG', 51, NULL, '{\"check_out_at\":\"2026-09-11T18:30:00.000Z\"}', 'Employee did not check out; auto-closed at midnight.', '2026-09-11 18:30:01.133'),
(103, 6, 'ATTENDANCE_AUTO_CHECKOUT_MIDNIGHT', 'ATTENDANCE_LOG', 52, NULL, '{\"check_out_at\":\"2026-09-11T18:30:00.000Z\"}', 'Employee did not check out; auto-closed at midnight.', '2026-09-11 18:30:01.625'),
(104, 16, 'ATTENDANCE_AUTO_CHECKOUT_MIDNIGHT', 'ATTENDANCE_LOG', 53, NULL, '{\"check_out_at\":\"2026-09-11T18:30:00.000Z\"}', 'Employee did not check out; auto-closed at midnight.', '2026-09-11 18:30:02.113'),
(105, 7, 'UNINFORMED_ABSENT', 'EMPLOYEE', 7, NULL, '{\"date\":\"2026-09-11\"}', 'No attendance log and no approved leave for this date.', '2026-09-11 18:30:04.456'),
(106, 1, 'SECURITY_ALERT', 'TOKEN_FAMILY_REVOKED', 1, NULL, 'Refresh token reuse detected', NULL, '2026-09-11 22:26:05.505'),
(107, 1, 'KIOSK_LOGIN', 'KIOSK_CREDENTIAL', 1, NULL, '{\"branch_name\":\"Miyapur (Main Branch)\",\"label\":\"Attendance portal\"}', NULL, '2026-09-11 22:26:09.968'),
(108, 17, 'SUBMIT_DAILY_REPORT', 'DAILY_REPORT', 47, NULL, '{\"calls\":0,\"visits\":0,\"deals\":0,\"isBelowTarget\":false}', NULL, '2026-09-12 11:58:46.170'),
(109, 2, 'SUBMIT_DAILY_REPORT', 'DAILY_REPORT', 48, NULL, '{\"calls\":94,\"visits\":0,\"deals\":1,\"isBelowTarget\":false}', NULL, '2026-09-12 12:21:22.335'),
(110, 3, 'SUBMIT_DAILY_REPORT', 'DAILY_REPORT', 49, NULL, '{\"calls\":10,\"visits\":0,\"deals\":0,\"isBelowTarget\":false}', NULL, '2026-09-12 12:22:51.759'),
(111, 4, 'SUBMIT_DAILY_REPORT', 'DAILY_REPORT', 50, NULL, '{\"calls\":0,\"visits\":0,\"deals\":0,\"isBelowTarget\":false}', NULL, '2026-09-12 12:33:33.781'),
(112, 33, 'ATTENDANCE_AUTO_CHECKOUT_MIDNIGHT', 'ATTENDANCE_LOG', 56, NULL, '{\"check_out_at\":\"2026-09-12T18:30:00.000Z\"}', 'Employee did not check out; auto-closed at midnight.', '2026-09-12 18:30:00.334'),
(113, 6, 'ATTENDANCE_AUTO_CHECKOUT_MIDNIGHT', 'ATTENDANCE_LOG', 58, NULL, '{\"check_out_at\":\"2026-09-12T18:30:00.000Z\"}', 'Employee did not check out; auto-closed at midnight.', '2026-09-12 18:30:01.295'),
(114, 17, 'ATTENDANCE_AUTO_CHECKOUT_MIDNIGHT', 'ATTENDANCE_LOG', 59, NULL, '{\"check_out_at\":\"2026-09-12T18:30:00.000Z\"}', 'Employee did not check out; auto-closed at midnight.', '2026-09-12 18:30:01.848'),
(115, 6, 'MISSING_DAILY_REPORT', 'EMPLOYEE', 6, NULL, '{\"date\":\"2026-09-12\"}', 'Attended but did not submit a daily report for this date.', '2026-09-12 18:30:04.609'),
(116, 33, 'MISSING_DAILY_REPORT', 'EMPLOYEE', 33, NULL, '{\"date\":\"2026-09-12\"}', 'Attended but did not submit a daily report for this date.', '2026-09-12 18:30:04.937'),
(117, 2, 'COMPLETED_ALL_WORK', 'EMPLOYEE', 2, NULL, '{\"date\":\"2026-09-12\",\"points\":1}', 'Submitted daily report and cleared all open tasks for this date.', '2026-09-12 18:30:06.511'),
(118, 3, 'COMPLETED_ALL_WORK', 'EMPLOYEE', 3, NULL, '{\"date\":\"2026-09-12\",\"points\":1}', 'Submitted daily report and cleared all open tasks for this date.', '2026-09-12 18:30:06.845'),
(119, 4, 'COMPLETED_ALL_WORK', 'EMPLOYEE', 4, NULL, '{\"date\":\"2026-09-12\",\"points\":1}', 'Submitted daily report and cleared all open tasks for this date.', '2026-09-12 18:30:07.172'),
(120, 7, 'UNINFORMED_ABSENT', 'EMPLOYEE', 7, NULL, '{\"date\":\"2026-09-12\"}', 'No attendance log and no approved leave for this date.', '2026-09-12 18:30:08.963'),
(121, 16, 'UNINFORMED_ABSENT', 'EMPLOYEE', 16, NULL, '{\"date\":\"2026-09-12\"}', 'No attendance log and no approved leave for this date.', '2026-09-12 18:30:09.280'),
(122, 1, 'SECURITY_ALERT', 'AUTH_FAILED', 1, NULL, 'Invalid password attempt', NULL, '2026-09-13 17:57:23.099'),
(123, 1, 'SECURITY_ALERT', 'AUTH_FAILED', 1, NULL, 'Invalid password attempt', NULL, '2026-09-13 17:57:53.407'),
(124, 1, 'SECURITY_ALERT', 'TOKEN_FAMILY_REVOKED', 1, NULL, 'Refresh token reuse detected', NULL, '2026-09-14 07:41:55.515'),
(125, 1, 'SECURITY_ALERT', 'AUTH_FAILED', 1, NULL, 'Invalid password attempt', NULL, '2026-09-14 08:05:13.887'),
(126, 1, 'SECURITY_ALERT', 'AUTH_FAILED', 1, NULL, 'Invalid password attempt', NULL, '2026-09-14 08:06:09.484'),
(127, 3, 'SECURITY_ALERT', 'TOKEN_FAMILY_REVOKED', 3, NULL, 'Refresh token reuse detected', NULL, '2026-09-15 04:32:38.807'),
(128, 1, 'KIOSK_LOGIN', 'KIOSK_CREDENTIAL', 1, NULL, '{\"branch_name\":\"Miyapur (Main Branch)\",\"label\":\"Attendance portal\"}', NULL, '2026-09-15 04:40:39.184'),
(129, 2, 'SECURITY_ALERT', 'TOKEN_FAMILY_REVOKED', 2, NULL, 'Refresh token reuse detected', NULL, '2026-09-15 12:14:32.664'),
(130, 3, 'SUBMIT_DAILY_REPORT', 'DAILY_REPORT', 51, NULL, '{\"calls\":18,\"visits\":0,\"deals\":2,\"isBelowTarget\":false}', NULL, '2026-09-15 12:15:10.094'),
(131, 4, 'SUBMIT_DAILY_REPORT', 'DAILY_REPORT', 52, NULL, '{\"calls\":0,\"visits\":0,\"deals\":0,\"isBelowTarget\":false}', NULL, '2026-09-15 12:21:32.176'),
(132, 2, 'SUBMIT_DAILY_REPORT', 'DAILY_REPORT', 53, NULL, '{\"calls\":67,\"visits\":0,\"deals\":1,\"isBelowTarget\":false}', NULL, '2026-09-15 12:24:00.281'),
(133, 1, 'SECURITY_ALERT', 'AUTH_FAILED', 1, NULL, 'Invalid password attempt', NULL, '2026-09-15 20:33:00.780'),
(134, 1, 'SECURITY_ALERT', 'AUTH_FAILED', 1, NULL, 'Invalid password attempt', NULL, '2026-09-15 20:33:08.373');

-- --------------------------------------------------------

--
-- Table structure for table `AuthSession`
--

CREATE TABLE `AuthSession` (
  `id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `family_token` varchar(191) NOT NULL,
  `refresh_token_hash` varchar(191) NOT NULL,
  `consumed` tinyint(1) NOT NULL DEFAULT 0,
  `revoked` tinyint(1) NOT NULL DEFAULT 0,
  `revocation_reason` varchar(191) DEFAULT NULL,
  `expires_at` datetime(3) NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `AuthSession`
--

INSERT INTO `AuthSession` (`id`, `employee_id`, `family_token`, `refresh_token_hash`, `consumed`, `revoked`, `revocation_reason`, `expires_at`, `created_at`, `updated_at`) VALUES
(570, 1, '9fc4e024-9d78-469c-a37d-3c323e179e31', '771a25aa5471ef5e784510b84e291dceea2a58a27c1fdbb1d264ce5167327e3a', 1, 0, NULL, '2026-09-11 22:06:18.736', '2026-09-04 22:06:18.737', '2026-09-04 22:07:41.084'),
(571, 1, '9fc4e024-9d78-469c-a37d-3c323e179e31', 'b6d81b8fa369b2432bb9e1ceb2f5afdcb6acc8a837688b8ffdc229fd5a7e035e', 1, 0, NULL, '2026-09-11 22:07:44.098', '2026-09-04 22:07:44.099', '2026-09-04 22:37:22.750'),
(572, 1, '9fc4e024-9d78-469c-a37d-3c323e179e31', 'deaf7ef6c61fcf23730d9f92fb14032c2f29510f819c9bf44b40d72a00d199d4', 1, 0, NULL, '2026-09-11 22:37:25.752', '2026-09-04 22:37:25.753', '2026-09-04 22:50:11.620'),
(573, 1, '9fc4e024-9d78-469c-a37d-3c323e179e31', '626eb4b18998f9002f010f856b2d497d7654ba9de1d07105e22af39aee480c96', 1, 0, NULL, '2026-09-11 22:50:14.854', '2026-09-04 22:50:14.855', '2026-09-04 22:54:47.084'),
(574, 1, '9fc4e024-9d78-469c-a37d-3c323e179e31', 'eccb3a86505f9dfc524cf60cfaffcda640e989b8dce5a600de64dc9c663b4c68', 0, 1, 'LOGGED_OUT', '2026-09-11 22:54:50.023', '2026-09-04 22:54:50.023', '2026-09-04 23:25:05.256'),
(575, 2, 'a5118a72-3b04-470d-8ad1-e77e6ee44704', '13113b1a5a4883eba35eb5456dba342cf580c53ba3c4fd2420a9e7325059a8c4', 1, 0, NULL, '2026-09-12 04:12:22.780', '2026-09-05 04:12:22.781', '2026-09-05 04:12:39.268'),
(576, 2, 'a5118a72-3b04-470d-8ad1-e77e6ee44704', 'd3c7969cacc2990aca934e2cf2b6ce327e727b742fd9004bb16cc46144f57d26', 1, 0, NULL, '2026-09-12 04:12:42.916', '2026-09-05 04:12:42.917', '2026-09-05 04:13:12.835'),
(577, 2, 'a5118a72-3b04-470d-8ad1-e77e6ee44704', 'd0070616bfdfbcfc4789ab6bc19c0f904679ccb85e31a687e50d9286eab31aeb', 1, 0, NULL, '2026-09-12 04:13:16.568', '2026-09-05 04:13:16.568', '2026-09-05 04:13:49.582'),
(578, 2, 'a5118a72-3b04-470d-8ad1-e77e6ee44704', '598f09d96821ddfe2d73b75e451c820c19c898af698a17f39248a5fd02bc18bc', 1, 0, NULL, '2026-09-12 04:13:53.349', '2026-09-05 04:13:53.349', '2026-09-05 04:14:04.230'),
(579, 2, 'a5118a72-3b04-470d-8ad1-e77e6ee44704', '3a92a2456b80fda0ac97d9695f68f9d09a9c1d69a535e26940f1443eed43dfcb', 1, 0, NULL, '2026-09-12 04:14:08.340', '2026-09-05 04:14:08.341', '2026-09-05 04:14:17.871'),
(580, 2, 'a5118a72-3b04-470d-8ad1-e77e6ee44704', '21aa3bb7185e43a60f8709d18652837a5f04fa660be286d6124ed2fb596a38d3', 1, 0, NULL, '2026-09-12 04:14:22.293', '2026-09-05 04:14:22.294', '2026-09-05 04:14:31.932'),
(581, 2, 'a5118a72-3b04-470d-8ad1-e77e6ee44704', '9ef818c8b87b752de4fd64c9cb67c014103fcbd6cf583fdfe71879f66009594f', 1, 0, NULL, '2026-09-12 04:14:35.986', '2026-09-05 04:14:35.987', '2026-09-05 04:15:03.539'),
(582, 2, 'a5118a72-3b04-470d-8ad1-e77e6ee44704', '9981d3ba2fa9b6675ab2f184e783b2bf030b69b73a0fbb9d0b581858b836b35d', 1, 0, NULL, '2026-09-12 04:15:05.606', '2026-09-05 04:15:05.606', '2026-09-05 04:15:20.448'),
(583, 2, 'a5118a72-3b04-470d-8ad1-e77e6ee44704', '1938b5b24df6403d440170c318536f7a2e0bbbbb571f95062172be0b1b988f68', 1, 0, NULL, '2026-09-12 04:15:22.477', '2026-09-05 04:15:22.478', '2026-09-05 12:50:20.614'),
(584, 1, '9c163f36-8ed5-47c2-83ae-4dab950182e7', '58db5b5d735ccd1c51ebc45a0cfef3a55f2bed2b8ed34228f1dbb6173e928358', 1, 0, NULL, '2026-09-12 04:38:29.976', '2026-09-05 04:38:29.977', '2026-09-05 04:38:35.426'),
(585, 1, '9c163f36-8ed5-47c2-83ae-4dab950182e7', 'b83b1b304e4cf114475e5602389f7dad39fb616e9f5746acffb23384f6e54977', 1, 0, NULL, '2026-09-12 04:38:39.198', '2026-09-05 04:38:39.199', '2026-09-05 05:06:45.540'),
(586, 1, '157f09b9-4369-497b-90e8-a82eee45300f', '2a7a481adae12d44756272ca740498881cf20a9fd906f44c7cd14b1870671ba1', 1, 0, NULL, '2026-09-12 04:48:28.607', '2026-09-05 04:48:28.608', '2026-09-05 04:59:19.694'),
(587, 1, '157f09b9-4369-497b-90e8-a82eee45300f', '0a819484e1bc179fa65fcc0be535c93531aa5de6ae0ca8d73b863f9668893033', 1, 0, NULL, '2026-09-12 04:59:24.414', '2026-09-05 04:59:24.415', '2026-09-05 05:00:59.025'),
(588, 1, '157f09b9-4369-497b-90e8-a82eee45300f', 'dedc17f480903a8da0337d7515b0af08f5b1f8f1e1d1dffd5cf7cea54db970f2', 1, 0, NULL, '2026-09-12 05:01:02.832', '2026-09-05 05:01:02.833', '2026-09-05 05:53:42.544'),
(589, 4, '6b8e8c75-d99a-4f93-ab20-0f169d9337b7', '218f5e51efca75eec9bc4d259851dceaf15d0fd7be859ff732ebfd249e79eb2c', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-12 05:05:12.609', '2026-09-05 05:05:12.610', '2026-09-07 05:03:48.449'),
(590, 4, '6b8e8c75-d99a-4f93-ab20-0f169d9337b7', '9951fd145cbbf078ce40c3cd2d7e16d84fe6f4cfe8ebec71a77cb3732c4e3c98', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-12 05:05:20.658', '2026-09-05 05:05:20.659', '2026-09-07 05:03:48.449'),
(591, 4, '6b8e8c75-d99a-4f93-ab20-0f169d9337b7', '2fa06de010d59718b23168a10fce1fd59bc1e1ee923d1f775b0cd0b342252ef6', 1, 1, 'LOGGED_OUT', '2026-09-12 05:05:31.613', '2026-09-05 05:05:31.613', '2026-09-07 05:03:50.854'),
(592, 4, '6b8e8c75-d99a-4f93-ab20-0f169d9337b7', '7321bc12f2d08d3498c59a7b37b349bd67b4be846f15b610269d5fd2b150ae05', 0, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-12 05:05:40.235', '2026-09-05 05:05:40.236', '2026-09-07 05:03:48.449'),
(593, 1, '9c163f36-8ed5-47c2-83ae-4dab950182e7', '5ea98400303ef6f2ba0e92d2911e3b54d070023dc69c9fdad40ab420049331dc', 1, 0, NULL, '2026-09-12 05:06:49.335', '2026-09-05 05:06:49.336', '2026-09-05 05:08:02.270'),
(594, 1, '9c163f36-8ed5-47c2-83ae-4dab950182e7', 'd1abab8ec5e7da0ecde44a6a2d02467477322fb042c64735cc3941d0d35f83b7', 0, 1, 'LOGGED_OUT', '2026-09-12 05:08:06.166', '2026-09-05 05:08:06.167', '2026-09-05 08:12:45.453'),
(595, 1, '157f09b9-4369-497b-90e8-a82eee45300f', 'b29c31e67543b01e43434199ff2b6ee9842369c797fafbc29f3da3998b503fe4', 0, 1, 'LOGGED_OUT', '2026-09-12 05:53:46.156', '2026-09-05 05:53:46.157', '2026-09-05 06:23:48.673'),
(596, 3, '80e8a8df-f7cb-433c-9f08-38c65eb10376', '82aeb976f164a1ae277b098a31e12a191e0bde96100cfddc69d327d216bf014e', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-12 06:21:46.858', '2026-09-05 06:21:46.859', '2026-09-07 06:54:40.230'),
(597, 3, '80e8a8df-f7cb-433c-9f08-38c65eb10376', 'c36baddbfbadbc739c95fa41db911927045293c22c1d813829ea4de41944addf', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-12 08:02:21.144', '2026-09-05 08:02:21.145', '2026-09-07 06:54:40.230'),
(598, 1, '89110163-e1bd-4085-ba70-c2723ad625c6', '0b0a7dce8f71ed2811bb5479d62482468831c9536ec234fd07bde130e062b730', 1, 0, NULL, '2026-09-12 08:08:37.342', '2026-09-05 08:08:37.343', '2026-09-05 08:09:04.483'),
(599, 1, '89110163-e1bd-4085-ba70-c2723ad625c6', 'ccda323c750813a84d331d6321d9466e717bb534d8eb75167117e3760b859b04', 0, 1, 'LOGGED_OUT', '2026-09-12 08:09:08.291', '2026-09-05 08:09:08.292', '2026-09-05 08:39:10.589'),
(600, 1, 'fd2fb992-db21-4d37-96f7-028b8ceb8b5b', '8206a11d9b6c483f55825a6f4b80c5edaeea187499ba40b9c05972d4e65059be', 0, 1, 'LOGGED_OUT', '2026-09-12 08:11:13.979', '2026-09-05 08:11:13.980', '2026-09-05 08:46:01.987'),
(601, 1, '59bdc222-f57a-462c-a83e-10f6158be333', '45847f5211ff7c134f082feb085b195c53072987091dd848a13934e6c5f42189', 1, 0, NULL, '2026-09-12 12:38:27.729', '2026-09-05 12:38:27.730', '2026-09-05 12:43:06.817'),
(602, 1, '59bdc222-f57a-462c-a83e-10f6158be333', '9dbfbfdbbbe7f6dd71f87e6095295fc79a5f9ecbad3cc5d069e7fb62a9bcae1c', 1, 0, NULL, '2026-09-12 12:43:09.935', '2026-09-05 12:43:09.936', '2026-09-05 12:43:55.580'),
(603, 1, '59bdc222-f57a-462c-a83e-10f6158be333', '8043d70a64ec2f274613f325fe9703e693e817876466dad540601f034720910f', 1, 0, NULL, '2026-09-12 12:43:59.211', '2026-09-05 12:43:59.211', '2026-09-05 12:49:43.019'),
(604, 1, '59bdc222-f57a-462c-a83e-10f6158be333', '496d11c9a722c65f98768678dd0ba26bbd1f069b47ed68eecd937eebbc46f090', 1, 0, NULL, '2026-09-12 12:49:46.754', '2026-09-05 12:49:46.755', '2026-09-05 12:52:45.276'),
(605, 2, 'a5118a72-3b04-470d-8ad1-e77e6ee44704', '1d1d1f2bb9f213cb78c45c421df012b507f40287a27d2ba5eb5a1c18e5bcac26', 0, 1, 'LOGGED_OUT', '2026-09-12 12:50:24.460', '2026-09-05 12:50:24.460', '2026-09-05 12:52:03.498'),
(606, 1, '59bdc222-f57a-462c-a83e-10f6158be333', 'c77503869be6f0ca97e4a3e2291339968afec85208808329a2a47af4fb0dbc02', 1, 0, NULL, '2026-09-12 12:52:50.898', '2026-09-05 12:52:50.899', '2026-09-05 12:56:16.680'),
(607, 1, 'ef8f3344-877f-4aeb-97f1-4eadab4f4187', '2e55cd768f04264b57fb2b7c7b6478b6a44d72bcf2337964fb16e3f54c6cbf62', 1, 1, 'LOGGED_OUT', '2026-09-12 12:54:47.560', '2026-09-05 12:54:47.561', '2026-09-05 12:56:47.727'),
(608, 1, '59bdc222-f57a-462c-a83e-10f6158be333', 'a76136b3876ca8b86f0afaff292749ec94bc7d19d060d74495a2bb31c06697c3', 0, 0, NULL, '2026-09-12 12:56:20.368', '2026-09-05 12:56:20.369', '2026-09-05 12:56:20.369'),
(609, 1, 'ef8f3344-877f-4aeb-97f1-4eadab4f4187', '87459f2706085a966f6a605b30555d8a688141fcdccf1f5c58ed92dd20ecfca5', 0, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-12 12:56:44.772', '2026-09-05 12:56:44.773', '2026-09-05 12:56:44.797'),
(610, 1, 'b7f5481f-63eb-44b9-8ecd-46f4801d3d0a', 'b8c5b7ba1fba3a2c4824618acf0de613801730a2e3c0961712c3d935c081d210', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-12 13:02:09.592', '2026-09-05 13:02:09.593', '2026-09-07 04:24:36.689'),
(611, 1, '21cb6557-1648-4343-a4f9-72264433dd04', '4fdfb74c21629c1a3fe07ecc09b17e02dae67122ba6977891ee25aa9b5f6cbef', 1, 0, NULL, '2026-09-12 13:57:07.585', '2026-09-05 13:57:07.586', '2026-09-05 13:57:26.491'),
(612, 1, '21cb6557-1648-4343-a4f9-72264433dd04', '9995c4f914557c0ff68329ab0c1d0a028a7efb6cdd6aa044d6f539712cc46680', 1, 0, NULL, '2026-09-12 13:57:30.552', '2026-09-05 13:57:30.553', '2026-09-05 16:04:39.055'),
(613, 7, 'e4d9d432-1441-4ad4-84de-8b3bd0f74980', '4c9bfac9385c2cc0bad48083a38bb81ffa01a988340708080de4c7fd65acc840', 1, 0, NULL, '2026-09-12 14:29:49.548', '2026-09-05 14:29:49.549', '2026-09-07 04:10:36.314'),
(614, 1, 'b7f5481f-63eb-44b9-8ecd-46f4801d3d0a', '0b0f910c4c3744b3a126c0e0097db93fee73341e7476990740795e2eea6d8150', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-12 14:30:25.813', '2026-09-05 14:30:25.814', '2026-09-07 04:24:36.689'),
(615, 1, 'b7f5481f-63eb-44b9-8ecd-46f4801d3d0a', '053e319f8d2f8acf4b2007a2d5da9245aec8438216cf34f99a8764609b5e7c1a', 0, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-12 14:52:43.858', '2026-09-05 14:52:43.859', '2026-09-07 04:24:36.689'),
(616, 1, '21cb6557-1648-4343-a4f9-72264433dd04', '37ee663b976f603772186d6291a0591393e847d371981b4627a8ede84a2285bc', 0, 1, 'LOGGED_OUT', '2026-09-12 16:04:42.770', '2026-09-05 16:04:42.771', '2026-09-05 16:35:42.943'),
(617, 1, '8aa1cab3-b2bb-4bf9-b590-919935402338', '47763d6186ead3de991f2e5f4ccbf876b8127112d9a756da66fb7b07b6e221d1', 0, 1, 'LOGGED_OUT', '2026-09-12 16:12:02.642', '2026-09-05 16:12:02.643', '2026-09-05 16:42:38.523'),
(618, 1, 'c4f97198-0ae5-4106-927e-78482140859b', '196ad44ed2523acf07b805cabf0a9c356175e04d9a5aabebbbf23eaa2f775d50', 1, 0, NULL, '2026-09-12 18:01:09.028', '2026-09-05 18:01:09.029', '2026-09-05 18:04:56.524'),
(619, 1, 'c4f97198-0ae5-4106-927e-78482140859b', '4cd65612932c7d6390fe9a73080fc34c1a64936e2d0d87040e7e79c22551033c', 0, 1, 'LOGGED_OUT', '2026-09-12 18:04:59.595', '2026-09-05 18:04:59.596', '2026-09-05 19:23:24.579'),
(620, 1, '9d751982-f2b8-4a55-92bc-a9c3ff17cd29', '31c81de609d7597d4c4b39e7919315a1fdfa3985e059828f97ce6ea0c0821b84', 0, 1, 'LOGGED_OUT', '2026-09-12 23:07:08.890', '2026-09-05 23:07:08.891', '2026-09-06 00:02:15.981'),
(651, 1, '71734853-83be-4fc8-b2e6-f66a9a09c26f', '4e293297c23ef4afe23205962fa99efe68c2fae25f4156624f1f9ff7730bb73d', 1, 0, NULL, '2026-09-13 00:26:48.859', '2026-09-06 00:26:48.860', '2026-09-06 01:05:55.980'),
(657, 1, '71734853-83be-4fc8-b2e6-f66a9a09c26f', 'acc75e83fb69be82c8e413fddabcde5e9b1d2cdb9cc6b4a2c92a4109ca7e905a', 0, 1, 'LOGGED_OUT', '2026-09-13 01:05:59.767', '2026-09-06 01:05:59.768', '2026-09-06 02:05:45.025'),
(660, 1, '77dc072a-7755-47ba-aee9-c41999caa0ee', '21c1488594448ba2d23e81981babf697ae6d30addf7b10dfce6b3c4c4ac232d2', 1, 0, NULL, '2026-09-13 01:54:10.346', '2026-09-06 01:54:10.346', '2026-09-06 02:32:56.335'),
(661, 1, '77dc072a-7755-47ba-aee9-c41999caa0ee', '89f256777283b5dd6e90bc93c0ad5bdbc15de7728a6d7338cc2d60cbda35368f', 0, 1, 'LOGGED_OUT', '2026-09-13 02:33:01.517', '2026-09-06 02:33:01.518', '2026-09-06 03:03:06.105'),
(662, 1, '7755ab66-2cf4-4c1a-8d81-4c1eab9b7d15', '6a8c4d79d26c9d08ba6f19b3e208faeb0e391aafdc5aeab6888479aba03b79c4', 1, 0, NULL, '2026-09-13 07:22:12.835', '2026-09-06 07:22:12.836', '2026-09-06 07:35:47.037'),
(663, 1, '7755ab66-2cf4-4c1a-8d81-4c1eab9b7d15', 'c78b5b8ed2a8ee587c68d57c93eb55c99193116dacb4a2e5c968c76f811592bc', 1, 0, NULL, '2026-09-13 07:35:50.710', '2026-09-06 07:35:50.711', '2026-09-06 07:36:52.128'),
(664, 1, '7755ab66-2cf4-4c1a-8d81-4c1eab9b7d15', 'b21c6bb95497c928a1e9febfe35ddf7d88964df3a2169561239fcca5421e1a4f', 0, 1, 'LOGGED_OUT', '2026-09-13 07:36:56.030', '2026-09-06 07:36:56.031', '2026-09-06 08:30:28.488'),
(665, 1, 'baec5f53-2f55-49ea-8da5-583222db06de', 'ce0a4789d6a18bb61a3a6da460335991ec1c2551d8c8c287c9ecd5e16c954aaf', 1, 0, NULL, '2026-09-13 08:35:01.527', '2026-09-06 08:35:01.528', '2026-09-06 08:37:02.764'),
(666, 1, 'baec5f53-2f55-49ea-8da5-583222db06de', '869cb083ec311086fd6e49919f11ba750251e55eafd6897ef7804740ff08a106', 1, 0, NULL, '2026-09-13 08:37:06.614', '2026-09-06 08:37:06.615', '2026-09-06 08:37:09.455'),
(667, 1, 'baec5f53-2f55-49ea-8da5-583222db06de', 'dc15b31db80f531c16bd1daca879e6f58a9a70e95ef5d39bbcb26073c43c19f5', 1, 0, NULL, '2026-09-13 08:37:13.223', '2026-09-06 08:37:13.224', '2026-09-06 08:38:31.113'),
(668, 1, 'baec5f53-2f55-49ea-8da5-583222db06de', '905fd9ea56c4790bd56e5a6c0e92c3f6340a4575470392f267c2a8656dd055de', 0, 1, 'LOGGED_OUT', '2026-09-13 08:38:34.981', '2026-09-06 08:38:34.981', '2026-09-06 09:27:17.214'),
(669, 1, 'cabc3e43-fa5a-450f-a24f-53a17834fb42', '54b2de22c4e61d07febc206ad1a954afd5906e2d73b3093fb41e8c244d92a8a7', 1, 0, NULL, '2026-09-13 12:00:44.268', '2026-09-06 12:00:44.269', '2026-09-10 10:02:01.157'),
(670, 31, '237d6235-ffe3-4aa8-a9f1-1343dc8c68fa', '3c3706813c25e07b9e7dd883995c94bc129bb1d4ba788c6867783fcba74e7705', 0, 1, 'LOGGED_OUT', '2026-09-13 12:22:06.020', '2026-09-06 12:22:06.021', '2026-09-06 12:23:47.417'),
(671, 31, '48e03a36-546e-459a-926b-e3dbe9555b6a', 'e58f1352787638faa265eb7ba663f469e747ee4ac9ea3dc6c58c85b0eeae5243', 0, 0, NULL, '2026-09-13 12:23:20.777', '2026-09-06 12:23:20.778', '2026-09-06 12:23:20.778'),
(672, 31, '79cc5ea8-c7da-4870-851c-82055c05aedb', 'afa81110d52fdd9078a124eff3c98718d69bcf8889d9a47f541aa442d7ddcb88', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-13 12:24:21.144', '2026-09-06 12:24:21.145', '2026-09-06 12:30:16.638'),
(673, 31, '79cc5ea8-c7da-4870-851c-82055c05aedb', '6d5e99805739407f6549f84e72bf76e6b4ec8a5bbbe15a73fd16c29cd77c89d6', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-13 12:25:20.069', '2026-09-06 12:25:20.070', '2026-09-06 12:30:16.638'),
(674, 31, '79cc5ea8-c7da-4870-851c-82055c05aedb', '7355576e3a8aff83f3757c649009d5843d799e45bd60bd19694324e65909f773', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-13 12:25:33.053', '2026-09-06 12:25:33.054', '2026-09-06 12:30:16.638'),
(675, 31, '79cc5ea8-c7da-4870-851c-82055c05aedb', '984d1a33b5548ca8f704f0812ff00b167e304e950ba0fbee04d90db4eac8f62a', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-13 12:25:49.572', '2026-09-06 12:25:49.573', '2026-09-06 12:30:16.638'),
(676, 31, '79cc5ea8-c7da-4870-851c-82055c05aedb', 'be6680246c318164afd5e175749e5965dfd48ba1f3dab3afbf67a2a820eaa19d', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-13 12:26:01.899', '2026-09-06 12:26:01.900', '2026-09-06 12:30:16.638'),
(677, 31, '79cc5ea8-c7da-4870-851c-82055c05aedb', '459f080e863c24e142717c2e665f2eb8e9bc50303b2dd40df706df875d6669b6', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-13 12:26:13.518', '2026-09-06 12:26:13.519', '2026-09-06 12:30:16.638'),
(678, 31, '79cc5ea8-c7da-4870-851c-82055c05aedb', '2da2db5025f0c82b2c45e42eb2bb9ade6f6831a837de258f8b5933a9db7991d8', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-13 12:26:29.512', '2026-09-06 12:26:29.513', '2026-09-06 12:30:16.638'),
(679, 31, '79cc5ea8-c7da-4870-851c-82055c05aedb', '5b6611a7e30bee13804889cc8f53d4e11964655385236460bc008d51f0d6b860', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-13 12:26:41.410', '2026-09-06 12:26:41.410', '2026-09-06 12:30:16.638'),
(680, 31, '79cc5ea8-c7da-4870-851c-82055c05aedb', '723ad491ae80aaf443b7d4d60087f508f0b64823c8285a5b90bd6f2ef18f9e49', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-13 12:26:52.321', '2026-09-06 12:26:52.322', '2026-09-06 12:30:16.638'),
(681, 31, '79cc5ea8-c7da-4870-851c-82055c05aedb', '0219345d47e6e2f8d7ee6d43894ae4a9e3b549a171639304f627bde5d65da8d0', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-13 12:27:02.933', '2026-09-06 12:27:02.934', '2026-09-06 12:30:16.638'),
(682, 31, '79cc5ea8-c7da-4870-851c-82055c05aedb', '262535ed47758e0875a5645997ba935c4a26de81234741bb90f86e5ce8c88c23', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-13 12:27:10.445', '2026-09-06 12:27:10.446', '2026-09-06 12:30:16.638'),
(683, 31, '79cc5ea8-c7da-4870-851c-82055c05aedb', '352506fa08170667134749d2a1e5c0ebe7eeaaac6d17655cd2f9cdb53ed5cadb', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-13 12:27:22.685', '2026-09-06 12:27:22.686', '2026-09-06 12:30:16.638'),
(684, 31, '79cc5ea8-c7da-4870-851c-82055c05aedb', '49f389c7a6d3ab42bd901f3a835c931f858c7115fea3c01b7366b35c9907a5da', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-13 12:27:30.709', '2026-09-06 12:27:30.709', '2026-09-06 12:30:16.638'),
(685, 31, '79cc5ea8-c7da-4870-851c-82055c05aedb', '53dea917265dad4061da6141811840f2d13c79348557d5b647cf6a648f288912', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-13 12:27:40.942', '2026-09-06 12:27:40.943', '2026-09-06 12:30:16.638'),
(686, 31, '79cc5ea8-c7da-4870-851c-82055c05aedb', 'ceea741bca236882ac764784cc4beec6ed003ab2699d917fe0e8b725338c5e67', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-13 12:27:50.689', '2026-09-06 12:27:50.690', '2026-09-06 12:30:16.638'),
(687, 31, '79cc5ea8-c7da-4870-851c-82055c05aedb', 'd760d59d35f5b6c71e443b18f464daaae5142dc1866c8384fbc3d10229920146', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-13 12:28:02.523', '2026-09-06 12:28:02.524', '2026-09-06 12:30:16.638'),
(688, 31, '79cc5ea8-c7da-4870-851c-82055c05aedb', '454db0f0b748659a40b25de879e5b340d3a5206703c3cb85a8fda1cccc801686', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-13 12:28:10.516', '2026-09-06 12:28:10.516', '2026-09-06 12:30:16.638'),
(689, 31, '79cc5ea8-c7da-4870-851c-82055c05aedb', '60ec86c935c76fff6222fc8b19ba9b8a3bf70b6d2fbcf6e067ee524adf647776', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-13 12:28:22.365', '2026-09-06 12:28:22.366', '2026-09-06 12:30:16.638'),
(690, 31, '79cc5ea8-c7da-4870-851c-82055c05aedb', 'ca686089d251a2fd964ada7aacd1b60b5f97e90a77656ea7da30ed74fecf9b87', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-13 12:28:34.066', '2026-09-06 12:28:34.067', '2026-09-06 12:30:16.638'),
(691, 31, '79cc5ea8-c7da-4870-851c-82055c05aedb', 'd999d5d98de5630a7dba48efff50b8187108d3a76020cc44e7bafaae92259b1d', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-13 12:28:47.494', '2026-09-06 12:28:47.495', '2026-09-06 12:30:16.638'),
(692, 31, '79cc5ea8-c7da-4870-851c-82055c05aedb', '4b88b93528e424d7dead10578780cfa4a392a9bbe297186e4a415695a479189a', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-13 12:28:59.429', '2026-09-06 12:28:59.430', '2026-09-06 12:30:16.638'),
(693, 31, '79cc5ea8-c7da-4870-851c-82055c05aedb', '0afe0a2eaba13300f89408f4b1caf0e4a2b3c1fb1422c6b3a2982c6b485ee2a2', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-13 12:29:11.263', '2026-09-06 12:29:11.264', '2026-09-06 12:30:16.638'),
(694, 31, '79cc5ea8-c7da-4870-851c-82055c05aedb', '9078c5cf4fcd9f9b207c778f75d4f7aba57ee1a2f7da026d9704b7a36bf5da92', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-13 12:29:23.722', '2026-09-06 12:29:23.723', '2026-09-06 12:30:16.638'),
(695, 31, '79cc5ea8-c7da-4870-851c-82055c05aedb', '20be21ef66fffe53b4a827f53131d29920a874aa58dbecf5214bcde48c343d3d', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-13 12:29:39.585', '2026-09-06 12:29:39.586', '2026-09-06 12:30:16.638'),
(696, 31, '79cc5ea8-c7da-4870-851c-82055c05aedb', '2ffae0f5228a3950ad9d8da184b2d9d2a180244c3c544ab32e40896e527e5c41', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-13 12:29:47.586', '2026-09-06 12:29:47.587', '2026-09-06 12:30:16.638'),
(697, 31, '79cc5ea8-c7da-4870-851c-82055c05aedb', '5148f9d2f3637abb6e75e0e3e5946c65d9b7cbb6a70314e116be0d77a3dcdf47', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-13 12:29:59.566', '2026-09-06 12:29:59.567', '2026-09-06 12:30:16.638'),
(698, 31, '79cc5ea8-c7da-4870-851c-82055c05aedb', '8dd8ed7120a541b8466dfdf37729ec5c23a71a6d52e94f959a60968056232cb5', 1, 1, 'LOGGED_OUT', '2026-09-13 12:30:07.762', '2026-09-06 12:30:07.763', '2026-09-06 12:30:18.252'),
(699, 31, '79cc5ea8-c7da-4870-851c-82055c05aedb', '8a56429ae523a903ebd1a827b7fb6c1e82b74078c90d32f316c65eae40516886', 0, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-13 12:30:17.211', '2026-09-06 12:30:17.212', '2026-09-06 12:30:16.638'),
(700, 31, 'ee6b1fd5-3c3a-4914-ba82-9f40b9adf806', '1b47826c213d6f1db0667fefd1ae90a2144bd10b946bf0b34559341868ef2ab5', 1, 0, NULL, '2026-09-13 12:30:26.209', '2026-09-06 12:30:26.210', '2026-09-06 12:49:48.445'),
(701, 31, 'ee6b1fd5-3c3a-4914-ba82-9f40b9adf806', 'ff974f0ebf6a43e17793e5f6d0130f79c9bbb5e59ff86d0faba0803eacf4907f', 1, 0, NULL, '2026-09-13 12:49:52.169', '2026-09-06 12:49:52.170', '2026-09-06 12:49:59.901'),
(702, 31, 'ee6b1fd5-3c3a-4914-ba82-9f40b9adf806', 'c08ca1ee883a21c192adcfdc31568050f20c390f54e45cfe2a477349d20c0a9f', 1, 0, NULL, '2026-09-13 12:50:03.637', '2026-09-06 12:50:03.638', '2026-09-08 06:17:34.407'),
(703, 1, '9477df0c-eab4-4a48-8cf4-58e57a24b086', 'c1bda5157648eaed6c66346a9f1c198e3995bc2dd5de1d3615924805650730e3', 0, 1, 'LOGGED_OUT', '2026-09-13 16:12:16.352', '2026-09-06 16:12:16.353', '2026-09-06 16:42:25.903'),
(704, 7, 'e4d9d432-1441-4ad4-84de-8b3bd0f74980', '7e6f876037eb9da2838976b1568f27f72c97b044fbf27b54af1701f289f36eca', 1, 0, NULL, '2026-09-14 04:10:40.111', '2026-09-07 04:10:40.112', '2026-09-07 04:10:46.920'),
(705, 7, 'e4d9d432-1441-4ad4-84de-8b3bd0f74980', '29c7996874f676f4b6bafff71e20f70e968f23e19ff7b09d96a11e11887e40b1', 1, 0, NULL, '2026-09-14 04:10:50.028', '2026-09-07 04:10:50.029', '2026-09-08 16:41:45.179'),
(706, 2, '1dc7d5fc-5a4c-4ebb-8375-edd1ecc97aa3', '4dbb13d8e0091a4d177d418a03ed3dab2288847acc20ce460bacf8d0101fafb0', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 04:17:34.445', '2026-09-07 04:17:34.446', '2026-09-07 04:23:48.379'),
(707, 2, '1dc7d5fc-5a4c-4ebb-8375-edd1ecc97aa3', 'd8970dec9139b2b3e2368f00e87e57b3e964513d8233c440b67c37512f711672', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 04:17:49.403', '2026-09-07 04:17:49.404', '2026-09-07 04:23:48.379'),
(708, 2, '1dc7d5fc-5a4c-4ebb-8375-edd1ecc97aa3', '0c38d1c6c2d17bc755dbf0eaa17009f52b5aa693f26a23f5f14efb69885edc95', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 04:18:00.841', '2026-09-07 04:18:00.842', '2026-09-07 04:23:48.379'),
(709, 2, '1dc7d5fc-5a4c-4ebb-8375-edd1ecc97aa3', 'a5246df0bb36563df20d21d6138e15abcf9bf947ae33b2d3464e59dfb0055600', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 04:18:12.240', '2026-09-07 04:18:12.241', '2026-09-07 04:23:48.379'),
(710, 2, '1dc7d5fc-5a4c-4ebb-8375-edd1ecc97aa3', 'e4543bea390f8b5edc411c5865e8c0e08faa27c3c7de6e3716d9e1dca56276e3', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 04:18:17.471', '2026-09-07 04:18:17.472', '2026-09-07 04:23:48.379'),
(711, 2, '1dc7d5fc-5a4c-4ebb-8375-edd1ecc97aa3', '57b9b26817d509e77d11407fd62c1853edf52fe95ecf77e9dc392228d33d4486', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 04:18:27.761', '2026-09-07 04:18:27.761', '2026-09-07 04:23:48.379'),
(712, 2, '1dc7d5fc-5a4c-4ebb-8375-edd1ecc97aa3', '979d96e8dd8e2ee9f2f5b47520b129849597cf353cad828c1797b783f6c15bea', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 04:18:58.048', '2026-09-07 04:18:58.048', '2026-09-07 04:23:48.379'),
(713, 2, '1dc7d5fc-5a4c-4ebb-8375-edd1ecc97aa3', 'e25935f15f0e20ed967c398cfd1645d7cf515a0db723e406e050d4297c168051', 1, 1, 'LOGGED_OUT', '2026-09-14 04:19:10.058', '2026-09-07 04:19:10.059', '2026-09-07 04:23:50.737'),
(714, 2, '1dc7d5fc-5a4c-4ebb-8375-edd1ecc97aa3', '90ff1693e941afa075df52c39a76910e2455281d286d60f5b9479eac38d8bcc8', 0, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 04:19:26.499', '2026-09-07 04:19:26.500', '2026-09-07 04:23:48.379'),
(715, 2, '1af3d7b1-faf4-42e7-8a33-0d40204bd9b7', '176b60e89f54a23d01cf743868527abeaff850714acb6910d0b54c18b8c099d8', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 04:24:02.010', '2026-09-07 04:24:02.011', '2026-09-07 05:06:35.315'),
(716, 1, '3082268d-22b4-4f8f-9081-5fbadcc55ef0', '87e3052bd9141d3df5505f4f6bde7c018d2cc5a18fd7cbd490dba911480e876a', 1, 0, NULL, '2026-09-14 04:25:58.813', '2026-09-07 04:25:58.813', '2026-09-07 04:26:21.376'),
(717, 1, '3082268d-22b4-4f8f-9081-5fbadcc55ef0', '59600ae9f23d05b599959f3e67f48ff4c2e91851a831632c76ba7d76cd8a2e13', 1, 0, NULL, '2026-09-14 04:26:23.625', '2026-09-07 04:26:23.625', '2026-09-07 04:26:49.969'),
(718, 1, '3082268d-22b4-4f8f-9081-5fbadcc55ef0', '85deb85921df7c3edf639f030630d718b6626f1c8f913107bed9e5d685c79d61', 1, 0, NULL, '2026-09-14 04:26:53.750', '2026-09-07 04:26:53.751', '2026-09-07 04:32:48.836'),
(719, 1, 'cef6d02d-eb92-4cf2-9de9-1ef261ad4e22', '44fa5fab88895c1a64901a9dc4a82eda230424b2227ad5e87f5eb7d58a8b2123', 1, 0, NULL, '2026-09-14 04:27:22.714', '2026-09-07 04:27:22.715', '2026-09-07 05:09:58.799'),
(720, 1, '3082268d-22b4-4f8f-9081-5fbadcc55ef0', '4aece4df6f983f78ba576433afb7e788401f4129ac68ad208dc76db9fe285837', 1, 0, NULL, '2026-09-14 04:32:52.571', '2026-09-07 04:32:52.572', '2026-09-07 04:33:02.464'),
(721, 1, '3082268d-22b4-4f8f-9081-5fbadcc55ef0', 'ff7220e99672d230c5a05c59ffa6f38b609537db1d2060cb3234812dd31eaa80', 1, 0, NULL, '2026-09-14 04:33:06.207', '2026-09-07 04:33:06.208', '2026-09-07 04:33:55.892'),
(722, 1, '3082268d-22b4-4f8f-9081-5fbadcc55ef0', '4ffe964be70b5778a002885894a9a6cc00606eb191dfcd1cddae8b10aa19a176', 1, 0, NULL, '2026-09-14 04:33:59.460', '2026-09-07 04:33:59.461', '2026-09-07 04:59:05.348'),
(723, 1, '85b59309-c902-4351-8eb7-0583a4c88ccc', 'a1c9aeb33f95120f92f952690cdbc0d7640144c5ac7ad8125d7de1200cb21acf', 1, 0, NULL, '2026-09-14 04:51:59.954', '2026-09-07 04:51:59.955', '2026-09-07 05:07:03.192'),
(724, 1, '3082268d-22b4-4f8f-9081-5fbadcc55ef0', '3ca3d4d6956c804f7d4575617ac957c54ad13f6f2ea08a211364668c38727939', 1, 0, NULL, '2026-09-14 04:59:09.152', '2026-09-07 04:59:09.153', '2026-09-07 05:10:23.226'),
(725, 3, '80e8a8df-f7cb-433c-9f08-38c65eb10376', '599c8a9112802cbfd0ade00106176d6427dd019d055d0ebec66c87a3347c7665', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 05:01:00.327', '2026-09-07 05:01:00.328', '2026-09-07 06:54:40.230'),
(726, 3, '80e8a8df-f7cb-433c-9f08-38c65eb10376', '4f83edc90169fc52f3e84a098acadb4002c867b4c99f34356157f13727701fa4', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 05:01:11.511', '2026-09-07 05:01:11.512', '2026-09-07 06:54:40.230'),
(727, 3, '80e8a8df-f7cb-433c-9f08-38c65eb10376', 'c683f4fc2b9a96a6329f42c5d88729cd97cb5c9912ba9a2016b217d38393a4ec', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 05:01:20.335', '2026-09-07 05:01:20.336', '2026-09-07 06:54:40.230'),
(728, 3, '80e8a8df-f7cb-433c-9f08-38c65eb10376', '0afbd1c69fbfd67d1d0e50ca4468fc0c91326d52ca09b0ead73923610673facb', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 05:01:29.360', '2026-09-07 05:01:29.361', '2026-09-07 06:54:40.230'),
(729, 3, '80e8a8df-f7cb-433c-9f08-38c65eb10376', '67405db3ebb496276f80220e94e5d57fdfc546aad61eab49c81e64b1ae047e47', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 05:01:37.593', '2026-09-07 05:01:37.593', '2026-09-07 06:54:40.230'),
(730, 2, '1af3d7b1-faf4-42e7-8a33-0d40204bd9b7', 'db84e88b94262cb2dc0055ffaa693d7943ccbfda4cd27a616b154620c64d9109', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 05:01:51.674', '2026-09-07 05:01:51.675', '2026-09-07 05:06:35.315'),
(731, 2, '1af3d7b1-faf4-42e7-8a33-0d40204bd9b7', '22ba199d119d29d0af2b24889944ab6e4c0f46308f97267a2a7d24c78457719d', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 05:02:07.088', '2026-09-07 05:02:07.089', '2026-09-07 05:06:35.315'),
(732, 2, '1af3d7b1-faf4-42e7-8a33-0d40204bd9b7', '4aa2af8b32034ce6312430854c6461a4ba6bea80d1a605458a015e8f8d7b2378', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 05:02:18.663', '2026-09-07 05:02:18.663', '2026-09-07 05:06:35.315'),
(733, 2, '1af3d7b1-faf4-42e7-8a33-0d40204bd9b7', '32f410566cfa6276133b0e951a458daa0253c3684a4ea80198f906cb01ef4a20', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 05:02:30.017', '2026-09-07 05:02:30.018', '2026-09-07 05:06:35.315'),
(734, 2, '1af3d7b1-faf4-42e7-8a33-0d40204bd9b7', '2532d0df239d92599ce9944b07589cd4c4272ffbb48fb9fc1e98e280d4fedac1', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 05:02:49.253', '2026-09-07 05:02:49.254', '2026-09-07 05:06:35.315'),
(735, 2, '1af3d7b1-faf4-42e7-8a33-0d40204bd9b7', '40c0fa1b46166c6d7974f0e4d2c4d6efa71fde264bfe2859593aa42f8c7c4b5b', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 05:03:42.925', '2026-09-07 05:03:42.926', '2026-09-07 05:06:35.315'),
(736, 2, '1af3d7b1-faf4-42e7-8a33-0d40204bd9b7', '23dc1de4c76aecdbf0d410b6ab3f235749d4655eee4b8f52f720d2a93fdbe702', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 05:03:56.682', '2026-09-07 05:03:56.683', '2026-09-07 05:06:35.315'),
(737, 4, 'b12b5f03-d779-4184-90c5-30038c2a453a', '412bd285fa54b02e52d8cd837e6a7a866f515587f017d892255087ccb59a999f', 1, 1, 'LOGGED_OUT', '2026-09-14 05:04:15.515', '2026-09-07 05:04:15.516', '2026-09-07 05:04:43.371'),
(738, 4, 'b12b5f03-d779-4184-90c5-30038c2a453a', 'a2ff46042e8983106b8ed1def2fe31ec9bc89b2b281fc8c4d11f29602d6f8d6e', 0, 1, 'AUTHORIZATION_CHANGED', '2026-09-14 05:04:44.926', '2026-09-07 05:04:44.927', '2026-09-11 13:04:32.537'),
(739, 4, '2610b4d6-adb4-4e11-b2a7-fc27399f3573', '4d4ed1e2ec5af9fe82b7b9f9f1f39dd58c0a4e414989c3139a71ce02cf3aa70e', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 05:05:17.489', '2026-09-07 05:05:17.490', '2026-09-08 06:48:15.980'),
(740, 4, '2610b4d6-adb4-4e11-b2a7-fc27399f3573', 'a422aa8b425111031e9756f542711dac6ab087099c25e07126e9828153e67817', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 05:05:49.379', '2026-09-07 05:05:49.380', '2026-09-08 06:48:15.980'),
(741, 2, '1af3d7b1-faf4-42e7-8a33-0d40204bd9b7', '500fcee35a8653ddbd9dc5dc777aefbe7be4f2ea613f1d4ce82293184e91cd1c', 1, 1, 'LOGGED_OUT', '2026-09-14 05:06:08.776', '2026-09-07 05:06:08.777', '2026-09-07 05:07:26.269'),
(742, 2, '1af3d7b1-faf4-42e7-8a33-0d40204bd9b7', '646e26f0da7c6c6b3e6924481e74b29a4a7ed25f8250fc19cc5288413a9f2183', 0, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 05:06:24.641', '2026-09-07 05:06:24.642', '2026-09-07 05:06:35.315'),
(743, 4, '2610b4d6-adb4-4e11-b2a7-fc27399f3573', 'ba0cfc84bb49eba65c2fd381b04261519aa0c29789daf67acc02fbaa8a0ef131', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 05:06:52.864', '2026-09-07 05:06:52.865', '2026-09-08 06:48:15.980'),
(744, 1, '85b59309-c902-4351-8eb7-0583a4c88ccc', '68299c3ba0c024a55f99614f4540aea15e02a9debc5d9e70cc71d65571eede4f', 0, 1, 'LOGGED_OUT', '2026-09-14 05:07:07.201', '2026-09-07 05:07:07.202', '2026-09-07 05:37:32.615'),
(745, 4, '2610b4d6-adb4-4e11-b2a7-fc27399f3573', '3287910fa91a434a2a38e7894857c01b2d7b9547eae603ff10802f228206087d', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 05:07:22.858', '2026-09-07 05:07:22.859', '2026-09-08 06:48:15.980'),
(746, 2, '88180197-b694-427c-969e-2d6f6ee01bd8', '209787ff7739f1bfaec64620de53e7d6c71f085dabd69bbf1c8b94c03922c4b2', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 05:07:32.260', '2026-09-07 05:07:32.261', '2026-09-08 04:28:29.311'),
(747, 4, '2610b4d6-adb4-4e11-b2a7-fc27399f3573', 'c08922b66763de88621bbfe625cd9f104936adfd9b09da6bdd111084ea94a067', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 05:07:34.948', '2026-09-07 05:07:34.949', '2026-09-08 06:48:15.980'),
(748, 4, '2610b4d6-adb4-4e11-b2a7-fc27399f3573', 'a632d4d87d56220e3e0ca55b3ca92e2a5d92b54c6dbf33bb9e696daaf766514c', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 05:07:53.554', '2026-09-07 05:07:53.555', '2026-09-08 06:48:15.980'),
(749, 4, '2610b4d6-adb4-4e11-b2a7-fc27399f3573', '98853657d89c989cafc0e5f13fa29c71249280dcfe5900397302641e97626dd2', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 05:08:08.542', '2026-09-07 05:08:08.543', '2026-09-08 06:48:15.980'),
(750, 3, '80e8a8df-f7cb-433c-9f08-38c65eb10376', 'ee0fa150d382e41ea9ed4499a14e33095e62134ae733b2c84b28ae86e400cf5b', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 05:08:14.335', '2026-09-07 05:08:14.336', '2026-09-07 06:54:40.230'),
(751, 4, '2610b4d6-adb4-4e11-b2a7-fc27399f3573', 'b1a4110e4a5bce37608bf0cd8af778a859908e7035f261f23f41872d48f3e63a', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 05:08:18.068', '2026-09-07 05:08:18.068', '2026-09-08 06:48:15.980'),
(752, 4, '2610b4d6-adb4-4e11-b2a7-fc27399f3573', 'a1c61c9dfcdd5c76a44bcc755beb66376484ec5c2e7e3288dda88661e1e4c9fb', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 05:08:26.262', '2026-09-07 05:08:26.263', '2026-09-08 06:48:15.980'),
(753, 4, '2610b4d6-adb4-4e11-b2a7-fc27399f3573', '4b5f70772857b0a38ce53d51c09b8405c8d3a8a2a39bef034fa904b037a0c604', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 05:08:38.835', '2026-09-07 05:08:38.836', '2026-09-08 06:48:15.980'),
(754, 4, '2610b4d6-adb4-4e11-b2a7-fc27399f3573', '764074c1e7cb14be54a5702fccfc6daf7f899028acb4f3b71efc3acf553b5ea7', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 05:08:46.265', '2026-09-07 05:08:46.265', '2026-09-08 06:48:15.980'),
(755, 4, '2610b4d6-adb4-4e11-b2a7-fc27399f3573', '9af2c4cb1052ef4ead2080e717b512757a2ed61114ae072f79698b35cf2d72fd', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 05:08:57.868', '2026-09-07 05:08:57.868', '2026-09-08 06:48:15.980'),
(756, 4, '2610b4d6-adb4-4e11-b2a7-fc27399f3573', 'fa36cd8616fdcb2acb831c69cc3bc98ed0f2e30aa5a111eaf6e76b61f427e076', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 05:09:10.359', '2026-09-07 05:09:10.360', '2026-09-08 06:48:15.980'),
(757, 3, '80e8a8df-f7cb-433c-9f08-38c65eb10376', '9f665a9672417a19b7b6a8fcb6d0575db151a125d64e38713c214873658d3672', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 05:09:10.465', '2026-09-07 05:09:10.466', '2026-09-07 06:54:40.230'),
(758, 4, '2610b4d6-adb4-4e11-b2a7-fc27399f3573', '0ff89798035cb4744ad24441a41191687eaa08bb4bfeb5cef5419f51e805ef72', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 05:09:20.820', '2026-09-07 05:09:20.821', '2026-09-08 06:48:15.980'),
(759, 3, '80e8a8df-f7cb-433c-9f08-38c65eb10376', '33289e233270217eebe6a905dcd921303269689e14b50b246488b3b25db7764c', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 05:09:35.516', '2026-09-07 05:09:35.517', '2026-09-07 06:54:40.230'),
(760, 4, '2610b4d6-adb4-4e11-b2a7-fc27399f3573', '475ec0d5fe5ccae7bbbb489304194c092b5365d508e605244d212586f637a2e1', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 05:09:35.551', '2026-09-07 05:09:35.552', '2026-09-08 06:48:15.980'),
(761, 1, 'cef6d02d-eb92-4cf2-9de9-1ef261ad4e22', '1ac3a76a194e4ebedca33bf9103d1c17f185cac4386ed3aa8faa62868763d7e3', 1, 0, NULL, '2026-09-14 05:10:01.062', '2026-09-07 05:10:01.063', '2026-09-07 05:12:18.219'),
(762, 1, '3082268d-22b4-4f8f-9081-5fbadcc55ef0', '446f576852f22a28462d7d14cf2de54ae03446a80dce28728fb1ff8cfecb501b', 1, 0, NULL, '2026-09-14 05:10:27.124', '2026-09-07 05:10:27.125', '2026-09-07 05:45:53.615'),
(763, 1, 'cef6d02d-eb92-4cf2-9de9-1ef261ad4e22', '82b4a32a249f89f280dc544439e12a5d59f24afaf76f0e9ac61c916975681ba2', 1, 0, NULL, '2026-09-14 05:12:21.981', '2026-09-07 05:12:21.982', '2026-09-07 05:13:38.518'),
(764, 1, 'cef6d02d-eb92-4cf2-9de9-1ef261ad4e22', 'ad458334f9625a7d875653a64ecf8472e6e7e954589e10cf5e4329551022c657', 1, 0, NULL, '2026-09-14 05:13:42.332', '2026-09-07 05:13:42.333', '2026-09-07 05:14:26.676'),
(765, 1, 'cef6d02d-eb92-4cf2-9de9-1ef261ad4e22', '019d5b6b74436a7711a8b39d2dee370bfe10bbf024c27cc8c88ef267e0cfe99c', 0, 1, 'LOGGED_OUT', '2026-09-14 05:14:30.406', '2026-09-07 05:14:30.407', '2026-09-07 06:16:54.554'),
(766, 2, '88180197-b694-427c-969e-2d6f6ee01bd8', 'aae4d7608ac2c447be7f60ba43cdaa43a8fc2ca5327f9efd57364e62dde3e440', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 05:21:23.977', '2026-09-07 05:21:23.978', '2026-09-08 04:28:29.311'),
(767, 1, '3082268d-22b4-4f8f-9081-5fbadcc55ef0', '28c9ad890227e21f0faa9881f0f4093560514dd433293f30d4ecfa1b67f9e92a', 1, 0, NULL, '2026-09-14 05:45:56.935', '2026-09-07 05:45:56.935', '2026-09-07 06:18:32.113'),
(768, 1, '25c86ec7-6ea5-4422-bba6-ac0c52cd684b', '3bac707baa082de4ee14665ee29a87a8b2f016f79b5b17139d86ae278648de41', 0, 1, 'LOGGED_OUT', '2026-09-14 06:18:21.663', '2026-09-07 06:18:21.664', '2026-09-07 06:49:49.880'),
(769, 1, '3082268d-22b4-4f8f-9081-5fbadcc55ef0', 'ecbda902fbe630f9c065b0a5723a6ee69152e651ba44d7b94ab91281a46b8a24', 1, 0, NULL, '2026-09-14 06:18:35.156', '2026-09-07 06:18:35.157', '2026-09-07 08:13:04.919'),
(770, 3, '80e8a8df-f7cb-433c-9f08-38c65eb10376', 'f5c35acafa9c09f60361153cf226839c8195d46fb06660728f36423b40f47316', 1, 1, 'LOGGED_OUT', '2026-09-14 06:54:27.026', '2026-09-07 06:54:27.027', '2026-09-07 06:54:46.703'),
(771, 3, '80e8a8df-f7cb-433c-9f08-38c65eb10376', '2a5254ee112866c61d303e14e5af47c3d2aca21249e5b6c27ea87122694504b0', 0, 0, NULL, '2026-09-14 06:54:41.501', '2026-09-07 06:54:41.502', '2026-09-07 06:54:41.502'),
(772, 3, 'dfcb9a4e-a7fc-4cf9-b861-f3d0b709a7e5', '147b3df2cc982007731402902ed0f0f5d3995b1ab3288c4ca2341259be3c453e', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 06:54:52.890', '2026-09-07 06:54:52.891', '2026-09-10 05:00:46.887'),
(773, 1, '3082268d-22b4-4f8f-9081-5fbadcc55ef0', '9964c81c1025d21c9373974286ea71b6494cdab7b116f4c8ef8cecb328f3610c', 1, 0, NULL, '2026-09-14 08:13:08.642', '2026-09-07 08:13:08.643', '2026-09-08 05:16:11.774'),
(774, 3, 'dfcb9a4e-a7fc-4cf9-b861-f3d0b709a7e5', '8b330f285c3e8fb0be72684abded0984e193e68106ee9c1629d59ef751a23e8b', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 12:05:22.766', '2026-09-07 12:05:22.767', '2026-09-10 05:00:46.887'),
(775, 3, 'dfcb9a4e-a7fc-4cf9-b861-f3d0b709a7e5', '08319471ed883cca4ccbf52bc17e8a159b1b5de4ef9617560c1c893422f58150', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 12:08:03.258', '2026-09-07 12:08:03.259', '2026-09-10 05:00:46.887'),
(776, 3, 'dfcb9a4e-a7fc-4cf9-b861-f3d0b709a7e5', '98dbd61eda6bfba1882a3e4409aefa826d606c9184dd19d0f4082f470decc91b', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 12:11:48.342', '2026-09-07 12:11:48.343', '2026-09-10 05:00:46.887'),
(777, 4, '2610b4d6-adb4-4e11-b2a7-fc27399f3573', '9dc7cc81d131462aae81af7c3dc03a349fe3aed6eadef10eff0c1ac3212f199a', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 12:12:50.998', '2026-09-07 12:12:50.999', '2026-09-08 06:48:15.980'),
(778, 2, '88180197-b694-427c-969e-2d6f6ee01bd8', 'c01e78a60b0414988d6a37160b948fe1f84b488e199c2365186b09feb70215ba', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 12:18:01.353', '2026-09-07 12:18:01.354', '2026-09-08 04:28:29.311'),
(779, 4, '2610b4d6-adb4-4e11-b2a7-fc27399f3573', 'e5bd1720b1130dba7200f1c5bef3c568be6d9609a1ca3af5e95f7ba61b283ce2', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 12:30:23.760', '2026-09-07 12:30:23.761', '2026-09-08 06:48:15.980'),
(780, 4, '2610b4d6-adb4-4e11-b2a7-fc27399f3573', '17120dd8659496282d7641e6d27b3f2763141f04b3a0729804365c48105d9bc1', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 12:30:34.516', '2026-09-07 12:30:34.516', '2026-09-08 06:48:15.980'),
(781, 6, 'c67d2da4-671c-4bfe-9ac0-01d80ab8e45e', '03a90cc92a3ba8e07e2c4934c5b07ad8fee5d92c3f83c304d2bb020a0ed680ef', 0, 1, 'LOGGED_OUT', '2026-09-14 12:33:32.948', '2026-09-07 12:33:32.949', '2026-09-07 12:34:52.388'),
(782, 3, 'dfcb9a4e-a7fc-4cf9-b861-f3d0b709a7e5', '7d099c7bb7a045e477ef68bb0fd474bc3674487092a97cde96d110118204bfd0', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-14 12:33:40.155', '2026-09-07 12:33:40.156', '2026-09-10 05:00:46.887'),
(783, 2, '88180197-b694-427c-969e-2d6f6ee01bd8', '8fa9ede5a1da7b1b6e090062e2a6ef111de847cb89f8d5642227cbf397cf22ea', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 04:27:07.289', '2026-09-08 04:27:07.290', '2026-09-08 04:28:29.311'),
(784, 2, '88180197-b694-427c-969e-2d6f6ee01bd8', 'c948565061f29e4ccf3be941b74352aaad95a1ac5bcb9c8ddbab587b23c86ac3', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 04:27:20.527', '2026-09-08 04:27:20.528', '2026-09-08 04:28:29.311'),
(785, 2, '88180197-b694-427c-969e-2d6f6ee01bd8', '99005915e56e4ef8bced612533a5207f77e38c095bbd2d14b2488867b8d5378e', 1, 1, 'LOGGED_OUT', '2026-09-15 04:27:31.162', '2026-09-08 04:27:31.163', '2026-09-08 12:08:28.179'),
(786, 2, '88180197-b694-427c-969e-2d6f6ee01bd8', '8f09e650f6789ba39628236fb818fb389e60621449e96b4ac50c0ceb919fe223', 0, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 04:27:42.871', '2026-09-08 04:27:42.872', '2026-09-08 04:28:29.311'),
(787, 4, '2610b4d6-adb4-4e11-b2a7-fc27399f3573', '1b840cc86879c702a3515434265d3e2dc999d8c3b69d9b62faca88a1a6b23d91', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 04:34:58.556', '2026-09-08 04:34:58.556', '2026-09-08 06:48:15.980'),
(788, 4, '2610b4d6-adb4-4e11-b2a7-fc27399f3573', '9de1cc8bcad571240d47152c4d1959c4e40871e931c37d34087f96bf90155447', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 04:35:09.318', '2026-09-08 04:35:09.319', '2026-09-08 06:48:15.980'),
(789, 4, '2610b4d6-adb4-4e11-b2a7-fc27399f3573', '47417f709c8bd1dcc7fc312d51bcdbea5151e7cbcaa6eaed0518f07afe14e42b', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 04:41:39.507', '2026-09-08 04:41:39.507', '2026-09-08 06:48:15.980'),
(790, 4, '2610b4d6-adb4-4e11-b2a7-fc27399f3573', '5660ab76cd616c1ce00ae18424b72ec6190a446d0fe9108b61b8ed58dea8d659', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 04:41:55.439', '2026-09-08 04:41:55.440', '2026-09-08 06:48:15.980'),
(791, 4, '2610b4d6-adb4-4e11-b2a7-fc27399f3573', '9bc100629d0f6cc6ff585e14f703a7be633b4cf158c1f137776e3068157f608d', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 04:42:05.459', '2026-09-08 04:42:05.460', '2026-09-08 06:48:15.980'),
(792, 4, '2610b4d6-adb4-4e11-b2a7-fc27399f3573', '974bd712990e65b1cea316216c7ef8aaecd93ff7c4c4557a3af212b8118f28f7', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 04:42:13.344', '2026-09-08 04:42:13.345', '2026-09-08 06:48:15.980'),
(793, 4, '2610b4d6-adb4-4e11-b2a7-fc27399f3573', 'b0ff8b6e535bd397e5924e28d5e7813ec412b3c0a11d7ea1f23acea38034f15c', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 04:42:25.121', '2026-09-08 04:42:25.122', '2026-09-08 06:48:15.980'),
(794, 4, '2610b4d6-adb4-4e11-b2a7-fc27399f3573', 'fd3ee6225f391e1cf3bba82f8cc7cea87e7a9c45d18db9b3a23311522f63dd33', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 04:42:36.134', '2026-09-08 04:42:36.135', '2026-09-08 06:48:15.980'),
(795, 4, '2610b4d6-adb4-4e11-b2a7-fc27399f3573', 'fe3fd577e3b448e0737eccbb454b4f8eb2b8e25b6b4b8fc6875d31b0e160a0a6', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 04:42:48.010', '2026-09-08 04:42:48.011', '2026-09-08 06:48:15.980'),
(796, 4, '2610b4d6-adb4-4e11-b2a7-fc27399f3573', '3a5d4fa4b93098010956f39b32f864bab400861c44f7b2b3912b4d4d5bd5c4b9', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 04:43:00.327', '2026-09-08 04:43:00.328', '2026-09-08 06:48:15.980'),
(797, 4, '2610b4d6-adb4-4e11-b2a7-fc27399f3573', '40e2123b6189d87e848557c20903a404d12f504dfa7153443ebeb83eebe4fb4e', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 04:43:15.178', '2026-09-08 04:43:15.179', '2026-09-08 06:48:15.980'),
(798, 3, 'dfcb9a4e-a7fc-4cf9-b861-f3d0b709a7e5', '172b16278d231b1547667d6c0527e2e68fc3e6111b8e3ef5f8060524b7879289', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 04:53:48.023', '2026-09-08 04:53:48.024', '2026-09-10 05:00:46.887'),
(799, 1, '3082268d-22b4-4f8f-9081-5fbadcc55ef0', '94274b0c080bb0e6657f27ce0bb56c9f6ed7adca582c9381704597202ce19a18', 1, 0, NULL, '2026-09-15 05:16:14.797', '2026-09-08 05:16:14.798', '2026-09-08 06:29:11.798'),
(800, 31, 'ee6b1fd5-3c3a-4914-ba82-9f40b9adf806', '5ddd64c3a6f34d7977428ae95a1dcebd03a4e0a0cf5441d2f9abea6cb59d5fd4', 0, 0, NULL, '2026-09-15 06:17:37.492', '2026-09-08 06:17:37.494', '2026-09-08 06:17:37.494'),
(801, 1, 'f8f58522-0b5e-49eb-a7c6-9045a9c6c5de', 'a0afddd4e97fcdb0f381907d0292325e378ca156d199fdcc7d3c42304b36e02e', 1, 0, NULL, '2026-09-15 06:23:08.142', '2026-09-08 06:23:08.143', '2026-09-08 06:28:08.446'),
(802, 1, 'f8f58522-0b5e-49eb-a7c6-9045a9c6c5de', 'b754cf7bcf620757186bc0c2a1a75315a999fb4ad092b200200381317170e2c1', 0, 1, 'LOGGED_OUT', '2026-09-15 06:28:12.115', '2026-09-08 06:28:12.116', '2026-09-08 07:02:38.367'),
(803, 1, '3082268d-22b4-4f8f-9081-5fbadcc55ef0', '8d653f7880dd541eb7848b858f7707bd0ad95583f79a9f27d62c8eb8e8a1ca1a', 1, 0, NULL, '2026-09-15 06:29:15.478', '2026-09-08 06:29:15.479', '2026-09-08 09:55:26.981'),
(804, 3, 'dfcb9a4e-a7fc-4cf9-b861-f3d0b709a7e5', '26c590af20c6b43687d1a22f63e2682748e8a48697fd5c0af891eb64b2137910', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 06:42:49.058', '2026-09-08 06:42:49.059', '2026-09-10 05:00:46.887'),
(805, 4, '2610b4d6-adb4-4e11-b2a7-fc27399f3573', 'd627c87cae7eb2f05793938dd3729d8c2e22a6cde1b5fc6829b1132ca85f44fb', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 06:43:10.336', '2026-09-08 06:43:10.337', '2026-09-08 06:48:15.980'),
(806, 4, '2610b4d6-adb4-4e11-b2a7-fc27399f3573', '803878becb107ffeab8a6532d805243d43ba5d1cc93b030a261ef472ef39d919', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 06:43:22.822', '2026-09-08 06:43:22.823', '2026-09-08 06:48:15.980'),
(807, 4, '2610b4d6-adb4-4e11-b2a7-fc27399f3573', 'c53c87f594cb188974c9be53117c529ea4a857518188cdabda6799daae0d6a72', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 06:43:33.461', '2026-09-08 06:43:33.462', '2026-09-08 06:48:15.980'),
(808, 4, '2610b4d6-adb4-4e11-b2a7-fc27399f3573', '89fc3c2d1cfb50f59cb8081526ea68bcc72e5993911f6eff80cdd54910e3abcc', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 06:43:41.752', '2026-09-08 06:43:41.753', '2026-09-08 06:48:15.980'),
(809, 4, '2610b4d6-adb4-4e11-b2a7-fc27399f3573', '23ebeec1579585d57929262ed7b0acb797315474b5660c0c9bd790a5ff5366ef', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 06:43:53.794', '2026-09-08 06:43:53.795', '2026-09-08 06:48:15.980'),
(810, 4, '2610b4d6-adb4-4e11-b2a7-fc27399f3573', '38ba92e3a87abf66eae893d14d32cc13be591fdc8ee897965b4a00415846aa7c', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 06:44:06.892', '2026-09-08 06:44:06.892', '2026-09-08 06:48:15.980'),
(811, 4, '2610b4d6-adb4-4e11-b2a7-fc27399f3573', '696092130aad462d00cf0b2128aea53e925f157afaee113a2dc9a738c89a9132', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 06:44:17.923', '2026-09-08 06:44:17.924', '2026-09-08 06:48:15.980'),
(812, 4, '2610b4d6-adb4-4e11-b2a7-fc27399f3573', '0db048d299ee2738dfdf6d2021298e9d59a9a93fa55255e12b56168d21f21b5d', 1, 1, 'LOGGED_OUT', '2026-09-15 06:44:29.223', '2026-09-08 06:44:29.224', '2026-09-08 06:48:18.321'),
(813, 4, '2610b4d6-adb4-4e11-b2a7-fc27399f3573', 'f520fefa42547cc5977eb8e0c63fdc6e05f0eef947fc618992419f5588047140', 0, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 06:44:38.559', '2026-09-08 06:44:38.560', '2026-09-08 06:48:15.980'),
(814, 4, 'b63c2e5f-acb5-4a07-a22a-399e63708baf', '2dd26785fc19cdf709da730a8ab724a9517a307cc8b5c3224308587072ded126', 1, 1, 'LOGGED_OUT', '2026-09-15 06:48:51.319', '2026-09-08 06:48:51.326', '2026-09-08 10:54:24.753'),
(815, 4, 'b63c2e5f-acb5-4a07-a22a-399e63708baf', 'a73a710dea3b43307b677f2c536a6b05d814dd2cfaf0c08db03e26c5e5add077', 0, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 06:50:08.391', '2026-09-08 06:50:08.391', '2026-09-08 10:54:22.359'),
(816, 1, 'dff040f8-1b21-49d4-aff8-c2b426c4679f', 'e9cb14d4d4c981bd92d040dbdacfb190aaedcdcafe5e64deba66de5e6e2249c6', 1, 0, NULL, '2026-09-15 08:06:49.082', '2026-09-08 08:06:49.083', '2026-09-08 08:18:58.776'),
(817, 1, 'dff040f8-1b21-49d4-aff8-c2b426c4679f', '264f02207deb91bc4a30a9d0b9f203a0539b3893faa3e2a645e9a45cda7b7ec5', 0, 1, 'LOGGED_OUT', '2026-09-15 08:19:02.727', '2026-09-08 08:19:02.728', '2026-09-08 08:19:06.822'),
(818, 1, '41833b50-a537-464a-b91b-a5bf7c462063', '44c6ccbd38baacebda0663cbd1dc5a03540fcc05130d4470a533efafce0fad5b', 1, 0, NULL, '2026-09-15 08:21:59.024', '2026-09-08 08:21:59.025', '2026-09-08 08:39:38.904'),
(819, 1, '41833b50-a537-464a-b91b-a5bf7c462063', '28614b3df60bc2704b931832d66e0fe7a614ca6ee3a253a644e801cd5b4c6ce9', 1, 0, NULL, '2026-09-15 08:39:42.815', '2026-09-08 08:39:42.815', '2026-09-08 08:39:57.230'),
(820, 1, '41833b50-a537-464a-b91b-a5bf7c462063', '96fbec5e7e39ef47f36ab674138999fbf7d0837c4e3bc94d2b45e86ab82fe65a', 0, 0, NULL, '2026-09-15 08:39:59.311', '2026-09-08 08:39:59.312', '2026-09-08 08:39:59.312'),
(821, 1, '45f5cfd8-7732-41cc-90ff-214160d3814a', '609c5dac3abd7321415254effe5c2053b38decd261bfd72dc433a09629dc85ca', 0, 0, NULL, '2026-09-15 09:45:04.049', '2026-09-08 09:45:04.051', '2026-09-08 09:45:04.051'),
(822, 1, '3082268d-22b4-4f8f-9081-5fbadcc55ef0', 'b0cee20d69ea507536006ba3637544bda622c591f99920da4ba62323db9c3276', 0, 1, 'LOGGED_OUT', '2026-09-15 09:55:30.763', '2026-09-08 09:55:30.764', '2026-09-08 11:12:09.706'),
(823, 3, 'dfcb9a4e-a7fc-4cf9-b861-f3d0b709a7e5', '30cc496ea63b05b84b8a860d686ece740513a3a8da5fac0a58ae071d84307b1d', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 10:50:40.543', '2026-09-08 10:50:40.544', '2026-09-10 05:00:46.887'),
(824, 3, 'dfcb9a4e-a7fc-4cf9-b861-f3d0b709a7e5', '40d129c31aa6bdaec457e846fa548af0a5128c3b8a984396f9322cd7151f5251', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 10:51:55.366', '2026-09-08 10:51:55.367', '2026-09-10 05:00:46.887'),
(825, 4, '66955407-ba57-496b-8abb-8b19f7cc5fbf', '3db60cf06c09da30bd0a789ce8f6c87914336a65effbf0be196d4b0348025ba5', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 10:54:54.931', '2026-09-08 10:54:54.932', '2026-09-08 12:34:52.228'),
(826, 1, '60be834e-361c-4cf0-9329-06cd0ad0ee30', '6e32b57e63e2d54a91dd823c47c3935d529899a17e4c18eb5471e9159179e17e', 1, 0, NULL, '2026-09-15 11:12:17.145', '2026-09-08 11:12:17.146', '2026-09-08 11:17:40.232'),
(827, 1, '60be834e-361c-4cf0-9329-06cd0ad0ee30', 'aced5b538edefca969b9b8cec45fa73aacedb96d95a50cd37e17d3c9df3f56da', 1, 0, NULL, '2026-09-15 11:17:44.033', '2026-09-08 11:17:44.034', '2026-09-08 11:18:57.483'),
(828, 1, '60be834e-361c-4cf0-9329-06cd0ad0ee30', '8edf72d19fcc84d7c25b2aea1bfa3dc6cbe4d38a1c64f0f3d2f22952f69590b1', 0, 1, 'LOGGED_OUT', '2026-09-15 11:19:01.266', '2026-09-08 11:19:01.267', '2026-09-08 11:25:52.314');
INSERT INTO `AuthSession` (`id`, `employee_id`, `family_token`, `refresh_token_hash`, `consumed`, `revoked`, `revocation_reason`, `expires_at`, `created_at`, `updated_at`) VALUES
(829, 2, '9443ce99-dbbd-4614-97d0-278adab3580f', 'd4add3305792dbf28e93798b701d713b7e0ed121c9fb29d60980c5dc22efb6cf', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 12:08:36.741', '2026-09-08 12:08:36.742', '2026-09-09 12:26:50.425'),
(830, 3, 'dfcb9a4e-a7fc-4cf9-b861-f3d0b709a7e5', 'acf0361b3a236e755096e1e219571e06421b7c05ac805f50ed55b8ab52c3d34d', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 12:14:39.693', '2026-09-08 12:14:39.694', '2026-09-10 05:00:46.887'),
(831, 3, 'dfcb9a4e-a7fc-4cf9-b861-f3d0b709a7e5', '6206a16dfca6e9f648def49d0de72272a6982c7c9065cb15ad6f69f488778fe9', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 12:15:35.750', '2026-09-08 12:15:35.751', '2026-09-10 05:00:46.887'),
(832, 2, '9443ce99-dbbd-4614-97d0-278adab3580f', 'a9dd34dfdc11eb429c3a689589f2b7e5dfa2e77edd10e3ddcefe9108a8dd8b32', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 12:19:38.068', '2026-09-08 12:19:38.069', '2026-09-09 12:26:50.425'),
(833, 3, 'dfcb9a4e-a7fc-4cf9-b861-f3d0b709a7e5', 'c5ade598cb00b5803715d7e86902cb29cd961f4c122a2eaf21b3f5067c367704', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 12:28:21.177', '2026-09-08 12:28:21.178', '2026-09-10 05:00:46.887'),
(834, 4, '66955407-ba57-496b-8abb-8b19f7cc5fbf', '99a1f3b78298f83b70f42c20e90af94456ec58c3fdb823e22341bd9cc341e642', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 12:28:39.426', '2026-09-08 12:28:39.427', '2026-09-08 12:34:52.228'),
(835, 6, 'a690b88f-129b-4248-b3a7-1a7ee6847052', 'ad906af3e11ee5b29d0873a82a3d6f2e208532289bf83f896ad3a508152cb6bf', 1, 0, NULL, '2026-09-15 12:29:45.454', '2026-09-08 12:29:45.455', '2026-09-09 12:05:53.791'),
(836, 2, '9443ce99-dbbd-4614-97d0-278adab3580f', 'ade7c652bc4739c854be5e7d6131c026fd29c6aad924eabd61a3f90c94cdbc2c', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 12:30:22.462', '2026-09-08 12:30:22.463', '2026-09-09 12:26:50.425'),
(837, 1, '0b3eaabf-e1be-4a33-94df-1dc71368880d', 'b3da95286640914654b204a256eb0d2ca85f3f34a0f9c5417a5c4429b3ce9468', 1, 0, NULL, '2026-09-15 12:32:31.727', '2026-09-08 12:32:31.728', '2026-09-08 13:02:41.715'),
(838, 4, '66955407-ba57-496b-8abb-8b19f7cc5fbf', '8fd15d23795eef2ff8012da7f9fa30dff5ff0ff0a390ac851677b8e3f40d9440', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 12:32:58.987', '2026-09-08 12:32:58.988', '2026-09-08 12:34:52.228'),
(839, 4, '66955407-ba57-496b-8abb-8b19f7cc5fbf', 'b1d086da350b39e1ba7df30be7e12b4b952069a6756e78460269239b66e9bf1c', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 12:33:14.367', '2026-09-08 12:33:14.368', '2026-09-08 12:34:52.228'),
(840, 4, '66955407-ba57-496b-8abb-8b19f7cc5fbf', '913976d023fef4c64c0ff235b3ac7d42af1f8fbe577c915e93caeb0bc58367c2', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 12:33:24.926', '2026-09-08 12:33:24.927', '2026-09-08 12:34:52.228'),
(841, 4, '66955407-ba57-496b-8abb-8b19f7cc5fbf', '42b235965c246dbe577d44690875472cffacefdf6ebf83ef436ebf4113b6e073', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 12:33:32.470', '2026-09-08 12:33:32.471', '2026-09-08 12:34:52.228'),
(842, 4, '66955407-ba57-496b-8abb-8b19f7cc5fbf', 'e5ce647a71256a2df3fadcfd7e2241ba9ef6579dabd7edefde3ce337ffef0956', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 12:33:40.209', '2026-09-08 12:33:40.209', '2026-09-08 12:34:52.228'),
(843, 4, '66955407-ba57-496b-8abb-8b19f7cc5fbf', '94d9810ddcdcab3e8fa7973d5efc3e785230b22dfe34fb366497bafdb6062944', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 12:33:50.299', '2026-09-08 12:33:50.300', '2026-09-08 12:34:52.228'),
(844, 4, '66955407-ba57-496b-8abb-8b19f7cc5fbf', '56e8c56b5351489853ba600369892c8e98fc85b0ce4c787f89c6c71dc4dcfdea', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 12:34:02.236', '2026-09-08 12:34:02.237', '2026-09-08 12:34:52.228'),
(845, 4, '66955407-ba57-496b-8abb-8b19f7cc5fbf', 'ebc53cb2e98b909bce794007255eb742a552efc20fd8093bbb5a510239122b7b', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 12:34:12.771', '2026-09-08 12:34:12.772', '2026-09-08 12:34:52.228'),
(846, 4, '66955407-ba57-496b-8abb-8b19f7cc5fbf', 'a93350c4a6708c339c777cc1488e2ffe2fcf70bc1e32352f9fca8c9fb6b28baa', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 12:34:22.157', '2026-09-08 12:34:22.158', '2026-09-08 12:34:52.228'),
(847, 4, '66955407-ba57-496b-8abb-8b19f7cc5fbf', '84169c1f02284b8ac83a8e2585edfca8c82b16ba0fd1a43858feaae2bf1f7c12', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 12:34:32.329', '2026-09-08 12:34:32.330', '2026-09-08 12:34:52.228'),
(848, 4, '66955407-ba57-496b-8abb-8b19f7cc5fbf', '1152617db1f0d182fa8dc0804760bb5396d2f83ef91b40007679c8f041609e9b', 1, 1, 'LOGGED_OUT', '2026-09-15 12:34:45.050', '2026-09-08 12:34:45.051', '2026-09-08 12:34:54.519'),
(849, 4, '66955407-ba57-496b-8abb-8b19f7cc5fbf', '805b9c3cebfa2c07a390a758dde32834a1e020cb52c4926ea761ab88d3a9654e', 0, 1, 'AUTHORIZATION_CHANGED', '2026-09-15 12:34:52.775', '2026-09-08 12:34:52.776', '2026-09-11 13:04:32.537'),
(850, 4, 'a7b591c7-d7fc-4cfb-b845-eb692c754a7c', 'fedf8a1b14167f8b00aa1c67ba11edd0585d98ebbb87ab8904e78c99741eae2b', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 12:35:24.911', '2026-09-08 12:35:24.912', '2026-09-10 04:25:21.489'),
(851, 3, 'dfcb9a4e-a7fc-4cf9-b861-f3d0b709a7e5', '5aa1cba92dfdafa86c21f9c8009eeacb9f4d9bfdfa5e82bb2465715f95ef1252', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-15 12:35:39.195', '2026-09-08 12:35:39.196', '2026-09-10 05:00:46.887'),
(852, 1, '024d15b8-6572-4d68-b9db-5d49bddef88e', 'c6907a7ffc06674715950321ba44fb6e9557d16d6151c5f820c4373ca4d36858', 1, 0, NULL, '2026-09-15 12:56:03.084', '2026-09-08 12:56:03.085', '2026-09-08 13:03:03.346'),
(853, 1, '0b3eaabf-e1be-4a33-94df-1dc71368880d', '59823701fe5ceaadd1b6f971a6904c6eb4a705bc0f1cba96f86a36a581c06d9f', 0, 1, 'LOGGED_OUT', '2026-09-15 13:02:45.580', '2026-09-08 13:02:45.581', '2026-09-08 13:33:42.856'),
(854, 1, '024d15b8-6572-4d68-b9db-5d49bddef88e', 'dfc5a2def3be262a5c147d9efce0f7f773f991a380621269dd5274989f307cae', 1, 0, NULL, '2026-09-15 13:03:07.460', '2026-09-08 13:03:07.461', '2026-09-09 03:50:52.471'),
(855, 7, 'e4d9d432-1441-4ad4-84de-8b3bd0f74980', '92d068030ae299168a8d29aa040b5aa728bb9652c8a019872e05a9d4a44b8265', 1, 0, NULL, '2026-09-15 16:41:48.772', '2026-09-08 16:41:48.773', '2026-09-08 16:42:07.786'),
(856, 7, 'e4d9d432-1441-4ad4-84de-8b3bd0f74980', '9991acc72ed9582471ac97bf0f7d4cc544e537075a7fbec5f47ee8216d1a6932', 1, 0, NULL, '2026-09-15 16:42:11.749', '2026-09-08 16:42:11.749', '2026-09-08 16:42:22.937'),
(857, 7, 'e4d9d432-1441-4ad4-84de-8b3bd0f74980', '385d0bbe5582a026065cc8ae20c8f060904a49dc9a3b5a1e4c48bc893cb9a386', 1, 0, NULL, '2026-09-15 16:42:25.932', '2026-09-08 16:42:25.933', '2026-09-08 18:13:53.590'),
(858, 7, 'e4d9d432-1441-4ad4-84de-8b3bd0f74980', 'defce88c96f8631ed0a735efeaa7ed14255d39b239aa1a5ec26481e80a498794', 0, 0, NULL, '2026-09-15 18:13:56.644', '2026-09-08 18:13:56.645', '2026-09-08 18:13:56.645'),
(859, 1, '024d15b8-6572-4d68-b9db-5d49bddef88e', 'c740bed9c7db238e1c322b8a41d7fe20d4c95a2e0afb8c9e1e6453b45dbf7732', 0, 1, 'LOGGED_OUT', '2026-09-16 03:50:56.171', '2026-09-09 03:50:56.172', '2026-09-09 05:45:11.830'),
(860, 1, '427a0ae1-233b-46a5-b60c-996c23dc61ee', '7529ee05d75c2daae32201a4b8a64f99ec1fbf5d713f7b00047854bba59a3c27', 0, 0, NULL, '2026-09-16 03:54:54.328', '2026-09-09 03:54:54.329', '2026-09-09 03:54:54.329'),
(861, 2, '9443ce99-dbbd-4614-97d0-278adab3580f', '1fc88a98d1710cfaedc169a5b4fd85cb848b439649cd3d7cfc8bc63672f6bf94', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-16 04:09:31.323', '2026-09-09 04:09:31.324', '2026-09-09 12:26:50.425'),
(862, 2, '9443ce99-dbbd-4614-97d0-278adab3580f', '4c7624b93f1013fda2e4154b39bd3265790cf9f23d3112bbfbbba9ff8ea6736d', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-16 04:09:45.232', '2026-09-09 04:09:45.233', '2026-09-09 12:26:50.425'),
(863, 2, '9443ce99-dbbd-4614-97d0-278adab3580f', 'd36ba8add55fdde7c95fbc4b1427571c0d56813271b6fef72d347daf6f29fbd2', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-16 04:09:54.400', '2026-09-09 04:09:54.402', '2026-09-09 12:26:50.425'),
(864, 2, '9443ce99-dbbd-4614-97d0-278adab3580f', 'd5158ceb3ab3b343f112f73fae131ea61059f8a5f3b7025e250784a36483d49c', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-16 04:10:06.503', '2026-09-09 04:10:06.504', '2026-09-09 12:26:50.425'),
(865, 2, '9443ce99-dbbd-4614-97d0-278adab3580f', '48a35eae7e9a309a61fdd7d8e9e464e4633bfe3c8cf38aa60fcad9c15c50ffed', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-16 04:10:17.990', '2026-09-09 04:10:17.991', '2026-09-09 12:26:50.425'),
(866, 2, '9443ce99-dbbd-4614-97d0-278adab3580f', '85000f31cb440392fb04a3e5c7353e4d25468db9491798ffdbe9c902c82431bb', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-16 04:10:30.516', '2026-09-09 04:10:30.517', '2026-09-09 12:26:50.425'),
(867, 2, '9443ce99-dbbd-4614-97d0-278adab3580f', '583e32fd238457e0ba86da4891b250e27d583cf8dd678af368e7b3a53eaba0f6', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-16 04:10:42.421', '2026-09-09 04:10:42.422', '2026-09-09 12:26:50.425'),
(868, 2, '9443ce99-dbbd-4614-97d0-278adab3580f', '68885c3577e6896812daf6e2a0857a9bb5ebaadce025e27699761bf414867a12', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-16 04:10:54.608', '2026-09-09 04:10:54.609', '2026-09-09 12:26:50.425'),
(869, 2, '9443ce99-dbbd-4614-97d0-278adab3580f', '70bdb88bf6d1ea01ddbd82901e141fd7c00adc99c1ba140fadff13f925900f37', 1, 1, 'LOGGED_OUT', '2026-09-16 04:11:29.699', '2026-09-09 04:11:29.700', '2026-09-09 12:26:52.813'),
(870, 2, '9443ce99-dbbd-4614-97d0-278adab3580f', '997498705baf1b9f46e95a13cb86b602d7ca4b94ba1833b77418ea263883de91', 0, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-16 04:12:14.731', '2026-09-09 04:12:14.732', '2026-09-09 12:26:50.425'),
(871, 1, 'a7b03571-b35b-4b41-9b3f-636183da1df1', 'c75388a90923904c22dd3ea8c015f56a57cd3d1b9892ae67ae8763648150a7da', 0, 0, NULL, '2026-09-16 04:25:52.527', '2026-09-09 04:25:52.528', '2026-09-09 04:25:52.528'),
(872, 4, 'a7b591c7-d7fc-4cfb-b845-eb692c754a7c', '33cf207ff4267e3cf4de646a42427d2d8bfbad212a6bf94a1d6dae17670062b2', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-16 04:42:07.621', '2026-09-09 04:42:07.622', '2026-09-10 04:25:21.489'),
(873, 4, 'a7b591c7-d7fc-4cfb-b845-eb692c754a7c', '4eab5413abbe9ddcbe4f3ba4892a2d1dcf440fb3263b48acf2e441d6a688a355', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-16 04:42:23.411', '2026-09-09 04:42:23.412', '2026-09-10 04:25:21.489'),
(874, 3, 'dfcb9a4e-a7fc-4cf9-b861-f3d0b709a7e5', '99cf3547e3c092d999428afb426c04539c5ac3f5117b412c5fcd88fd9e5c658f', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-16 04:50:26.829', '2026-09-09 04:50:26.830', '2026-09-10 05:00:46.887'),
(875, 1, 'c3e98b6d-4115-4911-81c4-cf7ed0358659', '182bb9a5af7db6a49e2b382cf1eb8b58458ba79d8769e5b62cfae52aa5b74458', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-16 05:45:17.403', '2026-09-09 05:45:17.404', '2026-09-09 18:47:25.350'),
(876, 1, '4b791265-33a8-4047-8df1-05bec716f2e8', '2aa1b8e3186b5dc3de89a18eeef1a230124ce974d6035194d49dc1415c76dfc6', 1, 0, NULL, '2026-09-16 07:02:41.804', '2026-09-09 07:02:41.805', '2026-09-09 07:10:08.242'),
(877, 1, 'c3e98b6d-4115-4911-81c4-cf7ed0358659', 'a5404513912997d58240fa54d06e4e25e19955cf9ae6fbeab8f6b26fcf5652e4', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-16 07:03:48.986', '2026-09-09 07:03:48.987', '2026-09-09 18:47:25.350'),
(878, 1, 'c3e98b6d-4115-4911-81c4-cf7ed0358659', '08e2b41accecab3698e29428922067ffd46d8316ec4a3e01803a4ba025c0bfa8', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-16 07:07:06.168', '2026-09-09 07:07:06.169', '2026-09-09 18:47:25.350'),
(879, 1, '4b791265-33a8-4047-8df1-05bec716f2e8', '86a8558b82199e275485b1c36975beaf7ada1b8c559fd955685d7f9527064c82', 1, 0, NULL, '2026-09-16 07:10:12.026', '2026-09-09 07:10:12.027', '2026-09-09 07:11:23.079'),
(880, 1, '4b791265-33a8-4047-8df1-05bec716f2e8', 'bd93ce6e54332d9a62a918010502460ca91570043dd3bb78c9d8ea035d8eeab1', 0, 1, 'LOGGED_OUT', '2026-09-16 07:11:26.807', '2026-09-09 07:11:26.808', '2026-09-09 07:50:37.714'),
(881, 1, 'c3e98b6d-4115-4911-81c4-cf7ed0358659', '7f4de95a12951c01b33b72f34ed3c82a003d474204f8c814d726a514fa1e5625', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-16 08:40:25.813', '2026-09-09 08:40:25.814', '2026-09-09 18:47:25.350'),
(882, 3, 'dfcb9a4e-a7fc-4cf9-b861-f3d0b709a7e5', 'eb5c3ee55511e5ce63d9ad92f3368ad2fe4d58368aee6b6b8a83356f8365739d', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-16 10:00:46.244', '2026-09-09 10:00:46.245', '2026-09-10 05:00:46.887'),
(883, 1, '1fa4a481-f40c-403f-b9a6-2afd9a3fccc9', 'e50cac70aa1662b2d3a5bf05e19cf58f03104c5652df5e9ccc4bb618f0641835', 0, 1, 'LOGGED_OUT', '2026-09-16 10:22:26.451', '2026-09-09 10:22:26.452', '2026-09-09 11:15:58.317'),
(884, 7, '1a8f36be-d2e9-4f8e-8b3a-4c68219d43dc', 'af0443b64b62c4b528c66c2d0cd82125b46fd1b1ebb35e445fd8f435b457ab9d', 1, 0, NULL, '2026-09-16 10:26:57.520', '2026-09-09 10:26:57.521', '2026-09-09 12:21:11.458'),
(885, 1, 'c3e98b6d-4115-4911-81c4-cf7ed0358659', 'f13e6df161e942bab9ea4e1b2aedabf416ae64f09221916504a1f08a77cf627d', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-16 10:50:45.000', '2026-09-09 10:50:45.001', '2026-09-09 18:47:25.350'),
(886, 6, 'a690b88f-129b-4248-b3a7-1a7ee6847052', '3a3b3f3a3fc9ccfb6ec161b8c037c6c3cec8b236897416c7904d5a4efeb7e3d5', 1, 0, NULL, '2026-09-16 12:05:57.694', '2026-09-09 12:05:57.695', '2026-09-10 05:47:30.913'),
(887, 7, '1a8f36be-d2e9-4f8e-8b3a-4c68219d43dc', 'c6c5b6b723912f6332e270349a242c886765fc232a814f320f683291075cade5', 0, 0, NULL, '2026-09-16 12:21:15.275', '2026-09-09 12:21:15.276', '2026-09-09 12:21:15.276'),
(888, 1, 'c3e98b6d-4115-4911-81c4-cf7ed0358659', '4f7cc80d873848f35580c613b8466469450e2ac996e1369c8bcf81dcdc2b2c1e', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-16 12:21:31.686', '2026-09-09 12:21:31.687', '2026-09-09 18:47:25.350'),
(889, 3, 'dfcb9a4e-a7fc-4cf9-b861-f3d0b709a7e5', 'd5d46754c162568653a666cb37b4269c6a8bc666bc775c5e155a4ab375e717f4', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-16 12:25:16.146', '2026-09-09 12:25:16.147', '2026-09-10 05:00:46.887'),
(890, 2, '68c71dff-a232-4a59-a676-f3e9c5ca7aa4', 'd73f287210a9a3b369f07157571ae7052be1f7b62c18701044932f01bc95b71f', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-16 12:27:03.704', '2026-09-09 12:27:03.705', '2026-09-09 12:31:01.449'),
(891, 4, 'a7b591c7-d7fc-4cfb-b845-eb692c754a7c', '2070448ef50129efe15e9e1e51ecd87fa137c9d0931f535ab4b1711dd48a7cd4', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-16 12:28:30.856', '2026-09-09 12:28:30.857', '2026-09-10 04:25:21.489'),
(892, 1, '52d7992e-fc41-48c4-bc3d-7403f8701359', '6e51eda8d6aed0c5f1fb5eb4dffa2943e25d62d5a7cf1d5b00d218b33089897f', 1, 0, NULL, '2026-09-16 12:29:59.155', '2026-09-09 12:29:59.156', '2026-09-09 12:30:30.798'),
(893, 2, '68c71dff-a232-4a59-a676-f3e9c5ca7aa4', 'c7fa04fbc17cca9e5ce7edc7d1366363a962655ee4eab985b75992f08915dc51', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-16 12:30:11.846', '2026-09-09 12:30:11.846', '2026-09-09 12:31:01.449'),
(894, 2, '68c71dff-a232-4a59-a676-f3e9c5ca7aa4', '3815ff6fa705384634f4c4ca5d4841fb2c346738492937d329de82045ad91c0e', 1, 1, 'LOGGED_OUT', '2026-09-16 12:30:23.152', '2026-09-09 12:30:23.153', '2026-09-09 12:31:03.902'),
(895, 1, '52d7992e-fc41-48c4-bc3d-7403f8701359', '723e2cf5242263fe213328b67b39134c5ac71056892410e828c684c8c96ac6f8', 1, 0, NULL, '2026-09-16 12:30:34.308', '2026-09-09 12:30:34.309', '2026-09-09 12:31:54.381'),
(896, 2, '68c71dff-a232-4a59-a676-f3e9c5ca7aa4', 'f1e38d71d05058f0c4cbea5e9d596a2eb5285db4aa9fff12bf1facb2a4e407eb', 0, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-16 12:30:34.901', '2026-09-09 12:30:34.902', '2026-09-09 12:31:01.449'),
(897, 1, 'c3e98b6d-4115-4911-81c4-cf7ed0358659', '11a17214f0596c938e560717e8db458bc347385e27f8efbb72b050152416a2d1', 1, 1, 'LOGGED_OUT', '2026-09-16 12:31:06.961', '2026-09-09 12:31:06.962', '2026-09-09 18:47:28.802'),
(898, 2, '9f4471f0-a140-49b3-8a3e-86ed709b4965', 'c5b54614330af1ba3a5ff50e0031f49b31e8a0c31683924bc21cb8ef391a40b3', 0, 0, NULL, '2026-09-16 12:31:16.575', '2026-09-09 12:31:16.576', '2026-09-09 12:31:16.576'),
(899, 1, '52d7992e-fc41-48c4-bc3d-7403f8701359', '90f4130a99d0bdb1413c401fe32b40b06ee809a8d6efd669553c6df46c5b720f', 0, 1, 'LOGGED_OUT', '2026-09-16 12:31:57.972', '2026-09-09 12:31:57.973', '2026-09-09 13:02:13.813'),
(900, 3, 'dfcb9a4e-a7fc-4cf9-b861-f3d0b709a7e5', '529cb75dc6cd4c93e7d7134af3939c005330ef71806ecd130c6e51706e1c3a91', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-16 15:08:21.415', '2026-09-09 15:08:21.416', '2026-09-10 05:00:46.887'),
(901, 1, 'c3e98b6d-4115-4911-81c4-cf7ed0358659', 'dce644a2e79f1ec00c23215fb9a14ef336b7cb50b52f2b0e9e2f9db66e9e23f7', 0, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-16 18:47:24.511', '2026-09-09 18:47:24.512', '2026-09-09 18:47:25.350'),
(902, 2, '92a099ff-78cb-4e82-b4e6-bea600b1471e', '3a411842a1af5f71bde339248db10034e0f34a7e6a0282c5cf77acbf86a1ab4c', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 04:21:54.292', '2026-09-10 04:21:54.293', '2026-09-10 12:05:36.393'),
(903, 4, 'a7b591c7-d7fc-4cfb-b845-eb692c754a7c', '5bb729cb785f3e706b26f9544bd5473ec394c0e06d38b6d8b82cf58bed6827d5', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 04:22:40.329', '2026-09-10 04:22:40.329', '2026-09-10 04:25:21.489'),
(904, 4, 'a7b591c7-d7fc-4cfb-b845-eb692c754a7c', 'cbc73f25f49175325f42289bbdce458dac813d2fd05fd1a342a1d4a467a1906d', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 04:22:57.554', '2026-09-10 04:22:57.554', '2026-09-10 04:25:21.489'),
(905, 4, 'a7b591c7-d7fc-4cfb-b845-eb692c754a7c', 'da000a1e3090f4a451be0e8c4dddd27fbdecf06f6e28a25cf9b002f6d4fedee2', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 04:23:12.350', '2026-09-10 04:23:12.351', '2026-09-10 04:25:21.489'),
(906, 4, 'a7b591c7-d7fc-4cfb-b845-eb692c754a7c', '0de8ebff8adf17d88348dc4bb52d4eba9c601370edb534df07115ff6711fe4a2', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 04:23:24.055', '2026-09-10 04:23:24.056', '2026-09-10 04:25:21.489'),
(907, 4, 'a7b591c7-d7fc-4cfb-b845-eb692c754a7c', '27ff2f244ff646e8cbe80a9dc810a5929feaf2c87489cc7eabaec8037984074b', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 04:23:35.068', '2026-09-10 04:23:35.069', '2026-09-10 04:25:21.489'),
(908, 4, 'a7b591c7-d7fc-4cfb-b845-eb692c754a7c', '5859748fde8355ba61523c973a65bccde84adb44d524f8ccd32f680a3d3f4792', 1, 1, 'LOGGED_OUT', '2026-09-17 04:23:47.174', '2026-09-10 04:23:47.175', '2026-09-10 04:25:23.824'),
(909, 4, 'a7b591c7-d7fc-4cfb-b845-eb692c754a7c', '2115ee33aa557ba3b87ab0a14b31484cc424710393d2e02ae883e1a4aa030b7b', 0, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 04:24:03.707', '2026-09-10 04:24:03.708', '2026-09-10 04:25:21.489'),
(910, 4, 'c9145892-915b-423f-84a3-c69480809607', 'ab279a3c7e1099f6848d69e26f9b1aff0870dc3b3713ff5593fe438ed5d4a794', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 04:25:50.893', '2026-09-10 04:25:50.894', '2026-09-10 12:30:33.784'),
(911, 4, 'c9145892-915b-423f-84a3-c69480809607', '718f2cba187a95039a3e8845b987d8ce57fbc1833b9e50c83ceb0e444135f1e7', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 04:30:54.787', '2026-09-10 04:30:54.788', '2026-09-10 12:30:33.784'),
(912, 4, 'c9145892-915b-423f-84a3-c69480809607', '06fb41f2c9632728febcd3c8c0c9862e86f130af163c3078ef628b992320e797', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 04:31:58.980', '2026-09-10 04:31:58.981', '2026-09-10 12:30:33.784'),
(913, 4, 'c9145892-915b-423f-84a3-c69480809607', 'e388a231c9a2cf673356ab104f42cacbe3eb581f15d14272c2afae70862acae3', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 04:32:10.478', '2026-09-10 04:32:10.479', '2026-09-10 12:30:33.784'),
(914, 4, 'c9145892-915b-423f-84a3-c69480809607', 'f83b7c105fd5401549f57d486c60f5b7debfb77db58ffdc9290eaf826e80390f', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 04:32:20.293', '2026-09-10 04:32:20.294', '2026-09-10 12:30:33.784'),
(915, 1, '065656ea-1868-435f-9d0a-2ff82c17b645', '3aa0bfe634e57db4580e0da192f7cdae16ae9fbfba82e08515a510418cd411e9', 0, 1, 'LOGGED_OUT', '2026-09-17 04:39:12.343', '2026-09-10 04:39:12.344', '2026-09-10 05:27:54.269'),
(916, 3, 'dfcb9a4e-a7fc-4cf9-b861-f3d0b709a7e5', 'fee0257f29ecce51085077e8c643c88e4e267538aba38f282036321080d59a30', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 04:53:31.532', '2026-09-10 04:53:31.533', '2026-09-10 05:00:46.887'),
(917, 3, 'dfcb9a4e-a7fc-4cf9-b861-f3d0b709a7e5', 'dec55be4db38651c75c6412c450149030c2157ba7f1043153ccdddf26166f59f', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 04:53:45.629', '2026-09-10 04:53:45.630', '2026-09-10 05:00:46.887'),
(918, 3, 'dfcb9a4e-a7fc-4cf9-b861-f3d0b709a7e5', '29d6a5c0207caafa99e94c748299972d7c2429766e30f825a93f128a649353fb', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 04:53:57.437', '2026-09-10 04:53:57.438', '2026-09-10 05:00:46.887'),
(919, 3, 'dfcb9a4e-a7fc-4cf9-b861-f3d0b709a7e5', '761d27243e1b0fd368e8a1e936250427ac498dd3efa57a8b1dc736b558b84132', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 04:54:08.738', '2026-09-10 04:54:08.738', '2026-09-10 05:00:46.887'),
(920, 3, 'dfcb9a4e-a7fc-4cf9-b861-f3d0b709a7e5', '679487d404661df34649c80d273715e9bf1dcc670b6fd3d715ad169d649e28c6', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 04:54:17.722', '2026-09-10 04:54:17.723', '2026-09-10 05:00:46.887'),
(921, 3, 'dfcb9a4e-a7fc-4cf9-b861-f3d0b709a7e5', '93b963c19ea3a486c963371d1a264e2135f8795beb13ebd5f21dac065d477d92', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 04:54:29.347', '2026-09-10 04:54:29.347', '2026-09-10 05:00:46.887'),
(922, 3, 'dfcb9a4e-a7fc-4cf9-b861-f3d0b709a7e5', '3fc3688eef5fc8be13c19e3d3eecfce359974cd0916a93ac0ecb8baa372fd93d', 1, 1, 'LOGGED_OUT', '2026-09-17 04:54:48.454', '2026-09-10 04:54:48.454', '2026-09-10 10:28:58.235'),
(923, 3, 'dfcb9a4e-a7fc-4cf9-b861-f3d0b709a7e5', '6e2dfcb1b9fa7e4a867c816c730601083e2cd1d7e68c2736cd9222b67720606d', 0, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 04:56:03.525', '2026-09-10 04:56:03.526', '2026-09-10 05:00:46.887'),
(924, 1, '2be20702-dace-4e7b-8e2e-835324cd654e', 'c0c6948a76a6f69fc2ebee7e383e36dffb9f93c891703ef7c86f95b601101f6e', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 05:30:51.035', '2026-09-10 05:30:51.036', '2026-09-10 09:58:30.906'),
(925, 6, 'a690b88f-129b-4248-b3a7-1a7ee6847052', '5096d636712feeefc4aea55f0a96e5d502f71927aacc1499733569a603aa877b', 1, 0, NULL, '2026-09-17 05:47:34.651', '2026-09-10 05:47:34.652', '2026-09-10 12:24:16.798'),
(926, 1, 'fd7fcd2d-a6a2-4ba7-82e3-4eb124b6e832', '03b855bffad183e7a61976ec2f36c0478e2176880f387662d09068994edbca98', 1, 0, NULL, '2026-09-17 05:49:20.137', '2026-09-10 05:49:20.138', '2026-09-10 06:14:00.886'),
(927, 1, '2be20702-dace-4e7b-8e2e-835324cd654e', '88b9db998e6a8f55bf155da9ed6fdea2193495f2e175ac38889bdbf884484dcf', 1, 1, 'LOGGED_OUT', '2026-09-17 05:50:33.810', '2026-09-10 05:50:33.811', '2026-09-10 09:58:33.812'),
(928, 1, 'fd7fcd2d-a6a2-4ba7-82e3-4eb124b6e832', '26814349285b9743585df604d8fcdc172df4d946b922679d97712548612b0890', 0, 0, NULL, '2026-09-17 06:14:04.695', '2026-09-10 06:14:04.696', '2026-09-10 06:14:04.696'),
(929, 1, 'faa88669-b9fe-43cd-9e75-a60393a1dd14', 'b855aeb7bf7834a4f2d42923d5c1e82539e624d5fed3d966ee9da899c6348af1', 0, 1, 'LOGGED_OUT', '2026-09-17 06:19:14.814', '2026-09-10 06:19:14.815', '2026-09-10 06:24:20.244'),
(930, 4, 'c9145892-915b-423f-84a3-c69480809607', '2e2c9f9d012db4659439695175efd186766cdc7b3c7d997fae27ccfd006e8aab', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 06:59:39.958', '2026-09-10 06:59:39.959', '2026-09-10 12:30:33.784'),
(931, 4, 'c9145892-915b-423f-84a3-c69480809607', '8e80c07a7bce6be9194977c84fadcfa8a202128d379fbe5cf076b9a332a0bb3f', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 06:59:51.139', '2026-09-10 06:59:51.139', '2026-09-10 12:30:33.784'),
(932, 4, 'c9145892-915b-423f-84a3-c69480809607', '82f596f526a5a9e1f6535fc7f35415c89f43e3e1f288d882458576cc75b1d073', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 06:59:58.556', '2026-09-10 06:59:58.556', '2026-09-10 12:30:33.784'),
(933, 4, 'c9145892-915b-423f-84a3-c69480809607', '23801b95d2b7a6739b1bd7179b51e0994251f70e02ceff3226bc38df4850fa6b', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 07:00:06.908', '2026-09-10 07:00:06.909', '2026-09-10 12:30:33.784'),
(934, 4, 'c9145892-915b-423f-84a3-c69480809607', '2a448056e6948e241b10b5c0b5d1fc69a7f33bed766d785198f76360f945500c', 1, 1, 'LOGGED_OUT', '2026-09-17 07:00:18.684', '2026-09-10 07:00:18.685', '2026-09-10 12:30:36.055'),
(935, 4, 'c9145892-915b-423f-84a3-c69480809607', 'd9dbe166186ffa44450bd94f12e40f41ea5e06f9b008b5ad5fe1afec8c3cdfb4', 0, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 07:00:29.873', '2026-09-10 07:00:29.874', '2026-09-10 12:30:33.784'),
(936, 17, '70e620da-34b6-4922-99e0-598c6f81def4', 'a3fbfbb2eb9da5b8b98f8a18c0e4eb49e848ddcd2047eb67b9d466897236cf5a', 0, 1, 'LOGGED_OUT', '2026-09-17 07:22:44.256', '2026-09-10 07:22:44.257', '2026-09-10 07:22:46.400'),
(937, 17, 'd8b97a79-67bb-4d1f-b180-d6bf9b14cdb6', '84a946a5ac591ad9761a092dc72fae7122ef0ce2e436ce5bcdc2f78c819b8f23', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 07:23:01.439', '2026-09-10 07:23:01.441', '2026-09-10 07:25:54.739'),
(938, 17, 'd8b97a79-67bb-4d1f-b180-d6bf9b14cdb6', '457634f4520e9225ad7803ec41e38fd4b23da1e0eb2daf0eaf6ef7332db9d427', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 07:23:38.337', '2026-09-10 07:23:38.338', '2026-09-10 07:25:54.739'),
(939, 17, 'd8b97a79-67bb-4d1f-b180-d6bf9b14cdb6', '62531d4ad179cbcaef6e74cf1c9ab0b3587b30285909b3e462dd1350757644c3', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 07:23:47.461', '2026-09-10 07:23:47.461', '2026-09-10 07:25:54.739'),
(940, 17, 'd8b97a79-67bb-4d1f-b180-d6bf9b14cdb6', '6fc8a84945e19fd84e5d87619618f985e11a1668453be7010e5138d84d93181e', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 07:23:55.962', '2026-09-10 07:23:55.963', '2026-09-10 07:25:54.739'),
(941, 17, 'd8b97a79-67bb-4d1f-b180-d6bf9b14cdb6', 'e70bb0c96d7824c8bf17bdee706c412de5d78b9f958447e768b358762524c50c', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 07:24:05.545', '2026-09-10 07:24:05.545', '2026-09-10 07:25:54.739'),
(942, 17, 'd8b97a79-67bb-4d1f-b180-d6bf9b14cdb6', 'afbee4d7fa99b668bbff84bab2db4dabdd00ae7e4f182bf4a07f318c60e2bb84', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 07:24:17.503', '2026-09-10 07:24:17.504', '2026-09-10 07:25:54.739'),
(943, 17, 'd8b97a79-67bb-4d1f-b180-d6bf9b14cdb6', '87d4f886fa29019e83cbd56aa5c90d48371d1215c220e52ce9cbeb177e77d013', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 07:24:26.726', '2026-09-10 07:24:26.727', '2026-09-10 07:25:54.739'),
(944, 17, 'd8b97a79-67bb-4d1f-b180-d6bf9b14cdb6', 'd2976c1a3a1f4145b98d137023078e65603885b9e47caba640e84962edee343e', 1, 1, 'LOGGED_OUT', '2026-09-17 07:25:42.739', '2026-09-10 07:25:42.740', '2026-09-10 07:25:56.879'),
(945, 17, 'd8b97a79-67bb-4d1f-b180-d6bf9b14cdb6', '5e43f0231b6076fdd070aed9075c8051ed1a5876a2ebec489d9333c9f476031a', 0, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 07:25:51.968', '2026-09-10 07:25:51.969', '2026-09-10 07:25:54.739'),
(946, 1, '2be20702-dace-4e7b-8e2e-835324cd654e', '7b6446d472b7b8c01583d81bd7e75a5cac2e50e63081904b120706522f358837', 0, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 09:57:33.043', '2026-09-10 09:57:33.044', '2026-09-10 09:58:30.906'),
(947, 1, 'cabc3e43-fa5a-450f-a24f-53a17834fb42', '05036559f681db03897e6d1471730b7e9ccf2592fdffba169e641e9308bbaff2', 0, 0, NULL, '2026-09-17 10:02:05.003', '2026-09-10 10:02:05.004', '2026-09-10 10:02:05.004'),
(948, 3, '057d68dc-4bcc-4ea8-896c-edd40df52113', 'ed87fd4ad8e4e65505fedc0c9f2e749d5cfd585e21bf98c46b5657acbe723119', 1, 0, NULL, '2026-09-17 10:29:19.137', '2026-09-10 10:29:19.138', '2026-09-10 12:01:14.773'),
(949, 2, '92a099ff-78cb-4e82-b4e6-bea600b1471e', '3e6cee1bffd5a2d2490785972414e1551e08cd8cf6d6221517e638c27ce76dcf', 1, 1, 'LOGGED_OUT', '2026-09-17 11:17:46.595', '2026-09-10 11:17:46.596', '2026-09-10 12:05:38.852'),
(950, 2, '92a099ff-78cb-4e82-b4e6-bea600b1471e', '9eeffaa2f03ae28b1f0c7ae9a1610243bb6ac12c2ddfcb530292ec32b5bec328', 0, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 11:30:07.807', '2026-09-10 11:30:07.808', '2026-09-10 12:05:36.393'),
(951, 1, '580111a2-addc-45a9-88f5-04d70e7f7b70', '06763856c2bdf1faf3e8d668aa6a6cfcdb99a7beab1d85685914339cedfb62bf', 1, 0, NULL, '2026-09-17 11:57:42.964', '2026-09-10 11:57:42.965', '2026-09-10 12:37:07.282'),
(952, 3, '057d68dc-4bcc-4ea8-896c-edd40df52113', '65ea1bf6dfd19191214a0a9bce0d49623c457034b951858ec8f72f2573a060f7', 1, 0, NULL, '2026-09-17 12:01:18.523', '2026-09-10 12:01:18.524', '2026-09-10 12:06:18.198'),
(953, 2, 'a7d84385-d4a4-4da8-aa24-26f9e4035e90', '7d11f89504e8397542e0f7caa5d538fdb59a57df00425c676e2b85497847cc0f', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 12:05:50.750', '2026-09-10 12:05:50.751', '2026-09-10 12:31:27.360'),
(954, 3, '057d68dc-4bcc-4ea8-896c-edd40df52113', '24fb2611d169d751921edf7419a8e391ac9a400598408d8da93037b1615ab461', 1, 0, NULL, '2026-09-17 12:06:21.885', '2026-09-10 12:06:21.885', '2026-09-10 12:30:19.256'),
(955, 2, 'a7d84385-d4a4-4da8-aa24-26f9e4035e90', '800ca5d44652922766ef48926ef829d3722f5eb9e9c54f1b5a80d0daaebdf9b9', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 12:12:40.273', '2026-09-10 12:12:40.274', '2026-09-10 12:31:27.360'),
(956, 6, 'a7b73789-9196-465a-b2f2-ea4692f1003f', '9f3eb2ae35b93b6ed1ee1800fec9fc402a049b6d6168598931396ab36e75abb9', 0, 0, NULL, '2026-09-17 12:13:44.880', '2026-09-10 12:13:44.880', '2026-09-10 12:13:44.880'),
(957, 2, 'a7d84385-d4a4-4da8-aa24-26f9e4035e90', 'ee539baa3fe83ae9f6cc9e9550fcf21c72138cceaf2f6ae0b0df419f5f942094', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 12:14:09.454', '2026-09-10 12:14:09.455', '2026-09-10 12:31:27.360'),
(958, 6, 'a690b88f-129b-4248-b3a7-1a7ee6847052', '29a73bda9a1d71c03dba940311ab70cb6d957679a8f2eceb1a02ab2f328eb8d1', 1, 0, NULL, '2026-09-17 12:24:20.612', '2026-09-10 12:24:20.613', '2026-09-10 13:09:22.024'),
(959, 2, 'a7d84385-d4a4-4da8-aa24-26f9e4035e90', 'a2ffedb23eff80f1108e67eb7ed60ac72edc473c1d85435697cbb49d6907dd5a', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 12:28:23.263', '2026-09-10 12:28:23.264', '2026-09-10 12:31:27.360'),
(960, 2, 'a7d84385-d4a4-4da8-aa24-26f9e4035e90', 'eb5f091cfe7a377ea9c05db6e8eb4409143eab93ea482eb44e95705cefb4bba1', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 12:28:36.827', '2026-09-10 12:28:36.828', '2026-09-10 12:31:27.360'),
(961, 2, 'a7d84385-d4a4-4da8-aa24-26f9e4035e90', 'faabea10f4cbe340015fc5a86418839fa4d0034e8b1cbe457540e168d0543f43', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 12:28:49.479', '2026-09-10 12:28:49.480', '2026-09-10 12:31:27.360'),
(962, 2, 'a7d84385-d4a4-4da8-aa24-26f9e4035e90', '962951f337786a939ec16f5bc1a57dd7199b7483a61a7aa668def291d89a5461', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 12:29:06.738', '2026-09-10 12:29:06.739', '2026-09-10 12:31:27.360'),
(963, 2, 'a7d84385-d4a4-4da8-aa24-26f9e4035e90', '74ed08b828477693a640ab7cac6df61f372f977bd580b4931ce8b0e7648cc486', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 12:29:18.815', '2026-09-10 12:29:18.816', '2026-09-10 12:31:27.360'),
(964, 2, 'a7d84385-d4a4-4da8-aa24-26f9e4035e90', 'ea40cd97b7ae70c2813de9e14b65f64007ab31101c36773726abd79b59e42275', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 12:29:31.685', '2026-09-10 12:29:31.686', '2026-09-10 12:31:27.360'),
(965, 2, 'a7d84385-d4a4-4da8-aa24-26f9e4035e90', 'e8f2f4cf8c03a5f68eea140170357f3c892515f703dd6d7ee3707b03b06784ac', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 12:30:10.384', '2026-09-10 12:30:10.385', '2026-09-10 12:31:27.360'),
(966, 2, 'a7d84385-d4a4-4da8-aa24-26f9e4035e90', '29c0132fb59d4067d9231d45df6ed209be4f226da1fedb6d7760e27eb38409a7', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 12:30:18.295', '2026-09-10 12:30:18.296', '2026-09-10 12:31:27.360'),
(967, 3, '057d68dc-4bcc-4ea8-896c-edd40df52113', '981048bd146879224efaca6baa326dd9d2b52efcd90083e1837b4d02a561c808', 1, 0, NULL, '2026-09-17 12:30:21.244', '2026-09-10 12:30:21.244', '2026-09-11 04:49:25.462'),
(968, 2, 'a7d84385-d4a4-4da8-aa24-26f9e4035e90', '85e663ee6e8a2bf3d6917103b637c2ebd6e63e043f8a9825633c80bfea9d366e', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 12:30:29.218', '2026-09-10 12:30:29.219', '2026-09-10 12:31:27.360'),
(969, 2, 'a7d84385-d4a4-4da8-aa24-26f9e4035e90', 'b02e178bec8b24c374fb031e262d37f6993814cbc5a4e13649fc624d3dd3b754', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 12:30:39.624', '2026-09-10 12:30:39.625', '2026-09-10 12:31:27.360'),
(970, 2, 'a7d84385-d4a4-4da8-aa24-26f9e4035e90', 'b5dcdaef7ab45adb9c574e5727ab1405debd317272c465e3ed860eff39e0c6cf', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 12:30:47.584', '2026-09-10 12:30:47.585', '2026-09-10 12:31:27.360'),
(971, 2, 'a7d84385-d4a4-4da8-aa24-26f9e4035e90', '8d32240e7d3afc5c840c3a337e8fe1b40ca8ce8ff9c829b7366ec99d55e12792', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 12:30:55.564', '2026-09-10 12:30:55.565', '2026-09-10 12:31:27.360'),
(972, 4, '591c2abe-015e-47c9-ba2b-cf3023e5ecf1', 'b33bd7760c81478e139e92e26b907cff117a147b55c3256bc0eb4b3eef0ff3c7', 1, 1, 'AUTHORIZATION_CHANGED', '2026-09-17 12:31:04.359', '2026-09-10 12:31:04.360', '2026-09-11 13:04:32.537'),
(973, 2, 'a7d84385-d4a4-4da8-aa24-26f9e4035e90', 'ac476c14990ca512684a051c51145e45b5a6d1d802f4da719e5c8c17b2c39676', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-17 12:31:05.515', '2026-09-10 12:31:05.516', '2026-09-10 12:31:27.360'),
(974, 2, 'a7d84385-d4a4-4da8-aa24-26f9e4035e90', '528963de847837b7cb167d33b2257e04fb0f5f23d780d7e05cacf7c0e996d88c', 1, 1, 'LOGGED_OUT', '2026-09-17 12:31:18.322', '2026-09-10 12:31:18.323', '2026-09-11 04:10:20.237'),
(975, 2, 'a7d84385-d4a4-4da8-aa24-26f9e4035e90', 'f3db86427308a65471d59ef9fa8c8bdf064ee340e70937ee83296e0b969ffd4e', 0, 0, NULL, '2026-09-17 12:31:29.661', '2026-09-10 12:31:29.662', '2026-09-10 12:31:29.662'),
(976, 1, '580111a2-addc-45a9-88f5-04d70e7f7b70', '4146bb3095764b0cb64cf7a4bcdc3a4faf14954e3bfd55eabf2d1e254e475e7b', 0, 0, NULL, '2026-09-17 12:37:11.116', '2026-09-10 12:37:11.117', '2026-09-10 12:37:11.117'),
(977, 6, 'a690b88f-129b-4248-b3a7-1a7ee6847052', 'b10e9915769d464de304eb809f47033ff03253e852c932207d7f8eceb971ced6', 1, 0, NULL, '2026-09-17 13:09:24.956', '2026-09-10 13:09:24.957', '2026-09-10 13:09:29.742'),
(978, 6, 'a690b88f-129b-4248-b3a7-1a7ee6847052', '3da09ff40dd77ca8f6bad592218aa57aac91e03f7858a98616209446136df570', 1, 0, NULL, '2026-09-17 13:09:31.303', '2026-09-10 13:09:31.304', '2026-09-10 13:24:43.569'),
(979, 6, 'a690b88f-129b-4248-b3a7-1a7ee6847052', 'bebeee5e59170dbe29d29900e33b9531df6497287a2525e3c2266c0aded61513', 0, 0, NULL, '2026-09-17 13:24:46.627', '2026-09-10 13:24:46.628', '2026-09-10 13:24:46.628'),
(980, 2, '3f06b94f-2b38-4511-a035-56b05815a873', '3335e9a9ec4c4bbb038904c7cea258371c297abbe85b7f5d43611a973a33ca13', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-18 04:10:26.360', '2026-09-11 04:10:26.361', '2026-09-11 04:16:06.851'),
(981, 2, '3f06b94f-2b38-4511-a035-56b05815a873', 'b230d1cbf415e1bd75639997229f74cd0c6eeab088b7dac88b2475af7fa85de5', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-18 04:15:25.460', '2026-09-11 04:15:25.461', '2026-09-11 04:16:06.851'),
(982, 2, '3f06b94f-2b38-4511-a035-56b05815a873', '7e32b8fa91c24e2721eb4351d458a39a4bc354aa24171c23f8759db7ccf3fa7a', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-18 04:15:36.585', '2026-09-11 04:15:36.586', '2026-09-11 04:16:06.851'),
(983, 2, '3f06b94f-2b38-4511-a035-56b05815a873', '8ef24e233d0794f4268c4f0d990bd94d17b976f7fc941828bf85428a28d6d9db', 1, 1, 'LOGGED_OUT', '2026-09-18 04:15:48.283', '2026-09-11 04:15:48.284', '2026-09-11 04:16:09.289'),
(984, 2, '3f06b94f-2b38-4511-a035-56b05815a873', '2631354bde5697ecb89e7dea7ce3fcc05bb6cf696449995509e739100fc82417', 0, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-18 04:16:04.986', '2026-09-11 04:16:04.987', '2026-09-11 04:16:06.851'),
(985, 1, 'db493777-7b72-4353-8a16-c2021e4f13cf', '664603b5706554b939eb545e0228110e8b61d20a07954b85b03524e56e08733b', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-18 04:17:30.091', '2026-09-11 04:17:30.092', '2026-09-11 07:28:57.443'),
(986, 1, '1661e5e9-3b1b-4ab7-a976-e234c80c00ec', '4aecfec1f75f5318a9ac98ce28718c32f155760f5e07837655609725a632d758', 0, 1, 'LOGGED_OUT', '2026-09-18 04:22:59.619', '2026-09-11 04:22:59.619', '2026-09-11 05:52:54.853'),
(987, 1, 'db493777-7b72-4353-8a16-c2021e4f13cf', '8e7a48dbe6874bae0debc4d73541472ce67adad513a5aeb47d642f90d5dcd6a6', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-18 04:23:32.962', '2026-09-11 04:23:32.962', '2026-09-11 07:28:57.443'),
(988, 1, 'db493777-7b72-4353-8a16-c2021e4f13cf', 'cc66f5a856a7faefb21831d31905f525fab46a318fb0ba39eaf5ffdf4f486d22', 1, 1, 'LOGGED_OUT', '2026-09-18 04:23:55.497', '2026-09-11 04:23:55.498', '2026-09-11 07:28:59.836'),
(989, 4, '591c2abe-015e-47c9-ba2b-cf3023e5ecf1', '998f2b53e7c257ad076b2e29a9f8fc80aed385867a6f0bd291d5e9fb5d7fa80c', 1, 1, 'AUTHORIZATION_CHANGED', '2026-09-18 04:45:29.638', '2026-09-11 04:45:29.639', '2026-09-11 13:04:32.537'),
(990, 4, '591c2abe-015e-47c9-ba2b-cf3023e5ecf1', '372db80152ee14f72dfe109cfdbaa3724ec1c751d438960d29e9d92a26cf9427', 1, 1, 'AUTHORIZATION_CHANGED', '2026-09-18 04:45:43.824', '2026-09-11 04:45:43.825', '2026-09-11 13:04:32.537'),
(991, 4, '591c2abe-015e-47c9-ba2b-cf3023e5ecf1', '2e6c8806899107f7a24ba0c456ff2fd63c7b1318c0f7391de9b6c19d6696f47f', 1, 1, 'AUTHORIZATION_CHANGED', '2026-09-18 04:45:54.672', '2026-09-11 04:45:54.673', '2026-09-11 13:04:32.537'),
(992, 4, '591c2abe-015e-47c9-ba2b-cf3023e5ecf1', 'bfd998f26c15312d69f46753aeffd90cb00fa291feca0c31734bb9e5313bcf64', 1, 1, 'AUTHORIZATION_CHANGED', '2026-09-18 04:46:02.355', '2026-09-11 04:46:02.356', '2026-09-11 13:04:32.537'),
(993, 4, '591c2abe-015e-47c9-ba2b-cf3023e5ecf1', 'cb22b53b8d6ae9a0bf03a7bf73fbe8e136c13a40956d63f7a62aff98c2abe01a', 1, 1, 'AUTHORIZATION_CHANGED', '2026-09-18 04:46:13.316', '2026-09-11 04:46:13.317', '2026-09-11 13:04:32.537'),
(994, 4, '591c2abe-015e-47c9-ba2b-cf3023e5ecf1', 'b1e31234f46802515477549f69694ce10e3767b8dbdbdb5865e5d7c4fa6bc6e0', 1, 1, 'AUTHORIZATION_CHANGED', '2026-09-18 04:46:24.459', '2026-09-11 04:46:24.460', '2026-09-11 13:04:32.537'),
(995, 3, '057d68dc-4bcc-4ea8-896c-edd40df52113', '2fdb4ccb8a94c66c3871fc6a3509aebd66f2c4b79839814a8d4ff6774605cb1c', 0, 0, NULL, '2026-09-18 04:49:29.085', '2026-09-11 04:49:29.086', '2026-09-11 04:49:29.086'),
(996, 1, 'fcc81dc7-cf8f-4581-985c-a12d6deef7e1', '1590fb5e607fc0cd57dbb09d3d5c34794fb8ef1752deb431cc71b1cbb5c23c2f', 0, 1, 'LOGGED_OUT', '2026-09-18 05:58:40.432', '2026-09-11 05:58:40.433', '2026-09-11 06:28:50.753'),
(997, 4, '591c2abe-015e-47c9-ba2b-cf3023e5ecf1', '31c7e16e8a2f0ec3f067cc5f7efaae9081807fbc573dbecea13d1bea0264d9e6', 1, 1, 'AUTHORIZATION_CHANGED', '2026-09-18 06:32:10.383', '2026-09-11 06:32:10.384', '2026-09-11 13:04:32.537'),
(998, 4, '591c2abe-015e-47c9-ba2b-cf3023e5ecf1', '06295cbbd0de781ddde8264bd2b3b7cd8ba2b91afecc9c15be45ffb7112427d4', 1, 1, 'AUTHORIZATION_CHANGED', '2026-09-18 06:32:26.724', '2026-09-11 06:32:26.725', '2026-09-11 13:04:32.537'),
(999, 4, '591c2abe-015e-47c9-ba2b-cf3023e5ecf1', 'e2e77b46fc0103616c9ad5d71feb8f0e50b9030eb2f2327b7091a44803a977e2', 1, 1, 'AUTHORIZATION_CHANGED', '2026-09-18 06:32:43.016', '2026-09-11 06:32:43.017', '2026-09-11 13:04:32.537'),
(1000, 4, '591c2abe-015e-47c9-ba2b-cf3023e5ecf1', 'aa3bfc9e46318d4dd017c72dbddee53a0811e5ca685af01ccd6330b3d306233d', 1, 1, 'AUTHORIZATION_CHANGED', '2026-09-18 06:32:55.113', '2026-09-11 06:32:55.114', '2026-09-11 13:04:32.537'),
(1001, 4, '591c2abe-015e-47c9-ba2b-cf3023e5ecf1', '4d05238eeb603410165768e73db9bbbe9c6672b7b0c4eed4a813e4e84f275e58', 1, 1, 'AUTHORIZATION_CHANGED', '2026-09-18 06:33:05.988', '2026-09-11 06:33:05.989', '2026-09-11 13:04:32.537'),
(1002, 4, '591c2abe-015e-47c9-ba2b-cf3023e5ecf1', '1f425608d294166ee43c9f61d374fad196108ab40280639fc3ee62d9e94454f3', 1, 1, 'AUTHORIZATION_CHANGED', '2026-09-18 06:33:13.664', '2026-09-11 06:33:13.665', '2026-09-11 13:04:32.537'),
(1003, 4, '591c2abe-015e-47c9-ba2b-cf3023e5ecf1', 'ceeadd20f46b0e56c93b528dd9c3840027c9b6789fa27c42db0265c7145824ce', 0, 1, 'AUTHORIZATION_CHANGED', '2026-09-18 06:33:25.743', '2026-09-11 06:33:25.744', '2026-09-11 13:04:32.537'),
(1004, 1, 'ac11e34f-42e1-4a98-bf76-1bc909cba97d', '6cd5723c837a8ea299dc735a1547b345ca3cd8da444092a137f6b4fb685670af', 0, 1, 'LOGGED_OUT', '2026-09-18 06:41:44.280', '2026-09-11 06:41:44.281', '2026-09-11 07:17:57.945'),
(1005, 17, '5503aa78-652e-45b6-9cc9-e46b446812da', 'b2e59ee90281796eba212aad782b21884e2f14d4beb86accaf52fbff026fbf95', 0, 1, 'LOGGED_OUT', '2026-09-18 07:26:39.522', '2026-09-11 07:26:39.523', '2026-09-11 07:29:58.465'),
(1006, 1, 'db493777-7b72-4353-8a16-c2021e4f13cf', 'fefc1afac0131ece2ed0617a96e39344e891964deed4075bcb95b451da4e1368', 0, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2026-09-18 07:27:29.752', '2026-09-11 07:27:29.753', '2026-09-11 07:28:57.443'),
(1007, 1, 'bc558293-6785-4407-971c-dd20a492f84f', 'e528f76459dd0a9dba6368dc364f2f9d79e9212981845a33a2b1893281aa4720', 1, 0, NULL, '2026-09-18 07:29:50.213', '2026-09-11 07:29:50.213', '2026-09-11 07:32:08.607'),
(1008, 17, '9fa41199-a9e4-4abe-a1cf-a5a507bc27b6', '898479b670bf6eb44c7c1e4b059d4f87eaf1463f74c8bdc02f81fe0c2de56e06', 1, 0, NULL, '2026-09-18 07:32:08.109', '2026-09-11 07:32:08.110', '2026-09-11 07:32:14.245'),
(1009, 1, 'bc558293-6785-4407-971c-dd20a492f84f', 'e636a1aa92292099ddb1e22d3ff77efcf3a03900edad3d15fb5f96a83d79b60e', 1, 0, NULL, '2026-09-18 07:32:12.490', '2026-09-11 07:32:12.491', '2026-09-11 07:39:03.510'),
(1010, 17, '9fa41199-a9e4-4abe-a1cf-a5a507bc27b6', '0de6549afcadf684ae04f5de6213b0cb226aa02e7a64ab8602bde7d3baae59bc', 0, 1, 'LOGGED_OUT', '2026-09-18 07:32:17.868', '2026-09-11 07:32:17.869', '2026-09-11 07:33:40.536'),
(1011, 17, '870f5a27-168f-47d8-8ae0-922a4592ac65', '555e9c185b0e7a3a4acd441722e32b7c222042fbe466627a3cee84d9fd219efd', 1, 0, NULL, '2026-09-18 07:34:05.401', '2026-09-11 07:34:05.402', '2026-09-11 09:05:44.132'),
(1012, 1, 'bc558293-6785-4407-971c-dd20a492f84f', 'b648485f126cac1eeff470d153270a4de86005247fc110b3868f77cb6f8f9bdc', 1, 0, NULL, '2026-09-18 07:39:07.246', '2026-09-11 07:39:07.247', '2026-09-11 07:40:51.145'),
(1013, 1, 'bc558293-6785-4407-971c-dd20a492f84f', '73bca0741c8e10fcf01dd74d67e785014d252f962f82b2df91440c6d836c25c6', 1, 0, NULL, '2026-09-18 07:40:54.893', '2026-09-11 07:40:54.894', '2026-09-11 07:41:21.784'),
(1014, 1, 'bc558293-6785-4407-971c-dd20a492f84f', '95e61ec8092cbcf215e7f9f01711daeb3dc42cd6ab33d244c8d0c03bd60a064f', 0, 1, 'LOGGED_OUT', '2026-09-18 07:41:25.794', '2026-09-11 07:41:25.794', '2026-09-11 08:12:16.665'),
(1015, 17, '870f5a27-168f-47d8-8ae0-922a4592ac65', '39fb2b0ef874cd17c370d1f8e9d6c0623aaed6c3b82600a42c1439b72f81d2bb', 0, 0, NULL, '2026-09-18 09:05:47.879', '2026-09-11 09:05:47.880', '2026-09-11 09:05:47.880'),
(1016, 31, 'cfdcfd48-13ea-423c-83ed-d0a7fddf9397', '1f6ac65116727a3f3c23b42c801c8a446309aa391695f89eaaafc1462f1968db', 0, 1, 'LOGGED_OUT', '2026-09-18 09:58:08.488', '2026-09-11 09:58:08.489', '2026-09-11 10:28:51.456'),
(1017, 1, 'b800e2b9-8bc7-40e9-ade6-025bb44f050f', '95150217f356a1e4a7c2b719d6eb0a3d081b0bcdc8db70b7d3cfbc21b939044d', 1, 0, NULL, '2027-10-16 11:45:31.144', '2026-09-11 11:45:31.145', '2026-09-11 11:54:43.557'),
(1018, 16, '49eb68d7-efc4-45d1-b9a7-bc1fea326705', 'ec6621ef9ccd93ce93e73aef34d3899434a76be6cfef61ff49ab177f31fb8653', 0, 1, 'LOGGED_OUT', '2027-10-16 11:52:35.442', '2026-09-11 11:52:35.443', '2026-09-11 11:54:37.415'),
(1019, 16, '821b2382-73ea-4433-909a-2ab072ee5b4a', '27c7de709b6e9f939e6ed39351db3b4357a33756604083ab8727472b987cc0ef', 0, 0, NULL, '2027-10-16 11:53:15.692', '2026-09-11 11:53:15.692', '2026-09-11 11:53:15.692'),
(1020, 4, 'e5fc0542-37d4-4c2b-9c82-21d8cf5ffaee', '5214f1993ffc731eaffbfa833eca09365d6fc05612ce02092c86ef33b73e4314', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 11:54:40.144', '2026-09-11 11:54:40.145', '2026-09-11 11:58:12.204'),
(1021, 16, 'c19d5901-8238-477d-b114-72c663cb4f87', '52f9943449e331ec053e153d8c7ecc00a68a4831d8a83c8cae519b1bba58635d', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 11:54:44.344', '2026-09-11 11:54:44.345', '2026-09-11 12:49:39.224'),
(1022, 1, 'b800e2b9-8bc7-40e9-ade6-025bb44f050f', '3a3edc1b1c7d2ae963e5b26bfce2513bd1dc21e97a9801fddd7b4e519d9cef52', 1, 0, NULL, '2027-10-16 11:54:44.600', '2026-09-11 11:54:44.600', '2026-09-11 11:54:45.964'),
(1023, 1, 'b800e2b9-8bc7-40e9-ade6-025bb44f050f', '57930c3dbd8884af229f5a53c39c98a2a81c04d9d4c1dd54172d7df99b37b7fd', 0, 0, NULL, '2027-10-16 11:54:47.101', '2026-09-11 11:54:47.103', '2026-09-11 11:54:47.103'),
(1024, 17, '7043c9ec-c87f-40a1-b28e-676d64ce40c7', '3b8fdda7e63727f8ad16aa598de7bd18e46222124858668606d017478089bdd7', 1, 0, NULL, '2027-10-16 11:54:58.156', '2026-09-11 11:54:58.156', '2026-09-12 08:41:56.291'),
(1025, 31, '482c35d6-1481-4699-8c9e-97dffa8d2b04', 'eb94fc3d52ec93d4a379d14a9e297a60bf5be74761d966725e99e14a526fe998', 1, 0, NULL, '2027-10-16 11:55:17.254', '2026-09-11 11:55:17.256', '2026-09-11 12:17:19.559'),
(1026, 4, 'e5fc0542-37d4-4c2b-9c82-21d8cf5ffaee', '582f51ae3ea3b632d46ff4491cc8ccea2341830efa998da78a05764cb54c0b83', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 11:56:26.580', '2026-09-11 11:56:26.581', '2026-09-11 11:58:12.204'),
(1027, 3, '3d7c49d8-e134-45d8-a687-f8ef396ed5ea', 'e3fa64390c325c67f62d2daec7067f8269bfb62201fe86545a4650f7f158563c', 1, 1, 'LOGGED_OUT', '2027-10-16 11:56:59.751', '2026-09-11 11:56:59.752', '2026-09-11 12:04:44.058'),
(1028, 4, 'e5fc0542-37d4-4c2b-9c82-21d8cf5ffaee', '18ea2b6a48cce3e5e870c5a3920fee92a934434fa5b6b35c20ed5aac8bcbeaa3', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 11:57:38.775', '2026-09-11 11:57:38.776', '2026-09-11 11:58:12.204'),
(1029, 4, 'e5fc0542-37d4-4c2b-9c82-21d8cf5ffaee', '25e580800e4fb9fdc537425646fb7b4d7077690808b9bd41d71b23e5a61b37b5', 1, 1, 'LOGGED_OUT', '2027-10-16 11:57:49.080', '2026-09-11 11:57:49.080', '2026-09-11 11:58:12.918'),
(1030, 4, 'e5fc0542-37d4-4c2b-9c82-21d8cf5ffaee', 'b91e5e4fadd3753fa2549c7bc95f6ccbf2d2c0bc3b02c9d29f9deeeca8018778', 0, 1, 'LOGGED_OUT', '2027-10-16 11:58:12.914', '2026-09-11 11:58:12.915', '2026-09-11 11:58:13.495'),
(1031, 4, 'f114713a-6e50-4d91-abb0-62aaf637e9c5', 'a8aef0f2de65b2db8d1749058d767d99e0800084c5be1dac7640cb6fd49d7e48', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 11:58:45.547', '2026-09-11 11:58:45.548', '2026-09-11 12:17:50.843'),
(1032, 3, '3d7c49d8-e134-45d8-a687-f8ef396ed5ea', 'ae766e3b068434a533b378b6c32cb14e36c3a23ed0276cae29808bfaf2956f11', 0, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:04:41.545', '2026-09-11 12:04:41.546', '2026-09-11 12:04:42.846'),
(1033, 2, '31bc52b5-055c-4b16-a4ad-b98a20ad7264', 'efa299bb7badf61f6e2d9325451b2d019fa95db025231fde501349302ef3716c', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:04:43.554', '2026-09-11 12:04:43.556', '2026-09-11 12:38:38.090'),
(1034, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', '21cfc614cd766b236a625c9fb8d59a8538c82f28ef1ac688f99acb66194e57a0', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:04:49.042', '2026-09-11 12:04:49.043', '2026-09-15 04:32:38.653'),
(1035, 2, '31bc52b5-055c-4b16-a4ad-b98a20ad7264', 'ba333369dc440130ab8fe6da14b62fa99baed4b45646e98bb7fe77b814305212', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:04:49.118', '2026-09-11 12:04:49.119', '2026-09-11 12:38:38.090'),
(1036, 2, '31bc52b5-055c-4b16-a4ad-b98a20ad7264', '35b3618b22642a9d9e60d4d02f326abe3c6bf2814358f36006fb9c9bfd14a114', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:04:51.694', '2026-09-11 12:04:51.694', '2026-09-11 12:38:38.090'),
(1037, 2, '31bc52b5-055c-4b16-a4ad-b98a20ad7264', '7756b18edd8aa7bc7ca915bbd833bae643a1b5ab07d7809ad28f7eb116a41be4', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:05:20.917', '2026-09-11 12:05:20.918', '2026-09-11 12:38:38.090'),
(1038, 2, '31bc52b5-055c-4b16-a4ad-b98a20ad7264', '2a14dc0d740a698867ab6f7058e0774fa2da2cbd7140f05c6fcefa436829a8af', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:05:25.066', '2026-09-11 12:05:25.067', '2026-09-11 12:38:38.090'),
(1039, 2, '31bc52b5-055c-4b16-a4ad-b98a20ad7264', '1a3ae110a3189a4731eec79dd7d337857ebe742261d00d3a6aabc014d43de93c', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:08:19.872', '2026-09-11 12:08:19.873', '2026-09-11 12:38:38.090'),
(1040, 2, '31bc52b5-055c-4b16-a4ad-b98a20ad7264', '9558169f7ccf38ac6a15d3607b011c239cd55e5fed24029dc024dc54c14d0d9c', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:08:22.524', '2026-09-11 12:08:22.524', '2026-09-11 12:38:38.090'),
(1041, 2, '31bc52b5-055c-4b16-a4ad-b98a20ad7264', '288c92d354afa1a5448d50ecec5bfb0debb8f270488a6a6fbca315b209120c23', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:09:07.891', '2026-09-11 12:09:07.891', '2026-09-11 12:38:38.090'),
(1042, 2, '31bc52b5-055c-4b16-a4ad-b98a20ad7264', '26ba68a65a9051112935abe173e7cfb2489ed372cb759b1afff923142e8a05d0', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:09:11.772', '2026-09-11 12:09:11.773', '2026-09-11 12:38:38.090'),
(1043, 4, 'f114713a-6e50-4d91-abb0-62aaf637e9c5', '16758672537ed70438640243ae74c3dccaf5f9621e34622970bff44300ee57b4', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:10:45.028', '2026-09-11 12:10:45.029', '2026-09-11 12:17:50.843'),
(1044, 4, 'f114713a-6e50-4d91-abb0-62aaf637e9c5', '32542e85a517501b029c132b5f5541bfde2d9f6dc6a1205a9725bfbf174ba060', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:10:51.329', '2026-09-11 12:10:51.330', '2026-09-11 12:17:50.843'),
(1045, 4, 'f114713a-6e50-4d91-abb0-62aaf637e9c5', '7349637c38588ade293b022e590eaa159324dcbea9009977eda0eaa1d7871bf9', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:11:01.299', '2026-09-11 12:11:01.300', '2026-09-11 12:17:50.843'),
(1046, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', '893231fdd9cbbaf1c47dc6b5238055e44dd681fa4df59e26c2878abd9d080250', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:11:05.469', '2026-09-11 12:11:05.470', '2026-09-15 04:32:38.653'),
(1047, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', '06c89b6b8f6837758f5c06c7ff6861d67c42322fc58586f0e62acfab1be0269a', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:11:08.392', '2026-09-11 12:11:08.393', '2026-09-15 04:32:38.653');
INSERT INTO `AuthSession` (`id`, `employee_id`, `family_token`, `refresh_token_hash`, `consumed`, `revoked`, `revocation_reason`, `expires_at`, `created_at`, `updated_at`) VALUES
(1048, 4, 'f114713a-6e50-4d91-abb0-62aaf637e9c5', '28a1d0553f98981d18e410fdab1936fbc547a12335205b51ad653da68d06e8a4', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:11:11.017', '2026-09-11 12:11:11.018', '2026-09-11 12:17:50.843'),
(1049, 4, 'f114713a-6e50-4d91-abb0-62aaf637e9c5', 'f4486413c4e5e626f0292647ad8794ced394df7040ada75406135cc7a9e2224c', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:11:20.998', '2026-09-11 12:11:20.999', '2026-09-11 12:17:50.843'),
(1050, 4, 'f114713a-6e50-4d91-abb0-62aaf637e9c5', '004c1c63df62f4d6f286f1e6e3cebd9f1a0a19b54815d0db2937cbe58da5c7b9', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:11:30.841', '2026-09-11 12:11:30.841', '2026-09-11 12:17:50.843'),
(1051, 4, 'f114713a-6e50-4d91-abb0-62aaf637e9c5', '33ecf051697c41b229f4092e8e8487b0729643628ed49bf86e09ca4acc1a3714', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:12:01.415', '2026-09-11 12:12:01.415', '2026-09-11 12:17:50.843'),
(1052, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', 'eb8bf63cf79e6ae92b0184fad23d798ac21b491e5564b89a53afa1edb295d4bd', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:12:19.934', '2026-09-11 12:12:19.935', '2026-09-15 04:32:38.653'),
(1053, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', '2da8d549823665d87855b8ffadaf43c88cba87732e816c55d0457463d029728d', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:12:21.556', '2026-09-11 12:12:21.557', '2026-09-15 04:32:38.653'),
(1054, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', '65866d9208dd34aa0ed9a19730be0ad924e64707b4026b48a6c01321c9993876', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:12:30.161', '2026-09-11 12:12:30.162', '2026-09-15 04:32:38.653'),
(1055, 4, 'f114713a-6e50-4d91-abb0-62aaf637e9c5', '038bab4a02b8fabe4a50dcd6bc981cd342c8bb16d7da74b28edf8a17440ae803', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:12:30.932', '2026-09-11 12:12:30.932', '2026-09-11 12:17:50.843'),
(1056, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', 'ae3ee57b6b6da48fdf0dbe4c249d32f1ddd34b070565d6ca894484442e315fbb', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:12:32.676', '2026-09-11 12:12:32.677', '2026-09-15 04:32:38.653'),
(1057, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', '781295961fa4f904f72c99dcb638ea6276f1e3356a2641eb89ab608b83a591c9', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:12:35.387', '2026-09-11 12:12:35.387', '2026-09-15 04:32:38.653'),
(1058, 4, 'f114713a-6e50-4d91-abb0-62aaf637e9c5', 'f1773c9b5a2eba4fe10966b49426227a45f64b87e4c3c65d24f0959247afa050', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:12:51.240', '2026-09-11 12:12:51.241', '2026-09-11 12:17:50.843'),
(1059, 4, 'f114713a-6e50-4d91-abb0-62aaf637e9c5', 'fea7a2921ff2e6f0e43a4d0c4da141cea1329cb92f0d2f07e1ac9b813d5a969a', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:13:00.959', '2026-09-11 12:13:00.959', '2026-09-11 12:17:50.843'),
(1060, 4, 'f114713a-6e50-4d91-abb0-62aaf637e9c5', '8a8e037bf8c2c45c23c3a302d0826e8a8bcc8bb76ea0648faa49373eb8eedb5d', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:13:10.887', '2026-09-11 12:13:10.888', '2026-09-11 12:17:50.843'),
(1061, 4, 'f114713a-6e50-4d91-abb0-62aaf637e9c5', '02a25d6bf20289824c8ee7dacf2ea62ff91a57aa94f8fe1431b9d1bafeeb88a0', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:14:31.404', '2026-09-11 12:14:31.405', '2026-09-11 12:17:50.843'),
(1062, 4, 'f114713a-6e50-4d91-abb0-62aaf637e9c5', '826d5a55369ea8e9c95a51ce8c139fcfa94d3e2a238fbe9ab6b2bb3b504adfb2', 1, 1, 'LOGGED_OUT', '2027-10-16 12:15:21.362', '2026-09-11 12:15:21.363', '2026-09-11 12:17:51.431'),
(1063, 4, 'f114713a-6e50-4d91-abb0-62aaf637e9c5', 'c7f9a606e1f490578ff874afceafd64b21c799fad4f255a6272b90bc556c90b7', 0, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:15:31.441', '2026-09-11 12:15:31.442', '2026-09-11 12:17:50.843'),
(1064, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', 'd553d240854945fbaf03a0483b1d68294dbe68f95a0708c45efba60eea5b9ce5', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:15:41.805', '2026-09-11 12:15:41.806', '2026-09-15 04:32:38.653'),
(1065, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', '4805b1c87b6198f39b7ec478e71c5bb218a660114c846c4366e4305def1e3613', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:15:45.781', '2026-09-11 12:15:45.782', '2026-09-15 04:32:38.653'),
(1066, 2, '31bc52b5-055c-4b16-a4ad-b98a20ad7264', '15a64487c99711ae15e66dbd4017af1a8ea94aa3f96376212aec7c663f7ec695', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:16:51.825', '2026-09-11 12:16:51.826', '2026-09-11 12:38:38.090'),
(1067, 2, '31bc52b5-055c-4b16-a4ad-b98a20ad7264', '150ab921aa35d810da265bbfc7c17fc6eb979fbb44776fd57ed2a26fdec18790', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:16:54.327', '2026-09-11 12:16:54.327', '2026-09-11 12:38:38.090'),
(1068, 31, '482c35d6-1481-4699-8c9e-97dffa8d2b04', '188deb8a04f2cb9d0088115a77a378745036541f1a1ca491accc716fe3cc1a11', 1, 0, NULL, '2027-10-16 12:17:20.085', '2026-09-11 12:17:20.086', '2026-09-11 12:17:21.499'),
(1069, 31, '482c35d6-1481-4699-8c9e-97dffa8d2b04', '9d8245d6f27ebc4eacd67f4771f3d78732c51b08fd506555a99bfd9685c44be8', 1, 0, NULL, '2027-10-16 12:17:22.563', '2026-09-11 12:17:22.564', '2026-09-11 12:26:35.931'),
(1070, 2, '31bc52b5-055c-4b16-a4ad-b98a20ad7264', '4afb6363c338c14de7e8f8c368d1935a9d471518ce2cce3be955591b49e54d27', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:17:35.616', '2026-09-11 12:17:35.618', '2026-09-11 12:38:38.090'),
(1071, 2, '31bc52b5-055c-4b16-a4ad-b98a20ad7264', '8754af40225e26c96bb9df73526f601687585242bad55e5932c63cebbb61be7c', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:17:38.116', '2026-09-11 12:17:38.117', '2026-09-11 12:38:38.090'),
(1072, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', '7e6f8d4eceaa13388a8aa5524aaa4247bad9bbe0be6575b620c07081ae7ae49a', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:17:50.198', '2026-09-11 12:17:50.199', '2026-09-15 04:32:38.653'),
(1073, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', '5cde7a1d5511fac80a09edefb33a5f0e542c59d8be31bf6cb6e40e0e801e39cc', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:17:52.234', '2026-09-11 12:17:52.235', '2026-09-15 04:32:38.653'),
(1074, 2, '31bc52b5-055c-4b16-a4ad-b98a20ad7264', 'c3488b83a17b3ae23bfbdaeeaf417ebdea469720022b35438d860821218e96e3', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:17:52.315', '2026-09-11 12:17:52.316', '2026-09-11 12:38:38.090'),
(1075, 2, '31bc52b5-055c-4b16-a4ad-b98a20ad7264', '0ddb47db8dfdfca909205f2b094b97ee8b11ff1e50b8b7af19007479804b916a', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:17:54.721', '2026-09-11 12:17:54.722', '2026-09-11 12:38:38.090'),
(1076, 2, '31bc52b5-055c-4b16-a4ad-b98a20ad7264', '966933567e564917643345d3ceaa9be7b2b251b91f0b729f72dca5658a4a0021', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:17:58.270', '2026-09-11 12:17:58.271', '2026-09-11 12:38:38.090'),
(1077, 2, '31bc52b5-055c-4b16-a4ad-b98a20ad7264', 'b001ebd4d6ce498103447bcd2726eb0f3208a9469e2adc836387f9aa1ca1c80e', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:18:00.756', '2026-09-11 12:18:00.756', '2026-09-11 12:38:38.090'),
(1078, 4, '294421c5-c100-405d-b3e3-34b9a84a98a6', 'c18aaaca689e6b4f08b5674513a316e049f7aff880286c7cbc92a7b573299829', 0, 1, 'AUTHORIZATION_CHANGED', '2027-10-16 12:18:16.853', '2026-09-11 12:18:16.854', '2026-09-11 13:04:32.537'),
(1079, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', '27bfca387ce656d4a592e0a320f648ac4e371cdf4800191003ed5b23d19ebbd3', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:20:57.512', '2026-09-11 12:20:57.513', '2026-09-15 04:32:38.653'),
(1080, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', '07859e352642dfd5c45163aea6744e902924093795c812bc376bd066dd7195cb', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:21:00.777', '2026-09-11 12:21:00.777', '2026-09-15 04:32:38.653'),
(1081, 1, 'd3e06f86-0f4e-4e3a-9166-157c90c7953e', '3a8d56d2c664aac8180a88fd7ec320a6f6e9d87a02d5142c0d2ea4b43689b412', 1, 0, NULL, '2027-10-16 12:21:03.645', '2026-09-11 12:21:03.645', '2026-09-11 12:24:43.080'),
(1082, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', '80b8e65686df68b62de6ea37e14d3fcc5a1a90f9d4ccbe0664d640f6e2bc6d2d', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:21:53.246', '2026-09-11 12:21:53.247', '2026-09-15 04:32:38.653'),
(1083, 1, 'd3e06f86-0f4e-4e3a-9166-157c90c7953e', '3db7e8d33824f7b6530649455b504a9a4c351ca6c07e368c9f325e0b674ac629', 0, 0, NULL, '2027-10-16 12:24:43.932', '2026-09-11 12:24:43.933', '2026-09-11 12:24:43.933'),
(1084, 31, '482c35d6-1481-4699-8c9e-97dffa8d2b04', '5dd833e95d5a049ab1dd222a172e7fbcc9a5c9ce28f669df1597f9c355f0d0b2', 1, 0, NULL, '2027-10-16 12:26:37.387', '2026-09-11 12:26:37.388', '2026-09-11 13:21:11.928'),
(1085, 1, 'c32f0bd6-23e2-4b40-9e13-a0766581f54f', 'bdc01a73c572f0d0d93810888bfe0fdbe28eaf4098bcb25fa5942e09571a9c49', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:26:38.486', '2026-09-11 12:26:38.487', '2026-09-11 13:08:32.085'),
(1086, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', '7bdd88faece16f7c4a63fc9fd6b5e66d1552a0db1276d80d7ca5b3b5c41d3de6', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:34:58.859', '2026-09-11 12:34:58.860', '2026-09-15 04:32:38.653'),
(1087, 16, 'c19d5901-8238-477d-b114-72c663cb4f87', '2f10bc49b53f6903097c43f7b6682f361acf124477e900ab1d7afd1a3c84fd30', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:35:00.125', '2026-09-11 12:35:00.126', '2026-09-11 12:49:39.224'),
(1088, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', '0c344689e9bf279a6bfb54827ff7924859658c0eb41a8f249d9dbdd6272ab4ef', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:35:01.828', '2026-09-11 12:35:01.829', '2026-09-15 04:32:38.653'),
(1089, 16, 'c19d5901-8238-477d-b114-72c663cb4f87', '4b8d713bb869dd00562d4312eeb7f3864960cb53cb3440a106f1263974e07379', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:35:10.750', '2026-09-11 12:35:10.751', '2026-09-11 12:49:39.224'),
(1090, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', 'bb3daa1769a578f5d1a7e8701163b9cef8a6fccc95e1cf45468a245c64f36063', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:35:11.407', '2026-09-11 12:35:11.408', '2026-09-15 04:32:38.653'),
(1091, 1, 'c32f0bd6-23e2-4b40-9e13-a0766581f54f', '0caea48efe96a601dd41016e65eb68d643d8f9d5f1f17cf6c04c54b258ccfcd9', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:35:12.833', '2026-09-11 12:35:12.834', '2026-09-11 13:08:32.085'),
(1092, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', '91a8ee0af87cbbbf822d30a5bc21fa232fd24c97b973122d3a58039d69725f92', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:35:14.511', '2026-09-11 12:35:14.511', '2026-09-15 04:32:38.653'),
(1093, 1, 'c32f0bd6-23e2-4b40-9e13-a0766581f54f', '8a40a9fcab82dbdcd363ffb479c555410685b5a7d46a30a9effb95e56e41e426', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:35:15.372', '2026-09-11 12:35:15.372', '2026-09-11 13:08:32.085'),
(1094, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', '0cec766a3a0acdfaeb478aeee436a5b6271ccc0ece04f4d3ed75ee412419df00', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:35:20.188', '2026-09-11 12:35:20.189', '2026-09-15 04:32:38.653'),
(1095, 16, 'c19d5901-8238-477d-b114-72c663cb4f87', '582f415a96f1040e98215668e877bb1324f863d2e9356607045dfa2c9f4f2610', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:35:21.645', '2026-09-11 12:35:21.646', '2026-09-11 12:49:39.224'),
(1096, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', '2847761e0522b0a29bfae6ca296fcb5496eaedc274feb2f4d1f79ed4532f9070', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:35:22.617', '2026-09-11 12:35:22.619', '2026-09-15 04:32:38.653'),
(1097, 16, 'c19d5901-8238-477d-b114-72c663cb4f87', '7b594024ebc9418ec8fffc2c220763ddb4c7aa65ef618d9ed75ce894de4b2304', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:35:44.403', '2026-09-11 12:35:44.404', '2026-09-11 12:49:39.224'),
(1098, 16, 'c19d5901-8238-477d-b114-72c663cb4f87', '096d7ff19020efa2392560998e11cb9e88c93bd3d62f488c72a1cfcd8edd8bc0', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:35:53.613', '2026-09-11 12:35:53.614', '2026-09-11 12:49:39.224'),
(1099, 16, 'c19d5901-8238-477d-b114-72c663cb4f87', 'bacd67dcd4d73ebf814f1896226ced5d879030db6702bc844a8c3d84324081dd', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:36:01.775', '2026-09-11 12:36:01.776', '2026-09-11 12:49:39.224'),
(1100, 1, 'c32f0bd6-23e2-4b40-9e13-a0766581f54f', '4158771af85ec79fab13006f4c5829bc51289f1c04321a6a53b1fa2b1d33ba96', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:37:19.841', '2026-09-11 12:37:19.843', '2026-09-11 13:08:32.085'),
(1101, 2, '31bc52b5-055c-4b16-a4ad-b98a20ad7264', '6df745eba8218a3fecf18e53b40d1e67f24948d7148f74db72b0beb201919ae9', 1, 1, 'LOGGED_OUT', '2027-10-16 12:37:35.176', '2026-09-11 12:37:35.177', '2026-09-11 12:38:38.757'),
(1102, 2, '31bc52b5-055c-4b16-a4ad-b98a20ad7264', '1d1a459b59556aad86d3928520818484dadc3e624272c7d6821c203899a3101d', 0, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:38:08.190', '2026-09-11 12:38:08.191', '2026-09-11 12:38:38.090'),
(1103, 2, '3d9793aa-3616-42fa-abd7-743861547785', 'ac721498565380c25259601cfc7221e1e5d7f7d2f8fd93cb8e26a2fea71720ec', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:38:44.241', '2026-09-11 12:38:44.242', '2026-09-11 12:48:28.005'),
(1104, 1, 'c32f0bd6-23e2-4b40-9e13-a0766581f54f', 'd9733ef8c6109f98aae5b7c0b57bf825d6ee6b9c2d5b32bec05047be5417c5f3', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:38:48.850', '2026-09-11 12:38:48.851', '2026-09-11 13:08:32.085'),
(1105, 4, '43a5bc5a-4f11-4224-830f-f10187c21acf', '594c5212c26cb79b81efd7a2d391c4b6ee06a15e5d9c90d407db2e8baa00ec30', 1, 1, 'AUTHORIZATION_CHANGED', '2027-10-16 12:40:55.035', '2026-09-11 12:40:55.036', '2026-09-11 13:04:32.537'),
(1106, 2, '3d9793aa-3616-42fa-abd7-743861547785', '666afcd6e94d1a334633976624f687b230bf5529de97f0cca91fd80b1ccaa86f', 1, 1, 'LOGGED_OUT', '2027-10-16 12:41:38.204', '2026-09-11 12:41:38.209', '2026-09-11 12:48:28.742'),
(1107, 16, 'c19d5901-8238-477d-b114-72c663cb4f87', '8bc43123fca78c96f5691e174ea4dbd4d6716812c95a0d38a7df77a92deca745', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:46:45.097', '2026-09-11 12:46:45.098', '2026-09-11 12:49:39.224'),
(1108, 4, '43a5bc5a-4f11-4224-830f-f10187c21acf', 'ab71c9a09af67feb8b88d6b5fe61569de8fcefad2c7d57e85efa3eee7e37a270', 1, 1, 'AUTHORIZATION_CHANGED', '2027-10-16 12:46:47.996', '2026-09-11 12:46:47.997', '2026-09-11 13:04:32.537'),
(1109, 16, 'c19d5901-8238-477d-b114-72c663cb4f87', '76e6b41147f7d68d41cd04053fdab965cd52bbf88cabcab3a4326e78ea464fc3', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:46:48.729', '2026-09-11 12:46:48.730', '2026-09-11 12:49:39.224'),
(1110, 16, 'c19d5901-8238-477d-b114-72c663cb4f87', 'e8273e537fa88a60a6e198cb9889af6e6850719fb3e9bdbe5ff6e345dae547ef', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:46:58.834', '2026-09-11 12:46:58.835', '2026-09-11 12:49:39.224'),
(1111, 16, 'c19d5901-8238-477d-b114-72c663cb4f87', 'b9f2cb34fdf3b344960aa5e009ed0e887c53e6a40d9d1460721c9ff53e7c1c1f', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:47:15.597', '2026-09-11 12:47:15.598', '2026-09-11 12:49:39.224'),
(1112, 16, 'c19d5901-8238-477d-b114-72c663cb4f87', 'bf67f1d325efffa17d5faf84af49c747be922654dad06d74c5bf33dd88160fed', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:47:24.956', '2026-09-11 12:47:24.958', '2026-09-11 12:49:39.224'),
(1113, 16, 'c19d5901-8238-477d-b114-72c663cb4f87', '53d089d735c7b851f2dddb53211760a3df0f9f8aafb158ef1b70424480eee64e', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:47:35.017', '2026-09-11 12:47:35.018', '2026-09-11 12:49:39.224'),
(1114, 16, 'c19d5901-8238-477d-b114-72c663cb4f87', '2d7e4710e6416608f92bd5dbc80e38762853ac1ea318d4dad4d1afa79f8b85af', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:47:44.650', '2026-09-11 12:47:44.651', '2026-09-11 12:49:39.224'),
(1115, 1, 'c32f0bd6-23e2-4b40-9e13-a0766581f54f', 'dc2a291bd828e328d04f86f8c4f750b25ce86ff9d517a0452bf72278f091474c', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:48:03.787', '2026-09-11 12:48:03.788', '2026-09-11 13:08:32.085'),
(1116, 1, 'c32f0bd6-23e2-4b40-9e13-a0766581f54f', 'd7981ccc6b5aa90b78086652700996dbd56c1dae1da7d1858ac9ba18d6c62575', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:48:06.290', '2026-09-11 12:48:06.291', '2026-09-11 13:08:32.085'),
(1117, 2, '3d9793aa-3616-42fa-abd7-743861547785', '91f32646e492539564c4f5cbdc3c4402dcc794307029d5fbf938d1a5df3f668d', 0, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:48:20.902', '2026-09-11 12:48:20.903', '2026-09-11 12:48:28.005'),
(1118, 2, '8f92a0af-3cb1-430f-ac5f-73820934c586', 'a733e5631b227839ad2c6c84803c1de5172a8c663db5fe718dbfbc2d3e75c9c6', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:48:33.697', '2026-09-11 12:48:33.698', '2026-09-11 13:05:06.446'),
(1119, 2, '8f92a0af-3cb1-430f-ac5f-73820934c586', 'd2ff2adc2679c8f00953bab3e3889a2723bac65f0b5b77cc4eb13c40c21fb403', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:48:36.858', '2026-09-11 12:48:36.859', '2026-09-11 13:05:06.446'),
(1120, 2, '8f92a0af-3cb1-430f-ac5f-73820934c586', '71e7532cb52477694a143219d3d1129ff0d52f9b5ce75d02c50a65d22715e3de', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:48:40.268', '2026-09-11 12:48:40.269', '2026-09-11 13:05:06.446'),
(1121, 2, '8f92a0af-3cb1-430f-ac5f-73820934c586', '8b89f82555bfdb3704a1b339eedcfb56a00c3e978cc0d2e9c409fba162759cf1', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:49:29.161', '2026-09-11 12:49:29.162', '2026-09-11 13:05:06.446'),
(1122, 16, 'c19d5901-8238-477d-b114-72c663cb4f87', '1a7b39a14b40603d4973f14e4dfb6fad0b4ab781086e4aef868c825062b047e0', 1, 1, 'LOGGED_OUT', '2027-10-16 12:49:35.060', '2026-09-11 12:49:35.061', '2026-09-11 12:49:39.663'),
(1123, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', '0ffc970da4ebf58a83645b74e8bfb24e534348fcc14e4b3c4efd6cbd21d8ff7a', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:49:37.601', '2026-09-11 12:49:37.602', '2026-09-15 04:32:38.653'),
(1124, 16, 'c19d5901-8238-477d-b114-72c663cb4f87', '528ce85ce134ae0ca41aced89bf91d75d1bc9e801140fa041fbfbad64a5e089b', 0, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:49:38.952', '2026-09-11 12:49:38.953', '2026-09-11 12:49:39.224'),
(1125, 16, '69d747fe-ac6d-4c15-8b86-bcf9c44eaadd', 'c1eb98a621bc0bfe685f44dbd77236823fd23538ae55e584e2fb1fa689a84845', 1, 0, NULL, '2027-10-16 12:49:45.996', '2026-09-11 12:49:45.997', '2026-09-11 12:55:32.459'),
(1126, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', '6591752c6d59dd99efe215f49baaaff036fe842d0f15d94720dd89540ffe177c', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:51:43.883', '2026-09-11 12:51:43.884', '2026-09-15 04:32:38.653'),
(1127, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', '8ddfb5cadf515f0e1ee349549d494f15c16deae4b0c23f3d92994d3d45bb49ed', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:51:51.600', '2026-09-11 12:51:51.601', '2026-09-15 04:32:38.653'),
(1128, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', 'c2e544bdb24e8edeb576d142d6d067663b78af7493fc93f4977c96de6b9c9069', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:51:54.985', '2026-09-11 12:51:54.985', '2026-09-15 04:32:38.653'),
(1129, 2, '8f92a0af-3cb1-430f-ac5f-73820934c586', '9253478e0b1591be5e91d6ded2bffac6bb3590fbb9090dc684660a9b82c6e3b0', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:52:17.333', '2026-09-11 12:52:17.334', '2026-09-11 13:05:06.446'),
(1130, 2, '8f92a0af-3cb1-430f-ac5f-73820934c586', '69e617705345a706a09d00dad31f9080bf7ceac4b34b9255f6b42cbb131e0a77', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:52:20.676', '2026-09-11 12:52:20.677', '2026-09-11 13:05:06.446'),
(1131, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', '09957aee7f1e81c57bfdd9c7ab992500b3f983b8ee5f1c8bca7234de6dfe302e', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:52:44.549', '2026-09-11 12:52:44.550', '2026-09-15 04:32:38.653'),
(1132, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', '53feed01ecee8b447e42fff871ac3dd7dfafa254d173f636a19a0e4980c29168', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:52:47.675', '2026-09-11 12:52:47.675', '2026-09-15 04:32:38.653'),
(1133, 16, '69d747fe-ac6d-4c15-8b86-bcf9c44eaadd', '3dc888341a8d4d0726cfad279740159c24f82afeee01b80df9a387edcbb52c3e', 1, 0, NULL, '2027-10-16 12:55:33.322', '2026-09-11 12:55:33.323', '2026-09-11 12:55:34.565'),
(1134, 16, '69d747fe-ac6d-4c15-8b86-bcf9c44eaadd', 'e1d857937a9cf84b304aad5ab54ab8b715bfcf7265dc1ec4af9331c6708161b3', 1, 0, NULL, '2027-10-16 12:55:35.488', '2026-09-11 12:55:35.489', '2026-09-11 12:56:07.655'),
(1135, 1, 'c32f0bd6-23e2-4b40-9e13-a0766581f54f', '25f9d20e9d9c079d377786adab38bd9e270a87a09c6576dde77c3a20462ca759', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:55:52.459', '2026-09-11 12:55:52.460', '2026-09-11 13:08:32.085'),
(1136, 16, '69d747fe-ac6d-4c15-8b86-bcf9c44eaadd', 'f08c85d0635021b6b8ea9abc2d0c385d34f28bf43ec8789df98842f9c849eb48', 0, 0, NULL, '2027-10-16 12:56:08.414', '2026-09-11 12:56:08.415', '2026-09-11 12:56:08.415'),
(1137, 1, 'c32f0bd6-23e2-4b40-9e13-a0766581f54f', 'beb248027406eec46b251d4186901e22f910bb48f053c553243fa8d593acd399', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:57:17.426', '2026-09-11 12:57:17.427', '2026-09-11 13:08:32.085'),
(1138, 16, '6b4a2a8f-417a-4712-85af-2f2286375e58', '9bf43ff86942a51116a4a3d98a308eaf7e040c4913454b95125d820546ee88e0', 1, 0, NULL, '2027-10-16 12:57:20.719', '2026-09-11 12:57:20.720', '2026-09-11 12:58:08.825'),
(1139, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', '5733093dbd9fd93f4bc46dff886e2b6d0abbdb0e02347d17ad8cd3083a0e94b4', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:57:36.780', '2026-09-11 12:57:36.781', '2026-09-15 04:32:38.653'),
(1140, 4, '43a5bc5a-4f11-4224-830f-f10187c21acf', 'dde58e60903296f0048de0a95ecae306ab3f19fe5b19091a67c474ed4a0977ec', 0, 1, 'LOGGED_OUT', '2027-10-16 12:57:38.672', '2026-09-11 12:57:38.673', '2026-09-11 13:07:04.015'),
(1141, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', 'a09eb6d03465dc6cd3d0f7569a21b9a887a03e0dfc2b7360923b1e0915c34ce1', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:57:39.254', '2026-09-11 12:57:39.255', '2026-09-15 04:32:38.653'),
(1142, 1, 'c32f0bd6-23e2-4b40-9e13-a0766581f54f', 'f4e20c30a59d3cc9926eb5818c78c6d0f8c142515aa8ccd1b5a5a585548a23c4', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:57:39.352', '2026-09-11 12:57:39.353', '2026-09-11 13:08:32.085'),
(1143, 1, 'c32f0bd6-23e2-4b40-9e13-a0766581f54f', '4e4fbf2f191d53032ab2d4c50eac3bd46aae6577132d36c222b8737a16d271bb', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 12:57:41.734', '2026-09-11 12:57:41.735', '2026-09-11 13:08:32.085'),
(1144, 16, '6b4a2a8f-417a-4712-85af-2f2286375e58', 'd95040ce476a1c406f5333aebc5aa7654446ecd5709fe724f25c152b8bea22c6', 1, 0, NULL, '2027-10-16 12:58:09.800', '2026-09-11 12:58:09.801', '2026-09-11 12:59:07.196'),
(1145, 16, '6b4a2a8f-417a-4712-85af-2f2286375e58', '2561d239a374878fd589379bdcaefbe054b9cb3462a44d8d04a9bb80a7e61607', 1, 0, NULL, '2027-10-16 12:59:07.765', '2026-09-11 12:59:07.766', '2026-09-11 12:59:10.070'),
(1146, 16, '6b4a2a8f-417a-4712-85af-2f2286375e58', 'ea985f5d4c9dcdb368b6618692ab0b764f9c6430994e0dce294c6bbf8afad132', 1, 0, NULL, '2027-10-16 12:59:11.160', '2026-09-11 12:59:11.161', '2026-09-11 13:02:06.051'),
(1147, 2, '8f92a0af-3cb1-430f-ac5f-73820934c586', '5da4117ffacca2c46e52321d8ab30a12067ae0ca3fa004b450049051294c3d87', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 13:00:18.111', '2026-09-11 13:00:18.112', '2026-09-11 13:05:06.446'),
(1148, 2, '8f92a0af-3cb1-430f-ac5f-73820934c586', '19fe53ad6a0039e00eb2f94becfbd783a87277ad0886879fe994637e9fe82159', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 13:00:20.380', '2026-09-11 13:00:20.381', '2026-09-11 13:05:06.446'),
(1149, 2, '8f92a0af-3cb1-430f-ac5f-73820934c586', 'bbc15a7ad7c6a2d9ca4f80178d998abe72ac0b180994b56b512c7b7158835339', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 13:01:51.913', '2026-09-11 13:01:51.914', '2026-09-11 13:05:06.446'),
(1150, 2, '8f92a0af-3cb1-430f-ac5f-73820934c586', 'cecdfffd7846a53a713810612821532aafe7a1c9da6280de4ac0546f3267badc', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 13:01:55.469', '2026-09-11 13:01:55.470', '2026-09-11 13:05:06.446'),
(1151, 16, '6b4a2a8f-417a-4712-85af-2f2286375e58', '31eeb85289390dbf8078b12e5520e785da6f791fae12e73a5b02716146b30cc7', 0, 1, 'LOGGED_OUT', '2027-10-16 13:02:06.912', '2026-09-11 13:02:06.912', '2026-09-11 13:02:09.671'),
(1152, 16, 'b816a24f-d494-4253-a8df-a390524678c3', '0ccfe731c81a3e768f9d14a73ba5c43046f995152e23effd8723a3d7146a30e1', 1, 0, NULL, '2027-10-16 13:02:14.626', '2026-09-11 13:02:14.627', '2026-09-11 13:02:55.716'),
(1153, 2, '8f92a0af-3cb1-430f-ac5f-73820934c586', '591e88e4c5ad32108cd8e17be796e2ea4770d5014771549ac9413ca24c13e68b', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 13:02:22.194', '2026-09-11 13:02:22.195', '2026-09-11 13:05:06.446'),
(1154, 2, '8f92a0af-3cb1-430f-ac5f-73820934c586', '8ea6088863c02f3d9e0231470c40243ea494a54e75baa9b8a7e75851da9850fc', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 13:02:25.695', '2026-09-11 13:02:25.696', '2026-09-11 13:05:06.446'),
(1155, 16, 'b816a24f-d494-4253-a8df-a390524678c3', 'c0bcbc02cf7d41f4c049e17442a23e9b33aa2c5c7a11e6b64faca99ae4e740a3', 1, 0, NULL, '2027-10-16 13:02:56.374', '2026-09-11 13:02:56.375', '2026-09-11 13:03:10.192'),
(1156, 16, 'b816a24f-d494-4253-a8df-a390524678c3', '291c9bd0f614977350eae7dc885b03c56c9305f0be468071688a678d1393fbec', 1, 0, NULL, '2027-10-16 13:03:10.782', '2026-09-11 13:03:10.783', '2026-09-11 13:03:29.166'),
(1157, 1, 'c32f0bd6-23e2-4b40-9e13-a0766581f54f', '9b51e750a6753be17ea6854fed6409dff33986f260a2751a080c14c7beea0b7b', 1, 1, 'LOGGED_OUT', '2027-10-16 13:03:28.839', '2026-09-11 13:03:28.839', '2026-09-11 13:08:32.276'),
(1158, 16, 'b816a24f-d494-4253-a8df-a390524678c3', '6854387f6a4914a0e640f595a3670ea31217192308325fbe1f71a7511642fdd5', 1, 0, NULL, '2027-10-16 13:03:30.023', '2026-09-11 13:03:30.024', '2026-09-11 13:04:08.585'),
(1159, 16, 'b816a24f-d494-4253-a8df-a390524678c3', '86f52bca0dd160db9be8417ade00a79ae827b5fcdd045652edddfbaafac8b341', 1, 0, NULL, '2027-10-16 13:04:09.691', '2026-09-11 13:04:09.693', '2026-09-11 13:04:11.792'),
(1160, 16, 'b816a24f-d494-4253-a8df-a390524678c3', '4405539c04f505a472513ff12ebdb3994f7c900b06e783597d55789791b69f39', 1, 0, NULL, '2027-10-16 13:04:12.649', '2026-09-11 13:04:12.650', '2026-09-11 13:15:00.165'),
(1161, 2, '8f92a0af-3cb1-430f-ac5f-73820934c586', '137ae5c69d018a1b59b42ea4bf9305cd448b06e008bdf5aa08dad8daeb6da91d', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 13:04:56.718', '2026-09-11 13:04:56.719', '2026-09-11 13:05:06.446'),
(1162, 2, '8f92a0af-3cb1-430f-ac5f-73820934c586', '013fc7351b9b6ea3a167ecabf4404034326e83853075466c143dd1bf5df54537', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 13:04:58.452', '2026-09-11 13:04:58.452', '2026-09-11 13:05:06.446'),
(1163, 2, '8f92a0af-3cb1-430f-ac5f-73820934c586', '691eae2a6c86644aca4d4e77708a7430d8925dc749cf6a720f71b7733746fe69', 1, 1, 'LOGGED_OUT', '2027-10-16 13:05:03.557', '2026-09-11 13:05:03.557', '2026-09-11 13:05:07.041'),
(1164, 2, '8f92a0af-3cb1-430f-ac5f-73820934c586', 'd5c225024a4e9234382075cb2ee3bb62356a82e973f8546c93a74a0d86e42d0c', 0, 0, NULL, '2027-10-16 13:05:06.854', '2026-09-11 13:05:06.855', '2026-09-11 13:05:06.855'),
(1165, 2, '4eaa0ef5-f529-4777-97b6-b1e7bcda8a15', 'e2fcf9423ef881a435cb2e0c8be57e30a2063d64b323dd9fd9f0c9a42233be54', 1, 0, NULL, '2027-10-16 13:05:13.487', '2026-09-11 13:05:13.488', '2026-09-11 13:05:18.062'),
(1166, 2, '4eaa0ef5-f529-4777-97b6-b1e7bcda8a15', '8a2a6685b61b29a544d1a6076019b68533913fe4beb18ace06c96ce3e5c4c0d8', 1, 0, NULL, '2027-10-16 13:05:18.593', '2026-09-11 13:05:18.594', '2026-09-11 13:05:20.043'),
(1167, 2, '4eaa0ef5-f529-4777-97b6-b1e7bcda8a15', '0014bd61894dae47bc646f23534128b9410ebf3f571ec20c71e773361362058f', 1, 0, NULL, '2027-10-16 13:05:20.538', '2026-09-11 13:05:20.539', '2026-09-11 13:05:22.021'),
(1168, 2, '4eaa0ef5-f529-4777-97b6-b1e7bcda8a15', 'aca16c170a6f5569fd62223a5225dff2277d9401fec0b945f8b0ed37ddba9fdf', 1, 0, NULL, '2027-10-16 13:05:22.530', '2026-09-11 13:05:22.531', '2026-09-11 13:05:26.674'),
(1169, 2, '4eaa0ef5-f529-4777-97b6-b1e7bcda8a15', '078c005698695d631a23f2c362d3f36692debc820d39b700278d8585e8544f16', 1, 0, NULL, '2027-10-16 13:05:27.133', '2026-09-11 13:05:27.134', '2026-09-11 13:05:28.825'),
(1170, 2, '4eaa0ef5-f529-4777-97b6-b1e7bcda8a15', 'cb25fe35369935147537a749adfda1e776ce8369003dc0782c2fa87fa0a3e638', 1, 0, NULL, '2027-10-16 13:05:29.319', '2026-09-11 13:05:29.320', '2026-09-11 13:06:01.794'),
(1171, 2, '4eaa0ef5-f529-4777-97b6-b1e7bcda8a15', '20a1889de021ad79996578a37213ee29bb2109cf6c79ca8bb1668b45cbd77128', 1, 0, NULL, '2027-10-16 13:06:02.298', '2026-09-11 13:06:02.298', '2026-09-11 13:06:03.614'),
(1172, 2, '4eaa0ef5-f529-4777-97b6-b1e7bcda8a15', 'dba7e522dc590d18167a6b7dbda85f4a22b99df0720b0d8f8d9ea5c2361f12e6', 1, 0, NULL, '2027-10-16 13:06:04.124', '2026-09-11 13:06:04.125', '2026-09-11 13:06:05.919'),
(1173, 2, '4eaa0ef5-f529-4777-97b6-b1e7bcda8a15', '346eb52c6802decab494f4c4a7fd6462e40eed097e24a95e2976f482cd903e38', 1, 0, NULL, '2027-10-16 13:06:06.811', '2026-09-11 13:06:06.812', '2026-09-11 13:06:09.221'),
(1174, 2, '4eaa0ef5-f529-4777-97b6-b1e7bcda8a15', 'aa73013279cb398abeaded58766262a6f395392e9a6bccc04fe0753f4c091937', 1, 0, NULL, '2027-10-16 13:06:10.056', '2026-09-11 13:06:10.057', '2026-09-11 13:06:11.994'),
(1175, 2, '4eaa0ef5-f529-4777-97b6-b1e7bcda8a15', 'c6482f8265d1056abfbc616e4d81e685b2b803b1e6fce16da2aa514930759551', 1, 0, NULL, '2027-10-16 13:06:12.877', '2026-09-11 13:06:12.878', '2026-09-11 13:06:15.062'),
(1176, 2, '4eaa0ef5-f529-4777-97b6-b1e7bcda8a15', 'c6b3c043420ae679e9d5ec042999131c3775c1d3376537f9d5f5492137fa27d7', 1, 0, NULL, '2027-10-16 13:06:15.940', '2026-09-11 13:06:15.941', '2026-09-11 13:06:17.626'),
(1177, 2, '4eaa0ef5-f529-4777-97b6-b1e7bcda8a15', '5e7d726a18fe2089f0d48ed07a2950277d739bde4d231a3d2462f696b4f72b8f', 1, 0, NULL, '2027-10-16 13:06:18.094', '2026-09-11 13:06:18.095', '2026-09-11 13:06:20.245'),
(1178, 2, '4eaa0ef5-f529-4777-97b6-b1e7bcda8a15', 'b5815ba1d36dbf1feaff96c18e97e9ee76cbabd48c15a9ba6663598a24d53025', 1, 0, NULL, '2027-10-16 13:06:20.719', '2026-09-11 13:06:20.720', '2026-09-11 13:06:22.827'),
(1179, 2, '4eaa0ef5-f529-4777-97b6-b1e7bcda8a15', '1918b6e9ae9a619331ac2574134f62849f4f143f4f0ba8eb89bca36c80bfd210', 1, 0, NULL, '2027-10-16 13:06:23.385', '2026-09-11 13:06:23.386', '2026-09-11 13:06:28.617'),
(1180, 2, '4eaa0ef5-f529-4777-97b6-b1e7bcda8a15', '8dd3b5a408cdea4e8577a77d1101051ec9b73a051383c189231ffe754161ef8e', 1, 0, NULL, '2027-10-16 13:06:29.113', '2026-09-11 13:06:29.114', '2026-09-11 13:06:31.025'),
(1181, 2, '4eaa0ef5-f529-4777-97b6-b1e7bcda8a15', 'b7ff7bded10c9b237f509e3743ad3cf13cf51afd1c7c2f44d191c9ea5c8304f6', 1, 0, NULL, '2027-10-16 13:06:31.524', '2026-09-11 13:06:31.525', '2026-09-11 13:06:37.016'),
(1182, 2, '4eaa0ef5-f529-4777-97b6-b1e7bcda8a15', '4eb42e2add9842aca8444e406f93987bd7026f7554a8c81c7c8de2852777d1ca', 1, 0, NULL, '2027-10-16 13:06:37.513', '2026-09-11 13:06:37.513', '2026-09-11 13:06:39.447'),
(1183, 2, '4eaa0ef5-f529-4777-97b6-b1e7bcda8a15', '51a76254a5a958f397e82f17d1e27fe7843096ca475f0c6ac0722d1bc5419765', 1, 0, NULL, '2027-10-16 13:06:39.931', '2026-09-11 13:06:39.932', '2026-09-11 13:07:00.980'),
(1184, 2, '4eaa0ef5-f529-4777-97b6-b1e7bcda8a15', '717bb96727c252317902312b96323b7eda8a06e550895af03123aaa7da3f8fda', 1, 0, NULL, '2027-10-16 13:07:01.477', '2026-09-11 13:07:01.478', '2026-09-11 13:07:03.500'),
(1185, 2, '4eaa0ef5-f529-4777-97b6-b1e7bcda8a15', '291176337e694a8ebcafa7bb2599eb803f75eb7db6f79728a9e4d346a697e6d2', 0, 1, 'LOGGED_OUT', '2027-10-16 13:07:04.414', '2026-09-11 13:07:04.415', '2026-09-11 13:07:50.836'),
(1186, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', 'a7b72bfd835fca20eb242f022d4d33ed644cfc171791897224164a76c704df89', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 13:07:07.155', '2026-09-11 13:07:07.156', '2026-09-15 04:32:38.653'),
(1187, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', '2a664298a077792d06259e6400b32d15aadee0e553790597421a0afa541a0e84', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 13:07:09.531', '2026-09-11 13:07:09.532', '2026-09-15 04:32:38.653'),
(1188, 1, 'c32f0bd6-23e2-4b40-9e13-a0766581f54f', '04da5cf640683677af30f354fd3fc833f7f98dfb964409f2b43ba997b30d2ad4', 0, 1, 'LOGGED_OUT', '2027-10-16 13:08:32.364', '2026-09-11 13:08:32.365', '2026-09-11 13:08:32.836'),
(1189, 1, 'a411bd40-4491-49ce-99f5-b7c670e0d890', 'e08433d9716398e943649252bb8e472451e12509991250004d5840580162bf9e', 0, 0, NULL, '2027-10-16 13:09:05.724', '2026-09-11 13:09:05.725', '2026-09-11 13:09:05.725'),
(1190, 2, '80c0a23a-70d7-4147-a94c-27c55d830dd7', '47fe346135281b99524b4eb101c2ca0c3973a58176c291270e316433161e1283', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 13:10:29.023', '2026-09-11 13:10:29.024', '2026-09-11 13:39:48.475'),
(1191, 2, '80c0a23a-70d7-4147-a94c-27c55d830dd7', 'c3470cda4e37ac3bd8dec4b8d64875020877336baa83c317c36ef22150387802', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 13:10:57.022', '2026-09-11 13:10:57.023', '2026-09-11 13:39:48.475'),
(1192, 2, '80c0a23a-70d7-4147-a94c-27c55d830dd7', 'b9d6a2afadc29df7bc8b35e10df505b6038433132f2b7e66ac15e6222720ab1d', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 13:11:51.855', '2026-09-11 13:11:51.856', '2026-09-11 13:39:48.475'),
(1193, 2, '80c0a23a-70d7-4147-a94c-27c55d830dd7', '19eea7162eadb77995123f4cda1cd4a55522a1c742101d5c92ea3f69607be308', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 13:12:22.765', '2026-09-11 13:12:22.766', '2026-09-11 13:39:48.475'),
(1194, 2, '80c0a23a-70d7-4147-a94c-27c55d830dd7', '4d7c2719f9bbcb5aa25d2aeef6a7c7172dbad3bf2d89262b3e7f5cb680957169', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 13:12:25.846', '2026-09-11 13:12:25.847', '2026-09-11 13:39:48.475'),
(1195, 16, 'b816a24f-d494-4253-a8df-a390524678c3', '3573d177fbe42bbc6be0c81b381f0630f573920efbe3266b5efbe510e705a556', 1, 0, NULL, '2027-10-16 13:15:01.085', '2026-09-11 13:15:01.086', '2026-09-11 13:15:04.620'),
(1196, 16, 'b816a24f-d494-4253-a8df-a390524678c3', '314fe3ccf4162be26ebf4ec4d807fcdd89cb5c9fb3243117539c2f7172c7d8a3', 1, 0, NULL, '2027-10-16 13:15:05.750', '2026-09-11 13:15:05.751', '2026-09-11 13:16:32.985'),
(1197, 1, 'd61fb4f7-6250-42ec-a8ec-d9b2ac7686d4', '1a086e19c6c4e55042c29e66f9c3791a1a8c9fa9c18cf5e78e9a409122123c21', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 13:15:17.927', '2026-09-11 13:15:17.928', '2026-09-11 13:19:48.340'),
(1198, 1, 'd61fb4f7-6250-42ec-a8ec-d9b2ac7686d4', '9781c7f9d074aeaf6e157a28aed50629417cae99a8af8f13f2574a191be3bd7d', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 13:15:27.685', '2026-09-11 13:15:27.686', '2026-09-11 13:19:48.340'),
(1199, 16, 'b816a24f-d494-4253-a8df-a390524678c3', 'd860dedd712a6d13b9d99d06e89b7055bebf4001aae3685568bd5577400d1282', 1, 0, NULL, '2027-10-16 13:16:33.468', '2026-09-11 13:16:33.468', '2026-09-11 13:16:43.233'),
(1200, 16, 'b816a24f-d494-4253-a8df-a390524678c3', 'a09ac6525ae7d8928473f104fc3d72875cc4d7e34e31fc40f0c263f0e82cd5d0', 1, 0, NULL, '2027-10-16 13:16:44.376', '2026-09-11 13:16:44.377', '2026-09-11 13:16:53.154'),
(1201, 16, 'b816a24f-d494-4253-a8df-a390524678c3', 'c5958d9db710e609aee0c5c4805ae5ad63aaa5ffb30d498fe8940b1c78196683', 1, 0, NULL, '2027-10-16 13:16:53.729', '2026-09-11 13:16:53.729', '2026-09-11 13:17:03.111'),
(1202, 16, 'b816a24f-d494-4253-a8df-a390524678c3', 'df9ba295f9e2b9353499d3e5fcee1591eec216ba496d9e7f1a903a1f7b398b85', 1, 0, NULL, '2027-10-16 13:17:03.687', '2026-09-11 13:17:03.688', '2026-09-11 13:17:13.313'),
(1203, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', 'ea76e34bd15ced6361cfa46032d2de6f2cb02943ca291651510eb9a08343a775', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 13:17:09.247', '2026-09-11 13:17:09.247', '2026-09-15 04:32:38.653'),
(1204, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', '2d7c60a9b414e23d8b210ff81fbbec7ef7446bdf15b425ebbb48347cab47f1d8', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 13:17:12.651', '2026-09-11 13:17:12.652', '2026-09-15 04:32:38.653'),
(1205, 16, 'b816a24f-d494-4253-a8df-a390524678c3', 'c151f673c257fba07beefd0833a0b2c209273f81cb13fa11c12a0f374a571b8b', 1, 0, NULL, '2027-10-16 13:17:13.924', '2026-09-11 13:17:13.925', '2026-09-11 13:17:23.133'),
(1206, 16, 'b816a24f-d494-4253-a8df-a390524678c3', '22b946bd191a57f6399d48bbc756278cde2cce0ac6c7a010a7f04a5ef9b1fd81', 1, 0, NULL, '2027-10-16 13:17:24.072', '2026-09-11 13:17:24.072', '2026-09-11 13:17:33.155'),
(1207, 16, 'b816a24f-d494-4253-a8df-a390524678c3', '0ded1f3168a8f555fd594c47958d2a477625e5c1c004afb0f22761c1847d8071', 1, 0, NULL, '2027-10-16 13:17:33.766', '2026-09-11 13:17:33.767', '2026-09-11 13:17:43.207'),
(1208, 16, 'b816a24f-d494-4253-a8df-a390524678c3', '7938a123cdc7ebbf7e3d6fb9a9712d9c09da9ad050c548da3cb1244f109380a1', 1, 0, NULL, '2027-10-16 13:17:44.509', '2026-09-11 13:17:44.510', '2026-09-11 13:17:53.079'),
(1209, 16, 'b816a24f-d494-4253-a8df-a390524678c3', 'b46e36335379ebd987adfa2ccd4fc874c793a3242e06da73e17501dad348021a', 1, 0, NULL, '2027-10-16 13:17:53.598', '2026-09-11 13:17:53.599', '2026-09-11 13:18:03.170'),
(1210, 16, 'b816a24f-d494-4253-a8df-a390524678c3', '4ed79c9d859b65d49a516a2bd2950601a435476214dc8fbc9ee5cfdf82d55ba1', 1, 0, NULL, '2027-10-16 13:18:03.902', '2026-09-11 13:18:03.903', '2026-09-11 13:18:13.093'),
(1211, 16, 'b816a24f-d494-4253-a8df-a390524678c3', 'd5c253312a8a836179cd3090ddfbd80f280dc2041d9a600d18c0fc5d3db6822f', 1, 0, NULL, '2027-10-16 13:18:13.566', '2026-09-11 13:18:13.567', '2026-09-11 13:18:43.164'),
(1212, 16, 'b816a24f-d494-4253-a8df-a390524678c3', 'c7e11e391f0da2446a41bda5db44efac31516cf7610ae7283c241de38125515d', 1, 0, NULL, '2027-10-16 13:18:43.654', '2026-09-11 13:18:43.654', '2026-09-11 13:20:14.424'),
(1213, 1, 'd61fb4f7-6250-42ec-a8ec-d9b2ac7686d4', '2af9aae7c96811dd5efbfe43547617e8486f9b6c14aed898ded828f9682e3c5a', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 13:19:17.013', '2026-09-11 13:19:17.014', '2026-09-11 13:19:48.340'),
(1214, 1, 'd61fb4f7-6250-42ec-a8ec-d9b2ac7686d4', 'e76544a14119d8eb20af039d7065ef5da8924a1aa892dcc4854fce700beb4c2d', 1, 1, 'LOGGED_OUT', '2027-10-16 13:19:21.696', '2026-09-11 13:19:21.697', '2026-09-11 13:19:48.964'),
(1215, 1, 'd61fb4f7-6250-42ec-a8ec-d9b2ac7686d4', '06df24cb85bdf2e489f848c4cdeb67585aa65c8841ed0577e68ce9ad7dedcffe', 0, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 13:19:37.624', '2026-09-11 13:19:37.625', '2026-09-11 13:19:48.340'),
(1216, 1, 'abbb053f-0ef5-4195-9907-9a6399353e3d', 'ba49d0fb4d86392bca30c4b9680f55a1d92f5fee09d8e3513eccf257f3e60ad6', 1, 0, NULL, '2027-10-16 13:20:01.225', '2026-09-11 13:20:01.228', '2026-09-11 13:23:02.311'),
(1217, 16, 'b816a24f-d494-4253-a8df-a390524678c3', '2537404506dd290081b3e7864ffb8ec84b42c932531760bfc8a6902410af39c8', 1, 0, NULL, '2027-10-16 13:20:15.321', '2026-09-11 13:20:15.323', '2026-09-11 13:20:23.218'),
(1218, 16, 'b816a24f-d494-4253-a8df-a390524678c3', '97a9f19a537d07c33d903e2bb5e0ec660f7d63f8768e8baf00144f0b5bfa29e1', 1, 0, NULL, '2027-10-16 13:20:24.366', '2026-09-11 13:20:24.367', '2026-09-11 13:20:33.069'),
(1219, 16, 'b816a24f-d494-4253-a8df-a390524678c3', '0c6d3b9cfefd484a81a83696da20fc7af2366cc979739b77cfbb66a08473d03b', 1, 0, NULL, '2027-10-16 13:20:33.547', '2026-09-11 13:20:33.548', '2026-09-11 13:20:43.141'),
(1220, 2, '80c0a23a-70d7-4147-a94c-27c55d830dd7', 'ae0d59d8af11a8bfd94db9a35e4150c7a8fe41bd0f6286eb4d69aa99dbbf4fab', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 13:20:41.733', '2026-09-11 13:20:41.734', '2026-09-11 13:39:48.475'),
(1221, 16, 'b816a24f-d494-4253-a8df-a390524678c3', 'e2a523a7aa0de4638529ca11d9b47aa6898bd457f105157da2f769f4215fcda2', 1, 0, NULL, '2027-10-16 13:20:44.000', '2026-09-11 13:20:44.001', '2026-09-11 13:20:53.180'),
(1222, 16, 'b816a24f-d494-4253-a8df-a390524678c3', '3e8f2267b8c365f9b66a6e6e9f863f262e1a35b050a46618f65a7ac8c487c8db', 1, 0, NULL, '2027-10-16 13:20:53.734', '2026-09-11 13:20:53.735', '2026-09-11 13:21:03.215'),
(1223, 16, 'b816a24f-d494-4253-a8df-a390524678c3', 'fd7c69ab4f8bb875fd5536bbe11e4894bf40a70005e81ca0ee215db71a56093a', 1, 0, NULL, '2027-10-16 13:21:04.489', '2026-09-11 13:21:04.490', '2026-09-11 13:21:13.129'),
(1224, 31, '482c35d6-1481-4699-8c9e-97dffa8d2b04', 'd8a896317ec85550e56c370d6aaef63f7ac73970a0a4e63d1f224ff32d3ccab7', 1, 0, NULL, '2027-10-16 13:21:12.475', '2026-09-11 13:21:12.478', '2026-09-12 10:19:44.984'),
(1225, 16, 'b816a24f-d494-4253-a8df-a390524678c3', 'b65d300a8e6f6f251affba7aa64962e17b1b5a96503922a9963f0355e7a09d90', 1, 0, NULL, '2027-10-16 13:21:13.726', '2026-09-11 13:21:13.726', '2026-09-11 13:25:18.530'),
(1226, 4, '260128c9-cc00-4417-abec-a5f499c8898c', '92d5f92a920c79bbd2fcbee68f0e2252bf8eccb4cdf4a6a3eb48efb345f81ab4', 1, 0, NULL, '2027-10-16 13:22:34.889', '2026-09-11 13:22:34.890', '2026-09-11 13:22:51.912'),
(1227, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', 'e8d3105a15c41aa4d4630e8b024e3c4e62b589e8ce0ad2d514cc297639f7ba48', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 13:22:48.227', '2026-09-11 13:22:48.227', '2026-09-15 04:32:38.653'),
(1228, 2, '80c0a23a-70d7-4147-a94c-27c55d830dd7', 'a7834cdcec2c028f4e73564742fdfbed15235a96eb36b255ef334bdb3031f57b', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 13:22:49.549', '2026-09-11 13:22:49.550', '2026-09-11 13:39:48.475'),
(1229, 2, '80c0a23a-70d7-4147-a94c-27c55d830dd7', 'c9195d4776e5a1b6ad21aad4c18fec7cf252097d1ac37261ba20d32b4346bfc6', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 13:22:52.051', '2026-09-11 13:22:52.053', '2026-09-11 13:39:48.475'),
(1230, 4, '260128c9-cc00-4417-abec-a5f499c8898c', '711ec5e37c13c97115ad13b67de43d8e3f66ecf1c598e552018decf7582523f8', 1, 0, NULL, '2027-10-16 13:22:52.488', '2026-09-11 13:22:52.489', '2026-09-11 13:23:02.044'),
(1231, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', 'e005d1c73628052bb27d3897d6c35c9d967075e6e45b1c09523d785026e92ce0', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 13:22:52.396', '2026-09-11 13:22:52.397', '2026-09-15 04:32:38.653'),
(1232, 4, '260128c9-cc00-4417-abec-a5f499c8898c', '3b965e7cf487c39d58eb67088081365f6fabb90c186ea4d183b8f3eb4cd3ef0d', 1, 0, NULL, '2027-10-16 13:23:03.277', '2026-09-11 13:23:03.278', '2026-09-11 13:23:12.015'),
(1233, 1, 'abbb053f-0ef5-4195-9907-9a6399353e3d', 'd6f059ac3154c53373ebfce09ca3b726faa9fa5d638fbb4d055b59e1e1e6833c', 0, 0, NULL, '2027-10-16 13:23:03.461', '2026-09-11 13:23:03.462', '2026-09-11 13:23:03.462'),
(1234, 2, '80c0a23a-70d7-4147-a94c-27c55d830dd7', 'bb9c8b13ca603db1324d4c05d23e3ea3f8b79f4cbae7826d90f486fbc541bac3', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 13:23:12.142', '2026-09-11 13:23:12.143', '2026-09-11 13:39:48.475'),
(1235, 4, '260128c9-cc00-4417-abec-a5f499c8898c', 'ad825e90678e896d4a86c393e15e914ed446de41ce659795ffb93ed86c9ab58a', 1, 0, NULL, '2027-10-16 13:23:12.700', '2026-09-11 13:23:12.701', '2026-09-11 13:23:21.990'),
(1236, 2, '80c0a23a-70d7-4147-a94c-27c55d830dd7', '57b06387dcf9a5608d2e6b4b59baae56971987a1f1a556e822d83a093153eb56', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 13:23:14.666', '2026-09-11 13:23:14.667', '2026-09-11 13:39:48.475'),
(1237, 4, '260128c9-cc00-4417-abec-a5f499c8898c', 'f073031918d9a67eeaf4eb07337e16ba3f3db30a982b895d010036a952dee1ab', 1, 0, NULL, '2027-10-16 13:23:22.495', '2026-09-11 13:23:22.496', '2026-09-11 13:23:31.990'),
(1238, 2, '80c0a23a-70d7-4147-a94c-27c55d830dd7', 'f4a0186919ee551a2efc45b99d7506e9c780f7b5f8f187e747456f28ef28b0c7', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 13:23:23.877', '2026-09-11 13:23:23.878', '2026-09-11 13:39:48.475'),
(1239, 2, '80c0a23a-70d7-4147-a94c-27c55d830dd7', '799d5f10c58233c00f8161863fc33d2f10461e7651e83c33b42e134172654a34', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 13:23:26.027', '2026-09-11 13:23:26.028', '2026-09-11 13:39:48.475'),
(1240, 2, '80c0a23a-70d7-4147-a94c-27c55d830dd7', '3eedfdc8857fa0346194980b723413325833d990137a9c4083c75a7e4611c76b', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 13:23:31.517', '2026-09-11 13:23:31.518', '2026-09-11 13:39:48.475'),
(1241, 4, '260128c9-cc00-4417-abec-a5f499c8898c', '5e3ce722c51fecebd5f1cc6e42280535fa8e10579511d2e57fae8096db1991dd', 1, 0, NULL, '2027-10-16 13:23:32.452', '2026-09-11 13:23:32.452', '2026-09-11 13:23:42.053'),
(1242, 2, '80c0a23a-70d7-4147-a94c-27c55d830dd7', '85b3513c21d145c32accef65e090fdeda22ca9731262dbeb8e2167615941fbfb', 1, 1, 'LOGGED_OUT', '2027-10-16 13:23:33.719', '2026-09-11 13:23:33.720', '2026-09-11 13:39:49.163'),
(1243, 4, '260128c9-cc00-4417-abec-a5f499c8898c', '832de446dea991927c5eeba813fbd34dcc4aff90be1709e609440f2bad05fbb3', 1, 0, NULL, '2027-10-16 13:23:42.941', '2026-09-11 13:23:42.942', '2026-09-11 13:23:52.041'),
(1244, 4, '260128c9-cc00-4417-abec-a5f499c8898c', 'f5a60237b71d191000ecc39738513c562e7eca1735893cb06fc602fc95dfd684', 1, 0, NULL, '2027-10-16 13:23:52.651', '2026-09-11 13:23:52.652', '2026-09-11 13:24:01.988'),
(1245, 4, '260128c9-cc00-4417-abec-a5f499c8898c', 'd07986e1fa5eceee783ddb048f2a15b5dc1874a58453bf1e2baf1af113e43df2', 1, 0, NULL, '2027-10-16 13:24:02.488', '2026-09-11 13:24:02.489', '2026-09-11 13:24:11.981'),
(1246, 4, '260128c9-cc00-4417-abec-a5f499c8898c', '883eee1210c83c4e7c4abfedb82a86726b26032280f808558763325a18434354', 1, 0, NULL, '2027-10-16 13:24:12.455', '2026-09-11 13:24:12.456', '2026-09-11 13:24:21.992'),
(1247, 4, '260128c9-cc00-4417-abec-a5f499c8898c', '2cade72567f567c2124dd14b7a7463c00ae190b4537d292bd2b7c6853856c024', 1, 0, NULL, '2027-10-16 13:24:22.492', '2026-09-11 13:24:22.493', '2026-09-11 13:24:32.106'),
(1248, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', '5e285f940735cb97471505bf54b206eca79f7150c03311d75be9b7e3dfc9d23f', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 13:24:24.336', '2026-09-11 13:24:24.337', '2026-09-15 04:32:38.653'),
(1249, 4, '260128c9-cc00-4417-abec-a5f499c8898c', '9ba2e9dcbdfa5298b69ae392101526409d7cdd22bfa4c9e8b339345022a2bd83', 0, 1, 'LOGGED_OUT', '2027-10-16 13:24:33.198', '2026-09-11 13:24:33.199', '2026-09-11 13:47:08.573'),
(1250, 16, 'b816a24f-d494-4253-a8df-a390524678c3', '735f3b7b3871a96bb2b553ff3d5e62ef0008c4180fc9101598594ed6a0f5b3f0', 1, 0, NULL, '2027-10-16 13:25:19.185', '2026-09-11 13:25:19.186', '2026-09-12 04:04:56.502'),
(1251, 1, 'beec6ecb-1dba-4e6d-9ce3-489011a8673d', '4fb1d93b00b099d925e6159b29aad56d01c46d706101ad5a1715c4a6e0c6a529', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 13:33:13.821', '2026-09-11 13:33:13.822', '2026-09-11 17:45:24.344'),
(1252, 2, 'a95f7b86-a61d-4505-b09f-e990fff716f0', '133751fed0b0cfac1f1ad1511b9df55c42dffb55f5a3b2023823ca7cd7befa8e', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 13:39:32.224', '2026-09-11 13:39:32.225', '2026-09-15 12:14:32.543'),
(1253, 2, '80c0a23a-70d7-4147-a94c-27c55d830dd7', 'a04bcb24db8fd09a7e470093d7e5f5a31ea9f3ad62bab8885c88387dcb31d2f1', 0, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 13:39:45.239', '2026-09-11 13:39:45.240', '2026-09-11 13:39:48.475'),
(1254, 2, 'a95f7b86-a61d-4505-b09f-e990fff716f0', '44cd0089bfc1198a2ecf901fa96d937d967d57b99d6099c06af083503601e09d', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 13:45:38.642', '2026-09-11 13:45:38.643', '2026-09-15 12:14:32.543'),
(1255, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', 'dcd4c82f1a514f70ca0c7cda929b4a9c2451e9c6ed5ff434c222714a53906968', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 13:46:33.364', '2026-09-11 13:46:33.365', '2026-09-15 04:32:38.653'),
(1256, 4, '488bbeaa-c121-4f62-bd2f-630a17ebd0c6', '9833c8c8693da59f06975a7eb3749faa92ed665298c4c34abeb8df2c00acde61', 0, 1, 'LOGGED_OUT', '2027-10-16 13:47:41.328', '2026-09-11 13:47:41.328', '2026-09-11 13:47:51.352'),
(1257, 2, 'a95f7b86-a61d-4505-b09f-e990fff716f0', 'f70e4e1590119924f8f4e5c22d72e33fecaf86aa8292c14efb698133ea4343f1', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 13:48:12.424', '2026-09-11 13:48:12.425', '2026-09-15 12:14:32.543'),
(1258, 4, 'a3feef8f-d100-47a9-af29-e6153770afee', 'acd1655eac711addd4c6e582c5496e1c4d4b4aa8ea31dfa5b1c41b9accd2f60f', 1, 0, NULL, '2027-10-16 13:48:13.822', '2026-09-11 13:48:13.824', '2026-09-12 04:02:54.106'),
(1259, 2, 'a95f7b86-a61d-4505-b09f-e990fff716f0', 'abe873ebb8c9717bb29821c3fe15e794c58576e92fd5bd28e177463c0146a18b', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 13:48:16.259', '2026-09-11 13:48:16.259', '2026-09-15 12:14:32.543'),
(1260, 1, 'beec6ecb-1dba-4e6d-9ce3-489011a8673d', 'ebfc5f014ce41f0a8e06b9563bf076de7303757edef71ba847376f3e3907e2f8', 1, 1, 'LOGGED_OUT', '2027-10-16 13:50:20.979', '2026-09-11 13:50:20.980', '2026-09-11 17:45:24.929'),
(1261, 1, '5976ce4d-0052-42b1-b9b5-899c74b330fc', '0af89602649f50441604f2f1881497f023b67be1265d6ef619212e74e4a4ba06', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 14:32:30.921', '2026-09-11 14:32:30.922', '2026-09-11 22:26:05.361'),
(1262, 1, '5976ce4d-0052-42b1-b9b5-899c74b330fc', 'a87332a9aa428ee5d407e24fdfbdb3c4af336f5b68c5427b6cd97bcc326ef3f4', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 14:32:48.931', '2026-09-11 14:32:48.931', '2026-09-11 22:26:05.361'),
(1263, 1, '5976ce4d-0052-42b1-b9b5-899c74b330fc', '6a5a609535f50ef737ed54a451ab75dd98aee95a9c667117a783608eda94fd34', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 14:32:51.424', '2026-09-11 14:32:51.425', '2026-09-11 22:26:05.361'),
(1264, 1, '5976ce4d-0052-42b1-b9b5-899c74b330fc', '4b0b53bf2de5eece7bbe2b0fcbf78bc5152b4f7e663aa2dd2003e40d7b2543f6', 1, 1, 'LOGGED_OUT', '2027-10-16 14:35:34.429', '2026-09-11 14:35:34.429', '2026-09-11 22:26:06.221'),
(1265, 1, '5976ce4d-0052-42b1-b9b5-899c74b330fc', '6294d787d21e86a08b55b9ef47d49e490d1fe73419a486d8ae766389cdadf20e', 0, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 15:18:11.860', '2026-09-11 15:18:11.860', '2026-09-11 22:26:05.361'),
(1266, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', '9459e496abc248c7adf28ddf05adb49e088a5f6df8d3dcdeb95978d9645d80b9', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-16 16:42:49.411', '2026-09-11 16:42:49.412', '2026-09-15 04:32:38.653'),
(1267, 1, 'beec6ecb-1dba-4e6d-9ce3-489011a8673d', '3bc7e43e712fcb90172b4233ed934265249451def49721f1d19ed106ebc65e92', 0, 0, NULL, '2027-10-16 17:45:25.129', '2026-09-11 17:45:25.130', '2026-09-11 17:45:25.130');
INSERT INTO `AuthSession` (`id`, `employee_id`, `family_token`, `refresh_token_hash`, `consumed`, `revoked`, `revocation_reason`, `expires_at`, `created_at`, `updated_at`) VALUES
(1268, 1, 'b5e86582-02bc-4daf-92c0-e8ae04df00b6', 'e7b03c81bef4ff70df658eecfccf415bfd4a17e2b285e44ea2f9e4f0a9a065d6', 1, 0, NULL, '2027-10-16 22:25:46.662', '2026-09-11 22:25:46.663', '2026-09-12 09:31:21.912'),
(1269, 2, 'a95f7b86-a61d-4505-b09f-e990fff716f0', '452c1cfaa07bbaf7f8fe02649b3bcbb4de736b686f9edd4ab3f3e77327f22ef9', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-17 03:55:27.718', '2026-09-12 03:55:27.719', '2026-09-15 12:14:32.543'),
(1270, 2, 'a95f7b86-a61d-4505-b09f-e990fff716f0', '9a480cd23c814d92bf6db31d24ecb2d52d5430fcb606c56ee999fae328f0fc1b', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-17 03:55:31.522', '2026-09-12 03:55:31.523', '2026-09-15 12:14:32.543'),
(1271, 4, 'a3feef8f-d100-47a9-af29-e6153770afee', 'b651e406f47dc79e42ac4c4ec8c8ae0c100837f01a622e08c410ff4ea47bbf7f', 1, 0, NULL, '2027-10-17 04:02:54.983', '2026-09-12 04:02:54.984', '2026-09-12 11:25:00.516'),
(1272, 16, 'b816a24f-d494-4253-a8df-a390524678c3', '394052f13f12214bd7de41d0615ec95ed14256a8a7dceaf6b4b2879ba523d152', 1, 0, NULL, '2027-10-17 04:04:57.376', '2026-09-12 04:04:57.377', '2026-09-12 04:04:59.555'),
(1273, 16, 'b816a24f-d494-4253-a8df-a390524678c3', 'dfe105e5306181c9c41252a9de97fccb3b35c638eb8e56db7dec81aea71f85a2', 0, 0, NULL, '2027-10-17 04:05:00.381', '2026-09-12 04:05:00.382', '2026-09-12 04:05:00.382'),
(1274, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', '5a0e10716976c244abd50bc0cafb73728e916c27f18c8006dc9294d375c1db8b', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-17 04:42:15.333', '2026-09-12 04:42:15.333', '2026-09-15 04:32:38.653'),
(1275, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', '66e1ecb3aecbb6f01d18938066cb40b9939b71adc1538d3f3be6f8026052a539', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-17 04:42:19.951', '2026-09-12 04:42:19.952', '2026-09-15 04:32:38.653'),
(1276, 2, 'e12df413-3784-4161-8781-2d3b2b348954', 'a0ed37c50f5b327ccd25fb634791e6faf31378e78277d5f59738dba32cabeadc', 1, 0, NULL, '2027-10-17 05:39:50.315', '2026-09-12 05:39:50.316', '2026-09-12 05:40:08.636'),
(1277, 2, 'e12df413-3784-4161-8781-2d3b2b348954', '18366b9ccb81392941a70ed59b288db0195dde5325ff091dc55f605b191865a5', 1, 0, NULL, '2027-10-17 05:40:09.563', '2026-09-12 05:40:09.563', '2026-09-12 05:40:11.581'),
(1278, 2, 'e12df413-3784-4161-8781-2d3b2b348954', '7e2571c73c15a78e5cd1d87af03d8c73a0d480a9ba6f1e28eb936a55ade88227', 1, 0, NULL, '2027-10-17 05:40:12.106', '2026-09-12 05:40:12.107', '2026-09-12 06:41:02.086'),
(1279, 1, '8cfbcf4d-0fb8-4f1b-b1f4-e12b3f3d2fd1', '8bbe68cbffeebc019d8a2982e898dc3dd4dcee0c7f1f5a62427a32dfcd04696c', 0, 0, NULL, '2027-10-17 06:39:51.991', '2026-09-12 06:39:51.992', '2026-09-12 06:39:51.992'),
(1280, 2, 'e12df413-3784-4161-8781-2d3b2b348954', 'c6a291301451da596fdb3d1e2d0d77242548e0a63dc5eb5879270df811ae5a50', 1, 0, NULL, '2027-10-17 06:41:03.038', '2026-09-12 06:41:03.039', '2026-09-12 08:35:21.294'),
(1281, 2, 'e12df413-3784-4161-8781-2d3b2b348954', '740b495bc91629767a1092cf5a5c71d4ca2570718eb153373ef6bcd03a65cba7', 1, 0, NULL, '2027-10-17 08:35:22.194', '2026-09-12 08:35:22.195', '2026-09-12 12:00:04.902'),
(1282, 17, '7043c9ec-c87f-40a1-b28e-676d64ce40c7', 'e70007b6ff8edeb040a212cdf60e64a328f89140f32392a2458e1f6ec099f10c', 0, 1, 'LOGGED_OUT', '2027-10-17 08:41:57.207', '2026-09-12 08:41:57.208', '2026-09-12 08:42:19.228'),
(1283, 17, '9ff89e35-0741-4852-a5b7-47c70e015fe6', 'adf441bf0cd5cb6cc7a809dfb1139c8a89b7de8e12e83a7ff9a30337bfc0f44f', 1, 0, NULL, '2027-10-17 08:43:08.588', '2026-09-12 08:43:08.589', '2026-09-12 08:43:12.555'),
(1284, 17, '9ff89e35-0741-4852-a5b7-47c70e015fe6', '7a41021965502e1f2b5946ba1fddf2c96e79b744516e6e7974fb03336d28d211', 1, 0, NULL, '2027-10-17 08:43:13.150', '2026-09-12 08:43:13.151', '2026-09-12 08:43:35.692'),
(1285, 17, '9ff89e35-0741-4852-a5b7-47c70e015fe6', '2f8c69e849a629b0a9e94f13e7c679af1d3e203dd78c539febe31fe0bab27488', 1, 0, NULL, '2027-10-17 08:43:36.632', '2026-09-12 08:43:36.633', '2026-09-12 08:43:39.736'),
(1286, 17, '9ff89e35-0741-4852-a5b7-47c70e015fe6', '86d854286ebbab1eac4bf63dcfbffbd73f33e44de20ffdd01f2f7fe31f094f69', 1, 0, NULL, '2027-10-17 08:43:40.239', '2026-09-12 08:43:40.240', '2026-09-12 11:58:20.295'),
(1287, 17, 'c09dc281-d395-4d0c-a9c4-b66f51f6e2f4', 'b71e7e79f1816f558d54ef647f8eb66156b60c9bb3dbddac5336694e718bac82', 0, 0, NULL, '2027-10-17 09:23:55.783', '2026-09-12 09:23:55.784', '2026-09-12 09:23:55.784'),
(1288, 1, 'b5e86582-02bc-4daf-92c0-e8ae04df00b6', 'efc5a0de2f073213dc187c33be10d3b4be07fb82a04fa283908adc437d244c48', 1, 0, NULL, '2027-10-17 09:31:22.778', '2026-09-12 09:31:22.779', '2026-09-12 09:31:24.694'),
(1289, 1, 'b5e86582-02bc-4daf-92c0-e8ae04df00b6', '30ffbe4e7fae40428392163b8209c909190473231de87b265efcdc26e6394000', 0, 0, NULL, '2027-10-17 09:31:25.567', '2026-09-12 09:31:25.567', '2026-09-12 09:31:25.567'),
(1290, 31, '482c35d6-1481-4699-8c9e-97dffa8d2b04', '80711e0a9e24e7d636f482f4857cea59625d37e85cb9262f576a3942f1b492b7', 1, 0, NULL, '2027-10-17 10:19:45.910', '2026-09-12 10:19:45.911', '2026-09-12 10:19:48.040'),
(1291, 31, '482c35d6-1481-4699-8c9e-97dffa8d2b04', '3a3931513e86633f21ad6ccdcdbdfd6b4d62e632d7a013db5c7308ef05164419', 1, 0, NULL, '2027-10-17 10:19:48.927', '2026-09-12 10:19:48.928', '2026-09-12 10:22:19.681'),
(1292, 31, '482c35d6-1481-4699-8c9e-97dffa8d2b04', 'fc757368ee6ed21ee772f1eda323c69721074f8933a0386dd8b980831d67be64', 1, 0, NULL, '2027-10-17 10:22:20.601', '2026-09-12 10:22:20.602', '2026-09-12 10:22:22.526'),
(1293, 31, '482c35d6-1481-4699-8c9e-97dffa8d2b04', '64aa530a0a7f9aecc486417e213a6d25d8360647d4ba93722e3e795f22d86408', 0, 0, NULL, '2027-10-17 10:22:23.082', '2026-09-12 10:22:23.082', '2026-09-12 10:22:23.082'),
(1294, 4, 'a3feef8f-d100-47a9-af29-e6153770afee', '4c1d6089a8bb255ce026eadb2e4d1331a5512ef991bd91cca9f2310889558ff4', 1, 0, NULL, '2027-10-17 11:25:01.399', '2026-09-12 11:25:01.400', '2026-09-12 11:25:21.482'),
(1295, 4, 'a3feef8f-d100-47a9-af29-e6153770afee', '3474bb7a0e74d8d966554b6bb0ee57120781c6bdf9431f3223c935ddc2353fa2', 1, 0, NULL, '2027-10-17 11:25:22.366', '2026-09-12 11:25:22.367', '2026-09-12 12:21:31.675'),
(1296, 1, '226642a2-25ff-4990-afb8-b3371ba08f6d', 'cd7700d5463226b94eecb656260e81d2b9f6f16e7236e33b377c908bf73f569b', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-17 11:46:40.526', '2026-09-12 11:46:40.546', '2026-09-14 07:41:55.399'),
(1297, 17, '9ff89e35-0741-4852-a5b7-47c70e015fe6', 'abbd508ef40956b59e6338cd972c33b38171fc22c3f9ca6eed2c07bbe320ee4b', 0, 1, 'LOGGED_OUT', '2027-10-17 11:58:21.128', '2026-09-12 11:58:21.129', '2026-09-12 11:58:49.768'),
(1298, 2, 'e12df413-3784-4161-8781-2d3b2b348954', '0ded61d36e45222e1f6f738637b4b9d3bf80cc6d2d41c307af5b57f6370e15d5', 1, 0, NULL, '2027-10-17 12:00:06.081', '2026-09-12 12:00:06.081', '2026-09-12 12:28:00.029'),
(1299, 2, 'a95f7b86-a61d-4505-b09f-e990fff716f0', '901e5410ed980e532bf28fd065dc599e355e48b26e5133c2b72c74a8e9e64a73', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-17 12:08:15.413', '2026-09-12 12:08:15.414', '2026-09-15 12:14:32.543'),
(1300, 2, 'a95f7b86-a61d-4505-b09f-e990fff716f0', '279e83487b78bbbdf6fa6f7f3abba16655d70dd94aec5477bf59d2449c24cafa', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-17 12:08:20.110', '2026-09-12 12:08:20.111', '2026-09-15 12:14:32.543'),
(1301, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', '2a40fc1fd58f2386d07846ec899df037885587a30757a2776a43f648cc473ab0', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-17 12:11:08.429', '2026-09-12 12:11:08.429', '2026-09-15 04:32:38.653'),
(1302, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', '04f50a5d184dc839fdc3465a07f40bb9d68cc9fbe9b3d1ebd89a5182dd12bef3', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-17 12:11:11.744', '2026-09-12 12:11:11.745', '2026-09-15 04:32:38.653'),
(1303, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', 'f9e5121c57063c068e7027558e759593d58f74dc3eaec2fdabfe4bd2bad20439', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-17 12:19:58.295', '2026-09-12 12:19:58.295', '2026-09-15 04:32:38.653'),
(1304, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', '462c2fc595cd04cb669655c6c78f1d54abc817c8f94eddafe4993683ffc9e1ce', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-17 12:21:12.869', '2026-09-12 12:21:12.869', '2026-09-15 04:32:38.653'),
(1305, 4, 'a3feef8f-d100-47a9-af29-e6153770afee', '0b7c0f4b534f70f8f9fb4c04aa4f058a7de77474cec324198a1072edfaf1d935', 1, 0, NULL, '2027-10-17 12:21:32.789', '2026-09-12 12:21:32.790', '2026-09-12 12:32:30.740'),
(1306, 2, 'e12df413-3784-4161-8781-2d3b2b348954', '8a6bf8963d0502ef374c696c2ce3b928bb9861e48b9028d6c2d8e105d6903a9a', 1, 0, NULL, '2027-10-17 12:28:00.865', '2026-09-12 12:28:00.865', '2026-09-12 12:30:19.024'),
(1307, 2, 'a95f7b86-a61d-4505-b09f-e990fff716f0', '718c3fc846fac562a9fbf7a3bf1a1ff7e0ce8796253836abc5a2834cd05f9887', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-17 12:30:09.661', '2026-09-12 12:30:09.661', '2026-09-15 12:14:32.543'),
(1308, 2, 'a95f7b86-a61d-4505-b09f-e990fff716f0', '45d653cf7523820f1dc7a347883e246ff794d33320e0aeb7adc04b4dea3e60ed', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-17 12:30:19.049', '2026-09-12 12:30:19.050', '2026-09-15 12:14:32.543'),
(1309, 2, 'e12df413-3784-4161-8781-2d3b2b348954', '4b7d306ebe57a07567d14880b758eb8d6163ff7621e41c67516e55d09dfe355a', 1, 0, NULL, '2027-10-17 12:30:20.066', '2026-09-12 12:30:20.067', '2026-09-15 03:58:58.607'),
(1310, 2, 'a95f7b86-a61d-4505-b09f-e990fff716f0', '5f0194b4c79e5ee4362049a6ee71befa7f320bef5dce0536ddf4fb1573465240', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-17 12:30:28.737', '2026-09-12 12:30:28.738', '2026-09-15 12:14:32.543'),
(1311, 2, 'a95f7b86-a61d-4505-b09f-e990fff716f0', '89386c5565d8d8e3962f9d07286c885568ad616384270832e1390388949b304b', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-17 12:30:39.006', '2026-09-12 12:30:39.007', '2026-09-15 12:14:32.543'),
(1312, 2, 'a95f7b86-a61d-4505-b09f-e990fff716f0', '4fd6b582bfe183f7bdac5ed4d62fc27b79c1aaa2b90b0699c12699d7a727d43a', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-17 12:31:02.231', '2026-09-12 12:31:02.232', '2026-09-15 12:14:32.543'),
(1313, 2, 'a95f7b86-a61d-4505-b09f-e990fff716f0', 'c17ad4ebd61bffab6a985259b2f71a84dbe7c9530222a8197f54e32f5e4d1032', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-17 12:31:09.746', '2026-09-12 12:31:09.747', '2026-09-15 12:14:32.543'),
(1314, 4, 'a3feef8f-d100-47a9-af29-e6153770afee', '3fd19bd1463e21c29ef038887c4383a114a022818b043b1470651184ba14080f', 0, 1, 'LOGGED_OUT', '2027-10-17 12:32:31.872', '2026-09-12 12:32:31.872', '2026-09-12 12:33:37.361'),
(1315, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', 'f44c55b39f0d91e045708bce20ef4d4b433c7c478b1b641680255312133f3891', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-17 12:33:36.526', '2026-09-12 12:33:36.527', '2026-09-15 04:32:38.653'),
(1316, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', '382d0e3355d431d890406df1cb5a35322e8c218d041444e811feee14071cc756', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-17 12:33:38.822', '2026-09-12 12:33:38.823', '2026-09-15 04:32:38.653'),
(1317, 4, '22915fa7-47d4-4018-988b-1cb916a07fa6', 'e3ec550e50dfcfacb789add7957238486f9ee5f59806e0b42a582b5173553821', 1, 0, NULL, '2027-10-17 12:34:09.428', '2026-09-12 12:34:09.429', '2026-09-13 09:09:02.193'),
(1318, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', '963e51568c859f94be939c668a0808e16e1ea25c82007ae32edd8b86f277c3e3', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-18 06:18:29.862', '2026-09-13 06:18:29.863', '2026-09-15 04:32:38.653'),
(1319, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', '89bdb28e00a98e62ba558728c4643a54c1b0e4dfc49d4606adab4173abc20741', 1, 1, 'LOGGED_OUT', '2027-10-18 06:18:34.077', '2026-09-13 06:18:34.077', '2026-09-15 04:32:39.510'),
(1320, 4, '22915fa7-47d4-4018-988b-1cb916a07fa6', 'c5651c8cefae1a47ac574bbc385bea70a14146248c5f9ebaf3f2653e8967a88a', 1, 0, NULL, '2027-10-18 09:09:03.108', '2026-09-13 09:09:03.109', '2026-09-15 04:41:57.475'),
(1321, 1, '0c8f1893-0def-4b9e-b256-a8aa8350de24', 'f07c1961ac92fff8932b954d70ca44fe219de2253bcf5b88f23ccb79a3711954', 1, 0, NULL, '2027-10-18 10:58:59.969', '2026-09-13 10:58:59.970', '2026-09-13 10:59:14.362'),
(1322, 1, '0c8f1893-0def-4b9e-b256-a8aa8350de24', '4a62a227fc30f56250d681a4251589944effc0dd6d9cba5c49e6562a16f54c78', 1, 0, NULL, '2027-10-18 10:59:15.217', '2026-09-13 10:59:15.221', '2026-09-13 11:01:50.700'),
(1323, 1, '0c8f1893-0def-4b9e-b256-a8aa8350de24', '132a5b78b329cbb70ddf2813cec56d741fe3d92246a6a74656d0ca02e90a8835', 1, 0, NULL, '2027-10-18 11:01:51.571', '2026-09-13 11:01:51.571', '2026-09-13 11:02:17.008'),
(1324, 1, '0c8f1893-0def-4b9e-b256-a8aa8350de24', '5ffa7c1db06a8125fa2590756a99e05ce58138ba1f9ef66a4715242a31a113be', 1, 0, NULL, '2027-10-18 11:02:18.107', '2026-09-13 11:02:18.108', '2026-09-13 11:02:32.144'),
(1325, 1, '0c8f1893-0def-4b9e-b256-a8aa8350de24', 'ea5f0a74acd7c349e564f64d33da5b74871fae9cab7928f7251477df59b5901d', 1, 0, NULL, '2027-10-18 11:02:32.645', '2026-09-13 11:02:32.646', '2026-09-13 11:02:46.188'),
(1326, 1, '0c8f1893-0def-4b9e-b256-a8aa8350de24', 'b3793499767856a5af1fda50b13320d5457972019297449bce9be72272607a32', 1, 0, NULL, '2027-10-18 11:02:46.677', '2026-09-13 11:02:46.678', '2026-09-13 11:02:47.617'),
(1327, 1, '0c8f1893-0def-4b9e-b256-a8aa8350de24', '84d89c74890c163056c7ffd3293709b3e437740869766b00ded8adc7b1b137a9', 1, 0, NULL, '2027-10-18 11:02:48.067', '2026-09-13 11:02:48.068', '2026-09-13 11:06:31.124'),
(1328, 1, '0c8f1893-0def-4b9e-b256-a8aa8350de24', '17b252c254aa66bd078cd9577ee77a1f7a5bc868ea443027fa2ca5f1e4ca83a1', 1, 0, NULL, '2027-10-18 11:06:32.397', '2026-09-13 11:06:32.398', '2026-09-13 11:07:00.746'),
(1329, 1, '0c8f1893-0def-4b9e-b256-a8aa8350de24', 'bbddffc86ceb8c9417367a90e8173e9309c204b2a80091b9d91a8579dc79acf6', 1, 0, NULL, '2027-10-18 11:07:01.563', '2026-09-13 11:07:01.563', '2026-09-13 11:08:05.943'),
(1330, 1, '0c8f1893-0def-4b9e-b256-a8aa8350de24', 'f9e099c129fb2ea66ea011a783f8375076ece5e21a4e07ac9809f4e81311952a', 1, 0, NULL, '2027-10-18 11:08:06.952', '2026-09-13 11:08:06.953', '2026-09-13 11:08:15.749'),
(1331, 1, '0c8f1893-0def-4b9e-b256-a8aa8350de24', '5ccb9a484b25e607c82a6ae2d4d38785cc1e668d9fe60cb8915ced035ad51da3', 0, 0, NULL, '2027-10-18 11:08:16.373', '2026-09-13 11:08:16.374', '2026-09-13 11:08:16.374'),
(1332, 1, '8e4e31d5-c16f-4964-9d3f-35eb281b52b2', '6d34795f2e01031e57b3f4eef0070df9ba518d24b0026127bf80ff5c8c3cb1c8', 1, 0, NULL, '2027-10-18 14:25:04.058', '2026-09-13 14:25:04.059', '2026-09-13 14:25:27.186'),
(1333, 1, '8e4e31d5-c16f-4964-9d3f-35eb281b52b2', '3aaf559ea706b5aa24eb71531c1246ac85f9fca76c7b791ce7f3ad1213589c62', 1, 0, NULL, '2027-10-18 14:25:27.994', '2026-09-13 14:25:27.995', '2026-09-13 14:25:29.927'),
(1334, 1, '8e4e31d5-c16f-4964-9d3f-35eb281b52b2', 'e4c5430c10b4cfbbd5872a2663fe7ffdf0bf9c1e86d7e0e941869fc73bc33d32', 0, 0, NULL, '2027-10-18 14:25:30.775', '2026-09-13 14:25:30.776', '2026-09-13 14:25:30.776'),
(1335, 1, 'ef592691-dc39-4dd4-9a6c-c442c5e7435c', '61a9d813668b6b88a8f0a567bca8f213b6d157765d2e4f8c66caa470c9435bc4', 1, 0, NULL, '2027-10-19 03:48:38.695', '2026-09-14 03:48:38.696', '2026-09-15 04:50:58.851'),
(1336, 1, '226642a2-25ff-4990-afb8-b3371ba08f6d', '7f8bbe913af34e4042976f011a524daa8cde64b1f7cf8d49afd3401365cedd84', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-19 04:51:44.014', '2026-09-14 04:51:44.015', '2026-09-14 07:41:55.399'),
(1337, 1, '226642a2-25ff-4990-afb8-b3371ba08f6d', '4ba3d4f26b2b260bd3bd952bd8bd33b6de5a2345975bc678f95c2ffbb7fdcbda', 1, 0, NULL, '2027-10-19 07:41:55.961', '2026-09-14 07:41:55.962', '2026-09-14 07:41:57.233'),
(1338, 1, '226642a2-25ff-4990-afb8-b3371ba08f6d', '15152b2b6aa2d9e8d6c309609f672d95849d8108e52359434b277fd4b15fd2ce', 1, 0, NULL, '2027-10-19 07:41:58.378', '2026-09-14 07:41:58.379', '2026-09-15 04:50:07.053'),
(1339, 2, 'e12df413-3784-4161-8781-2d3b2b348954', '7ffc1a1c2e09c9d36ecf513940d8dc2ff574bd3e9dbcccb1fd74667f2b74b0dc', 1, 0, NULL, '2027-10-20 03:58:59.808', '2026-09-15 03:58:59.809', '2026-09-15 04:32:38.392'),
(1340, 2, 'a95f7b86-a61d-4505-b09f-e990fff716f0', '4483eb0a00f79935900c22883ff56a5d40dcdcea3e8c465a0b1f1766d831d424', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-20 03:59:00.055', '2026-09-15 03:59:00.059', '2026-09-15 12:14:32.543'),
(1341, 2, 'a95f7b86-a61d-4505-b09f-e990fff716f0', 'c9cdd1288a1dfa4754eea4235889d538086b3a1420c933659b2b795c3060c639', 1, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-20 03:59:03.976', '2026-09-15 03:59:03.977', '2026-09-15 12:14:32.543'),
(1342, 2, 'a95f7b86-a61d-4505-b09f-e990fff716f0', 'e51720dec056f8bf7da9a8bb3f959dae32d90c03d9d172fa6d4e4908e542e32c', 1, 1, 'LOGGED_OUT', '2027-10-20 03:59:11.542', '2026-09-15 03:59:11.543', '2026-09-15 12:14:33.213'),
(1343, 2, 'a95f7b86-a61d-4505-b09f-e990fff716f0', 'dad1406060c7da1c468848630a8989fc15b1641028b069c00b5b80739145997b', 0, 1, 'REFRESH_TOKEN_REUSE_DETECTED', '2027-10-20 03:59:21.746', '2026-09-15 03:59:21.747', '2026-09-15 12:14:32.543'),
(1344, 3, '9b2755e4-cec4-4b7d-85ac-7f7d5b64879f', '69f223d87ab3ff99efb8b2e9fc5c702aa31c400ebd3885e88997ebb25504c733', 0, 0, NULL, '2027-10-20 04:32:39.205', '2026-09-15 04:32:39.205', '2026-09-15 04:32:39.205'),
(1345, 2, 'e12df413-3784-4161-8781-2d3b2b348954', '04296e2bd04827cf7c752c5a319c13b5f0a80f06dcf86765e5e3b3e00fadb473', 1, 0, NULL, '2027-10-20 04:32:39.502', '2026-09-15 04:32:39.503', '2026-09-15 12:28:07.264'),
(1346, 3, 'fd260701-d3c9-4cac-8881-772a03a20dfa', 'ea986da60f07b3c7f53eca4c0a0fcb46d4d40664c8fcf9128772d275cdef8a25', 1, 0, NULL, '2027-10-20 04:32:44.988', '2026-09-15 04:32:44.989', '2026-09-15 12:10:37.102'),
(1347, 4, '22915fa7-47d4-4018-988b-1cb916a07fa6', 'd79e4bf752790449d9be8be61a21356c7822158a2e64059f310fd144521c710b', 1, 0, NULL, '2027-10-20 04:41:58.346', '2026-09-15 04:41:58.346', '2026-09-15 12:20:47.443'),
(1348, 1, '226642a2-25ff-4990-afb8-b3371ba08f6d', 'ebf9d681cc8e0032bb918263bc1f2dc5ff16ad9fbc0051e4429528d4b7978f2d', 1, 0, NULL, '2027-10-20 04:50:08.137', '2026-09-15 04:50:08.137', '2026-09-15 04:50:11.192'),
(1349, 1, '226642a2-25ff-4990-afb8-b3371ba08f6d', '0a8aaed7255df377c678365c19bf0b1aefdd5466f2e9858bd7996b46566024d2', 1, 0, NULL, '2027-10-20 04:50:11.859', '2026-09-15 04:50:11.859', '2026-09-15 04:50:14.027'),
(1350, 1, '226642a2-25ff-4990-afb8-b3371ba08f6d', '95bb334d672b8d3ecf851f74678aed4e6245b388d2bec9abf91f189004635f41', 1, 0, NULL, '2027-10-20 04:50:14.928', '2026-09-15 04:50:14.929', '2026-09-15 04:56:31.208'),
(1351, 1, 'ef592691-dc39-4dd4-9a6c-c442c5e7435c', '718bab423bea434098142666fb7d03267b4ad4eb23e9d41df4ba56abf27fc0b1', 1, 0, NULL, '2027-10-20 04:50:59.615', '2026-09-15 04:50:59.616', '2026-09-15 06:16:16.676'),
(1352, 1, '226642a2-25ff-4990-afb8-b3371ba08f6d', 'cd7da83515e033cfbf8d74f79ff5bc2b106ff25d07119dc7a50d146db8246e28', 1, 0, NULL, '2027-10-20 04:56:32.042', '2026-09-15 04:56:32.045', '2026-09-15 05:08:32.512'),
(1353, 1, '226642a2-25ff-4990-afb8-b3371ba08f6d', '5417f42625e5a706475c89a4e81e00e2442b1ed58b9bd36278ae7f181ed3c28d', 1, 0, NULL, '2027-10-20 05:08:33.665', '2026-09-15 05:08:33.665', '2026-09-15 05:08:35.694'),
(1354, 1, '226642a2-25ff-4990-afb8-b3371ba08f6d', 'b2e2e3c1d12f9726600cc96cb2ee6e2c45ad927b327e45aa0405ebcdcd2e5797', 1, 0, NULL, '2027-10-20 05:08:36.736', '2026-09-15 05:08:36.737', '2026-09-15 05:08:38.631'),
(1355, 1, '226642a2-25ff-4990-afb8-b3371ba08f6d', '5665f6803a68c524d3be893a6bde069e9f6dcf7b7cdca63a660ce04a0d915ee5', 1, 0, NULL, '2027-10-20 05:08:39.187', '2026-09-15 05:08:39.188', '2026-09-15 05:08:40.952'),
(1356, 1, '226642a2-25ff-4990-afb8-b3371ba08f6d', 'bd249671c27ca1450e5484be706b48d83fefd739c663db0af80b920648e8adea', 1, 0, NULL, '2027-10-20 05:08:41.854', '2026-09-15 05:08:41.854', '2026-09-15 06:15:54.484'),
(1357, 1, '226642a2-25ff-4990-afb8-b3371ba08f6d', 'd688664791d1430779627354505714d42ea38bc7462aa641968c1a081f77cb6c', 1, 0, NULL, '2027-10-20 06:15:55.463', '2026-09-15 06:15:55.464', '2026-09-15 06:15:58.603'),
(1358, 1, '226642a2-25ff-4990-afb8-b3371ba08f6d', 'ab3f55641c27647e380301420b98a24d9ed1468edb9ac4b39b090f9c939e66f4', 1, 0, NULL, '2027-10-20 06:15:59.483', '2026-09-15 06:15:59.484', '2026-09-15 06:19:29.615'),
(1359, 1, 'ef592691-dc39-4dd4-9a6c-c442c5e7435c', '0a7a45d7238a4040dcbc420ba633c26bbcace7476a641dc70b1c63d41eeadbbb', 1, 0, NULL, '2027-10-20 06:16:17.216', '2026-09-15 06:16:17.217', '2026-09-16 03:54:11.720'),
(1360, 1, '226642a2-25ff-4990-afb8-b3371ba08f6d', '8467adcc32c232c88463832760256834becca5fc200f7b9b99e42084f1d0b282', 1, 1, 'LOGGED_OUT', '2027-10-20 06:19:30.530', '2026-09-15 06:19:30.531', '2026-09-15 06:59:21.171'),
(1361, 1, '226642a2-25ff-4990-afb8-b3371ba08f6d', '1e508c5516a372d448dfe6dc797db2a310a7bedf9d19e6b3808e747960cb0ea6', 0, 1, 'LOGGED_OUT', '2027-10-20 06:59:21.985', '2026-09-15 06:59:21.986', '2026-09-15 06:59:22.555'),
(1362, 1, 'bc674280-5059-46b5-aebc-e3c0170b26d6', 'ddfee327bbeaf408c18cadaebff177c75115eb1489dd80841b7265c0500dd57d', 1, 0, NULL, '2027-10-20 06:59:36.397', '2026-09-15 06:59:36.398', '2026-09-15 17:40:55.564'),
(1363, 3, 'fd260701-d3c9-4cac-8881-772a03a20dfa', '4b4893d90e535b0bbd2b54fa7501b6ee0f8b8ef398f5808a55b7e6c33a816e9f', 1, 0, NULL, '2027-10-20 12:10:37.991', '2026-09-15 12:10:37.992', '2026-09-15 12:10:40.612'),
(1364, 3, 'fd260701-d3c9-4cac-8881-772a03a20dfa', 'afb9d0216a6e8dfaea6c31e3bb61828567322f1e348e86aafe3ff9f1d026d34e', 1, 0, NULL, '2027-10-20 12:10:41.653', '2026-09-15 12:10:41.654', '2026-09-16 04:47:37.485'),
(1365, 2, '56f67ebe-2668-45f2-9e06-5de47216799d', '064d1f15d48e28e91ff32cbc83f67f7f56b96b76f8abe6be808637ef086b6a6e', 0, 1, 'LOGGED_OUT', '2027-10-20 12:14:38.694', '2026-09-15 12:14:38.695', '2026-09-15 12:24:07.603'),
(1366, 4, '22915fa7-47d4-4018-988b-1cb916a07fa6', '520e0492e61acacf14fb2aa800139f701fcf79cb4604ed3069d8cf9e284bbf45', 1, 0, NULL, '2027-10-20 12:20:48.854', '2026-09-15 12:20:48.855', '2026-09-15 18:03:50.763'),
(1367, 2, 'e12df413-3784-4161-8781-2d3b2b348954', '74a1fff3bfe6b7bf29a6befab1877e910d631f51eff3613aa79b83a7c38eb70e', 1, 0, NULL, '2027-10-20 12:28:08.297', '2026-09-15 12:28:08.298', '2026-09-16 04:13:35.401'),
(1368, 2, '07b624ac-2795-44e9-9712-3def6626beee', '8e66f47663e5e1037e29b20869512cebf43e988586f608f76b5875772721f829', 1, 0, NULL, '2027-10-20 12:29:45.795', '2026-09-15 12:29:45.795', '2026-09-15 12:32:36.580'),
(1369, 2, '07b624ac-2795-44e9-9712-3def6626beee', '659956c521a401198453ceaa77b367cea4c42eb62ebd926c571cb432943a99ea', 1, 0, NULL, '2027-10-20 12:32:37.663', '2026-09-15 12:32:37.664', '2026-09-15 12:32:40.826'),
(1370, 2, '07b624ac-2795-44e9-9712-3def6626beee', '819e1bf31b1a47ecf08c934bca4b1cccf180cd0971d3372bf6f9cb9f16efd14e', 1, 0, NULL, '2027-10-20 12:32:41.951', '2026-09-15 12:32:41.951', '2026-09-16 04:13:34.573'),
(1371, 1, 'bc674280-5059-46b5-aebc-e3c0170b26d6', '7e0c946a185c15d6560c8e2b0471ae44c81ec9276965181b9a9c7ebc633fa100', 0, 0, NULL, '2027-10-20 17:40:56.544', '2026-09-15 17:40:56.545', '2026-09-15 17:40:56.545'),
(1372, 4, '22915fa7-47d4-4018-988b-1cb916a07fa6', '5711fd013fc8fba6b26b3139dd7df3c9b3665b88553ca748bdb8c72bfa9e1a51', 1, 0, NULL, '2027-10-20 18:03:51.640', '2026-09-15 18:03:51.641', '2026-09-15 18:04:39.876'),
(1373, 4, '22915fa7-47d4-4018-988b-1cb916a07fa6', '627021e1beccaa0b8b27571bcd15b4ef60399610d9ce1bb46a0455b2a9cf61d7', 1, 0, NULL, '2027-10-20 18:04:40.813', '2026-09-15 18:04:40.814', '2026-09-16 05:14:05.603'),
(1374, 1, 'ef592691-dc39-4dd4-9a6c-c442c5e7435c', '662a8fe4371eaae9a3d92bf60a6a72f4e203dc9e96a7fedaab6a734b50a1cc4f', 1, 0, NULL, '2027-10-21 03:54:12.651', '2026-09-16 03:54:12.657', '2026-09-16 03:54:15.018'),
(1375, 1, 'ef592691-dc39-4dd4-9a6c-c442c5e7435c', 'e722af4b28b2725c98caede01248242981e299b40eda636ae7487f2587413719', 1, 0, NULL, '2027-10-21 03:54:16.213', '2026-09-16 03:54:16.214', '2026-09-16 03:55:02.140'),
(1376, 1, 'ef592691-dc39-4dd4-9a6c-c442c5e7435c', '5b530724a65b9ea5323687305c3c5171b60daf6bba08c16c535fcbbea163814b', 1, 0, NULL, '2027-10-21 03:55:03.288', '2026-09-16 03:55:03.289', '2026-09-16 03:55:07.997'),
(1377, 1, 'ef592691-dc39-4dd4-9a6c-c442c5e7435c', '82d2c4448f75e5e09bee740b7a70c97149ee5911ba3d48ae040ba5a09ddeb086', 1, 0, NULL, '2027-10-21 03:55:08.588', '2026-09-16 03:55:08.589', '2026-09-16 05:53:36.481'),
(1378, 2, '07b624ac-2795-44e9-9712-3def6626beee', '22aef156ef35205216779992e050d94cba733eaecdcbfac6480bdc73fe554f2b', 1, 0, NULL, '2027-10-21 04:13:35.652', '2026-09-16 04:13:35.652', '2026-09-16 04:13:38.520'),
(1379, 2, 'e12df413-3784-4161-8781-2d3b2b348954', '307a481fb2342e5a3193f2ac438218cc5db942a1d835e181fa8f5bcfa4f3028f', 1, 0, NULL, '2027-10-21 04:13:36.448', '2026-09-16 04:13:36.449', '2026-09-16 05:00:23.769'),
(1380, 2, '07b624ac-2795-44e9-9712-3def6626beee', 'f4ee79fcfe6bf4b0c4acb9c0aad1591a475a958e2b107856cb39238d0dd093eb', 0, 0, NULL, '2027-10-21 04:13:39.460', '2026-09-16 04:13:39.461', '2026-09-16 04:13:39.461'),
(1381, 3, 'fd260701-d3c9-4cac-8881-772a03a20dfa', '0cc23dc9915d2f6c7f707f53fca7b75a72e619a62de39511823d6186287d17ce', 1, 0, NULL, '2027-10-21 04:47:38.354', '2026-09-16 04:47:38.355', '2026-09-16 04:47:48.154'),
(1382, 3, 'fd260701-d3c9-4cac-8881-772a03a20dfa', '34b02e50ad61c5ed9b9b0eb9308026d6f51effed2855e995955ce9fbf98ed920', 1, 0, NULL, '2027-10-21 04:47:49.063', '2026-09-16 04:47:49.064', '2026-09-16 04:47:51.306'),
(1383, 3, 'fd260701-d3c9-4cac-8881-772a03a20dfa', '2e1059bafd10538a31bff92c4ed480be2901ff1f10777baf6840a25ca2b00e27', 1, 0, NULL, '2027-10-21 04:47:51.770', '2026-09-16 04:47:51.771', '2026-09-16 04:48:27.386'),
(1384, 3, 'fd260701-d3c9-4cac-8881-772a03a20dfa', '7fe5e1c13d207a8bd5e4c9647e43627e27426e482f8274e48a6569be27f984b9', 1, 0, NULL, '2027-10-21 04:48:28.502', '2026-09-16 04:48:28.503', '2026-09-16 04:48:31.343'),
(1385, 3, 'fd260701-d3c9-4cac-8881-772a03a20dfa', '8214173b9e468c4fc24ecee9efe273638cfa6abb48a2f921dc971a95695b427e', 1, 0, NULL, '2027-10-21 04:48:32.316', '2026-09-16 04:48:32.317', '2026-09-16 05:55:56.646'),
(1386, 2, 'e12df413-3784-4161-8781-2d3b2b348954', '4760deca1d74d9d34eb51540dfac371f45ab92cc1a53c4f61b9a5e5629e7f8dc', 1, 0, NULL, '2027-10-21 05:00:24.932', '2026-09-16 05:00:24.933', '2026-09-16 05:52:55.013'),
(1387, 4, '22915fa7-47d4-4018-988b-1cb916a07fa6', '11f2b24cb4f6c601840f9e80a76dc8f3a3676c7ccffeac9d8db289fd1a993e3b', 1, 0, NULL, '2027-10-21 05:14:06.521', '2026-09-16 05:14:06.522', '2026-09-16 05:52:55.008'),
(1388, 4, '22915fa7-47d4-4018-988b-1cb916a07fa6', 'bca8fbf216006393fdcd34743796dd1670b690182271ad5ecb8071b36c7f3e0b', 0, 0, NULL, '2027-10-21 05:52:55.946', '2026-09-16 05:52:55.947', '2026-09-16 05:52:55.947'),
(1389, 2, 'e12df413-3784-4161-8781-2d3b2b348954', 'a885ba87cb530a931d8dade635d5d03e82bc4e44c1faabbf6b23cc50233f8f3d', 0, 0, NULL, '2027-10-21 05:52:55.947', '2026-09-16 05:52:55.948', '2026-09-16 05:52:55.948'),
(1390, 1, 'ef592691-dc39-4dd4-9a6c-c442c5e7435c', '94b743c9926a1df0630969f9468a8f012bb2c928d982406f36dffbfa8cfbfb71', 1, 0, NULL, '2027-10-21 05:53:37.638', '2026-09-16 05:53:37.639', '2026-09-16 05:58:37.500'),
(1391, 3, 'fd260701-d3c9-4cac-8881-772a03a20dfa', 'c4ac5e9312fc1ba78b8c6fe4e74a73dbdd78fa5d317a5a889427324768714fd1', 1, 0, NULL, '2027-10-21 05:55:57.776', '2026-09-16 05:55:57.776', '2026-09-16 05:55:59.723'),
(1392, 3, 'fd260701-d3c9-4cac-8881-772a03a20dfa', 'e42cfda1d3fe1d14e0b6db0ac43734f9cdca6cf807d8e2a73642c463e1b81655', 1, 0, NULL, '2027-10-21 05:56:00.307', '2026-09-16 05:56:00.308', '2026-09-16 08:31:23.320'),
(1393, 1, 'ef592691-dc39-4dd4-9a6c-c442c5e7435c', 'f3fbe5cba6df97fa2b83a0a3e0645902ea73048a71cbc1347267c1d141eef355', 1, 0, NULL, '2027-10-21 05:58:38.408', '2026-09-16 05:58:38.408', '2026-09-16 05:58:40.472'),
(1394, 1, 'ef592691-dc39-4dd4-9a6c-c442c5e7435c', 'c277a8625bf5ad1f82433c522c7d73ff332e283f67f16f7ae55932bf1b86b798', 1, 0, NULL, '2027-10-21 05:58:41.674', '2026-09-16 05:58:41.675', '2026-09-16 06:00:20.612'),
(1395, 1, 'ef592691-dc39-4dd4-9a6c-c442c5e7435c', '02cf28180a58af19c0ff6810f7975c628907e12378b45d61b7ec3d3407814bd5', 1, 0, NULL, '2027-10-21 06:00:21.811', '2026-09-16 06:00:21.812', '2026-09-16 06:00:24.214'),
(1396, 1, 'ef592691-dc39-4dd4-9a6c-c442c5e7435c', '286c87b4c6ea49164b7b6ee75fffe8fae4922f6a4b6c21a0cfd9c96256922f9e', 1, 0, NULL, '2027-10-21 06:00:24.738', '2026-09-16 06:00:24.738', '2026-09-16 06:03:41.359'),
(1397, 1, 'ef592691-dc39-4dd4-9a6c-c442c5e7435c', '6a58387a8f0a0d02a43b49a1cfabbe5783e4b155d917df81f52d417ba05ccf33', 0, 0, NULL, '2027-10-21 06:03:42.285', '2026-09-16 06:03:42.286', '2026-09-16 06:03:42.286'),
(1398, 3, 'fd260701-d3c9-4cac-8881-772a03a20dfa', '5118c15c0e76af48a85acdee4d31045ad5d28caedc6cfec3b0ede53b5e809102', 1, 0, NULL, '2027-10-21 08:31:24.225', '2026-09-16 08:31:24.226', '2026-09-16 08:31:27.272'),
(1399, 3, 'fd260701-d3c9-4cac-8881-772a03a20dfa', '63499f1d3691d31c38751d34ccc4060a75855c9487bf40bf27c05fa8f4dcb221', 1, 0, NULL, '2027-10-21 08:31:28.273', '2026-09-16 08:31:28.274', '2026-09-16 08:52:11.139'),
(1400, 3, 'fd260701-d3c9-4cac-8881-772a03a20dfa', 'e2a648599daf91f10a56ad85acdb53f1adc19c72e9b18060d79f39ca3d96420b', 1, 0, NULL, '2027-10-21 08:52:12.362', '2026-09-16 08:52:12.363', '2026-09-16 08:52:15.446'),
(1401, 3, 'fd260701-d3c9-4cac-8881-772a03a20dfa', '42bd99fba3adbba020196c71c91d7f8108a9ce19a1cc7f18830308d2fe581e5e', 0, 0, NULL, '2027-10-21 08:52:16.333', '2026-09-16 08:52:16.334', '2026-09-16 08:52:16.334');

-- --------------------------------------------------------

--
-- Table structure for table `Booking`
--

CREATE TABLE `Booking` (
  `id` int(11) NOT NULL,
  `booking_code` varchar(191) NOT NULL,
  `company_id` int(11) NOT NULL,
  `branch_id` int(11) DEFAULT NULL,
  `customer_id` int(11) NOT NULL,
  `property_id` int(11) DEFAULT NULL,
  `project_unit_id` int(11) DEFAULT NULL,
  `assigned_employee_id` int(11) DEFAULT NULL,
  `status` varchar(191) NOT NULL DEFAULT 'PENDING',
  `agreed_price` double NOT NULL,
  `booking_amount` double NOT NULL,
  `balance_amount` double NOT NULL,
  `booking_date` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `source` varchar(191) DEFAULT NULL,
  `campaign` varchar(191) DEFAULT NULL,
  `utm_source` varchar(191) DEFAULT NULL,
  `utm_medium` varchar(191) DEFAULT NULL,
  `utm_campaign` varchar(191) DEFAULT NULL,
  `notes` text DEFAULT NULL,
  `serial_no` varchar(191) DEFAULT NULL,
  `plot_no` varchar(191) DEFAULT NULL,
  `area_sqyd` double DEFAULT NULL,
  `facing` varchar(191) DEFAULT NULL,
  `price_per_sqyd` double DEFAULT NULL,
  `sale_price_per_sqyd` double DEFAULT NULL,
  `charges_per_sqyd` double DEFAULT NULL,
  `emi_months` int(11) DEFAULT NULL,
  `emi_charges` double DEFAULT NULL,
  `total_cost` double DEFAULT NULL,
  `total_cost_words` varchar(191) DEFAULT NULL,
  `receipt_no` varchar(191) DEFAULT NULL,
  `receipt_date` datetime(3) DEFAULT NULL,
  `booking_amount_words` varchar(191) DEFAULT NULL,
  `referred_by` varchar(191) DEFAULT NULL,
  `referred_by_code` varchar(191) DEFAULT NULL,
  `form_status` varchar(191) NOT NULL DEFAULT 'DRAFT',
  `form_submitted_at` datetime(3) DEFAULT NULL,
  `form_submitted_by_id` int(11) DEFAULT NULL,
  `md_approved_at` datetime(3) DEFAULT NULL,
  `md_approved_by_id` int(11) DEFAULT NULL,
  `md_rejection_reason` text DEFAULT NULL,
  `tc_accepted_at` datetime(3) DEFAULT NULL,
  `tc_accepted_by_name` varchar(191) DEFAULT NULL,
  `is_legacy` tinyint(1) NOT NULL DEFAULT 0,
  `legacy_booking_date` datetime(3) DEFAULT NULL,
  `legacy_notes` text DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `BookingPortalMapping`
--

CREATE TABLE `BookingPortalMapping` (
  `id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `crms_booking_id` int(11) NOT NULL,
  `crms_customer_id` int(11) NOT NULL,
  `portal_customer_id` varchar(191) DEFAULT NULL,
  `portal_booking_id` varchar(191) DEFAULT NULL,
  `handoff_status` varchar(191) NOT NULL DEFAULT 'CREATED',
  `last_sync_at` datetime(3) DEFAULT NULL,
  `error_message` text DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Branch`
--

CREATE TABLE `Branch` (
  `id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `name` varchar(191) NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL,
  `deleted_at` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Branch`
--

INSERT INTO `Branch` (`id`, `company_id`, `name`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 'Miyapur (Main Branch)', '2026-09-10 06:52:38.546', '2026-09-10 06:52:38.546', NULL),
(2, 1, 'Tarnaka Branch', '2026-09-10 06:52:38.984', '2026-09-10 06:52:38.984', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Company`
--

CREATE TABLE `Company` (
  `id` int(11) NOT NULL,
  `name` varchar(191) NOT NULL,
  `code` varchar(191) NOT NULL,
  `property_type_group` varchar(191) NOT NULL DEFAULT 'RADHA_REAL_HOMES',
  `announcement_image_url` text DEFAULT NULL,
  `announcement_active` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL,
  `deleted_at` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Company`
--

INSERT INTO `Company` (`id`, `name`, `code`, `property_type_group`, `announcement_image_url`, `announcement_active`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Radha Real Homes', 'RRH', 'RADHA_REAL_HOMES', NULL, 0, '2026-09-10 06:52:38.249', '2026-09-10 06:55:28.645', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `CompanyHoliday`
--

CREATE TABLE `CompanyHoliday` (
  `id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `name` varchar(191) NOT NULL,
  `notes` varchar(191) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `CompanyHoliday`
--

INSERT INTO `CompanyHoliday` (`id`, `company_id`, `date`, `name`, `notes`, `created_at`, `updated_at`) VALUES
(1, 1, '2026-09-14', 'Vinayaka Chaturthi', NULL, '2026-09-14 03:50:10.119', '2026-09-14 03:50:10.119');

-- --------------------------------------------------------

--
-- Table structure for table `Complaint`
--

CREATE TABLE `Complaint` (
  `id` int(11) NOT NULL,
  `complaint_code` varchar(191) NOT NULL,
  `company_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `booking_id` int(11) DEFAULT NULL,
  `property_id` int(11) DEFAULT NULL,
  `project_unit_id` int(11) DEFAULT NULL,
  `title` varchar(191) NOT NULL,
  `description` varchar(191) DEFAULT NULL,
  `category` varchar(191) DEFAULT NULL,
  `priority` varchar(191) NOT NULL DEFAULT 'MEDIUM',
  `status` varchar(191) NOT NULL DEFAULT 'OPEN',
  `assigned_employee_id` int(11) DEFAULT NULL,
  `resolution_description` varchar(191) DEFAULT NULL,
  `resolved_by` int(11) DEFAULT NULL,
  `resolved_at` datetime(3) DEFAULT NULL,
  `closed_at` datetime(3) DEFAULT NULL,
  `closure_reason` varchar(191) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Customer`
--

CREATE TABLE `Customer` (
  `id` int(11) NOT NULL,
  `customer_code` varchar(191) NOT NULL,
  `company_id` int(11) NOT NULL,
  `branch_id` int(11) DEFAULT NULL,
  `first_name` varchar(191) NOT NULL,
  `last_name` varchar(191) DEFAULT NULL,
  `phone` varchar(191) NOT NULL,
  `email` varchar(191) DEFAULT NULL,
  `temp_password_expiry` datetime(3) DEFAULT NULL,
  `force_password_reset` tinyint(1) NOT NULL DEFAULT 0,
  `password_hash` varchar(191) DEFAULT NULL,
  `avatar_url` varchar(191) DEFAULT NULL,
  `status` varchar(191) NOT NULL DEFAULT 'ACTIVE',
  `source` varchar(191) NOT NULL DEFAULT 'MANUAL_ENTRY',
  `campaign` varchar(191) DEFAULT NULL,
  `utm_source` varchar(191) DEFAULT NULL,
  `utm_medium` varchar(191) DEFAULT NULL,
  `utm_campaign` varchar(191) DEFAULT NULL,
  `assigned_to_id` int(11) DEFAULT NULL,
  `origin_lead_id` int(11) DEFAULT NULL,
  `pan_number` varchar(191) DEFAULT NULL,
  `aadhaar_number` varchar(191) DEFAULT NULL,
  `kyc_status` varchar(191) DEFAULT NULL,
  `kyc_verified_at` datetime(3) DEFAULT NULL,
  `kyc_rejected_reason` text DEFAULT NULL,
  `kyc_submission_status` varchar(191) DEFAULT NULL,
  `kyc_submitted_at` datetime(3) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `CustomerNotification`
--

CREATE TABLE `CustomerNotification` (
  `id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `booking_id` int(11) DEFAULT NULL,
  `type` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `message` varchar(191) NOT NULL,
  `is_read` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `DailyReport`
--

CREATE TABLE `DailyReport` (
  `id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `submitted_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `summary` varchar(191) NOT NULL,
  `call_count` int(11) NOT NULL DEFAULT 0,
  `site_visit_count` int(11) NOT NULL DEFAULT 0,
  `closed_deal_count` int(11) NOT NULL DEFAULT 0,
  `target_met` tinyint(1) NOT NULL DEFAULT 1,
  `below_target_reason` varchar(191) DEFAULT NULL,
  `metrics_json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`metrics_json`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `DailyReport`
--

INSERT INTO `DailyReport` (`id`, `employee_id`, `submitted_at`, `summary`, `call_count`, `site_visit_count`, `closed_deal_count`, `target_met`, `below_target_reason`, `metrics_json`) VALUES
(1, 2, '2026-09-01 12:22:54.992', 'Today, in the morning session, we learned about the CRM process and worked on it. After lunch, we focused on follow-ups, regular calls, and new calls. Overall, we had a productive day and gai', 35, 0, 3, 1, NULL, '{\"callsMade\":35,\"leadsQualified\":3,\"followupsDone\":\"22\",\"feedback\":\"In the morning session, we learned about the CRM process and how to  work on it. After lunch, we focused on follow-ups,  and new calls.\"}'),
(2, 3, '2026-09-01 12:24:44.343', 'Today, I worked on housing leads by calling customers back and understanding their requirements. I explained the property details, updated customer feedback, downloaded the housing lead\'s  an', 1, 0, 0, 1, NULL, '{\"leadsProcessed\":\"03\",\"telecallerAssignments\":\"01\",\"feedback\":\"Today, 3 housing leads were generated. I contacted the customers, discussed their requirements and explained the property details. One customer from RC Puram Apartments is planning a site visit tomorrow. The Bollaram Apartments lead was shared with Ramesh Sir for further follow-up. Another customer is not answering the call.\",\"callsMade\":1}'),
(3, 4, '2026-09-01 12:27:04.244', 'Calls: 20 Associates• Office Visits: 3 Associates• Site Visit: 1 customer confirmed\"', 0, 0, 0, 1, NULL, '{\"feedback\":\"\"}'),
(4, 7, '2026-09-01 13:50:51.119', 'Meeting with management ', 0, 1, 0, 1, NULL, '{\"siteVisits\":1,\"propertyVerifications\":\"1\",\"feedback\":\"\"}'),
(5, 6, '2026-09-01 13:52:13.851', '**Date: 31 August 2026**\n\nGood evening Sir,\n\n**Today’s Work Update:**\n\n• Completed today’s motivational social media post.\n• Completed and uploaded the **My Home Garden** real-estate reel on ', 0, 0, 0, 1, NULL, '{\"feedback\":\"**Date: 01 September 2026**\\n\\nGood evening Sir,\\n\\n**Today’s Work Update:**\\n\\n• Completed today’s motivational social media post.\\n• Completed and uploaded the **My Home Garden** real-estate reel on Facebook & Instagram.\\n• Worked on the **Sonthillu social media post**Facebook only today completed the required updates.\\n\\nThank you, Sir.\"}'),
(6, 2, '2026-09-02 12:07:02.517', 'Today I completed 25 new calls. Among them, 6 members showed interest, and I explained about venture details to them. Further follow-ups will be done with the interested leads.', 25, 0, 6, 1, NULL, '{\"callsMade\":25,\"leadsQualified\":6,\"followupsDone\":\"0\",\"feedback\":\"• New Calls Made: 25\\n• Total Calls: 25\\n• Follow-ups: 0\\n\"}'),
(7, 4, '2026-09-02 12:15:29.124', 'I spoke with 25 Associate members regarding their follow-ups. Tomorrow, the site visits for my home garden and Nagadhara are confirmed..', 0, 0, 0, 1, NULL, '{\"feedback\":\"\"}'),
(8, 3, '2026-09-02 12:21:12.425', 'Good evening sir,\nI have created a Google Sheet with all the Housing Leads and updated the previous follow-ups in the existing follow-up sheets.\nI have also completed some follow-ups for both', 0, 0, 0, 1, NULL, '{\"leadsProcessed\":\"0\",\"telecallerAssignments\":\"0\",\"feedback\":\"• Housing Leads Generated: 0\\n• New Calls: 16\\n• Old Calls Follow-up: 35\\n• Ad Postings Done: 3\\n• Prospects (Old & New): 1\\n• Site Visits: 0\",\"callsMade\":0}'),
(9, 7, '2026-09-02 12:55:10.496', 'Registration recieved at sadashipet ', 0, 1, 0, 1, NULL, '{\"siteVisits\":1,\"propertyVerifications\":\"2\",\"feedback\":\"Registration recieved at sadashipet \"}'),
(10, 3, '2026-09-03 12:03:51.916', 'Good evening, Sir.\nToday’s Updates. Housing leads follow-up calls completed,Housing posts rechecked and updated.', 21, 0, 2, 1, NULL, '{\"callsMade\":21,\"leadsQualified\":2,\"followupsDone\":\"10\",\"feedback\":\"• Housing Leads Generated: 1\\n• New Calls: 9\\n• Old Calls Follow-up: 12\\n• Ad Postings Done: 2\\n• Prospects (Old & New): 2\\n• Site Visits: 1\"}'),
(11, 2, '2026-09-03 12:05:09.656', 'Daily Report Summary – 03/09/2026\n\nToday, I completed 49 new calls. Out of these, 5leads showed interest in the venture. I explained the venture details to the interested leads and will follo', 49, 0, 5, 1, NULL, '{\"callsMade\":49,\"leadsQualified\":5,\"followupsDone\":\"0\",\"feedback\":\"DAILY REPORT – 02/09/2026\\n\\n• New Calls Made: 49\\n• Total Calls: 49\\n• Follow-ups: 0\\n•watt\'s up: 5\\n• Updates: Completed 49 new calls today.\"}'),
(12, 4, '2026-09-03 12:23:08.361', '\nI will follow up with the team to get their customer site visit updates...', 0, 0, 0, 1, NULL, '{\"feedback\":\"\"}'),
(13, 6, '2026-09-03 13:06:45.435', 'To day work update 03/09/2026\n  I did Meta ads, for speed senaralli project, and facebook post s for sonthillu and Radha Real Home Properties ki Insta post s also upload today', 0, 0, 0, 1, NULL, '{\"feedback\":\"To day work update 03/09/2026\\n  I did Meta ads, for speed senaralli project, and facebook post s for sonthillu and Radha Real Home Properties ki Insta post s also upload today\"}'),
(14, 7, '2026-09-03 13:18:40.622', 'I gave the registration documents to the customer.', 0, 0, 0, 1, NULL, '{\"siteVisits\":0,\"propertyVerifications\":\"0\",\"feedback\":\"I gave the registration documents to the customer.\"}'),
(15, 17, '2026-09-03 13:57:35.133', 'Reposted a reel, because I think it has potential and last time it was only pushed in feeds tab rather than reels tab, let\'s see. And content research for tomorrow\'s reel and overall, content', 0, 0, 0, 1, NULL, '{\"feedback\":\"\"}'),
(16, 3, '2026-09-04 12:07:24.163', 'Good evening, sir.\nToday’s work update: • Saturday & Sunday housing leads follow-up calls completed. • Total assigned calls and follow-ups completed.', 57, 0, 1, 1, NULL, '{\"callsMade\":57,\"leadsQualified\":1,\"followupsDone\":\"57\",\"feedback\":\"• Housing Leads Generated: 1\\n• New Calls: 1\\n• Old Calls Follow-up: 56\\n• Ad Postings Done: 1\\n• Prospects (Old & New): 1\\n• Site Visits: 0\"}'),
(17, 4, '2026-09-04 12:18:58.354', '\nWeekend Site Visits & Follow-up Updates', 0, 0, 0, 1, NULL, '{\"feedback\":\"\"}'),
(18, 2, '2026-09-04 12:20:24.866', 'Daily Report Summary – 04/09/2026\n\nToday, I completed 37 calls in total. Out of these, 8 members showed interest, and I shared the venture details with all 8 interested members via WhatsApp.', 37, 0, 8, 1, NULL, '{\"callsMade\":37,\"leadsQualified\":8,\"followupsDone\":\"0\",\"feedback\":\"DAILY REPORT – 04/09/2026\\n\\n• New Calls Made: 37\\n• Total Calls: 37\\n• Follow-ups: —\\n•watt\'s up :--08\"}'),
(19, 6, '2026-09-04 13:08:22.008', 'Today work update 04/09/2026\nDaily post for Facebook nd instagram 7 posts today and one post ready for Facebook ad run   middle in the work lo vundi thats it to day work ', 0, 0, 0, 1, NULL, '{\"feedback\":\"Today work update 04/09/2026\\nDaily post for Facebook nd instagram 7 posts today and one post ready for Facebook ad run  middle ofthe the work lo vundi thats it to day work \"}'),
(20, 7, '2026-09-04 13:36:50.825', 'followed call backs a site visit has been scheduled for tomorrow, and also visited a new project.', 0, 1, 0, 1, NULL, '{\"siteVisits\":1,\"propertyVerifications\":\"1\",\"feedback\":\"followed call backs a site visit has been scheduled for tomorrow, and also visited a new project.\"}'),
(21, 7, '2026-09-04 13:36:59.743', 'followed call backs a site visit has been scheduled for tomorrow, and also visited a new project.', 0, 1, 0, 1, NULL, '{\"siteVisits\":1,\"propertyVerifications\":\"1\",\"feedback\":\"followed call backs a site visit has been scheduled for tomorrow, and also visited a new project.\"}'),
(22, 17, '2026-09-04 14:03:03.249', 'Posted a reel in sonthillu insta page', 0, 0, 0, 1, NULL, '{\"feedback\":\"\"}'),
(23, 2, '2026-09-05 12:51:47.364', 'Daily Report Summary – 04/09/2026\n\nToday, I completed 41 calls in total. Out of these, 02 members showed interest, and I shared the venture details with all 02 interested members via WhatsApp', 33, 0, 2, 1, NULL, '{\"callsMade\":33,\"leadsQualified\":2,\"followupsDone\":\"8\",\"feedback\":\"DAILY REPORT – 05/09/2026\\n\\n• New Calls Made: 33\\n• Follow-ups: 08\\n•Total Calls:41\\n•watt\'s up : 02\"}'),
(24, 7, '2026-09-05 14:30:41.667', 'Followuped my call backs & visited speed sanarelli site ', 0, 0, 0, 1, NULL, '{\"siteVisits\":0,\"propertyVerifications\":\"1\",\"feedback\":\"Followuped my call backs & visited speed sanarelli site \"}'),
(25, 3, '2026-09-07 12:15:23.349', '• Good evening sir.\n• Housing add-postings completed:\n 3\n• Leads generated: 1\n• Lead callback completed ', 17, 0, 1, 1, NULL, '{\"callsMade\":17,\"leadsQualified\":1,\"followupsDone\":\"17\",\"feedback\":\"• Housing Leads Generated: 1\\n• New Calls: 1\\n• Old Calls Follow-up: 16\\n• Ad Postings Done: 3\\n• Prospects (Old & New): 0\\n• Site Visits: 0\"}'),
(26, 4, '2026-09-07 12:15:43.894', '\n\nNo.of existing prospects followup:29\nNo.of New Calls:9\nTotal Calls Made:38\nNo.of New Prospects:7\n', 0, 0, 0, 1, NULL, '{\"feedback\":\"\"}'),
(27, 2, '2026-09-07 12:25:04.815', 'Today, 46 calls were completed, including 37 new calls and 9 follow-ups. Venture details were shared with 4 members via WhatsApp.', 37, 0, 4, 1, NULL, '{\"callsMade\":37,\"leadsQualified\":4,\"followupsDone\":\"9\",\"feedback\":\"Date: 07 September 2026\\n\\n- New Calls: 37\\n- Follow-ups: 9\\n- Total Calls: 46\\n- WhatsApp Details Shared: 4\"}'),
(28, 6, '2026-09-07 12:34:33.579', 'Today’s Work Update:07/09/2026\n\nPrepared the Sonthaillu Facebook post.\nPrepared a new Reel script.\nCreated one motivational quote/post.\nWorked on Radha Real Home  face book and insta Pinteres', 0, 0, 0, 1, NULL, '{\"feedback\":\"Today’s Work Update:07/09/2026\\n\\nPrepared the Sonthaillu Facebook post.\\nPrepared a new Reel script.\\nCreated one motivational quote/post.\\nWorked on Radha Real Home  face book and insta Pinterest post.\\nWorked on Radha Real Home Facebook follower growth through the Invite People option.\"}'),
(29, 4, '2026-09-08 12:29:33.210', '\nNo.of existing prospects followup:30\nNo.of New Calls:11\nTotal Calls Made:41\nNo.of New Prospects:5\nNo.of Associate’s office Visits:0\nNo.of Enrollments:5\nNo.of associate site visits:0', 0, 0, 0, 1, NULL, '{\"feedback\":\"\"}'),
(30, 2, '2026-09-08 12:30:01.586', 'Date: 08 September 2026\nReporting Period: Daily\n\nToday, a total of 43 calls were handled, including 42 new calls and 1 follow-up. 4 WhatsApp details were shared with clients.', 42, 0, 4, 1, NULL, '{\"callsMade\":42,\"leadsQualified\":4,\"followupsDone\":\"1\",\"feedback\":\"Date: 08 September 2026\\nReporting Period: Daily\\n\\n- New Calls: 42\\n- Follow-ups: 01\\n- WhatsApp Shared: 04\\n- Total Calls: 43\"}'),
(31, 3, '2026-09-08 12:30:28.199', 'Good evening sir \n\n• Housing non-postings completed: 5\n• Leads generated: 1\n• Lead callback completed: 3', 18, 0, 1, 1, NULL, '{\"callsMade\":18,\"leadsQualified\":1,\"followupsDone\":\"15\",\"feedback\":\"• Housing Leads Generated: 1\\n• New Calls: 3\\n• Old Calls Follow-up: 15\\n• Ad Postings Done: 5\\n• Prospects (Old & New): 1\\n• Site Visits: 0\"}'),
(32, 6, '2026-09-08 12:30:47.709', 'To day work update;  Prepared Sonthaillu Facebook post.\nCreated a new Reel script for Radha Real Home.\nCreated one motivational quote/post.\nWorked on Radha Real Home Pinterest post.\nWorked on', 0, 0, 0, 1, NULL, '{\"feedback\":\"To day work update;  Prepared Sonthaillu Facebook post.\\nCreated a new Reel script for Radha Real Home.\\nCreated one motivational quote/post.\\nWorked on Radha Real Home Pinterest post.\\nWorked on Radha Real Home Facebook follower growth using the Invite People option.\"}'),
(33, 7, '2026-09-08 16:43:35.791', 'Followuped call backs ', 0, 0, 0, 1, NULL, '{\"siteVisits\":0,\"propertyVerifications\":\"0\",\"feedback\":\"Followuped call backs\"}'),
(34, 6, '2026-09-09 12:06:41.918', 'Today’s Work Update:\n\nPrepared 2 Facebook posts &insta– Sonthaillu & Radha Real Home.\nCreated 1 motivational post, pinterest post', 0, 0, 0, 1, NULL, '{\"feedback\":\"Today’s Work Update:\\n\\nPrepared 2 Facebook posts &insta– Sonthaillu & Radha Real Home.\\nCreated 1 motivational post, pinterest post\"}'),
(35, 7, '2026-09-09 12:23:04.392', 'Followuped my call backs ', 0, 0, 0, 1, NULL, '{\"siteVisits\":0,\"propertyVerifications\":\"0\",\"feedback\":\"Followuped my call backs \"}'),
(36, 3, '2026-09-09 12:28:49.421', 'Good evening sir \n• Housing non-postings completed: 2\n• Leads generated: 0\n• Lead callback completed: ', 9, 0, 0, 1, NULL, '{\"callsMade\":9,\"leadsQualified\":0,\"followupsDone\":\"14\",\"feedback\":\"• Housing Leads Generated: 0\\n• New Calls: 9\\n• Old Calls Follow-up: 14\\n• Ad Postings Done: 2\\n• Prospects (Old & New): 0\\n• Site Visits: 0\"}'),
(37, 4, '2026-09-09 12:28:55.411', '\nFollow up on customer site visits and new Associate’s joining..', 0, 0, 0, 1, NULL, '{\"feedback\":\"\"}'),
(38, 2, '2026-09-09 12:29:22.604', 'Completed 44 calls today, including 39 new calls and 5 follow-ups. WhatsApp details were shared with 4 prospects.', 39, 0, 4, 1, NULL, '{\"callsMade\":39,\"leadsQualified\":4,\"followupsDone\":\"5\",\"feedback\":\"Date: 09 September 2026\\n\\n- New Calls: 39\\n- Follow-ups: 05\\n- WhatsApp Details Shared: 04\\n- Total Calls: 44\"}'),
(39, 3, '2026-09-10 12:09:43.533', 'Good evening sir \n• Housing non-postings completed: 2\n• Leads generated: 1\n• Lead callback completed: ', 15, 0, 1, 1, NULL, '{\"callsMade\":15,\"leadsQualified\":1,\"followupsDone\":\"10\",\"feedback\":\"• Housing Leads Generated: 1\\n• New Calls: 5\\n• Old Calls Follow-up: 10\\n• Ad Postings Done: 2\\n• Prospects (Old & New): 1\\n• Site Visits: 0\"}'),
(40, 2, '2026-09-10 12:13:51.264', 'Today, I made 42 total calls, including 34 new calls and 8 follow-ups. I also shared WhatsApp details with 3 members.', 34, 0, 3, 1, NULL, '{\"callsMade\":34,\"leadsQualified\":3,\"followupsDone\":\"8\",\"feedback\":\"Date: 10 September 2026\\n- New Calls: 34\\n- Follow-ups: 08\\n- WhatsApp Details Shared: 03\\n- Total Calls: 42\"}'),
(41, 6, '2026-09-10 12:27:52.362', '**Today’s Work Update – 10 September 2026**\n\n• Radha Real Home Properties – Social media content/posts\n• Sonthillu – Social media \n• Motivational quote\n• Upcoming social media content plannin', 0, 0, 0, 1, NULL, '{\"feedback\":\"**Today’s Work Update – 10 September 2026**\\n\\n• Radha Real Home Properties – Social media content/posts\\n• Sonthillu – Social media \\n• Motivational quote\\n• Upcoming social media content planning \"}'),
(42, 4, '2026-09-10 12:31:55.357', '\nNo.of existing prospects followup:0\nNo.of New Calls:47\nTotal Calls Made:47\nNo.of New Prospects:8\nNo.of Associate’s office Visits:\nNo.of Enrollments:2\nNo.of associate site visits:0', 0, 0, 0, 1, NULL, '{\"feedback\":\"\"}'),
(43, 4, '2026-09-11 13:47:03.271', '\nNo.of existing prospects:followup:39\nNo.of New Calls:15\nTotal Calls Made:40\nNo.of New Prospects:0\nNo.of customer site visits:0\nNo.of Bookings:0', 0, 0, 0, 1, NULL, '{\"feedback\":\"\"}'),
(44, 16, '2026-09-11 13:47:22.673', '23 calls done..5 demos confirmed\n', 0, 0, 0, 1, NULL, '{\"siteVisits\":0,\"propertyVerifications\":\"0\",\"feedback\":\"Follow ups \"}'),
(45, 2, '2026-09-11 13:47:29.675', 'Summary – 11 September 2026\n\nToday, I made 20 new calls with 0 follow-ups. \n', 20, 0, 0, 1, NULL, '{\"callsMade\":20,\"leadsQualified\":0,\"followupsDone\":\"0\",\"feedback\":\"Date: 11 September 2026\\n\\n- New Calls: 20\\n- Follow-ups: 01\\n- WhatsApp Details Shared: 0\\n- Total Calls: 20\"}'),
(46, 3, '2026-09-11 13:48:14.269', 'Good evening sir \n• Housing non-postings completed: 3\n• Leads generated: 2\n• Lead callback completed: 2', 16, 0, 2, 1, NULL, '{\"callsMade\":16,\"leadsQualified\":2,\"followupsDone\":\"11\",\"feedback\":\"• Housing Leads Generated: 2\\n• New Calls: 3\\n• Old Calls Follow-up: 13\\n• Ad Postings Done: 3\\n• Prospects (Old & New): 2\\n• Site Visits: 1\"}'),
(47, 17, '2026-09-12 11:58:45.698', 'Posted a reel on sonthillu ', 0, 0, 0, 1, NULL, '{\"feedback\":\"\"}'),
(48, 2, '2026-09-12 12:21:21.792', 'Today, I made 94 new calls with 0 follow-ups. Out of these, 1 member showed interest. Total calls: 94.', 94, 0, 1, 1, NULL, '{\"callsMade\":94,\"leadsQualified\":1,\"followupsDone\":\"0\",\"feedback\":\"Date: 12 September 2026\\n\\n- New Calls: 94\\n- Follow-ups: 0\\n- Interested: 01\\n- Total Calls: 94\"}'),
(49, 3, '2026-09-12 12:22:51.141', 'Good Evening, Sir.\nToday’s Work Update: • Total Calls: 40\n• Housing Leads: Followed up\n• App Postings: 3 completed\n• Weekend Call Work: Completed', 10, 0, 0, 1, NULL, '{\"callsMade\":10,\"leadsQualified\":0,\"followupsDone\":\"38\",\"feedback\":\"• Housing Leads Generated: 0\\n• New Calls: 10\\n• Old Calls Follow-up: 38\\n• Ad Postings Done: 3\\n• Prospects (Old & New): 0\\n• Site Visits: 0\"}'),
(50, 4, '2026-09-12 12:33:33.340', '\nNo.of existing prospects followup:30\nNo.of New Calls:0\nTotal Calls Made:30\nNo.of New Prospects:0\nNo.of Associate’s office Visits:1\nNo.of Enrollments:2\nNo.of associate site visits:0', 0, 0, 0, 1, NULL, '{\"feedback\":\"\"}'),
(51, 3, '2026-09-15 12:15:09.625', 'Good evening sir \n• Follow-up completed on all leads received today.\n• Repostings completed.\n• Completed 3 new postings (5-day follow-up postings).\n• Follow-up completed with hold customers', 18, 0, 2, 1, NULL, '{\"callsMade\":18,\"leadsQualified\":2,\"followupsDone\":\"15\",\"feedback\":\"• Housing Leads Generated: 2\\n• New Calls: 3\\n• Old Calls Follow-up: 15\\n• Ad Postings Done: 5\\n• Prospects (Old & New): 2\\n• Site Visits: 0\"}'),
(52, 4, '2026-09-15 12:21:31.601', '\nNo.of existing prospects followup:31\nNo.of New Calls:0\nTotal Calls Made:31\nNo.of New Prospects:0\nNo.of Associate’s office Visits:0\nNo.of Enrollments:2\nNo.of associate site visits:0', 0, 0, 0, 1, NULL, '{\"feedback\":\"\"}'),
(53, 2, '2026-09-15 12:23:59.657', 'Today, I made 67 new calls, completed 1 follow-up, and received 1 interested response.\n\nTotal Calls: 67', 67, 0, 1, 1, NULL, '{\"callsMade\":67,\"leadsQualified\":1,\"followupsDone\":\"1\",\"feedback\":\"Date: 15 September 2026\\n\\n- New Calls: 67\\n- Follow-ups: 01\\n- Interested: 01\\n- Total Calls: 67\"}');

-- --------------------------------------------------------

--
-- Table structure for table `DailyTarget`
--

CREATE TABLE `DailyTarget` (
  `id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `role_name` varchar(191) NOT NULL,
  `employee_id` int(11) DEFAULT NULL,
  `target_date` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `calls_target` int(11) NOT NULL DEFAULT 0,
  `site_visits_target` int(11) NOT NULL DEFAULT 0,
  `closed_deals_target` int(11) NOT NULL DEFAULT 0,
  `form_schema_json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`form_schema_json`)),
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Demo`
--

CREATE TABLE `Demo` (
  `id` int(11) NOT NULL,
  `lead_id` int(11) NOT NULL,
  `handler_id` int(11) NOT NULL,
  `scheduled_at` datetime(3) NOT NULL,
  `summary` text NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL,
  `accepted_at` datetime(3) DEFAULT NULL,
  `accepted_by` int(11) DEFAULT NULL,
  `status` varchar(191) NOT NULL DEFAULT 'PENDING'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Demo`
--

INSERT INTO `Demo` (`id`, `lead_id`, `handler_id`, `scheduled_at`, `summary`, `created_at`, `updated_at`, `accepted_at`, `accepted_by`, `status`) VALUES
(7, 31, 16, '2026-09-12 04:50:00.000', 'Demo Scheduled', '2026-09-11 12:30:50.518', '2026-09-11 12:34:07.141', '2026-09-11 12:34:07.140', 16, 'PENDING'),
(8, 30, 16, '2026-09-20 10:02:00.000', 'Demo Scheduled', '2026-09-11 12:34:42.620', '2026-09-11 12:34:42.620', NULL, NULL, 'PENDING');

-- --------------------------------------------------------

--
-- Table structure for table `DemoInterestedProperty`
--

CREATE TABLE `DemoInterestedProperty` (
  `id` int(11) NOT NULL,
  `demo_id` int(11) NOT NULL,
  `property_id` int(11) DEFAULT NULL,
  `project_unit_id` int(11) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Employee`
--

CREATE TABLE `Employee` (
  `id` int(11) NOT NULL,
  `employee_code` varchar(191) NOT NULL,
  `company_id` int(11) NOT NULL,
  `branch_id` int(11) DEFAULT NULL,
  `password_hash` varchar(191) NOT NULL,
  `status` varchar(191) NOT NULL DEFAULT 'ACTIVE',
  `token_version` int(11) NOT NULL DEFAULT 1,
  `attendance_required` tinyint(1) NOT NULL DEFAULT 1,
  `first_login_done` tinyint(1) NOT NULL DEFAULT 0,
  `report_required` tinyint(1) NOT NULL DEFAULT 1,
  `full_name` varchar(191) DEFAULT NULL,
  `phone` varchar(191) DEFAULT NULL,
  `secondary_phone` varchar(191) DEFAULT NULL,
  `whatsapp_number` varchar(191) DEFAULT NULL,
  `email` varchar(191) DEFAULT NULL,
  `blood_group` varchar(191) DEFAULT NULL,
  `social_links` varchar(191) DEFAULT NULL,
  `profile_image_url` varchar(191) DEFAULT NULL,
  `current_address` varchar(191) DEFAULT NULL,
  `permanent_address` varchar(191) DEFAULT NULL,
  `emergency_contact_name` varchar(191) DEFAULT NULL,
  `emergency_contact_relation` varchar(191) DEFAULT NULL,
  `emergency_contact_phone` varchar(191) DEFAULT NULL,
  `pan_number` varchar(191) DEFAULT NULL,
  `aadhaar_number` varchar(191) DEFAULT NULL,
  `bank_name` varchar(191) DEFAULT NULL,
  `bank_account_number` varchar(191) DEFAULT NULL,
  `bank_ifsc` varchar(191) DEFAULT NULL,
  `bank_branch` varchar(191) DEFAULT NULL,
  `job_title` varchar(191) DEFAULT NULL,
  `department` varchar(191) DEFAULT NULL,
  `employment_type` varchar(191) DEFAULT 'FULL_TIME',
  `reporting_manager_id` int(11) DEFAULT NULL,
  `date_of_joining` datetime(3) DEFAULT NULL,
  `salary_ctc` double DEFAULT NULL,
  `background_education` varchar(191) DEFAULT NULL,
  `resignation_date` datetime(3) DEFAULT NULL,
  `last_working_day` datetime(3) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL,
  `deleted_at` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Employee`
--

INSERT INTO `Employee` (`id`, `employee_code`, `company_id`, `branch_id`, `password_hash`, `status`, `token_version`, `attendance_required`, `first_login_done`, `report_required`, `full_name`, `phone`, `secondary_phone`, `whatsapp_number`, `email`, `blood_group`, `social_links`, `profile_image_url`, `current_address`, `permanent_address`, `emergency_contact_name`, `emergency_contact_relation`, `emergency_contact_phone`, `pan_number`, `aadhaar_number`, `bank_name`, `bank_account_number`, `bank_ifsc`, `bank_branch`, `job_title`, `department`, `employment_type`, `reporting_manager_id`, `date_of_joining`, `salary_ctc`, `background_education`, `resignation_date`, `last_working_day`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'RRH-ADMIN-001', 1, 1, '$2a$12$xZxtr0m3fffu8S7cLWmdSuxPu0xUoq656RZXN9GLCY3r5.myROz0a', 'ACTIVE', 1, 0, 1, 1, 'Admin', '7075196267', '', '', 'vyasthratechnicalteam@gmail.com', '', '', NULL, '1-185, BESIDE VINAYAKA TEMPLE, CHEEDIGA, KAKINADA', '', '', '', '', 'c91a1c1b29ac706f6cdae9d2aede20c4:06559cac1422be56088642ce93965e36', 'd610b75fe9ebb18af36efcfe120e40d1:e9b8faf0148561cbb4a7013cb9661579', '8952fd62287724366bd4e95d544426f8:ee48ec0e11cbec05e531f8010a53a920', '7db4b2dd2245e445a4278c57a65c4b1d:9aa0ee4539f1751c857ff13e1ed616c4', 'bf81dead1dffff5ec69413e64bf4c621:5c378549ed2fa27b5ea5ad4bfce33d16', '022162cc2539a0ad5d24cdafb178ee74:852bebfac0a13c0e1eb3ae0855b43019', NULL, NULL, 'FULL_TIME', NULL, NULL, NULL, NULL, NULL, NULL, '2026-08-31 23:03:11.276', '2026-09-03 06:23:41.110', NULL),
(2, 'RRH-SL-8736', 1, 1, '$2a$12$IeOrvpsclTwbYGZm6qkGW.lZzZHV9UfR/NicCT2.EqlKBJV09RrO2', 'ACTIVE', 3, 1, 1, 1, 'Deepa Shanagonda', '7285904060', '8328347187', '7285984060', '', '', '', NULL, 'New ram nagar colony,Chilkanagr ', 'Uppal, Hyderabad ', 'D.badrinath chary', 'Brother ', '9391709329', 'a1abf2ae4e741de1da5df10204b916d2:228194ec78905724353d101fbf1e9f0b', 'f2f03d6b2b921e6d46da8367bbf62039:616ab689211148bc0a8754d6728e450b', '317a25b0de894948f0b9f0a470286bd1:da6b54ddbd14e6804bd652da04b063573a628e94f15590e7c75ba067213ece09', '849027e0fad2ee89f6daa19eac2cdde6:72588887ca1fb96d880a71775beb2ce3', 'da33a078769e7b73321406f85c99de02:aab9202c9797acfdf27bc5a3f73650dd', 'b5b5d5df2b9bdd722d1c9e242559e635:4f8563e9a0d639c963a7e71194c3b123', 'telecallers', 'Sales & Leads', 'FULL_TIME', NULL, '2026-09-01 00:00:00.000', 35000, '', NULL, NULL, '2026-09-01 04:47:33.062', '2026-09-03 06:23:41.603', NULL),
(3, 'RRH-MK-8486', 1, 1, '$2a$12$XpF7BSLTSv3DpoAUgH2stODbtmyy4L1U8ljCsAmSXR.GP8MS7kq8W', 'ACTIVE', 3, 1, 1, 1, 'vasantha', '+91 630 5497853', '8919776059', '6305497853', '', '', '', NULL, '', '', 'Vittal ', 'Father ', '9381954876', '0d9ed499ca72921f0d8b4c738997d432:f05468c139c3c7d4870b3f3dcf6b3a51', '', 'a4f2ff1e37f3198ade8906ad6acc4671:f886f88bea16ff585e4c942430722c707c58732759ccb963933898b32d36baa1', '753f07871a32062ef5fe14bcc10aca6f:0daa0ddaf308e0096ab6efbb79628c2d', 'b781f561687391fae2b2099909987e2f:e3b707b8d165287af5aad27eae21a0a6', '0d3cad572eb8028ab0df05579669a53a:2ab16936f1c790457786c0ec4d56054b', 'telecallers', 'Sales & Leads', 'FULL_TIME', NULL, '2026-09-01 00:00:00.000', 35000, '', NULL, NULL, '2026-09-01 04:52:37.389', '2026-09-03 06:23:41.855', NULL),
(4, 'RRH-CP-5867', 1, 1, '$2a$12$e9XhcJMxRMNoMV1AdEmv2uVC6dtwI3BKXVnqkmcunmHqbZGUH2cIy', 'ACTIVE', 4, 1, 1, 1, 'siri', '8096483984', NULL, '8096483984', '', 'O+', NULL, NULL, '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, 'Channel partner manager', 'Sales & Leads', 'FULL_TIME', NULL, '2026-09-01 00:00:00.000', 35000, '', NULL, NULL, '2026-09-01 05:07:39.500', '2026-09-11 13:05:05.645', NULL),
(6, 'RRH-MK-9873', 1, 1, '$2a$12$GxGOGF9lvySDk2XIuY1LhuRd3wFBS71jnecbDd0wdHxJq0Z1PX5EK', 'ACTIVE', 2, 1, 1, 1, 'ANITHA SP', '8826519777', NULL, '8826519777', '', 'O+', NULL, NULL, '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, 'digital marketing executive', 'Sales & Leads', 'FULL_TIME', NULL, '2026-09-01 00:00:00.000', 35000, '', NULL, NULL, '2026-09-01 10:02:22.558', '2026-09-01 10:07:04.641', NULL),
(7, 'RRH-OP-3901', 1, 1, '$2a$12$wTWEgZLytTZL8Mge5BGy.enAkrhMuWfpsziVSiMkD6vYv7mXpcgNO', 'ACTIVE', 2, 1, 1, 1, 'DINESH V', '7732068669', '', '', '', '', '', NULL, '1-185 Ganesh Templega, Indrapalem, East Godavari, Kakinada Rural, Andhra Pradesh, India, 533006.', '1-185 Ganesh Templega, Indrapalem, East Godavari, Kakinada Rural, Andhra Pradesh, India, 533006.', '', '', '', '', '', '', '', '', '', 'project managers', 'Sales & Leads', 'FULL_TIME', NULL, '2026-09-01 00:00:00.000', 35000, '', NULL, NULL, '2026-09-01 10:05:18.876', '2026-09-01 10:37:59.398', NULL),
(16, 'RRH-OP-3514', 1, 1, '$2a$12$QwsLLfAjo9qHtl86Ei5G2u8PyLInAyJT9tdjGxWAY3evDYaIdUSfm', 'ACTIVE', 2, 1, 1, 1, 'Ruhan', '9542226473', NULL, '9542279927', 'example1@gmail.com', 'O+', NULL, NULL, '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, 'Project Manager', 'Marketing', 'FULL_TIME', NULL, '2026-09-03 00:00:00.000', 35000, '', NULL, NULL, '2026-09-01 06:57:37.793', '2026-09-16 06:01:35.330', NULL),
(17, 'RRH-MK-5052', 1, 1, '$2a$12$IzYyBTyLg6vb6Z0HWsLhiu87DyohxLjrzlBRzt8QabBZ5DHsudM0W', 'ACTIVE', 2, 1, 1, 0, 'satish', '7013267695', NULL, '7013249695', 'example55@gmail.com', 'B+', NULL, NULL, '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, 'Digital Marketing executive', 'Sales & Leads', 'PART_TIME', NULL, '2026-09-01 00:00:00.000', 35000, '', NULL, NULL, '2026-09-03 08:33:45.974', '2026-09-16 06:02:49.363', NULL),
(31, 'RRH-EX-27369', 1, 1, '$2a$12$h5shNooNPuO1AZYH1fUCaOC49S6UG/9P6OJVpTqR1mLs5qYRTa/fO', 'ACTIVE', 2, 0, 1, 1, 'Ramesh Cheekatla', '8374569056', NULL, '8374569056', 'amruthswaroopvasamsetti@gmail.com', 'O+', NULL, NULL, '', '', '', '', '', '3a0b923b585f4c1bc60841aa1a6be0cd:df902ca35301d872b8a9331240f56ebb', 'fbed5758a65b09c28be0e79e9c72b1fa:ddc9608acfe7d79cdc0f66666b72586d', NULL, NULL, 'f51d04de5ab68072596369291ed6ae93:7b83fe93f75abe2b658c783f452065e8', NULL, 'Managing director', 'Executive', 'FULL_TIME', NULL, '2026-09-06 00:00:00.000', 35000, '', NULL, NULL, '2026-09-06 12:20:58.655', '2026-09-06 12:23:14.881', NULL),
(33, 'RRH-SL-4770', 1, 1, '$2a$12$mYCKmvwXiYEIo0o.gG6QD.vhCn9QT9bk6tS9g5K6HpSGLSIUQBgJ2', 'ACTIVE', 1, 1, 0, 1, 'Padma ', '9988776655', NULL, '9988776655', 'example34@gmail.com', 'O+', NULL, NULL, '', '', '', '', '', '582636b3c32973470be8c34d39ea333e:4fad5fbe8bc09026c5742a2afd5074d1', '977b9542d009854dad56ff328777c448:a8715270229ea9f70161095798c5d37d', 'c5afb1400529838acfb58eee2d9a6340:a8edd53fdf1a0c9db141ea3385c9ab77', '360c421c13e65c862b260e4c43baa094:6272a0f9e4ebe9ee86f1bf04c95fbfe5', '0ec52c57fec0d0c7b2dd93a3e28cd19e:2e4725a91eb3df335d05591d636c61ce', '58c12bec395b5e87a27c541e0a9008a7:6d67a5b74d5c389c1699a4d18e6347ed', 'House keeping', 'Sales & Leads', 'FULL_TIME', NULL, '2026-09-11 00:00:00.000', 35000, '', NULL, NULL, '2026-09-11 04:20:20.057', '2026-09-16 06:01:52.264', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `EmployeeBranch`
--

CREATE TABLE `EmployeeBranch` (
  `employee_id` int(11) NOT NULL,
  `branch_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `EmployeeCompanyAccess`
--

CREATE TABLE `EmployeeCompanyAccess` (
  `employee_id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `EmployeePermissionOverride`
--

CREATE TABLE `EmployeePermissionOverride` (
  `employee_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  `is_granted` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `EmployeeQrCode`
--

CREATE TABLE `EmployeeQrCode` (
  `id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `qr_token` varchar(191) NOT NULL,
  `generated_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `expires_at` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `EmployeeQrCode`
--

INSERT INTO `EmployeeQrCode` (`id`, `employee_id`, `qr_token`, `generated_at`, `expires_at`) VALUES
(1, 2, 'f1785a13bd54e011f9a61160fb5edf2f8ff0f7bff2e3b533ced5dad43fcef108', '2026-09-01 04:55:38.295', NULL),
(2, 1, '134903b63c42a848d080f28ce34a693bb58bd3c4177fef11421d598d9faca29d', '2026-09-01 04:57:15.327', NULL),
(3, 3, '729b0725f6a19aa657296ee2c3ef982b97c29bb31c5e7cb395cb62d2b726dc47', '2026-09-01 05:00:11.589', NULL),
(4, 4, 'b8964563075b6a095f4fb489491ee293f660c54ae30fef02013de0e645789f37', '2026-09-01 05:17:04.393', NULL),
(5, 7, '6b0b8dd876212f2127338a25d30a82c2df43ad5a5874b10743069d7f4cbd6ffb', '2026-09-01 10:13:04.965', NULL),
(6, 6, 'e28f842a5ee07775f503a29d617959bbeee4ff731d92f1db5759a340386d8071', '2026-09-01 10:13:06.327', NULL),
(8, 17, 'b65f693068b16cd1101bff4e550b347f86428fba68d4afc57a82f868db3143e6', '2026-09-03 09:28:31.593', NULL),
(9, 31, '15b28f72876151c3b811904c07173b5a62463ed0e7e31f7889943a167d173e89', '2026-09-06 12:25:04.319', NULL),
(10, 16, '38e73c2f10f5155479f92f9afd1c067acad1e71e78cc6b72369528c511f3f2ce', '2026-09-08 08:09:02.454', NULL),
(12, 33, '9a32ed0967139099a681d501c01e490cfa2d4231defee0ca4691fa92e3941537', '2026-09-11 04:20:36.598', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `EmployeeRole`
--

CREATE TABLE `EmployeeRole` (
  `employee_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `EmployeeRole`
--

INSERT INTO `EmployeeRole` (`employee_id`, `role_id`) VALUES
(31, 1),
(1, 2),
(7, 5),
(16, 5),
(2, 7),
(3, 7),
(33, 10),
(6, 11),
(17, 11),
(4, 13);

-- --------------------------------------------------------

--
-- Table structure for table `ExpenseRefund`
--

CREATE TABLE `ExpenseRefund` (
  `id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `purpose` text NOT NULL,
  `amount` double NOT NULL,
  `proof_image_url` varchar(191) DEFAULT NULL,
  `status` varchar(191) NOT NULL DEFAULT 'PENDING',
  `accountant_id` int(11) DEFAULT NULL,
  `accountant_note` varchar(191) DEFAULT NULL,
  `accountant_reviewed_at` datetime(3) DEFAULT NULL,
  `md_id` int(11) DEFAULT NULL,
  `md_note` varchar(191) DEFAULT NULL,
  `md_reviewed_at` datetime(3) DEFAULT NULL,
  `refunded_at` datetime(3) DEFAULT NULL,
  `refunded_by` int(11) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Installment`
--

CREATE TABLE `Installment` (
  `id` int(11) NOT NULL,
  `booking_id` int(11) NOT NULL,
  `installment_number` int(11) NOT NULL,
  `expected_amount` double NOT NULL,
  `received_amount` double NOT NULL DEFAULT 0,
  `due_date` datetime(3) NOT NULL,
  `received_date` datetime(3) DEFAULT NULL,
  `status` varchar(191) NOT NULL DEFAULT 'PENDING',
  `recorded_by_id` int(11) DEFAULT NULL,
  `remarks` text DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `IntegrationEvent`
--

CREATE TABLE `IntegrationEvent` (
  `id` int(11) NOT NULL,
  `event_type` varchar(191) NOT NULL,
  `payload` text NOT NULL,
  `status` varchar(191) NOT NULL DEFAULT 'CREATED',
  `company_id` int(11) NOT NULL,
  `crms_booking_id` int(11) DEFAULT NULL,
  `crms_customer_id` int(11) DEFAULT NULL,
  `retry_count` int(11) NOT NULL DEFAULT 0,
  `max_retries` int(11) NOT NULL DEFAULT 3,
  `error_message` text DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `processed_at` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `InventoryFeature`
--

CREATE TABLE `InventoryFeature` (
  `id` int(11) NOT NULL,
  `project_unit_id` int(11) DEFAULT NULL,
  `property_id` int(11) DEFAULT NULL,
  `amenity_id` int(11) DEFAULT NULL,
  `label` varchar(191) NOT NULL,
  `charge_amount` double DEFAULT NULL,
  `sort_order` int(11) NOT NULL DEFAULT 0,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `KioskCredential`
--

CREATE TABLE `KioskCredential` (
  `id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `branch_id` int(11) NOT NULL,
  `label` varchar(191) NOT NULL,
  `username` varchar(191) NOT NULL,
  `password_hash` varchar(191) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `credential_version` int(11) NOT NULL DEFAULT 1,
  `created_by_id` int(11) NOT NULL,
  `updated_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `KioskCredential`
--

INSERT INTO `KioskCredential` (`id`, `company_id`, `branch_id`, `label`, `username`, `password_hash`, `is_active`, `credential_version`, `created_by_id`, `updated_at`, `created_at`) VALUES
(1, 1, 1, 'Attendance portal', 'Attendance-001', '$2a$12$/OUeMqlYG5.R93itI0uXZuwk6WLh8FrNeEHOQ5paPWnmhdUkvmDN2', 1, 1, 1, '2026-09-01 04:12:31.325', '2026-09-01 04:12:31.325');

-- --------------------------------------------------------

--
-- Table structure for table `Lead`
--

CREATE TABLE `Lead` (
  `id` int(11) NOT NULL,
  `lead_code` varchar(191) NOT NULL,
  `company_id` int(11) NOT NULL,
  `branch_id` int(11) DEFAULT NULL,
  `customer_name` varchar(191) NOT NULL,
  `phone` varchar(191) NOT NULL,
  `email` varchar(191) DEFAULT NULL,
  `source` varchar(191) NOT NULL DEFAULT 'MANUAL_ENTRY',
  `ownership_type` enum('POOL','DIRECT') NOT NULL DEFAULT 'POOL',
  `status` varchar(191) NOT NULL DEFAULT 'NEW',
  `assigned_to_id` int(11) DEFAULT NULL,
  `assigned_at` datetime(3) DEFAULT NULL,
  `assignment_type` varchar(191) DEFAULT NULL,
  `property_type_preference` varchar(191) DEFAULT NULL,
  `budget_min` double DEFAULT NULL,
  `budget_max` double DEFAULT NULL,
  `preferred_location` varchar(191) DEFAULT NULL,
  `notes` text DEFAULT NULL,
  `created_by_id` int(11) DEFAULT NULL,
  `introduced_by_id` int(11) DEFAULT NULL,
  `last_contacted_at` datetime(3) DEFAULT NULL,
  `campaign` varchar(191) DEFAULT NULL,
  `utm_source` varchar(191) DEFAULT NULL,
  `utm_medium` varchar(191) DEFAULT NULL,
  `utm_campaign` varchar(191) DEFAULT NULL,
  `lead_score` int(11) NOT NULL DEFAULT 0,
  `sla_breach_at` datetime(3) DEFAULT NULL,
  `referral_person_name` varchar(191) DEFAULT NULL,
  `referral_employee_id` int(11) DEFAULT NULL,
  `previous_lead_id` int(11) DEFAULT NULL,
  `external_agent_name` varchar(191) DEFAULT NULL,
  `external_agent_phone` varchar(191) DEFAULT NULL,
  `external_agent_associate_id` varchar(191) DEFAULT NULL,
  `external_agent_company` varchar(191) DEFAULT NULL,
  `project_id` int(11) DEFAULT NULL,
  `enquiry_type` varchar(191) DEFAULT NULL,
  `preferred_contact_time` varchar(191) DEFAULT NULL,
  `property_ids` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`property_ids`)),
  `exit_reason` enum('NO_MATCHING_INVENTORY','CHOSE_COMPETITOR','BUDGET_MISMATCH','NOT_READY','DO_NOT_CONTACT','UNRESPONSIVE','INVALID_CONTACT','DUPLICATE_LEAD','FINANCING_ISSUE','LOCATION_MISMATCH','ALREADY_PURCHASED','JUST_ENQUIRING','SITE_VISIT_NO_SHOW','NEGOTIATION_FAILED','OUT_OF_SERVICE_AREA','OTHER') DEFAULT NULL,
  `exit_reason_detail` varchar(191) DEFAULT NULL,
  `exited_from_status` varchar(191) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Lead`
--

INSERT INTO `Lead` (`id`, `lead_code`, `company_id`, `branch_id`, `customer_name`, `phone`, `email`, `source`, `ownership_type`, `status`, `assigned_to_id`, `assigned_at`, `assignment_type`, `property_type_preference`, `budget_min`, `budget_max`, `preferred_location`, `notes`, `created_by_id`, `introduced_by_id`, `last_contacted_at`, `campaign`, `utm_source`, `utm_medium`, `utm_campaign`, `lead_score`, `sla_breach_at`, `referral_person_name`, `referral_employee_id`, `previous_lead_id`, `external_agent_name`, `external_agent_phone`, `external_agent_associate_id`, `external_agent_company`, `project_id`, `enquiry_type`, `preferred_contact_time`, `property_ids`, `exit_reason`, `exit_reason_detail`, `exited_from_status`, `created_at`, `updated_at`) VALUES
(30, 'RRH-LD-2026-0001', 1, 1, 'sandeep', '7075196267', NULL, 'SOCIAL_MEDIA', 'POOL', 'DEMO_SCHEDULED', 3, '2026-09-11 12:04:29.156', 'MANUAL_OVERRIDE', 'RESIDENTIAL_APARTMENT', 50000000, 1000000000, 'Taranaka', NULL, 1, NULL, '2026-09-11 12:34:42.619', NULL, NULL, NULL, NULL, 0, '2026-09-11 14:03:52.736', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2026-09-11 12:03:52.796', '2026-09-11 12:34:43.094'),
(31, 'RRH-LD-2026-0002', 1, 1, 'Swaroop', '7780167743', NULL, 'ORGANIC_SEARCH', 'POOL', 'DEMO_COMPLETED', 2, '2026-09-11 12:04:19.951', 'PERFORMANCE_WEIGHTED', 'RESIDENTIAL_APARTMENT', 50000000, 10000000000, 'Tarnaka', NULL, 1, NULL, '2026-09-11 12:30:50.517', NULL, NULL, NULL, NULL, 0, '2026-09-11 14:04:19.892', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2026-09-11 12:04:19.952', '2026-09-11 12:51:44.886');

-- --------------------------------------------------------

--
-- Table structure for table `LeadActivity`
--

CREATE TABLE `LeadActivity` (
  `id` int(11) NOT NULL,
  `lead_id` int(11) NOT NULL,
  `actor_id` int(11) NOT NULL,
  `activity_type` varchar(191) NOT NULL,
  `notes` text DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `LeadActivity`
--

INSERT INTO `LeadActivity` (`id`, `lead_id`, `actor_id`, `activity_type`, `notes`, `created_at`) VALUES
(33, 30, 1, 'LEAD_CREATED', 'Lead RRH-LD-2026-0001 registered via SOCIAL_MEDIA', '2026-09-11 12:03:53.035'),
(34, 30, 1, 'ASSIGNED_TO_AGENT', 'Auto-distributed to Deepa Shanagonda (RRH-SL-8736) [Weight Score: 114.4]', '2026-09-11 12:03:53.267'),
(35, 31, 1, 'LEAD_CREATED', 'Lead RRH-LD-2026-0002 registered via ORGANIC_SEARCH', '2026-09-11 12:04:20.193'),
(36, 31, 1, 'ASSIGNED_TO_AGENT', 'Auto-distributed to Deepa Shanagonda (RRH-SL-8736) [Weight Score: 111.4]', '2026-09-11 12:04:20.427'),
(37, 30, 1, 'ASSIGNED_TO_AGENT', 'Manual Reassignment to vasantha. Reason: Inline reassignment', '2026-09-11 12:04:29.446'),
(38, 31, 2, 'STATUS_CHANGED', 'Status updated from ASSIGNED to CONTACTED: Updated directly from Daily Calling List', '2026-09-11 12:08:07.056'),
(39, 30, 3, 'STATUS_CHANGED', 'Status updated from ASSIGNED to CONTACTED: Updated directly from Daily Calling List', '2026-09-11 12:18:57.360'),
(40, 31, 2, 'STATUS_CHANGED', 'Status updated from CONTACTED to QUALIFIED: Updated directly from Daily Calling List', '2026-09-11 12:23:56.201'),
(41, 31, 1, 'PROPERTY_INTEREST_ADDED', 'Added interest in Property RRH-PR-2026-0001 (2BHK in tarnaka)', '2026-09-11 12:30:26.606'),
(42, 31, 2, 'DEMO_SCHEDULED', 'Status updated from QUALIFIED to DEMO_SCHEDULED', '2026-09-11 12:30:51.274'),
(43, 30, 3, 'STATUS_CHANGED', 'Status updated from CONTACTED to QUALIFIED: Updated directly from Daily Calling List', '2026-09-11 12:32:04.303'),
(44, 30, 3, 'DEMO_SCHEDULED', 'Status updated from QUALIFIED to DEMO_SCHEDULED', '2026-09-11 12:34:43.394'),
(45, 31, 2, 'WHATSAPP_SENT', 'WhatsApp proposal sent using template LEAD_PROPERTY_PROPOSAL for Property RRH-PR-2026-0001 (2BHK in tarnaka)', '2026-09-11 12:35:04.414'),
(46, 31, 16, 'DEMO_COMPLETED', 'Interested....need two days time for investment ', '2026-09-11 12:51:45.486'),
(47, 31, 2, 'SITE_VISIT_REQUESTED', 'Site visit scheduled. Auto-routed to project PM.', '2026-09-11 12:58:05.009'),
(48, 31, 2, 'SITE_VISIT_REQUESTED', 'Site visit scheduled. Auto-routed to project PM.', '2026-09-11 12:58:07.323'),
(49, 30, 3, 'PROPERTY_INTEREST_ADDED', 'Added interest in Property RRH-PR-2026-0001 (2BHK in tarnaka)', '2026-09-11 13:19:11.154'),
(50, 30, 3, 'PROPERTY_INTEREST_ADDED', 'Added interest in Property RRH-PR-2026-0001 (2BHK in tarnaka)', '2026-09-11 13:19:12.869'),
(51, 30, 3, 'WHATSAPP_SENT', 'WhatsApp proposal sent using template LEAD_PROPERTY_PROPOSAL for Property RRH-PR-2026-0001 (2BHK in tarnaka)', '2026-09-11 13:19:22.189'),
(52, 30, 3, 'WHATSAPP_SENT', 'WhatsApp proposal sent using template LEAD_PROPERTY_PROPOSAL for Property RRH-PR-2026-0001 (2BHK in tarnaka)', '2026-09-11 13:19:48.875'),
(53, 30, 3, 'SITE_VISIT_REQUESTED', 'Site visit scheduled. Auto-routed to project PM.', '2026-09-11 13:21:12.630');

-- --------------------------------------------------------

--
-- Table structure for table `LeadMatchingRequirement`
--

CREATE TABLE `LeadMatchingRequirement` (
  `id` int(11) NOT NULL,
  `lead_id` int(11) NOT NULL,
  `property_type` varchar(191) NOT NULL,
  `location` varchar(191) NOT NULL,
  `max_budget` double NOT NULL,
  `min_bedrooms` int(11) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `LeadPreferredLocation`
--

CREATE TABLE `LeadPreferredLocation` (
  `id` int(11) NOT NULL,
  `lead_id` int(11) NOT NULL,
  `location` varchar(191) NOT NULL,
  `sort_order` int(11) NOT NULL DEFAULT 0,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `LeadPreferredLocation`
--

INSERT INTO `LeadPreferredLocation` (`id`, `lead_id`, `location`, `sort_order`, `created_at`) VALUES
(2, 31, 'Tarnaka', 0, '2026-09-11 12:23:55.804'),
(3, 30, 'Taranaka', 0, '2026-09-11 12:32:03.756');

-- --------------------------------------------------------

--
-- Table structure for table `LeadPropertyInterest`
--

CREATE TABLE `LeadPropertyInterest` (
  `id` int(11) NOT NULL,
  `lead_id` int(11) NOT NULL,
  `property_id` int(11) DEFAULT NULL,
  `project_unit_id` int(11) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_by` int(11) NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `LeadPropertyInterest`
--

INSERT INTO `LeadPropertyInterest` (`id`, `lead_id`, `property_id`, `project_unit_id`, `is_active`, `created_by`, `created_at`) VALUES
(2, 31, 2, NULL, 1, 1, '2026-09-11 12:30:26.265'),
(3, 30, 2, NULL, 1, 3, '2026-09-11 13:19:10.825');

-- --------------------------------------------------------

--
-- Table structure for table `MessageTemplate`
--

CREATE TABLE `MessageTemplate` (
  `id` int(11) NOT NULL,
  `template_key` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `body_text` text NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Notification`
--

CREATE TABLE `Notification` (
  `id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `type` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `message` varchar(191) NOT NULL,
  `is_read` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Notification`
--

INSERT INTO `Notification` (`id`, `employee_id`, `type`, `title`, `message`, `is_read`, `created_at`) VALUES
(2, 3, 'ROLE_CHANGED', '🏷️ Your Roles Have Been Updated', 'Your system roles have been updated by an administrator. Please log in again to apply changes.', 1, '2026-09-02 17:34:33.311'),
(3, 2, 'SYSTEM', 'Proposal Rejected', 'Your leave request for 9/2/2026 has been rejected.', 1, '2026-09-03 07:11:05.532'),
(4, 6, 'SYSTEM', 'Proposal Approved', 'Your late request for 9/4/2026 has been approved.', 1, '2026-09-04 09:15:17.068'),
(5, 6, 'SYSTEM', 'Proposal Approved', 'Your late request for 9/4/2026 has been approved.', 1, '2026-09-04 10:12:32.963'),
(6, 6, 'SYSTEM', 'Proposal Approved', 'Your late request for 9/4/2026 has been approved.', 1, '2026-09-04 10:12:35.890'),
(13, 1, 'SYSTEM_ALERT', 'Active Lead Re-Inquiry', 'Your active lead RRH-LD-2026-0001 (sandeep) submitted a new inquiry via ORGANIC_SEARCH.', 1, '2026-09-05 23:15:45.794'),
(16, 3, 'SYSTEM', 'Proposal Approved', 'Your leave request for 9/4/2026 has been approved.', 1, '2026-09-08 09:46:39.804'),
(17, 2, 'TARGET_ASSIGNED', 'New Lead Auto-Assigned', 'New Lead sandeep (7075196267) has been assigned to you.', 1, '2026-09-11 12:03:53.384'),
(18, 2, 'TARGET_ASSIGNED', 'New Lead Auto-Assigned', 'New Lead Swaroop (7780167743) has been assigned to you.', 1, '2026-09-11 12:04:20.545'),
(19, 3, 'TARGET_ASSIGNED', 'Lead Assigned to You', 'Lead RRH-LD-2026-0001 (sandeep) has been assigned to you by 1. Reason: Inline reassignment', 0, '2026-09-11 12:04:29.671'),
(20, 2, 'STATUS_UPDATE', 'Lead RRH-LD-2026-0002 — Status Updated', 'Swaroop moved from ASSIGNED to CONTACTED. Updated directly from Daily Calling List', 1, '2026-09-11 12:08:07.290'),
(21, 31, 'SYSTEM_ALERT', 'Property Requires PM Assignment', 'Property RRH-PR-2026-0001 (2BHK in tarnaka) was created without an assigned PM. Location: Hyderabad', 1, '2026-09-11 12:08:21.756'),
(22, 3, 'STATUS_UPDATE', 'Lead RRH-LD-2026-0001 — Status Updated', 'sandeep moved from ASSIGNED to CONTACTED. Updated directly from Daily Calling List', 0, '2026-09-11 12:18:57.641'),
(23, 2, 'STATUS_UPDATE', 'Lead RRH-LD-2026-0002 — Status Updated', 'Swaroop moved from CONTACTED to QUALIFIED. Updated directly from Daily Calling List', 1, '2026-09-11 12:23:56.432'),
(24, 16, 'DEMO_SCHEDULED', 'Demo Scheduled: Swaroop', 'A demo for Swaroop (RRH-LD-2026-0002) has been scheduled for 9/12/2026, 10:20:00 AM.', 1, '2026-09-11 12:30:50.746'),
(25, 2, 'STATUS_UPDATE', 'Lead RRH-LD-2026-0002 — Status Updated', 'Swaroop moved from QUALIFIED to DEMO_SCHEDULED', 1, '2026-09-11 12:30:51.388'),
(26, 3, 'STATUS_UPDATE', 'Lead RRH-LD-2026-0001 — Status Updated', 'sandeep moved from CONTACTED to QUALIFIED. Updated directly from Daily Calling List', 0, '2026-09-11 12:32:04.599'),
(27, 16, 'DEMO_ACCEPTED', 'Demo Accepted: Swaroop', 'Your demo for Swaroop (RRH-LD-2026-0002) is confirmed for 9/12/2026, 10:20:00 AM.', 1, '2026-09-11 12:34:07.895'),
(28, 2, 'SYSTEM_ALERT', 'Demo Accepted: Swaroop', 'The demo handler has accepted the demo for Swaroop.', 1, '2026-09-11 12:34:08.267'),
(29, 16, 'DEMO_SCHEDULED', 'Demo Scheduled: sandeep', 'A demo for sandeep (RRH-LD-2026-0001) has been scheduled for 9/20/2026, 3:32:00 PM.', 1, '2026-09-11 12:34:42.859'),
(30, 3, 'STATUS_UPDATE', 'Lead RRH-LD-2026-0001 — Status Updated', 'sandeep moved from QUALIFIED to DEMO_SCHEDULED', 0, '2026-09-11 12:34:43.629'),
(31, 4, 'ROLE_CHANGED', '🏷️ Your Roles Have Been Updated', 'Your system roles have been updated by an administrator. Please log in again to apply changes.', 1, '2026-09-11 13:04:32.706'),
(32, 4, 'ROLE_CHANGED', '🏷️ Your Roles Have Been Updated', 'Your system roles have been updated by an administrator. Please log in again to apply changes.', 1, '2026-09-11 13:05:06.160'),
(33, 16, 'TASK_ASSIGNED', '📋 New Task Assigned to You', 'Task \"Demo to Nune Prem Swaroop\" has been assigned to you. Deadline: 12/9/2026.', 1, '2026-09-11 13:20:51.004'),
(34, 16, 'SYSTEM_ALERT', '🎉 Task Completed!', 'Great job! You completed \"Demo to Nune Prem Swaroop\" and earned +1.0 performance points!', 1, '2026-09-11 13:22:27.362'),
(35, 31, 'SYSTEM', '🕛 4 employees auto-checked-out at midnight', 'Padma , satish, ANITHA SP, Ruhan did not check out and were automatically logged out at midnight.', 0, '2026-09-11 18:30:03.113'),
(36, 31, 'SYSTEM', '⚠️ 1 uninformed absence on 2026-09-11', 'DINESH V had no attendance log and no approved leave for 2026-09-11.', 0, '2026-09-11 18:30:05.481'),
(37, 31, 'BACKUP_VERIFICATION', '⚠️ Nightly backup verification failed', 'mysqldump is not installed / not on PATH in this environment — this job cannot run here at all.', 1, '2026-09-12 00:30:00.156'),
(38, 31, 'SYSTEM', '🕛 3 employees auto-checked-out at midnight', 'Padma , ANITHA SP, satish did not check out and were automatically logged out at midnight.', 0, '2026-09-12 18:30:02.897'),
(39, 6, 'SYSTEM', '📋 Daily report missing', 'You attended on 2026-09-12 but didn\'t submit a daily report — this cost 1.0 performance point.', 0, '2026-09-12 18:30:05.260'),
(40, 33, 'SYSTEM', '📋 Daily report missing', 'You attended on 2026-09-12 but didn\'t submit a daily report — this cost 1.0 performance point.', 0, '2026-09-12 18:30:05.753'),
(41, 2, 'SYSTEM', '🎯 Cleared your desk!', 'You submitted your daily report and had no open tasks left on 2026-09-12 — +1.0 performance point.', 1, '2026-09-12 18:30:07.499'),
(42, 3, 'SYSTEM', '🎯 Cleared your desk!', 'You submitted your daily report and had no open tasks left on 2026-09-12 — +1.0 performance point.', 0, '2026-09-12 18:30:08.035'),
(43, 4, 'SYSTEM', '🎯 Cleared your desk!', 'You submitted your daily report and had no open tasks left on 2026-09-12 — +1.0 performance point.', 1, '2026-09-12 18:30:08.437'),
(44, 31, 'SYSTEM', '⚠️ 2 uninformed absences on 2026-09-12', 'DINESH V, Ruhan had no attendance log and no approved leave for 2026-09-12.', 0, '2026-09-12 18:30:09.847'),
(45, 16, 'ROLE_CHANGED', '🏷️ Your Role Has Been Updated', 'Your position has been updated to \"project managers\". Please check with your manager for next steps.', 0, '2026-09-16 06:01:35.984'),
(46, 16, 'BRANCH_CHANGED', '🏢 Your Branch/Department Has Changed', 'You have been transferred to a new branch/department. Please check with HR for your reporting details.', 0, '2026-09-16 06:01:35.984'),
(47, 16, 'JOB_TITLE_CHANGED', '💼 Your Job Title Has Been Updated', 'Your job title has been updated to \"Project Manager\".', 0, '2026-09-16 06:01:35.984'),
(48, 33, 'ROLE_CHANGED', '🏷️ Your Role Has Been Updated', 'Your position has been updated to \"Agent\". Please check with your manager for next steps.', 0, '2026-09-16 06:01:53.056'),
(49, 33, 'BRANCH_CHANGED', '🏢 Your Branch/Department Has Changed', 'You have been transferred to a new branch/department. Please check with HR for your reporting details.', 0, '2026-09-16 06:01:53.056'),
(50, 33, 'JOB_TITLE_CHANGED', '💼 Your Job Title Has Been Updated', 'Your job title has been updated to \"House keeping\".', 0, '2026-09-16 06:01:53.056'),
(51, 17, 'BRANCH_CHANGED', '🏢 Your Branch/Department Has Changed', 'You have been transferred to a new branch/department. Please check with HR for your reporting details.', 0, '2026-09-16 06:02:22.288'),
(52, 17, 'ROLE_CHANGED', '🏷️ Your Role Has Been Updated', 'Your position has been updated to \"digital marketing executive\". Please check with your manager for next steps.', 0, '2026-09-16 06:02:22.288'),
(53, 17, 'JOB_TITLE_CHANGED', '💼 Your Job Title Has Been Updated', 'Your job title has been updated to \"Digital Marketing executive\".', 0, '2026-09-16 06:02:22.288'),
(54, 17, 'ROLE_CHANGED', '🏷️ Your Role Has Been Updated', 'Your position has been updated to \"digital marketing executive\". Please check with your manager for next steps.', 0, '2026-09-16 06:02:50.014'),
(55, 17, 'BRANCH_CHANGED', '🏢 Your Branch/Department Has Changed', 'You have been transferred to a new branch/department. Please check with HR for your reporting details.', 0, '2026-09-16 06:02:50.015'),
(56, 17, 'JOB_TITLE_CHANGED', '💼 Your Job Title Has Been Updated', 'Your job title has been updated to \"Digital Marketing executive\".', 0, '2026-09-16 06:02:50.015');

-- --------------------------------------------------------

--
-- Table structure for table `Opportunity`
--

CREATE TABLE `Opportunity` (
  `id` int(11) NOT NULL,
  `opportunity_code` varchar(191) NOT NULL,
  `company_id` int(11) NOT NULL,
  `branch_id` int(11) DEFAULT NULL,
  `lead_id` int(11) NOT NULL,
  `project_id` int(11) DEFAULT NULL,
  `property_id` int(11) DEFAULT NULL,
  `project_unit_id` int(11) DEFAULT NULL,
  `booking_id` int(11) DEFAULT NULL,
  `expected_value` double DEFAULT NULL,
  `probability` double DEFAULT 10,
  `budget_min` double DEFAULT NULL,
  `budget_max` double DEFAULT NULL,
  `expected_close_date` datetime(3) DEFAULT NULL,
  `drop_reason` text DEFAULT NULL,
  `owner_id` int(11) NOT NULL,
  `source` varchar(191) DEFAULT NULL,
  `campaign` varchar(191) DEFAULT NULL,
  `utm_source` varchar(191) DEFAULT NULL,
  `utm_medium` varchar(191) DEFAULT NULL,
  `utm_campaign` varchar(191) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Payment`
--

CREATE TABLE `Payment` (
  `id` int(11) NOT NULL,
  `payment_code` varchar(191) NOT NULL,
  `company_id` int(11) NOT NULL,
  `booking_id` int(11) NOT NULL,
  `installment_id` int(11) DEFAULT NULL,
  `amount` double NOT NULL,
  `payment_method` varchar(191) NOT NULL,
  `reference_number` varchar(191) DEFAULT NULL,
  `payment_date` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `status` varchar(191) NOT NULL DEFAULT 'PENDING',
  `notes` text DEFAULT NULL,
  `portal_payment_id` varchar(191) DEFAULT NULL,
  `external_transaction_id` varchar(191) DEFAULT NULL,
  `source` varchar(191) NOT NULL DEFAULT 'CRM',
  `sync_status` varchar(191) NOT NULL DEFAULT 'LOCAL',
  `recorded_by_id` int(11) NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `PerformanceSnapshot`
--

CREATE TABLE `PerformanceSnapshot` (
  `id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `snapshot_date` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `score` double NOT NULL DEFAULT 50,
  `tasks_completed` int(11) NOT NULL DEFAULT 0,
  `on_time_logins` int(11) NOT NULL DEFAULT 0,
  `late_logins` int(11) NOT NULL DEFAULT 0,
  `sub_target_reports` int(11) NOT NULL DEFAULT 0,
  `uninformed_absences` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Permission`
--

CREATE TABLE `Permission` (
  `id` int(11) NOT NULL,
  `name` varchar(191) NOT NULL,
  `description` varchar(191) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Permission`
--

INSERT INTO `Permission` (`id`, `name`, `description`) VALUES
(1, 'employees.create', NULL),
(2, 'employees.read', NULL),
(3, 'employees.update', NULL),
(4, 'employees.delete', NULL),
(5, 'employees.view_sensitive', NULL),
(6, 'employees.manage_default:all', NULL),
(7, 'employees.reset_password', NULL),
(8, 'leads.create', NULL),
(9, 'leads.read', NULL),
(10, 'leads.update', NULL),
(11, 'leads.delete', NULL),
(12, 'leads.assign', NULL),
(13, 'leads.bulk_upload', NULL),
(14, 'leads.distribution_monitor', NULL),
(15, 'leads.whatsapp_proposal', NULL),
(16, 'customers.create', NULL),
(17, 'customers.read', NULL),
(18, 'customers.update', NULL),
(19, 'customers.delete', NULL),
(20, 'customers.convert', NULL),
(21, 'customers.kyc_write', NULL),
(22, 'properties.create', NULL),
(23, 'properties.read', NULL),
(24, 'properties.update', NULL),
(25, 'properties.delete', NULL),
(26, 'properties.verify', NULL),
(27, 'properties.dm_polish', NULL),
(28, 'properties.md_approve', NULL),
(29, 'site_visits.create', NULL),
(30, 'site_visits.read', NULL),
(31, 'site_visits.verify', NULL),
(32, 'site_visits.assign_agent', NULL),
(33, 'site_visits.complete', NULL),
(34, 'projects.create', NULL),
(35, 'projects.read', NULL),
(36, 'projects.update', NULL),
(37, 'projects.delete', NULL),
(38, 'bookings.create', NULL),
(39, 'bookings.read', NULL),
(40, 'bookings.update', NULL),
(41, 'bookings.cancel', NULL),
(42, 'bookings.confirm', NULL),
(43, 'payments.create', NULL),
(44, 'payments.read', NULL),
(45, 'payments.update', NULL),
(46, 'payments.cancel', NULL),
(47, 'tasks.create', NULL),
(48, 'tasks.read', NULL),
(49, 'tasks.update', NULL),
(50, 'tasks.assign', NULL),
(51, 'attendance.read_own', NULL),
(52, 'attendance.scan', NULL),
(53, 'attendance.late_proposal', NULL),
(54, 'attendance.leave_proposal', NULL),
(55, 'attendance.proposals_queue', NULL),
(56, 'attendance.live_monitor', NULL),
(57, 'reports.create', NULL),
(58, 'reports.read_own', NULL),
(59, 'reports.read_team', NULL),
(60, 'reports.targets.configure', NULL),
(61, 'expenses.create', NULL),
(62, 'expenses.read_own', NULL),
(63, 'expenses.review', NULL),
(64, 'expenses.md_approve', NULL),
(65, 'expenses.mark_refunded', NULL),
(66, 'performance.read_own', NULL),
(67, 'performance.read_team', NULL),
(68, 'performance.history', NULL),
(69, 'admin.system_metrics', NULL),
(70, 'admin.audit_logs', NULL),
(71, 'admin.security_alerts', NULL),
(72, 'admin.emergency_lockdown', NULL),
(73, 'message_templates.manage', NULL),
(74, 'public.properties.read', NULL),
(75, 'public.leads.create', NULL),
(76, 'ai.search', NULL),
(77, 'documents.create', NULL),
(78, 'documents.read', NULL),
(79, 'documents.verify', NULL),
(80, 'documents.delete', NULL),
(81, 'complaints.create', NULL),
(82, 'complaints.read', NULL),
(83, 'complaints.update', NULL),
(84, 'complaints.assign', NULL),
(85, 'complaints.resolve', NULL),
(86, 'complaints.close', NULL),
(87, 'demos.create', 'demos.create'),
(88, 'demos.read', 'demos.read'),
(89, 'demos.assign_agent', 'demos.assign_agent'),
(90, 'demos.accept', 'demos.accept'),
(91, 'demos.complete', 'demos.complete'),
(92, 'projects.submit_verify', 'projects.submit_verify'),
(93, 'projects.verify', 'projects.verify'),
(94, 'bookings.form_submit', 'bookings.form_submit'),
(95, 'bookings.md_approve', 'bookings.md_approve'),
(96, 'bookings.legacy_create', 'bookings.legacy_create');

-- --------------------------------------------------------

--
-- Table structure for table `PMLocationAssignment`
--

CREATE TABLE `PMLocationAssignment` (
  `id` int(11) NOT NULL,
  `pm_id` int(11) NOT NULL,
  `location` varchar(191) NOT NULL,
  `level` varchar(191) NOT NULL DEFAULT 'CITY',
  `company_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `PMLocationAssignment`
--

INSERT INTO `PMLocationAssignment` (`id`, `pm_id`, `location`, `level`, `company_id`) VALUES
(1, 16, 'lallaguda', 'CITY', 1);

-- --------------------------------------------------------

--
-- Table structure for table `PMReassignmentHistory`
--

CREATE TABLE `PMReassignmentHistory` (
  `id` int(11) NOT NULL,
  `site_visit_booking_id` int(11) NOT NULL,
  `reassigned_by_pm_id` int(11) NOT NULL,
  `reassigned_to_pm_id` int(11) NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `PriceLine`
--

CREATE TABLE `PriceLine` (
  `id` int(11) NOT NULL,
  `project_unit_id` int(11) DEFAULT NULL,
  `property_id` int(11) DEFAULT NULL,
  `rule_id` int(11) DEFAULT NULL,
  `property_rule_id` int(11) DEFAULT NULL,
  `label` varchar(191) NOT NULL,
  `kind` enum('BASE_RATE','PREMIUM','CHARGE','DISCOUNT','TAX') NOT NULL,
  `category` enum('FACING','FLOOR','CORNER','ROAD','PARK','VIEW','BHK','AMENITY','PARKING','INFRA','MAINTENANCE','LEGAL','CLUB','TAX','OTHER') NOT NULL,
  `calc_method` enum('FIXED','PER_SQFT','PER_SQYD','PERCENT_OF_BASE','QTY_X_RATE') NOT NULL,
  `rate` double NOT NULL,
  `quantity` double NOT NULL DEFAULT 1,
  `area_basis` enum('CARPET','BUILT_UP','SUPER_BUILT_UP','PLOT_AREA','LUMPSUM') DEFAULT NULL,
  `amount` double NOT NULL,
  `is_manual` tinyint(1) NOT NULL DEFAULT 0,
  `is_refundable` tinyint(1) NOT NULL DEFAULT 0,
  `sort_order` int(11) NOT NULL DEFAULT 0,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `PriceLine`
--

INSERT INTO `PriceLine` (`id`, `project_unit_id`, `property_id`, `rule_id`, `property_rule_id`, `label`, `kind`, `category`, `calc_method`, `rate`, `quantity`, `area_basis`, `amount`, `is_manual`, `is_refundable`, `sort_order`, `created_at`) VALUES
(5, NULL, 2, NULL, NULL, 'Base Price', 'BASE_RATE', 'OTHER', 'PER_SQFT', 100000, 100, 'SUPER_BUILT_UP', 10000000, 0, 0, 0, '2026-09-11 12:11:21.199');

-- --------------------------------------------------------

--
-- Table structure for table `Project`
--

CREATE TABLE `Project` (
  `id` int(11) NOT NULL,
  `project_code` varchar(191) NOT NULL,
  `company_id` int(11) NOT NULL,
  `branch_id` int(11) DEFAULT NULL,
  `name` varchar(191) NOT NULL,
  `description` text DEFAULT NULL,
  `project_type` enum('PLOTTED','APARTMENT','VILLA','MIXED','COMMERCIAL') DEFAULT NULL,
  `developer_name` varchar(191) DEFAULT NULL,
  `location` varchar(191) NOT NULL,
  `total_area` varchar(191) DEFAULT NULL,
  `total_units` int(11) DEFAULT NULL,
  `launch_date` datetime(3) DEFAULT NULL,
  `status` varchar(191) NOT NULL DEFAULT 'PLANNING',
  `project_phase` varchar(191) DEFAULT NULL,
  `rera_number` varchar(191) DEFAULT NULL,
  `amenities` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`amenities`)),
  `assigned_pm_id` int(11) DEFAULT NULL,
  `slug` varchar(191) NOT NULL,
  `total_area_value` double DEFAULT NULL,
  `total_area_unit` enum('SQFT','SQYD','SQM','ACRE','GUNTA','CENT','ANKANAM','HECTARE') DEFAULT NULL,
  `towers_count` int(11) DEFAULT NULL,
  `blocks_count` int(11) DEFAULT NULL,
  `floors_count` int(11) DEFAULT NULL,
  `completion_date` datetime(3) DEFAULT NULL,
  `rera_status` varchar(191) DEFAULT NULL,
  `approval_authority` varchar(191) DEFAULT NULL,
  `approval_number` varchar(191) DEFAULT NULL,
  `lp_number` varchar(191) DEFAULT NULL,
  `state` varchar(191) DEFAULT NULL,
  `district` varchar(191) DEFAULT NULL,
  `city` varchar(191) DEFAULT NULL,
  `mandal` varchar(191) DEFAULT NULL,
  `village` varchar(191) DEFAULT NULL,
  `locality` varchar(191) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `pincode` varchar(191) DEFAULT NULL,
  `latitude` double DEFAULT NULL,
  `longitude` double DEFAULT NULL,
  `maps_link` text DEFAULT NULL,
  `default_price_basis` enum('CARPET','BUILT_UP','SUPER_BUILT_UP','PLOT_AREA','LUMPSUM') DEFAULT NULL,
  `default_area_unit` enum('SQFT','SQYD','SQM','ACRE','GUNTA','CENT','ANKANAM','HECTARE') DEFAULT NULL,
  `cover_image_url` text DEFAULT NULL,
  `is_published` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL,
  `verification_notes` text DEFAULT NULL,
  `verification_status` varchar(191) NOT NULL DEFAULT 'DRAFT',
  `verified_at` datetime(3) DEFAULT NULL,
  `verified_by_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ProjectAmenity`
--

CREATE TABLE `ProjectAmenity` (
  `id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `amenity_id` int(11) NOT NULL,
  `availability` enum('INCLUDED','OPTIONAL','CHARGEABLE') NOT NULL DEFAULT 'INCLUDED',
  `charge_calc_method` enum('FIXED','PER_SQFT','PER_SQYD','PERCENT_OF_BASE','QTY_X_RATE') DEFAULT NULL,
  `charge_amount` double DEFAULT NULL,
  `applicability` enum('ALL_UNITS','SELECTED_UNITS','BY_UNIT_TYPE') NOT NULL DEFAULT 'ALL_UNITS',
  `applicable_unit_type` enum('PLOT','FLAT','VILLA','HOUSE','COMMERCIAL','OTHER') DEFAULT NULL,
  `notes` varchar(191) DEFAULT NULL,
  `sort_order` int(11) NOT NULL DEFAULT 0,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ProjectDocument`
--

CREATE TABLE `ProjectDocument` (
  `id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `kind` enum('RERA','APPROVAL','LEGAL','OTHER') NOT NULL DEFAULT 'OTHER',
  `url` text NOT NULL,
  `title` varchar(191) DEFAULT NULL,
  `uploaded_by_id` int(11) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ProjectLayoutImage`
--

CREATE TABLE `ProjectLayoutImage` (
  `id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `image_url` varchar(191) NOT NULL,
  `title` varchar(191) DEFAULT NULL,
  `is_primary` tinyint(1) NOT NULL DEFAULT 0,
  `uploaded_by_id` int(11) NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ProjectMedia`
--

CREATE TABLE `ProjectMedia` (
  `id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `kind` enum('COVER','GALLERY','VIDEO','BROCHURE','MASTER_PLAN','LAYOUT_PLAN','FLOOR_PLAN') NOT NULL,
  `url` text NOT NULL,
  `title` varchar(191) DEFAULT NULL,
  `sort_order` int(11) NOT NULL DEFAULT 0,
  `uploaded_by_id` int(11) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ProjectPricingRule`
--

CREATE TABLE `ProjectPricingRule` (
  `id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `label` varchar(191) NOT NULL,
  `kind` enum('BASE_RATE','PREMIUM','CHARGE','DISCOUNT','TAX') NOT NULL,
  `category` enum('FACING','FLOOR','CORNER','ROAD','PARK','VIEW','BHK','AMENITY','PARKING','INFRA','MAINTENANCE','LEGAL','CLUB','TAX','OTHER') NOT NULL,
  `calc_method` enum('FIXED','PER_SQFT','PER_SQYD','PERCENT_OF_BASE','QTY_X_RATE') NOT NULL,
  `rate` double NOT NULL,
  `area_basis` enum('CARPET','BUILT_UP','SUPER_BUILT_UP','PLOT_AREA','LUMPSUM') DEFAULT NULL,
  `applies_to_unit_type` enum('PLOT','FLAT','VILLA','HOUSE','COMMERCIAL','OTHER') DEFAULT NULL,
  `is_mandatory` tinyint(1) NOT NULL DEFAULT 1,
  `is_tax` tinyint(1) NOT NULL DEFAULT 0,
  `is_refundable` tinyint(1) NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `sort_order` int(11) NOT NULL DEFAULT 0,
  `match_facing` varchar(191) DEFAULT NULL,
  `match_corner` tinyint(1) DEFAULT NULL,
  `match_park_facing` tinyint(1) DEFAULT NULL,
  `match_road_facing` tinyint(1) DEFAULT NULL,
  `match_main_road_facing` tinyint(1) DEFAULT NULL,
  `match_floor_min` int(11) DEFAULT NULL,
  `match_floor_max` int(11) DEFAULT NULL,
  `match_bhk` varchar(191) DEFAULT NULL,
  `match_type_code` varchar(191) DEFAULT NULL,
  `match_view` varchar(191) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ProjectUnit`
--

CREATE TABLE `ProjectUnit` (
  `id` int(11) NOT NULL,
  `unit_code` varchar(191) NOT NULL,
  `project_id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `branch_id` int(11) DEFAULT NULL,
  `unit_number` varchar(191) NOT NULL,
  `unit_type` enum('PLOT','FLAT','VILLA','HOUSE','COMMERCIAL','OTHER') NOT NULL,
  `plot_number` varchar(191) DEFAULT NULL,
  `survey_number` varchar(191) DEFAULT NULL,
  `tower` varchar(191) DEFAULT NULL,
  `block` varchar(191) DEFAULT NULL,
  `floor` int(11) DEFAULT NULL,
  `flat_number` varchar(191) DEFAULT NULL,
  `villa_number` varchar(191) DEFAULT NULL,
  `type_code` varchar(191) DEFAULT NULL,
  `bhk` varchar(191) DEFAULT NULL,
  `bedrooms` int(11) DEFAULT NULL,
  `bathrooms` int(11) DEFAULT NULL,
  `balconies` int(11) DEFAULT NULL,
  `living_rooms` int(11) DEFAULT NULL,
  `kitchens` int(11) DEFAULT NULL,
  `utility_rooms` int(11) DEFAULT NULL,
  `has_pooja_room` tinyint(1) NOT NULL DEFAULT 0,
  `has_study_room` tinyint(1) NOT NULL DEFAULT 0,
  `area_value` double DEFAULT NULL,
  `area_unit` enum('SQFT','SQYD','SQM','ACRE','GUNTA','CENT','ANKANAM','HECTARE') DEFAULT NULL,
  `area_sqft` double DEFAULT NULL,
  `area_sqyd` double DEFAULT NULL,
  `plot_area_sqyd` double DEFAULT NULL,
  `plot_length_ft` double DEFAULT NULL,
  `plot_width_ft` double DEFAULT NULL,
  `carpet_area_sqft` double DEFAULT NULL,
  `built_up_area_sqft` double DEFAULT NULL,
  `super_built_up_area_sqft` double DEFAULT NULL,
  `ground_floor_area_sqft` double DEFAULT NULL,
  `first_floor_area_sqft` double DEFAULT NULL,
  `total_floors` int(11) DEFAULT NULL,
  `price_basis` enum('CARPET','BUILT_UP','SUPER_BUILT_UP','PLOT_AREA','LUMPSUM') NOT NULL DEFAULT 'SUPER_BUILT_UP',
  `facing` varchar(191) DEFAULT NULL,
  `is_corner` tinyint(1) NOT NULL DEFAULT 0,
  `is_road_facing` tinyint(1) NOT NULL DEFAULT 0,
  `is_park_facing` tinyint(1) NOT NULL DEFAULT 0,
  `is_main_road_facing` tinyint(1) NOT NULL DEFAULT 0,
  `road_width_ft` double DEFAULT NULL,
  `view` varchar(191) DEFAULT NULL,
  `parking_included` tinyint(1) NOT NULL DEFAULT 0,
  `parking_type` varchar(191) DEFAULT NULL,
  `parking_count` int(11) DEFAULT NULL,
  `parking_slots` varchar(191) DEFAULT NULL,
  `base_rate` double DEFAULT NULL,
  `base_rate_unit` enum('FIXED','PER_SQFT','PER_SQYD','PERCENT_OF_BASE','QTY_X_RATE') DEFAULT NULL,
  `base_price` double NOT NULL DEFAULT 0,
  `premiums_total` double NOT NULL DEFAULT 0,
  `charges_total` double NOT NULL DEFAULT 0,
  `taxes_total` double NOT NULL DEFAULT 0,
  `discount_amount` double NOT NULL DEFAULT 0,
  `discount_reason` varchar(191) DEFAULT NULL,
  `calculated_price` double NOT NULL DEFAULT 0,
  `override_price` double DEFAULT NULL,
  `override_reason` text DEFAULT NULL,
  `overridden_by_id` int(11) DEFAULT NULL,
  `overridden_at` datetime(3) DEFAULT NULL,
  `final_price` double NOT NULL DEFAULT 0,
  `price_computed_at` datetime(3) DEFAULT NULL,
  `selected_optional_rule_ids` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`selected_optional_rule_ids`)),
  `sales_status` enum('AVAILABLE','HOLD','RESERVED','BOOKED','SOLD','BLOCKED','UNAVAILABLE') NOT NULL DEFAULT 'AVAILABLE',
  `hold_until` datetime(3) DEFAULT NULL,
  `held_for_lead_id` int(11) DEFAULT NULL,
  `locked_until` datetime(3) DEFAULT NULL,
  `locked_by_booking_id` int(11) DEFAULT NULL,
  `is_published` tinyint(1) NOT NULL DEFAULT 0,
  `notes` text DEFAULT NULL,
  `created_by_id` int(11) DEFAULT NULL,
  `migrated_from_property_id` int(11) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ProjectUnitDocument`
--

CREATE TABLE `ProjectUnitDocument` (
  `id` int(11) NOT NULL,
  `project_unit_id` int(11) NOT NULL,
  `url` text NOT NULL,
  `title` varchar(191) DEFAULT NULL,
  `uploaded_by_id` int(11) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ProjectUnitImage`
--

CREATE TABLE `ProjectUnitImage` (
  `id` int(11) NOT NULL,
  `project_unit_id` int(11) NOT NULL,
  `image_url` text NOT NULL,
  `alt_text` varchar(191) DEFAULT NULL,
  `is_primary` tinyint(1) NOT NULL DEFAULT 0,
  `sort_order` int(11) NOT NULL DEFAULT 0,
  `uploaded_by_id` int(11) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Property`
--

CREATE TABLE `Property` (
  `id` int(11) NOT NULL,
  `property_code` varchar(191) NOT NULL,
  `project_id` int(11) DEFAULT NULL,
  `company_id` int(11) NOT NULL,
  `branch_id` int(11) DEFAULT NULL,
  `title` varchar(191) NOT NULL,
  `description` text DEFAULT NULL,
  `brand_type` varchar(191) NOT NULL DEFAULT 'SONTHILLU',
  `category` varchar(191) NOT NULL DEFAULT 'VILLA',
  `area_sqft` double NOT NULL,
  `location` varchar(191) NOT NULL,
  `address` text DEFAULT NULL,
  `bedrooms` int(11) DEFAULT NULL,
  `bathrooms` int(11) DEFAULT NULL,
  `facing` varchar(191) DEFAULT NULL,
  `status` varchar(191) NOT NULL DEFAULT 'PENDING_VERIFICATION',
  `assigned_pm_id` int(11) DEFAULT NULL,
  `digital_marketing_executive_id` int(11) DEFAULT NULL,
  `created_by_id` int(11) DEFAULT NULL,
  `verified_by_pm_at` datetime(3) DEFAULT NULL,
  `location_confirmed_by_pm` tinyint(1) NOT NULL DEFAULT 0,
  `dm_polished_at` datetime(3) DEFAULT NULL,
  `md_approved_at` datetime(3) DEFAULT NULL,
  `rejection_reason` text DEFAULT NULL,
  `seo_title` varchar(191) DEFAULT NULL,
  `seo_keywords` varchar(191) DEFAULT NULL,
  `amenities` text DEFAULT NULL,
  `state` varchar(191) DEFAULT NULL,
  `city` varchar(191) DEFAULT NULL,
  `locality` varchar(191) DEFAULT NULL,
  `pincode` varchar(191) DEFAULT NULL,
  `latitude` double DEFAULT NULL,
  `longitude` double DEFAULT NULL,
  `listing_type` varchar(191) DEFAULT 'NEW',
  `possession_status` varchar(191) DEFAULT NULL,
  `slug` varchar(191) DEFAULT NULL,
  `source` varchar(191) NOT NULL DEFAULT 'INTERNAL',
  `sales_status` enum('AVAILABLE','HOLD','RESERVED','BOOKED','SOLD','BLOCKED','UNAVAILABLE') NOT NULL DEFAULT 'AVAILABLE',
  `hold_until` datetime(3) DEFAULT NULL,
  `held_for_lead_id` int(11) DEFAULT NULL,
  `area_value` double DEFAULT NULL,
  `area_unit` enum('SQFT','SQYD','SQM','ACRE','GUNTA','CENT','ANKANAM','HECTARE') DEFAULT NULL,
  `area_sqyd` double DEFAULT NULL,
  `plot_area_sqyd` double DEFAULT NULL,
  `plot_length_ft` double DEFAULT NULL,
  `plot_width_ft` double DEFAULT NULL,
  `carpet_area_sqft` double DEFAULT NULL,
  `built_up_area_sqft` double DEFAULT NULL,
  `super_built_up_area_sqft` double DEFAULT NULL,
  `ground_floor_area_sqft` double DEFAULT NULL,
  `first_floor_area_sqft` double DEFAULT NULL,
  `total_floors` int(11) DEFAULT NULL,
  `construction_year` int(11) DEFAULT NULL,
  `price_basis` enum('CARPET','BUILT_UP','SUPER_BUILT_UP','PLOT_AREA','LUMPSUM') NOT NULL DEFAULT 'SUPER_BUILT_UP',
  `view` varchar(191) DEFAULT NULL,
  `road_width_ft` double DEFAULT NULL,
  `is_corner` tinyint(1) NOT NULL DEFAULT 0,
  `is_park_facing` tinyint(1) NOT NULL DEFAULT 0,
  `is_road_facing` tinyint(1) NOT NULL DEFAULT 0,
  `is_main_road_facing` tinyint(1) NOT NULL DEFAULT 0,
  `is_premium_location` tinyint(1) NOT NULL DEFAULT 0,
  `base_rate` double DEFAULT NULL,
  `base_rate_unit` enum('FIXED','PER_SQFT','PER_SQYD','PERCENT_OF_BASE','QTY_X_RATE') DEFAULT NULL,
  `base_price` double NOT NULL DEFAULT 0,
  `premiums_total` double NOT NULL DEFAULT 0,
  `charges_total` double NOT NULL DEFAULT 0,
  `taxes_total` double NOT NULL DEFAULT 0,
  `discount_amount` double NOT NULL DEFAULT 0,
  `discount_reason` varchar(191) DEFAULT NULL,
  `calculated_price` double NOT NULL DEFAULT 0,
  `override_price` double DEFAULT NULL,
  `override_reason` text DEFAULT NULL,
  `overridden_by_id` int(11) DEFAULT NULL,
  `overridden_at` datetime(3) DEFAULT NULL,
  `final_price` double NOT NULL DEFAULT 0,
  `price_computed_at` datetime(3) DEFAULT NULL,
  `locked_until` datetime(3) DEFAULT NULL,
  `locked_by_booking_id` int(11) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Property`
--

INSERT INTO `Property` (`id`, `property_code`, `project_id`, `company_id`, `branch_id`, `title`, `description`, `brand_type`, `category`, `area_sqft`, `location`, `address`, `bedrooms`, `bathrooms`, `facing`, `status`, `assigned_pm_id`, `digital_marketing_executive_id`, `created_by_id`, `verified_by_pm_at`, `location_confirmed_by_pm`, `dm_polished_at`, `md_approved_at`, `rejection_reason`, `seo_title`, `seo_keywords`, `amenities`, `state`, `city`, `locality`, `pincode`, `latitude`, `longitude`, `listing_type`, `possession_status`, `slug`, `source`, `sales_status`, `hold_until`, `held_for_lead_id`, `area_value`, `area_unit`, `area_sqyd`, `plot_area_sqyd`, `plot_length_ft`, `plot_width_ft`, `carpet_area_sqft`, `built_up_area_sqft`, `super_built_up_area_sqft`, `ground_floor_area_sqft`, `first_floor_area_sqft`, `total_floors`, `construction_year`, `price_basis`, `view`, `road_width_ft`, `is_corner`, `is_park_facing`, `is_road_facing`, `is_main_road_facing`, `is_premium_location`, `base_rate`, `base_rate_unit`, `base_price`, `premiums_total`, `charges_total`, `taxes_total`, `discount_amount`, `discount_reason`, `calculated_price`, `override_price`, `override_reason`, `overridden_by_id`, `overridden_at`, `final_price`, `price_computed_at`, `locked_until`, `locked_by_booking_id`, `created_at`, `updated_at`) VALUES
(2, 'RRH-PR-2026-0001', NULL, 1, 1, '2BHK in tarnaka', NULL, 'SONTHILLU', 'APARTMENT', 1000, 'Administrative Buildings, Hyderabad, Telangana', NULL, NULL, NULL, 'EAST', 'LIVE', NULL, NULL, 1, '2026-09-11 12:16:39.000', 1, '2026-09-11 12:16:57.207', '2026-09-11 12:18:24.950', NULL, NULL, NULL, NULL, 'Telangana', 'Hyderabad', 'Lallaguda', '500017', NULL, NULL, 'RESALE', 'READY_TO_MOVE', '2bhk-in-tarnaka-administrative-buildings-hyderabad-telangana-apartment', 'INTERNAL', 'AVAILABLE', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 100, NULL, NULL, NULL, NULL, 'SUPER_BUILT_UP', NULL, NULL, 0, 0, 0, 0, 0, 100000, NULL, 10000000, 0, 0, 0, 0, NULL, 10000000, NULL, NULL, NULL, NULL, 10000000, '2026-09-11 12:11:21.353', NULL, NULL, '2026-09-11 12:08:20.842', '2026-09-11 12:18:24.951');

-- --------------------------------------------------------

--
-- Table structure for table `PropertyApartmentDetails`
--

CREATE TABLE `PropertyApartmentDetails` (
  `id` int(11) NOT NULL,
  `property_id` int(11) NOT NULL,
  `tower` varchar(191) DEFAULT NULL,
  `block` varchar(191) DEFAULT NULL,
  `floor` varchar(191) DEFAULT NULL,
  `unit_number` varchar(191) DEFAULT NULL,
  `flat_number` varchar(191) DEFAULT NULL,
  `bhk` varchar(191) DEFAULT NULL,
  `balcony_count` int(11) DEFAULT NULL,
  `has_study_room` tinyint(1) DEFAULT 0,
  `has_servant_room` tinyint(1) DEFAULT 0,
  `has_utility_area` tinyint(1) DEFAULT 0,
  `carpet_area` double DEFAULT NULL,
  `built_up_area` double DEFAULT NULL,
  `super_built_up_area` double DEFAULT NULL,
  `balcony_area` double DEFAULT NULL,
  `terrace_area` double DEFAULT NULL,
  `is_pool_view` tinyint(1) DEFAULT 0,
  `is_garden_view` tinyint(1) DEFAULT 0,
  `is_road_view` tinyint(1) DEFAULT 0,
  `is_main_road_view` tinyint(1) DEFAULT 0,
  `is_city_view` tinyint(1) DEFAULT 0,
  `is_higher_floor` tinyint(1) DEFAULT 0,
  `is_near_lift` tinyint(1) DEFAULT 0,
  `is_near_staircase` tinyint(1) DEFAULT 0,
  `parking_included` tinyint(1) DEFAULT 0,
  `parking_type` varchar(191) DEFAULT NULL,
  `parking_slots` int(11) DEFAULT NULL,
  `parking_number` varchar(191) DEFAULT NULL,
  `is_covered_parking` tinyint(1) DEFAULT 0,
  `has_additional_parking` tinyint(1) DEFAULT 0,
  `structure_type` varchar(191) DEFAULT NULL,
  `flooring` varchar(191) DEFAULT NULL,
  `kitchen_type` varchar(191) DEFAULT NULL,
  `windows` varchar(191) DEFAULT NULL,
  `doors` varchar(191) DEFAULT NULL,
  `electrical` varchar(191) DEFAULT NULL,
  `plumbing` varchar(191) DEFAULT NULL,
  `bathroom_type` varchar(191) DEFAULT NULL,
  `paint` varchar(191) DEFAULT NULL,
  `fixtures` varchar(191) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `PropertyApartmentDetails`
--

INSERT INTO `PropertyApartmentDetails` (`id`, `property_id`, `tower`, `block`, `floor`, `unit_number`, `flat_number`, `bhk`, `balcony_count`, `has_study_room`, `has_servant_room`, `has_utility_area`, `carpet_area`, `built_up_area`, `super_built_up_area`, `balcony_area`, `terrace_area`, `is_pool_view`, `is_garden_view`, `is_road_view`, `is_main_road_view`, `is_city_view`, `is_higher_floor`, `is_near_lift`, `is_near_staircase`, `parking_included`, `parking_type`, `parking_slots`, `parking_number`, `is_covered_parking`, `has_additional_parking`, `structure_type`, `flooring`, `kitchen_type`, `windows`, `doors`, `electrical`, `plumbing`, `bathroom_type`, `paint`, `fixtures`) VALUES
(2, 6, 'A', NULL, '2', NULL, NULL, '2', NULL, 0, 0, 0, 1000, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, 7, 'A', NULL, '2', NULL, NULL, '2', NULL, 0, 0, 0, 1000, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4, 9, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(5, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `PropertyCommercialOfficeDetails`
--

CREATE TABLE `PropertyCommercialOfficeDetails` (
  `id` int(11) NOT NULL,
  `property_id` int(11) NOT NULL,
  `office_number` varchar(191) DEFAULT NULL,
  `tower` varchar(191) DEFAULT NULL,
  `floor` varchar(191) DEFAULT NULL,
  `block` varchar(191) DEFAULT NULL,
  `office_type` varchar(191) DEFAULT NULL,
  `cabins` int(11) DEFAULT NULL,
  `workstations` int(11) DEFAULT NULL,
  `meeting_rooms` int(11) DEFAULT NULL,
  `has_reception` tinyint(1) DEFAULT 0,
  `has_pantry` tinyint(1) DEFAULT 0,
  `washrooms` int(11) DEFAULT NULL,
  `has_server_room` tinyint(1) DEFAULT 0,
  `is_city_view` tinyint(1) DEFAULT 0,
  `is_higher_floor` tinyint(1) DEFAULT 0,
  `has_parking` tinyint(1) DEFAULT 0,
  `has_power_backup` tinyint(1) DEFAULT 0,
  `has_lift` tinyint(1) DEFAULT 0,
  `has_security` tinyint(1) DEFAULT 0,
  `has_fire_safety` tinyint(1) DEFAULT 0,
  `has_hvac` tinyint(1) DEFAULT 0,
  `has_internet` tinyint(1) DEFAULT 0,
  `has_ev_charging` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `PropertyCommercialShopDetails`
--

CREATE TABLE `PropertyCommercialShopDetails` (
  `id` int(11) NOT NULL,
  `property_id` int(11) NOT NULL,
  `shop_number` varchar(191) DEFAULT NULL,
  `building` varchar(191) DEFAULT NULL,
  `block` varchar(191) DEFAULT NULL,
  `floor` varchar(191) DEFAULT NULL,
  `shop_type` varchar(191) DEFAULT NULL,
  `frontage` double DEFAULT NULL,
  `depth` double DEFAULT NULL,
  `ceiling_height` double DEFAULT NULL,
  `is_mall_facing` tinyint(1) DEFAULT 0,
  `is_entrance_facing` tinyint(1) DEFAULT 0,
  `is_parking_facing` tinyint(1) DEFAULT 0,
  `is_high_footfall_location` tinyint(1) DEFAULT 0,
  `has_parking` tinyint(1) DEFAULT 0,
  `has_power` tinyint(1) DEFAULT 0,
  `has_water` tinyint(1) DEFAULT 0,
  `has_washroom` tinyint(1) DEFAULT 0,
  `has_lift` tinyint(1) DEFAULT 0,
  `has_security` tinyint(1) DEFAULT 0,
  `has_fire_safety` tinyint(1) DEFAULT 0,
  `has_signage_space` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `PropertyFarmLandDetails`
--

CREATE TABLE `PropertyFarmLandDetails` (
  `id` int(11) NOT NULL,
  `property_id` int(11) NOT NULL,
  `farm_land_number` varchar(191) DEFAULT NULL,
  `parcel_number` varchar(191) DEFAULT NULL,
  `survey_number` varchar(191) DEFAULT NULL,
  `subdivision` varchar(191) DEFAULT NULL,
  `road_frontage` double DEFAULT NULL,
  `boundary_details` text DEFAULT NULL,
  `is_near_water_source` tinyint(1) DEFAULT 0,
  `has_internal_road` tinyint(1) DEFAULT 0,
  `has_electricity` tinyint(1) DEFAULT 0,
  `has_water` tinyint(1) DEFAULT 0,
  `has_borewell` tinyint(1) DEFAULT 0,
  `has_irrigation` tinyint(1) DEFAULT 0,
  `has_fencing` tinyint(1) DEFAULT 0,
  `has_plantation` tinyint(1) DEFAULT 0,
  `has_drainage` tinyint(1) DEFAULT 0,
  `has_farmhouse_permission` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `PropertyHouseDetails`
--

CREATE TABLE `PropertyHouseDetails` (
  `id` int(11) NOT NULL,
  `property_id` int(11) NOT NULL,
  `house_number` varchar(191) DEFAULT NULL,
  `house_type` varchar(191) DEFAULT NULL,
  `bhk` varchar(191) DEFAULT NULL,
  `has_kitchen` tinyint(1) DEFAULT 0,
  `has_pooja_room` tinyint(1) DEFAULT 0,
  `has_study_room` tinyint(1) DEFAULT 0,
  `has_servant_room` tinyint(1) DEFAULT 0,
  `has_utility_room` tinyint(1) DEFAULT 0,
  `garden_area` double DEFAULT NULL,
  `terrace_area` double DEFAULT NULL,
  `is_covered_parking` tinyint(1) DEFAULT 0,
  `parking_capacity` int(11) DEFAULT NULL,
  `parking_number` varchar(191) DEFAULT NULL,
  `has_additional_parking` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `PropertyImage`
--

CREATE TABLE `PropertyImage` (
  `id` int(11) NOT NULL,
  `property_id` int(11) NOT NULL,
  `image_url` varchar(191) NOT NULL,
  `is_primary` tinyint(1) NOT NULL DEFAULT 0,
  `uploaded_by_id` int(11) NOT NULL,
  `sort_order` int(11) NOT NULL DEFAULT 0,
  `alt_text` varchar(191) DEFAULT NULL,
  `status` varchar(191) NOT NULL DEFAULT 'PENDING',
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `PropertyImage`
--

INSERT INTO `PropertyImage` (`id`, `property_id`, `image_url`, `is_primary`, `uploaded_by_id`, `sort_order`, `alt_text`, `status`, `created_at`) VALUES
(2, 4, '/uploads/properties/4/images/8cc11899-f9ba-4122-a4a0-09dd8a6af8f2.webp', 0, 1, 1, 'SAMPLE — PLOT  - Photo 2', 'PENDING', '2026-09-04 20:15:45.077'),
(3, 4, '/uploads/properties/4/images/0182a418-8b5d-4286-8cd4-f42f4ecf0345.webp', 0, 1, 2, 'SAMPLE — PLOT  - Photo 3', 'PENDING', '2026-09-04 20:15:52.585'),
(4, 4, '/uploads/properties/4/images/4bed0292-f21b-403f-aaf0-0d8ad4b9aa11.webp', 0, 1, 3, 'SAMPLE — PLOT  - Photo 4', 'PENDING', '2026-09-04 20:15:55.580'),
(5, 4, '/uploads/properties/4/images/f97ef9dd-4752-4977-9b40-d674ebab1a91.webp', 0, 1, 4, 'SAMPLE — PLOT  - Photo 5', 'PENDING', '2026-09-04 20:15:58.779'),
(6, 4, '/uploads/properties/4/images/a37925d3-094d-4a35-ab4c-7e9a10a33463.webp', 0, 1, 5, 'SAMPLE — PLOT  - Photo 6', 'PENDING', '2026-09-04 20:16:02.286'),
(7, 4, '/uploads/properties/4/images/8106da7f-c609-43f7-b49f-97a65e0156eb.webp', 0, 1, 6, 'SAMPLE — PLOT  - Photo 7', 'PENDING', '2026-09-04 20:16:05.288'),
(8, 4, '/uploads/properties/4/images/4ad0c409-3d5b-4368-be68-8272a63bbd25.webp', 0, 1, 7, 'SAMPLE — PLOT  - Photo 8', 'PENDING', '2026-09-04 20:16:09.379'),
(9, 4, '/uploads/properties/4/images/657a4750-575e-4758-b5ed-4cb4a37efe3d.webp', 0, 1, 8, 'SAMPLE — PLOT  - Photo 9', 'PENDING', '2026-09-04 20:16:12.776'),
(10, 4, '/uploads/properties/4/images/39539622-7912-4df1-bd1f-d9753f37c840.webp', 0, 1, 9, 'SAMPLE — PLOT  - Photo 10', 'PENDING', '2026-09-04 20:16:15.238'),
(11, 4, '/uploads/properties/4/images/9d433710-8588-4bf1-b102-3cba9ad93850.webp', 0, 1, 10, 'SAMPLE — PLOT  - Photo 11', 'PENDING', '2026-09-04 20:16:18.986'),
(12, 4, '/uploads/properties/4/images/bc9539b8-1881-42ae-ad98-0489003b73a7.webp', 0, 1, 11, 'SAMPLE — PLOT  - Photo 12', 'PENDING', '2026-09-04 20:16:22.980'),
(13, 4, '/uploads/properties/4/images/f65b403f-ec56-483c-9480-71e18fb0f2a4.webp', 0, 1, 12, 'SAMPLE — PLOT  - Photo 13', 'PENDING', '2026-09-04 20:16:25.288'),
(14, 4, '/uploads/properties/4/images/7dd50a59-ccdc-422a-88c4-d2526808c46f.webp', 0, 1, 13, 'SAMPLE — PLOT  - Photo 14', 'PENDING', '2026-09-04 20:16:29.279'),
(15, 4, '/uploads/properties/4/images/65393e60-db06-4976-8060-502d190dc8c2.webp', 0, 1, 14, 'SAMPLE — PLOT  - Photo 15', 'PENDING', '2026-09-04 20:16:31.494'),
(16, 4, '/uploads/properties/4/images/085fad0b-a3df-4512-99b8-a70e09ed0e0c.webp', 0, 1, 15, 'SAMPLE — PLOT  - Photo 16', 'PENDING', '2026-09-04 20:16:33.878'),
(21, 2, 'https://rscrm.radharealhomeproperties.com/uploads/properties/2/images/224b8b34-bae9-4ae9-85b0-a155d7b03efc.webp', 1, 1, 0, NULL, 'PENDING', '2026-09-12 11:47:28.985'),
(22, 2, 'https://rscrm.radharealhomeproperties.com/uploads/properties/2/images/dc281236-6a30-4caf-899a-663ef9d409f1.webp', 0, 1, 0, NULL, 'PENDING', '2026-09-12 11:48:07.667');

-- --------------------------------------------------------

--
-- Table structure for table `PropertyLayoutRegion`
--

CREATE TABLE `PropertyLayoutRegion` (
  `id` int(11) NOT NULL,
  `layout_image_id` int(11) NOT NULL,
  `property_id` int(11) DEFAULT NULL,
  `project_unit_id` int(11) DEFAULT NULL,
  `x` double NOT NULL,
  `y` double NOT NULL,
  `created_by_id` int(11) NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `PropertyPlotDetails`
--

CREATE TABLE `PropertyPlotDetails` (
  `id` int(11) NOT NULL,
  `property_id` int(11) NOT NULL,
  `plot_number` varchar(191) DEFAULT NULL,
  `phase` varchar(191) DEFAULT NULL,
  `sector_block` varchar(191) DEFAULT NULL,
  `survey_number` varchar(191) DEFAULT NULL,
  `subdivision_number` varchar(191) DEFAULT NULL,
  `length` double DEFAULT NULL,
  `width` double DEFAULT NULL,
  `frontage` double DEFAULT NULL,
  `dimension_string` varchar(191) DEFAULT NULL,
  `north_boundary` varchar(191) DEFAULT NULL,
  `south_boundary` varchar(191) DEFAULT NULL,
  `east_boundary` varchar(191) DEFAULT NULL,
  `west_boundary` varchar(191) DEFAULT NULL,
  `road_width` double DEFAULT NULL,
  `number_of_roads` int(11) DEFAULT NULL,
  `is_corner` tinyint(1) DEFAULT 0,
  `is_park_facing` tinyint(1) DEFAULT 0,
  `is_main_road_facing` tinyint(1) DEFAULT 0,
  `near_entrance` tinyint(1) DEFAULT 0,
  `near_clubhouse` tinyint(1) DEFAULT 0,
  `near_park` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `PropertyPricing`
--

CREATE TABLE `PropertyPricing` (
  `id` int(11) NOT NULL,
  `property_id` int(11) NOT NULL,
  `base_price_per_unit` double DEFAULT NULL,
  `base_price` double NOT NULL DEFAULT 0,
  `facing_premium` double DEFAULT 0,
  `corner_premium` double DEFAULT 0,
  `park_facing_premium` double DEFAULT 0,
  `road_facing_premium` double DEFAULT 0,
  `floor_rise_charge` double DEFAULT 0,
  `development_charges` double DEFAULT 0,
  `maintenance_charges` double DEFAULT 0,
  `documentation_charges` double DEFAULT 0,
  `registration_charges` double DEFAULT 0,
  `other_charges` double DEFAULT 0,
  `discount` double DEFAULT 0,
  `final_price` double NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `PropertyPricing`
--

INSERT INTO `PropertyPricing` (`id`, `property_id`, `base_price_per_unit`, `base_price`, `facing_premium`, `corner_premium`, `park_facing_premium`, `road_facing_premium`, `floor_rise_charge`, `development_charges`, `maintenance_charges`, `documentation_charges`, `registration_charges`, `other_charges`, `discount`, `final_price`) VALUES
(2, 6, NULL, 4500000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5000000),
(3, 7, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(4, 8, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(5, 9, 5000, 750000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 750000);

-- --------------------------------------------------------

--
-- Table structure for table `PropertyPricingRule`
--

CREATE TABLE `PropertyPricingRule` (
  `id` int(11) NOT NULL,
  `property_id` int(11) NOT NULL,
  `label` varchar(191) NOT NULL,
  `kind` enum('BASE_RATE','PREMIUM','CHARGE','DISCOUNT','TAX') NOT NULL,
  `category` enum('FACING','FLOOR','CORNER','ROAD','PARK','VIEW','BHK','AMENITY','PARKING','INFRA','MAINTENANCE','LEGAL','CLUB','TAX','OTHER') NOT NULL,
  `calc_method` enum('FIXED','PER_SQFT','PER_SQYD','PERCENT_OF_BASE','QTY_X_RATE') NOT NULL,
  `rate` double NOT NULL,
  `area_basis` enum('CARPET','BUILT_UP','SUPER_BUILT_UP','PLOT_AREA','LUMPSUM') DEFAULT NULL,
  `is_mandatory` tinyint(1) NOT NULL DEFAULT 1,
  `is_tax` tinyint(1) NOT NULL DEFAULT 0,
  `is_refundable` tinyint(1) NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `sort_order` int(11) NOT NULL DEFAULT 0,
  `match_facing` varchar(191) DEFAULT NULL,
  `match_corner` tinyint(1) DEFAULT NULL,
  `match_park_facing` tinyint(1) DEFAULT NULL,
  `match_road_facing` tinyint(1) DEFAULT NULL,
  `match_main_road_facing` tinyint(1) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `PropertyPublication`
--

CREATE TABLE `PropertyPublication` (
  `id` int(11) NOT NULL,
  `property_id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `is_published` tinyint(1) NOT NULL DEFAULT 0,
  `published_at` datetime(3) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `PropertyVerificationLog`
--

CREATE TABLE `PropertyVerificationLog` (
  `id` int(11) NOT NULL,
  `property_id` int(11) NOT NULL,
  `actor_id` int(11) NOT NULL,
  `from_status` varchar(191) NOT NULL,
  `to_status` varchar(191) NOT NULL,
  `notes` text DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `PropertyVerificationLog`
--

INSERT INTO `PropertyVerificationLog` (`id`, `property_id`, `actor_id`, `from_status`, `to_status`, `notes`, `created_at`) VALUES
(1, 4, 1, 'DRAFT', 'PENDING_VERIFICATION', 'Property RRH-PR-2026-0001 submitted. Assigned to PM ID Queue for On-Site Verification.', '2026-09-04 20:15:33.737'),
(3, 6, 1, 'DRAFT', 'PENDING_VERIFICATION', 'Property RRH-PR-2026-0002 submitted. Assigned to PM ID Queue for On-Site Verification.', '2026-09-05 05:13:32.012'),
(4, 7, 1, 'DRAFT', 'PENDING_VERIFICATION', 'Property RRH-PR-2026-0003 submitted. Assigned to PM ID Queue for On-Site Verification.', '2026-09-05 05:15:27.827'),
(5, 8, 1, 'DRAFT', 'PENDING_VERIFICATION', 'Property RRH-PR-2026-0004 submitted. Assigned to PM ID Queue for On-Site Verification.', '2026-09-05 05:21:47.206'),
(6, 9, 1, 'DRAFT', 'PENDING_VERIFICATION', 'Property RRH-PR-2026-0005 submitted. Assigned to PM ID Queue for On-Site Verification.', '2026-09-05 05:35:54.145'),
(7, 2, 1, 'DRAFT', 'PENDING_VERIFICATION', 'Property RRH-PR-2026-0001 submitted. Assigned to PM ID Queue for On-Site Verification.', '2026-09-11 12:08:21.309'),
(8, 2, 1, 'PENDING_VERIFICATION', 'PENDING_DM_POLISH', 'PM On-Site Verification: PASSED. Notes: PM On-Site Check Executed', '2026-09-11 12:16:39.391'),
(9, 2, 1, 'PENDING_DM_POLISH', 'PENDING_MD_APPROVAL', 'Digital Marketing Head verified property as-is (no polish required). Submitted directly for MD Final Approval.', '2026-09-11 12:16:57.577'),
(10, 2, 31, 'PENDING_MD_APPROVAL', 'LIVE', 'MD Decision: APPROVED & LIVE. Comments: MD Decision Executed', '2026-09-11 12:18:25.397');

-- --------------------------------------------------------

--
-- Table structure for table `PropertyVillaDetails`
--

CREATE TABLE `PropertyVillaDetails` (
  `id` int(11) NOT NULL,
  `property_id` int(11) NOT NULL,
  `villa_number` varchar(191) DEFAULT NULL,
  `villa_type` varchar(191) DEFAULT NULL,
  `bhk` varchar(191) DEFAULT NULL,
  `has_second_floor` tinyint(1) DEFAULT 0,
  `second_floor_area` double DEFAULT NULL,
  `has_servant_room` tinyint(1) DEFAULT 0,
  `has_pooja_room` tinyint(1) DEFAULT 0,
  `has_study_room` tinyint(1) DEFAULT 0,
  `has_family_room` tinyint(1) DEFAULT 0,
  `garden_area` double DEFAULT NULL,
  `terrace_area` double DEFAULT NULL,
  `is_clubhouse_facing` tinyint(1) DEFAULT 0,
  `is_pool_facing` tinyint(1) DEFAULT 0,
  `has_private_garden` tinyint(1) DEFAULT 0,
  `has_private_pool` tinyint(1) DEFAULT 0,
  `has_terrace` tinyint(1) DEFAULT 0,
  `has_compound_wall` tinyint(1) DEFAULT 0,
  `has_gate` tinyint(1) DEFAULT 0,
  `number_of_cars` int(11) DEFAULT NULL,
  `has_ev_charging` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `PublicApiKey`
--

CREATE TABLE `PublicApiKey` (
  `id` int(11) NOT NULL,
  `api_key` varchar(191) NOT NULL,
  `company_id` int(11) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `PublicApiKey`
--

INSERT INTO `PublicApiKey` (`id`, `api_key`, `company_id`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'sk_pro_llu_0d78fcb987f772be80338ddc0649b69e', 17, 1, '2026-09-04 19:43:36.781', '2026-09-04 19:43:36.781');

-- --------------------------------------------------------

--
-- Table structure for table `PushSubscription`
--

CREATE TABLE `PushSubscription` (
  `id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `endpoint` text NOT NULL,
  `p256dh` text NOT NULL,
  `auth` varchar(191) NOT NULL,
  `user_agent` varchar(191) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `PushSubscription`
--

INSERT INTO `PushSubscription` (`id`, `employee_id`, `endpoint`, `p256dh`, `auth`, `user_agent`, `created_at`) VALUES
(9, 4, 'https://fcm.googleapis.com/fcm/send/f-PYPq7Po78:APA91bERNhErB5OiFHaiF-uj-Y3T-G4kYIa1flOfh3wKbe_9BSXY6h4MUANKpdBRGtisgU455BNBoOqi0yjNiIh9UcVnAzCxfEX-aOKwflB7908CtyDiuutIyRibI1QdDGzjbw4bZMhf', 'BDJtUc6cMfuhh5xnqBMQV20eGj3N6o4vtpYKvW0e3wlpQBfUi14m67czgsxG0_W4zXkHhDADbb_raxSrsZU-qVk', '9FmqL69iTyrx5ooDJrFLZQ', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.0.0 Mobile Safari/537.36', '2026-09-11 11:58:52.183'),
(10, 2, 'https://fcm.googleapis.com/fcm/send/dwd-F_C4XTw:APA91bHyDbGw1sDw5FCh0FLpJxegrK4nfoxXre2on3jg_5zUjtJIxQ8Xr6AEparLiQ8Qybt9GoBCJt-uNlZey3tPy062Li0x9hGJwWPxq-vgLc6khHN0Vfrzt9xVlWJZuVujIPIiTfkf', 'BBkKMel8SCvJKIxz1WwA0DRmLyAyvvvasD1LV8dZtt8ugsqrKWm_oFyYAIud1HltMFcpFTWCnZFjJpUNNnSDzuI', 'sWQTTpI9U4FHJ8ydtIkIGQ', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Mobile Safari/537.36', '2026-09-11 13:20:49.431'),
(11, 1, 'https://fcm.googleapis.com/fcm/send/fqMzLdwzT5A:APA91bEqkfUYuI1GqoCBraji5_pxeHo9XKpCOxdwSxjQP2g9S0J8oJ7vj78YOvIWKEZ6SfcndePDR4lSmaaG0Hbg7ZQuS6egoyp-CCaGakGixqRnBM9fQBBSP4Sm0L-JxysNr1TL_45S', 'BBdA0lmjkLSffn6ni6-kBKlwAH-65AWWrAIWyqFwFOsfMTT7EhFJu5Lx1tXVleuDOPqPCySf-d6Uutf5ZB9tkqw', '4yS8_UK9tRVyfldXo0O7LQ', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Mobile Safari/537.36', '2026-09-11 14:35:39.671'),
(12, 1, 'https://fcm.googleapis.com/fcm/send/c9qzdRdqzjg:APA91bElZXp-oElvKzgqdAtEOf_EONhyZ8X5bYW_m9PnP2Kf6kjCEbygGSuuckexE387t61gduZFBcGXPcxRDzaj65Gs9iDiKk2_D4kKL_y8d9YMhcOy5quPB7edbynkTChWZAqLrlnf', 'BMw6kCpooirbas0shH6O7hf9UKWvJuTKNZ0Vyh56l5b-eTZm3YKBoDXeltVUvyeh6ZLL-VTqkkEeKzWIaqBw5z0', 'rX-HMcU5KGe1NZrLO7ZmYQ', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36', '2026-09-14 07:41:59.051');

-- --------------------------------------------------------

--
-- Table structure for table `Role`
--

CREATE TABLE `Role` (
  `id` int(11) NOT NULL,
  `name` varchar(191) NOT NULL,
  `is_system` tinyint(1) NOT NULL DEFAULT 0,
  `is_invisible` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Role`
--

INSERT INTO `Role` (`id`, `name`, `is_system`, `is_invisible`) VALUES
(1, 'Managing director', 1, 0),
(2, 'Admin (Technical)', 1, 1),
(3, 'HR', 0, 0),
(4, 'marketing director', 0, 0),
(5, 'project managers', 0, 0),
(6, 'Digital lead operator', 0, 0),
(7, 'telecallers', 0, 0),
(8, 'Digital Marketing head(manager)', 0, 0),
(9, 'accountant', 0, 0),
(10, 'Agent', 0, 0),
(11, 'digital marketing executive', 0, 0),
(12, 'Sales manager', 0, 0),
(13, 'Channel partner manager', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `RolePermission`
--

CREATE TABLE `RolePermission` (
  `role_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `RolePermission`
--

INSERT INTO `RolePermission` (`role_id`, `permission_id`) VALUES
(1, 1),
(2, 1),
(3, 1),
(1, 2),
(2, 2),
(3, 2),
(4, 2),
(6, 2),
(8, 2),
(11, 2),
(1, 3),
(2, 3),
(3, 3),
(1, 4),
(2, 4),
(1, 5),
(2, 5),
(3, 5),
(9, 5),
(1, 6),
(2, 6),
(1, 7),
(2, 7),
(3, 7),
(1, 8),
(2, 8),
(4, 8),
(6, 8),
(7, 8),
(13, 8),
(1, 9),
(2, 9),
(4, 9),
(5, 9),
(6, 9),
(7, 9),
(8, 9),
(9, 9),
(10, 9),
(11, 9),
(12, 9),
(13, 9),
(1, 10),
(2, 10),
(4, 10),
(6, 10),
(7, 10),
(11, 10),
(12, 10),
(13, 10),
(1, 11),
(2, 11),
(4, 11),
(1, 12),
(2, 12),
(4, 12),
(6, 12),
(12, 12),
(1, 13),
(2, 13),
(4, 13),
(6, 13),
(1, 14),
(2, 14),
(6, 14),
(12, 14),
(1, 15),
(2, 15),
(7, 15),
(12, 15),
(1, 16),
(2, 16),
(4, 16),
(6, 16),
(1, 17),
(2, 17),
(4, 17),
(5, 17),
(6, 17),
(7, 17),
(10, 17),
(12, 17),
(13, 17),
(1, 18),
(2, 18),
(4, 18),
(5, 18),
(6, 18),
(7, 18),
(10, 18),
(12, 18),
(13, 18),
(1, 19),
(2, 19),
(4, 19),
(6, 19),
(1, 20),
(2, 20),
(4, 20),
(6, 20),
(7, 20),
(10, 20),
(13, 20),
(1, 21),
(2, 21),
(3, 21),
(9, 21),
(1, 22),
(2, 22),
(5, 22),
(1, 23),
(2, 23),
(3, 23),
(4, 23),
(5, 23),
(6, 23),
(7, 23),
(8, 23),
(9, 23),
(10, 23),
(11, 23),
(12, 23),
(13, 23),
(1, 24),
(2, 24),
(5, 24),
(1, 25),
(2, 25),
(1, 26),
(2, 26),
(5, 26),
(1, 27),
(2, 27),
(4, 27),
(8, 27),
(11, 27),
(1, 28),
(2, 28),
(4, 28),
(1, 29),
(2, 29),
(5, 29),
(6, 29),
(7, 29),
(13, 29),
(1, 30),
(2, 30),
(4, 30),
(5, 30),
(7, 30),
(10, 30),
(11, 30),
(12, 30),
(13, 30),
(1, 31),
(2, 31),
(5, 31),
(6, 31),
(1, 32),
(2, 32),
(4, 32),
(5, 32),
(12, 32),
(1, 33),
(2, 33),
(4, 33),
(5, 33),
(10, 33),
(13, 33),
(1, 34),
(2, 34),
(5, 34),
(1, 35),
(2, 35),
(3, 35),
(4, 35),
(5, 35),
(6, 35),
(7, 35),
(8, 35),
(9, 35),
(10, 35),
(11, 35),
(12, 35),
(13, 35),
(1, 36),
(2, 36),
(5, 36),
(1, 37),
(2, 37),
(5, 37),
(1, 38),
(2, 38),
(6, 38),
(1, 39),
(2, 39),
(4, 39),
(5, 39),
(6, 39),
(7, 39),
(9, 39),
(10, 39),
(12, 39),
(1, 40),
(2, 40),
(6, 40),
(9, 40),
(1, 41),
(2, 41),
(1, 42),
(2, 42),
(1, 43),
(2, 43),
(6, 43),
(9, 43),
(1, 44),
(2, 44),
(4, 44),
(5, 44),
(6, 44),
(7, 44),
(9, 44),
(10, 44),
(1, 45),
(2, 45),
(9, 45),
(1, 46),
(2, 46),
(9, 46),
(1, 47),
(2, 47),
(3, 47),
(4, 47),
(5, 47),
(12, 47),
(1, 48),
(2, 48),
(3, 48),
(5, 48),
(7, 48),
(10, 48),
(11, 48),
(12, 48),
(13, 48),
(1, 49),
(2, 49),
(3, 49),
(5, 49),
(7, 49),
(10, 49),
(11, 49),
(12, 49),
(13, 49),
(1, 50),
(2, 50),
(3, 50),
(5, 50),
(12, 50),
(1, 51),
(2, 51),
(7, 51),
(10, 51),
(11, 51),
(13, 51),
(1, 52),
(2, 52),
(7, 52),
(10, 52),
(11, 52),
(13, 52),
(1, 53),
(2, 53),
(7, 53),
(1, 54),
(2, 54),
(7, 54),
(1, 55),
(2, 55),
(3, 55),
(1, 56),
(2, 56),
(3, 56),
(1, 57),
(2, 57),
(7, 57),
(10, 57),
(11, 57),
(1, 58),
(2, 58),
(5, 58),
(7, 58),
(10, 58),
(11, 58),
(13, 58),
(1, 59),
(2, 59),
(3, 59),
(4, 59),
(12, 59),
(1, 60),
(2, 60),
(4, 60),
(6, 60),
(8, 60),
(12, 60),
(1, 61),
(2, 61),
(3, 61),
(4, 61),
(5, 61),
(6, 61),
(7, 61),
(8, 61),
(9, 61),
(10, 61),
(11, 61),
(12, 61),
(13, 61),
(1, 62),
(2, 62),
(3, 62),
(4, 62),
(5, 62),
(6, 62),
(7, 62),
(8, 62),
(9, 62),
(10, 62),
(11, 62),
(12, 62),
(13, 62),
(1, 63),
(2, 63),
(9, 63),
(1, 64),
(2, 64),
(1, 65),
(2, 65),
(9, 65),
(1, 66),
(2, 66),
(7, 66),
(10, 66),
(11, 66),
(13, 66),
(1, 67),
(2, 67),
(3, 67),
(4, 67),
(8, 67),
(12, 67),
(1, 68),
(2, 68),
(1, 69),
(2, 69),
(1, 70),
(2, 70),
(1, 71),
(2, 71),
(1, 72),
(2, 72),
(1, 73),
(2, 73),
(1, 74),
(2, 74),
(1, 75),
(2, 75),
(1, 76),
(2, 76),
(1, 77),
(2, 77),
(3, 77),
(4, 77),
(5, 77),
(6, 77),
(9, 77),
(1, 78),
(2, 78),
(3, 78),
(4, 78),
(5, 78),
(6, 78),
(7, 78),
(9, 78),
(10, 78),
(1, 79),
(2, 79),
(9, 79),
(1, 80),
(2, 80),
(1, 81),
(2, 81),
(5, 81),
(10, 81),
(1, 82),
(2, 82),
(5, 82),
(6, 82),
(9, 82),
(10, 82),
(1, 83),
(2, 83),
(5, 83),
(6, 83),
(10, 83),
(1, 84),
(2, 84),
(5, 84),
(10, 84),
(1, 85),
(2, 85),
(5, 85),
(10, 85),
(1, 86),
(2, 86),
(5, 86),
(10, 86),
(1, 87),
(2, 87),
(4, 87),
(5, 87),
(1, 88),
(2, 88),
(4, 88),
(5, 88),
(10, 88),
(1, 89),
(2, 89),
(4, 89),
(5, 89),
(1, 90),
(2, 90),
(4, 90),
(5, 90),
(1, 91),
(2, 91),
(5, 91),
(10, 91),
(1, 92),
(2, 92),
(5, 92),
(1, 93),
(2, 93),
(1, 94),
(2, 94),
(6, 94),
(1, 95),
(2, 95),
(1, 96),
(2, 96),
(6, 96);

-- --------------------------------------------------------

--
-- Table structure for table `SiteVisitBooking`
--

CREATE TABLE `SiteVisitBooking` (
  `id` int(11) NOT NULL,
  `booking_code` varchar(191) NOT NULL,
  `lead_id` int(11) NOT NULL,
  `property_id` int(11) DEFAULT NULL,
  `project_unit_id` int(11) DEFAULT NULL,
  `telecaller_id` int(11) NOT NULL,
  `project_manager_id` int(11) DEFAULT NULL,
  `assigned_agent_id` int(11) DEFAULT NULL,
  `project_id` int(11) DEFAULT NULL,
  `scheduled_date` datetime(3) NOT NULL,
  `status` enum('REQUESTED','PENDING_ACCEPTANCE','REASSIGNED','ESCALATED_TO_MARKETING_DIRECTOR','ACCEPTED','PENDING_CUSTOMER_RECONFIRMATION','RESCHEDULE_REQUESTED','PENDING_PM_RECONFIRMATION','CONFIRMED','ACTIVE','COMPLETED','CANCELLED','ON_HOLD','CANCELLATION_PENDING_PM_CONFIRMATION') NOT NULL DEFAULT 'REQUESTED',
  `cancellation_reason` text DEFAULT NULL,
  `cancellation_confirmed_by_pm_id` int(11) DEFAULT NULL,
  `verification_call_notes` text DEFAULT NULL,
  `feedback_notes` text DEFAULT NULL,
  `rating` varchar(191) DEFAULT NULL,
  `proof_photo_url` varchar(191) DEFAULT NULL,
  `completed_at` datetime(3) DEFAULT NULL,
  `opportunity_id` int(11) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `SiteVisitBooking`
--

INSERT INTO `SiteVisitBooking` (`id`, `booking_code`, `lead_id`, `property_id`, `project_unit_id`, `telecaller_id`, `project_manager_id`, `assigned_agent_id`, `project_id`, `scheduled_date`, `status`, `cancellation_reason`, `cancellation_confirmed_by_pm_id`, `verification_call_notes`, `feedback_notes`, `rating`, `proof_photo_url`, `completed_at`, `opportunity_id`, `created_at`, `updated_at`) VALUES
(3, 'RRH-SV-2026-0001', 31, NULL, NULL, 2, NULL, NULL, NULL, '2026-09-13 05:10:00.000', 'PENDING_ACCEPTANCE', NULL, NULL, 'Site visit booked by telecaller.', NULL, NULL, NULL, NULL, NULL, '2026-09-11 12:58:03.904', '2026-09-11 12:58:04.422'),
(4, 'RRH-SV-2026-0002', 31, NULL, NULL, 2, NULL, NULL, NULL, '2026-09-13 05:10:00.000', 'PENDING_ACCEPTANCE', NULL, NULL, 'Site visit booked by telecaller.', NULL, NULL, NULL, NULL, NULL, '2026-09-11 12:58:06.310', '2026-09-11 12:58:06.780'),
(5, 'RRH-SV-2026-0003', 30, NULL, NULL, 3, NULL, NULL, NULL, '2026-09-12 07:49:00.000', 'PENDING_ACCEPTANCE', NULL, NULL, 'Site visit booked by telecaller.', NULL, NULL, NULL, NULL, NULL, '2026-09-11 13:21:11.605', '2026-09-11 13:21:12.081');

-- --------------------------------------------------------

--
-- Table structure for table `SiteVisitEscalation`
--

CREATE TABLE `SiteVisitEscalation` (
  `id` int(11) NOT NULL,
  `site_visit_booking_id` int(11) NOT NULL,
  `marketing_director_notified_at` datetime(3) DEFAULT NULL,
  `managing_director_notified_at` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `SiteVisitEscalation`
--

INSERT INTO `SiteVisitEscalation` (`id`, `site_visit_booking_id`, `marketing_director_notified_at`, `managing_director_notified_at`) VALUES
(3, 3, '2026-09-11 12:58:05.422', NULL),
(4, 4, '2026-09-11 12:58:07.689', NULL),
(5, 5, '2026-09-11 13:21:12.984', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `SiteVisitFeedback`
--

CREATE TABLE `SiteVisitFeedback` (
  `id` int(11) NOT NULL,
  `site_visit_id` int(11) NOT NULL,
  `rated_employee_id` int(11) NOT NULL,
  `token_hash` varchar(191) NOT NULL,
  `expires_at` datetime(3) NOT NULL,
  `submitted_at` datetime(3) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `on_time` tinyint(1) DEFAULT NULL,
  `answered_questions` tinyint(1) DEFAULT NULL,
  `property_as_described` tinyint(1) DEFAULT NULL,
  `comment` text DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `SiteVisitProperty`
--

CREATE TABLE `SiteVisitProperty` (
  `id` int(11) NOT NULL,
  `visit_id` int(11) NOT NULL,
  `property_id` int(11) DEFAULT NULL,
  `project_unit_id` int(11) DEFAULT NULL,
  `outcome` varchar(191) DEFAULT NULL,
  `outcome_reason` text DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `SiteVisitReassignment`
--

CREATE TABLE `SiteVisitReassignment` (
  `id` int(11) NOT NULL,
  `visit_id` int(11) NOT NULL,
  `from_employee_id` int(11) DEFAULT NULL,
  `to_employee_id` int(11) DEFAULT NULL,
  `reason` text DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Task`
--

CREATE TABLE `Task` (
  `id` int(11) NOT NULL,
  `title` varchar(191) NOT NULL,
  `description` varchar(191) DEFAULT NULL,
  `assignee_id` int(11) NOT NULL,
  `target_date` datetime(3) NOT NULL,
  `status` varchar(191) NOT NULL DEFAULT 'PENDING',
  `created_by` int(11) NOT NULL,
  `completed_at` datetime(3) DEFAULT NULL,
  `lead_id` int(11) DEFAULT NULL,
  `opportunity_id` int(11) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Task`
--

INSERT INTO `Task` (`id`, `title`, `description`, `assignee_id`, `target_date`, `status`, `created_by`, `completed_at`, `lead_id`, `opportunity_id`, `created_at`, `updated_at`) VALUES
(2, 'Demo to Nune Prem Swaroop', 'Explain investment plan to Premswaroop', 16, '2026-09-12 06:00:00.000', 'COMPLETED', 31, '2026-09-11 13:22:26.606', NULL, NULL, '2026-09-11 13:20:50.646', '2026-09-11 13:22:26.607');

-- --------------------------------------------------------

--
-- Table structure for table `WebAuthnCredential`
--

CREATE TABLE `WebAuthnCredential` (
  `id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `credential_id` varchar(191) NOT NULL,
  `public_key` text NOT NULL,
  `counter` int(11) NOT NULL DEFAULT 0,
  `device_label` varchar(191) DEFAULT NULL,
  `transports` varchar(191) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `last_used_at` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `WebsiteAccount`
--

CREATE TABLE `WebsiteAccount` (
  `id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `email` varchar(191) NOT NULL,
  `phone` varchar(191) DEFAULT NULL,
  `full_name` varchar(191) NOT NULL,
  `password_hash` varchar(191) NOT NULL,
  `token_version` int(11) NOT NULL DEFAULT 1,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `WebsiteActivityEvent`
--

CREATE TABLE `WebsiteActivityEvent` (
  `id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `account_id` int(11) DEFAULT NULL,
  `anonymous_id` varchar(191) DEFAULT NULL,
  `event_name` varchar(191) NOT NULL,
  `page` varchar(191) DEFAULT NULL,
  `property_id` int(11) DEFAULT NULL,
  `project_id` int(11) DEFAULT NULL,
  `search_context` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`search_context`)),
  `metadata` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`metadata`)),
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `WebsiteCompareItem`
--

CREATE TABLE `WebsiteCompareItem` (
  `id` int(11) NOT NULL,
  `account_id` int(11) NOT NULL,
  `property_id` int(11) DEFAULT NULL,
  `project_unit_id` int(11) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `WebsiteShortlistItem`
--

CREATE TABLE `WebsiteShortlistItem` (
  `id` int(11) NOT NULL,
  `account_id` int(11) NOT NULL,
  `property_id` int(11) DEFAULT NULL,
  `project_unit_id` int(11) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('1038b742-f4a5-4b06-8cfe-1edfee88174c', '7204abee0643974f8449eeeef09e3d9474f7920922bfaabcb7526a186554d890', '2026-09-11 11:38:24.511', '20260906133128_add_project_layout_images', '', NULL, '2026-09-11 11:38:24.511', 0),
('4940fa01-5701-4e81-adc8-0f8eb0f270ce', '18fcd43de57ccc017e4da26cd19382020ed77f3eb392909983f911fc15373934', '2026-09-11 11:38:00.157', '20260906113909_add_employee_company_access', '', NULL, '2026-09-11 11:38:00.157', 0),
('625d7681-2ce1-41f4-b01e-55aa68252b4e', '206548cb882326928ee388e914c58849be946da9b1f7af13f7af18d6142f6410', '2026-09-11 11:38:45.551', '20260911120000_add_demo_status_and_project_verification', '', NULL, '2026-09-11 11:38:45.551', 0),
('78ee6a53-3c86-4a77-936f-66bbb970db7b', '7ab5e8911810b473f6a2fd67a9971d854d7aed065caf85dd970db5d2d97f1d19', '2026-09-11 11:38:17.656', '20260828000000_lead_workflow_spec_sections_1_2', '', NULL, '2026-09-11 11:38:17.656', 0),
('a6322cce-5ca1-4777-bf44-aefcb235601c', '0f3efa9cb411df2ee956b3c6d71ecbe7d9eedb3bf1a39f4355d2d305c2d94135', '2026-09-11 11:38:15.057', '20260827190734_add_referral_person_name', '', NULL, '2026-09-11 11:38:15.057', 0),
('b3be8d95-c95e-4662-a0e9-04d65b366cea', '2995fa9597cd4b0bf8f9283c90a10a68e8ab133f077d07829b0bacb0a7c25e94', '2026-09-11 11:38:30.551', '20260907122025_add_lead_external_agent_fields', '', NULL, '2026-09-11 11:38:30.551', 0),
('b59afc37-950c-409d-a8e1-e04a8dabbc42', '230f315a40f38417faf4615269495583afbe6b721a065ae07e58220f6a7300ee', '2026-09-11 11:38:12.432', '20260823050047_init', '', NULL, '2026-09-11 11:38:12.432', 0),
('cb043283-e6d8-4ca1-8eb3-e9b72374bf43', 'd8d1c5012494d34004fe77bc9951cb2c079f1de9e6e1c66bb655aa49e4738c28', '2026-09-11 11:38:27.096', '20260907083231_add_employee_resignation_fields', '', NULL, '2026-09-11 11:38:27.096', 0),
('e13dc2ee-d541-47be-934b-92cf35fc22c6', '65f8ae7532dadc87ca155b9b4a7d89c6e51bd794b678c45f6559d8d537dfc549', '2026-09-11 11:38:20.602', '20260829021830_add_report_required_to_employee', '', NULL, '2026-09-11 11:38:20.602', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Amenity`
--
ALTER TABLE `Amenity`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Amenity_company_id_name_key` (`company_id`,`name`),
  ADD KEY `Amenity_company_id_idx` (`company_id`);

--
-- Indexes for table `AttendanceLog`
--
ALTER TABLE `AttendanceLog`
  ADD PRIMARY KEY (`id`),
  ADD KEY `AttendanceLog_employee_id_idx` (`employee_id`),
  ADD KEY `AttendanceLog_employee_id_check_in_at_idx` (`employee_id`,`check_in_at`),
  ADD KEY `AttendanceLog_employee_id_check_out_at_idx` (`employee_id`,`check_out_at`);

--
-- Indexes for table `AttendanceProposal`
--
ALTER TABLE `AttendanceProposal`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `AuditEvent`
--
ALTER TABLE `AuditEvent`
  ADD PRIMARY KEY (`id`),
  ADD KEY `AuditEvent_actor_id_idx` (`actor_id`);

--
-- Indexes for table `AuthSession`
--
ALTER TABLE `AuthSession`
  ADD PRIMARY KEY (`id`),
  ADD KEY `AuthSession_employee_id_idx` (`employee_id`),
  ADD KEY `AuthSession_family_token_idx` (`family_token`),
  ADD KEY `AuthSession_refresh_token_hash_idx` (`refresh_token_hash`);

--
-- Indexes for table `Booking`
--
ALTER TABLE `Booking`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Booking_booking_code_key` (`booking_code`),
  ADD KEY `Booking_company_id_idx` (`company_id`),
  ADD KEY `Booking_customer_id_idx` (`customer_id`),
  ADD KEY `Booking_property_id_idx` (`property_id`),
  ADD KEY `Booking_project_unit_id_idx` (`project_unit_id`),
  ADD KEY `Booking_status_idx` (`status`),
  ADD KEY `Booking_form_status_idx` (`form_status`),
  ADD KEY `Booking_is_legacy_idx` (`is_legacy`),
  ADD KEY `Booking_branch_id_fkey` (`branch_id`),
  ADD KEY `Booking_assigned_employee_id_fkey` (`assigned_employee_id`),
  ADD KEY `Booking_form_submitted_by_id_fkey` (`form_submitted_by_id`),
  ADD KEY `Booking_md_approved_by_id_fkey` (`md_approved_by_id`);

--
-- Indexes for table `BookingPortalMapping`
--
ALTER TABLE `BookingPortalMapping`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `BookingPortalMapping_crms_booking_id_key` (`crms_booking_id`),
  ADD KEY `BookingPortalMapping_company_id_idx` (`company_id`),
  ADD KEY `BookingPortalMapping_crms_booking_id_idx` (`crms_booking_id`),
  ADD KEY `BookingPortalMapping_crms_customer_id_idx` (`crms_customer_id`),
  ADD KEY `BookingPortalMapping_handoff_status_idx` (`handoff_status`);

--
-- Indexes for table `Branch`
--
ALTER TABLE `Branch`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Branch_company_id_idx` (`company_id`);

--
-- Indexes for table `Company`
--
ALTER TABLE `Company`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Company_code_key` (`code`);

--
-- Indexes for table `CompanyHoliday`
--
ALTER TABLE `CompanyHoliday`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `CompanyHoliday_company_id_date_key` (`company_id`,`date`),
  ADD KEY `CompanyHoliday_company_id_idx` (`company_id`);

--
-- Indexes for table `Complaint`
--
ALTER TABLE `Complaint`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Complaint_complaint_code_key` (`complaint_code`),
  ADD KEY `Complaint_company_id_idx` (`company_id`),
  ADD KEY `Complaint_customer_id_idx` (`customer_id`),
  ADD KEY `Complaint_booking_id_idx` (`booking_id`),
  ADD KEY `Complaint_property_id_idx` (`property_id`),
  ADD KEY `Complaint_status_idx` (`status`),
  ADD KEY `Complaint_priority_idx` (`priority`),
  ADD KEY `Complaint_assigned_employee_id_idx` (`assigned_employee_id`),
  ADD KEY `Complaint_created_at_idx` (`created_at`),
  ADD KEY `Complaint_project_unit_id_fkey` (`project_unit_id`);

--
-- Indexes for table `Customer`
--
ALTER TABLE `Customer`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Customer_customer_code_key` (`customer_code`),
  ADD UNIQUE KEY `Customer_origin_lead_id_key` (`origin_lead_id`),
  ADD KEY `Customer_company_id_idx` (`company_id`),
  ADD KEY `Customer_branch_id_idx` (`branch_id`),
  ADD KEY `Customer_assigned_to_id_idx` (`assigned_to_id`),
  ADD KEY `Customer_kyc_status_idx` (`kyc_status`);

--
-- Indexes for table `CustomerNotification`
--
ALTER TABLE `CustomerNotification`
  ADD PRIMARY KEY (`id`),
  ADD KEY `CustomerNotification_company_id_idx` (`company_id`),
  ADD KEY `CustomerNotification_customer_id_idx` (`customer_id`),
  ADD KEY `CustomerNotification_is_read_idx` (`is_read`),
  ADD KEY `CustomerNotification_created_at_idx` (`created_at`),
  ADD KEY `CustomerNotification_company_id_customer_id_created_at_idx` (`company_id`,`customer_id`,`created_at`),
  ADD KEY `CustomerNotification_customer_id_is_read_idx` (`customer_id`,`is_read`);

--
-- Indexes for table `DailyReport`
--
ALTER TABLE `DailyReport`
  ADD PRIMARY KEY (`id`),
  ADD KEY `DailyReport_employee_id_idx` (`employee_id`);

--
-- Indexes for table `DailyTarget`
--
ALTER TABLE `DailyTarget`
  ADD PRIMARY KEY (`id`),
  ADD KEY `DailyTarget_role_name_idx` (`role_name`),
  ADD KEY `DailyTarget_employee_id_idx` (`employee_id`),
  ADD KEY `DailyTarget_company_id_fkey` (`company_id`);

--
-- Indexes for table `Demo`
--
ALTER TABLE `Demo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Demo_lead_id_fkey` (`lead_id`),
  ADD KEY `Demo_handler_id_fkey` (`handler_id`);

--
-- Indexes for table `DemoInterestedProperty`
--
ALTER TABLE `DemoInterestedProperty`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `DemoInterestedProperty_demo_id_property_id_key` (`demo_id`,`property_id`),
  ADD UNIQUE KEY `DemoInterestedProperty_demo_id_project_unit_id_key` (`demo_id`,`project_unit_id`),
  ADD KEY `DemoInterestedProperty_project_unit_id_idx` (`project_unit_id`),
  ADD KEY `DemoInterestedProperty_property_id_fkey` (`property_id`);

--
-- Indexes for table `Employee`
--
ALTER TABLE `Employee`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Employee_employee_code_key` (`employee_code`),
  ADD KEY `Employee_company_id_idx` (`company_id`),
  ADD KEY `Employee_branch_id_idx` (`branch_id`),
  ADD KEY `Employee_company_id_created_at_idx` (`company_id`,`created_at`),
  ADD KEY `Employee_phone_idx` (`phone`),
  ADD KEY `Employee_email_idx` (`email`),
  ADD KEY `Employee_reporting_manager_id_fkey` (`reporting_manager_id`);

--
-- Indexes for table `EmployeeBranch`
--
ALTER TABLE `EmployeeBranch`
  ADD PRIMARY KEY (`employee_id`,`branch_id`),
  ADD KEY `EmployeeBranch_branch_id_fkey` (`branch_id`);

--
-- Indexes for table `EmployeeCompanyAccess`
--
ALTER TABLE `EmployeeCompanyAccess`
  ADD PRIMARY KEY (`employee_id`,`company_id`),
  ADD KEY `EmployeeCompanyAccess_company_id_fkey` (`company_id`);

--
-- Indexes for table `EmployeePermissionOverride`
--
ALTER TABLE `EmployeePermissionOverride`
  ADD PRIMARY KEY (`employee_id`,`permission_id`),
  ADD KEY `EmployeePermissionOverride_permission_id_fkey` (`permission_id`);

--
-- Indexes for table `EmployeeQrCode`
--
ALTER TABLE `EmployeeQrCode`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `EmployeeQrCode_qr_token_key` (`qr_token`),
  ADD KEY `EmployeeQrCode_employee_id_idx` (`employee_id`);

--
-- Indexes for table `EmployeeRole`
--
ALTER TABLE `EmployeeRole`
  ADD PRIMARY KEY (`employee_id`,`role_id`),
  ADD KEY `EmployeeRole_role_id_fkey` (`role_id`);

--
-- Indexes for table `ExpenseRefund`
--
ALTER TABLE `ExpenseRefund`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ExpenseRefund_employee_id_idx` (`employee_id`),
  ADD KEY `ExpenseRefund_status_idx` (`status`),
  ADD KEY `ExpenseRefund_company_id_idx` (`company_id`),
  ADD KEY `ExpenseRefund_accountant_id_fkey` (`accountant_id`),
  ADD KEY `ExpenseRefund_md_id_fkey` (`md_id`),
  ADD KEY `ExpenseRefund_refunded_by_fkey` (`refunded_by`);

--
-- Indexes for table `Installment`
--
ALTER TABLE `Installment`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Installment_booking_id_installment_number_key` (`booking_id`,`installment_number`),
  ADD KEY `Installment_booking_id_idx` (`booking_id`),
  ADD KEY `Installment_status_idx` (`status`),
  ADD KEY `Installment_recorded_by_id_fkey` (`recorded_by_id`);

--
-- Indexes for table `IntegrationEvent`
--
ALTER TABLE `IntegrationEvent`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IntegrationEvent_company_id_idx` (`company_id`),
  ADD KEY `IntegrationEvent_status_idx` (`status`),
  ADD KEY `IntegrationEvent_crms_booking_id_idx` (`crms_booking_id`),
  ADD KEY `IntegrationEvent_crms_customer_id_idx` (`crms_customer_id`),
  ADD KEY `IntegrationEvent_created_at_idx` (`created_at`);

--
-- Indexes for table `InventoryFeature`
--
ALTER TABLE `InventoryFeature`
  ADD PRIMARY KEY (`id`),
  ADD KEY `InventoryFeature_project_unit_id_idx` (`project_unit_id`),
  ADD KEY `InventoryFeature_property_id_idx` (`property_id`),
  ADD KEY `InventoryFeature_amenity_id_fkey` (`amenity_id`);

--
-- Indexes for table `KioskCredential`
--
ALTER TABLE `KioskCredential`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `KioskCredential_company_id_username_key` (`company_id`,`username`),
  ADD KEY `KioskCredential_company_id_idx` (`company_id`),
  ADD KEY `KioskCredential_branch_id_idx` (`branch_id`),
  ADD KEY `KioskCredential_created_by_id_idx` (`created_by_id`);

--
-- Indexes for table `Lead`
--
ALTER TABLE `Lead`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Lead_lead_code_key` (`lead_code`),
  ADD KEY `Lead_company_id_idx` (`company_id`),
  ADD KEY `Lead_branch_id_idx` (`branch_id`),
  ADD KEY `Lead_assigned_to_id_idx` (`assigned_to_id`),
  ADD KEY `Lead_status_idx` (`status`),
  ADD KEY `Lead_company_id_created_at_idx` (`company_id`,`created_at`),
  ADD KEY `Lead_phone_idx` (`phone`),
  ADD KEY `Lead_email_idx` (`email`),
  ADD KEY `Lead_created_by_id_fkey` (`created_by_id`),
  ADD KEY `Lead_introduced_by_id_fkey` (`introduced_by_id`),
  ADD KEY `Lead_referral_employee_id_fkey` (`referral_employee_id`),
  ADD KEY `Lead_project_id_fkey` (`project_id`),
  ADD KEY `Lead_previous_lead_id_fkey` (`previous_lead_id`);

--
-- Indexes for table `LeadActivity`
--
ALTER TABLE `LeadActivity`
  ADD PRIMARY KEY (`id`),
  ADD KEY `LeadActivity_lead_id_idx` (`lead_id`),
  ADD KEY `LeadActivity_actor_id_idx` (`actor_id`);

--
-- Indexes for table `LeadMatchingRequirement`
--
ALTER TABLE `LeadMatchingRequirement`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `LeadMatchingRequirement_lead_id_key` (`lead_id`);

--
-- Indexes for table `LeadPreferredLocation`
--
ALTER TABLE `LeadPreferredLocation`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `LeadPreferredLocation_lead_id_location_key` (`lead_id`,`location`),
  ADD KEY `LeadPreferredLocation_lead_id_idx` (`lead_id`);

--
-- Indexes for table `LeadPropertyInterest`
--
ALTER TABLE `LeadPropertyInterest`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `LeadPropertyInterest_lead_id_property_id_key` (`lead_id`,`property_id`),
  ADD UNIQUE KEY `LeadPropertyInterest_lead_id_project_unit_id_key` (`lead_id`,`project_unit_id`),
  ADD KEY `LeadPropertyInterest_property_id_idx` (`property_id`),
  ADD KEY `LeadPropertyInterest_project_unit_id_idx` (`project_unit_id`),
  ADD KEY `LeadPropertyInterest_created_by_idx` (`created_by`);

--
-- Indexes for table `MessageTemplate`
--
ALTER TABLE `MessageTemplate`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `MessageTemplate_template_key_key` (`template_key`),
  ADD KEY `MessageTemplate_template_key_idx` (`template_key`),
  ADD KEY `MessageTemplate_is_active_idx` (`is_active`);

--
-- Indexes for table `Notification`
--
ALTER TABLE `Notification`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Notification_employee_id_idx` (`employee_id`);

--
-- Indexes for table `Opportunity`
--
ALTER TABLE `Opportunity`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Opportunity_opportunity_code_key` (`opportunity_code`),
  ADD UNIQUE KEY `Opportunity_booking_id_key` (`booking_id`),
  ADD KEY `Opportunity_company_id_idx` (`company_id`),
  ADD KEY `Opportunity_branch_id_idx` (`branch_id`),
  ADD KEY `Opportunity_owner_id_idx` (`owner_id`),
  ADD KEY `Opportunity_lead_id_idx` (`lead_id`),
  ADD KEY `Opportunity_project_id_idx` (`project_id`),
  ADD KEY `Opportunity_property_id_idx` (`property_id`),
  ADD KEY `Opportunity_created_at_idx` (`created_at`),
  ADD KEY `Opportunity_project_unit_id_fkey` (`project_unit_id`);

--
-- Indexes for table `Payment`
--
ALTER TABLE `Payment`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Payment_payment_code_key` (`payment_code`),
  ADD KEY `Payment_company_id_idx` (`company_id`),
  ADD KEY `Payment_booking_id_idx` (`booking_id`),
  ADD KEY `Payment_status_idx` (`status`),
  ADD KEY `Payment_portal_payment_id_idx` (`portal_payment_id`),
  ADD KEY `Payment_recorded_by_id_fkey` (`recorded_by_id`),
  ADD KEY `Payment_installment_id_fkey` (`installment_id`);

--
-- Indexes for table `PerformanceSnapshot`
--
ALTER TABLE `PerformanceSnapshot`
  ADD PRIMARY KEY (`id`),
  ADD KEY `PerformanceSnapshot_employee_id_idx` (`employee_id`);

--
-- Indexes for table `Permission`
--
ALTER TABLE `Permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Permission_name_key` (`name`);

--
-- Indexes for table `PMLocationAssignment`
--
ALTER TABLE `PMLocationAssignment`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `PMLocationAssignment_pm_id_location_company_id_key` (`pm_id`,`location`,`company_id`),
  ADD KEY `PMLocationAssignment_company_id_fkey` (`company_id`);

--
-- Indexes for table `PMReassignmentHistory`
--
ALTER TABLE `PMReassignmentHistory`
  ADD PRIMARY KEY (`id`),
  ADD KEY `PMReassignmentHistory_site_visit_booking_id_fkey` (`site_visit_booking_id`),
  ADD KEY `PMReassignmentHistory_reassigned_by_pm_id_fkey` (`reassigned_by_pm_id`),
  ADD KEY `PMReassignmentHistory_reassigned_to_pm_id_fkey` (`reassigned_to_pm_id`);

--
-- Indexes for table `PriceLine`
--
ALTER TABLE `PriceLine`
  ADD PRIMARY KEY (`id`),
  ADD KEY `PriceLine_project_unit_id_idx` (`project_unit_id`),
  ADD KEY `PriceLine_property_id_idx` (`property_id`),
  ADD KEY `PriceLine_rule_id_idx` (`rule_id`),
  ADD KEY `PriceLine_property_rule_id_idx` (`property_rule_id`);

--
-- Indexes for table `Project`
--
ALTER TABLE `Project`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Project_project_code_key` (`project_code`),
  ADD UNIQUE KEY `Project_company_id_slug_key` (`company_id`,`slug`),
  ADD KEY `Project_company_id_idx` (`company_id`),
  ADD KEY `Project_branch_id_idx` (`branch_id`),
  ADD KEY `Project_assigned_pm_id_idx` (`assigned_pm_id`),
  ADD KEY `Project_project_type_idx` (`project_type`),
  ADD KEY `Project_city_idx` (`city`),
  ADD KEY `Project_verified_by_id_fkey` (`verified_by_id`);

--
-- Indexes for table `ProjectAmenity`
--
ALTER TABLE `ProjectAmenity`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ProjectAmenity_project_id_amenity_id_key` (`project_id`,`amenity_id`),
  ADD KEY `ProjectAmenity_project_id_idx` (`project_id`),
  ADD KEY `ProjectAmenity_amenity_id_fkey` (`amenity_id`);

--
-- Indexes for table `ProjectDocument`
--
ALTER TABLE `ProjectDocument`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ProjectDocument_project_id_kind_idx` (`project_id`,`kind`),
  ADD KEY `ProjectDocument_uploaded_by_id_fkey` (`uploaded_by_id`);

--
-- Indexes for table `ProjectLayoutImage`
--
ALTER TABLE `ProjectLayoutImage`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ProjectLayoutImage_project_id_idx` (`project_id`),
  ADD KEY `ProjectLayoutImage_uploaded_by_id_fkey` (`uploaded_by_id`);

--
-- Indexes for table `ProjectMedia`
--
ALTER TABLE `ProjectMedia`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ProjectMedia_project_id_kind_idx` (`project_id`,`kind`),
  ADD KEY `ProjectMedia_uploaded_by_id_fkey` (`uploaded_by_id`);

--
-- Indexes for table `ProjectPricingRule`
--
ALTER TABLE `ProjectPricingRule`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ProjectPricingRule_project_id_kind_idx` (`project_id`,`kind`),
  ADD KEY `ProjectPricingRule_project_id_is_active_idx` (`project_id`,`is_active`);

--
-- Indexes for table `ProjectUnit`
--
ALTER TABLE `ProjectUnit`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ProjectUnit_unit_code_key` (`unit_code`),
  ADD UNIQUE KEY `ProjectUnit_locked_by_booking_id_key` (`locked_by_booking_id`),
  ADD KEY `ProjectUnit_project_id_sales_status_idx` (`project_id`,`sales_status`),
  ADD KEY `ProjectUnit_project_id_unit_type_idx` (`project_id`,`unit_type`),
  ADD KEY `ProjectUnit_project_id_tower_floor_idx` (`project_id`,`tower`,`floor`),
  ADD KEY `ProjectUnit_project_id_bhk_idx` (`project_id`,`bhk`),
  ADD KEY `ProjectUnit_company_id_idx` (`company_id`),
  ADD KEY `ProjectUnit_final_price_idx` (`final_price`),
  ADD KEY `ProjectUnit_area_sqft_idx` (`area_sqft`),
  ADD KEY `ProjectUnit_branch_id_fkey` (`branch_id`),
  ADD KEY `ProjectUnit_created_by_id_fkey` (`created_by_id`),
  ADD KEY `ProjectUnit_overridden_by_id_fkey` (`overridden_by_id`);

--
-- Indexes for table `ProjectUnitDocument`
--
ALTER TABLE `ProjectUnitDocument`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ProjectUnitDocument_project_unit_id_idx` (`project_unit_id`),
  ADD KEY `ProjectUnitDocument_uploaded_by_id_fkey` (`uploaded_by_id`);

--
-- Indexes for table `ProjectUnitImage`
--
ALTER TABLE `ProjectUnitImage`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ProjectUnitImage_project_unit_id_idx` (`project_unit_id`),
  ADD KEY `ProjectUnitImage_uploaded_by_id_fkey` (`uploaded_by_id`);

--
-- Indexes for table `Property`
--
ALTER TABLE `Property`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Property_property_code_key` (`property_code`),
  ADD UNIQUE KEY `Property_locked_by_booking_id_key` (`locked_by_booking_id`),
  ADD UNIQUE KEY `Property_company_id_slug_key` (`company_id`,`slug`),
  ADD KEY `Property_company_id_idx` (`company_id`),
  ADD KEY `Property_project_id_idx` (`project_id`),
  ADD KEY `Property_brand_type_idx` (`brand_type`),
  ADD KEY `Property_status_idx` (`status`),
  ADD KEY `Property_assigned_pm_id_idx` (`assigned_pm_id`),
  ADD KEY `Property_city_idx` (`city`),
  ADD KEY `Property_listing_type_idx` (`listing_type`),
  ADD KEY `Property_digital_marketing_executive_id_idx` (`digital_marketing_executive_id`),
  ADD KEY `Property_company_id_created_at_idx` (`company_id`,`created_at`),
  ADD KEY `Property_final_price_idx` (`final_price`),
  ADD KEY `Property_category_idx` (`category`),
  ADD KEY `Property_branch_id_fkey` (`branch_id`),
  ADD KEY `Property_created_by_id_fkey` (`created_by_id`);

--
-- Indexes for table `PropertyApartmentDetails`
--
ALTER TABLE `PropertyApartmentDetails`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `PropertyApartmentDetails_property_id_key` (`property_id`);

--
-- Indexes for table `PropertyCommercialOfficeDetails`
--
ALTER TABLE `PropertyCommercialOfficeDetails`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `PropertyCommercialOfficeDetails_property_id_key` (`property_id`);

--
-- Indexes for table `PropertyCommercialShopDetails`
--
ALTER TABLE `PropertyCommercialShopDetails`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `PropertyCommercialShopDetails_property_id_key` (`property_id`);

--
-- Indexes for table `PropertyFarmLandDetails`
--
ALTER TABLE `PropertyFarmLandDetails`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `PropertyFarmLandDetails_property_id_key` (`property_id`);

--
-- Indexes for table `PropertyHouseDetails`
--
ALTER TABLE `PropertyHouseDetails`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `PropertyHouseDetails_property_id_key` (`property_id`);

--
-- Indexes for table `PropertyImage`
--
ALTER TABLE `PropertyImage`
  ADD PRIMARY KEY (`id`),
  ADD KEY `PropertyImage_property_id_idx` (`property_id`),
  ADD KEY `PropertyImage_status_idx` (`status`),
  ADD KEY `PropertyImage_uploaded_by_id_fkey` (`uploaded_by_id`);

--
-- Indexes for table `PropertyLayoutRegion`
--
ALTER TABLE `PropertyLayoutRegion`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `PropertyLayoutRegion_layout_image_id_property_id_key` (`layout_image_id`,`property_id`),
  ADD UNIQUE KEY `PropertyLayoutRegion_layout_image_id_project_unit_id_key` (`layout_image_id`,`project_unit_id`),
  ADD KEY `PropertyLayoutRegion_property_id_idx` (`property_id`),
  ADD KEY `PropertyLayoutRegion_project_unit_id_idx` (`project_unit_id`),
  ADD KEY `PropertyLayoutRegion_created_by_id_fkey` (`created_by_id`);

--
-- Indexes for table `PropertyPlotDetails`
--
ALTER TABLE `PropertyPlotDetails`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `PropertyPlotDetails_property_id_key` (`property_id`);

--
-- Indexes for table `PropertyPricing`
--
ALTER TABLE `PropertyPricing`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `PropertyPricing_property_id_key` (`property_id`);

--
-- Indexes for table `PropertyPricingRule`
--
ALTER TABLE `PropertyPricingRule`
  ADD PRIMARY KEY (`id`),
  ADD KEY `PropertyPricingRule_property_id_kind_idx` (`property_id`,`kind`),
  ADD KEY `PropertyPricingRule_property_id_is_active_idx` (`property_id`,`is_active`);

--
-- Indexes for table `PropertyPublication`
--
ALTER TABLE `PropertyPublication`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `PropertyPublication_property_id_company_id_key` (`property_id`,`company_id`),
  ADD KEY `PropertyPublication_company_id_idx` (`company_id`),
  ADD KEY `PropertyPublication_property_id_idx` (`property_id`);

--
-- Indexes for table `PropertyVerificationLog`
--
ALTER TABLE `PropertyVerificationLog`
  ADD PRIMARY KEY (`id`),
  ADD KEY `PropertyVerificationLog_property_id_idx` (`property_id`),
  ADD KEY `PropertyVerificationLog_actor_id_idx` (`actor_id`);

--
-- Indexes for table `PropertyVillaDetails`
--
ALTER TABLE `PropertyVillaDetails`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `PropertyVillaDetails_property_id_key` (`property_id`);

--
-- Indexes for table `PublicApiKey`
--
ALTER TABLE `PublicApiKey`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `PublicApiKey_api_key_key` (`api_key`),
  ADD KEY `PublicApiKey_company_id_idx` (`company_id`),
  ADD KEY `PublicApiKey_api_key_idx` (`api_key`);

--
-- Indexes for table `PushSubscription`
--
ALTER TABLE `PushSubscription`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `PushSubscription_employee_id_endpoint_key` (`employee_id`,`endpoint`(200)),
  ADD KEY `PushSubscription_employee_id_idx` (`employee_id`);

--
-- Indexes for table `Role`
--
ALTER TABLE `Role`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Role_name_key` (`name`);

--
-- Indexes for table `RolePermission`
--
ALTER TABLE `RolePermission`
  ADD PRIMARY KEY (`role_id`,`permission_id`),
  ADD KEY `RolePermission_permission_id_fkey` (`permission_id`);

--
-- Indexes for table `SiteVisitBooking`
--
ALTER TABLE `SiteVisitBooking`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `SiteVisitBooking_booking_code_key` (`booking_code`),
  ADD KEY `SiteVisitBooking_lead_id_idx` (`lead_id`),
  ADD KEY `SiteVisitBooking_opportunity_id_idx` (`opportunity_id`),
  ADD KEY `SiteVisitBooking_telecaller_id_idx` (`telecaller_id`),
  ADD KEY `SiteVisitBooking_project_manager_id_idx` (`project_manager_id`),
  ADD KEY `SiteVisitBooking_assigned_agent_id_idx` (`assigned_agent_id`),
  ADD KEY `SiteVisitBooking_status_idx` (`status`),
  ADD KEY `SiteVisitBooking_property_id_fkey` (`property_id`),
  ADD KEY `SiteVisitBooking_project_unit_id_fkey` (`project_unit_id`),
  ADD KEY `SiteVisitBooking_project_id_fkey` (`project_id`),
  ADD KEY `SiteVisitBooking_cancellation_confirmed_by_pm_id_fkey` (`cancellation_confirmed_by_pm_id`);

--
-- Indexes for table `SiteVisitEscalation`
--
ALTER TABLE `SiteVisitEscalation`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `SiteVisitEscalation_site_visit_booking_id_key` (`site_visit_booking_id`);

--
-- Indexes for table `SiteVisitFeedback`
--
ALTER TABLE `SiteVisitFeedback`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `SiteVisitFeedback_site_visit_id_key` (`site_visit_id`),
  ADD UNIQUE KEY `SiteVisitFeedback_token_hash_key` (`token_hash`),
  ADD KEY `SiteVisitFeedback_rated_employee_id_idx` (`rated_employee_id`),
  ADD KEY `SiteVisitFeedback_expires_at_idx` (`expires_at`);

--
-- Indexes for table `SiteVisitProperty`
--
ALTER TABLE `SiteVisitProperty`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `SiteVisitProperty_visit_id_property_id_key` (`visit_id`,`property_id`),
  ADD UNIQUE KEY `SiteVisitProperty_visit_id_project_unit_id_key` (`visit_id`,`project_unit_id`),
  ADD KEY `SiteVisitProperty_visit_id_idx` (`visit_id`),
  ADD KEY `SiteVisitProperty_property_id_idx` (`property_id`),
  ADD KEY `SiteVisitProperty_project_unit_id_idx` (`project_unit_id`);

--
-- Indexes for table `SiteVisitReassignment`
--
ALTER TABLE `SiteVisitReassignment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `SiteVisitReassignment_visit_id_idx` (`visit_id`),
  ADD KEY `SiteVisitReassignment_from_employee_id_idx` (`from_employee_id`),
  ADD KEY `SiteVisitReassignment_to_employee_id_idx` (`to_employee_id`);

--
-- Indexes for table `Task`
--
ALTER TABLE `Task`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Task_assignee_id_idx` (`assignee_id`),
  ADD KEY `Task_lead_id_idx` (`lead_id`),
  ADD KEY `Task_opportunity_id_idx` (`opportunity_id`);

--
-- Indexes for table `WebAuthnCredential`
--
ALTER TABLE `WebAuthnCredential`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `WebAuthnCredential_credential_id_key` (`credential_id`),
  ADD KEY `WebAuthnCredential_employee_id_idx` (`employee_id`);

--
-- Indexes for table `WebsiteAccount`
--
ALTER TABLE `WebsiteAccount`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `WebsiteAccount_company_id_email_key` (`company_id`,`email`),
  ADD KEY `WebsiteAccount_company_id_idx` (`company_id`);

--
-- Indexes for table `WebsiteActivityEvent`
--
ALTER TABLE `WebsiteActivityEvent`
  ADD PRIMARY KEY (`id`),
  ADD KEY `WebsiteActivityEvent_company_id_created_at_idx` (`company_id`,`created_at`),
  ADD KEY `WebsiteActivityEvent_account_id_idx` (`account_id`),
  ADD KEY `WebsiteActivityEvent_anonymous_id_idx` (`anonymous_id`),
  ADD KEY `WebsiteActivityEvent_event_name_idx` (`event_name`);

--
-- Indexes for table `WebsiteCompareItem`
--
ALTER TABLE `WebsiteCompareItem`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `WebsiteCompareItem_account_id_property_id_key` (`account_id`,`property_id`),
  ADD UNIQUE KEY `WebsiteCompareItem_account_id_project_unit_id_key` (`account_id`,`project_unit_id`),
  ADD KEY `WebsiteCompareItem_account_id_idx` (`account_id`),
  ADD KEY `WebsiteCompareItem_property_id_fkey` (`property_id`),
  ADD KEY `WebsiteCompareItem_project_unit_id_fkey` (`project_unit_id`);

--
-- Indexes for table `WebsiteShortlistItem`
--
ALTER TABLE `WebsiteShortlistItem`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `WebsiteShortlistItem_account_id_property_id_key` (`account_id`,`property_id`),
  ADD UNIQUE KEY `WebsiteShortlistItem_account_id_project_unit_id_key` (`account_id`,`project_unit_id`),
  ADD KEY `WebsiteShortlistItem_account_id_idx` (`account_id`),
  ADD KEY `WebsiteShortlistItem_property_id_fkey` (`property_id`),
  ADD KEY `WebsiteShortlistItem_project_unit_id_fkey` (`project_unit_id`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Amenity`
--
ALTER TABLE `Amenity`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `AttendanceLog`
--
ALTER TABLE `AttendanceLog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT for table `AttendanceProposal`
--
ALTER TABLE `AttendanceProposal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `AuditEvent`
--
ALTER TABLE `AuditEvent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=135;

--
-- AUTO_INCREMENT for table `AuthSession`
--
ALTER TABLE `AuthSession`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1402;

--
-- AUTO_INCREMENT for table `Booking`
--
ALTER TABLE `Booking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `BookingPortalMapping`
--
ALTER TABLE `BookingPortalMapping`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Branch`
--
ALTER TABLE `Branch`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Company`
--
ALTER TABLE `Company`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `CompanyHoliday`
--
ALTER TABLE `CompanyHoliday`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Complaint`
--
ALTER TABLE `Complaint`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Customer`
--
ALTER TABLE `Customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `CustomerNotification`
--
ALTER TABLE `CustomerNotification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `DailyReport`
--
ALTER TABLE `DailyReport`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `DailyTarget`
--
ALTER TABLE `DailyTarget`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Demo`
--
ALTER TABLE `Demo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `DemoInterestedProperty`
--
ALTER TABLE `DemoInterestedProperty`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Employee`
--
ALTER TABLE `Employee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `EmployeeQrCode`
--
ALTER TABLE `EmployeeQrCode`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `ExpenseRefund`
--
ALTER TABLE `ExpenseRefund`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Installment`
--
ALTER TABLE `Installment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `IntegrationEvent`
--
ALTER TABLE `IntegrationEvent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `InventoryFeature`
--
ALTER TABLE `InventoryFeature`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `KioskCredential`
--
ALTER TABLE `KioskCredential`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Lead`
--
ALTER TABLE `Lead`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `LeadActivity`
--
ALTER TABLE `LeadActivity`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `LeadMatchingRequirement`
--
ALTER TABLE `LeadMatchingRequirement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `LeadPreferredLocation`
--
ALTER TABLE `LeadPreferredLocation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `LeadPropertyInterest`
--
ALTER TABLE `LeadPropertyInterest`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `MessageTemplate`
--
ALTER TABLE `MessageTemplate`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Notification`
--
ALTER TABLE `Notification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `Opportunity`
--
ALTER TABLE `Opportunity`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Payment`
--
ALTER TABLE `Payment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `PerformanceSnapshot`
--
ALTER TABLE `PerformanceSnapshot`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Permission`
--
ALTER TABLE `Permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;

--
-- AUTO_INCREMENT for table `PMLocationAssignment`
--
ALTER TABLE `PMLocationAssignment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `PMReassignmentHistory`
--
ALTER TABLE `PMReassignmentHistory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `PriceLine`
--
ALTER TABLE `PriceLine`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `Project`
--
ALTER TABLE `Project`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `ProjectAmenity`
--
ALTER TABLE `ProjectAmenity`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ProjectDocument`
--
ALTER TABLE `ProjectDocument`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ProjectLayoutImage`
--
ALTER TABLE `ProjectLayoutImage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ProjectMedia`
--
ALTER TABLE `ProjectMedia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ProjectPricingRule`
--
ALTER TABLE `ProjectPricingRule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ProjectUnit`
--
ALTER TABLE `ProjectUnit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `ProjectUnitDocument`
--
ALTER TABLE `ProjectUnitDocument`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ProjectUnitImage`
--
ALTER TABLE `ProjectUnitImage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Property`
--
ALTER TABLE `Property`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `PropertyApartmentDetails`
--
ALTER TABLE `PropertyApartmentDetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `PropertyCommercialOfficeDetails`
--
ALTER TABLE `PropertyCommercialOfficeDetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `PropertyCommercialShopDetails`
--
ALTER TABLE `PropertyCommercialShopDetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `PropertyFarmLandDetails`
--
ALTER TABLE `PropertyFarmLandDetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `PropertyHouseDetails`
--
ALTER TABLE `PropertyHouseDetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `PropertyImage`
--
ALTER TABLE `PropertyImage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `PropertyLayoutRegion`
--
ALTER TABLE `PropertyLayoutRegion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `PropertyPlotDetails`
--
ALTER TABLE `PropertyPlotDetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `PropertyPricing`
--
ALTER TABLE `PropertyPricing`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `PropertyPricingRule`
--
ALTER TABLE `PropertyPricingRule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `PropertyPublication`
--
ALTER TABLE `PropertyPublication`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `PropertyVerificationLog`
--
ALTER TABLE `PropertyVerificationLog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `PropertyVillaDetails`
--
ALTER TABLE `PropertyVillaDetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `PublicApiKey`
--
ALTER TABLE `PublicApiKey`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `PushSubscription`
--
ALTER TABLE `PushSubscription`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `Role`
--
ALTER TABLE `Role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `SiteVisitBooking`
--
ALTER TABLE `SiteVisitBooking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `SiteVisitEscalation`
--
ALTER TABLE `SiteVisitEscalation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `SiteVisitFeedback`
--
ALTER TABLE `SiteVisitFeedback`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `SiteVisitProperty`
--
ALTER TABLE `SiteVisitProperty`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `SiteVisitReassignment`
--
ALTER TABLE `SiteVisitReassignment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Task`
--
ALTER TABLE `Task`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `WebAuthnCredential`
--
ALTER TABLE `WebAuthnCredential`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `WebsiteAccount`
--
ALTER TABLE `WebsiteAccount`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `WebsiteActivityEvent`
--
ALTER TABLE `WebsiteActivityEvent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `WebsiteCompareItem`
--
ALTER TABLE `WebsiteCompareItem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `WebsiteShortlistItem`
--
ALTER TABLE `WebsiteShortlistItem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Amenity`
--
ALTER TABLE `Amenity`
  ADD CONSTRAINT `Amenity_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `Company` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `AttendanceLog`
--
ALTER TABLE `AttendanceLog`
  ADD CONSTRAINT `AttendanceLog_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `Employee` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `AuthSession`
--
ALTER TABLE `AuthSession`
  ADD CONSTRAINT `AuthSession_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `Employee` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Booking`
--
ALTER TABLE `Booking`
  ADD CONSTRAINT `Booking_assigned_employee_id_fkey` FOREIGN KEY (`assigned_employee_id`) REFERENCES `Employee` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Booking_branch_id_fkey` FOREIGN KEY (`branch_id`) REFERENCES `Branch` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Booking_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `Company` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Booking_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `Customer` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Booking_form_submitted_by_id_fkey` FOREIGN KEY (`form_submitted_by_id`) REFERENCES `Employee` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Booking_md_approved_by_id_fkey` FOREIGN KEY (`md_approved_by_id`) REFERENCES `Employee` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Booking_project_unit_id_fkey` FOREIGN KEY (`project_unit_id`) REFERENCES `ProjectUnit` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Booking_property_id_fkey` FOREIGN KEY (`property_id`) REFERENCES `Property` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `BookingPortalMapping`
--
ALTER TABLE `BookingPortalMapping`
  ADD CONSTRAINT `BookingPortalMapping_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `Company` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `Branch`
--
ALTER TABLE `Branch`
  ADD CONSTRAINT `Branch_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `Company` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `CompanyHoliday`
--
ALTER TABLE `CompanyHoliday`
  ADD CONSTRAINT `CompanyHoliday_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `Company` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Complaint`
--
ALTER TABLE `Complaint`
  ADD CONSTRAINT `Complaint_assigned_employee_id_fkey` FOREIGN KEY (`assigned_employee_id`) REFERENCES `Employee` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Complaint_booking_id_fkey` FOREIGN KEY (`booking_id`) REFERENCES `Booking` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Complaint_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `Company` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Complaint_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `Customer` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Complaint_project_unit_id_fkey` FOREIGN KEY (`project_unit_id`) REFERENCES `ProjectUnit` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Complaint_property_id_fkey` FOREIGN KEY (`property_id`) REFERENCES `Property` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `Customer`
--
ALTER TABLE `Customer`
  ADD CONSTRAINT `Customer_assigned_to_id_fkey` FOREIGN KEY (`assigned_to_id`) REFERENCES `Employee` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Customer_branch_id_fkey` FOREIGN KEY (`branch_id`) REFERENCES `Branch` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Customer_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `Company` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Customer_origin_lead_id_fkey` FOREIGN KEY (`origin_lead_id`) REFERENCES `Lead` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `CustomerNotification`
--
ALTER TABLE `CustomerNotification`
  ADD CONSTRAINT `CustomerNotification_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `Company` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `CustomerNotification_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `Customer` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `DailyReport`
--
ALTER TABLE `DailyReport`
  ADD CONSTRAINT `DailyReport_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `Employee` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `DailyTarget`
--
ALTER TABLE `DailyTarget`
  ADD CONSTRAINT `DailyTarget_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `Company` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `DailyTarget_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `Employee` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `Demo`
--
ALTER TABLE `Demo`
  ADD CONSTRAINT `Demo_handler_id_fkey` FOREIGN KEY (`handler_id`) REFERENCES `Employee` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Demo_lead_id_fkey` FOREIGN KEY (`lead_id`) REFERENCES `Lead` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `DemoInterestedProperty`
--
ALTER TABLE `DemoInterestedProperty`
  ADD CONSTRAINT `DemoInterestedProperty_demo_id_fkey` FOREIGN KEY (`demo_id`) REFERENCES `Demo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `DemoInterestedProperty_project_unit_id_fkey` FOREIGN KEY (`project_unit_id`) REFERENCES `ProjectUnit` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `DemoInterestedProperty_property_id_fkey` FOREIGN KEY (`property_id`) REFERENCES `Property` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Employee`
--
ALTER TABLE `Employee`
  ADD CONSTRAINT `Employee_branch_id_fkey` FOREIGN KEY (`branch_id`) REFERENCES `Branch` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Employee_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `Company` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Employee_reporting_manager_id_fkey` FOREIGN KEY (`reporting_manager_id`) REFERENCES `Employee` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `EmployeeBranch`
--
ALTER TABLE `EmployeeBranch`
  ADD CONSTRAINT `EmployeeBranch_branch_id_fkey` FOREIGN KEY (`branch_id`) REFERENCES `Branch` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `EmployeeBranch_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `Employee` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `EmployeeCompanyAccess`
--
ALTER TABLE `EmployeeCompanyAccess`
  ADD CONSTRAINT `EmployeeCompanyAccess_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `Company` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `EmployeeCompanyAccess_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `Employee` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `EmployeePermissionOverride`
--
ALTER TABLE `EmployeePermissionOverride`
  ADD CONSTRAINT `EmployeePermissionOverride_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `Employee` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `EmployeePermissionOverride_permission_id_fkey` FOREIGN KEY (`permission_id`) REFERENCES `Permission` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `EmployeeQrCode`
--
ALTER TABLE `EmployeeQrCode`
  ADD CONSTRAINT `EmployeeQrCode_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `Employee` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `EmployeeRole`
--
ALTER TABLE `EmployeeRole`
  ADD CONSTRAINT `EmployeeRole_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `Employee` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `EmployeeRole_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `Role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `ExpenseRefund`
--
ALTER TABLE `ExpenseRefund`
  ADD CONSTRAINT `ExpenseRefund_accountant_id_fkey` FOREIGN KEY (`accountant_id`) REFERENCES `Employee` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ExpenseRefund_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `Employee` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ExpenseRefund_md_id_fkey` FOREIGN KEY (`md_id`) REFERENCES `Employee` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ExpenseRefund_refunded_by_fkey` FOREIGN KEY (`refunded_by`) REFERENCES `Employee` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `Installment`
--
ALTER TABLE `Installment`
  ADD CONSTRAINT `Installment_booking_id_fkey` FOREIGN KEY (`booking_id`) REFERENCES `Booking` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Installment_recorded_by_id_fkey` FOREIGN KEY (`recorded_by_id`) REFERENCES `Employee` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `IntegrationEvent`
--
ALTER TABLE `IntegrationEvent`
  ADD CONSTRAINT `IntegrationEvent_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `Company` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `InventoryFeature`
--
ALTER TABLE `InventoryFeature`
  ADD CONSTRAINT `InventoryFeature_amenity_id_fkey` FOREIGN KEY (`amenity_id`) REFERENCES `Amenity` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `InventoryFeature_project_unit_id_fkey` FOREIGN KEY (`project_unit_id`) REFERENCES `ProjectUnit` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `InventoryFeature_property_id_fkey` FOREIGN KEY (`property_id`) REFERENCES `Property` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `KioskCredential`
--
ALTER TABLE `KioskCredential`
  ADD CONSTRAINT `KioskCredential_branch_id_fkey` FOREIGN KEY (`branch_id`) REFERENCES `Branch` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `KioskCredential_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `Company` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `KioskCredential_created_by_id_fkey` FOREIGN KEY (`created_by_id`) REFERENCES `Employee` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `Lead`
--
ALTER TABLE `Lead`
  ADD CONSTRAINT `Lead_assigned_to_id_fkey` FOREIGN KEY (`assigned_to_id`) REFERENCES `Employee` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Lead_branch_id_fkey` FOREIGN KEY (`branch_id`) REFERENCES `Branch` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Lead_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `Company` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Lead_created_by_id_fkey` FOREIGN KEY (`created_by_id`) REFERENCES `Employee` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Lead_introduced_by_id_fkey` FOREIGN KEY (`introduced_by_id`) REFERENCES `Employee` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Lead_previous_lead_id_fkey` FOREIGN KEY (`previous_lead_id`) REFERENCES `Lead` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Lead_project_id_fkey` FOREIGN KEY (`project_id`) REFERENCES `Project` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Lead_referral_employee_id_fkey` FOREIGN KEY (`referral_employee_id`) REFERENCES `Employee` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `LeadActivity`
--
ALTER TABLE `LeadActivity`
  ADD CONSTRAINT `LeadActivity_actor_id_fkey` FOREIGN KEY (`actor_id`) REFERENCES `Employee` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `LeadActivity_lead_id_fkey` FOREIGN KEY (`lead_id`) REFERENCES `Lead` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `LeadMatchingRequirement`
--
ALTER TABLE `LeadMatchingRequirement`
  ADD CONSTRAINT `LeadMatchingRequirement_lead_id_fkey` FOREIGN KEY (`lead_id`) REFERENCES `Lead` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `LeadPreferredLocation`
--
ALTER TABLE `LeadPreferredLocation`
  ADD CONSTRAINT `LeadPreferredLocation_lead_id_fkey` FOREIGN KEY (`lead_id`) REFERENCES `Lead` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `LeadPropertyInterest`
--
ALTER TABLE `LeadPropertyInterest`
  ADD CONSTRAINT `LeadPropertyInterest_created_by_fkey` FOREIGN KEY (`created_by`) REFERENCES `Employee` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `LeadPropertyInterest_lead_id_fkey` FOREIGN KEY (`lead_id`) REFERENCES `Lead` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `LeadPropertyInterest_project_unit_id_fkey` FOREIGN KEY (`project_unit_id`) REFERENCES `ProjectUnit` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `LeadPropertyInterest_property_id_fkey` FOREIGN KEY (`property_id`) REFERENCES `Property` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Notification`
--
ALTER TABLE `Notification`
  ADD CONSTRAINT `Notification_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `Employee` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Opportunity`
--
ALTER TABLE `Opportunity`
  ADD CONSTRAINT `Opportunity_booking_id_fkey` FOREIGN KEY (`booking_id`) REFERENCES `Booking` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Opportunity_branch_id_fkey` FOREIGN KEY (`branch_id`) REFERENCES `Branch` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Opportunity_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `Company` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Opportunity_lead_id_fkey` FOREIGN KEY (`lead_id`) REFERENCES `Lead` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Opportunity_owner_id_fkey` FOREIGN KEY (`owner_id`) REFERENCES `Employee` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Opportunity_project_id_fkey` FOREIGN KEY (`project_id`) REFERENCES `Project` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Opportunity_project_unit_id_fkey` FOREIGN KEY (`project_unit_id`) REFERENCES `ProjectUnit` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Opportunity_property_id_fkey` FOREIGN KEY (`property_id`) REFERENCES `Property` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `Payment`
--
ALTER TABLE `Payment`
  ADD CONSTRAINT `Payment_booking_id_fkey` FOREIGN KEY (`booking_id`) REFERENCES `Booking` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Payment_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `Company` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Payment_installment_id_fkey` FOREIGN KEY (`installment_id`) REFERENCES `Installment` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Payment_recorded_by_id_fkey` FOREIGN KEY (`recorded_by_id`) REFERENCES `Employee` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `PerformanceSnapshot`
--
ALTER TABLE `PerformanceSnapshot`
  ADD CONSTRAINT `PerformanceSnapshot_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `Employee` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `PMLocationAssignment`
--
ALTER TABLE `PMLocationAssignment`
  ADD CONSTRAINT `PMLocationAssignment_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `Company` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `PMLocationAssignment_pm_id_fkey` FOREIGN KEY (`pm_id`) REFERENCES `Employee` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `PMReassignmentHistory`
--
ALTER TABLE `PMReassignmentHistory`
  ADD CONSTRAINT `PMReassignmentHistory_reassigned_by_pm_id_fkey` FOREIGN KEY (`reassigned_by_pm_id`) REFERENCES `Employee` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `PMReassignmentHistory_reassigned_to_pm_id_fkey` FOREIGN KEY (`reassigned_to_pm_id`) REFERENCES `Employee` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `PMReassignmentHistory_site_visit_booking_id_fkey` FOREIGN KEY (`site_visit_booking_id`) REFERENCES `SiteVisitBooking` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `PriceLine`
--
ALTER TABLE `PriceLine`
  ADD CONSTRAINT `PriceLine_project_unit_id_fkey` FOREIGN KEY (`project_unit_id`) REFERENCES `ProjectUnit` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `PriceLine_property_id_fkey` FOREIGN KEY (`property_id`) REFERENCES `Property` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `PriceLine_property_rule_id_fkey` FOREIGN KEY (`property_rule_id`) REFERENCES `PropertyPricingRule` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `PriceLine_rule_id_fkey` FOREIGN KEY (`rule_id`) REFERENCES `ProjectPricingRule` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `Project`
--
ALTER TABLE `Project`
  ADD CONSTRAINT `Project_assigned_pm_id_fkey` FOREIGN KEY (`assigned_pm_id`) REFERENCES `Employee` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Project_branch_id_fkey` FOREIGN KEY (`branch_id`) REFERENCES `Branch` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Project_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `Company` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Project_verified_by_id_fkey` FOREIGN KEY (`verified_by_id`) REFERENCES `Employee` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `ProjectAmenity`
--
ALTER TABLE `ProjectAmenity`
  ADD CONSTRAINT `ProjectAmenity_amenity_id_fkey` FOREIGN KEY (`amenity_id`) REFERENCES `Amenity` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ProjectAmenity_project_id_fkey` FOREIGN KEY (`project_id`) REFERENCES `Project` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `ProjectDocument`
--
ALTER TABLE `ProjectDocument`
  ADD CONSTRAINT `ProjectDocument_project_id_fkey` FOREIGN KEY (`project_id`) REFERENCES `Project` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ProjectDocument_uploaded_by_id_fkey` FOREIGN KEY (`uploaded_by_id`) REFERENCES `Employee` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `ProjectLayoutImage`
--
ALTER TABLE `ProjectLayoutImage`
  ADD CONSTRAINT `ProjectLayoutImage_project_id_fkey` FOREIGN KEY (`project_id`) REFERENCES `Project` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ProjectLayoutImage_uploaded_by_id_fkey` FOREIGN KEY (`uploaded_by_id`) REFERENCES `Employee` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `ProjectMedia`
--
ALTER TABLE `ProjectMedia`
  ADD CONSTRAINT `ProjectMedia_project_id_fkey` FOREIGN KEY (`project_id`) REFERENCES `Project` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ProjectMedia_uploaded_by_id_fkey` FOREIGN KEY (`uploaded_by_id`) REFERENCES `Employee` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `ProjectPricingRule`
--
ALTER TABLE `ProjectPricingRule`
  ADD CONSTRAINT `ProjectPricingRule_project_id_fkey` FOREIGN KEY (`project_id`) REFERENCES `Project` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `ProjectUnit`
--
ALTER TABLE `ProjectUnit`
  ADD CONSTRAINT `ProjectUnit_branch_id_fkey` FOREIGN KEY (`branch_id`) REFERENCES `Branch` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ProjectUnit_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `Company` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `ProjectUnit_created_by_id_fkey` FOREIGN KEY (`created_by_id`) REFERENCES `Employee` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ProjectUnit_locked_by_booking_id_fkey` FOREIGN KEY (`locked_by_booking_id`) REFERENCES `Booking` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ProjectUnit_overridden_by_id_fkey` FOREIGN KEY (`overridden_by_id`) REFERENCES `Employee` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `ProjectUnit_project_id_fkey` FOREIGN KEY (`project_id`) REFERENCES `Project` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `ProjectUnitDocument`
--
ALTER TABLE `ProjectUnitDocument`
  ADD CONSTRAINT `ProjectUnitDocument_project_unit_id_fkey` FOREIGN KEY (`project_unit_id`) REFERENCES `ProjectUnit` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ProjectUnitDocument_uploaded_by_id_fkey` FOREIGN KEY (`uploaded_by_id`) REFERENCES `Employee` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `ProjectUnitImage`
--
ALTER TABLE `ProjectUnitImage`
  ADD CONSTRAINT `ProjectUnitImage_project_unit_id_fkey` FOREIGN KEY (`project_unit_id`) REFERENCES `ProjectUnit` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ProjectUnitImage_uploaded_by_id_fkey` FOREIGN KEY (`uploaded_by_id`) REFERENCES `Employee` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `Property`
--
ALTER TABLE `Property`
  ADD CONSTRAINT `Property_assigned_pm_id_fkey` FOREIGN KEY (`assigned_pm_id`) REFERENCES `Employee` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Property_branch_id_fkey` FOREIGN KEY (`branch_id`) REFERENCES `Branch` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Property_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `Company` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Property_created_by_id_fkey` FOREIGN KEY (`created_by_id`) REFERENCES `Employee` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Property_digital_marketing_executive_id_fkey` FOREIGN KEY (`digital_marketing_executive_id`) REFERENCES `Employee` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Property_locked_by_booking_id_fkey` FOREIGN KEY (`locked_by_booking_id`) REFERENCES `Booking` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Property_project_id_fkey` FOREIGN KEY (`project_id`) REFERENCES `Project` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `PropertyApartmentDetails`
--
ALTER TABLE `PropertyApartmentDetails`
  ADD CONSTRAINT `PropertyApartmentDetails_property_id_fkey` FOREIGN KEY (`property_id`) REFERENCES `Property` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `PropertyCommercialOfficeDetails`
--
ALTER TABLE `PropertyCommercialOfficeDetails`
  ADD CONSTRAINT `PropertyCommercialOfficeDetails_property_id_fkey` FOREIGN KEY (`property_id`) REFERENCES `Property` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `PropertyCommercialShopDetails`
--
ALTER TABLE `PropertyCommercialShopDetails`
  ADD CONSTRAINT `PropertyCommercialShopDetails_property_id_fkey` FOREIGN KEY (`property_id`) REFERENCES `Property` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `PropertyFarmLandDetails`
--
ALTER TABLE `PropertyFarmLandDetails`
  ADD CONSTRAINT `PropertyFarmLandDetails_property_id_fkey` FOREIGN KEY (`property_id`) REFERENCES `Property` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `PropertyHouseDetails`
--
ALTER TABLE `PropertyHouseDetails`
  ADD CONSTRAINT `PropertyHouseDetails_property_id_fkey` FOREIGN KEY (`property_id`) REFERENCES `Property` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `PropertyImage`
--
ALTER TABLE `PropertyImage`
  ADD CONSTRAINT `PropertyImage_property_id_fkey` FOREIGN KEY (`property_id`) REFERENCES `Property` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `PropertyImage_uploaded_by_id_fkey` FOREIGN KEY (`uploaded_by_id`) REFERENCES `Employee` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `PropertyLayoutRegion`
--
ALTER TABLE `PropertyLayoutRegion`
  ADD CONSTRAINT `PropertyLayoutRegion_created_by_id_fkey` FOREIGN KEY (`created_by_id`) REFERENCES `Employee` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `PropertyLayoutRegion_layout_image_id_fkey` FOREIGN KEY (`layout_image_id`) REFERENCES `ProjectLayoutImage` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `PropertyLayoutRegion_project_unit_id_fkey` FOREIGN KEY (`project_unit_id`) REFERENCES `ProjectUnit` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `PropertyLayoutRegion_property_id_fkey` FOREIGN KEY (`property_id`) REFERENCES `Property` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `PropertyPlotDetails`
--
ALTER TABLE `PropertyPlotDetails`
  ADD CONSTRAINT `PropertyPlotDetails_property_id_fkey` FOREIGN KEY (`property_id`) REFERENCES `Property` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `PropertyPricing`
--
ALTER TABLE `PropertyPricing`
  ADD CONSTRAINT `PropertyPricing_property_id_fkey` FOREIGN KEY (`property_id`) REFERENCES `Property` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `PropertyPricingRule`
--
ALTER TABLE `PropertyPricingRule`
  ADD CONSTRAINT `PropertyPricingRule_property_id_fkey` FOREIGN KEY (`property_id`) REFERENCES `Property` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `PropertyPublication`
--
ALTER TABLE `PropertyPublication`
  ADD CONSTRAINT `PropertyPublication_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `Company` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `PropertyPublication_property_id_fkey` FOREIGN KEY (`property_id`) REFERENCES `Property` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `PropertyVerificationLog`
--
ALTER TABLE `PropertyVerificationLog`
  ADD CONSTRAINT `PropertyVerificationLog_actor_id_fkey` FOREIGN KEY (`actor_id`) REFERENCES `Employee` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `PropertyVerificationLog_property_id_fkey` FOREIGN KEY (`property_id`) REFERENCES `Property` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `PropertyVillaDetails`
--
ALTER TABLE `PropertyVillaDetails`
  ADD CONSTRAINT `PropertyVillaDetails_property_id_fkey` FOREIGN KEY (`property_id`) REFERENCES `Property` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `PublicApiKey`
--
ALTER TABLE `PublicApiKey`
  ADD CONSTRAINT `PublicApiKey_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `Company` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `PushSubscription`
--
ALTER TABLE `PushSubscription`
  ADD CONSTRAINT `PushSubscription_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `Employee` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `RolePermission`
--
ALTER TABLE `RolePermission`
  ADD CONSTRAINT `RolePermission_permission_id_fkey` FOREIGN KEY (`permission_id`) REFERENCES `Permission` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `RolePermission_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `Role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `SiteVisitBooking`
--
ALTER TABLE `SiteVisitBooking`
  ADD CONSTRAINT `SiteVisitBooking_assigned_agent_id_fkey` FOREIGN KEY (`assigned_agent_id`) REFERENCES `Employee` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `SiteVisitBooking_cancellation_confirmed_by_pm_id_fkey` FOREIGN KEY (`cancellation_confirmed_by_pm_id`) REFERENCES `Employee` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `SiteVisitBooking_lead_id_fkey` FOREIGN KEY (`lead_id`) REFERENCES `Lead` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `SiteVisitBooking_opportunity_id_fkey` FOREIGN KEY (`opportunity_id`) REFERENCES `Opportunity` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `SiteVisitBooking_project_id_fkey` FOREIGN KEY (`project_id`) REFERENCES `Project` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `SiteVisitBooking_project_manager_id_fkey` FOREIGN KEY (`project_manager_id`) REFERENCES `Employee` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `SiteVisitBooking_project_unit_id_fkey` FOREIGN KEY (`project_unit_id`) REFERENCES `ProjectUnit` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `SiteVisitBooking_property_id_fkey` FOREIGN KEY (`property_id`) REFERENCES `Property` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `SiteVisitBooking_telecaller_id_fkey` FOREIGN KEY (`telecaller_id`) REFERENCES `Employee` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `SiteVisitEscalation`
--
ALTER TABLE `SiteVisitEscalation`
  ADD CONSTRAINT `SiteVisitEscalation_site_visit_booking_id_fkey` FOREIGN KEY (`site_visit_booking_id`) REFERENCES `SiteVisitBooking` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `SiteVisitFeedback`
--
ALTER TABLE `SiteVisitFeedback`
  ADD CONSTRAINT `SiteVisitFeedback_rated_employee_id_fkey` FOREIGN KEY (`rated_employee_id`) REFERENCES `Employee` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `SiteVisitFeedback_site_visit_id_fkey` FOREIGN KEY (`site_visit_id`) REFERENCES `SiteVisitBooking` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `SiteVisitProperty`
--
ALTER TABLE `SiteVisitProperty`
  ADD CONSTRAINT `SiteVisitProperty_project_unit_id_fkey` FOREIGN KEY (`project_unit_id`) REFERENCES `ProjectUnit` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `SiteVisitProperty_property_id_fkey` FOREIGN KEY (`property_id`) REFERENCES `Property` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `SiteVisitProperty_visit_id_fkey` FOREIGN KEY (`visit_id`) REFERENCES `SiteVisitBooking` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `SiteVisitReassignment`
--
ALTER TABLE `SiteVisitReassignment`
  ADD CONSTRAINT `SiteVisitReassignment_from_employee_id_fkey` FOREIGN KEY (`from_employee_id`) REFERENCES `Employee` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `SiteVisitReassignment_to_employee_id_fkey` FOREIGN KEY (`to_employee_id`) REFERENCES `Employee` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `SiteVisitReassignment_visit_id_fkey` FOREIGN KEY (`visit_id`) REFERENCES `SiteVisitBooking` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Task`
--
ALTER TABLE `Task`
  ADD CONSTRAINT `Task_assignee_id_fkey` FOREIGN KEY (`assignee_id`) REFERENCES `Employee` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Task_lead_id_fkey` FOREIGN KEY (`lead_id`) REFERENCES `Lead` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Task_opportunity_id_fkey` FOREIGN KEY (`opportunity_id`) REFERENCES `Opportunity` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `WebAuthnCredential`
--
ALTER TABLE `WebAuthnCredential`
  ADD CONSTRAINT `WebAuthnCredential_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `Employee` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `WebsiteAccount`
--
ALTER TABLE `WebsiteAccount`
  ADD CONSTRAINT `WebsiteAccount_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `Company` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `WebsiteActivityEvent`
--
ALTER TABLE `WebsiteActivityEvent`
  ADD CONSTRAINT `WebsiteActivityEvent_account_id_fkey` FOREIGN KEY (`account_id`) REFERENCES `WebsiteAccount` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `WebsiteActivityEvent_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `Company` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `WebsiteCompareItem`
--
ALTER TABLE `WebsiteCompareItem`
  ADD CONSTRAINT `WebsiteCompareItem_account_id_fkey` FOREIGN KEY (`account_id`) REFERENCES `WebsiteAccount` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `WebsiteCompareItem_project_unit_id_fkey` FOREIGN KEY (`project_unit_id`) REFERENCES `ProjectUnit` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `WebsiteCompareItem_property_id_fkey` FOREIGN KEY (`property_id`) REFERENCES `Property` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `WebsiteShortlistItem`
--
ALTER TABLE `WebsiteShortlistItem`
  ADD CONSTRAINT `WebsiteShortlistItem_account_id_fkey` FOREIGN KEY (`account_id`) REFERENCES `WebsiteAccount` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `WebsiteShortlistItem_project_unit_id_fkey` FOREIGN KEY (`project_unit_id`) REFERENCES `ProjectUnit` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `WebsiteShortlistItem_property_id_fkey` FOREIGN KEY (`property_id`) REFERENCES `Property` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
