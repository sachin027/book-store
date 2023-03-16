import React from 'react'
import './myStyles.css'

// const Greet = props => {
//     console.log(props)
//     return (
//         <div>
//             <h1>Hello {props.name}</h1>
//             {props.children}
//         </div>
//     )
// }

// const Greet = ({name,children}) => {
//     return (
//         <div>
//             <h1>Hello {name}</h1>
//             {children}
//         </div>
//     )
// }

// const Greet = props => {
//     const {name,children} = props
//     return (
//         <div>
//             <h1>Hello {name}</h1>
//             {children}
//         </div>
//     )
// }

// export default Greet

function Title(props) {
    console.log(props)
    let className = props.primary ? 'primary' : ''
    return (
        <div>
          <p className={`${className} primary font-xl`}>This is {props.ti.title}, {props.ti.description}</p>
        </div>
    )
}

export default React.memo(Title)

