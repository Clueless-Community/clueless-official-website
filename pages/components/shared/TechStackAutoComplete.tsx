import React from 'react'
import { TextField, Autocomplete, Chip } from "@mui/material";

const techstack = [
    { 'name': 'TypeScript' },
    { 'name': 'React' },
    { 'name': 'C' },
    { 'name': 'C++' },
    { 'name': 'Azure' },
    { 'name': 'AWS' },
    {'name': " Google Cloud"}
]

interface Props {
    projectTechStacks : {
        name: string;
    }[],
    setProjectTechStacks : React.Dispatch<React.SetStateAction<{
        name: string;
    }[]>>
}

const TechStackAutoComplete : React.FC<Props> = ({ projectTechStacks, setProjectTechStacks}) => {
    return (
        <Autocomplete
            multiple
            value={projectTechStacks}
            defaultValue={projectTechStacks}
            id="arrival-date"
            getOptionLabel={option => option.name}
            options={techstack}
            filterSelectedOptions
            onChange={(event, newValue) => {
                setProjectTechStacks(newValue as any)
            }}
            renderTags={(tagValue, getTagProps) =>
                tagValue.map((option, index) => (
                    <Chip
                        color="primary"
                        label={option.name}
                        {...getTagProps({ index })}
                    />
                ))
            }
            renderInput={(params) => <TextField {...params} placeholder="Select TechStacks"
            />}
            sx={{ mt: 2.5 }}
        />
    )
}

export default TechStackAutoComplete