import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css"
const Home = () => {
    return ( 
        <>
            <Head>
                <title>Movies List | Home</title>
                <meta name="keywords" content="movies"/> 
            </Head>   
            <div>
            
                <h1 className={styles.title}>Home</h1>
                <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aliquam aliquid, voluptatum repellat non atque, provident debitis dolorem officiis necessitatibus architecto ad cupiditate rem nihil ab quo unde, minus amet!    </p>
                <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aliquam aliquid, voluptatum repellat non atque, provident debitis dolorem officiis necessitatibus architecto ad cupiditate rem nihil ab quo unde, minus amet!    </p>
                <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aliquam aliquid, voluptatum repellat non atque, provident debitis dolorem officiis necessitatibus architecto ad cupiditate rem nihil ab quo unde, minus amet!    </p>
                <Link href="movies">
                    <a className={styles.btn}>See Users Listing</a>
                </Link>
            </div>
        </>
        );
}
 
export default Home;