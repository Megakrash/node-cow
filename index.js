const information = require('./information');

var cowsay = require("cowsay");

console.log(cowsay.say({
    text: information.objet.name + " " + information.objet.campus,
    e: "oO",
    T: "U "
}));


