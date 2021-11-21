import React, { Fragment, useState } from "react";
import ClassPlatform from "../../app/components/class/ClassPlatform";
import Instructions from "../../app/components/commons/Instructions";
import { DUMMY_CLASS } from "../../app/dummy/class";
import { DUMMY_INSTRUCTIONS__CLASS } from "../../app/dummy/instructions";
import { useArray } from "../../app/hooks/useArray";
import { IGeneralInstructionsItem } from "../../app/types/instructions";

import WithLayout from "../../hoc/WithLayout";

const Class = () => {
  const [
    { id, title, examId, tutor, achievements, notes, urlVideo },
  ] = useState(DUMMY_CLASS);
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

      <ClassPlatform
        examId={examId}
        id={id}
        title={title}
        tutor={tutor}
        achievements={achievements}
        notes={notes}
        urlVideo={urlVideo}
      />
    </Fragment>
  );
};

export default WithLayout({ hasHeader: true, hasFooter: true })(Class);
