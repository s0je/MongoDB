const {Router} = require ("express");
const Professional = require("../Model/professional")
const professionalCtrl = require("../Controller/professional.controller");

const router = Router();

router.get("/professional", professionalCtrl.getProfessional)
router.post("/professional", professionalCtrl.postProfessional)

module.exports = router;