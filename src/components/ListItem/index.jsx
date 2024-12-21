import React from 'react'

const ListItem = ({children,className}) => {
    return <ul className={className}>{children}</ul>;
}

export default ListItem