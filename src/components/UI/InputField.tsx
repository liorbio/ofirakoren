const InputField: React.FC<{ percentOfWidth?: number, inputType: string, inputId: string, inputName: string }> = ({ percentOfWidth, inputType, inputId, inputName }) => {
    return (
        <>
            <label htmlFor={inputId}></label>
            {inputType === "textarea" ?
                <textarea id={inputId} name={inputName}></textarea> :
                <input type={inputType} name={inputName} id={inputId} />
            }
        </>
    );
};

export default InputField;