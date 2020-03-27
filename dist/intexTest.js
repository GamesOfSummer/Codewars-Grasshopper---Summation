"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var intex_1 = require("./intex");
var assert_1 = require("assert");
describe('Fxn', function () {
    describe('#isDivisible()', function () {
        it('Test.assertSimilar(isDivisible(3,3,4),false);', function () {
            assert_1.strict.equal(intex_1.isDivisible(3, 3, 4), false);
        });
        it('Test.assertSimilar(isDivisible(12,3,4),true);', function () {
            assert_1.strict.equal(intex_1.isDivisible(12, 3, 4), true);
        });
        it('Test.assertSimilar(isDivisible(8,3,4),false);', function () {
            assert_1.strict.equal(intex_1.isDivisible(8, 3, 4), false);
        });
        it('Test.assertSimilar(isDivisible(48,3,4),true);', function () {
            assert_1.strict.equal(intex_1.isDivisible(48, 3, 4), true);
        });
    });
});
//# sourceMappingURL=intexTest.js.map