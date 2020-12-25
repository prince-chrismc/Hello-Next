import React from 'react'
import Clock from 'react-live-clock'
import { Header, Container, Divider, Icon, Grid } from 'semantic-ui-react'


console.log('[Layout.js] API_URL:', process.env.API_URL)
console.log('[Layout.js] NEXT_PUBLIC_API_URL:', process.env.NEXT_PUBLIC_API_URL)

const API_URL = process.env.API_URL

const Layout = ({ children }) => {
  return (
    <Container>
      <Header as="h1" className="h1">
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column>
              Users Management
            </Grid.Column>
            <Grid.Column>
              <span className="pullRight">
                <Clock format={'HH:mm:ss'} ticking={true} timezone={'Etc/UTC'} />
              </span>
            </Grid.Column>
            <Grid.Column>
              <p>Back-end: {process.env.NEXT_PUBLIC_API_URL} {API_URL}</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Header>
      {children}
      <Divider />
      <p className="right floated">
        Made with <Icon name="heart" color="red" /> by Chris Mc
      </p>
    </Container>
  )
}

export default Layout
