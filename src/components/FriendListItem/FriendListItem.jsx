import css from './FriendListItem.module.css';

export default function FriendListItem  ({ friend: { avatar, name, isOnline } }) {
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