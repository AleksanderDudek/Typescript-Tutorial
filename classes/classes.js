class SimpleClass {
    print() {
        console.log('SimpleClass -> print() called \n');
        console.log(`Id: ${this.id} \n`);
    }
    setId(id) {
        this.id = id;
    }
    getId() {
        return this.id;
    }
}
//THIS keyword 
let mySimpleClass = new SimpleClass();
// static code analysis error since id is private property
// mySimpleClass.id = 32123;
mySimpleClass.setId(123123123);
mySimpleClass.print();
console.log(mySimpleClass.getId());
mySimpleClass.setId(123);
console.log(mySimpleClass.getId());
