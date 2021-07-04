/* eslint-disable react/display-name */
import { Layout } from "gamification-library";
import React from "react";
import Topbar from "../layouts/Topbar";

interface Props {
  hasHeader?: boolean;
  headerChildren?: React.ReactNode[];
  hasFooter?: boolean;
  footerChildren?: React.ReactNode[];
}

const WithLayout = ({
  hasHeader,
  headerChildren = [<Topbar key="0" />],
  hasFooter,
  footerChildren,
}: Props) => (WrappedComponent: any) => (componentProps: any) => {
  return (
    <Layout>
      {hasHeader && <Layout.Header>{headerChildren}</Layout.Header>}
      <Layout.Content>
        <WrappedComponent {...componentProps} />
      </Layout.Content>
      {hasFooter && <Layout.Footer>{footerChildren}</Layout.Footer>}
    </Layout>
  );
};

WithLayout.defaultProps = {
  hasHeader: true,
  hasFooter: true,
  headerChildren: [<Topbar key="0" />],
  footerChildren: [],
};

export default WithLayout;
