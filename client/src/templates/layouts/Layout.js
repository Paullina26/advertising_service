import Navigation from 'components/Navigation/Header';
import Banner from 'components/Banners/Banner';
import NavigationPanel from 'components/Navigation/NavigationPanel';
import {
  WrapperLayoutChildren,
  WrapperLayoutNavigation,
} from 'templates/layouts/style/StyleLayout';

const Layout = props => {
  return (
    <>
      <WrapperLayoutNavigation>
        <Navigation />
        <Banner />
        <NavigationPanel />
      </WrapperLayoutNavigation>
      <WrapperLayoutChildren>{props.children}</WrapperLayoutChildren>
    </>
  );
};

export default Layout;
