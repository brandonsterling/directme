import { Badge } from "@mantine/core";
import React from "react";

function FeatureRow({ feature }) {
  return (
    <tr key={feature.name}>
      <td>
        <Badge>{feature.team}</Badge>
      </td>
      <td>{feature.name}</td>
      <td>{feature.slack_channel}</td>
      <td>{feature.poc}</td>
    </tr>
  );
}

export default FeatureRow;
