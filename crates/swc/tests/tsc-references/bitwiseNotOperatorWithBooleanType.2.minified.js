//// [bitwiseNotOperatorWithBooleanType.ts]
// ~ operator on boolean type
import { _ as _class_call_check } from "@swc/helpers/_/_class_call_check";
var M, A = function() {
    function A() {
        _class_call_check(this, A);
    }
    return A.foo = function() {
        return !1;
    }, A;
}();
M || (M = {});
var objA = new A();
objA.a, M.n, A.foo(), objA.a, M.n;
