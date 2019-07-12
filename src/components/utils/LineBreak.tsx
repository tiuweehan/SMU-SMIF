import * as React from 'react';

const LineBreak: React.FC<{ height: string }> = ({ height }) => <div style={{ fontSize: height }}>&nbsp;</div>;

export default LineBreak;
