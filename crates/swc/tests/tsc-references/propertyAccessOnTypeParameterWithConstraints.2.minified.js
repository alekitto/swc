//// [propertyAccessOnTypeParameterWithConstraints.ts]
// generic types should behave as if they have properties of their constraint type
// no errors expected 
var i, a;
import { _ as _class_call_check } from "@swc/helpers/_/_class_call_check";
new (function() {
    function C() {
        _class_call_check(this, C);
    }
    return C.prototype.f = function() {
        var x; // number
        return x.getDate() + x.getDate();
    }, C;
}())().f(), i.foo.getDate(), i.foo.getDate(), a().getDate(), a().getDate(), ({
    foo: function(x) {
        return x.getDate() + x.getDate();
    }
}).foo(new Date());
