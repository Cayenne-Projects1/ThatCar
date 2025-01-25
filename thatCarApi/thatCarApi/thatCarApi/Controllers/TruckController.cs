using Microsoft.AspNetCore.Mvc;
using thatCar.Application.Interfaces;
using thatCar.Domain.Entities;

namespace thatCarApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TruckController : ControllerBase
    {
        private readonly ITruckService _truckService;

        public TruckController(ITruckService truckService)
        {
            _truckService = truckService;
        }

        [HttpPost]
        public async Task<IActionResult> Create(Truck truck)
        {
            await _truckService.CreateAsync(truck);
            return CreatedAtAction(nameof(GetOne), new { id = truck.Id }, truck);
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var trucks = await _truckService.GetAllAsync();
            return Ok(trucks);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetOne(string id)
        {
            var truck = await _truckService.GetOneAsync(id);
            if (truck == null) return NotFound();
            return Ok(truck);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(string id, Truck truck)
        {
            await _truckService.UpdateAsync(id, truck);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            await _truckService.DeleteAsync(id);
            return NoContent();
        }
    }

}
