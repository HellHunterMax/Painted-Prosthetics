using Microsoft.EntityFrameworkCore;
using PP.Web.API.Model;
using System;

namespace PP.Web.API.Data
{
    public class GalleryContext : DbContext
    {
        public GalleryContext(DbContextOptions<GalleryContext> options) : base(options)
        {

        }

        public DbSet<Image> Images { get; set; }
        public DbSet<Artist> Artists { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            if (modelBuilder == null)
            {
                throw new NullReferenceException("modelBuilder Cannot be null");
            }
            _ = modelBuilder.Entity<Image>()
                            .HasOne<Artist>(s => s.Artist)
                            .WithMany(g => g.Images)
                            .HasForeignKey(s => s.ArtistId);
        }

    }
}
