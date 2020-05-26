import React from 'react';

import MenuItem from './../menu-item/menu-item.component';

import './directory.styles.scss';

const sections = [
  {
    title: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    id: 1,
    linkUrl: 'shop/hats'
  },
  {
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    id: 2,
    linkUrl: 'shop/jackets'
  },
  {
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    id: 3,
    linkUrl: 'shop/sneakers'
  },
  {
    title: 'womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    size: 'large',
    id: 4,
    linkUrl: 'shop/womens'
  },
  {
    title: 'mens',
    imageUrl: 'https://images.unsplash.com/photo-1550246140-5119ae4790b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    size: 'large',
    id: 5,
    linkUrl: 'shop/mens'
  }
];

class Directory extends React.Component{
  constructor(){
    super();
    this.state = {
      items:sections
    }
  }
  render(){
      return(
        <div className='directory-menu'>
          {
            this.state.items.map(({title,imageUrl,size,id})=> <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />)
          }
        </div>
      ) 
  }
}

export default Directory;