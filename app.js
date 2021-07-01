const express = require('express')
const app = express()

app.use(express.static('public'))

const port = process.env.PORT || 3000

// -=-=-=-=-=-=-=-=-=-=-=-=-=-= handlebars: start -=-=-=-=-=-=-=-=-=-=-=-=-=-=
const exphbs  = require('express-handlebars');

const hbs = exphbs.create({
  // Specify helpers which are only registered on this instance.
  helpers: {
      parseHelper: function(str) {
        return JSON.parse(str)
      }
  }
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//  [paht, handlebarsFile, title]
const pageConfig = [
  ['/', 'index.handlebars', {title: '首頁'}]
  ,['/elite', 'elite.handlebars', {title: 'Elite'}]
  ,['/contact', 'contact.handlebars', {title: 'Contact'}]
]

pageConfig.forEach((item)=>{
  const [path, viewPath, config] = item

  app.get(path, function (req, res) {
    res.render(viewPath,  { ...config })
  });
})
// -=-=-=-=-=-=-=-=-=-=-=-=-=-= handlebars: end -=-=-=-=-=-=-=-=-=-=-=-=-=-=

app.listen(port, function () {
  console.log(`Example app listening on port ${port}! \n http://localhost:${port}`)
})
