import { useDispatch } from "react-redux";
import { addCommentThunk } from "../../store/modules/user/thunks";
import { useState } from "react";

const FormComment = () =>{
    const dispatch = useDispatch();

    const [comment, setComment] = useState("")

    return (
        <div className="form">
            <input
                placeholder="Comment..."
                onChange={e => setComment(e.target.value)}
                value={comment}
            />
            <button onClick={() => {
                dispatch(addCommentThunk(comment))
                setComment("")
            }}>
                new comment
            </button>
        </div>
    )
}

export default FormComment;