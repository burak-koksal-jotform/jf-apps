import React from 'react';

const FormItem = ({ id, title, description }) => {
  return (
    <div
      className='formItem'
      onClick={() => {
        console.log('navigate to form: ', id);
      }}
    >
      <div>{title}??Inline edit??</div>
      <div>{description}</div>
    </div>
  );
}

export default FormItem;
