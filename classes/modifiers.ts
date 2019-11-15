// class modifiers 

//by default modifier is public
class ClassWithPublicProperty {
    public id: number;
    readonly name: string;
}

let publicAccess = new ClassWithPublicProperty();
publicAccess.id = 123;

console.log(publicAccess);

class ClassWithAuthomaticProperties {
    constructor(public id: number, private name: string) {

    }
}


let autoClass = new ClassWithAuthomaticProperties( 1, 'ClassName');


//no point of private setters/getters
class ClassWithProperties {
    private _id: number;
    private _name: string;
    private static _hobby: string;
    private _prop: string;

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    static checkClass() {
        console.log(this === ClassWithProperties);
    }

    // doesn't work with static
    // public get hobby(): string {
    //     return this._hobby;
    // }
    // public set hobby(value: string) {
    //     this._hobby = value;
    // }

    //this is weird and bad 
    static get hobby(): string {
        return this._hobby;
    }
    static set hobby(value: string) {
        this._hobby = value;
    }

    get prop(): string {
        return this._prop;
    }
    set prop(prop: string) {
        this._prop = prop;
    }

    // static returnHobby(): string {
    //     return _hobby;
    // }
}

let classWithProps = new ClassWithProperties();
classWithProps.prop = '5';
classWithProps.id = 5;

//static
//we can use it without the need to instantiate, but why assign it like this????
// ClassWithProperties._hobby = 'wtf';

//static with hermetization ??
ClassWithProperties.hobby = 'wtf';

console.log(ClassWithProperties.hobby);

ClassWithProperties.checkClass();