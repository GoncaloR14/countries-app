import Link from 'next/link'
import styles from './Home.module.css';
export default function Home({players}) {

  
  return (
   <div className={styles.container}>  
   {players && players.map( player => {
  
  
     return (
  
      <Link href={`player/${player.id}`}>
        <a>
          <div className={styles.card}>
      <div>{player.first_name} {player.last_name}</div>
      <div>{player.position}</div>
      <div>{player.team.abbreviation}</div>
      </div>
      </a>
      </Link>
    
     )
   })}
   </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`https://www.balldontlie.io/api/v1/players`)
  const players = await res.json();

  console.log(players)

  return{
    props: {
      players: players.data
  
    },
   revalidate: 10
  }
}
