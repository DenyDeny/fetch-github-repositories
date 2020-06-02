import React from 'react';
import { Card, Typography } from 'antd';

const { Title } = Typography;

function RepoCard({ languages, title }) {
  return (
    <Card style={{ height: '100%' }} title={title}>
      <Title level={4}>Technology stack:</Title>
      {
        languages.edges.length ?
          languages.edges.map(({ node: { id, name } }) => <p key={id}>{ name }</p>)
          :
          'Unknown'
      }
    </Card>
  )
}

export default RepoCard;
