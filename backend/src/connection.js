const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "rumahsunat",
  password: "postgres",
  port: 5432,
});

const execute = async (query) => {
  try {
    await pool.query(query);
    return true;
  } catch (err) {
    console.error(err.message);
    return false;
  }
};

const countQuery = "SELECT COUNT(*) > 0 as data FROM articles;";

const dropTableQuery = "DROP TABLE IF EXISTS articles;";

const createTableQuery =
  "CREATE TABLE IF NOT EXISTS articles (\
  id serial PRIMARY KEY, \
  title TEXT NOT NULL, \
  description TEXT NOT NULL, \
  photo_urls TEXT[], \
  created_by VARCHAR(10) NOT NULL, \
  created_on TIMESTAMP NOT NULL\
  );";

const articlesData1Query =
  "INSERT INTO articles (\
title, description, photo_urls, created_by, created_on) \
VALUES (\
  'Jangan Khawatir, Anak Gemuk Juga Bisa Sunat', \
  'Anak gemuk bisa disunat dengan teknik khusus tanpa harus terapi hormon dan diet ketat.', \
  ARRAY['D:/images/photo-post-1.jpeg']::TEXT[], \
  'Admin', \
  current_timestamp\
);";

const articlesData2Query =
  "INSERT INTO articles (\
title, description, photo_urls, created_by, created_on) \
VALUES (\
  'Kegiatan Sunat Masal', \
  'Kegiatan sunat masal yang dilakukan oleh Rumah Sunat Seruni.', \
  ARRAY['D:/images/photo-post-2.jpeg','D:/images/photo-post-2-1.jpeg','D:/images/photo-post-2-2.jpeg','D:/images/photo-post-2-3.jpeg']::TEXT[], \
  'Admin', \
  current_timestamp\
);";

const executeInsert = async () => {
  const resultCount = await pool.query(countQuery);

  if (!resultCount.rows[0].data) {
    await pool.query(articlesData1Query);
    await pool.query(articlesData2Query);
  }
};

execute(dropTableQuery).then(() => {
  execute(createTableQuery)
    .then(() => {
      console.log("tabel berhasil dibuat");
      executeInsert()
        .then(() => console.log("insert data berhasil"))
        .catch(() => console.log("insert data gagal"));
    })
    .catch(() => console.log("tabel gagal dibuat"));
});

module.exports = pool;
