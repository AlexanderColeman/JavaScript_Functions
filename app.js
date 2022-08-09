console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

CountOdds(-100);

function CountOdds(count) {
  if (count < 0) {
    for (let i = 0; i > count; i--) {
      if (i % 2 !== 0) {
        console.log(i);
      }
    }
  }
  for (let i = 1; i < count; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

IsLegal(16);

function IsLegal(age) {
  const aboveSixteen = "You can drive";
  const belowSixteen = "Sorry, but you need to wait until you're 16.";

  if (age < 16) {
    console.log(belowSixteen);
  } else if (age >= 16) {
    console.log(aboveSixteen);
  } else {
    console.log("invalid input");
  }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

Quadrant(-1, 6);

function Quadrant(x, y) {
  if (x === 0 && y === 0) {
    console.log(`(${x},${y}) is in the center`);
  } else if (x === 0) {
    console.log(`(${x},${y}) is on the x axis`);
  } else if (y === 0) {
    console.log(`(${x},${y}) is on the y axis`);
  } else if (x > 0 && y > 0) {
    console.log(`(${x},${y}) is in quadrant 1`);
  } else if (x > 0 && y < 0) {
    console.log(`(${x},${y}) is in quadrant 2`);
  } else if (x < 0 && y < 0) {
    console.log(`(${x},${y}) is in quadrant 3`);
  } else if (x < 0 && y > 0) {
    console.log(`(${x},${y}) is in quadrant 4`);
  }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
TriangleType(5, 2, 3);

function TriangleType(side1, side2, side3) {
  if (side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2) {
    if (side1 === side2 && side2 === side3 && side3 === side1) {
      console.log("Traingle is equilateral");
    } else if (
      (side1 !== side2 && side2 === side3) ||
      (side1 === side2 && side2 !== side3) ||
      (side1 === side3 && side2 !== side3)
    ) {
      console.log("Traingle is isosceles");
    } else {
      console.log("Traingle is Scalene");
    }
  } else {
    console.log("Not a valid traingle");
  }
}
