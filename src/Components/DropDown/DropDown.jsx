import './DropDown.scss';
import {useState, useEffect} from 'react';
import './DropDown.scss';
import axios from 'axios';
import ButtonArray from '../ButtonArray/ButtonArray.jsx'


function DropDown() {
    const [jobTitle, setJobTitle] = useState({});
    const [selectedJob, setSelectedJob] = useState({})

    const [jobTitles, setJobTitles] = useState([]);
    const [jobSkills, setJobSkills] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // setSelectedJob(e.target.id);
    }

    const handleInputChange = async (e) => {
        e.preventDefault();
        console.log(e.target.value)
        setSelectedJob(e.target.value);
    }

    useEffect(() => {
        console.log("This useEffect has been called")
        const getSkillsList = async () => {
            try{
                const response = await axios.get(`http://localhost:8080/skills/${selectedJob}`)
                console.log(response.data);
                setJobSkills(response.data)

                
            }catch (error) {
                console.error("The skills for the selected job cannot be found")
            }

        }
        getSkillsList();
    }, [selectedJob])

    useEffect(() =>{
        const getJobList = async () => {
            try {
                const response = await axios.get("http://localhost:8080/jobs");
                console.log(response.data);
                setJobTitles(response.data);
                setJobTitle(response.data[0])
            }catch (error) {
                console.error("Unable to get the job list")
            }
        }
        getJobList();

    }, [])
  return (
    <div className="main-container">
        <form onSubmit={handleSubmit}>
            <label className="drop-down"><h2>Select job title: </h2>
            <select
            name="job_id"
            className="drop-down__list"
            value={jobTitles.job_title}
            onChange={(e) => handleInputChange(e)}
            required
            >
            <option className="list-color" value="" disabled selected>
                Please select
            </option>
            {jobTitles.map((jobTitle) => (
                <option key={jobTitle.id} value={jobTitle.id}>
                    {jobTitle.job_title}
                </option>
            ))};
            </select>
            </label>
        </form>
        <ButtonArray skillsList={jobSkills}/>
    </div>
  )
}

export default DropDown