import classNames from "classnames";
import { Spacer, Tag } from "@gamiui/standard";
import React, { Fragment } from "react";
import * as S from "./styles";

export interface ITags {
  background: string;
  color: string;
  text: string | number;
  link?: string | null;
}

export interface IStudenTagsLvl {
  tags: ITags[];
}

const StudentTagsLvl = ({ tags }: IStudenTagsLvl) => {
  return (
    <S.StudentTagsLvl className={classNames("flex")}>
      {tags.map(({ text, background, color }, index) => (
        <Fragment key={index}>
          <Tag text={text.toString()} color={color} background={background} />
          <Spacer direction="right" />
        </Fragment>
      ))}
    </S.StudentTagsLvl>
  );
};

export default StudentTagsLvl;
