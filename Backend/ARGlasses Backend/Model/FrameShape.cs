using ARGlasses_Backend.Models.Join;

namespace ARGlasses_Backend.Models
{
    public class FrameShape
    {
        public int Id { get; set; }
        public string? Name { get; set; }

        // Relation With product
        public ICollection<Product> Products { get; set; }
        public ICollection<ProductFrameShape> ProductFrameShapes { get; set; }
    }
}
