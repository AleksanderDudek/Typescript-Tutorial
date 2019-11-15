class ClassWithConstructor {
    id: number;
    name: string;

    //constructor/method overload could be done by multiple, optional params??
    constructor(_id: number, _name: string) {
        this.id = _id;
        this.name = _name;
    }
}

