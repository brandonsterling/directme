import { Badge } from "@mantine/core";
import { useRouter } from "next/router";
import React from "react";

function TeamRow({ team, setSelected }) {
  const router = useRouter();
  return (
    <tr onClick={() => setSelected(team)} key={team.name}>
      <td>
        <Badge>{team.name}</Badge>
      </td>
      <td>{team.slack_channel}</td>
      <td>{team.poc}</td>
    </tr>
  );
}

export default TeamRow;
