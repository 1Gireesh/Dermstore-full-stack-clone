const express = require("express");
const product = require("./product.model");


const app = express.Router();



app.get("/", async (req, res) => {
    let { limit=20, skip=0 } = req.query;
    try {
        let prd = await product.find().skip(skip).limit(limit);
        res.send(prd);
    } catch (e) {
        res.send(e.message)
    }

})



app.get("/search", async (req, res) => {
    try {
        let prd = await product.find();
        let q = req.query.q;
        if (q)
            res.send(prd.filter((e, i) => e.name && e.name.toLocaleLowerCase().includes(q.toLocaleLowerCase())))
        else
            res.send(prd);
    } catch (e) {
        res.send(e.message);
    }


})

app.get("/:id", async (req, res) => {
    let id = req.params.id;
    let prd = await product.findOne({ id: id });
    res.send(prd);

})


module.exports = app;