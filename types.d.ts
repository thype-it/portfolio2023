type ScrollMotionProps = {
  scaleMotion?: import("framer-motion").MotionValue<number>;
  opacityMotion?: import("framer-motion").MotionValue<number>;
  wrapperOpacityMotion?: import("framer-motion").MotionValue<number>;
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
