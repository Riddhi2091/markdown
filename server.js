const express = require('express')
const bodyParser = require('body-parser')
const articleRouter = require('./routes/articles')
const mongoose = require('mongoose')
const Article = require("./models/article")
const app = express()

mongoose.connect(
  "mongodb+srv://admin-riddhi:riddhi@riddhi.s15cx.mongodb.net/blog",
  { useNewUrlParser: true, useUnifiedTopology: true}
);

app.set('view engine','ejs')

// app.use(express.urlencoded({ extends: true }));
app.use('/articles',articleRouter)

app.get('/',async(req,res) => {
  const articles = await Article.find().sort({
    createdAt:'desc'})
  res.render('articles/index', { articles: articles });
})







app.listen(process.env.PORT || 3000, function (req, res) {
  console.log("Server has started successfully");
});
