var express = require('express');
var router = express.Router();

let crypto = require('crypto');
let Encrypt = require('../models/encrypt');
var Users = require('../models/users');


router.get('/getnews/:limit/:offset', function (req, res, next) {
  let db = req.db;
  let limit = parseInt(req.params.limit);
  let offset = parseInt(req.params.offset);
  Users.getNews(db, limit, offset)
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

router.get('/getactivity/:limit/:offset', function (req, res, next) {
  let db = req.db2;
  let limit = parseInt(req.params.limit);
  let offset = parseInt(req.params.offset);
  Users.getActivity(db, limit, offset)
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

router.get('/newsbytype/:news_type/:limit/:offset', function (req, res, next) {
  let db = req.db;
  let news_type = parseInt(req.params.news_type);
  let limit = parseInt(req.params.limit);
  let offset = parseInt(req.params.offset);
  Users.newsBytype(db,news_type, limit, offset)
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

router.get('/viewnews/:news_id', function (req, res, next) {
  let db = req.db;

  let news_id = req.params.news_id;
  console.log(news_id);
  Users.viewNews(db, news_id)
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

router.get('/viewfile/:news_id', function (req, res, next) {
  let db = req.db;

  let news_id = req.params.news_id;
  Users.viewFile(db, news_id)
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


router.get('/gettotal', function (req, res, next) {
  let db = req.db;
  Users.getTotal(db)
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

router.get('/acttotal', function (req, res, next) {
  let db = req.db2;
  Users.getTotal(db)
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

router.get('/gettotaltype/:news_type', function (req, res, next) {
  let db = req.db;
  let news_type = parseInt(req.params.news_type);
  Users.getTotalbytype(db,news_type)
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

router.get('/viewmore/:limit/:offset', function (req, res, next) {
  let db = req.db;
  let limit = parseInt(req.params.limit);
  let offset = parseInt(req.params.offset);
  Users.viewMore(db, limit, offset)
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

router.get('/actmore/:limit/:offset', function (req, res, next) {
  let db = req.db2;
  let limit = parseInt(req.params.limit);
  let offset = parseInt(req.params.offset);
  Users.actMore(db, limit, offset)
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

router.get('/viewmoretype/:news_type/:limit/:offset', function (req, res, next) {
  let db = req.db;
  let news_type = parseInt(req.params.news_type);
  let limit = parseInt(req.params.limit);
  let offset = parseInt(req.params.offset);
  Users.viewMoretype(db, news_type,limit, offset)
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

router.get('/search/:query', function (req, res, next) {
  let db = req.db;
  let query = req.params.query;
  Users.search(db, query)
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

router.get('/searchbytype/:news_type/:query', function (req, res, next) {
  let db = req.db;
  let news_type = parseInt(req.params.news_type);
  let query = req.params.query;
  Users.searchbytype(db, news_type,query)
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

router.get('/viewslide', function (req, res, next) {
  let db = req.db2;
  Users.viewslide(db)
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

router.get('/getact', function (req, res, next) {
  let db = req.db2;
  Users.getact(db)
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



module.exports = router;
