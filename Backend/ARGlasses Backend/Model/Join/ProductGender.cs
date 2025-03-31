namespace ARGlasses_Backend.Models.Join
{
    // join Tabele Product and Gender
    public class ProductGender
    {
        public Guid ProductId { get; set; }
        public Product Product { get; set; }

        public int GenderId { get; set; }
        public Gender Gender { get; set; }
    }
}
