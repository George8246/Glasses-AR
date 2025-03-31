namespace ARGlasses_Backend.Models.Join
{

    //join tables product and frame shape
    public class ProductFrameShape
    {
        public Guid ProductId { get; set; }
        public Product? Product { get; set; }

        public int FrameShapeId { get; set; }
        public FrameShape? FrameShape { get; set; }
    }
}
