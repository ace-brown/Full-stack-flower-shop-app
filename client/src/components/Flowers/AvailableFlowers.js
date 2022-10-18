import classes from "./AvailableFlowers.module.css";
import FlowerItem from "./FlowerItem/FlowerItem";
import Card from "../UI/Card";
const DUMMY_FLOWERS = [
  {
    id: "f1",
    name: "Dahlia",
    description: "Symbol of beauty, commitment, and kindness.",
    price: 25.99,
  },
  {
    id: "f2",
    name: "Daisy",
    description: "Symbol of childbirth and motherhood!",
    price: 36.5,
  },
  {
    id: "f3",
    name: "Forget-me-not",
    description: "Symbol of true love!",
    price: 12.99,
  },
  {
    id: "f4",
    name: "Lavender",
    description: "Symbol of purity, silence and serenity!",
    price: 18.99,
  },
];

const AvailableFlowers = () => {
  const flowersList = DUMMY_FLOWERS.map((flower) => (
    <FlowerItem
      id={flower.id}
      name={flower.name}
      description={flower.description}
      price={flower.price}
    />
  ));

  return (
    <section className={classes.flowers}>
      <Card>
        <ul>{flowersList}</ul>
      </Card>
    </section>
  );
};

export default AvailableFlowers;
