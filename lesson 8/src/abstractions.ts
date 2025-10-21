export abstract class Movable {
    readonly brand : string;
    readonly model : string;
    readonly year : number;
    readonly price : number;
    public isAvailable : boolean;

    constructor(brand : string, model : string, year : number, price : number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.price = price;
        this.isAvailable = false;
    }


    public abstract getInfo() : void;

    public abstract makeAvailable() : void;

    public abstract makeUnAvailable() : void;
}


export class Vehicle extends Movable {
    
    charge : string;
    type : string;
    
    constructor(brand : string, model : string, year : number, price : number, charge : string, type : string) {
        
        super(brand, model, year, price);
        this.charge = `${charge}%`;
        this.type = type;
    }

    public checkIfCharged() {
        this.charge = `${Math.floor(Math.random() * 100) + 1}%`
        console.log(`This vehicle is charged at ${this.charge}`)

    }

    public getVehicleType() {
        console.log(`${this.brand} ${this.model} is a ${this.type}`)
    }

    public override getInfo() : void {
        console.log(`${this.brand} ${this.model} (${this.year}). Price: ${this.price}. Availability: ${this.isAvailable}`)
    }

    public override makeAvailable() : void {
        this.isAvailable = true;
        console.log(`Now "${this.brand}" is available to rent!`)
    }

    public override makeUnAvailable() : void {
        this.isAvailable = false;
        console.log(`Someone already rented this "${this.brand}"! Try another vehicle!`)
    }
}
