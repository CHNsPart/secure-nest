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
    description?: string,
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
    description: `
    Designed to provide you with a better cell signal, ideal if you live outside the city, have a cottage or getaway, or experience weak signals in the basement.Compatible With All Canadian Carriers. Boosts Voice, Text and Data Signals The Same Time. Automatic Adjust System Gain And Power Level To Get The Best Communication Result. No Manual Intervention is Needed.
    `,
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
    description: `Experience the exceptional convenience of our smart door lock, offering a variety of secure access options including Fingerprint, TuYa APP, Password, IC Card, and Mechanical Key. This electronic digital door lock allows keyless entry, with the added flexibility of APP control for seamless integration into your smart home. Enjoy the peace of mind that comes with advanced security features and effortless access control.`,
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
    description: `Designed to provide you with Long-term and enhanced security protection so you can live a safe, intelligent life.

    Motion-Activated Spotlight.
    
    Motion Detection Alert.
    
    Works with Alexa`,
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
    description: `This alarm system triggers a loud siren when a door or window is opened, serving as a deterrent to potential intruders and alerting residents. The set includes five 120-decibel window/door alarms with three adjustable settings (off, chime, and alarm). Ideal for securing various spaces, including homes, garages, apartments, dorm rooms, mobile homes, RVs, offices, and more.`,
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
    description: `Manage your smart home - Look in when you're away with the built-in camera. Control compatible devices like cameras, lights, and more using the interactive display, your voice, or your motion.`,
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
    description: `Receive real-time notifications to any garage door activity for added peace of mind. Compatibility: Works with most brands of garage door openers manufactured after 1993 that use photoelectric sensors that do not shut off. It is not intended for use with openers in which the photoelectric sensors located near the bottom of the garage door change power mode (e.g., lights on the sensors turn off after the door is closed), or any Chamberlain Group opener with a yellow learn button manufactured between 2010 and 2021, or any Linear opener`,
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
    description: `125dB Loud Ultra-Slim Anti-Theft Alarm for Door and Window Glass Break Vibration Sensor Alert with Adjustable Sensitivity`,
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
    description: `Meet the Nest Thermostat, the helpful thermostat for your comfort. It can turn itself down to save energy when you leave the house. You can control it from anywhere with the Google Home app whether you are on an errand or in bed. And it is easy to install yourself.`,
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
    description: `Experience intelligent automation with our cutting-edge motion sensor technology. Our motion sensors are designed to effortlessly enhance your environment by detecting movement and providing seamless control of connected devices. Enjoy convenience, energy efficiency, and heightened security with our state-of-the-art motion sensor solutions. Elevate your smart living experience with responsive and adaptive technology that brings comfort and efficiency to every corner of your space.`,
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
    description: `Spruce up your interior setting with the Nanoleaf Essentials Matter A19 60W smart LED light bulb. This Matter-enabled bulb works over Thread with a Thread Border Router and it is designed to deliver coolest to warmest whites and 16M+ vibrant colours. You can automate the light to work on specific timings and sync it with the colours from your favourite movies or games using the compatible apps.`,
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
    description: `APP Remote Control - Easily control your home appliances at any time and any place through the Smart Life APP.

    Voice Control - Smart plugs that work with Alexa and Google Assistant.`,
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
    description: `2 smart outdoor outlets: Double the outlets control 2 outdoor devices from anywhere together or individually, with one smart plug.

    Work with Alexa and Google Home Assistant.
    
    Scheduling: Schedule your plugs to turn on/off automatically at specified times or according to Sunrise/Sunset`,
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
    description: "See who is at your door even when you are not at home. 1080P HD picture quality. Way Audio and Voice changer. PIR Motion Detection & Wide Angle View.",
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


