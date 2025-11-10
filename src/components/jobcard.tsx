import React, { useState } from 'react';
import { JobCardProps } from './types/JobCardProps';

const JobCard: React.FC<JobCardProps> = ({ 
  id, 
  company, 
  logo, 
  position, 
  role, 
  level, 
  postedAt, 
  contract, 
  location, 
  languages, 
  tools 
}) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleApply = () => {
    // TODO: Implement apply functionality
    // This will open the job application link or modal in the future
  };

  return (
    <article className="card" id={id}>
      <p className="card-date font-thin">{postedAt}</p>
      <div className="card-top">
        {logo && !imageError ? (
          <img 
            src={`/assets/${logo}`} 
            alt={`${company} logo`} 
            className="logo-img"
            onError={handleImageError}
          />
        ) : (
          <div className="logo-img logo-placeholder">
            {company.charAt(0).toUpperCase()}
          </div>
        )}
        <div className="card-top-info">
          <h2 className="card-position font-medium">{position}</h2>
          <h3 className="card-company font-thin">{company}</h3>
          <p className="card-contract font-thin">{contract}</p>
        </div>
      </div>
      <div className="card-mid">
        <div className="info">
          <p className="font-regular">{level}</p>
          <p className="font-regular">{role}</p>
          <p className="font-regular">{location}</p>
        </div>
        <div className="skills">
          {languages.length > 0 && (
            <div className="languages">
              {languages.map((language, index) => (
                <p key={`lang-${index}`} className="font-regular">{language}</p>
              ))}
            </div>
          )}
          {tools.length > 0 && (
            <div className="tools">
              {tools.map((tool, index) => (
                <p key={`tool-${index}`} className="font-regular">{tool}</p>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="card-bottom">
        <button 
          type="button" 
          className="apply-btn font-bold"
          onClick={handleApply}
        >
          APPLY NOW
        </button>
      </div>
    </article>
  );
};

export default JobCard;
