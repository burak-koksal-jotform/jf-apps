import { useState } from 'react';
import './App.css';
import BuilderAppItem from './components/BuilderAppItem';
import FormItem from './components/FormItem';
import FormPlaceholderItem from './components/FormPlaceholderItem';
import ParagraphItem from './components/ParagraphItem';

import AppItem from './components/AppItem';

const itemComponentMap = {
  FORM_ITEM: FormItem,
  FORM_PLACEHOLDER_ITEM: FormPlaceholderItem,
  PARAGRAPH_ITEM: ParagraphItem
};

const items = [
  {
    id: 0,
    type: 'FORM_ITEM',
    props: {
      title: 'Form Item w/custom bgColor ',
      description: 'Some description',
      itemBgColor: 'wheat',
      itemBorderColor: 'orange',
    }
  },
  {
    id: 1,
    type: 'FORM_PLACEHOLDER_ITEM',
  },
  {
    id: 2,
    type: 'PARAGRAPH_ITEM',
    props: {
      content: `
        <div>
        <div>this is an <strong>HTML content</strong></div>
        <p>with an external <a href="https://google.com">link</a></p>
        </div>
      `
    }
  },
  {
    id: 3,
    type: 'FORM_ITEM',
    props: {
      title: 'Another Form Title',
      description: 'Another description'
    },
  }
];

function App() {
  const [selectedItemID, setSelectedItemID] = useState();
  const toggleBuilderItemSelection = itemID => {
    if (selectedItemID === itemID) {
      setSelectedItemID();
      return;
    }
    setSelectedItemID(itemID);
  };

  return (
    <div className="App">
      <section id="inBuilder">
        <h3>This is the builder section</h3>
        <ul>
          {
            items.map(item => {
              const { id, type, props } = item;
              const ItemComponent = itemComponentMap[type];
              const builderAppItemProps = {
                id, type, ...props
              }
              return (
                <li key={id}>
                  <BuilderAppItem
                    handleSelect={toggleBuilderItemSelection}
                    isSelected={selectedItemID === id}
                    {...builderAppItemProps}
                  >
                    <ItemComponent id={id} {...props} />
                  </BuilderAppItem>
                </li>
              );
            })
          }
        </ul>
      </section>
      <section id="inApp">
        <h3>This is the APP section</h3>
        <ul>
          {
            items
              .filter(({ type }) => type !== 'FORM_PLACEHOLDER_ITEM')
              .map(item => {
                const { id, type, props } = item;
                const ItemComponent = itemComponentMap[type];
                return (
                  <li key={id}>
                    <AppItem {...props}>
                      <ItemComponent id={id} {...props} />
                    </AppItem>
                  </li>
                );
              })
          }
        </ul>
      </section>
    </div>
  );
}

export default App;
