var express = require('express');
var router = express.Router();

let crypto = require('crypto');
let Encrypt = require('../models/encrypt');
var Customer = require('../models/customer');

router.post('/reserve', (req, res, next) => {
  let data = req.body.data;
  let db = req.db;

  let decryptedData = Encrypt.decrypt(data);
  let user = JSON.parse(decryptedData);

  //let hn = crypto.createHash('md5').update(user.hn).digest('hex');
  let hn = Encrypt.encrypt(user.hn);
  let CardID = Encrypt.encrypt(user.CardID);
  let ward_id = user.ward_id;
  let day = user.day;
  let timed = user.timed;

  if (hn && ward_id && day && timed) {
    let customer = {
      hn: hn,
      CardID:CardID,
      ward_id: ward_id,
      day: day,
      timed: timed
    }

    let db = req.db;

    Customer.reserve(db, customer)
      .then(() => {
        res.send({
          ok: true
        });
      }, (error) => {
        res.send({
          ok: false,
          error: error
        });
      });

  } else {
    res.send({
      ok: false,
      error: 'ข้อมูลไม่ครบถ้วน'
    });
  }

});


router.post('/preserve', (req, res, next) => {
  let data = req.body.data;
  let db = req.db;

  let decryptedData = Encrypt.decrypt(data);
  let user = JSON.parse(decryptedData);

  //let hn = crypto.createHash('md5').update(user.hn).digest('hex');
  let hn = Encrypt.encrypt(user.hn);
  let CardID = Encrypt.encrypt(user.CardID);
  let day = user.day;
  let age = user.age;
  let name = Encrypt.encrypt(user.name);
  let ward_id = user.ward_id;
  let ward_name = user.ward_name;
  let puser = user.puser;
  let timed = user.timed + "".substr(1, 5);
  let pay_typecode = user.pay_typecode;
  let note = user.note;

  if (hn && day && name && ward_id && puser && timed) {
    let customer = {
      hn: hn,
      CardID:CardID,
      day: day,
      age:age,
      name: name,
      ward_id: ward_id,
      puser: puser,
      timed: timed,
      pay_typecode:pay_typecode,
      note: note
    }

    let db = req.db;

    Customer.preserve(db, customer)
      .then(() => {
        res.send({
          ok: true
        });
      }, (error) => {
        res.send({
          ok: false,
          error: error
        });
      });

  } else {
    res.send({
      ok: false,
      error: 'ข้อมูลไม่ครบถ้วน'
    });
  }

});


router.post('/saveroom', (req, res, next) => {
  let data = req.body.data;
  let db = req.db;

  let decryptedData = Encrypt.decrypt(data);
  let room = JSON.parse(decryptedData);
  let ward_id = room.ward_id;
  let room_rate = room.room_rate;
  let roomno = room.roomno;
  let show_flag = room.show_flag; 

  if (roomno && room_rate && show_flag) {
    let room = {
      ward_id: ward_id,
      room_rate:room_rate,
      roomno: roomno,
      show_flag: show_flag
    }

    let db = req.db;

    Customer.saveroom(db, room)
      .then(() => {
        res.send({
          ok: true
        });
      }, (error) => {
        res.send({
          ok: false,
          error: error
        });
      });

  } else {
    res.send({
      ok: false,
      error: 'ข้อมูลไม่ครบถ้วน'
    });
  }

});


router.put('/ureserve', (req, res, next) => {
  let hn = req.body.hn;
  let CardID = req.body.CardID;
  let ward_id = req.body.ward_id;
  let day = req.body.day;
  let timed = req.body.timed;
  let id = req.body.id;

  if (hn && ward_id && day && timed) {
    let customer = {
      hn: hn,
      CardID:CardID,
      ward_id: ward_id,
      day: day,
      timed: timed,
      id: id
    }

    let db = req.db;
    Customer.update(db, customer)
      .then(() => {
        res.send({
          ok: true
        });
      }, (error) => {
        res.send({
          ok: false,
          error: error
        });
      });

  } else {
    res.send({
      ok: false,
      error: 'ข้อมูลไม่ครบถ้วน'
    });
  }
});


router.put('/update/reserve', (req, res, next) => {
  let data = req.body.data;
  let db = req.db;

  let decryptedData = Encrypt.decrypt(data);
  let user = JSON.parse(decryptedData);

  let hn = Encrypt.encrypt(user.hn);
  let CardID = Encrypt.encrypt(user.CardID);
  let day = user.day;
  let name = Encrypt.encrypt(user.name);
  let ward_id = user.ward_id;
  let puser = user.puser;
  let timed = user.timed + "".substr(1, 5);
  let note = user.note;
  let id = user.id;

  if (hn && day && name && ward_id && puser && timed) {
    let customer = {
      hn: hn,
      CardID:CardID,
      day: day,
      name: name,
      ward_id: ward_id,
      puser: puser,
      timed: timed,
      note: note,
      id: id
    }

    let db = req.db;
    Customer.update(db, customer)
      .then(() => {
        res.send({
          ok: true
        });
      }, (error) => {
        res.send({
          ok: false,
          error: error
        });
      });

  } else {
    res.send({
      ok: false,
      error: 'ข้อมูลไม่ครบถ้วน'
    });
  }
});

