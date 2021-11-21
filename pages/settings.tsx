import styled from "@emotion/styled";
import React from "react";

import WithLayout from "../hoc/WithLayout";

const SettingsWrapper = styled.div``

const Settings = () => {
  return (
    <SettingsWrapper>
    </SettingsWrapper>
  );
};

export default WithLayout({ hasHeader: true, hasFooter: true })(Settings);
