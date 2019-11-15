//INTERFACE - tells what to implement, but not how to do it (like a manager.. you tell me)


//is it correct JS inheritance meaning inheritance by composition?
interface ILoled extends IObject, IPrint {
    lol();
}

//just signatures that allows us to assume object has functionality
interface IPrint {
    print();
}

interface IObject {
    set();
    get();
}

//general function that will always work, since we assume that IPrint is able to print
function printClass(a: IPrint) {
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
class ObjectablePrintableClass implements IObject, IPrint {
    print() {
        console.log('OPClass => print()')
    }
    set() {
        console.log('OPClass => set()')
    }
    get() {
        console.log('OPClass => get()')
    }
}

//class implementing interface that extends multiple interfaces
class LolableClass implements ILoled {
    print() {
        console.log('OPClass => print()')
    }
    set() {
        console.log('OPClass => set()')
    }
    get() {
        console.log('OPClass => get()')
    }
    lol() {
        console.log('OPClass => lol()')
    }
}

let lolableObj = new LolableClass();
lolableObj.print();