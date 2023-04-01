/* eslint-disable react/jsx-key */
// @ts-nocheck

import React from 'react';
import { TextField, Autocomplete, Chip } from '@mui/material';
import { ITechStack } from '../../../interfaces/user';
import { techstack } from '../../../database/techstacks';

interface Props {
  projectTechStacks: ITechStack[];
  setProjectTechStacks: React.Dispatch<React.SetStateAction<ITechStack[]>>;
  defaultValue?: ITechStack[];
}

const TechStackAutoComplete: React.FC<Props> = ({
  projectTechStacks,
  setProjectTechStacks,
  defaultValue,
}) => {
  return (
    <Autocomplete
      multiple
      value={projectTechStacks}
      defaultValue={defaultValue as ITechStack[]}
      id="arrival-date"
      getOptionLabel={(option) => option.name}
      options={techstack}
      isOptionEqualToValue={(o, v) => o.name === v.name}
      filterSelectedOptions
      onChange={(event, newValue) => {
        setProjectTechStacks(newValue as any);
      }}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index: number) => (
          <Chip
            color="primary"
            label={option.name}
            {...getTagProps({ index })}
          />
        ))
      }
      renderInput={(params) => (
        <TextField {...params} placeholder="Select TechStacks" />
      )}
    />
  );
};

export default TechStackAutoComplete;
