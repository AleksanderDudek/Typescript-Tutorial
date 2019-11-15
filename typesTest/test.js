let stringT = 'lol';
let numberT = 123;
//wasn't able to create simple array ???
let arrayT = [123, 'nope', () => { return 0; }];
let boolT = true;
let arrNumT = [12, 123, 123123, 1231, 32];
//like object but array but what??
let tupleT = ['ok', 123, true];
//by default there are values assigned
var DoorStatus;
(function (DoorStatus) {
    DoorStatus[DoorStatus["Open"] = 0] = "Open";
    DoorStatus[DoorStatus["Closed"] = 1] = "Closed";
    DoorStatus[DoorStatus["Ajar"] = 2] = "Ajar";
})(DoorStatus || (DoorStatus = {}));
//in case of
function log(val) {
    console.log(val);
}
