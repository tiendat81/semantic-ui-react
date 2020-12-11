import { Container } from 'semantic-ui-react';
import './App.scss';
import Footer from './components/Footer';
import TopHeader from './components/Header';
import MainContent from './components/MainContent';

function App() {
  return (
    <Container fluid>
      <TopHeader />
      <MainContent />
      <Footer />
    </Container>
  );
}

export default App;
