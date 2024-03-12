import PropTypes from 'prop-types';

function JobCard({id, company, logo, position, role, level, postedAt, contract, location, languages, tools}) {
    return (
        <article className="card" id={id}>
            <p className="card-date font-thin">{postedAt}</p>
            <div className="card-top">
                <img src={`./assets/${logo}`} alt="company logo" className="logo-img" />
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
                    <div className="languages">
                        {languages.map((language, index) => (
                            <p key={index} className="font-regular">{language}</p>
                            ))}
                    </div>
                    <div className="tools">
                        {tools.map((tool, index) => (
                            <p key={index} className="font-regular">{tool}</p>
                            ))}
                    </div>
                </div>
            </div>
            <div className="card-bottom">
                <button type="button" className="apply-btn font-bold">APPLY NOW</button>
            </div>
        </article>
    );
}

JobCard.propTypes = {
    id: PropTypes.number.isRequired,
    company: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    postedAt: PropTypes.string.isRequired,
    contract: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    languages: PropTypes.arrayOf(PropTypes.string),
    tools: PropTypes.arrayOf(PropTypes.string)
};
export default JobCard;
