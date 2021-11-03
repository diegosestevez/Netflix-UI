import {useState} from 'react';
import './listItem.scss';
import {PlayArrow, Add, ThumbUpAltOutlined, ThumbDownOutlined} from '@material-ui/icons';


const ListItem = ({index}) =>{
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://player.vimeo.com/external/368484050.sd.mp4?s=e5836460013a63181bcaea491d47fba7bacb3d55&profile_id=139&oauth2_token_id=57447761"
  return(
    <div
      className="listItem"
      style = {{left: isHovered && index * 225 -50 + index * 2.5}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2019_14/2812016/190405-earths-core-al-1504.jpg" alt=""/>
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop/>
          <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon"/>
                <Add className="icon"/>
                <ThumbUpAltOutlined className="icon"/>
                <ThumbDownOutlined className="icon"/>
              </div>
              <div className='itemInfoTop'>
                <span>1 hour 14 minutes</span>
                <span className="limit">+16</span>
                <span>1997</span>
              </div>
              <div className="desc">
                xncnednm cxoedn imreo c mefincme fncenje dncjk ejnfcierhp
                fuvi befuob uchui nsfejoi chruejcnefijoh ncfi uhnf
                aedJX Dc njdfsl ckja.
              </div>
              <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  )
}

export default ListItem;
