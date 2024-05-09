import Image from "next/image";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const Header = () => {
  return (
    <header className=" p-6 bg-primary-blue justify-between h-12 flex items-center text-white">
      <div className="flex items-center gap-2">
        <span className=" text-[32px] font-semibold">MKS</span>
        <p className="text-base  leading-[19px] font-light">Sistemas</p>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            className="gap-2 flex rounded-full text-primary-blue w-[52px] h-[26px] bg-white"
            size="icon"
            variant="ghost"
          >
            <Image src="/cart-icon.png" alt="cart" width={14} height={14} />
            <span className="text-xs text-black">0</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-p bg-primary-blue">
          <SheetHeader>
            <SheetTitle className="text-white text-left text-[27px] leading-8 font-bold">
              Carrinho de compras <p></p>
            </SheetTitle>
            <>
              <div></div>
            </>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
