using System;

namespace DataScraper
{
    public class ScraperBase
    {
        public ScraperBase()
        {
            
        }

        public string[] GetTitles()
        {
            return new[]{
                "Halo: Combat Evolved", 
                "Call Of Duty", 
                "Battlefield 2", 
                "Age Of Empires 2", 
                "Starcraft 2: Legacy Of The Void", 
                "Street Fighter 2", 
                "Tekken 7", "Dark Souls", 
                "Super Mario: Odyssey", 
                "Doom: Eternal"
            };
        }
    }
}
