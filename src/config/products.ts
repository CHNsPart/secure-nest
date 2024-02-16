import { StaticImageData } from "next/image";
import hero3 from "../../public/hero3.png";
import doorlock from "../../public/doorlock.png";
import alarm from "../../public/alarm.png";
import tpOutdoor from "../../public/tpOutdoor.png";
import glass from "../../public/glass.png";
import tpIndoor from "../../public/tpIndoor.png";
import garage from "../../public/garage.png";
import cell from "../../public/cell.png";
import camera from "../../public/camera.png";
import google from "../../public/google.png";
import echo from "../../public/echo.png";
import motion from "../../public/motion.jpg";
import light from "../../public/light.jpg";

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
    image: cell,
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
    image: doorlock,
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
  {
    title: "Wifi Camera",
    image: camera,
    basic: {
        price: 6.99,
        link: "/stripelink",
    },
    silver: {
        price: 5.99,
        link: "/stripelink",
    },
    gold: {
        price: 5.99,
        link: "/stripelink",
    },
    offcity: {
        price: 5.99,
        link: "/stripeLink",
    },
  },
  {
    title: "Door and window alarm",
    image: alarm,
    basic: {
        price: 0.99,
        link: "/stripelink",
    },
    silver: {
        price: 0.75,
        link: "/stripelink",
    },
    gold: {
        price: 0.75,
        link: "/stripelink",
    },
    offcity: {
        price: 0.75,
        link: "/stripeLink",
    },
  },
  {
    title: "Echo shaw 5",
    image: echo,
    basic: {
        price: 8.99,
        link: "/stripelink",
    },
    silver: {
        price: 7.99,
        link: "/stripelink",
    },
    gold: {
        price: 7.99,
        link: "/stripelink",
    },
    offcity: {
        price: 7.99,
        link: "/stripeLink",
    },
  },
  {
    title: "Smart garage door opener",
    image: garage,
    basic: {
        price: 5.99,
        link: "/stripelink",
    },
    silver: {
        price: 5.50,
        link: "/stripelink",
    },
    gold: {
        price: 5.50,
        link: "/stripelink",
    },
    offcity: {
        price: 5.50,
        link: "/stripeLink",
    },
  },
  {
    title: "Glass break sensor",
    image: glass,
    basic: {
        price: 1.75,
        link: "/stripelink",
    },
    silver: {
        price: 1.75,
        link: "/stripelink",
    },
    gold: {
        price: 1.75,
        link: "/stripelink",
    },
    offcity: {
        price: 1.75,
        link: "/stripeLink",
    },
  },
  {
    title: "Google nest thermostat",
    image: google,
    basic: {
        price: null,
        link: "/stripelink",
    },
    silver: {
        price: 7.99,
        link: "/stripelink",
    },
    gold: {
        price: "included",
        link: "/stripelink",
    },
    offcity: {
        price: 7.99,
        link: "/stripeLink",
    },
  },
  {
    title: "Motion sensor",
    image: motion,
    basic: {
        price: 3.99,
        link: "/stripelink",
    },
    silver: {
        price: 3.50,
        link: "/stripelink",
    },
    gold: {
        price: 3.50,
        link: "/stripelink",
    },
    offcity: {
        price: 3.50,
        link: "/stripeLink",
    },
  },
  {
    title: "Smart light bulb",
    image: light,
    basic: {
        price: 0.99,
        link: "/stripelink",
    },
    silver: {
        price: 0.75,
        link: "/stripelink",
    },
    gold: {
        price: 0.75,
        link: "/stripelink",
    },
    offcity: {
        price: 0.75,
        link: "/stripeLink",
    },
  },
  {
    title: "TP-Link indoor plug",
    image: tpIndoor,
    basic: {
        price: 1.99,
        link: "/stripelink",
    },
    silver: {
        price: 1.75,
        link: "/stripelink",
    },
    gold: {
        price: 1.75,
        link: "/stripelink",
    },
    offcity: {
        price: 1.75,
        link: "/stripeLink",
    },
  },
  {
    title: "TP-Link Outdoor plug",
    image: tpOutdoor,
    basic: {
        price: 1.99,
        link: "/stripelink",
    },
    silver: {
        price: 1.75,
        link: "/stripelink",
    },
    gold: {
        price: 1.75,
        link: "/stripelink",
    },
    offcity: {
        price: 1.75,
        link: "/stripeLink",
    },
  },
  {
    title: "Doorbell Camera",
    image: hero3,
    basic: {
        price: 6.99,
        link: "/stripelink",
    },
    silver: {
        price: 5.99,
        link: "/stripelink",
    },
    gold: {
        price: 5.99,
        link: "/stripelink",
    },
    offcity: {
        price: 5.99,
        link: "/stripeLink",
    },
  },
]


