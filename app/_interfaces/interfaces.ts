export interface IProduct{
    id:number;
    name:string;
    brand:string;
    description:string;
    photo:string;
    price:number;
    createdAt:string;
    updatedAt:string;
}

export interface ICartProduct{
    product:IProduct;
    quantity:number;
}

export interface IProducts{
    products:IProduct[];
}
export interface ICartContext{
    cartProducts:ICartProduct[];
    totalCartPrice:number;
    sideBarOpen:(isopen: boolean) => boolean;
    isOpen:boolean;
    addProductToCart:(product: IProduct, quantity: number) => void;
    decreaseProductQuantity: (id: number) => void;
    increaseProductQuantity: (id: number) => void;
    clearCart:() => void;
}