import { Badge, Paper, Table, Text } from "@mantine/core";

function BaseTable() {
  const rows = newRows.map((element) => (
    <tr key={element.name}>
      <td>
        <Badge>{element.type}</Badge>
      </td>
      <td>{element.name}</td>
      <td>{element.team}</td>
      <td>{element.poc}</td>
    </tr>
  ));

  return (
    <Paper withBorder>
      <Table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Name</th>
            <th>Team</th>
            <th>POC</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Paper>
  );
}

export default BaseTable;
