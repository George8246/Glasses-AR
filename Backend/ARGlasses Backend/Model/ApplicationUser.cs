using Microsoft.AspNetCore.Identity;

namespace ARGlasses_Backend.Models
{
    public class ApplicationUser : IdentityUser
    {
            public string DisplayName { get; set; }
        public ThemePreference ThemePreference { get; set; }

        // Relationships
        public ICollection<Order> Orders { get; set; }
        public ICollection<WishlistItem> Wishlist { get; set; }
    }
    public enum ThemePreference { Light, Dark }
    public enum OrderStatus { Pending, Processing, Shipped, Delivered }
    public enum PaymentMethod { Cash, CreditCard, PayPal, GooglePay }
    
}
