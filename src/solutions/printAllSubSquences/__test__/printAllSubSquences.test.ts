import { getSubs } from "../printAllSubSquences";

describe('getSubs', () => {

	it('get subs', () => {
		const str = 'abc'

		expect(getSubs(str).toString()).toBe('c,b,bc,a,ac,ab,abc')
	})
})
