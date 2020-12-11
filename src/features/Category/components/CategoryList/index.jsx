import React from 'react';
import { Button, Container, Image, List } from 'semantic-ui-react';

function CategoryList(props) {
  const { categoryList, onEditCategory, onRemoveCategory } = props;

  return (
    <Container fluid>
      <List relaxed="very" divided>
        {categoryList.map((category) => (
          <List.Item key={category.id}>
            <Image avatar src="https://react.semantic-ui.com/images/avatar/small/mark.png" />
            <List.Content>
              <List.Header>Category name: {category.value}</List.Header>
              <List.Description>Alias: {category.alias}</List.Description>
            </List.Content>
            <div>
              <Button onClick={() => onEditCategory(category)}>Edit</Button>
              <Button onClick={() => onRemoveCategory(category)}> Del</Button>
            </div>
          </List.Item>
        ))}
      </List>
    </Container>
  );
}

export default CategoryList;
