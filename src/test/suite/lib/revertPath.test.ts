import * as assert from 'assert';
import revertPath from '../../../lib/revertPath';

// import * as myExtension from '../../extension';

describe('revertPath', () => {
	context('when path doesnt match any pattern', () => {
		it('returns empty string', () => {
			const path = "/some/unexpeted/path.rb";

			assert.strictEqual(revertPath(path), '');
		});
	});

	it('checking test', () => {
		const path = "/Users/bernyg/projects/dummy/app/services/charity/money.rb";
		const expectedPath = "/Users/bernyg/projects/dummy/spec/services/charity/money_spec.rb";

		assert.strictEqual(revertPath(path), expectedPath);
	});
});
