# Templit

Templit is a simple, uncomplicated templating engine, which does not have any social cost, since its syntax is so similar to JavaScript, but yet it's so more expressive than pure JS! First of all, you can create templates from strings like this:

```javascript
const tmp = new Templit('<p>{{this.msg}}</p>')
```

And then to return the "rendered" version of it, you just call the render method:

```javascript
tmp.render({msg: 'Hello, World'}) // <-- returns <p>Hello, World</p>
```

But you can also do more complex operations. For example:

```javascript
const tmpString = `{{if(this.someBool) { }}<p>{{this.msg} </p> {{ } else { }} <p> No can-doeseville, baby-doll! </p>`
const tmp = new Templit(tmpString)
tmp.render({someBool: true, msg: 'Can-doesville, baby-doll!'}) // <-- Cam-doesville, baby-doll!
```