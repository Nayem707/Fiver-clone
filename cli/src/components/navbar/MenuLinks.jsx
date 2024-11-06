import React from 'react';

const MenuLinks = ({ item }) => {
  return (
    <li className='menu__item' key={item.menuName}>
      {item.menuName}
    </li>
  );
};

export default MenuLinks;
