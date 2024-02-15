import { StaticImageData } from "next/image";
import dpic1 from "/dpic1.jpg";

export interface Product {
    title: string;
    image: StaticImageData;
    basic: {
      price: number | string | null;
      link: string | null;
    };
    silver: {
      price: number | string | null;
      link: string | null;
    };
    gold: {
      price: number | string | null;
      link: string | null;
    };
    offcity: {
      price: number | string | null;
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
    },
    {
      title: "Doorlock",
      image: dpic1, // Add the correct image for Doorlock
      basic: {
          price: null,
          link: null,
      },
      silver: {
          price: 5.75,
          link: "/stripelink",
      },
      gold: {
          price: 4.50,
          link: "/stripelink",
      },
      offcity: {
          price: 4.75,
          link: "/stripeLink",
      },
  },
]


