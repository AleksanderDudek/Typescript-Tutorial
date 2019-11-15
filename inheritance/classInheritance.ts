class BaseClass implements IBase {
    id: number;
}

class DerivedFromBase extends BaseClass implements IDerivedFromBase {
    name: string;
}

//level 0
class BaseClassWithConstructor {
    private id: number;
    constructor(_id:number) {
        this.id = _id;
    }
}

//level 1
class DerivedClassWithConstructor extends BaseClassWithConstructor {
    private name: string;
    constructor(_id:number, _name: string) {
        super(_id);
        this.name = _name;
    }
}

//level 2
class DerivedFromDerivedWithCtor extends DerivedClassWithConstructor {
    private prop: string;
    constructor(_prop:string, _id: number, _name:string) {
        super(_id, _name);
        this.prop = _prop;
    }
}

//super() goes one level up in inheritance, but I read it is not good practice to do horizontal inheritance
//in JS, we rather do 'vertical' meaning we 'inherit' class by composition (extending)


//protected

class ClassUsingProtected {
    //not accessible in child class
    protected id: number;

    public getId() {
        return this.id;
    }
}

class ClassDerivedFromProtected extends ClassUsingProtected {
    constructor() {
        super();
        this.id = 0;
    }
}

let derivedFromProtected = new ClassDerivedFromProtected();
//not allowed since it is protected property 
// derivedFromProtected.id = 1;


//abstracts
//similar to interfaces but difference is that they can have opinionated implementation 
//it is used to share implementation along similar classes

abstract class AbstractEmployee {
    public id: number;
    public name: string;
    //abstract function means that any class deriving from this one have to have implementation for this method
    abstract getDetails(): string;
    public printDetails() {
        //this will most likely print object
        console.log(this.getDetails());
    }
}

//you have to EXTEND classes that are ABSTRACT

//needs to implement get 
class NewEmployee extends AbstractEmployee {
    getDetails(): string {
        return `id: ${this.id}, name: ${this.name}`;
    }
}

class NewManager extends NewEmployee {
    public ManagedEmployees: NewEmployee[];
    getDetails(): string { 
        //this usage of super gets all ancestors methods... interesting - is it because of abstract?
        return super.getDetails() + `, Employee Count ${this.ManagedEmployees.length}`;
    }

}

let employee = new NewEmployee();
employee.id = 123;
employee.name = 'Waaat';
employee.printDetails();

let manager = new NewManager();
 manager.id = 321;
 manager.name = 'oooo';
 manager.ManagedEmployees = [ employee ];
 manager.printDetails();