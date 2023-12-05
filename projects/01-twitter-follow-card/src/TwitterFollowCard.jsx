import { useState } from 'react'

export function TwitterFollowCard({ children = 'Unknown', userName = 'unknown', initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const avatarUrl = `https://unavatar.io/twitter/${userName}`
  const buttonText = isFollowing
    ? 'Siguiendo'
    : 'Seguir'
  const buttonStyle = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={avatarUrl}
          alt="avatar" />
        <div>
          <strong className="tw-followCard-info">{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonStyle} onClick={handleClick}>
          <span className='tw-followCard-text'>{buttonText}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
} 