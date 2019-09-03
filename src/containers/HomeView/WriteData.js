import React, { Component } from 'react';

class WriteData extends Component {
  state = {
    data: '',
    dataKey: '',
    txId: null
  }

  handleChange = e => {
    this.setState({data: e.target.value});
  }

  handleClick = e => {
    e.preventDefault();
    const { drizzle, drizzleState } = this.props;
    const { data } = this.state;
    const AmazingDapp = drizzle.contracts.AmazingDapp;
    //const AmazingDapp = this.props.drizzle.contracts.AmazingDapp;
    const dataKey = AmazingDapp.methods['checkIfExists'].cacheCall(data);

    const txId = AmazingDapp
      .methods['registerName']
      .cacheSend(
        data, 
        {from: drizzleState.accounts[0]}
      );

    this.setState({txId,dataKey});
  }

  render() {
    const { transactions, transactionStack } = this.props.drizzleState;
    const txHash = transactionStack[this.state.txId];
    const { AmazingDapp } = this.props.drizzleState.contracts;
    const { dataKey } = this.state;
    const name = AmazingDapp.checkIfExists[dataKey];
  
    return (
      <div>
        <form>
          <div>Enter a name to be saved into a smart contract</div>
          <input type='text' onChange={this.handleChange} />
          <button onClick={this.handleClick}>Submit</button>
        </form>
        <p>{txHash ? `Transaction Status of posting name to chain: ${transactions[txHash] && transactions[txHash].status}` : null}</p>
            <div>
              <div> The Drizzle Data Key is:{dataKey}</div>
              <div>Does this name already exist on chain?</div>
              <div> {JSON.stringify(name && name.value)} </div>
            </div>
       </div>
    
    );
  }
}

export default WriteData;
