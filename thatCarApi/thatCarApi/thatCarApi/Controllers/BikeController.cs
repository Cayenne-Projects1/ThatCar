using Microsoft.AspNetCore.Mvc;
using thatCar.Application.Interfaces;
using thatCar.Domain.Entities;

namespace thatCarApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BikeController : ControllerBase
    {
        private readonly IBikeService _bikeService;

        public BikeController(IBikeService bikeService)
        {
            _bikeService = bikeService;
        }

        [HttpPost]
        public async Task<IActionResult> Create(Bike bike)
        {
            await _bikeService.CreateAsync(bike);
            return CreatedAtAction(nameof(GetOne), new { id = bike.Id }, bike);
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var bikes = await _bikeService.GetAllAsync();
            return Ok(bikes);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetOne(string id)
        {
            var bike = await _bikeService.GetOneAsync(id);
            if (bike == null) return NotFound();
            return Ok(bike);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(string id, Bike bike)
        {
            await _bikeService.UpdateAsync(id, bike);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            await _bikeService.DeleteAsync(id);
            return NoContent();
        }
    }

}
