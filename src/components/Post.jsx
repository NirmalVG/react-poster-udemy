import React from "react";
import classes from "./Post.module.css";
import { Link } from "react-router-dom";

const Post = ({ id, author, body }) => {
    return (
        <div className={classes.post}>
            <Link to={id}>
                <p>{author}</p>
                <p>{body}</p>
            </Link>
        </div>
    );
};

export default Post;
