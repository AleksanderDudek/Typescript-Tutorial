//INTERFACE - tells what to implement, but not how to do it (like a manager.. you tell me)
//general function that will always work, since we assume that IPrint is able to print
function printClass(a) {
    a.print();
}
class ClassA {
    print() {
        console.log('ClassA => print() \n');
    }
}
class ClassB {
    print() {
        console.log('ClassB => print() \n');
    }
}
//multiple interfaces
class ObjectablePrintableClass {
    print() {
        console.log('OPClass => print()');
    }
    set() {
        console.log('OPClass => set()');
    }
    get() {
        console.log('OPClass => get()');
    }
}
//class implementing interface that extends multiple interfaces
class LolableClass {
    print() {
        console.log('OPClass => print()');
    }
    set() {
        console.log('OPClass => set()');
    }
    get() {
        console.log('OPClass => get()');
    }
    lol() {
        console.log('OPClass => lol()');
    }
}
let lolableObj = new LolableClass();
lolableObj.print();
