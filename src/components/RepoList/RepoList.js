import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';

// Context
import { AppContext } from '../../routes/context';

// Components
import RepoCard from '../RepoCard/RepoCard';

// Styles
import './RepoList.css';

function RepoList({ data }) {
  const { setChosenRepoName } = useContext(AppContext);

  if (!data) {
    return <h2>Empty...</h2>
  }

  return (
    <div className="RepoList-cards-wrapper">
      <Row gutter={[16, 24]} type="flex">
        { data.map(({ node: { id, name, languages } }) =>
          <Col key={id} className="gutter-row" span={6}>
            <Link to={`/repo/${id}`} onClick={() => setChosenRepoName(name)}>
              <RepoCard
                languages={languages}
                title={name}
              />
            </Link>
          </Col>
        )}
      </Row>
    </div>
  )
}

export default RepoList;
