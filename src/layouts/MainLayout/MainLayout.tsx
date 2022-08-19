import Header from "../../components/Header/Header";

interface Props {
  children?: React.ReactNode;
}
const MainLayout = ({ children }: Props) => (
  <div>
    <Header></Header>
    <div className="container mx-auto">{children}</div>
  </div>
);

export default MainLayout;
