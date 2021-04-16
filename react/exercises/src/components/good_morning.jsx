import React, {Fragment} from 'react'

export default props =>
    [
        <h1 key='h1'>Goog morning, {props.name}!</h1>,
        <h2 key='h2'>Até breve!</h2>
    ]

// export default props =>
//     <Fragment>
//         <h1>Goog morning, {props.name}!</h1>
//         <h2>Até breve!</h2>
//     </Fragment>

// export default props =>
//     <div>
//         <h1>Goog morning, {props.name}!</h1>
//         <h2>Até breve!</h2>
//     </div>
