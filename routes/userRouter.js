const {
  getAllList,
  createList,
  updateList,
  deleteList,
} = require("../controllers/userController");

const router = require("express").Router();

router.get("/alllist", getAllList);
router.post("/newlist", createList);
router.put("/finished/:title", updateList);
router.delete("/deletelist/:title", deleteList);

module.exports = router;
