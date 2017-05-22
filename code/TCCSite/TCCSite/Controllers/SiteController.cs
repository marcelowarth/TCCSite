using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TCCSite.Controllers
{
    public class SiteController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        /*
        public ActionResult FichaTecnica()
        {
            return View();
        }

        public ActionResult Sobre()
        {
            var eu = new SobreMimModel()
            {
                Nome = "Sasuke",
                Nascimento = "08 de junho de 1992",
                Contato = "marcelowarth@gmail.com",
                Escolaridade = "Superior Incompleto",
                InstituicaoEnsino = "Feevale",
                Semestre = 8
            };
            return View(eu);
        }
        */
    }
}