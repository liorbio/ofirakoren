import React from 'react';

const TextRenderer: React.FC<{ text: string }> = ({ text }) => {
    const fixedText = text.split(/\n/).map((line, index) => index === 0 ? line : <React.Fragment key={line}><br/>{line}</React.Fragment>);
    
    return (
        <React.Fragment>
            {fixedText}
        </React.Fragment>
    );
};

export default TextRenderer;