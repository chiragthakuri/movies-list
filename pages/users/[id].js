export const getStaticPaths = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    const paths = data.map(user =>{
        return {
            params: {id: user.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) =>{
        const id = context.params.id;
        const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
        const data = await res.json()

        return { 
            props: {user: data}
         }
}

const Details = ({user}) => {
    return ( 
        <div>
            <h1>Details Page</h1>
            <h2>Name: {user.name}</h2>
            <p><strong>Address:</strong> {user.address.city}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Website:</strong> {user.website}</p>
        </div>
     );
}
 
export default Details;