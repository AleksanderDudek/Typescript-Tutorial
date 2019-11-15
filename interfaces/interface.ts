interface IComplexType {
    id: number;
    name: string;
    isPerson?: boolean;
}

let complexType : IComplexType = {id: 1, name: 'teks'};

interface Point {
    readonly x: number;
    y: number;
}

let p1: Point = { x: 1, y: 2};

//readonly doesn't allow that
// p1.x = 4;

