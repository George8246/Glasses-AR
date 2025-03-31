using ARGlasses_Backend.Models;
using ARGlasses_Backend.Models.Join;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer;

namespace AR_Glasses_Backend.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        // Product-related DbSets
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductColors> ProductColors { get; set; }
        public DbSet<ProductType> ProductTypes { get; set; }
        public DbSet<Brand> Brands { get; set; }
        public DbSet<FrameShape> FrameShapes { get; set; }
        public DbSet<Material> Materials { get; set; }
        public DbSet<Gender> Genders { get; set; }

        // Order-related DbSets
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }

        // User-related DbSets
        public DbSet<WishlistItem> WishlistItems { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure Product entity
            modelBuilder.Entity<Product>(entity =>
            {
                entity.HasOne(p => p.Brand)
                    .WithMany(b => b.Products)
                    .HasForeignKey(p => p.BrandId)
                    .OnDelete(DeleteBehavior.Restrict);

                entity.HasOne(p => p.ProductType)
                    .WithMany(pt => pt.Products)
                    .HasForeignKey(p => p.ProductTypeId)
                    .OnDelete(DeleteBehavior.Restrict);

                entity.HasMany(p => p.Colors)
                    .WithOne(pc => pc.Product)
                    .HasForeignKey(pc => pc.ProductId);

                // Indexes for filtering/sorting
                entity.HasIndex(p => p.Price);
                entity.HasIndex(p => p.OnSale);
                entity.HasIndex(p => p.CreatedAt);
            });

            // Configure many-to-many relationships
            modelBuilder.Entity<ProductFrameShape>(entity =>
            {
                entity.HasKey(pfs => new { pfs.ProductId, pfs.FrameShapeId });

                entity.HasOne(pfs => pfs.Product)
                    .WithMany(p => p.FrameShapes)
                    .HasForeignKey(pfs => pfs.ProductId);

                entity.HasOne(pfs => pfs.FrameShape)
                    .WithMany(fs => fs.ProductFrameShapes)
                    .HasForeignKey(pfs => pfs.FrameShapeId);
            });

            modelBuilder.Entity<ProductMaterial>(entity =>
            {
                entity.HasKey(pm => new { pm.ProductId, pm.MaterialId });

                entity.HasOne(pm => pm.Product)
                    .WithMany(p => p.Materials)
                    .HasForeignKey(pm => pm.ProductId);

                entity.HasOne(pm => pm.Material)
                    .WithMany(m => m.ProductMaterials)
                    .HasForeignKey(pm => pm.MaterialId);
            });

            modelBuilder.Entity<ProductGender>(entity =>
            {
                entity.HasKey(pg => new { pg.ProductId, pg.GenderId });

                entity.HasOne(pg => pg.Product)
                    .WithMany(p => p.Genders)
                    .HasForeignKey(pg => pg.ProductId);

                entity.HasOne(pg => pg.Gender)
                    .WithMany(g => g.ProductGenders)
                    .HasForeignKey(pg => pg.GenderId);
            });

            // Configure Order relationships
            modelBuilder.Entity<Order>(entity =>
            {
                entity.HasOne(o => o.User)
                    .WithMany(u => u.Orders)
                    .HasForeignKey(o => o.UserId);
            });

            modelBuilder.Entity<OrderItem>(entity =>
            {
                entity.HasOne(oi => oi.Order)
                    .WithMany(o => o.Items)
                    .HasForeignKey(oi => oi.OrderId);

                entity.HasOne(oi => oi.Product)
                    .WithMany()
                    .HasForeignKey(oi => oi.ProductId)
                    .OnDelete(DeleteBehavior.Restrict);

                entity.HasOne(oi => oi.ProductColor)
                    .WithMany()
                    .HasForeignKey(oi => oi.ProductColorId)
                    .OnDelete(DeleteBehavior.SetNull);
            });

            // Configure WishlistItem
            modelBuilder.Entity<WishlistItem>(entity =>
            {
                entity.HasOne(wi => wi.User)
                    .WithMany(u => u.Wishlist)
                    .HasForeignKey(wi => wi.UserId);

                entity.HasOne(wi => wi.Product)
                    .WithMany()
                    .HasForeignKey(wi => wi.ProductId)
                    .OnDelete(DeleteBehavior.Restrict);

                entity.HasOne(wi => wi.ProductColor)
                    .WithMany()
                    .HasForeignKey(wi => wi.ProductColorId)
                    .OnDelete(DeleteBehavior.SetNull);
            });

            // Configure enums as strings
            modelBuilder.Entity<Order>()
                .Property(o => o.Status)
                .HasConversion<string>();

            modelBuilder.Entity<Order>()
                .Property(o => o.PaymentMethod)
                .HasConversion<string>();

            modelBuilder.Entity<ApplicationUser>()
                .Property(u => u.ThemePreference)
                .HasConversion<string>();
        }
    }
}
