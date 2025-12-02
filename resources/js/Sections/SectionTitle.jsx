import React from 'react';

import '../../css/sectiontitle.css';
import '../../css/divider.css';
const SectionTitle = ({ children }) => {
  return (
    <div className="mil-section-title mil-up">
      <div className="mil-divider"></div>
      <h3 className="text-2xl font-semibold">{children}</h3>
    </div>
  );
};

export default SectionTitle;
