const List = require("../model/listModel");

//get all the list
const getAllList = async (req, res) => {
  try {
    const listData = await List.find();
    res.status(200).json({ message: "success", data: listData });
  } catch (error) {
    console.log("the error is :", error);
    res.status(400).json({ message: "failed to getall list", err: error });
  }
};
//create an new list
const createList = async (req, res) => {
  const data = req.body;
  try {
    const listPresent = await List.findOne({ title: req.body.title });
    if (listPresent) {
      res
        .status(501)
        .json({ message: "list allready present", list: listPresent[0] });
    } else {
      const result = await List.create(data);
      res.status(201).json({ message: "new list added", response: result });
    }
  } catch (error) {
    console.log("the error is :", error);
    res.status(400).json({ message: "createlist failed", err: error });
  }
};
//update the list into finished
const updateList = async (req, res) => {
  try {
    const listPresent = await List.findOne({ title: req.params.title });
    const result = await List.updateOne(
      { title: req.params.title },
      { isDone: true, isActive: false }
    );
    console.log("the result is :", result);
    if (!listPresent) {
      res.status(400).json({ message: "list not found" });
    } else res.status(200).json({ message: "list updated", response: result });
  } catch (error) {
    console.log("the error is::", error);
    res.status(400).json({ message: "update list is failed", err: error });
  }
};

//delete list from collection
const deleteList = async (req, res) => {
  try {
    const title = req.params.title;
    const listPresent = await List.findOne({ title: req.params.title });
    const result = await List.findOneAndRemove({ title: title });
    if (!listPresent) {
      res.status(400).json({ message: "list not found" });
    } else res.status(200).json({ message: "list deleted", response: result });
  } catch (error) {
    console.log("the error is :", error);
    res.status(400).json({ message: "failed to delete the list", err: error });
  }
};

module.exports = {
  getAllList,
  createList,
  updateList,
  deleteList,
};
