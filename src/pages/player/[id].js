import styles from './Player.module.css';

export default function Player({player}) {

    return(
        <div className={styles.container}>
        <div className={styles.playerInfo}> 
            <div>
                <div>Name</div>
                <div>{player.first_name} {player.last_name}</div>
            </div>
            <div>
                <div>Position</div>
                <div>{player.position}</div>
            </div>
            <div>
                <div>Team name</div>
                <div>{player.team.name}</div>
            </div>

            <div>
                <div>Team city</div>
                <div>{player.team.city}</div>
            </div>
         
            <div>
                <div>Team division</div>
                <div>{player.team.division}</div>
            </div>
            <div>
                <div>Team conference</div>
                <div>{player.team.conference}</div>
            </div>
          
            
            
            
        </div>
        </div>
    )
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export async function getStaticProps({params}) {
    const res = await fetch(`https://www.balldontlie.io/api/v1/players/${params.id}`)
    const player = await res.json();
  
  
    return{
      props: {
        player
    
      },
     revalidate: 10
    }
  }
  