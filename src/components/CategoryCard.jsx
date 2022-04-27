function CategoryCard() {
    return (
        <div className="w-60 rounded-md shadow-lg shadow-emerald-600/50">
            <img
                src="https://picsum.photos/600/300"
                className="h-44 object-cover min-w-full rounded-t-md"
                alt="category"
            />
            <div className="p-4">
                <p>Horror</p>
                <p className="text-sm mt-2">Lorem ipsm blsh blah blah fjdmekf mkk</p>
                <button className="button-cta w-full button-block mt-4">
                    Explore this category
                </button>
            </div>
        </div>
    );
}

export { CategoryCard };
