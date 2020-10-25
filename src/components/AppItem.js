import React from 'react';

const AppItem = (props) => {
  const { children, itemBgColor = 'white', itemBorderColor } = props;

  const generateStyle = () => {
    const style = {
      backgroundColor: itemBgColor
    };

    if(itemBorderColor){
      style.border = `1px solid ${itemBorderColor}`;
    }
    return style;
  }

  return (
    <div
      style={generateStyle()}
      className='app-item'
    >
      {children}
    </div>
  )
};


export default AppItem;
