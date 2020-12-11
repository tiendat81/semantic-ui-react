import React, { useState } from 'react';
import { Button, Container } from 'semantic-ui-react';
import CategoryForm from './Category/components/CategoryForm';
import CategoryList from './Category/components/CategoryList';

const initialCategoryList = [
  {
    id: '1',
    value: 'testing 1',
    alias: 'testing-1',
  },
  {
    id: '2',
    value: 'testing 2',
    alias: 'testing-2',
  },
];

function CategoryFeature() {
  const [openCategoryModal, setOpenCategoryModal] = useState(false);

  const [categoryList, setCategoryList] = useState(initialCategoryList);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleOpenCategoryModal = () => {
    setOpenCategoryModal(true);
  };

  const handleCloseModal = () => {
    setOpenCategoryModal(false);
  };

  const handleFormSubmit = (formValues) => {
    if (selectedCategory) {
      setCategoryList((currentList) => {
        const newList = [...currentList];
        const updatedIdx = newList.findIndex((x) => x.id === selectedCategory.id);
        if (updatedIdx < 0) return currentList;

        newList[updatedIdx] = {
          ...newList[updatedIdx],
          ...formValues,
        };

        return newList;
      });
      setSelectedCategory(null);
      setOpenCategoryModal(false);
      return;
    }

    setCategoryList((currentList) => {
      if (formValues.alias === '') {
        formValues.alias = formValues.value.split(' ').join('-');
      }

      const newList = {
        id: new Date().getTime().toString(),
        ...formValues,
      };
      setOpenCategoryModal(false);
      return [...currentList, newList];
    });
  };

  const handleEditCategory = (category) => {
    setSelectedCategory(category);
    setOpenCategoryModal(true);
  };

  const handleRemoveCategory = (category) => {
    setCategoryList((currentCategory) => currentCategory.filter((x) => x.id !== category.id));
  };

  return (
    <Container>
      <Button basic onClick={handleOpenCategoryModal}>
        Add New
      </Button>

      <CategoryList
        categoryList={categoryList}
        onRemoveCategory={handleRemoveCategory}
        onEditCategory={handleEditCategory}
      />

      {openCategoryModal && (
        <CategoryForm
          dimmer="blurring"
          open={openCategoryModal}
          onCloseModal={handleCloseModal}
          initialValues={selectedCategory}
          onSubmit={handleFormSubmit}
        />
      )}
    </Container>
  );
}

export default CategoryFeature;
