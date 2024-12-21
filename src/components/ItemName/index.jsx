import React from 'react'
import { Link } from 'react-router-dom';
const ItemName = ({ className, itemName, href }) => {
    return (
        <div className={(className, href)}>
          <Link to={href}>
            <li className={className}>{itemName}</li>
          </Link>
        </div>
      );
}

export default ItemName