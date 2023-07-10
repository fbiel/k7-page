import { describe, expect, it } from 'vitest';
import { de, en } from './i18n';

/**
 * Tests if the keys of the master object are also in the test object.
 *
 * @param masterObj - The master object to compare to.
 * @param testObj - The object to compare.
 * @param keyName - The name of the locale or the key.
 */
function compareObjects(
	masterObj: Record<string, unknown>,
	testObj: Record<string, unknown>,
	keyName: string
) {
	for (const key in masterObj) {
		it(`should have the key ${key} in locale ${keyName}`, () => {
			expect(key in testObj).toBe(true);
		});

		if (!(key in testObj)) {
			continue;
		}
		if (typeof masterObj[key] === 'object' && masterObj[key] !== null) {
			compareObjects(
				masterObj[key] as Record<string, unknown>,
				testObj[key] as Record<string, unknown>,
				keyName + '.' + key
			);
		}
	}
}

/**
 * Test if all locales have the same keys.
 *
 * This test is to ensure that all locales have the same keys. If a key is missing in one locale, the test will fail.
 * The test also includes nested keys.
 */
describe('testing locales', () => {
	compareObjects(de, en, 'en');
});
