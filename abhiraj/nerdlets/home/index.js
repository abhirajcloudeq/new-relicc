import React from 'react';

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class HomeNerdlet extends React.Component {
  constructor(){
    super();
    this.state= {
        count:1
    }
    
}
increment = () => {
this.setState((prevState) => ({
    count: prevState.count + 1,
  }));
};
decrement = () => {
    this.setState((prevState) => ({
        count: prevState.count - 1,
      }));
    };
  


render(){
    return(
        <div>
          <div className='text'>{this.state.count}</div>
          <button onClick={this.increment}  className='button'>INCREMENT THE VALUE </button>
          <button onClick={this.decrement} className='button'>DECREMENT THE VALUE </button>
        </div>
    )
}
}
