import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.card}>
      <img src={avatar} alt="Avatar" width="48" className={css.avatar} />
      <p className={css.name}>{name}</p>
      {<span className={isOnline ? css.online : css.offline}>
      {isOnline ? "Online" : "Offline"}
      </span>}
    </div>
  );
};

export default FriendListItem;
