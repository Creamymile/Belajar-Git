// No 1 Employee Salary

class Employee {
  constructor(emp) {
    this.emp = emp;
    this.working_hours_per_day = 0;
  }

  addWorkingHours(hours) {
    this.working_hours_per_day += hours;
  }
  calculateSalary() {
    throw new Error("Reminder for implement method to subclass");
  }
}

class FullTimeEmployee extends Employee {
  calculateSalary() {
    if (this.working_hours_per_day > 6) {
      return this.working_hours_per_day * 75000;
    } else {
      return this.working_hours_per_day * 100000;
    }
  }
}

class PartTimeEmployee extends Employee {
  calculateSalary() {
    if (this.working_hours_per_day < 6) {
      return this.working_hours_per_day * 30000;
    } else {
      return this.working_hours_per_day * 50000;
    }
  }
}

const fullTimeEmp = new FullTimeEmployee("Leon");
fullTimeEmp.addWorkingHours(8);
console.log(
  `Leon : Full-Time Employee's : Salary IDR ${fullTimeEmp.calculateSalary()} Per day`
);

const partTimeEmp = new PartTimeEmployee("Rena");
partTimeEmp.addWorkingHours(4);
console.log(
  `Rena : Part-Time Employee's : Salary IDR ${partTimeEmp.calculateSalary()} Per day`
);
//

// No 2 Shooting Game

class Player {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.power = 10;
  }

  hit(power) {
    this.health -= power;
  }

  useItem(item) {
    if (item === "Health") {
      this.health += 10;
    } else if (item === "Power") {
      this.power += 10;
    }
  }

  showStatus() {
    console.log(
      `${this.name} (Health => ${this.health}, Power => ${this.power})`
    );
  }
}

class ShootingGame {
  constructor(player1Name, player2Name) {
    this.player1 = new Player(player1Name);
    this.player2 = new Player(player2Name);
  }

  getRandomItem() {
    const items = ["Health", "Power"];
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  }

  start() {
    while (this.player1.health > 0 && this.player2.health > 0) {
      console.log("Player Status Before Shooting:");
      this.player1.showStatus();
      this.player2.showStatus();

      const player1Item = this.getRandomItem();
      const player2Item = this.getRandomItem();

      this.player1.useItem(player1Item);
      this.player2.useItem(player2Item);

      console.log("Player Status After Getting Items:");
      this.player1.showStatus();
      this.player2.showStatus();

      console.log("Players Shooting");

      if (Math.random() < 0.5) {
        this.player2.hit(this.player1.power);
        console.log(`${this.player1.name} shoots ${this.player2.name}`);
      } else {
        this.player1.hit(this.player2.power);
        console.log(`${this.player2.name} shoots ${this.player1.name}`);
      }

      console.log("Player Status After Shooting:");
      this.player1.showStatus();
      this.player2.showStatus();
    }

    if (this.player1.health < 0) {
      console.log(`${this.player2.name} wins!`);
    } else {
      console.log(`${this.player1.name} wins!`);
    }
  }
}

const shootingGame = new ShootingGame("Player A", "Player B");
shootingGame.start();

// Selesai
