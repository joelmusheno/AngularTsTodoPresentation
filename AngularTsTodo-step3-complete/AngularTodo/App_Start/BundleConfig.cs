﻿using System.Web;
using System.Web.Optimization;

namespace AngularTodo
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            //bundles.Add(new StyleBundle("~/Content/css").Include(
            //          "~/Content/bootstrap.css",
            //          "~/Content/site.css"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Content/bootstrap.css",
                "~/Content/bootstrap-theme.css", 
                "~/Content/ui-bootstrap.csp.css"));

            bundles.Add(new ScriptBundle("~/bundles/angular")
                .Include("~/Scripts/angular.js"));

            bundles.Add(new ScriptBundle("~/bundles/angular-ui-bootstrap")
                .IncludeDirectory("~/Scripts/angular-ui/", "*.js"));

            bundles.Add(new ScriptBundle("~/bundles/todo")
                .Include("~/Scripts/todoModuleTs.js")
                .Include("~/Scripts/todoModuleTs.js.map")
                .Include("~/Scripts/todoServices.js")
                .Include("~/Scripts/todoServices.js.map")
                .Include("~/Scripts/todoControllers.js")
                .Include("~/Scripts/todoControllers.js.map"));

        }
    }
}
