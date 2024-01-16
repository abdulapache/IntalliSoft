﻿using FlightSearch.Models;
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
            if(model.To == null || model.From == null)
            {
                return View();
            }
            else
            {
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

                        using (var response = await httpClient.GetAsync(apiUrl))
                        {
                            if (response.IsSuccessStatusCode)
                            {
                                string apiResponse = await response.Content.ReadAsStringAsync();
                                // Process the API response as needed
                            }
                            else
                            {
                                // Handle the error response
                                // For example, log the response status code and content
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
}
