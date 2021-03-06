import React from 'react'
import './Item.css'

let Item = ({ item, children }) => (
  <div className='Item'>
    <div className='Item-left'>
      <div className='Item-image' />
      <div className='Item-title'>{item.name}</div>
      <div className='Item-description'>{item.description}</div>
    </div>
    <div className='Item-right'>
      <div className='Item-price'>${item.price}</div>
      {children}
    </div>
  </div>
)
Item.propTypes = {
  item: React.PropTypes.object.isRequired,
  onAddToCart: React.PropTypes.func.isRequired
}

export default Item
