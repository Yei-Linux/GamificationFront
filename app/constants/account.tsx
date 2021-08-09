/* eslint-disable react/display-name */
import { RichText } from "gamification-library";
import React from "react";

export const ACCOUNT__TABLE = [
  { title: "Posicion", dataIndex: "position" },
  { title: "Avatar", dataIndex: "avatar" },
  {
    title: "Usuario",
    dataIndex: "user",
    render: (user: string) => (
      <RichText
        fontWeight="BOLD"
        text={`[${user}](https://google.com?target=_blank)`}
      />
    ),
  },
  { title: "Level", dataIndex: "level" },
  {
    title: "Puntos",
    dataIndex: "points",
    render: (points: string) => <RichText fontWeight="BOLD" text={points} />,
  },
];
