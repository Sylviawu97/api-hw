const express = require('express');
const app = express();

// Array of cars
const cars = [
    {
      make: 'Toyota',
      model: 'Camry',
      year: 2021,
      color: 'Silver'
    },
    {
      make: 'Honda',
      model: 'Civic',
      year: 2020,
      color: 'Red'
    },
    {
      make: 'Ford',
      model: 'Mustang',
      year: 2019,
      color: 'Blue'
    },
    {
      make: 'Chevrolet',
      model: 'Corvette',
      year: 2022,
      color: 'Yellow'
    },
    {
      make: 'BMW',
      model: 'X5',
      year: 2021,
      color: 'Black'
    },
    {
      make: 'Audi',
      model: 'A4',
      year: 2020,
      color: 'White'
    },
    {
      make: 'Mercedes-Benz',
      model: 'C-Class',
      year: 2021,
      color: 'Gray'
    },
    {
      make: 'Lamborghini',
      model: 'Huracan',
      year: 2022,
      color: 'Orange'
    },
    {
      make: 'Ferrari',
      model: '488 GTB',
      year: 2020,
      color: 'Red'
    },
    {
      make: 'Porsche',
      model: '911',
      year: 2021,
      color: 'Silver'
    },
    {
      make: 'Jaguar',
      model: 'F-Type',
      year: 2021,
      color: 'Blue'
    },
    {
      make: 'Lexus',
      model: 'RX',
      year: 2020,
      color: 'Black'
    },
    {
      make: 'Tesla',
      model: 'Model S',
      year: 2022,
      color: 'White'
    },
    {
      make: 'Maserati',
      model: 'GranTurismo',
      year: 2021,
      color: 'Red'
    },
    {
      make: 'Volkswagen',
      model: 'Golf',
      year: 2021,
      color: 'Gray'
    }
  ];
// Route 1: Get the whole array
app.get('/', (req, res) => {
  res.json(cars);
});

// Route 2: Get a random car from the array
app.get('/random', (req, res) => {
  const randomCar = cars[Math.floor(Math.random() * cars.length)];
  res.json(randomCar);
});

// Route 3: Get a car by name
app.get('/search/:string', (req, res) => {
  const searchString = req.params.string.toLowerCase();
  const car = cars.find((c) => c.make.toLowerCase() === searchString || c.model.toLowerCase() === searchString);
  if (car) {
    res.json(car);
  } else {
    res.status(404).json({ error: 'Car not found' });
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
