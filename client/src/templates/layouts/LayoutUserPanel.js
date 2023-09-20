import { WrapperLayoutUserPanel } from 'templates/layouts/StyleLayout';

const LayoutUserPanel = props => {
  return (
    <>
      <WrapperLayoutUserPanel>{props.children}</WrapperLayoutUserPanel>
    </>
  );
};

export default LayoutUserPanel;
