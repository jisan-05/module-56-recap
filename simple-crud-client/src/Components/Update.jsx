import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedUsers = useLoaderData()
    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name,email)
        const updatedUser = {name,email}

        fetch(`http://localhost:5000/users/${loadedUsers._id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(updatedUser)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount>0){
                alert("User update successful")
            }
        })

    }

    return (
        <div>
            <h3>Update for : {loadedUsers.name}</h3>

            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loadedUsers.name} />
                <br />
                <input type="email" defaultValue={loadedUsers.email} name="email" id="" />
                <br />
                <input type="submit" value="Update" />
            </form>

        </div>
    );
};

export default Update;