export class ProductModel{
    constructor(
        public productId:Number,
        public productName:String,
        public productCode:String,
        public releaseDate:String,
        public description:String,
        public price:Number,
        public starRating:Number,
        public imageUrl:String
    ){}
}