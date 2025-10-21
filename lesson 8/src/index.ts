import {Movable, Vehicle} from "../src/abstractions"

const audi = new Vehicle('Audi', 'A5', 2013, 12000, "56%", "Car")

audi.checkIfCharged();
audi.getInfo();
audi.getVehicleType();
audi.makeAvailable();