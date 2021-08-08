import styled from "@emotion/styled";
import { Row } from "gamification-library";
import React, { Fragment, useState } from "react";
import ClassChat from "../app/components/class/ClassChat";
import ClassDetails from "../app/components/class/ClassDetail";
import ClassNotes from "../app/components/class/ClassNotes";
import ClassVideo from "../app/components/class/ClassVideo";
import Instructions from "../app/components/commons/Instructions";
import { DUMMY_CLASS } from "../app/dummy/class";
import { DUMMY_INSTRUCTIONS__CLASS } from "../app/dummy/instructions";
import { useArray } from "../app/hooks/useArray";
import { IGeneralInstructionsItem } from "../app/types/instructions";

import WithLayout from "../hoc/WithLayout";

const ClassInformation = styled.div`
  padding: 1rem;
`;

const ClassContent = styled.div`
  padding: 1rem;
`;

const Class = () => {
  const [{ id, title, tutor, achievements, notes, urlVideo }] = useState(
    DUMMY_CLASS
  );
  const [isCloseSliding, setIsCloseSliding] = useState(false);
  const { value: instructions } = useArray(DUMMY_INSTRUCTIONS__CLASS);

  return (
    <Fragment>
      <Instructions isCloseSliding={isCloseSliding}>
        {instructions.map(
          (
            {
              mainTitle,
              subTitle,
              description,
              buttonText,
              src,
              hasButtonToFinish,
            }: IGeneralInstructionsItem,
            index: number
          ) => (
            <Instructions.Item
              key={index}
              mainTitle={mainTitle}
              subTitle={subTitle}
              description={description}
              buttonText={buttonText}
              src={src}
              hasButtonToFinish={hasButtonToFinish}
              onClickButtonToFinish={() =>
                hasButtonToFinish ? setIsCloseSliding(true) : {}
              }
            />
          )
        )}
      </Instructions>

      <Row justifyContent="space-around" alignItems="flex-start">
        <ClassInformation>
          <ClassDetails
            id={id}
            title={title}
            tutor={tutor}
            achievements={achievements}
          />
          <ClassNotes notes={notes} />
        </ClassInformation>

        <ClassContent>
          <ClassVideo urlVideo={urlVideo} />
          <ClassChat />
        </ClassContent>
      </Row>
    </Fragment>
  );
};

export default WithLayout({ hasHeader: true, hasFooter: true })(Class);
