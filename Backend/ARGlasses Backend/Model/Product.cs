using ARGlasses_Backend.Models.Join;

namespace ARGlasses_Backend.Models
{
    public class Product
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public decimal Weight { get; set; }
        public bool OnSale { get; set; }
        public decimal? SalePrice { get; set; }
        public int StockQuantity { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        // Relationships
        public int BrandId { get; set; }
        public Brand Brand { get; set; }

        public int ProductTypeId { get; set; }
        public ProductType ProductType { get; set; }

        public ICollection<ProductColors> Colors { get; set; }
        public ICollection<ProductFrameShape> FrameShapes { get; set; }
        public ICollection<ProductMaterial> Materials { get; set; }
        public ICollection<ProductGender> Genders { get; set; }
    }
}
