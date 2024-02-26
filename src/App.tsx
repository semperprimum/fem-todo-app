import {
  GlobalStyles,
  Header,
  Reset,
  AppWrapper,
  Input,
  TodoList,
  Filters,
} from "./components";
import { Container } from "./components/Container.styled";
import { Footer } from "./components/Footer.styled";

export interface Todo {
  title: string;
  isCompleted: boolean;
}

const App = () => {
  return (
    <>
      <Reset />
      <GlobalStyles />

      <AppWrapper>
        <Header />

        <Input />

        <TodoList />

        <Container>
          <Filters />
        </Container>

        <Footer />
      </AppWrapper>
    </>
  );
};

export default App;
