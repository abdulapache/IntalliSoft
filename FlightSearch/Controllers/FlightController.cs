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

        public async Task<IActionResult> FlightSearch(FlightRequest model)
        {
           
			ResponseBase<SearchResponse> response = new ResponseBase<SearchResponse>();

			try
                {
                    using (var httpClient = new HttpClient { Timeout = TimeSpan.FromSeconds(60) })
                    {
                        var apiUrl = "http://124.29.220.210:4005/api/OneWayTrip?Origin=LHE&Destination=DXB&Departure=2024-12-27&Adults=1&Children=0&Infant=0&ReturnType=json&UserName=intelli&ApiPassword=786786&ClientID=1&DirectOnly=True&ShowAlternateGrid=False";

                        //string url = $"http://124.29.220.210:4005/api/OneWayTrip?" +
                        //             $"Origin={model.From}" +
                        //             $"&Destination={model.To}" +
                        //             $"&Departure={model.Departure}" +
                        //             $"&Adults={model.Adults}" +
                        //             $"&Children={model.Children}" +
                        //             $"&Infant={model.Infant}&ReturnType=json&UserName=intelli&ApiPassword=786786&ClientID=1" +
                        //             $"&DirectOnly={model.Direct}&ShowAlternateGrid=False";

                        using (var ApiResponse = await httpClient.GetAsync(apiUrl))
                        {
                            if (ApiResponse.IsSuccessStatusCode)
                            {
                                string data = await ApiResponse.Content.ReadAsStringAsync();
							    response.Data = Newtonsoft.Json.JsonConvert.DeserializeObject<SearchResponse>(data);
						}
                            else
                            {
                                string errorResponse = await response.Content.ReadAsStringAsync();
                                Console.WriteLine($"Error: {response.StatusCode}, {errorResponse}");
                            }
                        }
                    }
                }
                catch (Exception ex)
                {
                    // Handle exceptions
                    Console.WriteLine($"An error occurred: {ex.Message}");
                }
                return View();
           
            
        }
    }
}
