/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/display-name */
import { Layout } from "gamification-library";

import React, { Fragment, useState } from "react";
import Footer from "../app/components/layouts/Footer";
import MenuAside from "../app/components/layouts/MenuAside";
import Topbar from "../app/components/layouts/Topbar";

interface Props {
  hasHeader?: boolean;
  HeaderChildren?: React.ElementType;
  hasFooter?: boolean;
  FooterChildren?: React.ElementType;
}

const WithLayout = ({
  hasHeader,
  HeaderChildren = Topbar,
  hasFooter,
  FooterChildren = Footer,
}: Props) => (WrappedComponent: any) => (componentProps: any) => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);
  return (
    <Fragment>
      <MenuAside onClose={toggle} open={open} />
      <Layout>
        {hasHeader && (
          <Layout.Header>
            {<HeaderChildren handleOpenMenu={toggle} />}
          </Layout.Header>
        )}
        <Layout.Content>
          <WrappedComponent {...componentProps} />
        </Layout.Content>
        {hasFooter && <Layout.Footer>{<FooterChildren />}</Layout.Footer>}
      </Layout>
    </Fragment>
  );
};

WithLayout.defaultProps = {
  hasHeader: true,
  hasFooter: true,
  HeaderChildren: Topbar,
  FooterChildren: Footer,
};

export default WithLayout;
