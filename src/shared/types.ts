export enum SelectedPage{
    Home = "home",
    Products = "products",
    About = "about",
    ContactUs  = "contactus",
  }

  export interface OurStoryType {
    icon: JSX.Element;
    title: string;
    description: string;
  }

  export interface ProductType {
    name: string;
    description?: string;
    image: string;
  }