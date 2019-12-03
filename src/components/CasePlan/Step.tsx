import React from "react";

interface StepProps {
    number: number
    description: string
}

const Step: React.FC<StepProps> = ({number, description}) => (
    <>
        <h2 style={{marginTop: 15}}>Step {number}:</h2>
        <h3>{description}:</h3>
    </>
)

export default Step
