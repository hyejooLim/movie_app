import React, { Component } from 'react';
import './Detail.css';

class Detail extends Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/'); // 홈으로 리다이렉트
    }
  }
  
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className='movie__detail'>
          <img
            src={location.state.poster}
            alt={location.state.title}
            title={location.state.title}
          />
          <div className='movie__detail__data'>
            <h2 className='movie__title'>{location.state.title}</h2>
            <h4 className='movie__year'>{location.state.year}</h4>
            <ul className='movie__genres'>
              {location.state.genres.map((genre, index) => (
                <li key={index} className='movie__genre'>
                  {genre}
                </li>
              ))}
            </ul>
            <h4 className='movie__summary'>{location.state.summary}</h4>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
