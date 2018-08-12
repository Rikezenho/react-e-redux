import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { showUpdate, showDelete, getList } from "./billingCycleActions";

class BillingCycleList extends Component {
  componentWillMount() {
    this.props.getList();
  }
  renderRows() {
    const list = this.props.list || [];
    return list.map((bc, index) => {
      const { name, month, year } = bc;
      return (
        <tr key={index}>
          <td>{name}</td>
          <td>{month}</td>
          <td>{year}</td>
          <td>
            <button
              className="btn btn-warning"
              onClick={() => this.props.showUpdate(bc)}
            >
              <i className="fa fa-pencil" />
            </button>
            <button
              className="btn btn-danger"
              onClick={() => this.props.showDelete(bc)}
            >
              <i className="fa fa-trash-o" />
            </button>
          </td>
        </tr>
      );
    });
  }
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <th>Nome</th>
            <th>Mês</th>
            <th>Ano</th>
            <th className="table-actions">Ações</th>
          </thead>
          <tbody>{this.renderRows()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({ list: state.billingCycle.list });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ showUpdate, showDelete, getList }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BillingCycleList);
