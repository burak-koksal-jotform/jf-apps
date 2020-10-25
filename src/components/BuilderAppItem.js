import React from 'react';

import AppItem from './AppItem';

const BuilderAppItem = ({
  isAvailable,
  warningMessage,
  handleSelect,
  isSelected,
  type,
  id,
  children,
  ...rest
}) => {

  const handleClick = (e) => {
    if (type === 'FORM_PLACEHOLDER_ITEM') {
      // Clear selection and let component onCLick handle its job
      handleSelect();
    } else {
      handleSelect(id);
      e.stopPropagation();
    }
  }

  const generateClickHandler = () => {
    return {
      [type === 'FORM_ITEM' ? 'onClickCapture' : 'onClick']: handleClick
    }
  }

  return (
    <div
      className={`builderAppItem ${isSelected ? 'selected' : ''}`}
      style={{
        border: isSelected ? '1px solid blue' : 'none'
      }}
      {...generateClickHandler()}
    >
      <AppItem {...rest}>
        {children}
      </AppItem>
    </div>
  );
}

export default BuilderAppItem;
