using System.Linq;
using System.Reflection;
using System.Web.Http;
using Abp.Application.Services;
using Abp.Configuration.Startup;
using Abp.Modules;
using Abp.WebApi;
using LibraryApp.Authors;
using Swashbuckle.Application;

namespace LibraryApp.Api
{
    [DependsOn(typeof(AbpWebApiModule), typeof(LibraryAppApplicationModule))]
    public class LibraryAppWebApiModule : AbpModule
    {
        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(Assembly.GetExecutingAssembly());

            Configuration.Modules.AbpWebApi().DynamicApiControllerBuilder
                .ForAll<IApplicationService>(typeof(LibraryAppApplicationModule).Assembly, "app")
                .WithConventionalVerbs()
                .Build();

            //Configuration.Modules.AbpWebApi().DynamicApiControllerBuilder
            //    .For<IAuthorAppService>("app/author")
            //    .ForMethod("Delete").DontCreateAction().Build();

            Configuration.Modules.AbpWebApi().HttpConfiguration.Filters.Add(new HostAuthenticationFilter("Bearer"));

            ConfigureSwaggerUi();
        }

        private void ConfigureSwaggerUi()
        {
            Configuration.Modules.AbpWebApi().HttpConfiguration
                .EnableSwagger(c =>
                {
                    c.SingleApiVersion("v1", "LibraryApp.WebApi");
                    c.ResolveConflictingActions(apiDescriptions => apiDescriptions.First());
                })
                .EnableSwaggerUi(c =>
                {
                    c.InjectJavaScript(Assembly.GetAssembly(typeof(LibraryAppWebApiModule)), "LibraryApp.Api.Scripts.Swagger-Custom.js");
                });
        }
    }
}
