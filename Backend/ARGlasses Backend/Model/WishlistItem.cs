namespace ARGlasses_Backend.Models
{
    public class WishlistItem
    {
        public int Id { get; set; }

        // Relationships
        public string UserId { get; set; }
        public ApplicationUser User { get; set; }

        public Guid ProductId { get; set; }
        public Product Product { get; set; }

        public int? ProductColorId { get; set; }
        public ProductColors ProductColor { get; set; }
    }
}
