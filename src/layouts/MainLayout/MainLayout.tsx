import { Container } from "react-bootstrap";
import Header from "../../components/Header/Header";

interface Props {
  children?: React.ReactNode;
}
const MainLayout = ({ children }: Props) => (
  <div>
    <Header></Header>
    <Container>{children}</Container>
  </div>
);

export default MainLayout;
