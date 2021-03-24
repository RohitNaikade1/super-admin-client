import React from 'react'

 const Header = ({headers}) => {
    return (
        <thead>
            {headers.map(head=>{
                return <th key={head.field}><h3>{head.name}</h3></th>
            })}
        </thead>
    )
}
export default Header;
