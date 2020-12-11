import { Container } from 'semantic-ui-react';
import './App.scss';
import Footer from './components/Footer';
import TopHeader from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <Container fluid>
      <TopHeader />
      <Content />
      <Footer />
    </Container>
  );
}

export default App;
