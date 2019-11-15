// class modifiers 
//by default modifier is public
class ClassWithPublicProperty {
}
let publicAccess = new ClassWithPublicProperty();
publicAccess.id = 123;
console.log(publicAccess);
class ClassWithAuthomaticProperties {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
let autoClass = new ClassWithAuthomaticProperties(1, 'ClassName');
//no point of private setters/getters
class ClassWithProperties {
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
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
    static get hobby() {
        return this._hobby;
    }
    static set hobby(value) {
        this._hobby = value;
    }
    get prop() {
        return this._prop;
    }
    set prop(prop) {
        this._prop = prop;
    }
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
