import { feature } from "@/constants/feature";
import { teams } from "@/constants/team";
import { Badge, Paper, Table, Text } from "@mantine/core";
import FeatureRow from "./FeatureRow";

function FeatureTable() {
  let newRows = [];

  feature.map((feature) => {
    newRows.push({ ...feature, type: "feature" });
  });

  const rows = newRows.map((element) => <FeatureRow feature={element} />);

  return (
    <Paper withBorder>
      <Table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Name</th>
            <th>Slack</th>
            <th>POC</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Paper>
  );
}

export default FeatureTable;
