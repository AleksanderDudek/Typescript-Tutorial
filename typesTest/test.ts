let stringT : string = 'lol';

let numberT : number = 123;

//wasn't able to create simple array ???
let arrayT: Array<any> = [ 123, 'nope', () => { return 0; }];

let boolT: boolean = true;

let arrNumT: number[] = [ 12,123 ,123123 ,1231, 32 ];

//like object but array but what??
let tupleT: [string, number, boolean] = ['ok', 123, true];

//by default there are values assigned
enum DoorStatus {
    Open,
    Closed,
    Ajar
}

//in case of
function log(val: DoorStatus) {
    console.log(val)
}