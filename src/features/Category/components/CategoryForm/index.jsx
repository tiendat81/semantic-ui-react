import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Modal } from 'semantic-ui-react';
import * as yup from 'yup';
import AliasField from '../../../../components/CategoryFormFields/AliasField';
import CategoryField from '../../../../components/CategoryFormFields/CategoryField';

function CategoryForm(props) {
  const { dimmer, open, onCloseModal, initialValues, onSubmit } = props;

  const schema = yup.object().shape({
    value: yup
      .string()
      .required('Category can not blank')
      .min(3, 'Category should be at least 3 characters'),
  });

  const form = useForm({
    mode: 'onBlur',
    defaultValues: initialValues || { value: '', alias: '' },
    resolver: yupResolver(schema),
  });

  const { setValue } = form;

  useEffect(() => {
    setValue('value', initialValues ? initialValues.value : '');
    setValue('alias', initialValues?.alias || '');
  }, [initialValues, setValue]);

  const handleFormSubmit = (values) => {
    console.log('Form Submit', values);
    if (onSubmit) {
      onSubmit(values);
      form.reset();
    }
  };

  const onClickCloseModal = () => {
    if (onCloseModal) {
      onCloseModal();
    }
  };

  return (
    <Modal dimmer={dimmer} open={open}>
      <Modal.Header>Create Category</Modal.Header>
      <Modal.Content>
        <form onSubmit={form.handleSubmit(handleFormSubmit)}>
          <CategoryField name="value" form={form} />
          <AliasField name="alias" form={form} />
          <Button className="btn-close" type="button" onClick={onClickCloseModal}>
            Close
          </Button>
          <Button primary type="submit" className="btn-create-submit">
            Save
          </Button>
        </form>
      </Modal.Content>
    </Modal>
  );
}

export default CategoryForm;
