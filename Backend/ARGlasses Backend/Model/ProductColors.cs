
namespace ARGlasses_Backend.Models
{
    public class ProductColors
    {
        public int Id { get; set; }
        public string ColorName { get; set; }
        public string SwatchImageUrl { get; set; }
        public string MainImageUrl { get; set; }
        public string ARModelUrl { get; set; }
        public string Image360Url { get; set; }

        // Relationships
        public Guid ProductId { get; set; }
        public Product Product { get; set; }

        public ICollection<ProductImages> AdditionalImages { get; set; }

    }
}
