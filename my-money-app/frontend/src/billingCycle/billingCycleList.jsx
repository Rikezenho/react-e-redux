import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { showUpdate, getList } from "./billingCycleActions";

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
            <th>Ações</th>
          </thead>
          <tbody>{this.renderRows()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({ list: state.billingCycle.list });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ showUpdate, getList }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BillingCycleList);
