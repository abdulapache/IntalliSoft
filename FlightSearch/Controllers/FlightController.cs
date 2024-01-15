using FlightSearch.Models;
using Microsoft.AspNetCore.Mvc;

namespace FlightSearch.Controllers
{
    public class FlightController : Controller
    {
        public string apiUrl = "http://124.29.220.210:4005/api/OneWayTrip?Origin=LHE&Destination=DXB&Departure=2024-12-27&Adults=1&Children=0&Infant=0&ReturnType=json&UserName=intelli&ApiPassword=786786&ClientID=1&DirectOnly=True&ShowAlternateGrid=False"
        public IActionResult Index()
        {
            return View();
        }


        public IActionResult FlightDetails()
        {
            return View();
        }

        public IActionResult FlightSearch()
        {
            return View();
        }

        //public IActionResult Search(FlightRequest model)
        //{

        //}
    }
}
