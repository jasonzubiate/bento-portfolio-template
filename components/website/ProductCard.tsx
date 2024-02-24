export default function ProductCard({ product }: { product: Product }) {
  return (
    <a
      id={product.title}
      href={product.url}
      target="_blank"
      className="flex flex-col w-full p-3 bg-blush-gray hover:bg-[#262626] rounded-lg transition-all duration-300"
    >
      <h5 className="text-demo-smoke text-sm">{product.title}</h5>
      <p className="text-p-text text-sm">{product.description}</p>
    </a>
  );
}
