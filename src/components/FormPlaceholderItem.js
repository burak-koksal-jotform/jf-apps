const FormPlaceholderItem = ({content}) => {
  return (
    <div
      className="formPlaceholderItem"
      onClick={() => {
        console.log('Open form picker');
      }}
    >
      + Click to add form(s)
    </div>
  )
};

export default FormPlaceholderItem;
