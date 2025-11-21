using Microsoft.AspNetCore.Mvc;
using YourProject.Models;

namespace YourProject.Controllers
{
    public class CalcController : Controller
    {
        Random rnd = new Random();

        public IActionResult UsingModel()
        {
            int a = rnd.Next(0, 11);
            int b = rnd.Next(0, 11);

            var model = new CalcViewModel()
            {
                A = a,
                B = b,
                Add = a + b,
                Sub = a - b,
                Mult = a * b,
                Div = b == 0 ? "Error: division by zero" : (a / b).ToString()
            };

            return View(model);
        }

        public IActionResult UsingViewBag()
        {
            int a = rnd.Next(0, 11);
            int b = rnd.Next(0, 11);

            ViewBag.A = a;
            ViewBag.B = b;

            ViewBag.Add  = a + b;
            ViewBag.Sub  = a - b;
            ViewBag.Mult = a * b;
            ViewBag.Div  = b == 0 ? "Error: division by zero" : (a / b).ToString();

            return View();
        }
    }
}
