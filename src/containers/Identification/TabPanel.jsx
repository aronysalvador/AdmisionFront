export default function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div { ...other }>
        {value === index && <div p={3}>{children}</div>}
      </div>
    );
}
