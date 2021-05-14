const express = require('express');
const router = express.Router();

let hobbies = ['cooking','walking','good nutrition'];

router.get("/", (req, res) => {
  	res.send(hobbies);
});

router.post("/", (req, res) => {
    hobbies.push(req.body.name);
    console.log(`req.body.name`, req.body.name)
    res.status(201).send("hobby added");
});

router.delete("/hobbies", (req,res) => {
    const deleteThis = req.body.name;
    const id = hobbies.indexOf(deleteThis); // 2

    if (id != -1) {
       const removedHobby = hobbies.splice(id,  1);
       console.log(`removedHobby`, removedHobby)
       res.status(204).send("deleted");
    }
    else {
        res.status(204).send("Nothing to delete");
    }
    console.log(hobbies);

})


//updates the content to uppercase
router.put("/hobbies", (req, res) => {
    const updateThis = req.body.name;
    const id = hobbies.indexOf(updateThis); // 2
    if (id != -1) {
        hobbies[id] = updateThis.toUpperCase()
        console.log(`updatedHobby`, updateThis)
        console.log(`updatedHobby`, hobbies[id])
        res.status(204).send("updated");
    }
    else {
        res.status(204).send("Nothing  to update");
    }
    console.log(hobbies);
    res.status(204).send("updated");
})

module.exports = router;