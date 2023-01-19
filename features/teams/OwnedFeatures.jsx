import { feature } from "@/constants/feature";
import { Badge, Group } from "@mantine/core";
import React from "react";

function OwnedFeatures() {
  const tags = feature.map((element) => <Badge>{element.name}</Badge>);
  return <Group>{tags}</Group>;
}

export default OwnedFeatures;
