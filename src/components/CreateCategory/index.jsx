import React from 'react';
import { Button, Form, Modal } from 'semantic-ui-react';
import './CreateCategory.scss';

function CreateCategory({
  dimmer,
  open,
  onCategoryChange,
  onSaveCategory,
  onCloseModal,
  category,
  disabled,
}) {
  const onClickCloseModal = () => {
    if (onCloseModal) {
      onCloseModal();
    }
  };

  const categoryChange = (e) => {
    if (onCategoryChange) onCategoryChange(e);
  };

  const onClickSaveCategory = (e) => {
    if (onSaveCategory) onSaveCategory(e);
  };

  return (
    <Modal dimmer={dimmer} open={open}>
      <Modal.Header>Create Category</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Category Name</label>
            <input
              placeholder="Category Name"
              name="name"
              value={category.name}
              required
              onChange={categoryChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Alias</label>
            <input
              placeholder="Category Alias"
              name="alias"
              value={category.alias}
              onChange={categoryChange}
            />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions className="btn-action">
        <Button className="btn-close" type="button" onClick={onClickCloseModal}>
          Close
        </Button>
        <Button
          disabled={disabled}
          primary
          type="submit"
          className="btn-create-submit"
          onClick={onClickSaveCategory}
        >
          Save
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default CreateCategory;
