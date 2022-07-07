
import Link from "next/link";

const Home = () => {
    return (    
    <div>
      
        <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aliquam aliquid, voluptatum repellat non atque, provident debitis dolorem officiis necessitatibus architecto ad cupiditate rem nihil ab quo unde, minus amet!    </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aliquam aliquid, voluptatum repellat non atque, provident debitis dolorem officiis necessitatibus architecto ad cupiditate rem nihil ab quo unde, minus amet!    </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aliquam aliquid, voluptatum repellat non atque, provident debitis dolorem officiis necessitatibus architecto ad cupiditate rem nihil ab quo unde, minus amet!    </p>
        <Link href="movies">
            <a>See All Movies Listing</a>
        </Link>
    </div>);
}
 
export default Home;