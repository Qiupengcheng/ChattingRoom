import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { todo, onInputChange, onAddTodo } = this.props;
        return (
            <div className="form">
                <input
                    type="text"
                    value={ todo }
                    onChange={ onInputChange }
                />
                <span
                    onClick={ onAddTodo }
                >
                    新增
                </span>
            </div>
        );
    }
}

export default TodoForm;