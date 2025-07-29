import ColumnTitle from "@/components/model/column-title";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";

const Shop = () => {
  return (
    <>
      <ColumnTitle
        title="Shop is Under Development"
        description="Hi! Thank you for visiting this shop page! I am currently developing a new integrated shop where you can download my assets in one single source. However, you can still explore my published assets on my official third-party shops."
        imageSrc="../banners/banner1.png"
        content={
          <>
            <Link
              href="https://www.cgtrader.com/designers/nauvalnever"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="destructive"
                leftIcon={<FaCartShopping />}
                className="w-full"
              >
                Explore Assets on CGTrader
              </Button>
            </Link>
          </>
        }
      />
    </>
  );
};

export default Shop;
