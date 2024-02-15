import { useState } from "react";
import { Button } from "../components/Button";

import "../globalStyled.css";

export const BlockState = () => {
    const [count, setCount] = useState(0);
    const [users, setUsers] = useState([]);
    console.log("Count:", count);

    const loadData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        setUsers(await response.json());
    };

    console.log("Count:", users);
    return (
        <div className="BlockState">
            <Button label="useStatePlus!" handleClick={() => setCount(count + 1)} />
            <Button label="useStateMinus!" handleClick={() => setCount(count - 1)} />
            <Button label="LoadData" handleClick={loadData} />

            <h2 style={{ color: count < 0 ? "red" : "#f7ff00" }}>useState {count}</h2>

            <div className="dataUser">
                <ul>
                    {users.map((user) => (
                        <li className="baseDataUser" key={user.id}>
                            <div>
                                <h3>Name:</h3> <p>{user?.name}</p>
                            </div>
                            <div>
                                <h3>eMail:</h3> <p>{user?.email}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
