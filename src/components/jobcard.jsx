

function JobCard({id, company, logo, position, role, level, postedAt, contract, location, languages, tools}) {
    return (
        <article className="card" id={id}>
            <p className="card-date font-thin">{postedAt}</p>
            <div className="card-top">
                <img src={logo} alt="company logo" className="logo-img" />
                <div className="card-top-info">
                    <h2 className="card-position font-medium">{position}</h2>
                    <h3 className="card-company font-thin">{company}</h3>
                    <p className="card-contract font-thin">{contract}</p>
                </div>
            </div>
            <div className="card-mid">
                <p className="font-regular">{level}</p>
                <p className="font-regular">{role}</p>
                <p className="font-regular">{location}</p>
                <p className="font-regular">{languages}</p>
                <p className="font-regular">{tools}</p>
            </div>
            <div className="card-bottom">
                <button>APPLY NOW</button>
            </div>
       
        </article>
            )

}

export default JobCard
