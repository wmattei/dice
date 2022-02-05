INSERT INTO "users" VALUES 
(1, 'John Doe', 100.00),
(2, 'Jane Doe', 200.00),
(3, 'Wagner Mattei', 1000000.00) ON CONFLICT DO NOTHING;
