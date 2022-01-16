/* eslint-disable react/display-name */
import { RichText } from "@gamiui/standard";
import React from "react";

export const ACCOUNT__TABLE = [
  { title: "Position", dataIndex: "position" },
  { title: "Avatar", dataIndex: "avatar" },
  {
    title: "User",
    dataIndex: "user",
    render: (user: string) => (
      <RichText
        fontWeight="bold"
        text={`[${user}](/users/${user}?target=_blank)`}
      />
    ),
  },
  { title: "Level", dataIndex: "level" },
  {
    title: "Score",
    dataIndex: "points",
    render: (points: string) => <RichText fontWeight="bold" text={points} />,
  },
];
