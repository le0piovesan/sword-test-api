CREATE DATABASE IF NOT EXISTS tasksdb;

USE tasksdb;

CREATE TABLE IF NOT EXISTS manager(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(80) NOT NULL,
    company CHAR(30) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS technician(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(80) NOT NULL,
    field CHAR(30) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    idManager INT DEFAULT NULL,
    CONSTRAINT technician_manager FOREIGN KEY(idManager) REFERENCES manager(id)
);
 
CREATE TABLE IF NOT EXISTS task(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    summary VARCHAR(2500) NOT NULL,
    performed DATE NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    idTechnician INT DEFAULT NULL,
    CONSTRAINT task_technician FOREIGN KEY(idTechnician) REFERENCES technician(id)
);

INSERT INTO manager(name, company) 
VALUES("James", "Tech Systems"), 
        ("Maria", "Maria Accountment"),
        ("Frank", "Well Repaired");

INSERT INTO technician(name, field, idManager) 
VALUES("Jessica", "Secretary", 2), 
        ("Rick", "Accountment Helper", 2),
        ("Anna", "Software Engineer", 1),
        ("Julia", "Handyman", 3),
        ("Bob", "Finances", 1);
 
INSERT INTO task(summary, performed, idTechnician) 
VALUES("Organize files, make some calls", "2023-03-21", 1), 
        ("Gathered software requirements", "2023-01-07", 3), 
        ("Developed a backend api", "2023-01-29", 3), 
        ("Designed a frontend web app", "2023-02-14", 3), 
        ("Repaired some home equipaments", "2023-03-02", 4), 
        ("Fixed a closet", "2023-03-05", 4), 
        ("Made a excel file with recent earns", "2023-03-14", 5), 
        ("Helped reorganizing some files", "2023-03-21", 2);