const express = require("express");
const router = express.Router();
const {auth,isVerified} = require('../middlewares/authMiddleware');
const {getUser,updateUser,addToFavourite,removeFromFavourite,getFavourite} = require("../controllers/userController");

router.post('/',auth,isVerified,getUser);
router.put('/',auth,updateUser)
router.patch('/:id/add',auth,isVerified,addToFavourite)
router.patch('/:id/remove',auth,isVerified,removeFromFavourite)
router.get('/',auth,isVerified,getFavourite)

module.exports = router;        