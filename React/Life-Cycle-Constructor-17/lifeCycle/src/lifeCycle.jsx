import React, { Component } from 'react'
import { useState } from 'react';

export default class lifeCycle extends Component {

  constructor(){
    super();
    this.state = {
      name: "Moiz"
    }
  }
  render() {
    return (
      <>
       <h1>{this.state.name}</h1>
      </>
    )
  }
}
