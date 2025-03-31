using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace ARGlasses_Backend.Migrations
{
    /// <inheritdoc />
    public partial class UpdateSeedData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "ProductFrameShape",
                keyColumns: new[] { "FrameShapeId", "ProductId" },
                keyValues: new object[] { 2, new Guid("213d291f-9628-4bad-8387-8d980671dba0") });

            migrationBuilder.InsertData(
                table: "Brands",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 4, "Gucci" },
                    { 5, "Prada" }
                });

            migrationBuilder.InsertData(
                table: "FrameShapes",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 3, "Square" },
                    { 4, "Cat-Eye" },
                    { 5, "Wayfarer" }
                });

            migrationBuilder.InsertData(
                table: "Genders",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "Male" },
                    { 2, "Female" },
                    { 3, "Unisex" }
                });

            migrationBuilder.InsertData(
                table: "Materials",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "Metal" },
                    { 2, "Plastic" },
                    { 3, "Acetate" },
                    { 4, "Titanium" }
                });

            migrationBuilder.UpdateData(
                table: "ProductColors",
                keyColumn: "Id",
                keyValue: 2,
                column: "ProductId",
                value: new Guid("689455ea-cfe1-406a-a50e-bf406b472fdf"));

            migrationBuilder.InsertData(
                table: "ProductColors",
                columns: new[] { "Id", "ARModelUrl", "ColorName", "Image360Url", "MainImageUrl", "ProductId", "SwatchImageUrl" },
                values: new object[] { 3, "/models/holbrook-matte-black.glb", "Matte Black", "/images/360/holbrook-matte-black", "/images/products/holbrook-matte-black.jpg", new Guid("213d291f-9628-4bad-8387-8d980671dba0"), "/images/swatches/matte-black.png" });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("213d291f-9628-4bad-8387-8d980671dba0"),
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2023, 10, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2023, 10, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("689455ea-cfe1-406a-a50e-bf406b472fdf"),
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2023, 10, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2023, 10, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "BrandId", "CreatedAt", "Description", "FrameShapeId", "Name", "OnSale", "Price", "ProductTypeId", "SalePrice", "StockQuantity", "UpdatedAt", "Weight" },
                values: new object[] { new Guid("3c4b2a9d-1e3f-4b2a-8c4b-2a9d1e3f4b2a"), 1, new DateTime(2023, 10, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Iconic square frame with a retro vibe.", null, "Wayfarer", false, 130.00m, 1, null, 75, new DateTime(2023, 10, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 0.28m });

            migrationBuilder.InsertData(
                table: "ProductColors",
                columns: new[] { "Id", "ARModelUrl", "ColorName", "Image360Url", "MainImageUrl", "ProductId", "SwatchImageUrl" },
                values: new object[] { 4, "/models/wayfarer-tortoise-shell.glb", "Tortoise Shell", "/images/360/wayfarer-tortoise-shell", "/images/products/wayfarer-tortoise-shell.jpg", new Guid("3c4b2a9d-1e3f-4b2a-8c4b-2a9d1e3f4b2a"), "/images/swatches/tortoise-shell.png" });

            migrationBuilder.InsertData(
                table: "ProductFrameShape",
                columns: new[] { "FrameShapeId", "ProductId" },
                values: new object[,]
                {
                    { 3, new Guid("213d291f-9628-4bad-8387-8d980671dba0") },
                    { 3, new Guid("3c4b2a9d-1e3f-4b2a-8c4b-2a9d1e3f4b2a") }
                });

            migrationBuilder.InsertData(
                table: "ProductGender",
                columns: new[] { "GenderId", "ProductId" },
                values: new object[,]
                {
                    { 1, new Guid("213d291f-9628-4bad-8387-8d980671dba0") },
                    { 3, new Guid("3c4b2a9d-1e3f-4b2a-8c4b-2a9d1e3f4b2a") },
                    { 3, new Guid("689455ea-cfe1-406a-a50e-bf406b472fdf") }
                });

            migrationBuilder.InsertData(
                table: "ProductMaterial",
                columns: new[] { "MaterialId", "ProductId" },
                values: new object[,]
                {
                    { 2, new Guid("213d291f-9628-4bad-8387-8d980671dba0") },
                    { 1, new Guid("3c4b2a9d-1e3f-4b2a-8c4b-2a9d1e3f4b2a") },
                    { 1, new Guid("689455ea-cfe1-406a-a50e-bf406b472fdf") }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Brands",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Brands",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "FrameShapes",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "FrameShapes",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Genders",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Materials",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Materials",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "ProductColors",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "ProductColors",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "ProductFrameShape",
                keyColumns: new[] { "FrameShapeId", "ProductId" },
                keyValues: new object[] { 3, new Guid("213d291f-9628-4bad-8387-8d980671dba0") });

            migrationBuilder.DeleteData(
                table: "ProductFrameShape",
                keyColumns: new[] { "FrameShapeId", "ProductId" },
                keyValues: new object[] { 3, new Guid("3c4b2a9d-1e3f-4b2a-8c4b-2a9d1e3f4b2a") });

            migrationBuilder.DeleteData(
                table: "ProductGender",
                keyColumns: new[] { "GenderId", "ProductId" },
                keyValues: new object[] { 1, new Guid("213d291f-9628-4bad-8387-8d980671dba0") });

            migrationBuilder.DeleteData(
                table: "ProductGender",
                keyColumns: new[] { "GenderId", "ProductId" },
                keyValues: new object[] { 3, new Guid("3c4b2a9d-1e3f-4b2a-8c4b-2a9d1e3f4b2a") });

            migrationBuilder.DeleteData(
                table: "ProductGender",
                keyColumns: new[] { "GenderId", "ProductId" },
                keyValues: new object[] { 3, new Guid("689455ea-cfe1-406a-a50e-bf406b472fdf") });

            migrationBuilder.DeleteData(
                table: "ProductMaterial",
                keyColumns: new[] { "MaterialId", "ProductId" },
                keyValues: new object[] { 2, new Guid("213d291f-9628-4bad-8387-8d980671dba0") });

            migrationBuilder.DeleteData(
                table: "ProductMaterial",
                keyColumns: new[] { "MaterialId", "ProductId" },
                keyValues: new object[] { 1, new Guid("3c4b2a9d-1e3f-4b2a-8c4b-2a9d1e3f4b2a") });

            migrationBuilder.DeleteData(
                table: "ProductMaterial",
                keyColumns: new[] { "MaterialId", "ProductId" },
                keyValues: new object[] { 1, new Guid("689455ea-cfe1-406a-a50e-bf406b472fdf") });

            migrationBuilder.DeleteData(
                table: "FrameShapes",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Genders",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Genders",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Materials",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Materials",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("3c4b2a9d-1e3f-4b2a-8c4b-2a9d1e3f4b2a"));

            migrationBuilder.UpdateData(
                table: "ProductColors",
                keyColumn: "Id",
                keyValue: 2,
                column: "ProductId",
                value: new Guid("213d291f-9628-4bad-8387-8d980671dba0"));

            migrationBuilder.InsertData(
                table: "ProductFrameShape",
                columns: new[] { "FrameShapeId", "ProductId" },
                values: new object[] { 2, new Guid("213d291f-9628-4bad-8387-8d980671dba0") });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("213d291f-9628-4bad-8387-8d980671dba0"),
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2025, 3, 31, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2025, 3, 31, 0, 0, 0, 0, DateTimeKind.Unspecified) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("689455ea-cfe1-406a-a50e-bf406b472fdf"),
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2025, 3, 31, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2025, 3, 31, 0, 0, 0, 0, DateTimeKind.Unspecified) });
        }
    }
}
