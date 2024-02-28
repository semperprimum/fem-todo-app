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
import { useMedia } from "./hooks/useMedia";

const App = () => {
  const isMatching = useMedia("(max-width: 37.5em)");

  return (
    <>
      <Reset />
      <GlobalStyles />

      <AppWrapper>
        <Header />

        <Input />

        <TodoList />

        {isMatching && (
          <Container>
            <Filters />
          </Container>
        )}

        <Footer />
      </AppWrapper>
    </>
  );
};

export default App;
