import { Video } from 'gamification-library';
import React from 'react';
import { ClassVideoContainer } from './styles';

export interface ClassVideoProps {
    
}
 
const ClassVideo = () => {
    return (
        <ClassVideoContainer>
            <Video />
        </ClassVideoContainer>
    );
}
 
export default ClassVideo;