
const MenuItem = ({ item }) => {
    const { name, recipe, price, image } = item;
    return (
        <div className="flex space-x-2">
            <img className="w-[120px] rounded-b-full rounded-r-full" src={image} alt="" />
            <div>
                <h3>{name}-------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItem;