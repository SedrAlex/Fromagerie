import { SelectedPage, ProductType } from "@/shared/types"
import image1 from "@/assets/image1.jpeg";
import image2 from "@/assets/image2.jpeg";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.jpeg";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.jpeg";
import image7 from "@/assets/image7.jpeg";
import image8 from "@/assets/image8.png";
import image9 from "@/assets/image9.png";
import image10 from "@/assets/image10.jpeg";
import image11 from "@/assets/image11.jpeg";
import image12 from "@/assets/image12.jpeg";
import image13 from "@/assets/image13.jpeg";
import image14 from "@/assets/image14.jpeg";
import image15 from "@/assets/image15.jpeg";

import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Product from "./Product";

const products: Array<ProductType> = [
    {
      name: "Emmental Cheese",
      image: image1,
    },
    
    {
      name: "Cheddar Cheese",
      image: image3,
    },
    {
      name: "Mimolette Cheese",
      image: image4,
    },
    {
      name: "Roquefort Cheese",
      image: image5,
    },

    {
         name: "Epoisse Cheese",
         image: image15,
     },
     {
        name: "American Cheese",
        image: image6,
    },
    {
        name: "Creamy Cheese",
        image: image7,
    }, 
    {
        name: "Chaource Cheese",
        image: image8,
    }, 
    {
        name: "Feta Cheese",
        image: image9,
    },
    {
        name: "Mozarella Cheese",
        image: image10,
    },
    {
        name: "Camembert Cheese",
        image: image11,
    },
    {
        name: "Saint-Neclaira Cheese",
        image: image12,
    },
    {
        name: "Munster Cheese",
        image: image13,
    },
    {
        name: "Maroilles Cheese",
        image: image14,
    },
   
    
  ];
  
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};
const Products = ({ setSelectedPage }: Props) => {
return (
    <section id="products" className="w-full bg-gray-20 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Products)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CHEESE</HText>
            <p className="py-5 md: text-lg">
            Cheese making is a delicate and sometimes challenging balance of science and art.  
            Having a passion and love for what you do, will definitely be reflected in the end product.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[400px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {products.map((item: ProductType, index) => (
              <Product
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};


export default Products