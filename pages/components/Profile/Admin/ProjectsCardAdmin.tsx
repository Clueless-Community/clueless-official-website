/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import EditProject from './EditProject';
import ProjectsCard from '../ProjectsCard';
import RemoveProject from './RemoveProject';

interface Props {
    projectId: string;
    projectImage: string;
    projectName: string;
    publicLink?: string;
    gitHubLink?: string;
    projectDesc: string;
    techStacks: { name: string }[];
    handleProjectFetch: () => Promise<void>;
}

const ProjectsCardAdmin: React.FC<Props> = ({
    projectId,
    projectImage,
    projectName,
    projectDesc,
    publicLink,
    gitHubLink,
    techStacks,
    handleProjectFetch
}) => {
    return (
        <ProjectsCard
            projectImage={projectImage}
            projectName={projectName}
            projectDesc={projectDesc}
            techStacks={techStacks}
            publicLink={publicLink}
            gitHubLink={gitHubLink}
            customTitleButtons={[
                <EditProject
                    key="editButton"
                    projectId={projectId}
                    projectName={projectName}
                    projectImage={projectImage}
                    projectDesc={projectDesc}
                    gitHubLink={gitHubLink}
                    publicLink={publicLink}
                    techStacks={techStacks}
                    handleProjectFetch={handleProjectFetch}
                />,
                <RemoveProject
                    key="removeButton"
                    projectId={projectId}
                    handleProjectFetch={handleProjectFetch}
                />
            ]}
        />
    );
};

export default ProjectsCardAdmin