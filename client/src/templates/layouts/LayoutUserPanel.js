import { WrapperLayoutUserPanel } from 'templates/layouts/style/StyleLayout';

const LayoutUserPanel = props => {
  return (
    <>
      <WrapperLayoutUserPanel>{props.children}</WrapperLayoutUserPanel>
    </>
  );
};

export default LayoutUserPanel;
