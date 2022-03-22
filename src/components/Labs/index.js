import React from "react";
import Classes from "./classes";
import {Link} from "react-router-dom";
import Styles from "./styles"
import ConditionalOutput from "./conditional-output";
import TodoItem from "./todo/TodoItem"
import TodoList from "./todo/TodoList"
const Index = () => {
    return(
        <>
            <h1>Labs</h1>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter">
                Tuiter
            </Link>
            <TodoList/>
            <TodoItem/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
        </>
    )
};
export default Index;