using System.Web.Mvc;

namespace LibraryApp.Web.Controllers
{
    public class AboutController : LibraryAppControllerBase
    {
        public ActionResult Index()
        {
            return View();
        }
	}
}