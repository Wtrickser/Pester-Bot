const router = require("express").Router();

router.post("/api", ({ body }, res) => {
  Transaction.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/transaction", (req, res) => {
  Transaction.find({})
    .sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/df_text_query", async (req, res) => {
  const { text, parameters } = req.body;
  
  // const responses = await chatbot
  // .textQuery(text, userID, parameters)
  // .catch(err => {
  //     console.log("ERROR:", err);
  //     res.status(400).send("error");
  //   });
 
  const result = (dasd, strings)
  res.send(result);
});

module.exports = router;