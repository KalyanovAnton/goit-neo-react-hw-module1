import css from './Profile.module.css'

export default function Profile({ name, tag, location, image, stats }) {

    const { followers, views, likes } = stats;
  return (
    <div className={css.profile}>
      <div className={css.profileInfo}>
        <img
          src={image}
          alt="User avatar"
          className="profile-img"
          width={200}
          height={200}
        />
        <p className={css.profileName}>{name}</p>
        <p className={css.profileTag}>@{tag}</p>
        <p className={css.profileLoc}>{location}</p>
      </div>

      <ul className={css.profileStats}>
        <li className={css.profileStatsItem}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={css.profileStatsItem}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={css.profileStatsItem}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
