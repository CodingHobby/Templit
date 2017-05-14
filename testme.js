const Templit = require('./templit')

let tpl = new Templit('{{msg}}')

console.log(tpl.render({msg: 'Hi'}))