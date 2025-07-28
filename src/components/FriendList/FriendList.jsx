import css from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendsList}>
      {friends.map(friend => (
        <li className={css.friendsListItem} key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}

const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <div className={css.friendsInfo}>
      <img className={css.friendsImg} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendsName}>{name}</p>
      <p className={isOnline ? css.statusOnline : css.statusOffline}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};
