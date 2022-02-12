import React from 'react';

const paperStyle = {
    backgroundColor: 'white',
    opacity: 0.93
}
const ContentPaper: React.FC<{ injectedStyle? : React.CSSProperties, className?: string }> = ({ injectedStyle, className, children }) => {
    const stylesObj = injectedStyle ? { ...paperStyle, ...injectedStyle } : paperStyle;
    return (
        <div style={stylesObj} className={className} >
            {children}
        </div>
    )
};

export default ContentPaper;