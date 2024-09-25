import './DropDown.scss';
import {useState, useEffect} from 'react';
import './DropDown.scss';
import axios from 'axios';
import ButtonArray from '../ButtonArray/ButtonArray.jsx'


function DropDown() {
    const baseUrl = import.meta.env.BASE_URL;
    const [selectedJob, setSelectedJob] = useState({})
    const [jobTitles, setJobTitles] = useState([]);
    const [jobSkills, setJobSkills] = useState([]);
    const [initialJobTitle, setInitialJobTitle] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
    }
    console.log(baseUrl)

    const handleAllSkillsClick = async () => {
        try{
            const response = await axios.get(`https://byteback-9ec8415feff0.herokuapp.com/skills/`)
            setJobSkills(response.data)
            
        }catch (error) {
            console.error("The skills for the selected job cannot be found")
        }
    }

    const handleInputChange = async (e) => {
        e.preventDefault();
        setSelectedJob(e.target.value);
    }

    useEffect(() => {
        const getSkillsList = async () => {
            try{
                const response = await axios.get(`https://byteback-9ec8415feff0.herokuapp.com/skills/${selectedJob}`)
                setJobSkills(response.data)
                setInitialJobTitle(response.data[0])
                
            }catch (error) {
                console.error("The skills for the selected job cannot be found")
            }

        }
        getSkillsList();
    }, [selectedJob])

    const getJobList = async () => {
        try {
            const response = await axios.get(`https://byteback-9ec8415feff0.herokuapp.com/jobs`);
            const firstJob = response.data[0];
            setSelectedJob(firstJob.id);
            setJobTitles(response.data);
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
            className="drop-down__list selected-list"
            value={jobTitles.job_title}
            onChange={(e) => handleInputChange(e)}
            required
            >
            <option className="list-color" value="" disabled defaultValue={initialJobTitle}>
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
        <div className="drop-down">
            <h2>-OR- </h2>
            <button className="submit-button" onClick={handleAllSkillsClick}>See All Skills</button>
        </div>
        <ButtonArray skillsList={jobSkills}/>
    </div>
  )
}

export default DropDown