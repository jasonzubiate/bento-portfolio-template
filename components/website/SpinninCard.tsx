import { products } from "@/data";
import ProductCard from "./ProductCard";

export default function SpinninCard() {
  return (
    <section
      id="spinnin"
      className="flex flex-col p-6 rounded-xl border border-dashed border-p-text gap-4"
    >
      <div className="flex flex-col gap-1">
        <h3 className="uppercase text-demo-smoke">Spinnin Studio</h3>
        <p className="text-base text-p-text">
          Here&apos;s our page and some products we'd like to share, all for
          free. Let's keep things spinnin.
        </p>
      </div>
      <ul className="flex flex-col gap-2">
        {products.map((product, index) => (
          <li key={index}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
