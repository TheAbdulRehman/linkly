const pool=require('./db')

const users = [
  { name: 'Alice Johnson', username: 'alicej',  email: 'alice.johnson@example.com', role: 'admin', profile_pic: 'https://i.pravatar.cc/150?img=1' },
  { name: 'Bob Smith',     username: 'bobsmith', email: 'bob.smith@example.com',     role: 'user',  profile_pic: 'https://i.pravatar.cc/150?img=2' },
  { name: 'Carol Davis',   username: 'carold',   email: 'carol.davis@example.com',   role: 'user',  profile_pic: 'https://i.pravatar.cc/150?img=3' },
  { name: 'David Lee',     username: 'davidlee', email: 'david.lee@example.com',     role: 'user',  profile_pic: 'https://i.pravatar.cc/150?img=4' },
  { name: 'Emma Wilson',   username: 'emmaw',    email: 'emma.wilson@example.com',   role: 'user',  profile_pic: 'https://i.pravatar.cc/150?img=5' },
];

const boardTitles = [
  'Project Roadmap',
  'Personal Tasks',
  'Reading List',
  'Travel Plans',
  'Bug Tracker',
];

const bookmarks = [
  { title: 'TypeScript Docs', url: 'https://www.typescriptlang.org/docs/', notes: 'Official TS documentation',     url_img: 'https://i.pravatar.cc/150?img=11' },
  { title: 'Postgres Docs',   url: 'https://www.postgresql.org/docs/',     notes: 'Official Postgres documentation', url_img: 'https://i.pravatar.cc/150?img=12' },
  { title: 'Node.js Docs',    url: 'https://nodejs.org/en/docs',           notes: 'Official Node.js documentation',  url_img: 'https://i.pravatar.cc/150?img=13' },
];

async function seed() {
  try {
    // 1. Insert users, capture their generated ids (needed for boards.user_id)
    const userIds: number[] = [];
    for (const user of users) {
      const result = await pool.query(
        `INSERT INTO users (name, username, email, role, profile_pic)
         VALUES ($1, $2, $3, $4, $5)
         RETURNING id`,
        [user.name, user.username, user.email, user.role, user.profile_pic]
      );
      userIds.push(result.rows[0].id);
    }
    console.log(`✅ Inserted ${userIds.length} users.`);

    // 2. Insert one board per user (board.user_id -> users.id)
    for (let i = 0; i < boardTitles.length; i++) {
      await pool.query(
        `INSERT INTO boards (title, user_id) VALUES ($1, $2)`,
        [boardTitles[i], userIds[i]]
      );
    }
    console.log(`✅ Inserted ${boardTitles.length} boards.`);

    // for (const bookmark of bookmarks) {
    //   await pool.query(
    //     `INSERT INTO bookmarks (title, url, notes, url_img) VALUES ($1, $2, $3, $4)`,
    //     [bookmark.title, bookmark.url, bookmark.notes, bookmark.url_img]
    //   );
    // }
    // console.log(`✅ Inserted ${bookmarks.length} bookmarks.`);

    console.log('🌱 Seeding completed successfully.');
    await pool.end();
    process.exit(0);
  } catch (err: any) {
    console.error('❌ Error seeding data:', err.message);
    await pool.end();
    process.exit(1);
  }
}

seed();