router.put('/uward', (req, res, next) => {
  let ward_id = req.body.ward_id;
  let id = req.body.id;

  if (id && ward_id) {
    let customer = {
      ward_id: ward_id,
      id: id
    }

    let db = req.db;
    Customer.updatew(db, customer)
      .then(() => {
        res.send({
          ok: true
        });
      }, (error) => {
        res.send({
          ok: false,
          error: error
        });
      });

  } else {
    res.send({
      ok: false,
      error: 'ข้อมูลไม่ครบถ้วน'
    });
  }
});


//ค้นหา
router.get('/:limit/:offset', function (req, res, next) {
  let db = req.db;
  let limit = parseInt(req.params.limit);
  let offset = parseInt(req.params.offset);

  Customer.all(db, limit, offset)
    .then((rows) => {
      let customers = [];
      rows.forEach(v => {
        let vtime = v.timed + "";
        let obj = {
          id: v.id,
          hn: Encrypt.decrypt(v.hn),
          ward_id: v.ward_id,
          name: Encrypt.decrypt(v.name),
          day: v.day,
          timed: vtime.substr(0, 5),
          note: v.note
        };
        customers.push(obj);
      });
      res.send({
        ok: true,
        rows: customers
      });
    }, (error) => {
      res.send({
        ok: false,
        error: error
      });
    });
});

router.get('/w/:limit/:offset', function (req, res, next) {
  let db = req.db;
  let limit = parseInt(req.params.limit);
  let offset = parseInt(req.params.offset);

  Customer.allw(db, limit, offset)
    .then((rows) => {
      let customers = [];
      rows.forEach(v => {
        let vtime = v.timed + "".substring(0,5);
        let obj = {
          id: v.id,
          hn: Encrypt.decrypt(v.hn),
          CardID:Encrypt.decrypt(v.CardID),
          day:v.day,
          age:v.age,
          name: Encrypt.decrypt(v.name),
          ward_id: v.ward_id,
          ward_name: v.ward_name,
          timed: vtime.substr(0, 5),
          pay_typecode: v.pay_typecode,
          pay_typedes:v.pay_typedes,
          note: v.note
        };
        customers.push(obj);
      });
      res.send({
        ok: true,
        rows: customers
      });
    }, (error) => {
      res.send({
        ok: false,
        error: error
      });
    });
});


router.post('/patient/search', function (req, res, next) {
  let db = req.db2;
  let query = req.body.query;
  //let token = req.body.token;
  let query1 = req.body.query1;
  console.log(query1)
 
    let sql = `SELECT 
            TOP 1 p.hn,t.titleName,p.firstName,p.lastName,p.sex,pss.CardID 
            as CardID, dbo.ymd2cbe(p.birthDay) 
            as birthdate,dbo.nowage(p.birthDay,dbo.ce2ymd(getdate())) as age, RTRIM(n.NATDES)
            AS nation,pt.pay_typecode, pt.pay_typedes,w.ward_id
            FROM PATIENT p
            LEFT JOIN Bill_h b On (p.hn = b.hn)
            LEFT JOIN Paytype pt On ( b.useDrg = pt.pay_typecode)
            LEFT JOIN Ipd_h i ON (p.hn=i.hn)
            LEFT JOIN Ward w ON (i.ward_id = w.ward_id)
            LEFT JOIN PatSS pss ON(p.hn=pss.hn)
            LEFT JOIN Nation n ON (p.nation = n.NATCODE)
            LEFT JOIN PTITLE t ON (p.titleCode = t.titleCode)
            WHERE ${query1} = ? 
            ORDER BY i.regist_flag DESC`;
  


  db.raw(sql, [query])
    .then(rows => {
      res.send({
        ok: true,
        rows: rows[0]
      })

    })
    .catch(err => {
      console.log(err)
      res.send({
        ok: false,
        msg: `[${err.code}] ${err.message}`
      })
    });
});


router.post('/patientn/search', function (req, res, next) {
  let db = req.db2;
  let query = req.body.query;
  //let token = req.body.token;
  let query1 = req.body.query1;
  console.log(query1)

    let sql = `SELECT 
            TOP 1 p.hn,t.titleName,p.firstName,p.lastName,p.sex,pss.CardID 
            as CardID, dbo.ymd2cbe(p.birthDay) 
            as birthdate,dbo.nowage(p.birthDay,dbo.ce2ymd(getdate())) as age, RTRIM(n.NATDES)
            AS nation,pt.pay_typecode, pt.pay_typedes,w.ward_id
            FROM PATIENT p
            LEFT JOIN Bill_h b On (p.hn = b.hn)
            LEFT JOIN Paytype pt On ( b.useDrg = pt.pay_typecode)
            LEFT JOIN Ipd_h i ON (p.hn=i.hn)
            LEFT JOIN Ward w ON (i.ward_id = w.ward_id)
            LEFT JOIN PatSS pss ON(p.hn=pss.hn)
            LEFT JOIN Nation n ON (p.nation = n.NATCODE)
            LEFT JOIN PTITLE t ON (p.titleCode = t.titleCode)
            WHERE p.firstName like ? or  p.firstName like ?
            ORDER BY i.regist_flag DESC`;
  


  db.raw(sql, ['%'+query+'%','%'+query+'%'])
    .then(rows => {
      res.send({
        ok: true,
        rows: rows[0]
      })

    })
    .catch(err => {
      console.log(err)
      res.send({
        ok: false,
        msg: `[${err.code}] ${err.message}`
      })
    });
});


