export interface IProduct{
    id:number;
    name:string;
    brand:string;
    description:string;
    photo:string;
    price:number;
    createdAt:Date;
    updatedAt:Date;
}

export interface IProducts{
    products:IProduct[];
    count:number
}

export interface ICart{
    products: IProduct[];
    totalPrice: number;
    totalQuantity:number;
    addProductToCArt:({
        product,
        quantity,
        emptyCart
    }:{
        product:IProduct;
        quantity:number;
        emptyCart?:boolean;
    }
) => void;
decreaseProductQuantity:(productId:string) =>void;
increaseProductQuantity:(productID:string) =>void;
clearCart:() => void;
}