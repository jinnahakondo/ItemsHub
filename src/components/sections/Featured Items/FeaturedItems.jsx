import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import Title from "@/components/Title/Title";
import ItemsCards from "@/components/Cards/ItemsCards";

const items = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    price: "$299",
    tag: "TECH",
    image: "/images/headphone.png",
  },
  {
    id: 2,
    title: "Mechanical Keyboard Pro",
    price: "$150",
    tag: "OFFICE",
    image: "/images/keyboard.png",
  },
  {
    id: 3,
    title: "Ergonomic Task Chair",
    price: "$420",
    tag: "FURNITURE",
    image: "/images/chair.png",
  },
  {
    id: 4,
    title: "Premium Wireless Headphones",
    price: "$299",
    tag: "TECH",
    image: "/images/headphone.png",
  },
  {
    id: 5,
    title: "Mechanical Keyboard Pro",
    price: "$150",
    tag: "OFFICE",
    image: "/images/keyboard.png",
  },
  {
    id: 6,
    title: "Ergonomic Task Chair",
    price: "$420",
    tag: "FURNITURE",
    image: "/images/chair.png",
  },
];

const FeaturedItems = () => {
  return (
    <section className="">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <Title>
            Featured Items
          </Title>
          <p className="text-base-content/60">
            Top picks from our community this week
          </p>
        </div>

        <button className="btn btn-link text-primary gap-1">
          View all
          <span>→</span>
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
        {items.map((item) => (
          <ItemsCards key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedItems;
