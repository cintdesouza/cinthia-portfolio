// Styles
import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  StackSection,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectsAreaContent,
  ProjectAreaWrapperColumns,
} from "./style";


export const Home = (): JSX.Element => {
  return (
    <main>
      <Header>
        <Container>
          <HeaderContent>
            <Text as="h1" type="heading1" color="brand1">
              Cínthia de Souza{" "}
            </Text>
            <Text type="body1">
            Sou Desenvolvedora Full Stack com foco em Front End, desenvolvi projetos voltados a sites responsivos para áreas de financeiro, 
            E-Commerce e redes sociais, e com isso adquiri habilidades em programação. Além de uso contínuo de metodologias ágeis SCRUM e 
            Kanban para organização de tarefas e funções em equipe. Tenho também domínio da língua inglesa em nível intermediário.<br /><br />

            Possuo experiência em controle de versão de projetos com Git, estilização de sites e criação de designs com uso de Figma, 
            e familiaridade com SQL, PostgreSQL, Express, Python e programação assíncrona.
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="projectLink" href="#projetos">
                Projetos
              </Button>
              <Button as="a" href="#tecnologias" type="btLink" color="brand1">
                Tecnologias
              </Button>
            </HeaderButtonsArea>
          </HeaderContent>
        </Container>
      </Header>
      <StackSection id="tecnologias">
        <Container>
          <Text as="h4" type="heading3" color="grey1">
            Ferramentas que domino
          </Text>
          <StackCards>
            {stackData.map((stack, index) => (
              <Stack key={index} title={stack.title} icon={stack.img} />
            ))}
          </StackCards>
        </Container>
      </StackSection>
      <ProjectsArea id="projetos">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey1">
                Vamos trocar uma ideia?
              </Text>
              <Text as="p" type="body1" color="grey2">
                Estou sempre online no linkedIn para me conectar com outros
                desenvolvedores, receber insights sobre tecnologia e compartilhar
                meus processos de desenvolvimento de projetos. Vamos entrar em contato!
              </Text>
              <Button
                type="primary"
                target="_blank"
                as="a"
                href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
              >
                Acessar perfil no LinkedIn
              </Button>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Text type="body1" color="grey2" css={{ marginBottom: "$2" }}>
                Projetos
              </Text>
              <Text as="h3" type="heading2" color="grey1">
                Dedicação para encontrar{" "}
                <Text as="span" type="heading2">
                  soluções
                </Text>
                !
              </Text>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
    </main>
  );
};
