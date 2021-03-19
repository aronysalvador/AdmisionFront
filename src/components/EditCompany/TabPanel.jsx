export default function TabPanel({ children, value, index }) {
    return (
      <div
        role='tabpanel'
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
      >
        {value === index && (
          <div>{children} </div>
        )}
      </div>
    );
}
