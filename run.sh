docker compose up --build -d
docker exec -i dice_db_1 psql -U postgres -d dice < ./src/config/db/initial_seed.sql
