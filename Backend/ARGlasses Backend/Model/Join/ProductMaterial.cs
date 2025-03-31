namespace ARGlasses_Backend.Models.Join
{
    //join tables product and material
    public class ProductMaterial
    {
        public Guid ProductId { get; set; }
        public Product Product { get; set; }

        public int MaterialId { get; set; }
        public Material Material { get; set; }
    }
}
