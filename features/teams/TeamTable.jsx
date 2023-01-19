import { Badge, Paper, Table, Text } from "@mantine/core";
import TeamRow from "./TeamRow";

function TeamTable({ teams, setSelected }) {
  const rows = teams.map((element) => (
    <TeamRow setSelected={setSelected} team={element} />
  ));

  return (
    <Paper withBorder>
      <Table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Slack</th>
            <th>POC</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Paper>
  );
}

export default TeamTable;
