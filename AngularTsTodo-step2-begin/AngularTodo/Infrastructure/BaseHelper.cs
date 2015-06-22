using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularTodo.Infrastructure
{
    public static class BaseHelper
    {
        public static T As<T>(this object obj)
        {
            return (T)obj;
        }
        public static bool IsNull<T>(this T obj)
        {
            return typeof (T) == typeof (string) ? string.IsNullOrWhiteSpace(obj.As<string>()) : Equals(obj, default(T));
        }
        public static bool IsNotNull<T>(this T obj)
        {
            return !obj.IsNull();
        }

    }
}