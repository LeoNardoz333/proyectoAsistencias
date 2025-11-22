CREATE DATABASE IF NOT EXISTS asistencia_db
  DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

CREATE USER IF NOT EXISTS 'asistencia_user'@'localhost'
  IDENTIFIED BY 'Asistencias2025!';

GRANT ALL PRIVILEGES ON asistencia_db.* 
  TO 'asistencia_user'@'localhost';

FLUSH PRIVILEGES;
