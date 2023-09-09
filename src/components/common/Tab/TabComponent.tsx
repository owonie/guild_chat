type TabComponentProps = {
  menuList: string[];
  setTabState: React.Dispatch<React.SetStateAction<string>>;
};

const TabComponent = (props: TabComponentProps) => {
  const menuList = props.menuList;
  const setTabState = props.setTabState;

  return (
    <div>
      {menuList.map((menu) => (
        <button onClick={() => setTabState(menu)} key={`${menu}TabUniqueKey`}>
          {menu}
        </button>
      ))}
    </div>
  );
};

export default TabComponent;
