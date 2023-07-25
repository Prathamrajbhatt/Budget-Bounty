const express = require("express");
const { addTransection, getAllTransaction } = require("../controllers/transactioCtrl");

//router object
const router = express.Router();
//routes
router.post('/add-transaction',addTransection)


//get transaction
router.get('/get-transaction',getAllTransaction)
module.exports = router;