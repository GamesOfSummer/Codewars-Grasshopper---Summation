import { isDivisible } from './intex';
import { strict as assert } from 'assert';



describe('Fxn', function () {
    describe('#isDivisible()', function () {
        it('Test.assertSimilar(isDivisible(3,3,4),false);', function () {
            assert.equal(isDivisible(3, 3, 4), false);
        });


        it('Test.assertSimilar(isDivisible(12,3,4),true);', function () {
            assert.equal(isDivisible(12, 3, 4), true);
        });

        it('Test.assertSimilar(isDivisible(8,3,4),false);', function () {
            assert.equal(isDivisible(8, 3, 4), false);
        });

        it('Test.assertSimilar(isDivisible(48,3,4),true);', function () {
            assert.equal(isDivisible(48, 3, 4), true);
        });
    });
});


