namespace FlightSearch.Models
{
   

    public class Flight
    {
        public string SequenceNumber { get; set; }
        public string Origin { get; set; }
        public object DepartureDate { get; set; }
        public object DepartureDateFull { get; set; }
        public string Destination { get; set; }
        public object ArrivalDate { get; set; }
        public object ArrivalDateFull { get; set; }
        public string ElapsedTime { get; set; }
        public string TotalElapsedTime { get; set; }
        public string MarketingAirline_Code { get; set; }
        public string MarketingGroup { get; set; }
        public string FlightNumber { get; set; }
        public string OperatingAirline_Code { get; set; }
        public string OperatingAirline_FlightNumber { get; set; }
        public string AirEquipType { get; set; }
        public string ResBookDesigCode { get; set; }
        public string BaseFare { get; set; }
        public string NonRefundableBaseFare { get; set; }
        public string FareConstruction { get; set; }
        public string EquivFare { get; set; }
        public string ServiceFee { get; set; }
        public string Tax { get; set; }
        public string TotalFare { get; set; }
        public string Extras { get; set; }
        public string TotalWithExtras { get; set; }
        public string NegotiatedFareCode { get; set; }
        public string OnTimePerformanceLevel { get; set; }
        public string StopQuantity { get; set; }
        public string Stop { get; set; }
        public string TourOperationFlightID { get; set; }
        public string InfoSource { get; set; }
        public string DisclosureAirLine { get; set; }
        public string eTicketNumber { get; set; }
        public string TicketType { get; set; }
        public string Cabin { get; set; }
        public string Meal { get; set; }
        public string SeatsRemaining { get; set; }
        public string BelowMin { get; set; }
        public string AccountCode { get; set; }
        public string AvailabilityBreak { get; set; }
        public string FareRefundable { get; set; }
        public string AirlineCode { get; set; }
        public string TotalFareWithOutAnyOfferAndAdditionalCharg { get; set; }
        public string AdultQuantity { get; set; }
        public string AdultBaseFare { get; set; }
        public string AdultEquivFare { get; set; }
        public string AdultTax { get; set; }
        public string AdultTaxCodeSP { get; set; }
        public string AdultTaxCodeRG { get; set; }
        public string AdultTaxCodeYQ { get; set; }
        public string AdultTaxCodeYR { get; set; }
        public string AdultTaxCodePK { get; set; }
        public string AdultTaxCodeE3 { get; set; }
        public string AdultOtherTaxes { get; set; }
        public string AdultTotalFare { get; set; }
        public string AdultBaggageWeight { get; set; }
        public string AdultBaggagePieces { get; set; }
        public string AdultExchangeBeforePenalty { get; set; }
        public string AdultExchangeAfterPenalty { get; set; }
        public string AdultRefundBeforePenalty { get; set; }
        public string AdultRefundAfterPenalty { get; set; }
        public string ChildQuantity { get; set; }
        public string ChildBaseFare { get; set; }
        public string ChildEquivFare { get; set; }
        public string ChildTax { get; set; }
        public string ChildTaxCodeSP { get; set; }
        public string ChildTaxCodeRG { get; set; }
        public string ChildTaxCodeYQ { get; set; }
        public string ChildTaxCodeYR { get; set; }
        public string ChildTaxCodePK { get; set; }
        public string ChildTaxCodeE3 { get; set; }
        public string ChildOtherTaxes { get; set; }
        public string ChildTotalFare { get; set; }
        public string ChildBaggageWeight { get; set; }
        public string ChildBaggagePieces { get; set; }
        public string ChildExchangeBeforePenalty { get; set; }
        public string ChildExchangeAfterPenalty { get; set; }
        public string ChildRefundBeforePenalty { get; set; }
        public string ChildRefundAfterPenalty { get; set; }
        public string InfantQuantity { get; set; }
        public string InfantBaseFare { get; set; }
        public string InfantEquivFare { get; set; }
        public string InfantTax { get; set; }
        public string InfantTaxCodeSP { get; set; }
        public string InfantTaxCodeRG { get; set; }
        public string InfantTaxCodeYQ { get; set; }
        public string InfantTaxCodeYR { get; set; }
        public string InfantTaxCodePK { get; set; }
        public string InfantTaxCodeE3 { get; set; }
        public string InfantOtherTaxes { get; set; }
        public string InfantTotalFare { get; set; }
        public string InfantBaggageWeight { get; set; }
        public string InfantBaggagePieces { get; set; }
        public string InfantExchangeBeforePenalty { get; set; }
        public string InfantExchangeAfterPenalty { get; set; }
        public string InfantRefundBeforePenalty { get; set; }
        public string InfantRefundAfterPenalty { get; set; }
        public string Status { get; set; }
        public string CurrencyCode { get; set; }
        public string FareBasisCode { get; set; }
        public string RPH { get; set; }
        public string OriginCode { get; set; }
        public string DestinationCode { get; set; }
        public string AirlineCodeAB { get; set; }
        public string MarketingAirlineCodeAB { get; set; }
        public string OfferID { get; set; }
        public string Owner { get; set; }
        public string ResponseID { get; set; }
        public object OfferItemID { get; set; }
        public string ReferenceID { get; set; }
        public string Other { get; set; }
        public string ShowFareRulesOnClick { get; set; }
    }

    public class SearchResponse
    {
        public List<Flight> Flights { get; set; }
    }

}
