import React from 'react';
import { Controller } from 'react-hook-form';
import { Input, Label } from 'semantic-ui-react';

function AliasField(props) {
  const { name, form } = props;
  const { errors } = form;
  const errorMessage = errors[name]?.message;
  const hasError = !!errorMessage;

  return (
    <div>
      <Controller
        name={name}
        control={form.control}
        render={({ value, onChange, onBlur }) => (
          <div>
            <Input
              type="text"
              placeholder="Alias name"
              name={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={hasError}
            ></Input>
            {hasError && (
              <Label basic color="red" pointing="left">
                {errorMessage}
              </Label>
            )}
          </div>
        )}
      />
    </div>
  );
}

export default AliasField;
