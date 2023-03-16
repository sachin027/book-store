import React from 'react'

// What Puro Component is Class Component same way
// Memo Component is use for Functional Component

function MemoComp({name}) {
  console.log('Rendering Memo Component')
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(MemoComp)
