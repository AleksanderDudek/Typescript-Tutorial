interface IBase {
    id: number | string;
}

interface IDerivedFromBase extends IBase {
    name: string;
}

class InterfaceInheritance implements IDerivedFromBase {
    id: string;
    name: string;
}