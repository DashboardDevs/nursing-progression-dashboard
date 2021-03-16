USE nursingdb;
ALTER TABLE `milestones` RENAME COLUMN `description` TO `name`;
ALTER TABLE `milestones` ADD COLUMN `description` varchar(255);