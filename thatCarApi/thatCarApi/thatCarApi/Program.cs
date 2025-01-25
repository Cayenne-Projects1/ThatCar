using Microsoft.Extensions.Options;
using thatCar.Application.Interfaces;
using thatCar.Application.Services;
using thatCar.Domain.Entities;
using thatCar.Domain.Entities.Mongo;
using thatCar.Infrastructure.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddSingleton<IMongoDbSettings>(sp => sp.GetRequiredService<IOptions<MongoDbSettings>>().Value);

builder.Services.AddScoped(typeof(IMongoRepository<>), typeof(MongoRepository<>));
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<ICarService, CarService>();
builder.Services.AddScoped<IBikeService, BikeService>();
builder.Services.AddScoped<IBoatService, BoatService>();
builder.Services.AddScoped<ITruckService, TruckService>();


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddCors(options =>
{
  options.AddPolicy("*",
      builder =>
      {
        builder.AllowAnyOrigin()
                 .AllowAnyMethod()
                 .AllowAnyHeader();
      });
});

var dbConfigSection = builder.Configuration.GetSection("DatabaseSettings");
builder.Services.Configure<MongoDbSettings>(dbConfigSection);


var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseCors("*");
app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
