using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
       private WeatherForecastService service = new WeatherForecastService();

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<WeatherForecastModel> Get()
        {
           return service.getAll();
        }

        [HttpPost()]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public string PostTest([FromBody] object text)
        {
        // _logger.Log.Information(text.ToString());
            return text.ToString();
        }
    
    }
}
