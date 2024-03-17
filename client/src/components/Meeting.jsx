import React from 'react'
import {useParams} from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import Landing from './CodeEditor/components/Editor-Landing';

const MentorCall = () => {
  const {roomId} = useParams();

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

  return (
    <main>
      <div className="w-full min-h-[80px] font-semibold bg-transparent text-white flex items-center p-2 item-center justify-center text-[2.50vw]">Interview Room</div>
      <div className="mb-6 h-[55vh] w-full bg-white flex justify-center items-center">
        <div ref={myMeeting}/>
      </div>
      <Landing/>
    </main>
  )
}

export default MentorCall;