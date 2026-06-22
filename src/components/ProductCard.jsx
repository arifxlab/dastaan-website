function ProductCard({ name, price, image }) {
    return (
        <article className="overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <img src={image} alt={name} className="h-72 w-full object-cover" />

            <div className="space-y-2 p-4">
                <h3 className="text-lg font-semibold text-stone-900">{name}</h3>
                <p className="text-sm font-medium text-stone-600">{price}</p>
            </div>
        </article>
    );
}

export default ProductCard;