using ARGlasses_Backend.Models.Join;

namespace ARGlasses_Backend.Models
{
    public class Gender
    {
        public int Id { get; set; }
        public string Name { get; set; } // Male, Female, Unisex

        // Many-to-many relationship
        public ICollection<ProductGender> ProductGenders { get; set; }
    }
}
