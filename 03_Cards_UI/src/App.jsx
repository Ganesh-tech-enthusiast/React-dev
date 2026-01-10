
import './App.css'
import Card from './components/Card'

function App() {
const companies = [
  {
    id: 1,
    company: "Amazon",
    logo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=64",
    posted: "5 days ago",
    role: "Senior UI/UX Designer",
    type: "Part-time",
    level: "Senior-level",
    pay: "$120/hr",
    location: "San Francisco, CA"
  },
  {
    id: 2,
    company: "Apple",
    logo: "https://www.google.com/s2/favicons?domain=apple.com&sz=64",
    posted: "2 days ago",
    role: "Product Designer",
    type: "Full-time",
    level: "Mid-level",
    pay: "$140/hr",
    location: "Cupertino, CA"
  },
  {
    id: 3,
    company: "Google",
    logo: "https://www.google.com/s2/favicons?domain=google.com&sz=64",
    posted: "1 week ago",
    role: "UX Researcher",
    type: "Contract",
    level: "Senior-level",
    pay: "$130/hr",
    location: "Mountain View, CA"
  },
  {
    id: 4,
    company: "Meta",
    logo: "https://www.google.com/s2/favicons?domain=meta.com&sz=64",
    posted: "3 days ago",
    role: "UI Designer",
    type: "Full-time",
    level: "Junior-level",
    pay: "$90/hr",
    location: "Menlo Park, CA"
  },
  {
    id: 5,
    company: "Netflix",
    logo: "https://www.google.com/s2/favicons?domain=netflix.com&sz=64",
    posted: "6 days ago",
    role: "Visual Designer",
    type: "Contract",
    level: "Senior-level",
    pay: "$150/hr",
    location: "Los Gatos, CA"
  },
  {
    id: 6,
    company: "Microsoft",
    logo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=64",
    posted: "4 days ago",
    role: "UX Engineer",
    type: "Full-time",
    level: "Senior-level",
    pay: "$135/hr",
    location: "Redmond, WA"
  },
  {
    id: 7,
    company: "Tesla",
    logo: "https://www.google.com/s2/favicons?domain=tesla.com&sz=64",
    posted: "1 day ago",
    role: "UI/UX Designer",
    type: "Full-time",
    level: "Mid-level",
    pay: "$125/hr",
    location: "Austin, TX"
  },
  {
    id: 8,
    company: "Adobe",
    logo: "https://www.google.com/s2/favicons?domain=adobe.com&sz=64",
    posted: "2 weeks ago",
    role: "Interaction Designer",
    type: "Contract",
    level: "Senior-level",
    pay: "$145/hr",
    location: "San Jose, CA"
  },
  {
    id: 9,
    company: "Airbnb",
    logo: "https://www.google.com/s2/favicons?domain=airbnb.com&sz=64",
    posted: "3 days ago",
    role: "Product UX Designer",
    type: "Full-time",
    level: "Mid-level",
    pay: "$130/hr",
    location: "San Francisco, CA"
  },
  {
    id: 10,
    company: "Uber",
    logo: "https://www.google.com/s2/favicons?domain=uber.com&sz=64",
    posted: "5 days ago",
    role: "Design Systems Engineer",
    type: "Full-time",
    level: "Senior-level",
    pay: "$140/hr",
    location: "Seattle, WA"
  },
  {
    id: 11,
    company: "LinkedIn",
    logo: "https://www.google.com/s2/favicons?domain=linkedin.com&sz=64",
    posted: "6 days ago",
    role: "UX Designer",
    type: "Full-time",
    level: "Mid-level",
    pay: "$115/hr",
    location: "Sunnyvale, CA"
  },
  {
    id: 12,
    company: "Twitter (X)",
    logo: "https://www.google.com/s2/favicons?domain=x.com&sz=64",
    posted: "1 week ago",
    role: "UI Designer",
    type: "Contract",
    level: "Senior-level",
    pay: "$110/hr",
    location: "Remote"
  }
];



// console.log(companies);

  return (
    <>
    {companies.map(function(obj){

     return <Card company={obj.company} logo={obj.logo} posted={obj.posted} role={obj.role} level={obj.level} pay={obj.pay} location={obj.location}/>
     
     
    })}
    </>
  )
}

export default App
