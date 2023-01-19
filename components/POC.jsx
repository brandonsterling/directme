import { Card, Text } from "@mantine/core";
import React from "react";

function POC({ person }) {
  return (
    <Card withBorder>
      <Text size="sm" weight={500}>
        {person}
      </Text>
    </Card>
  );
}

export default POC;
