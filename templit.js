class Templit {
	constructor(templateString) {
		this.tpl = templateString
	}

	render(data) {
		// We actually want to use a copy of this.tpl, since we want a templit to be reusable
		let out = this.tpl
		// {{ introduces a variable, and }} closes the tag
		const reVar = /{{([^%>]+)?}}/g,
			reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g

		let	code = 'var r=[];\n',
			cursor = 0, 
			vars;
		
		var add = function (line, js) {
			// Put escapes in the template string
			js
				// In the case it actually is JavaScript, we do not want to have quotes around a variable name
				// But at the same time we don't want loops, ifs and stuff to be treated as a variable, so we need to make a distinction between a var and an expression
			 ? code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n'
			 : code += 'r.push("' + line.replace(/"/g, '\\"') + '");\n';
		}

		while (vars = reVar.exec(out)) {
			// Add the new line to the function body
			add(out.slice(cursor, vars.index));
			add(vars[1], true); // <-- this is actual javascript!
			// Shift the cursor
			cursor = vars.index + vars[0].length;
		}

		add(out.substr(cursor, out.length - cursor));
		code += 'return r.join("");'; // <-- return the result
		console.log(code);
		// This sets a scope for the data, meaning we can acces data.prop with this.prop in the template
		return new Function(code.replace(/[\r\t\n]/g, '')).apply(data);
	}
}
module.exports = Templit