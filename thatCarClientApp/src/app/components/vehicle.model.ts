// FuelType Enum
export enum FuelType {
  Petrol = 'Petrol',
  Diesel = 'Diesel',
  Electric = 'Electric',
  Hybrid = 'Hybrid',
}

// Transmission Enum
export enum Transmission {
  Manual = 'Manual',
  Automatic = 'Automatic',
  SemiAutomatic = 'Semi-Automatic',
}

export enum BodyType {
  Sedan = 'Sedan',
  SUV = 'SUV',
  Coupe = 'Coupe',
  Hatchback = 'Hatchback',
  Pickup = 'Pickup',
  Convertible = 'Convertible',
  Van = 'Van',
}

export enum EngineType {
  V4 = 'V4',
  V6 = 'V6',
  V8 = 'V8',
  Electric = 'Electric',
  Hybrid = 'Hybrid',
}

// TruckType Enum
export enum TruckType {
  Pickup = 'Pickup',
  Flatbed = 'Flatbed',
  DumpTruck = 'DumpTruck',
}

export class Vehicle {
  make: string;
  model: string;
  year: number;
  price: number;
  vin: string;
  color: string;
  engineType: EngineType;
  mileage: number;
  newOrUsed: boolean; // true for new, false for used
  fuelType: FuelType;
  bodyType: BodyType;
  transmission: Transmission;
  location: string;

  constructor(
    make: string,
    model: string,
    year: number,
    price: number,
    vin: string,
    color: string,
    engineType: EngineType,
    mileage: number,
    newOrUsed: boolean,
    fuelType: FuelType,
    bodyType: BodyType,
    transmission: Transmission,
    location: string
  ) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.price = price;
    this.vin = vin;
    this.color = color;
    this.engineType = engineType;
    this.mileage = mileage;
    this.newOrUsed = newOrUsed;
    this.fuelType = fuelType;
    this.bodyType = bodyType;
    this.transmission = transmission;
    this.location = location;
  }
}

export class Car extends Vehicle {
  numDoors: number;
  hasSunroof: boolean;

  constructor(
    make: string,
    model: string,
    year: number,
    price: number,
    vin: string,
    color: string,
    engineType: EngineType,
    mileage: number,
    newOrUsed: boolean,
    fuelType: FuelType,
    bodyType: BodyType,
    numDoors: number,
    hasSunroof: boolean,
    transmission: Transmission,
    location: string
  ) {
    super(
      make,
      model,
      year,
      price,
      vin,
      color,
      engineType,
      mileage,
      newOrUsed,
      fuelType,
      bodyType,
      transmission,
      location
    );
    this.numDoors = numDoors;
    this.hasSunroof = hasSunroof;
  }
}

export class Bike extends Vehicle {
  hasSideCar: boolean;
  bikeType: string; // e.g., Cruiser, Sport, Touring

  constructor(
    make: string,
    model: string,
    year: number,
    price: number,
    vin: string,
    color: string,
    engineType: EngineType,
    mileage: number,
    newOrUsed: boolean,
    fuelType: FuelType,
    bodyType: BodyType,
    hasSideCar: boolean,
    bikeType: string,
    transmission: Transmission,
    location: string
  ) {
    super(
      make,
      model,
      year,
      price,
      vin,
      color,
      engineType,
      mileage,
      newOrUsed,
      fuelType,
      bodyType,
      transmission,
      location
    );
    this.hasSideCar = hasSideCar;
    this.bikeType = bikeType;
  }
}

export class Boat extends Vehicle {
  boatType: string; // e.g., Sailboat, Motorboat, Yacht
  length: number; // length in feet

  constructor(
    make: string,
    model: string,
    year: number,
    price: number,
    vin: string,
    color: string,
    engineType: EngineType,
    mileage: number,
    newOrUsed: boolean,
    fuelType: FuelType,
    bodyType: BodyType,
    boatType: string,
    length: number,
    transmission: Transmission,
    location: string
  ) {
    super(
      make,
      model,
      year,
      price,
      vin,
      color,
      engineType,
      mileage,
      newOrUsed,
      fuelType,
      bodyType,
      transmission,
      location
    );
    this.boatType = boatType;
    this.length = length;
  }
}

export class Truck extends Vehicle {
  truckType: string; // e.g., Pickup, Lorry, Dump Truck
  cargoCapacity: number; // cargo capacity in tons

  constructor(
    make: string,
    model: string,
    year: number,
    price: number,
    vin: string,
    color: string,
    engineType: EngineType,
    mileage: number,
    newOrUsed: boolean,
    fuelType: FuelType,
    bodyType: BodyType,
    truckType: string,
    cargoCapacity: number,
    transmission: Transmission,
    location: string
  ) {
    super(
      make,
      model,
      year,
      price,
      vin,
      color,
      engineType,
      mileage,
      newOrUsed,
      fuelType,
      bodyType,
      transmission,
      location
    );
    this.truckType = truckType;
    this.cargoCapacity = cargoCapacity;
  }
}
