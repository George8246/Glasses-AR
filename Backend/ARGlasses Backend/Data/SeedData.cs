using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ARGlasses_Backend.Models;
using ARGlasses_Backend.Models.Join;
using System;

namespace AR_Glasses_Backend.Data
{
    public static class SeedData
    {
        public static void Seed(this ModelBuilder modelBuilder)
        {
            // Static DateTime values
            var createdAt = new DateTime(2023, 10, 1);
            var updatedAt = new DateTime(2023, 10, 1);

            // Static Guids for Products
            var aviatorClassicId = Guid.Parse("689455ea-cfe1-406a-a50e-bf406b472fdf");
            var holbrookId = Guid.Parse("213d291f-9628-4bad-8387-8d980671dba0");
            var wayfarerId = Guid.Parse("3c4b2a9d-1e3f-4b2a-8c4b-2a9d1e3f4b2a");


            #region Base Data
            // Brands
            modelBuilder.Entity<Brand>().HasData(
                new Brand { Id = 1, Name = "Ray-Ban" },
                new Brand { Id = 2, Name = "Oakley" },
                new Brand { Id = 3, Name = "Persol" },
                new Brand { Id = 4, Name = "Gucci" },
                new Brand { Id = 5, Name = "Prada" }
            );

            // Product Types
            modelBuilder.Entity<ProductType>().HasData(
                new ProductType { Id = 1, Name = "Sunglasses" },
                new ProductType { Id = 2, Name = "Prescription Glasses" }
            );

            // Frame Shapes
            modelBuilder.Entity<FrameShape>().HasData(
                new FrameShape { Id = 1, Name = "Aviator" },
                new FrameShape { Id = 2, Name = "Round" },
                new FrameShape { Id = 3, Name = "Square" },
                new FrameShape { Id = 4, Name = "Cat-Eye" },
                new FrameShape { Id = 5, Name = "Wayfarer" }
            );

            // Materials
            modelBuilder.Entity<Material>().HasData(
                new Material { Id = 1, Name = "Metal" },
                new Material { Id = 2, Name = "Plastic" },
                new Material { Id = 3, Name = "Acetate" },
                new Material { Id = 4, Name = "Titanium" }
            );

            // Genders
            modelBuilder.Entity<Gender>().HasData(
                new Gender { Id = 1, Name = "Male" },
                new Gender { Id = 2, Name = "Female" },
                new Gender { Id = 3, Name = "Unisex" }
            );
            #endregion

            // Seed Products
            modelBuilder.Entity<Product>().HasData(
                new Product
                {
                    Id = aviatorClassicId,
                    Name = "Aviator Classic",
                    Description = "Timeless aviator style with polarized lenses.",
                    Price = 150.00m,
                    Weight = 0.3m,
                    OnSale = false,
                    StockQuantity = 100,
                    CreatedAt = createdAt,
                    UpdatedAt = updatedAt,
                    BrandId = 1,
                    ProductTypeId = 1
                },
                new Product
                {
                    Id = holbrookId,
                    Name = "Holbrook",
                    Description = "Modern rectangular frame with UV protection.",
                    Price = 120.00m,
                    Weight = 0.25m,
                    OnSale = true,
                    SalePrice = 99.00m,
                    StockQuantity = 50,
                    CreatedAt = createdAt,
                    UpdatedAt = updatedAt,
                    BrandId = 2,
                    ProductTypeId = 1
                },
                new Product
                {
                    Id = wayfarerId,
                    Name = "Wayfarer",
                    Description = "Iconic square frame with a retro vibe.",
                    Price = 130.00m,
                    Weight = 0.28m,
                    OnSale = false,
                    StockQuantity = 75,
                    CreatedAt = createdAt,
                    UpdatedAt = updatedAt,
                    BrandId = 1,
                    ProductTypeId = 1
                }
            );

            // Seed Product Colors
            modelBuilder.Entity<ProductColors>().HasData(
                new ProductColors
                {
                    Id = 1,
                    ProductId = aviatorClassicId,
                    ColorName = "Gold",
                    SwatchImageUrl = "/images/swatches/gold.png",
                    MainImageUrl = "/images/products/aviator-gold.jpg",
                    ARModelUrl = "/models/aviator-gold.glb",
                    Image360Url = "/images/360/aviator-gold"
                },
                new ProductColors
                {
                    Id = 2,
                    ProductId = aviatorClassicId,
                    ColorName = "Black",
                    SwatchImageUrl = "/images/swatches/black.png",
                    MainImageUrl = "/images/products/aviator-black.jpg",
                    ARModelUrl = "/models/aviator-black.glb",
                    Image360Url = "/images/360/aviator-black"
                },
                new ProductColors
                {
                    Id = 3,
                    ProductId = holbrookId,
                    ColorName = "Matte Black",
                    SwatchImageUrl = "/images/swatches/matte-black.png",
                    MainImageUrl = "/images/products/holbrook-matte-black.jpg",
                    ARModelUrl = "/models/holbrook-matte-black.glb",
                    Image360Url = "/images/360/holbrook-matte-black"
                },
                new ProductColors
                {
                    Id = 4,
                    ProductId = wayfarerId,
                    ColorName = "Tortoise Shell",
                    SwatchImageUrl = "/images/swatches/tortoise-shell.png",
                    MainImageUrl = "/images/products/wayfarer-tortoise-shell.jpg",
                    ARModelUrl = "/models/wayfarer-tortoise-shell.glb",
                    Image360Url = "/images/360/wayfarer-tortoise-shell"
                }
            );

            // Seed Many-to-Many Relationships: ProductFrameShape
            modelBuilder.Entity<ProductFrameShape>().HasData(
                new ProductFrameShape { ProductId = aviatorClassicId, FrameShapeId = 1 },
                new ProductFrameShape { ProductId = holbrookId, FrameShapeId = 3 },
                new ProductFrameShape { ProductId = wayfarerId, FrameShapeId = 3 }
            );

            // Seed Many-to-Many Relationships: ProductMaterial
            modelBuilder.Entity<ProductMaterial>().HasData(
                new ProductMaterial { ProductId = aviatorClassicId, MaterialId = 1 },
                new ProductMaterial { ProductId = holbrookId, MaterialId = 2 },
                new ProductMaterial { ProductId = wayfarerId, MaterialId = 1 }
            );

            // Seed Many-to-Many Relationships: ProductGender
            modelBuilder.Entity<ProductGender>().HasData(
                new ProductGender { ProductId = aviatorClassicId, GenderId = 3 }, // Unisex
                new ProductGender { ProductId = holbrookId, GenderId = 1 },      // Male
                new ProductGender { ProductId = wayfarerId, GenderId = 3 }       // Unisex
            );
        }
    }
}