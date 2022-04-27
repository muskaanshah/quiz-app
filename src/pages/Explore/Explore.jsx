const { CategoryCard } = require("../../components/CategoryCard/CategoryCard");

function Explore() {
    return (
        <div className="container-body centered flex-col">
            <h1 className="text-center text-3xl tracking-wide font-semibold my-8">
                Categories
            </h1>
            <div className="flex flex-wrap gap-8 justify-center mt-4 lg:max-w-4xl">
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
            </div>
        </div>
    );
}

export { Explore };
