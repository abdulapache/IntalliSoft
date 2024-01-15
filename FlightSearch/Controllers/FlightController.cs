using FlightSearch.Models;
using Microsoft.AspNetCore.Mvc;
using static System.Net.WebRequestMethods;

namespace FlightSearch.Controllers
{
    public class FlightController : Controller
    {
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

        public async Task<IActionResult> Search(FlightRequest model)
        {
            try
            {
                using (var httpClient = new HttpClient { Timeout = TimeSpan.FromSeconds(30) })
                {
                    string url = $"http://124.29.220.210:4005/api/OneWayTrip?"+
                                 $"Origin={model.From}"+
                                 $"&Destination={model.To}"+
                                 $"&Departure={model.Departure}"+
                                 $"&Adults={model.Adults}"+
                                 $"&Children={model.Children}"+
                                 $"&Infant={model.Infant}&ReturnType=json&UserName=intelli&ApiPassword=786786&ClientID=1"+
                                 $"&DirectOnly={model.Direct}&ShowAlternateGrid=False";

                    using (var response = await httpClient.GetAsync(url))
                    {
                        if (response.IsSuccessStatusCode)
                        {
                            string apiResponse = await response.Content.ReadAsStringAsync();

                        }
                    }

                }
            }
            catch(Exception ex)
            {

            }
           
            return View();
        }
    }
}
