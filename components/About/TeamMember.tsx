import React from 'react';
import teamMembers from '../../database/teamMembers';
import Card from './card';
const TeamMember = () => {
  return (
    <div className="my-12">
      <div className="grid xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-24 place-items-center">
        {teamMembers.map((item, index) => {
          return (
            <div key={index} className={`${index === 0 && `mt-24`}`}>
              <Card
                name={item.name}
                photo_url={item.photo_url}
                designation={item.designation}
                linkedin_url={item.linkedin_url}
                github_url={item.github_url}
                twitter_url={item.twitter_url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamMember;
