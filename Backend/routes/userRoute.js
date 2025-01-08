const express = require("express");
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const {getUser,updateUser,addToFavourite,removeFromFavourite,getFavourite} = require("../controllers/userController");

router.post('/',auth,getUser);
router.put('/',auth,updateUser)
router.patch('/:id/add',auth,addToFavourite)
router.patch('/:id/remove',auth,removeFromFavourite)
router.get('/',auth,getFavourite)

module.exports = router;        