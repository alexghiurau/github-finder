import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = (props) => {
  const { login, avatar_url } = props.user;
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        style={{ width: '60px' }}
        className='round-img'
        alt='Avatar'
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
