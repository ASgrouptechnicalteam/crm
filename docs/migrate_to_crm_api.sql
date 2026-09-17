-- ============================================================

-- FINAL FIX: Insert employees 3, 4, 6 (email forced to NULL)

-- Then insert all their child records

-- ============================================================



-- Employee 3 (vasantha)

INSERT IGNORE INTO `Employee` (`id`, `employee_code`, `company_id`, `branch_id`, `password_hash`, `status`, `token_version`, `attendance_required`, `first_login_done`, `report_required`, `full_name`, `phone`, `secondary_phone`, `whatsapp_number`, `email`, `blood_group`, `social_links`, `profile_image_url`, `current_address`, `permanent_address`, `emergency_contact_name`, `emergency_contact_relation`, `emergency_contact_phone`, `pan_number`, `aadhaar_number`, `bank_name`, `bank_account_number`, `bank_ifsc`, `bank_branch`, `job_title`, `department`, `employment_type`, `reporting_manager_id`, `date_of_joining`, `salary_ctc`, `background_education`, `resignation_date`, `last_working_day`, `created_at`, `updated_at`, `deleted_at`) VALUES
(3, 'RRH-MK-8486', 1, 1, '$2a$12$XpF7BSLTSv3DpoAUgH2stODbtmyy4L1U8ljCsAmSXR.GP8MS7kq8W', 'ACTIVE', 3, 1, 1, 1, 'vasantha', '+91 630 5497853', '8919776059', '6305497853', NULL, '', NULL, NULL, '', '', 'Vittal ', 'Father ', '9381954876', '0d9ed499ca72921f0d8b4c738997d432:f05468c139c3c7d4870b3f3dcf6b3a51', '', 'a4f2ff1e37f3198ade8906ad6acc4671:f886f88bea16ff585e4c942430722c707c58732759ccb963933898b32d36baa1', '753f07871a32062ef5fe14bcc10aca6f:0daa0ddaf308e0096ab6efbb79628c2d', 'b781f561687391fae2b2099909987e2f:e3b707b8d165287af5aad27eae21a0a6', '0d3cad572eb8028ab0df05579669a53a:2ab16936f1c790457786c0ec4d56054b', 'telecallers', 'Sales & Leads', 'FULL_TIME', NULL, '2026-09-01 00:00:00.000', 35000, '', NULL, NULL, '2026-09-01 04:52:37.389', '2026-09-03 06:23:41.855', NULL);



-- Employee 4 (siri)

