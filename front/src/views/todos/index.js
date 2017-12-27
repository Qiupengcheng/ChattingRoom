import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators  } from 'redux';
import todoActionCreators from '../../redux/todos/actions';

import TodoForm from '../../components/business/todos/todoForm';
import TodoList from '../../components/business/todos/todoList';

class Todos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ''
        };
        this.handleIntputChange = this.handleIntputChange.bind(this);
        this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleToggleTodo = this.handleToggleTodo.bind(this);
    }

    handleIntputChange(e) {
        console.log()
        this.setState({
            todo: e.target.value
        });
    }

    handleAddTodo() {
        const { actions } = this.props;
        actions.add_todo({
            id: Date.now(),
            content: this.state.todo,
            isDeleted: false,
            isFinish: false
        });
        this.setState({
            todo: ''
        });
    }

    handleDeleteTodo(id) {
        const { actions } = this.props;
        console.log(id);
        actions.delete_todo({id});
    }

    handleToggleTodo(id) {
        const { actions } = this.props;
        actions.finish_todo({id});
    }

    render() {
        const { todoList } = this.props;
        return(
            <div className="todos">
                <TodoForm
                    todo={ this.state.todo }
                    onInputChange={ this.handleIntputChange }
                    onAddTodo={ this.handleAddTodo }
                />
                <TodoList
                    todos={ todoList }
                    onDeleteTodo={ this.handleDeleteTodo }
                    onToggleTodo={ this.handleToggleTodo }
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todoList: state.todos.todoList
    }
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(todoActionCreators, dispatch)
    }
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Todos));