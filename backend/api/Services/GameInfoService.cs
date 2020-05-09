using System;
using System.Collections.Generic;
using System.Linq;
using DataScraper;

namespace api
{

    public class GameInfoService
    {
        private ScraperBase scraper = new ScraperBase();

        public IEnumerable<GameInfoModel> getAll()
        {
            string[] GameTitles = scraper.GetTitles();
            return Enumerable.Range(0, GameTitles.Length-1).Select(index => new GameInfoModel
            {
                Date = DateTime.Now.AddDays(index),
                Title = GameTitles[index]
            })
            .ToArray();
        }
    }
}
