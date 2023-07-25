import { useState } from 'react'

const ConditionalRender = () => {

    const[x] = useState(true);

  return (
    <div>
        <h2>Will this be shown? </h2>
        {x && <p>If X is true, yes!</p>}
    </div>
  )
}

export default ConditionalRender