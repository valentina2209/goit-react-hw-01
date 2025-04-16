import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.card}>
      <span className={isOnline ? css.online : css.offline}></span>
      <img src={avatar} alt="Avatar" width="48" className={css.avatar} />
      <p className={css.name}>{name}</p>
    </div>
  );
};

export default FriendListItem;
