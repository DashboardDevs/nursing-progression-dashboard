USE nursingdb;
INSERT INTO users(id,first_name,last_name,dot_number,advisor_id,graduation_date,perms) VALUES
(52,"Test","User",777,1004,"2021-04-30",0);

INSERT INTO student_milestone(s_id, m_id, status) VALUES 
(52,1,0),
(52,2,0),
(52,3,2),
(52,4,2),
(52,5,2),
(52,6,2),
(52,7,2),
(52,8,0),
(52,9,2),
(52,10,0),
(52,11,2),
(52,12,2),
(52,13,2),
(52,14,2),
(52,15,2);