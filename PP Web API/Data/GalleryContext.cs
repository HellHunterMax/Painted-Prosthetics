using Microsoft.EntityFrameworkCore;
using PP.Web.API.Model;

namespace PP.Web.API.Data
{
    public class GalleryContext : DbContext
    {
        public GalleryContext(DbContextOptions<GalleryContext> options) : base(options)
        {

        }

        public DbSet<Image> Images { get; set; }
        public DbSet<Artist> Artists { get; set; }

    }
}
