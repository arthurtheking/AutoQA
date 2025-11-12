import { expect } from "chai";
import { CourierDelivery } from "../src/classes/courier-delivery";
import { DroneDelivery } from "../src/classes/drone-delivery";
import { RobotDelivery } from "../src/classes/robot-delivery";


const testCourierDelivery = new CourierDelivery("Test Courier");
const testDroneDelivery = new DroneDelivery(12345678);
const testRobotDelivery = new RobotDelivery(87654321);

describe("Starting Courier/Drone/Robot Delivery Test Set", () => {

  describe("Unit 1: Courier Delivery Class methods functionality verification:", ()=> {
    it("Courier startDelivery() verification", () => {
    expect(testCourierDelivery.startDelivery()).to.be.not.empty;
  });

  it("Courier completeDelivery() verification", () => {
    expect(testCourierDelivery.completeDelivery()).to.be.not.empty;
  });
  })


  describe("Unit 2: Drone Delivery Class methods functionality verification:", ()=> {
    it("Drone startDelivery() verification", () => {
    expect(testDroneDelivery.startDelivery()).to.be.not.empty;
  });

  it("Drone completeDelivery() verification", () => {
    expect(testDroneDelivery.completeDelivery()).to.be.not.empty;
  });
  })


  describe("Unit 3: Robot Delivery Class methods functionality verification:", ()=> {
    it("Robot startDelivery() verification", () => {
    expect(testRobotDelivery.startDelivery()).to.be.not.empty;
  });

  it("Robot completeDelivery() verification", () => {
    expect(testRobotDelivery.completeDelivery()).to.be.not.empty;
  });
  })


  after(() => {
    console.log("✅ All Delivery Class autotests completed!")
  })
})








// const users: string[] = [];

// function addUser(name: string) {
//   users.push(name);
// }

// function clearUsers() {
//   users.length = 0;
// }

// describe("Initial Test Set", () => {
//   before(() => {
//     console.log("✅ Verifying that user array is empty before all tests");
//     expect(users).to.be.empty;
//   });

//   beforeEach(() => {
//     // если какой-то тест вдруг оставит мусор, это защитит от ошибок
//     clearUsers();
//   });

//   it("should add a new name into the array", () => {
//     addUser("Arthur");
//     expect(users).to.include("Arthur");
//     expect(users.length).to.equal(1);
//   });

//   it("should clear the array to default", () => {
//     addUser("Max");
//     clearUsers();
//     expect(users).to.be.empty;
//   });

//   after(() => {
//     console.log("🧹 Users array was cleaned after all tests");
//     clearUsers();
//   });
// });


