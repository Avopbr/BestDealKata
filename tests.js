QUnit.test("convert the string into an array (split out the quantity and the price);", function(assert) {
    // assert.equal(bestDeals(), "", []);
    assert.equal(bestDeals()("1 for R3, 2 for R7, 3 for R10, 5 for R14.50.",["1 for R3, 2 for R7, 3 for R10, 5 for R14.50."]);
    });

// Qunit.test("take an array as an input and calculate the Price Per Avo for each deal (make sure you use just two decimal points);", function(assert) {
// 	 assert.equal((""), "", "");
//      });

// Qunit.test("ind the cheapest deal;", function(assert) {
//     assert.equal((), "1 for R3", "");
//     });

// Qunit.test("find the most expensive deal;", function(assert) {
//     assert.equal((), "", "");
//     });

// Qunit.test("find the average price across all the deals.", function(assert) {
//     assert.equal((), "", "");
//     });