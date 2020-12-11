import React, { useState } from 'react';
import { Button, Container, Image, List, Segment } from 'semantic-ui-react';
import CreateCategory from '../CreateCategory';
import EditCategory from '../EditCategory';
import RightSideBar from '../RightSideBar';
import './MainContent.scss';

const initialListCategory = [
  {
    id: '123456789',
    name: 'testing 123',
    alias: 'testing-123',
  },
  {
    id: '123456789987654321',
    name: 'testing testing 123',
    alias: 'testing-testing-123',
  },
];

const initialCategory = {
  id: null,
  name: '',
  alias: '',
};

function MainContent() {
  const [openCategoryModal, setOpenCategoryModal] = useState(false);
  const [openEditCategoryModal, setOpenEditCategoryModal] = useState(false);
  const [category, setCategory] = useState(initialCategory);
  const [listCategory, setListCategory] = useState(initialListCategory);
  const [categoryToEdit, setCategoryToEdit] = useState(null);
  const [isButtonSaveDisable, setIsButtonSaveDisable] = useState(true);

  const handleOpenCategoryModal = () => {
    setOpenCategoryModal(true);
  };

  const handleOnCloseModal = () => {
    if (openEditCategoryModal) {
      setOpenEditCategoryModal(false);
      return;
    }
    setOpenCategoryModal(false);
  };

  const handleCategoryChange = (e) => {
    setCategory({
      ...category,
      id: new Date().getTime(),
      [e.target.name]: e.target.value,
    });
    setIsButtonSaveDisable(false);
  };

  const handleSaveCategory = (e) => {
    e.preventDefault();
    setOpenCategoryModal(false);
    setListCategory((preCategory) => {
      return [...preCategory, category];
    });
    setCategory(initialCategory);
  };

  const handleRemoveCategory = (categorygId) => {
    setListCategory(listCategory.filter((item) => item.id !== categorygId));
  };

  const handleEditCategory = (category) => {
    setOpenEditCategoryModal(true);
    setCategoryToEdit(category);
  };

  const handleCategoryUpdate = (e) => {
    setCategoryToEdit({
      ...categoryToEdit,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveCategoryEdit = (e) => {
    e.preventDefault();
    setOpenEditCategoryModal(false);
    setListCategory(
      listCategory.map((item) => {
        if (item.id === categoryToEdit.id) {
          return {
            ...item,
            id: categoryToEdit.id,
            name: categoryToEdit.name,
            alias: categoryToEdit.alias,
          };
        }
        return item;
      })
    );
  };

  return (
    <Container fluid className="content-container">
      <Segment className="main-content">
        <Button basic onClick={handleOpenCategoryModal}>
          Add New
        </Button>
        <List relaxed="very" divided>
          {listCategory.map((item) => (
            <List.Item key={item.id}>
              <Image avatar src="https://react.semantic-ui.com/images/avatar/small/mark.png" />
              <List.Content>
                <List.Header>Category name: {item.name}</List.Header>
                <List.Description>Alias: {item.alias}</List.Description>
              </List.Content>
              <div className="btn-group-action">
                <Button onClick={() => handleEditCategory(item)}>Edit</Button>
                <Button
                  onClick={() => {
                    handleRemoveCategory(item.id);
                  }}
                >
                  Del
                </Button>
              </div>
            </List.Item>
          ))}
        </List>
      </Segment>
      <Segment className="side-bar">
        <RightSideBar />
      </Segment>

      {openCategoryModal && (
        <CreateCategory
          dimmer="blurring"
          open={openCategoryModal}
          category={category}
          disabled={isButtonSaveDisable}
          onCloseModal={handleOnCloseModal}
          onCategoryChange={handleCategoryChange}
          onSaveCategory={handleSaveCategory}
        />
      )}

      {openEditCategoryModal && (
        <EditCategory
          dimmer="blurring"
          open={openEditCategoryModal}
          category={categoryToEdit}
          onCloseModal={handleOnCloseModal}
          onCategoryChange={handleCategoryUpdate}
          onSaveCategoryEdit={handleSaveCategoryEdit}
        />
      )}
    </Container>
  );
}

export default MainContent;
