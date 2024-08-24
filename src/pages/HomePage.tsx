import Main from '../components/Home/Main';
import MainBottom from '../components/Home/MainBottom';
import Gallery from '../components/Home/Gallery';
import Services from '../components/Home/Services';

const HomePage = () => {
  return (
    <div>
        <Main />
        <MainBottom />
        <Gallery background="bg-mainColor" color="text-white" />
        <Services />
    </div>
  );
};

export default HomePage;