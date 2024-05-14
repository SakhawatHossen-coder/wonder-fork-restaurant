import { Typography } from "@material-tailwind/react";
import React from "react";

const Faq = () => {
  return (
    <>
      <Typography variant="h3" className="font-bold my-5 text-center">
        Frequently Asked Questions (FAQ)
      </Typography>
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Do you have any vegetarian or vegan options?
          </div>
          <div className="collapse-content">
            <p>
              Absolutely! We offer a variety of vegetarian and vegan dishes
              across our menu, including the Vegetarian Shepherd's Pie and Vegan
              Buddha Bowl. We can also cater to most dietary restrictions with
              advanced notice.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            What kind of cuisine do you serve?
          </div>
          <div className="collapse-content">
            <p>
              Our menu features a diverse range of cuisines, from classic
              European dishes like Filet Mignon with Truffle Butter to flavorful
              Asian specialties like Spicy Thai Chicken Curry. We also offer
              delectable seafood options and delightful vegetarian and vegan
              creations.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            What is the price range of your entrees?
          </div>
          <div className="collapse-content">
            <p>
              Entrees on our menu range from $24.00 to $45.00, depending on the
              dish. We offer a variety of price points to suit your budget.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Do you offer reservations?
          </div>
          <div className="collapse-content">
            <p>
              We highly recommend making a reservation, especially for evenings
              and weekends. You can easily make a reservation online through our
              website or by calling us at +971-005544.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            What is your dress code?
          </div>
          <div className="collapse-content">
            <p>
              We maintain a sophisticated yet lively atmosphere. Smart casual
              attire is perfectly acceptable.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
