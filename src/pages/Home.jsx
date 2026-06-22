import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const Home = () => {
    return (
        <div>
            <Hero />

            <section className="py-16 px-6">
                <h2 className="text-2xl font-light mb-8">Featured Products</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {products.map((p) => (
                        <ProductCard
                            key={p.id}
                            name={p.name}
                            price={p.price}
                            image={p.image}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;