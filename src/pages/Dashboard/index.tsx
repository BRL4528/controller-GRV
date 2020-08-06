/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/no-danger */
/* eslint-disable import/extensions */
/* eslint-disable camelcase */
import React from 'react';

// import api from '../../services/api';

import logoImg from '../../assets/logo2.svg';
// eslint-disable-next-line import/no-unresolved

import { Title, Form, Repositories } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FunctionComponent = () => {
  // const [newRepo, setNewRepo] = useState('');
  // const [inputError, setInputError] = useState('');
  // const [repositories, setRepositories] = useState<Repository[]>(() => {
  //   const storagedRepositories = localStorage.getItem(
  //     '@GithubExplorer:repositories',
  //   );

  //   if (storagedRepositories) {
  //     return JSON.parse(storagedRepositories);
  //   }
  //   return [];
  // });

  // useEffect(() => {
  //   localStorage.setItem(
  //     '@GithubExplorer:repositories',
  //     JSON.stringify(repositories),
  //   );
  // }, [repositories]);

  // async function handleAddRepository(
  //   event: FormEvent<HTMLFormElement>,
  // ): Promise<void> {
  //   event.preventDefault();

  //   if (!newRepo) {
  //     setInputError('Digite o autor/nome do repositório');
  //     return;
  //   }

  //   try {
  //     const response = await api.get<Repository>(`repos/${newRepo}`);

  //     const repository = response.data;

  //     setRepositories([...repositories, repository]);
  //     setNewRepo('');
  //     setInputError('');
  //   } catch (err) {
  //     setInputError('Erro ao buscar por esse repositório');
  //   }
  // }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Granja Rio verde</Title>

      <Form hasError={false}>
        <input placeholder="Pesquise por algo na pagina" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        {/* {repositories.map(repository => ( */}
        {/* <Link to="/repository"> */}
        {/* <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            /> */}
        {/* <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div> */}
        {/* <FiChevronRight size={20} />
        </Link> */}
        {/* ))} */}
        {/* @ts-ignore */}

        {/* <iframe src="https://e.infogram.com/c30b40db-aeaa-42f0-8767-01c8ee85edb5?src=embed" title="Dadas Granja rio verde" width="1463" height="1046" scrolling="no" frameborder="0" style="border:none;" allowfullscreen="allowfullscreen"></iframe><div style="padding:8px 0;font-family:Arial!important;font-size:13px!important;line-height:15px!important;text-align:center;border-top:1px solid #dadada;margin:0 30px;width: 1403px"><a href="https://infogram.com/c30b40db-aeaa-42f0-8767-01c8ee85edb5" style="color:#989898!important;text-decoration:none!important;" target="_blank">Dadas Granja rio verde</a><br><a href="https://infogram.com" style="color:#989898!important;text-decoration:none!important;" target="_blank" rel="nofollow">Infogram</a></div> */}
        <h1>Construção em adamento</h1>
        <iframe
          src="https://e.infogram.com/c30b40db-aeaa-42f0-8767-01c8ee85edb5?src=embed"
          title="Dadas Granja rio verde"
          width="1500"
          height="530"
          scrolling="no"
          frameBorder="0"
          allowFullScreen
        />
        <div>
          <a href="https://infogram.com/c30b40db-aeaa-42f0-8767-01c8ee85edb5">
            Saber mais
          </a>
        </div>
        <h1>Relatorio de Fiscalização</h1>

        <iframe
          src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=hkib9kh6rh"
          width="100%"
          height="480"
          seamless
          scrolling="no"
          frameBorder="0"
          allowFullScreen
        />
      </Repositories>
    </>
  );
};

export default Dashboard;
