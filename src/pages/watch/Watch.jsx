import './watch.scss';
import {ArrowBackOutlined} from '@material-ui/icons';

const Watch = () => {
  return(
    <div className='watch'>
      <div className='back'>
        <ArrowBackOutlined/>
        Home
      </div>
      <video
        className='video'
        autoPlay
        progress
        controls
        src="https://player.vimeo.com/external/368484050.sd.mp4?s=e5836460013a63181bcaea491d47fba7bacb3d55&profile_id=139&oauth2_token_id=57447761"
      />
    </div>
  )
}

export default Watch;
