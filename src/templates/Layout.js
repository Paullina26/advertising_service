const Layout = props => {
  return (
    <div>
      <p>navigation</p>
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
