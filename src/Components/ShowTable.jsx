// export const DownloadXls = (props) => {

export const ShowTable = (props) => {
  const row = props.row;

  const rowItems = row.map((rowItem, index) => {
    if (index < 10) {
      return (
        <tr key={rowItem[0]}>
          {rowItem.map((columnItem) => (
            <td key={columnItem}>{columnItem}</td>
          ))}
        </tr>
      );
    }
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Task</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>{rowItems}</tbody>
    </table>
  );
};
