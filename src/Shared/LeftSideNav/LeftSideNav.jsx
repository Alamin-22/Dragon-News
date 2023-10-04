import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState(Array);
    useEffect(() => {
        fetch("/categories.json")
            .then(response => response.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h1 className="text-3xl text-center">All Category</h1>
            {
                categories.map(category => <NavLink
                    className={"block px-10 py-4 font-semibold btn btn-ghost"}
                    
                    key={category.id} to={`/category/${category.id}`}>
                    {category.name}
                </NavLink>)
            }
        </div>
    );
};

export default LeftSideNav;