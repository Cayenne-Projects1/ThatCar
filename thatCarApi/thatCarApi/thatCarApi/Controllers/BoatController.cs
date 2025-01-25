using Microsoft.AspNetCore.Mvc;
using thatCar.Application.Interfaces;
using thatCar.Domain.Entities;

namespace thatCarApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BoatController : ControllerBase
    {
        private readonly IBoatService _boatService;

        public BoatController(IBoatService boatService)
        {
            _boatService = boatService;
        }

        [HttpPost]
        public async Task<IActionResult> Create(Boat boat)
        {
            await _boatService.CreateAsync(boat);
            return CreatedAtAction(nameof(GetOne), new { id = boat.Id }, boat);
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var boats = await _boatService.GetAllAsync();
            return Ok(boats);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetOne(string id)
        {
            var boat = await _boatService.GetOneAsync(id);
            if (boat == null) return NotFound();
            return Ok(boat);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(string id, Boat boat)
        {
            await _boatService.UpdateAsync(id, boat);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            await _boatService.DeleteAsync(id);
            return NoContent();
        }
    }

}
