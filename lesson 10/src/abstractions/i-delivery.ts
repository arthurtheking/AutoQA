export interface Delivery {
    id : number;
    destination : string | unknown;
    status : string;
    order : string | unknown;

    startDelivery() : void;
    completeDelivery() : void;
}