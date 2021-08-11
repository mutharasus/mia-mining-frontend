import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Transaction = props => (
  <tr>
    <td>{props.transaction.tx_id}</td>
    <td>{props.transaction.tx_status}</td>
    <td>{props.transaction.block_height}</td>
    <td>{props.transaction.createdAt.substring(0,10)}</td>
  </tr>
)

const backendUri = 'https://mia-mining-backend.mutharasus.repl.co';

export default class TransactionsList extends Component {
  constructor(props) {
    super(props);

    this.state = {transactions: []};
  }

  componentDidMount() {
    axios.get(backendUri+'/transactions/')
      .then(response => {
        this.setState({ transactions: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  transactionsList() {
    return this.state.transactions.map(currentTransaction => {
      return <Transaction transaction={currentTransaction} key={currentTransaction._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Transaction List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Transaction ID</th>
              <th>Transaction Status</th>
              <th>Block Height</th>
              <th>Transaction Date</th>
            </tr>
          </thead>
          <tbody>
            { this.transactionsList() }
          </tbody>
        </table>
      </div>
    )
  }
}