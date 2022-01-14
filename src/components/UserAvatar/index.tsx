import React from "react";
import Avatars, { getAvatar } from "./avatars";
import styles from "./UserAvatar.module.css";

interface Props {
  selectable?: boolean;
  setAvatar?: any;
  defaultAvatar?: string;
}

const UserAvatar: React.FC<Props> = ({
  selectable,
  setAvatar,
  defaultAvatar,
}) => {
  const [isMenuOpen, showMenu] = React.useState(false);
  const [selectedAvatar, setSelectedAvatar] = React.useState<string>(
    defaultAvatar || "0"
  );

  const menuRef = React.useRef(null);

  const toggleMenu = (event: React.MouseEvent) => {
    if (selectable && event.target !== menuRef.current) showMenu(!isMenuOpen);
  };

  const handleSelectAvatar = ({ target }: any) => {
    setSelectedAvatar(target.id);
    setAvatar(target.id);
  };

  return (
    <>
      <div className={styles.AvatarContainer} onClick={toggleMenu}>
        <div className={styles.UserAvatar}>
          <img
            src={getAvatar(selectedAvatar).url}
            alt={getAvatar(selectedAvatar).alt}
          />
        </div>
        {selectable ? <div className={styles.AvatarSelect}>▼</div> : null}
        {isMenuOpen ? (
          <div ref={menuRef} className={styles.AvatarMenu}>
            {Avatars.map(({ id, alt, url }) => (
              <div
                key={id}
                className={styles.Avatar}
                onClick={handleSelectAvatar}
              >
                <img id={id.toString()} src={url} alt={alt} />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default UserAvatar;
