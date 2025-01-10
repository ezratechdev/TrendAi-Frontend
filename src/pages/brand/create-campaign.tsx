import { useState } from "react";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from 'react-toastify';
import { no_authenication_axios_instance } from "../../functions/axios";



export default function CreateCampaign() {
  const [tasks, setTasks] = useState([]);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  // Get authenication cookie
  const [cookies] = useCookies(["authentication"]);

  console.log(cookies)

  function createCampaign(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    no_authenication_axios_instance.post('/brand/create-campaign', {
        name,
        ...description.length > 0 && {description}
    },{
        headers: {
            'Authorization': `Bearer ${cookies.authenication.token}`,
        }
    })
    .then(function(response){
        // add campaign to list
        console.log(response.data);
    })
    .catch(function(er){
      toast.error(er.message);
    })
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Create a Campaign</h1>
      <form className="flex mb-4" onSubmit={createCampaign}>
        <div className="flex-col">
          <input
            type="text"
            className="flex-1 p-2 border rounded my-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter campaign name"
            required
          />
          <input
            type="text"
            className="flex-1 p-2 border rounded my-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter campaign description"
          />
        </div>
        <button
          type="submit"
          className="ml-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Create
        </button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            {/* <span
              className={`flex-1 ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
              onClick={() => toggleTaskCompletion(index)}
            >
              {task.text}
            </span> */}
            <button
              //   onClick={() => deleteTask(index)}
              className="ml-4 p-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <ToastContainer />
    </div>
  );
}
