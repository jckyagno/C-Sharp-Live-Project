using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TheatreCMS3.Models
{


    public class DonateModel
    {

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public decimal DonationAmount { get; set; }
        public string DonationComments { get; set; }
    }
}