var userSchema = require("../app/api/models/user")
var userRoute = require("../app/api/routes/user")
describe ("first test suite", function(){
    it ("2 should equal 2", function(){
        expect("2").toBe("2");
    });
    it ("1 should not equal 2", function(){
        expect("1").not.toBe("2");
    });
})
