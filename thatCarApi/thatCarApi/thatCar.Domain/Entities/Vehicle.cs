using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using thatCar.Domain.Entities.Enums;
using thatCar.Domain.Entities.Mongo;

namespace thatCar.Domain.Entities
{
    public class Vehicle: Document
    {
        public string Make { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }
        public decimal Price { get; set; }
        public string VIN { get; set; } 
        public string Color { get; set; }
        public EngineType EngineType { get; set; }
        public int Mileage { get; set; }
        public bool NewOrUsed { get; set; }
        public FuelType FuelType { get; set; }
        public BodyType BodyType { get; set; }
    }
}
