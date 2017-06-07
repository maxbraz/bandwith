import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import { Card,
  CardHeader,
  CardTitle,
  CardMedia,
  CardActions,
} from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import { Row, Col } from 'react-flexbox-grid';
import axios from 'axios';
import FullscreenDialog from 'material-ui-fullscreen-dialog';
import Signup from './Signup';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      state: '',
      showEditProfile: false,
    };
  }

  componentDidMount() {
    // axios.get(`/api/zipcode/${this.props.user.zipCode}`)
    //   .then((response) => {
    //     console.log('got the repsonse: ', response.data);
    //   })
    //   .catch((err) => {
    //     console.log('is broken: ', err);
    //   });
  }

  render() {
    const {
      first,
      last,
      display,
      bio,
      age,
      gender,
      email,
      zipCode,
      searchRadius,
      instruments,
      genres,
      influences,
      preferredInstruments,
      preferredGenres,
      video_url,
      song_url,
      photo_src,
    } = this.props.user;
    const fullname = first + ' ' + last;
    const search = 'Searching within ' + searchRadius + ' miles';
    const profile = gender + ', ' + age;

    if (this.props.hasInfo) {
      return (
        <div>
        <Row>
          <Col xs={0} sm={3} md={3} lg={3} />
          <Col xs={12} sm={6} md={6} lg={6}>
            <Card>
              <CardHeader avatar={photo_src} title={fullname} subtitle={display} />
              <CardTitle title={fullname} subtitle={bio} />
              <List>
                <ListItem
                  leftIcon={<i className="material-icons">account_circle</i>}
                  primaryText={profile}
                />
                <ListItem
                  leftIcon={<i className="material-icons">email</i>}
                  primaryText={email}
                />
                <ListItem
                  leftIcon={<i className="material-icons">place</i>}
                  primaryText={zipCode}
                />
                <ListItem
                  leftIcon={<i className="material-icons">near_me</i>}
                  primaryText={search}
                />
                <ListItem
                  leftIcon={<i className="material-icons">speaker</i>}
                  primaryText="My Instruments"
                  primaryTogglesNestedList={true}
                  nestedItems={instruments.map(instrument =>
                    <ListItem key={instrument} primaryText={instrument} /> // eslint-disable-line
                  )}
                />
                <ListItem
                  leftIcon={<i className="material-icons">album</i>}
                  primaryText="My Genres"
                  primaryTogglesNestedList={true}
                  nestedItems={genres.map(genre =>
                    <ListItem key={genre} primaryText={genre} /> // eslint-disable-line
                  )}
                />
                <ListItem
                  leftIcon={<i className="material-icons">headset</i>}
                  primaryText="My Influences"
                  primaryTogglesNestedList={true}
                  nestedItems={influences.map(influence =>
                    <ListItem key={influence} primaryText={influence} /> // eslint-disable-line
                  )}
                />
                <ListItem
                  leftIcon={<i className="material-icons">grade</i>}
                  primaryText="Preferred Instruments"
                  primaryTogglesNestedList={true}
                  nestedItems={preferredInstruments.map(instrument =>
                    <ListItem key={instrument} primaryText={instrument} /> // eslint-disable-line
                  )}
                />
                <ListItem
                  leftIcon={<i className="material-icons">favorite</i>}
                  primaryText="Preferred Genres"
                  primaryTogglesNestedList={true}
                  nestedItems={preferredGenres.map(genre =>
                    <ListItem key={genre} primaryText={genre} /> // eslint-disable-line
                  )}
                />
                <ListItem
                  leftIcon={<i className="material-icons">music_video</i>}
                  primaryText="YouTube"
                  primaryTogglesNestedList={true}
                  nestedItems={[
                    <CardMedia key={video_url}>
                      <iframe
                        frameBorder="0"
                        allowFullScreen
                        title="video"
                        src={video_url}
                      />
                    </CardMedia>,
                  ]}
                />
                <ListItem
                  leftIcon={<i className="material-icons">audiotrack</i>}
                  primaryText="SoundCloud"
                  primaryTogglesNestedList={true}
                  nestedItems={[
                    <CardMedia key={song_url}>
                      <iframe
                        scrolling="no"
                        frameBorder="no"
                        title="audio"
                        src={song_url}
                      />
                    </CardMedia>,
                  ]}
                />
              </List>
              <CardActions>
                <FlatButton label="Edit" onClick={() => this.setState({ showEditProfile: true })} />
              </CardActions>
            </Card>
          </Col>
          <Col xs={0} sm={3} md={3} lg={3} />
        </Row>

          <FullscreenDialog
              open={this.state.showEditProfile}
              onRequestClose={() => this.setState({ showEditProfile: false })}
              title={this.props.user.display}
              actionButton={<FlatButton
                label='Close'
                onTouchTap={() => this.setState({ showEditProfile: false })}
              />}
              appBarStyle={{backgroundColor: '#000000'}}
            >
              <Signup />
          </FullscreenDialog>
        </div>
      );
    }
    return (
      <div>Loading</div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.profile,
  hasInfo: state.user.hasInfo,
});

export default connect(mapStateToProps)(Profile);
