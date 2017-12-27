import React from 'react';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { todos, onDeleteTodo, onToggleTodo } = this.props;
        const dones = todos.filter(todo => todo.isFinished);
        const undones = todos.filter(todo => !todo.isFinished);
        return (
            <div className="todo-list">
                <h3>未完成</h3>
                <ul>
                    {
                        undones.map(todo => {
                            return (
                                <li
                                    key={ todo.id }
                                >
                                    <input
                                        type="checkbox"
                                        onChange={ e => onToggleTodo(todo.id) }
                                    />
                                    <span>{ todo.content }</span>
                                    <a
                                        href="#"
                                        onClick={ e => onDeleteTodo(todo.id) }
                                    >
                                        删除
                                    </a>
                                </li>
                            );
                        })
                    }
                </ul>
                <h3>已完成</h3>
                <ul>
                    {
                        dones.map(todo => {
                            return (
                                <li
                                    key={ todo.id }
                                >
                                    <span>{ todo.content }</span>
                                    <a
                                        href="#"
                                        onClick={ e => onDeleteTodo(todo.id) }
                                    >
                                        删除
                                    </a>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>

        );

    }
}

export default TodoList;