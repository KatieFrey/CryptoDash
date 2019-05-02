import React from "react";
import styled from "styled-components";
import Page from "../Shared/Page";
import PriceGrid from "./PriceGrid";
import CoinSpotLight from "./CoinSpotLight";

const ChartGrid = styled.div`
  display: grid;
  margin-top: 20px;
  grid-gap: 15px;
  grid-template-columns: 1fr 3fr;
`;

export default () => {
  return (
    <Page name="dashboard">
      <PriceGrid />
      <ChartGrid>
        <CoinSpotLight />
        <div>Chart goes here</div>
      </ChartGrid>
    </Page>
  );
};
