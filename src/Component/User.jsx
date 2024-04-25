import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
const User = () => {
    const lodarUsers = useLoaderData();
    const [users, setUsers] = useState(lodarUsers)


    const handleRemoved = _id => {
        console.log('delete', _id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('delete succssfully');
                    const remaining = users.filter(user => user.id !== _id)
                    setUsers(remaining)
                }
            })
    }
    return (
        <div>
            {users.length}
            {
                users.map(user => <p
                    key={user._id}>{user.name}:{user.email}
                    <Link to={`/update/${user._id}`}>
                        <button>Update</button>
                    </Link>
                    <button onClick={() => handleRemoved(user._id)} >X
                    </button></p>
                )
            }
        </div>
    );
};

export default User;