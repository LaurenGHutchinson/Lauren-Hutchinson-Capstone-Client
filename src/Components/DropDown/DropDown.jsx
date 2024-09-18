import './DropDown.scss';
import {useState, useEffect} from 'react';
import './DropDown.scss';
import axios from 'axios';
import ButtonArray from '../ButtonArray/ButtonArray.jsx'


function DropDown() {
    const [initialJob, setInitialJob] = useState({});
    const [selectedJob, setSelectedJob] = useState({})

    const [jobTitles, setJobTitles] = useState([]);
    const [jobSkills, setJobSkills] = useState([]);
    const [initialSkills, setInitialSkills] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
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

    const getJobList = async () => {
        try {
            const response = await axios.get("http://localhost:8080/jobs");
            const firstJob = response.data[0];
            setSelectedJob(firstJob.id);
            console.log(selectedJob)
            setJobTitles(response.data);
            console.log(jobTitles);
        }catch (error) {
            console.error("Unable to get the job list")
        }
    }
    useEffect(() =>{
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