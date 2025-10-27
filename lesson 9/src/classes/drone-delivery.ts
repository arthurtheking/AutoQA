import { Delivery } from "../abstractions/i-delivery";
import { addresses, orders, statuses } from "../database/database";

export class DroneDelivery implements Delivery {
    public id : number;
    public destination : string | unknown;
    public status : string;
    public order : string;
    protected droneId : number;

    constructor(droneId : number) {
        this.id = this.setOrderId();
        this.destination = this.setAddress();
        this.status = statuses.notStarted;
        this.order = this.setOrderName();
        this.droneId = droneId;
    }

    public startDelivery() : void {

        this.status = statuses.start;
        console.log(`${this.getFullStatus()}`);
    };

    public completeDelivery() : void {
        this.status = statuses.finish;
        console.log(`${this.getFullStatus()}`);
    };

    private getAddress() : string | unknown {
        return this.destination;
    };

    private setAddress() : string | unknown {
        const addressValues = Object.values(addresses);
            if (addressValues.length === 0) return undefined;
            const randomDestination = addressValues[Math.floor(Math.random() * addressValues.length)];
        return randomDestination.toString();
    }

    private getStatus() : string {
        return this.status;
    }

    private getOrderId() : number {
        return this.id;
    }

    private setOrderId() : number {
        return Math.floor(Math.random() * 1000000);
    }

    private getOrderName() : string {
        return this.order
    }

    private setOrderName() : string {
        const ordersValues = Object.values(orders);
        const randomOrder = ordersValues[Math.floor(Math.random() * ordersValues.length)];
        
        return randomOrder.toString();
    }

    private getDroneId() : number {
        return this.droneId;
    }

    private getFullStatus() : string {
        return `\nOrder ${this.getOrderId()} 
        Pizza "${this.getOrderName()}" 
        Status: "${this.getStatus()}"
        Destination point: ${this.getAddress()}
        Drone ID: #${this.getDroneId()} \n`
    }
}