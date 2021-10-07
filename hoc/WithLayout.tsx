/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/display-name */
import { Icon, Layout, Sticky } from "gamification-library";

import React, { Fragment, useState } from "react";
import PlayerInfo from "../app/components/commons/PlayerInfo";
import Footer from "../app/components/layouts/Footer";
import MenuAside from "../app/components/layouts/MenuAside";
import Topbar from "../app/components/layouts/Topbar";

interface Props {
  hasStickyProfile?: boolean;
  hasHeader?: boolean;
  HeaderChildren?: React.ElementType;
  hasFooter?: boolean;
  FooterChildren?: React.ElementType;
}

const WithLayout = ({
  hasStickyProfile = true,
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

      {hasStickyProfile && (
        <Sticky
          stickyItems={[
            {
              stickyContent: (
                <Fragment>
                  <Icon name="controls" size="20px" />
                </Fragment>
              ),
              hasHideContent: true,
              stickyHidden: <PlayerInfo />,
            },
          ]}
        />
      )}

      <Layout>
        {hasHeader && (
          <Layout.Header isSticky>
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
  hasStickyProfile: true,
  hasHeader: true,
  hasFooter: true,
  HeaderChildren: Topbar,
  FooterChildren: Footer,
};

export default WithLayout;
