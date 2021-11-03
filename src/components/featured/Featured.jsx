import './featured.scss';
import {PlayArrow, InfoOutlined} from '@material-ui/icons';

const Featured = ({type}) => {
  return(
    <div className='featured'>
    {type && (
      <div className="category">
        <span>{type === "movie" ? "Movie" : "Series"}</span>
        <select name="genre" id="genre">
          <option>Genre</option>
          <option value= "Adventure">Adventure</option>
          <option value= "Comedy">Comedy</option>
          <option value= "Crime">Crime</option>
          <option value= "Fantasy">Fantasy</option>
          <option value= "Historical">Historical</option>
          <option value= "Horror">Horror</option>
          <option value= "Romance">Romance</option>
          <option value= "Sci-fi">Sci-fi</option>
          <option value= "Thriller">Thriller</option>
          <option value= "Western">Western</option>
          <option value= "Animation">Animation</option>
          <option value= "Drama">Drama</option>
          <option value= "Documentary">Documentary</option>
        </select>
      </div>
    )}
      <img src="https://images.pexels.com/photos/730433/pexels-photo-730433.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      alt=""
      />
      <div className="info">
        <img src="https://i2.wp.com/www.grapheine.com/wp-content/uploads/2019/11/jp-cover.jpg?fit=1518%2C934&quality=90&strip=all&ssl=1" alt=""/>
        <span className="desc">
          vnfjnv efklmklcm kfmk lmceklcmkld fnmcvjkl fnvje ncndck ls dnmcklcndkl cndk cndknsl
          vnfjnv efklmklcm kfmk lmceklcmkld fnmcvjkl fnvje ncndck ls dnmcklcndkl cndk cndknsl
          vnfjnv efklmklcm kfmk lmceklcmkld fnmcvjkl fnvje ncndck ls dnmcklcndkl cndk cndknsl
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow/>
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined/>
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Featured
