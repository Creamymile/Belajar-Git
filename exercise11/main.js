const Queue = require("./Queue");

const q1 = new Queue();

q1.addOrder("Latte");
q1.addOrder("Cappuccino");
q1.addOrder("Americano");
q1.addOrder("Flat White");

console.log(q1.queueList);

q1.run();
