using System.Net;

namespace FlightSearch.Models
{
	public class ResponseBase<T>
	{
		public HttpStatusCode StatusCode { set; get; }
		public string? Message { set; get; }
		public ResponseMessageType ResponseMessageType { set; get; }
		public T? Data { set; get; }

		public ResponseBase()
		{
			StatusCode = HttpStatusCode.OK;
			ResponseMessageType = ResponseMessageType.Success;
		}

	}
}
