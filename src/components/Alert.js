import React from 'react'



function Alert(props) {

  return (
    <div>
     <div className={`alert alert-warning-${props.alert.type} alert-dismissible fade show`} role="alert">
 <strong>{props.alert.type}</strong>{props.alert.msg}
</div>
    </div>
  )
}

export default Alert


//rfmc for import export function react