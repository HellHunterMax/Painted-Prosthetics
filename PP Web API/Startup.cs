using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using PP.Web.API.Data;
using AutoMapper;
using Newtonsoft.Json.Serialization;
using Microsoft.AspNetCore.Http;
using PP.Web.API.Helpers;

namespace PP.Web.Api
{
    public class Startup
    {
        private string _GalleryConnection = null;

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            _GalleryConnection = Configuration["ConnectionStrings:GalleryConnection"];

            services.AddDbContext<GalleryContext>(opt =>
               opt.UseSqlServer(_GalleryConnection));

            services.AddControllers().AddNewtonsoftJson(s => { 
                s.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver(); 
            });

            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

            services.AddScoped<IImageRepository, SqlImageRepository>();
            services.AddScoped<IArtistRepository, SqlArtistRepository>();
            services.AddScoped<IUserService, MockUserService>();

            services.Configure<AppSettings>(Configuration.GetSection("Auth"));

            services.AddCors(options =>
            {
                options.AddDefaultPolicy(
                                  builder =>
                                  {
                                      builder.WithOrigins("http://localhost:3000").AllowAnyHeader();
                                  });
            });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
