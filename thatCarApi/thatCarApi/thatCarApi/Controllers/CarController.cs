using Microsoft.AspNetCore.Mvc;
using thatCar.Application.Interfaces;
using thatCar.Domain.Entities;

namespace thatCarApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CarController : ControllerBase
    {
        private readonly ICarService _carService;

        public CarController(ICarService carService)
        {
            _carService = carService;
        }

        [HttpPost]
        public async Task<IActionResult> Create(Car car)
        {
            await _carService.CreateAsync(car);
            return CreatedAtAction(nameof(GetOne), new { id = car.Id }, car);
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var cars = await _carService.GetAllAsync();
            return Ok(cars);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetOne(string id)
        {
            var car = await _carService.GetOneAsync(id);
            if (car == null) return NotFound();
            return Ok(car);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(string id, Car car)
        {
            await _carService.UpdateAsync(id, car);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            await _carService.DeleteAsync(id);
            return NoContent();
        }
    }

}
