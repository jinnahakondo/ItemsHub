import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import Title from "@/components/Title/Title";
import ItemsCards from "@/components/Cards/ItemsCards";
import Link from "next/link";
import { connect } from "@/app/lib/dbConnect";

const FeaturedItems = async () => {

  const productsCol = await connect("products")
  const featuredProducts = await productsCol.find().limit(5).toArray() || []

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

        <Link href={'/products'} className="btn btn-link text-primary gap-1">
          View all
          <span>→</span>
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
        {featuredProducts.map((item) => (
          <ItemsCards key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedItems;
