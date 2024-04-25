import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loaderUser = useLoaderData();

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const newUserData = { name, email };
        console.log(newUserData);
        fetch(`http://localhost:5000/users/${loaderUser._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUserData),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0){
                    alert('User update successfully')
                }
        });
    }

    return (
        <div>
            <h1>
                Update Information of {loaderUser.name}
            </h1>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loaderUser.name} /><br />
                <input type="email" name="email" defaultValue={loaderUser.email} /><br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;
