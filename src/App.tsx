import {
  GlobalStyles,
  Header,
  Reset,
  AppWrapper,
  Input,
  TodoList,
  Filters,
  Attribution,
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

      <main>
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
      </main>

      <footer>
        <Attribution />
      </footer>
    </>
  );
};

export default App;
