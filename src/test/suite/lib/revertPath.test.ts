import * as assert from 'assert';
import revertPath from '../../../lib/revertPath';

// import * as myExtension from '../../extension';

suite('revertPath', () => {
	test('checking test', () => {
		assert.strictEqual(revertPath(""), 3);
	});
});
