module.exports = {

  getNews(db,limit,offset) {
    return new Promise((resolve, reject) => {
      db.getConnection((err, conn) => {
        if (err) {
          reject(err);
        } else {
          let sql = `SELECT * FROM news order by news_id desc limit ? OFFSET ?`;
          conn.query(sql, [limit,offset], (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
          });
          conn.release();
        }
      });
      
    });
  },

  getActivity(db,limit,offset) {
    return new Promise((resolve, reject) => {
      db.getConnection((err, conn) => {
        if (err) {
          reject(err);
        } else {
          let sql = `SELECT * FROM activity order by id desc limit ? OFFSET ?`;
          conn.query(sql, [limit,offset], (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
          });
          conn.release();
        }
      });
      
    });
  },

  newsBytype(db,news_type,limit,offset) {
    return new Promise((resolve, reject) => {
      db.getConnection((err, conn) => {
        if (err) {
          reject(err);
        } else {
          let sql = `SELECT * FROM news where news_type=? order by news_id desc limit ? OFFSET ?`;
          conn.query(sql, [news_type,limit,offset], (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
          });
          conn.release();
        }
      });
      
    });
  },

  getTotal(db) {
    return new Promise((resolve, reject) => {
      db.getConnection((err, conn) => {
        if (err) {
          reject(err);
        } else {
          let sql = `SELECT COUNT(*) AS total FROM news`;
          conn.query(sql, [], (err, rows) => {
            if (err) reject(err);
            else resolve(rows[0].total);
          });
          conn.release();
        }
      });
      
    });
  },

  actTotal(db) {
    return new Promise((resolve, reject) => {
      db.getConnection((err, conn) => {
        if (err) {
          reject(err);
        } else {
          let sql = `SELECT COUNT(*) AS total FROM activity`;
          conn.query(sql, [], (err, rows) => {
            if (err) reject(err);
            else resolve(rows[0].total);
          });
          conn.release();
        }
      });
      
    });
  },

  getTotalbytype(db,news_type) {
    return new Promise((resolve, reject) => {
      db.getConnection((err, conn) => {
        if (err) {
          reject(err);
        } else {
          let sql = `SELECT COUNT(*) AS total FROM news where news_type=?`;
          conn.query(sql, [news_type], (err, rows) => {
            if (err) reject(err);
            else resolve(rows[0].total);
          });
          conn.release();
        }
      });
      
    });
  },

  viewNews(db,news_id) {
    return new Promise((resolve, reject) => {
      db.getConnection((err, conn) => {
        if (err) {
          reject(err);
        } else {
          let sql = `SELECT * FROM news where news_id=? limit 10`;
          conn.query(sql, [news_id], (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
          });
          conn.release();
        }
      });
      
    });
  },

  viewFile(db,news_id) {
    return new Promise((resolve, reject) => {
      db.getConnection((err, conn) => {
        if (err) {
          reject(err);
        } else {
          let sql = `SELECT * FROM upload where up_num=? limit 10`;
          conn.query(sql, [news_id], (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
          });
          conn.release();
        }
      });
      
    });
  },

  viewMore(db,limit,offset) {
    return new Promise((resolve, reject) => {
      db.getConnection((err, conn) => {
        if (err) {
          reject(err);
        } else {
          let sql = `SELECT * FROM news order by news_id desc limit ? OFFSET ?`;
          conn.query(sql, [limit,offset], (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
          });
          conn.release();
        }
      });
      
    });
  },

  actMore(db,limit,offset) {
    return new Promise((resolve, reject) => {
      db.getConnection((err, conn) => {
        if (err) {
          reject(err);
        } else {
          let sql = `SELECT * FROM activity order by id desc limit ? OFFSET ?`;
          conn.query(sql, [limit,offset], (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
          });
          conn.release();
        }
      });
      
    });
  },

  viewMoretype(db,news_type,limit,offset) {
    return new Promise((resolve, reject) => {
      db.getConnection((err, conn) => {
        if (err) {
          reject(err);
        } else {
          let sql = `SELECT * FROM news where news_type=? order by news_id desc limit ? OFFSET ?`;
          conn.query(sql, [news_type,limit,offset], (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
          });
          conn.release();
        }
      });
      
    });
  },

  search(db,query) {
    let _query = `%${query}%`;
    return new Promise((resolve, reject) => {
      db.getConnection((err, conn) => {
        if (err) {
          reject(err);
        } else {
          let sql = `SELECT * FROM news where news_header like ? order by news_header desc`;
          conn.query(sql, [_query], (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
          });
          conn.release();
        }
      });
      
    });
  },

  searchbytype(db,news_type,query) {
    let _query = `%${query}%`;
    return new Promise((resolve, reject) => {
      db.getConnection((err, conn) => {
        if (err) {
          reject(err);
        } else {
          let sql = `SELECT * FROM news where news_type=? and news_header like ? order by news_header desc`;
          conn.query(sql, [news_type,_query], (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
          });
          conn.release();
        }
      });
      
    });
  },
  
  viewslide(db) {
    return new Promise((resolve, reject) => {
      db.getConnection((err, conn) => {
        if (err) {
          reject(err);
        } else {
          let sql = `SELECT * FROM banner order by id desc limit 4`;
          conn.query(sql, [], (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
          });
          conn.release();
        }
      });
      
    });
  },

  getact(db) {
    return new Promise((resolve, reject) => {
      db.getConnection((err, conn) => {
        if (err) {
          reject(err);
        } else {
          let sql = `SELECT id,act_pic,act_header,hit FROM activity order by id desc limit 2`;
          conn.query(sql, [], (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
          });
          conn.release();
        }
      });
      
    });
  }

  

}