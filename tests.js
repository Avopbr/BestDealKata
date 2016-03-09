QUnit.test("bestDeals", function(assert) {
	var result = bestDeals("1 for R3, 2 for R7, 3 for R10, 5 for R14.50.");
		assert.deepEqual(["1 for R3", "2 for R7", "3 for R10", "5 for R14.50."], result );
    });
 
    

Qunit.test("split out the quantity and the price;", function(assert) {
	 assert.equal(["1 for R3", "2 for R7", "3 for R10", "5 for R14.50."],);
     });

// Qunit.test("ind the cheapest deal;", function(assert) {
//     assert.equal((), "1 for R3", "");
//     });

// Qunit.test("find the most expensive deal;", function(assert) {
//     assert.equal((), "", "");
//     });

// Qunit.test("find the average price across all the deals.", function(assert) {
//     assert.equal((), "", "");
//     });