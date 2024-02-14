import { StaticImageData } from "next/image";
import dpic1 from "/dpic1.jpg";

export interface Product {
    title: string;
    image: StaticImageData;
    basic: {
      price: number | null;
      link: string | null;
    };
    silver: {
      price: number | null;
      link: string | null;
    };
    gold: {
      price: number | null;
      link: string | null;
    };
    offcity: {
      price: string;
      link: string | null;
    };
  }

export const products: Product[] = [
    {
        title: "Cell phone signal booster",
        image: dpic1,
        basic: {
            price: null,
            link: null
        },
        silver: {
            price: 13.99,
            link: "/stripelink"
        },
        gold: {
            price: 11.99,
            link: "/stripelink"
        },
        offcity: {
            price: "included",
            link: null
        },
    }
]


