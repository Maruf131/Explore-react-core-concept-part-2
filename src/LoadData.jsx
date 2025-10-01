import { use } from "react";


const LoadData = ({loadUsers}) => {
    const loadUser = use(loadUsers);
    console.log(loadUser);
    
    return (
        <div>
            <h1>FetchIng data from json placeHolder</h1>
            <p>Users : {loadUser.length}</p>
        </div>
    );
};

export default LoadData;