import { Delivery } from "../abstractions/i-delivery";
import { addresses, orders, statuses } from "../database/database";

export class CourierDelivery implements Delivery {
    public id : number;
    public destination : string | unknown;
    public status : string;
    public order : string;
    protected fullName : string;

    constructor(fullName : string) {
        this.id = this.setOrderId();
        this.destination = this.setAddress();
        this.status = statuses.notStarted;
        this.order = this.setOrderName();
        this.fullName = fullName;
    }

    public startDelivery() : string {

        this.status = statuses.start;
        this.displayFullStatus();
        return this.getFullStatus();
    };

    public completeDelivery() : string {
        this.status = statuses.finish;
        this.displayFullStatus();
        return this.getFullStatus();
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

    private getCourierName() : string {
        return this.fullName;
    }

    private getFullStatus() : string {
        return `\nOrder ${this.getOrderId()} 
        Pizza "${this.getOrderName()}" 
        Status: "${this.getStatus()}"
        Destination point: ${this.getAddress()}
        Courier Name: ${this.getCourierName()} \n`
    }

    public displayFullStatus() {
        if (process.env.NODE_ENV === "test") return;
        console.log(this.getFullStatus())
    }
}