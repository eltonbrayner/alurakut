import { Box } from '../src/components/Box'
import { MainGrid } from '../src/components/MainGrid'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'

function ProfileSideBar({githubUser}) {
  return (
    <Box>
      <img src={`https://github.com/${githubUser}.png`} alt={githubUser} />
    </Box>
  )
}

export default function Home() {
  const githubUser = 'ewertont'
  const pessoasFavoritas = ['eltonbrayner', 'omariosouto', 'peas', 'rafaballerini', 'marcobrunodev', 'juunegreiros']
  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" gridarea="profileArea">
          <ProfileSideBar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" gridarea="welcomeArea">
          <Box>
            <h1 className="title">
              Bem Vindo(a)
            </h1>
            <OrkutNostalgicIconSet />
           </Box>
        </div>
        <div className="profileRelationsArea" gridarea="profileRelationsArea">
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Amigos ({pessoasFavoritas.length})</h2>
            <ul>
              {pessoasFavoritas.map(el => <li>
                <a href={`/users/${el}`} key={el}>
                <img src={`https://github.com/${el}.png`} alt={el} />
                <span>{el}</span>
              </a>
              </li>)}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>Comunidades </Box>
        </div>
        </MainGrid>
      </>
  )
}
