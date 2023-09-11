import {
  Project as ProjectWrapper,
  ProjectStack,
  ProjectStackTech,
  ProjectLink,
  ProjectLinks,
} from "./style";

import { Text } from "@/styles/Text";
import { useEffect, useState } from "react";
import { FaGithub, FaShare } from "react-icons/fa";
import { userData } from "@/utils/userData";

interface ReposType {
  id: number;
  name: string;
  language: string;
  description: string;
  html_url: string;
  homepage: string;
}

export const Project = (): JSX.Element => {
  const [repositories, setRepositories] = useState<ReposType[]>([]);

  useEffect(() => {
      setRepositories([{
        id: 1,
        name: "MyPet",
        language: "TypeScript",
        html_url: "https://github.com/mypet-project/mypet-ts",
        description: "Projeto em grupo com objetivo de criar postagens sobre animais de estimação. A API foi construída pelos integrantes do projeto junto do design próprio.",
        homepage: "https://mypet-ts-one.vercel.app/"},
      {
        id: 2,
        name: "Burguer Kenzie",
        language: "TypeScript",
        html_url: "Indisponível",
        description: "Aplicação realizada com possibilidade de criar conta, efetuar login e adicionar itens ao carrinho de forma dinâmica.",
        homepage: "https://kenzieburguer-ts-cinthia.vercel.app/"},
      {
        id: 3,
        name: "Kenzie Hub",
        language: "TypeScript",
        html_url: "Indisponível",
        description: "Projeto organizado para criar usuário, fazer login e registrar suas tecnologias com organização conjunta a API.",
        homepage: "https://kenzie-hub-cinthia.vercel.app/"},
      {
        id: 4,
        name: "NuKenzie",
        language: "TypeScript",
        html_url: "Indisponível",
        description: "Site com funcionalidade financeira para aplicar entrada e saída monetária do cliente.",
        homepage: "https://react-nu-kenzie-cinthia.vercel.app/"},
      {
        id: 5,
        name: "E-Commerce GeekshopK",
        language: "Javascript",
        html_url: "https://github.com/Kenzie-Academy-Brasil-Developers/m1-capstone-ecommerce-cinthia",
        description: "Desenvolvimento de página de E-Commerce com estilização dinâmica e carrinho de compras funcional, com desenhos personalizados para cada elemento.",
        homepage: "https://kenzie-academy-brasil-developers.github.io/m1-capstone-ecommerce-cinthia/"}]);
  },
   []);

  return (
    <>
      {repositories?.map((repository) => (
        <ProjectWrapper key={repository.id}>
          <Text
            as="h2"
            type="heading3"
            css={{ marginBottom: "$3" }}
            color="grey1"
          >
            {repository.name}
          </Text>

          {repository.language && (
            <ProjectStack>
              <Text type="body2">Linguagem:</Text>
              <ProjectStackTech>
                <Text color="brand1" type="body2">
                  {repository.language}
                </Text>
              </ProjectStackTech>
            </ProjectStack>
          )}

          <Text type="body1" color="grey2">
            {repository.description}
          </Text>
          <ProjectLinks>
            {repository.html_url == "Indisponível" ? undefined : <ProjectLink target="_blank" href={repository.html_url}>
              <FaGithub /> Github Code
            </ProjectLink>}
            {repository.homepage && (
              <ProjectLink target="_blank" href={repository.homepage}>
                <FaShare /> Aplicação
              </ProjectLink>
            )}
          </ProjectLinks>
        </ProjectWrapper>
      ))}
    </>
  );
};
