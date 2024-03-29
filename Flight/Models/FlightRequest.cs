﻿namespace FlightSearch.Models
{
    public class FlightRequest
    {
        public string Path {  get; set; } = string.Empty;
        public string From { get; set; } 
        public string To { get; set; }
        public DateTime Departure { get; set; }
        public int Adults { get; set; }
        public int Infant { get; set; }
        public int Children { get; set; }
        public string Days { get; set; }
        public string Cabin { get; set; }
        public string Preferred {  get; set; }
        public bool Direct { get; set;}
    }
}
