import {test} from 'ava'
import Templit from '../templit'

const tplString = '{{this.msg}}'
const tpl = new Templit(tplString)

test(t => {
	 t.deepEqual(tpl.render({msg: 'Hello, World'}), 'Hello, World')
})

test(t => {
	let templ = new Templit('{{ for var i = 0; i < 4; i++ { }}  hello {{ } }}')
	t.deepEqual(tpl.render(), ' hello  hello  hello  hello')
})