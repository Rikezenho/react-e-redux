import React from 'react'
import IconButton from '../template/iconButton'
import { markAsDone, markAsPending, remove } from './todoActions'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const TodoList = props => {
    const renderRows = () => {
        const list = props.list || []
        const { markAsDone, markAsPending, remove } = props

        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton
                        style="success"
                        icon="check"
                        onClick={() => markAsDone(todo)}
                        hide={todo.done} />
                    <IconButton
                        style="warning"
                        icon="undo"
                        onClick={() => markAsPending(todo)}
                        hide={!todo.done} />
                    <IconButton
                        style="danger"
                        icon="trash-o"
                        onClick={() => remove(todo)}
                        hide={!todo.done} />
                </td>
            </tr>
        ))
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions"></th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = (state) => ({ list: state.todo.list })
const mapDispatchToProps = (dispatch) => bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)