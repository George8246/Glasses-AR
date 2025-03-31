using ARGlasses_Backend.Models.Join;

namespace ARGlasses_Backend.Models
{
    public class Material
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        
        // Many-to-many relationship
        public ICollection<ProductMaterial> ProductMaterials { get; set; }
    }
}
