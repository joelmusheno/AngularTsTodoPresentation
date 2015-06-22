using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using AngularTodo.Infrastructure;
using AngularTodo.Models;

namespace AngularTodo.Controllers
{
    [RoutePrefix("api/todo")]
    public class TodoController:ApiController
    {
        private static List<Todo> Data { get; set; }

        public TodoController()
        {
            if (Data.IsNull())
                InitData();

        }

        private void InitData()
        {
            Data = new List<Todo>()
            {
                new Todo()
                {
                    Description = "Write Presentation",
                    Complete = false
                },
                new Todo()
                {
                    Description = "Write Code",
                    Complete = false
                }
            };
        }

        [HttpGet]
        public List<Todo> GetAll()
        {
            return Data;
        } 

        [HttpPost]
        public void Add(Todo todo)
        {
            Data.Add(todo);
        }
    }
}