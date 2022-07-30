import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['one pnmch']);

  const anAddCategory = (newCategory) => {
    // console.log(newCategory);
    // categories.push(newCategory);
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
    // agregar categoria
    // setCategories([...categories, 'sary', 'chugllo']);
  };

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory
        onNewCategory={(value) => anAddCategory(value)}
        //setCategories={setCategories}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
