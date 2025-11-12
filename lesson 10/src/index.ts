import {DroneDelivery} from "./classes/drone-delivery";
import {CourierDelivery} from "./classes/courier-delivery";
import {RobotDelivery} from "./classes/robot-delivery";
import {Delivery} from "./abstractions/i-delivery";

function deliver(service : Delivery) {
    service.startDelivery();
    setTimeout(() => {
        service.completeDelivery();
    }, Math.floor(Math.random() * 10000));
}


deliver(new DroneDelivery(28119219));
deliver(new RobotDelivery(123151141123135435345));
deliver(new CourierDelivery('Steve Bubniak'));
