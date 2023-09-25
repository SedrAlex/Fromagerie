import{
    TrophyIcon,
    HeartIcon,
    SparklesIcon,
} from "@heroicons/react/24/solid"
import { OurStoryType,SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import ActionButton from "@/shared/ActionButton";
import OurStoryPageGraphic from "@/assets/cheese.gif";

import OurStory from "./OurStory";

const Stories: Array<OurStoryType> = [
    {
      
      icon: <TrophyIcon className="h-6 w-6" />,
      title: "Why Fromagerie?",
      description:
        "We've been making cheese in Paris for over 100 years, which may be one reason we win so many awards for it. It's what happens when a whole country dreams in cheese.",
    },
    {   
        icon: <HeartIcon className="h-6 w-6" />,
        title: "RBGH FREE",
        description:
          "In December 1993, we became the first in the country to assure its customers that milk for its products was produced without the use of synthetic growth hormones.",
      },
      {
         
        icon: <SparklesIcon className="h-6 w-6" />,
        title: "ORGANIC CHEESE",
        description:
          "Organic farming helps maintain the health of the soil, the animals, and the farmers. Turned by hand and made with love, our cheese will please your taste buds!",
      },
    ];

    const container = {
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.2 },
        },
      };
      
//

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const OurStories = ({ setSelectedPage }: Props) => {
  return (
      <section id="about" className="mx-auto w-5/6 pt-24 pb-32">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.About)}
        >
    {/* HEADER */}
                    <motion.div
                        className="md:my-5 md:w-3/5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        >
                        <HText>MORE THAN JUST CHEESE.</HText>
                        <p>
                        Fromagerie has taken the ideal of traditional farmstead cheese and elevated it. By using raw milk exclusively from our own dairy farm we are able to guarantee quality from pasture to plate.
                         </p>
                       
                    </motion.div>
    {/* OUR STORIES */}
    <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {Stories.map((benefit: OurStoryType) => (
            <OurStory
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex bg-gray-20">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={OurStoryPageGraphic}
            />
            {/* DESCRIPTION */}
          <div>
          {/* TITLE */}
          <div className="relative">
            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <HText>
                Crops to Cows, Cows to Cheese,{" "}
                    <span className="text-emerald-800">Cheese to the Consumer</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
              Fromagerie features our signature sheep cheeses, 
              our mixed milk artisan cheeses and  milk ice cream made on our sustainable farm. 
              You will also find an amazing selection of sandwiches, charcuterie boards, beer, 
              wine and other wonderful foods and crafts from local small-batch makers.
              </p>
              <p className="mb-5">
              When you combine our high-quality milk with the technique and expertise of our cheesemakers, you get award-winning cheese. 
              Our two creameries produce a total of fourteen distinct kinds of cheese in addition to regularly developing new R&D projects and special-release cheeses.
              Our cheesemakers strive to preserve the quality and flavor of our milk in every curd, 
              carrying our Taste of Place as each wheel eventually makes its way toward peak ripeness.
              </p>
            </motion.div>
            {/* BUTTON */}
            <div className="relative mt-16 ">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-Sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Visit us
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default OurStories;

