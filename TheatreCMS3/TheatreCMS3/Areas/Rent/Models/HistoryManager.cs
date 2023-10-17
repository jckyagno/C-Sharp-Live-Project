using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using TheatreCMS3.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace TheatreCMS3.Areas.Rent.Models
{
    public class HistoryManager : ApplicationUser
    {
        public int RestrictedUsers { get; set; }
        public int RentalReplacementRequests { get; set; }

        public static void Seed(ApplicationDbContext context)
        {
            var roleManager = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(context));
            var roleUserManager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(context));

            // Check to see if Role Exists, if not create it
            if (!roleManager.RoleExists("HistoryManager"))
            {
                var modRole = new IdentityRole();
                modRole.Name = "HistoryManager";
                roleManager.Create(modRole);

                var HistoryManager = new HistoryManager
                {
                    UserName = "test",
                    Email = "test@test.com"
                };

                string Password = "test";

                var HistManager = roleUserManager.Create(HistoryManager, Password);
                if (HistManager.Succeeded)
                {
                    roleUserManager.AddToRole(HistoryManager.Id, "HistoryManager");
                }
            }
        }
    }
}