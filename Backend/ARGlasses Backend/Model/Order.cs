using static ARGlasses_Backend.Models.ApplicationUser;

namespace ARGlasses_Backend.Models
{
    public class Order
    {
        public int Id { get; set; }
        public DateTime OrderDate { get; set; }
        public decimal TotalAmount { get; set; }
        public OrderStatus Status { get; set; }
        public PaymentMethod PaymentMethod { get; set; }
        public string ShippingAddress { get; set; }

        // Relationships
        public string UserId { get; set; }
        public ApplicationUser User { get; set; }

        public ICollection<OrderItem> Items { get; set; }
    }
}
