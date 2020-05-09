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
    public class GameInfoController : ControllerBase
    {
       private GameInfoService service = new GameInfoService();

        private readonly ILogger<GameInfoController> _logger;

        public GameInfoController(ILogger<GameInfoController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<GameInfoModel> Get()
        {
           return service.getAll();
        }

        [HttpPost()]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public string PostTest([FromBody] object text)
        {
        // _logger.Log.Information(text.ToString());
            return "OK";
        }
    
    }
}
