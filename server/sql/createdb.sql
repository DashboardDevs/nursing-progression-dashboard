CREATE DATABASE IF NOT EXISTS nursingdb;
USE nursingdb;

CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `first_name` varchar(255),
  `last_name` varchar(255),
  `dot_number` int,
  `advisor_id` int,
  `perms` int2 COMMENT 'students =  0, advisors = 1, admins = 2'
);

CREATE TABLE `student_milestone` (
  `s_id` int,
  `m_id` int,
  `status` int2
);

CREATE TABLE `milestones` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `description` varchar(255)
);

ALTER TABLE `users` ADD FOREIGN KEY (`advisor_id`) REFERENCES `users` (`id`);

ALTER TABLE `student_milestone` ADD FOREIGN KEY (`s_id`) REFERENCES `users` (`id`);

ALTER TABLE `student_milestone` ADD FOREIGN KEY (`m_id`) REFERENCES `milestones` (`id`);
