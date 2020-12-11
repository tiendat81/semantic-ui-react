import React from 'react';
import { Button, Form, Modal } from 'semantic-ui-react';

function EditCategory({
  dimmer,
  open,
  onCategoryChange,
  onSaveCategoryEdit,
  onCloseModal,
  category,
}) {
  const onClickCloseModal = () => {
    if (onCloseModal) {
      onCloseModal();
    }
  };

  const categoryChange = (e) => {
    if (onCategoryChange) onCategoryChange(e);
  };

  const onClickUpdateCategory = (e) => {
    if (onSaveCategoryEdit) onSaveCategoryEdit(e);
  };

  return (
    <Modal dimmer={dimmer} open={open}>
      <Modal.Header>Edit Category</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Category Name</label>
            <input
              placeholder="Category Name"
              name="name"
              value={category.name}
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
        <Button primary type="submit" className="btn-create-submit" onClick={onClickUpdateCategory}>
          Update
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default EditCategory;
