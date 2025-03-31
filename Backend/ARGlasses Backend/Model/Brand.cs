namespace ARGlasses_Backend.Models
{
    public class Brand
    {
        public int Id { get; set; }
        public string? Name { get; set; }

        // Relation With product
        public ICollection<Product> Products { get; set; }
    }
}
