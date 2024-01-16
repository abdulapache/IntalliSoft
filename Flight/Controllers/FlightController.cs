using FlightSearch.Models;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using static System.Net.WebRequestMethods;

namespace FlightSearch.Controllers
{
    public class FlightController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }


        public async Task<IActionResult> FlightDetails()
        {
            ResponseBase<SearchResponse> response = new ResponseBase<SearchResponse>();

            try
            {
                using (var httpClient = new HttpClient { Timeout = TimeSpan.FromSeconds(60) })
                {
                    var apiUrl = "http://124.29.220.210:4005/api/OneWayTrip?Origin=LHE&Destination=DXB&Departure=2024-12-27&Adults=1&Children=0&Infant=0&ReturnType=json&UserName=intelli&ApiPassword=786786&ClientID=1&DirectOnly=True&ShowAlternateGrid=False";


                    using (var ApiResponse = await httpClient.GetAsync(apiUrl))
                    {
                        if (ApiResponse.IsSuccessStatusCode)
                        {
                            string data = await ApiResponse.Content.ReadAsStringAsync();
                            response.Data = JsonSerializer.Deserialize<SearchResponse>(data);
                        }
                        else
                        {
                            //string errorResponse = await response.Content.ReadAsStringAsync();
                            // Console.WriteLine($"Error: {response.StatusCode}, {errorResponse}");
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                // Handle exceptions
                Console.WriteLine($"An error occurred: {ex.Message}");
            }
            return View(response);

        }

        public async Task<IActionResult> FlightSearch(FlightRequest model)
        {
           
			ResponseBase<SearchResponse> response = new ResponseBase<SearchResponse>();

			try
                {
                    using (var httpClient = new HttpClient { Timeout = TimeSpan.FromSeconds(60) })
                    {
                        var apiUrl = "http://124.29.220.210:4005/api/OneWayTrip?Origin=LHE&Destination=DXB&Departure=2024-12-27&Adults=1&Children=0&Infant=0&ReturnType=json&UserName=intelli&ApiPassword=786786&ClientID=1&DirectOnly=True&ShowAlternateGrid=False";


                        using (var ApiResponse = await httpClient.GetAsync(apiUrl))
                        {
                            if (ApiResponse.IsSuccessStatusCode)
                            {
                                 string data = await ApiResponse.Content.ReadAsStringAsync();
							     response.Data = JsonSerializer.Deserialize<SearchResponse>(data);
						}
                            else
                            {
                                //string errorResponse = await response.Content.ReadAsStringAsync();
                               // Console.WriteLine($"Error: {response.StatusCode}, {errorResponse}");
                            }
                        }
                    }
                }
                catch (Exception ex)
                {
                    // Handle exceptions
                    Console.WriteLine($"An error occurred: {ex.Message}");
                }
                return View(response);
           
            
        }
    }
}
