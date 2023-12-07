import { TwitterFollowCard } from './TwitterFollowCard'
import './App.css'

export function App () {
  const users = [{
    name: 'Miguel Angel Duran',
    userName: 'midudev',
    isFollowing: true
  },
  {
    name: 'Alejandro Castaño',
    userName: 'alejocastaal',
    isFollowing: false
  },
  {
    name: 'Lina Maria Martinez',
    userName: 'lina.martinez',
    isFollowing: true
  },
  {
  }]

  return (
    <section className='App'>
      {
        users.map(({ name, userName, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}
