import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './Main.module.scss';

const Main = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Main;