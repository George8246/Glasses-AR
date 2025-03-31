namespace ARGlasses_Backend.Models
{
    public class OrderItem
    {
        public int Id { get; set; }
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }

        // Relationships
        public Guid ProductId { get; set; }
        public Product Product { get; set; }

        public int? ProductColorId { get; set; }
        public ProductColors ProductColor { get; set; }

        public int OrderId { get; set; }
        public Order Order { get; set; }
    }
}
