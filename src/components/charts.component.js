import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Blob = props => (
  <tr>
    <td>{props.blob.blob_name}</td>
    <td>{props.blob.blob_value}</td>
  </tr>
)

export default class Charts extends Component {
  constructor(props) {
    super(props);

    this.state = {blobs: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/blobs/')
      .then(response => {
        this.setState({ blobs: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  blobsList() {
    return this.state.blobs.map(currentBlob => {
      return <Blob blob={currentBlob} key={currentBlob._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Blobs for Charts</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Blob Name</th>
              <th>Blob Value</th>
            </tr>
          </thead>
          <tbody>
            { this.blobsList() }
          </tbody>
        </table>
      </div>
    )
  }
}