INSERT IGNORE INTO `Employee` (`id`, `employee_code`, `company_id`, `branch_id`, `password_hash`, `status`, `token_version`, `attendance_required`, `first_login_done`, `report_required`, `full_name`, `phone`, `secondary_phone`, `whatsapp_number`, `email`, `blood_group`, `social_links`, `profile_image_url`, `current_address`, `permanent_address`, `emergency_contact_name`, `emergency_contact_relation`, `emergency_contact_phone`, `pan_number`, `aadhaar_number`, `bank_name`, `bank_account_number`, `bank_ifsc`, `bank_branch`, `job_title`, `department`, `employment_type`, `reporting_manager_id`, `date_of_joining`, `salary_ctc`, `background_education`, `resignation_date`, `last_working_day`, `created_at`, `updated_at`, `deleted_at`) VALUES
(4, 'RRH-CP-5867', 1, 1, '$2a$12$e9XhcJMxRMNoMV1AdEmv2uVC6dtwI3BKXVnqkmcunmHqbZGUH2cIy', 'ACTIVE', 4, 1, 1, 1, 'siri', '8096483984', NULL, '8096483984', NULL, 'O+', NULL, NULL, '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, 'Channel partner manager', 'Sales & Leads', 'FULL_TIME', NULL, '2026-09-01 00:00:00.000', 35000, '', NULL, NULL, '2026-09-01 05:07:39.500', '2026-09-11 13:05:05.645', NULL);



-- Employee 6 (ANITHA SP)

INSERT IGNORE INTO `Employee` (`id`, `employee_code`, `company_id`, `branch_id`, `password_hash`, `status`, `token_version`, `attendance_required`, `first_login_done`, `report_required`, `full_name`, `phone`, `secondary_phone`, `whatsapp_number`, `email`, `blood_group`, `social_links`, `profile_image_url`, `current_address`, `permanent_address`, `emergency_contact_name`, `emergency_contact_relation`, `emergency_contact_phone`, `pan_number`, `aadhaar_number`, `bank_name`, `bank_account_number`, `bank_ifsc`, `bank_branch`, `job_title`, `department`, `employment_type`, `reporting_manager_id`, `date_of_joining`, `salary_ctc`, `background_education`, `resignation_date`, `last_working_day`, `created_at`, `updated_at`, `deleted_at`) VALUES
(6, 'RRH-MK-9873', 1, 1, '$2a$12$GxGOGF9lvySDk2XIuY1LhuRd3wFBS71jnecbDd0wdHxJq0Z1PX5EK', 'ACTIVE', 2, 1, 1, 1, 'ANITHA SP', '8826519777', NULL, '8826519777', NULL, 'O+', NULL, NULL, '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, 'digital marketing executive', 'Sales & Leads', 'FULL_TIME', NULL, '2026-09-01 00:00:00.000', 35000, '', NULL, NULL, '2026-09-01 10:02:22.558', '2026-09-01 10:07:04.641', NULL);



-- EmployeeRole for 3, 4, 6

INSERT IGNORE INTO `EmployeeRole` (`employee_id`, `role_id`) VALUES (3, 7), (6, 11), (4, 13);



-- EmployeeQrCode for 3, 4, 6

INSERT IGNORE INTO `EmployeeQrCode` (`id`, `employee_id`, `qr_token`, `generated_at`, `expires_at`) VALUES
(3, 3, '729b0725f6a19aa657296ee2c3ef982b97c29bb31c5e7cb395cb62d2b726dc47', '2026-09-01 05:00:11.589', NULL),

(4, 4, 'b8964563075b6a095f4fb489491ee293f660c54ae30fef02013de0e645789f37', '2026-09-01 05:17:04.393', NULL),

(6, 6, 'e28f842a5ee07775f503a29d617959bbeee4ff731d92f1db5759a340386d8071', '2026-09-01 10:13:06.327', NULL);



-- AttendanceLog for employees 3, 4, 6

INSERT IGNORE INTO `AttendanceLog` (`id`, `employee_id`, `check_in_at`, `check_out_at`, `working_duration_minutes`, `status`, `source`, `branch_id`, `notes`) VALUES
(2, 3, '2026-09-01 05:00:21.635', '2026-09-01 12:31:55.363', 452, 'PRESENT', 'QR_SCAN', 1, NULL),

(3, 4, '2026-09-01 05:00:21.867', '2026-09-01 12:33:24.099', 453, 'PRESENT', 'QR_SCAN', 1, NULL),

(5, 6, '2026-09-01 05:00:03.685', '2026-09-01 12:35:23.275', 535, 'PRESENT', 'QR_SCAN', 1, NULL),

(7, 4, '2026-09-02 04:22:59.924', '2026-09-02 12:31:27.279', 488, 'PRESENT', 'QR_SCAN', 1, NULL),

(8, 3, '2026-09-02 04:53:45.419', '2026-09-02 12:31:43.274', 458, 'PRESENT', 'QR_SCAN', 1, NULL),

(11, 3, '2026-09-03 04:40:25.114', '2026-09-03 12:31:42.835', 471, 'PRESENT', 'QR_SCAN', 1, NULL),

(13, 4, '2026-09-03 05:00:11.181', '2026-09-03 12:31:22.949', 451, 'PRESENT', 'QR_SCAN', 1, NULL),

(14, 6, '2026-09-03 05:15:55.200', '2026-09-03 13:08:51.075', 473, 'LATE', 'QR_SCAN', 1, NULL),

(17, 3, '2026-09-04 04:26:48.478', '2026-09-04 12:32:37.741', 486, 'PRESENT', 'QR_SCAN', 1, NULL),

(18, 4, '2026-09-04 05:25:35.713', '2026-09-04 12:32:15.067', 427, 'LATE', 'QR_SCAN', 1, NULL),

(20, 6, '2026-09-04 05:49:32.126', '2026-09-04 13:32:25.752', 463, 'APPROVED_LATE', 'QR_SCAN', 1, NULL),

(23, 4, '2026-09-05 04:49:35.667', '2026-09-05 12:56:53.090', NULL, 'PRESENT', 'QR_SCAN', 1, NULL),

(26, 3, '2026-09-07 04:45:11.034', '2026-09-07 12:31:42.279', 467, 'PRESENT', 'QR_SCAN', 1, NULL),

(27, 4, '2026-09-07 04:42:06.365', '2026-09-07 12:31:22.117', 469, 'PRESENT', 'QR_SCAN', 1, NULL),

(29, 6, '2026-09-07 06:00:42.773', '2026-09-07 12:31:22.117', NULL, 'LATE', 'QR_SCAN', 1, NULL),

(31, 4, '2026-09-08 04:35:38.697', '2026-09-08 12:34:37.624', 479, 'PRESENT', 'QR_SCAN', 1, NULL),

(32, 3, '2026-09-08 04:54:09.649', '2026-09-08 12:34:54.415', 461, 'PRESENT', 'QR_SCAN', 1, NULL),

(34, 6, '2026-09-08 04:54:09.649', '2026-09-08 13:03:21.505', 489, 'PRESENT', 'QR_SCAN', 1, NULL),

(36, 4, '2026-09-09 04:42:21.254', '2026-09-09 12:31:48.979', 469, 'PRESENT', 'QR_SCAN', 1, NULL),

(37, 3, '2026-09-09 04:50:47.915', '2026-09-09 12:32:34.077', 462, 'PRESENT', 'QR_SCAN', 1, NULL),

(38, 6, '2026-09-09 04:53:47.630', '2026-09-09 12:31:32.198', 458, 'PRESENT', 'QR_SCAN', 1, NULL),

(41, 4, '2026-09-10 04:26:06.141', '2026-09-10 12:32:41.504', 487, 'PRESENT', 'QR_SCAN', 1, NULL),

(42, 3, '2026-09-10 04:53:56.055', '2026-09-10 12:32:11.523', 458, 'PRESENT', 'QR_SCAN', 1, NULL),

(43, 6, '2026-09-10 05:48:11.890', '2026-09-10 12:32:11.523', NULL, 'LATE', 'QR_SCAN', 1, NULL),

(49, 4, '2026-09-11 04:45:54.079', '2026-09-11 13:48:39.782', 543, 'PRESENT', 'QR_SCAN', 1, NULL),

(50, 3, '2026-09-11 04:49:59.626', '2026-09-11 13:49:02.905', 539, 'PRESENT', 'QR_SCAN', 1, NULL),

(52, 6, '2026-09-11 05:30:51.724', '2026-09-11 18:30:00.000', 779, 'LATE', 'QR_SCAN', 1, NULL),

(55, 4, '2026-09-12 04:03:10.727', '2026-09-12 12:34:19.356', 511, 'PRESENT', 'QR_SCAN', 1, NULL),

(57, 3, '2026-09-12 04:42:29.096', '2026-09-12 12:33:24.211', 471, 'PRESENT', 'QR_SCAN', 1, NULL),

(58, 6, '2026-09-12 06:41:04.551', '2026-09-12 18:30:00.000', 709, 'HALF_DAY', 'QR_SCAN', 1, NULL),

(61, 3, '2026-09-15 04:32:50.813', '2026-09-15 12:31:34.779', 479, 'PRESENT', 'QR_SCAN', 1, NULL),

(63, 4, '2026-09-15 04:42:13.751', '2026-09-15 12:31:25.383', 469, 'PRESENT', 'QR_SCAN', 1, NULL),

(65, 6, '2026-09-15 05:31:22.986', NULL, NULL, 'LATE', 'QR_SCAN', 1, NULL),

(67, 3, '2026-09-16 04:48:02.337', NULL, NULL, 'PRESENT', 'QR_SCAN', 1, NULL),

(68, 4, '2026-09-16 05:14:17.793', NULL, NULL, 'LATE', 'QR_SCAN', 1, NULL);

;



-- DailyReport for employees 3, 4, 6 only

INSERT IGNORE INTO `DailyReport` (`id`, `employee_id`, `submitted_at`, `summary`, `call_count`, `site_visit_count`, `closed_deal_count`, `target_met`, `below_target_reason`, `metrics_json`) VALUES
(2, 3, '2026-09-01 12:24:44.343', 'Today, I worked on housing leads by calling customers back and understanding their requirements. I explained the property details, updated customer feedback, downloaded the housing lead\'s  an', 1, 0, 0, 1, NULL, '{\"leadsProcessed\":\"03\",\"telecallerAssignments\":\"01\",\"feedback\":\"Today, 3 housing leads were generated. I contacted the customers, discussed their requirements and explained the property details. One customer from RC Puram Apartments is planning a site visit tomorrow. The Bollaram Apartments lead was shared with Ramesh Sir for further follow-up. Another customer is not answering the call.\",\"callsMade\":1}'),

(3, 4, '2026-09-01 12:27:04.244', 'Calls: 20 Associates• Office Visits: 3 Associates• Site Visit: 1 customer confirmed\"', 0, 0, 0, 1, NULL, '{\"feedback\":\"\"}'),

(5, 6, '2026-09-01 13:52:13.851', '**Date: 31 August 2026**\n\nGood evening Sir,\n\n**Today’s Work Update:**\n\n• Completed today’s motivational social media post.\n• Completed and uploaded the **My Home Garden** real-estate reel on ', 0, 0, 0, 1, NULL, '{\"feedback\":\"**Date: 01 September 2026**\\n\\nGood evening Sir,\\n\\n**Today’s Work Update:**\\n\\n• Completed today’s motivational social media post.\\n• Completed and uploaded the **My Home Garden** real-estate reel on Facebook & Instagram.\\n• Worked on the **Sonthillu social media post**Facebook only today completed the required updates.\\n\\nThank you, Sir.\"}'),

(7, 4, '2026-09-02 12:15:29.124', 'I spoke with 25 Associate members regarding their follow-ups. Tomorrow, the site visits for my home garden and Nagadhara are confirmed..', 0, 0, 0, 1, NULL, '{\"feedback\":\"\"}'),

(8, 3, '2026-09-02 12:21:12.425', 'Good evening sir,\nI have created a Google Sheet with all the Housing Leads and updated the previous follow-ups in the existing follow-up sheets.\nI have also completed some follow-ups for both', 0, 0, 0, 1, NULL, '{\"leadsProcessed\":\"0\",\"telecallerAssignments\":\"0\",\"feedback\":\"• Housing Leads Generated: 0\\n• New Calls: 16\\n• Old Calls Follow-up: 35\\n• Ad Postings Done: 3\\n• Prospects (Old & New): 1\\n• Site Visits: 0\",\"callsMade\":0}'),

(10, 3, '2026-09-03 12:03:51.916', 'Good evening, Sir.\nToday’s Updates. Housing leads follow-up calls completed,Housing posts rechecked and updated.', 21, 0, 2, 1, NULL, '{\"callsMade\":21,\"leadsQualified\":2,\"followupsDone\":\"10\",\"feedback\":\"• Housing Leads Generated: 1\\n• New Calls: 9\\n• Old Calls Follow-up: 12\\n• Ad Postings Done: 2\\n• Prospects (Old & New): 2\\n• Site Visits: 1\"}'),

(12, 4, '2026-09-03 12:23:08.361', '\nI will follow up with the team to get their customer site visit updates...', 0, 0, 0, 1, NULL, '{\"feedback\":\"\"}'),

(13, 6, '2026-09-03 13:06:45.435', 'To day work update 03/09/2026\n  I did Meta ads, for speed senaralli project, and facebook post s for sonthillu and Radha Real Home Properties ki Insta post s also upload today', 0, 0, 0, 1, NULL, '{\"feedback\":\"To day work update 03/09/2026\\n  I did Meta ads, for speed senaralli project, and facebook post s for sonthillu and Radha Real Home Properties ki Insta post s also upload today\"}'),

(16, 3, '2026-09-04 12:07:24.163', 'Good evening, sir.\nToday’s work update: • Saturday & Sunday housing leads follow-up calls completed. • Total assigned calls and follow-ups completed.', 57, 0, 1, 1, NULL, '{\"callsMade\":57,\"leadsQualified\":1,\"followupsDone\":\"57\",\"feedback\":\"• Housing Leads Generated: 1\\n• New Calls: 1\\n• Old Calls Follow-up: 56\\n• Ad Postings Done: 1\\n• Prospects (Old & New): 1\\n• Site Visits: 0\"}'),

(17, 4, '2026-09-04 12:18:58.354', '\nWeekend Site Visits & Follow-up Updates', 0, 0, 0, 1, NULL, '{\"feedback\":\"\"}'),

(19, 6, '2026-09-04 13:08:22.008', 'Today work update 04/09/2026\nDaily post for Facebook nd instagram 7 posts today and one post ready for Facebook ad run   middle in the work lo vundi thats it to day work ', 0, 0, 0, 1, NULL, '{\"feedback\":\"Today work update 04/09/2026\\nDaily post for Facebook nd instagram 7 posts today and one post ready for Facebook ad run  middle ofthe the work lo vundi thats it to day work \"}'),

(25, 3, '2026-09-07 12:15:23.349', '• Good evening sir.\n• Housing add-postings completed:\n 3\n• Leads generated: 1\n• Lead callback completed ', 17, 0, 1, 1, NULL, '{\"callsMade\":17,\"leadsQualified\":1,\"followupsDone\":\"17\",\"feedback\":\"• Housing Leads Generated: 1\\n• New Calls: 1\\n• Old Calls Follow-up: 16\\n• Ad Postings Done: 3\\n• Prospects (Old & New): 0\\n• Site Visits: 0\"}'),

(26, 4, '2026-09-07 12:15:43.894', '\n\nNo.of existing prospects followup:29\nNo.of New Calls:9\nTotal Calls Made:38\nNo.of New Prospects:7\n', 0, 0, 0, 1, NULL, '{\"feedback\":\"\"}'),

(28, 6, '2026-09-07 12:34:33.579', 'Today’s Work Update:07/09/2026\n\nPrepared the Sonthaillu Facebook post.\nPrepared a new Reel script.\nCreated one motivational quote/post.\nWorked on Radha Real Home  face book and insta Pinteres', 0, 0, 0, 1, NULL, '{\"feedback\":\"Today’s Work Update:07/09/2026\\n\\nPrepared the Sonthaillu Facebook post.\\nPrepared a new Reel script.\\nCreated one motivational quote/post.\\nWorked on Radha Real Home  face book and insta Pinterest post.\\nWorked on Radha Real Home Facebook follower growth through the Invite People option.\"}'),

(29, 4, '2026-09-08 12:29:33.210', '\nNo.of existing prospects followup:30\nNo.of New Calls:11\nTotal Calls Made:41\nNo.of New Prospects:5\nNo.of Associate’s office Visits:0\nNo.of Enrollments:5\nNo.of associate site visits:0', 0, 0, 0, 1, NULL, '{\"feedback\":\"\"}'),

(31, 3, '2026-09-08 12:30:28.199', 'Good evening sir \n\n• Housing non-postings completed: 5\n• Leads generated: 1\n• Lead callback completed: 3', 18, 0, 1, 1, NULL, '{\"callsMade\":18,\"leadsQualified\":1,\"followupsDone\":\"15\",\"feedback\":\"• Housing Leads Generated: 1\\n• New Calls: 3\\n• Old Calls Follow-up: 15\\n• Ad Postings Done: 5\\n• Prospects (Old & New): 1\\n• Site Visits: 0\"}'),

(32, 6, '2026-09-08 12:30:47.709', 'To day work update;  Prepared Sonthaillu Facebook post.\nCreated a new Reel script for Radha Real Home.\nCreated one motivational quote/post.\nWorked on Radha Real Home Pinterest post.\nWorked on', 0, 0, 0, 1, NULL, '{\"feedback\":\"To day work update;  Prepared Sonthaillu Facebook post.\\nCreated a new Reel script for Radha Real Home.\\nCreated one motivational quote/post.\\nWorked on Radha Real Home Pinterest post.\\nWorked on Radha Real Home Facebook follower growth using the Invite People option.\"}'),

(34, 6, '2026-09-09 12:06:41.918', 'Today’s Work Update:\n\nPrepared 2 Facebook posts &insta– Sonthaillu & Radha Real Home.\nCreated 1 motivational post, pinterest post', 0, 0, 0, 1, NULL, '{\"feedback\":\"Today’s Work Update:\\n\\nPrepared 2 Facebook posts &insta– Sonthaillu & Radha Real Home.\\nCreated 1 motivational post, pinterest post\"}'),

(36, 3, '2026-09-09 12:28:49.421', 'Good evening sir \n• Housing non-postings completed: 2\n• Leads generated: 0\n• Lead callback completed: ', 9, 0, 0, 1, NULL, '{\"callsMade\":9,\"leadsQualified\":0,\"followupsDone\":\"14\",\"feedback\":\"• Housing Leads Generated: 0\\n• New Calls: 9\\n• Old Calls Follow-up: 14\\n• Ad Postings Done: 2\\n• Prospects (Old & New): 0\\n• Site Visits: 0\"}'),

(37, 4, '2026-09-09 12:28:55.411', '\nFollow up on customer site visits and new Associate’s joining..', 0, 0, 0, 1, NULL, '{\"feedback\":\"\"}'),

(39, 3, '2026-09-10 12:09:43.533', 'Good evening sir \n• Housing non-postings completed: 2\n• Leads generated: 1\n• Lead callback completed: ', 15, 0, 1, 1, NULL, '{\"callsMade\":15,\"leadsQualified\":1,\"followupsDone\":\"10\",\"feedback\":\"• Housing Leads Generated: 1\\n• New Calls: 5\\n• Old Calls Follow-up: 10\\n• Ad Postings Done: 2\\n• Prospects (Old & New): 1\\n• Site Visits: 0\"}'),

(41, 6, '2026-09-10 12:27:52.362', '**Today’s Work Update – 10 September 2026**\n\n• Radha Real Home Properties – Social media content/posts\n• Sonthillu – Social media \n• Motivational quote\n• Upcoming social media content plannin', 0, 0, 0, 1, NULL, '{\"feedback\":\"**Today’s Work Update – 10 September 2026**\\n\\n• Radha Real Home Properties – Social media content/posts\\n• Sonthillu – Social media \\n• Motivational quote\\n• Upcoming social media content planning \"}'),

(42, 4, '2026-09-10 12:31:55.357', '\nNo.of existing prospects followup:0\nNo.of New Calls:47\nTotal Calls Made:47\nNo.of New Prospects:8\nNo.of Associate’s office Visits:\nNo.of Enrollments:2\nNo.of associate site visits:0', 0, 0, 0, 1, NULL, '{\"feedback\":\"\"}'),

(43, 4, '2026-09-11 13:47:03.271', '\nNo.of existing prospects:followup:39\nNo.of New Calls:15\nTotal Calls Made:40\nNo.of New Prospects:0\nNo.of customer site visits:0\nNo.of Bookings:0', 0, 0, 0, 1, NULL, '{\"feedback\":\"\"}'),

(46, 3, '2026-09-11 13:48:14.269', 'Good evening sir \n• Housing non-postings completed: 3\n• Leads generated: 2\n• Lead callback completed: 2', 16, 0, 2, 1, NULL, '{\"callsMade\":16,\"leadsQualified\":2,\"followupsDone\":\"11\",\"feedback\":\"• Housing Leads Generated: 2\\n• New Calls: 3\\n• Old Calls Follow-up: 13\\n• Ad Postings Done: 3\\n• Prospects (Old & New): 2\\n• Site Visits: 1\"}'),

(49, 3, '2026-09-12 12:22:51.141', 'Good Evening, Sir.\nToday’s Work Update: • Total Calls: 40\n• Housing Leads: Followed up\n• App Postings: 3 completed\n• Weekend Call Work: Completed', 10, 0, 0, 1, NULL, '{\"callsMade\":10,\"leadsQualified\":0,\"followupsDone\":\"38\",\"feedback\":\"• Housing Leads Generated: 0\\n• New Calls: 10\\n• Old Calls Follow-up: 38\\n• Ad Postings Done: 3\\n• Prospects (Old & New): 0\\n• Site Visits: 0\"}'),

(50, 4, '2026-09-12 12:33:33.340', '\nNo.of existing prospects followup:30\nNo.of New Calls:0\nTotal Calls Made:30\nNo.of New Prospects:0\nNo.of Associate’s office Visits:1\nNo.of Enrollments:2\nNo.of associate site visits:0', 0, 0, 0, 1, NULL, '{\"feedback\":\"\"}'),

(51, 3, '2026-09-15 12:15:09.625', 'Good evening sir \n• Follow-up completed on all leads received today.\n• Repostings completed.\n• Completed 3 new postings (5-day follow-up postings).\n• Follow-up completed with hold customers', 18, 0, 2, 1, NULL, '{\"callsMade\":18,\"leadsQualified\":2,\"followupsDone\":\"15\",\"feedback\":\"• Housing Leads Generated: 2\\n• New Calls: 3\\n• Old Calls Follow-up: 15\\n• Ad Postings Done: 5\\n• Prospects (Old & New): 2\\n• Site Visits: 0\"}'),

(52, 4, '2026-09-15 12:21:31.601', '\nNo.of existing prospects followup:31\nNo.of New Calls:0\nTotal Calls Made:31\nNo.of New Prospects:0\nNo.of Associate’s office Visits:0\nNo.of Enrollments:2\nNo.of associate site visits:0', 0, 0, 0, 1, NULL, '{\"feedback\":\"\"}');


