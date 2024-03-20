import React, {useState} from 'react'
import {useParams} from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import Landing from './CodeEditor/components/Editor-Landing';
import { Input } from './AceComps/Input';
import { Button } from './ui/button';
import axios from 'axios';

const MentorCall = () => {
  const {roomId} = useParams();
  const [role, setRole] = useState("");
  const getRole = localStorage.getItem('role');
  console.log(getRole);
  const token = localStorage.getItem('token');
  console.log(token);

  const myMeeting = async(element) => {
    const appId = 1118000397;
    const serverSecret = "282ab140579e78a3eab87dd7e3603c2e";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId, serverSecret, roomId, Date.now().toString(), "Ryan Rego");

    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container : element,
      sharedLinks : [
        {
          name : 'Copy Link',
          url : `http://localhost:5173/meeting/${roomId}`
        }
      ],
      scenario : {
        mode : ZegoUIKitPrebuilt.OneONoneCall,
      }
    })
  }

  const handleChange = (e) => {
    setRole(e.target.value);
  }

  const handleFetch = () => {
    const response = axios.post('/template/getRoleTemplates', {
      token, role
    });
    console.log(response.data);
  }

  return (
    <main>
      <div className="w-full min-h-[80px] font-semibold bg-transparent text-white flex items-center p-2 item-center justify-center text-[2.50vw]">Interview Room</div>
      <div className="mb-6 h-[55vh] min-w-full bg-white flex justify-center items-center">
        <div ref={myMeeting}/>
      </div>
      {
        getRole === 'recruiter' ? (
          <div className="w-[155vh] min-h-[29vh] flex flex-row gap-9">
            <div className="w-1/2 h-full p-7">
              <h1 className='font-medium text-lg tracking-wide mb-6 text-white'>Enter Job Role</h1>
              <Input
                name="role"
                placeholder="Backend Developer"
                value={role}
                onChange={handleChange}
                className="w-3/4"
              />
              <Button className="tracking-wide mt-5" onClick = {handleFetch}>Search for templates</Button>
            </div>
            <div className="w-1/2 min-h-full bg-[#0f172a] text-white">
              These are the questions
            </div>
          </div>
        ) : (
          <Landing/>
        )
      }
    </main>
  )
}

export default MentorCall;