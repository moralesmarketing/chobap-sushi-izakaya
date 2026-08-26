import Hero from "@/components/Hero";
import QuickActions from "@/components/QuickActions";
import DishSpotlight from "@/components/DishSpotlight";
import FanFavorites from "@/components/FanFavorites";
import OrderCTA from "@/components/OrderCTA";
import Story from "@/components/Story";
import Testimonials from "@/components/Testimonials";
import FAQAccordion from "@/components/FAQAccordion";
import LocationSection from "@/components/LocationSection";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickActions />

      <DishSpotlight
        eyebrow="House Signature"
        title="Chino Hills Roll"
        description="Our most-reviewed roll on Yelp. Crunch roll wrapped with salmon and yellowtail, finished with truffle oil and onion — built to be the first thing you order."
        price="$19.00"
        image="/images/roll-plated-sauce.jpg"
        imageAlt="Specialty sushi roll plated tableside at Chobap"
      />

      <DishSpotlight
        eyebrow="Nigiri & Sashimi"
        title="Hand-Cut, Fresh Through Service"
        description="From everyday favorites like salmon and tuna to premium picks like toro, uni, and ama ebi — every piece is cut to order at the counter, not pre-portioned ahead of time."
        price="Nigiri from $6.00"
        image="/images/sushi-platter-bar.jpg"
        imageAlt="Assorted nigiri sushi platter at the Chobap sushi bar"
        reverse
      />

      <FanFavorites />
      <OrderCTA />
      <Story />
      <Testimonials />
      <FAQAccordion />
      <LocationSection />
    </>
  );
}
