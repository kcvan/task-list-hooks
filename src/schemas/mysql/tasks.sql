CREATE TABLE `tasks` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `group` varchar(100) NOT NULL,
  `task` varchar(255) NOT NULL,
  `dependencyIds` varchar(255) DEFAULT `[]`,
  `completedAt` datetime DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
