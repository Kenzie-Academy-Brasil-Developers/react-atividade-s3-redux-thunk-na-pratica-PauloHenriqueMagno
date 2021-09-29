import { useSelector } from "react-redux";

const ShowComments = () =>{
    const user = useSelector(state=> state.user)

    return (
        <div>
            <div className="user">
                <img src={user.user_image} alt={user.name} />
                <h2>{user.name}</h2>
            </div>
            <ul className="comments">
                {user.comments.map(comment => {
                    return (
                        <li>
                            {comment}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ShowComments;