const pool=require('./db')

const createUserTable: string=`CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    role VARCHAR(10) NOT NULL CHECK (role IN ('user', 'admin')),
    profile_pic TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`
const createBoardsTable:string = `CREATE TABLE IF NOT EXISTS boards (
    id SERIAL PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
)`;
const createBookmarksTable:string = `CREATE TABLE IF NOT EXISTS bookmarks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    url VARCHAR(200) NOT NULL,
    notes TEXT,
    url_img TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`;
async function createMigration(){
  try {
    await pool.query(createUserTable);
    await pool.query(createBoardsTable);
    await pool.query(createBookmarksTable);
    console.log('✅ "users and boards table created " table verified/created successfully.');
    await pool.end();
    process.exit(0)
  } catch (err:any) {
    console.error('❌ Error creating table:', err.message);
    process.exit(1);
  }



}

createMigration()

