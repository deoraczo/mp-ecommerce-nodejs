require('dotenv').config();

var express = require('express');
var exphbs  = require('express-handlebars');
var port = process.env.PORT || 3000

var app = express();

const routes = require('./src/routes');


const hbs = exphbs.create({
    defaultLayout: "guest",
    extname: ".hbs",
    helpers: {
      section: function(name, options) { 
        if (!this._sections) this._sections = {};
          this._sections[name] = options.fn(this); 
          return null;
        }
    }    
  });
 
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.use(express.static('assets'));
 
app.use('/assets', express.static(__dirname + '/assets'));

app.use('/', routes)

app.listen(port, () => {
    console.log('Server running on PORT: ' + port);
});