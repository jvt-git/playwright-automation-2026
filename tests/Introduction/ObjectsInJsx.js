const car = {
    manufacturer: "KIA",
    year: 2026,
    color: "Silver",
    starts: function () {
        console.log("Car started");
    }
}

// Dot notation
console.log(car.manufacturer);
// Bracket notation
console.log(car["color"]);
car.color = "RED";
car["year"] = 2010;
console.log(car);
car.starts();
