type Row = {
  _key: string;
  _type: string;
  cells: Cells;
};

interface TableProps {
  data: {
    _key: string;
    _type: string;
    rows: Row[];
  };
}

type Cells = string[];

function Table({ data }: TableProps) {
  // exclude the first row, which is the header
  const formattedRows = data.rows.slice(1);

  return (
    // <pre>{JSON.stringify(data, null, 2)}</pre>
    <table>
      <thead>
        <tr>
          {data.rows[0].cells.map((h) => (
            <th>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {formattedRows.map((row) => {
          return (
            <tr key={row._key}>
              {row.cells.map((cell) => (
                <td key={cell}>{cell}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
