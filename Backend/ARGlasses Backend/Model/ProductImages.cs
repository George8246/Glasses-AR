namespace ARGlasses_Backend.Models
{
    public class ProductImages
    {
        public int Id { get; set; }
        public int ProductColorId { get; set; }
        public ProductColors ProductColor { get; set; }
        public string ImageUrl { get; set; }
        public bool IsThumbnail { get; set; }
    }
}
