const {Router} = require ("express");
const Movie = require("../Model/movies")
const movieCtrl = require("../Controller/movie.controller");

const router = Router();

router.get("/movie", movieCtrl.getMovie)
router.get("/movie/actors", movieCtrl.getActors)
router.get("/movie/directors", movieCtrl.getDirectors)
router.get("/movie/writer", movieCtrl.getWriter)
router.get("/movie/producer", movieCtrl.getProducer)
router.post("/movie", movieCtrl.postMovie)
router.post("/movie/actors", movieCtrl.postActors)
router.post("/movie/director", movieCtrl.postDirector)
router.post("/movie/writer", movieCtrl.postWriter)
router.put("/movie", movieCtrl.putMovie)
router.delete("/movie", movieCtrl.delMovie)
router.delete("/movie/actors", movieCtrl.delActors)
router.delete("/movie/director", movieCtrl.delDirector)
router.delete("/movie/writer", movieCtrl.delWriter)

module.exports = router;