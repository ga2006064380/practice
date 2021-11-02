using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace VTWebsite.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult VTDiscovery()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult DisMuti()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult Wiki()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}