router.get('/today', function (req, res, next) {
  let db = req.db;

  Customer.today(db)
    .then((rows) => {
      let customers = [];
      rows.forEach(v => {
        let vtime = v.timed + "";
        let obj = {
          id: v.id,
          hn: Encrypt.decrypt(v.hn),
          ward_id: v.ward_id,
          ward_name: v.ward_name,
          name: Encrypt.decrypt(v.name),
          day: v.day,
          specialroom: v.specialroom,
          timed: vtime.substr(0, 5),
          note: v.note
        };
        customers.push(obj);
      });
      res.send({
        ok: true,
        rows: customers
      });
    }, (error) => {
      res.send({
        ok: false,
        error: error
      });
    });
});

router.post('/search', function (req, res, next) {
  let db = req.db;
  let query = req.body.query;

  Customer.search(db, query)
    .then((rows) => {
      let customers = [];
      rows.forEach(v => {
        let vtime = v.timed + "".substr(1, 5);
        let obj = {
          id: v.id,
          hn: v.hn,
          CardID:v.CardID,
          day: v.day,
          age:v.age,
          name: v.name,
          ward_id: v.ward_id,
          timed: v.timed,
          pay_typecod:v.pay_typecode,
          note: v.note
        };
        customers.push(obj);
      });
      res.send({
        ok: true,
        rows: customers
      });
    }, (error) => {
      res.send({
        ok: false,
        error: error
      });
    });
});

router.get('/ward', function (req, res, next) {
  let db = req.db;
  Customer.getWard(db)
    .then((rows) => {
      res.send({
        ok: true,
        rows: rows
      });
    }, (error) => {
      res.send({
        ok: false,
        error: error
      });
    });
});

router.get('/pay', function (req, res, next) {
  let db = req.db;
  Customer.getPay(db)
    .then((rows) => {
      res.send({
        ok: true,
        rows: rows
      });
    }, (error) => {
      res.send({
        ok: false,
        error: error
      });
    });
});

router.get('/sward', function (req, res, next) {
  let db = req.db;
  Customer.Sward(db)
    .then((rows) => {
      res.send({
        ok: true,
        rows: rows
      });
    }, (error) => {
      res.send({
        ok: false,
        error: error
      });
    });
});


router.get('/getnews', function (req, res, next) {
  let db = req.db;
  Customer.getnews(db)
    .then((rows) => {
      res.send({
        ok: true,
        rows: rows
      });
    }, (error) => {
      res.send({
        ok: false,
        error: error
      });
    });
});

router.get('/setward/:ward_id', function (req, res, next) {
  let db = req.db;
  let ward_id = req.params.ward_id;
  Customer.setWard(db, ward_id)
    .then((rows) => {
      res.send({
        ok: true,
        rows: rows
      });
    }, (error) => {
      res.send({
        ok: false,
        error: error
      });
    });
});

router.post('/getroom', function (req, res, next) {
  let db = req.db;
  let ward_id = req.body.ward_id;
  Customer.getrooms(db, ward_id)
    .then((rows) => {
      let rooms = [];
       rows.forEach(v => {
        let obj = {
          room_no: v.room_no
        };
        rooms.push(obj);
      });
      res.send({
        ok: true,
        rows: rooms
      });
    }, (error) => {
      res.send({
        ok: false,
        error: error
      });
    });
});

router.get('/total', function (req, res, next) {
  let db = req.db;
  Customer.total(db)
    .then((total) => {
      res.send({
        ok: true,
        total: total
      });
    }, (error) => {
      res.send({
        ok: false,
        error: error
      });
    });
});

router.delete('/:id', function (req, res, next) {
  let db = req.db;
  let id = req.params.id;

  Customer.remove(db, id)
    .then(() => {
      res.send({
        ok: true
      });
    }, (error) => {
      res.send({
        ok: false,
        error: error
      });
    });
});

router.put('/map/:id', function (req, res, next) {
  let db = req.db;
  let id = req.params.id;
  let lng = req.body.lng;
  let lat = req.body.lat;

  Customer.saveMap(db, id, lat, lng)
    .then(() => {
      res.send({
        ok: true
      });
    }, (error) => {
      res.send({
        ok: false,
        error: error
      });
    });
});

module.exports = router;