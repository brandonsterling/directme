import POC from "@/components/POC";
import { teams } from "@/constants/team";
import { Button, Card, Group, Stack, Text } from "@mantine/core";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import OwnedFeatures from "./OwnedFeatures";

function TeamOverview({ selected }) {
  //   const router = useRouter();

  //   const [curTeam, setTeam] = useState();

  //   useEffect(() => {
  //     if (router.isReady && router.query.id) {
  //       const newTeam = teams.find((team) => (team.id = router.query.id));
  //       console.log(newTeam);
  //       setTeam(newTeam);
  //     }
  //   }, [router]);

  if (!selected) {
    return <Card>Select a team to get started</Card>;
  }

  return (
    <Card withBorder>
      <Group position="apart">
        <Text size="md" weight={500}>
          {selected.name}
        </Text>
        <Button size="xs">Slack</Button>
      </Group>
      <Stack mt="md">
        <div>
          <Text transform="uppercase" color="dimmed" weight={700} size="xs">
            Description
          </Text>
          <Text color="black" size="sm">
            {selected.description}
          </Text>
        </div>

        <div>
          <Text transform="uppercase" color="dimmed" weight={700} size="xs">
            POC
          </Text>
          <POC person={selected.poc} />
        </div>
        <div>
          <Text transform="uppercase" color="dimmed" weight={700} size="xs">
            Features
          </Text>
          <OwnedFeatures />
        </div>
      </Stack>
    </Card>
  );
}

export default TeamOverview;
