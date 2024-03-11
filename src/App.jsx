import jobs from './data/data'
import Header from './components/header'
import JobCard from './components/jobcard'
import './styles/index.css'

function App() {
  return (
    <div>
      <Header />
      <main>
        {jobs.map((job) => {
          return (
            <JobCard 
              key={job.id}
              postedAt={job.postedAt}
              logo={job.logo}
              position={job.position}
              company={job.company}
              contract={job.contract}
              level={job.level}
              role={job.role}
              location={job.location}
              languages={job.languages ? job.languages.map((language) => language) : []}
              tools={job.tools ? job.tools.map((tool) => tool) : []}
            />
          )
        })}
      </main>
    </div>
  )
}

export default App
