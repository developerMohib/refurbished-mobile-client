import { Accordion } from "flowbite-react";

const MyAccordion = () => {
  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>What is a refurbished mobile phone? </Accordion.Title>
        <Accordion.Content>
          <p>A refurbished mobile phone is a pre-owned device that has been restored to full working condition by professionals. It undergoes rigorous testing, repairs (if necessary), and cleaning to ensure it functions like a new phone. Refurbished phones may come from returns, trade-ins, or slight cosmetic imperfections but are fully operational.</p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Is the quality of a refurbished phone guaranteed?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Yes, refurbished phones are tested extensively to meet quality standards. Most refurbished phones are sold with warranties, ranging from 6 months to 1 year, ensuring peace of mind. The device’s performance is checked thoroughly, and any defective parts are replaced before sale.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
        What’s the difference between refurbished and used mobile phones?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          The main difference lies in testing and warranties. A refurbished phone has been inspected, repaired, and certified for resale, often including a warranty. Used phones are typically sold as-is without guarantees or repairs, and their condition is not always as thoroughly vetted.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro,
            and even Tailwind UI as there is no technical reason stopping you
            from using the best of two worlds.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default MyAccordion;
