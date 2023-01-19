import BaseTable from "@/components/BaseTable";
import Layout from "@/components/Layout/Layout";
import FeatureTable from "@/features/features/FeatureTable/FeatureTable";
import TeamOverview from "@/features/teams/TeamOverview";
import TeamTable from "@/features/teams/TeamTable";
import {
  Avatar,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { teams } from "@/constants/team";
function Page() {
  const [curTeams, setTeams] = useState(teams);
  const [selected, setSelected] = useState();
  return (
    <Container size="lg" mt={50}>
      <Grid>
        <Grid.Col span={8}>
          <TeamTable setSelected={setSelected} teams={curTeams} />
        </Grid.Col>
        <Grid.Col span={4}>
          <TeamOverview selected={selected} />
        </Grid.Col>
      </Grid>
    </Container>
  );
}

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Page;
