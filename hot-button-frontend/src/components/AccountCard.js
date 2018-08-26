import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap'

const AccountCard = ({ name, username, position}) => (
  <Card>
    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
      <CardBody>
      <CardTitle>{name}</CardTitle>
      <CardSubtitle>@{username}</CardSubtitle>
      <CardText>{position}</CardText>
      <Button>My Hot Tweets</Button>
    </CardBody>
  </Card>
)

export default AccountCard
