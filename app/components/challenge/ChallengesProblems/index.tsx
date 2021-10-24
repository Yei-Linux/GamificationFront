import classNames from "classnames";
import { Button, Icon, Link as CustomLink, List } from "gamification-library";
import Link from "next/link";

import React from "react";
import * as S from "./styles";

export interface IChallenge {
  id: string;
  title: string;
  description: string;
}

export interface IChallengesProblems {
  challenges: IChallenge[];
}

const ChallengesProblems = ({ challenges }: IChallengesProblems) => {
  const getUrlChallenge = (id: string): string => `/challenges/${id}`;

  return (
    <S.ChallengesProblems>
      {challenges.map(({ title, description, id }, index: number) => (
        <S.ChallengeItem className={classNames("boxShadow__md")} key={index}>
          <List.Item
            noBorder
            avatar={<Icon size="25px" name="book" />}
            title={title}
            description={description}
          >
            <Link href={getUrlChallenge(id)} passHref>
              <CustomLink href={getUrlChallenge(id)}>
                <Button width="auto" border="lg">
                  Go!
                </Button>
              </CustomLink>
            </Link>
          </List.Item>
        </S.ChallengeItem>
      ))}
    </S.ChallengesProblems>
  );
};

export default ChallengesProblems;
