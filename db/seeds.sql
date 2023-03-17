INSERT INTO department (department_name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

INSERT INTO roles (title, salary, department_id)
VALUES ("Salesperson", 80000, 1),
       ("Lead Engineer", 150000, 2),
       ("Software Engineer", 120000, 2),
       ("Account Manager", 160000, 3),
       ("Acountant", 125000, 3),
       ("Legal Team Lead", 250000, 4),
       ("Lawyer", 190005, 4);       

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mike", "Chan", 1, False ),
       ("Ashley", "Rodriguez", 2, True),
       ("Kevin", "Tupik", 2, False),
       ("Malia", "Brown", 3, True),
       ("Tom", "Allen", 3, True),
       ("Kunal", "Singh", 4, False),
       ("Sarah", "Lourd", 4, True);






       