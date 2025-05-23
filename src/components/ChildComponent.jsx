import React from 'react'
import SubComponent from './SubComponent'

const ChildComponent = (profs) => {
  return (
    <div>
      <SubComponent data={profs.data}></SubComponent>
    </div>
  );
}

export default ChildComponent
