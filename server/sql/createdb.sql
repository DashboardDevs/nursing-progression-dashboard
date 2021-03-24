CREATE DATABASE IF NOT EXISTS nursingdb;
USE nursingdb;

CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `first_name` varchar(255),
  `last_name` varchar(255),
  `dot_number` int,
  `advisor_id` int,
  `perms` int COMMENT 'students =  0, advisors = 1, admins = 2, faculty = 3',
  `graduation_date` date
);

CREATE TABLE `committee_membership` (
  `s_id` int,
  `member_id` int
);

CREATE TABLE `student_milestone` (
  `s_id` int,
  `m_id` int,
  `status` int COMMENT 'incomplete =  0, inprogress = 1, notstarted = 2, complete = 3',
  `submitted` datetime,
  `completed` datetime
);

CREATE TABLE `milestones` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `description` varchar(255)
);

CREATE TABLE `notes` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `s_id` int,
  `a_id` int,
  `note` varchar(255),
  `date` datetime
);

CREATE TABLE `prerequisites` (
  `base_id` int,
  `prereq_id` int
);

ALTER TABLE `users` ADD FOREIGN KEY (`advisor_id`) REFERENCES `users` (`id`);

ALTER TABLE `committee_membership` ADD FOREIGN KEY (`s_id`) REFERENCES `users` (`id`);

ALTER TABLE `committee_membership` ADD FOREIGN KEY (`member_id`) REFERENCES `users` (`id`);

ALTER TABLE `student_milestone` ADD FOREIGN KEY (`s_id`) REFERENCES `users` (`id`);

ALTER TABLE `student_milestone` ADD FOREIGN KEY (`m_id`) REFERENCES `milestones` (`id`);

ALTER TABLE `notes` ADD FOREIGN KEY (`s_id`) REFERENCES `users` (`id`);

ALTER TABLE `notes` ADD FOREIGN KEY (`a_id`) REFERENCES `users` (`id`);

ALTER TABLE `prerequisites` ADD FOREIGN KEY (`base_id`) REFERENCES `milestones` (`id`);

ALTER TABLE `prerequisites` ADD FOREIGN KEY (`prereq_id`) REFERENCES `milestones` (`id`);
