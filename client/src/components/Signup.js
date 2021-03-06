import React from 'react';
import { Redirect, Route, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { updateProfile } from '../actions';
import FirstNameInput from './Signup/FirstNameInput';
import LastNameInput from './Signup/LastNameInput';
import ZipCodeInput from './Signup/ZipCodeInput';
import AgeInput from './Signup/AgeInput';
import GenderInput from './Signup/GenderInput';
import BiographyTextArea from './Signup/BiographyTextArea';
import InfluencesInput from './Signup/InfluencesInput';
import UserInstrumentsInput from './Signup/UserInstrumentsInput';
import UserGenresInput from './Signup/UserGenresInput';
import SongInput from './Signup/SongInput';
import VideoInput from './Signup/VideoInput';
import SearchRadiusInput from './Signup/SearchRadiusInput';
import PreferredInstrumentsInput from './Signup/PreferredInstrumentsInput';
import PreferredGenresInput from './Signup/PreferredGenresInput';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      last: '',
      zipCode: '',
      gender: '',
      bio: '',
      song: '',
      video: '',
      age: '',
      searchRadius: '',
      instruments: {},
      genres: {},
      influence: '',
      influences: {},
      preferred_instruments: {},
      preferred_genres: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.send = this.send.bind(this);
    this.handleSelectMultiple = this.handleSelectMultiple.bind(this);
    this.handleInfluences = this.handleInfluences.bind(this);
  }

  // componentWillUpdate() {
  //   console.log('component will update');
  //   // if (!isFetching && hasSaved) {
  //   //   history.push('/profile');
  //   // }
  // }

  send(event) {
    event.preventDefault();

    const { dispatch, history } = this.props;

    const profile = {
      first: this.state.first,
      last: this.state.last,
      gender: this.state.gender,
      bio: this.state.bio,
      instruments: this.state.instruments,
      genres: this.state.genres,
      influences: this.state.influences,
      song_url: this.state.song,
      video_url: this.state.video,
      zipCode: this.state.zipCode,
      id: this.props.userId,
      age: this.state.age,
      searchRadius: this.state.searchRadius,
      preferred_instruments: this.state.preferred_instruments,
      preferred_genres: this.state.preferred_genres,
    };

    this.setState({
      first: '',
      last: '',
      gender: '',
      bio: '',
      influence: '',
      song: '',
      video: '',
      zipCode: '',
      age: '',
      searchRadius: '',
      instruments: {},
      genres: {},
      influences: {},
      preferred_instruments: {},
      preferred_genres: {},
    });

    dispatch(updateProfile(profile));
  }

  handleSelectMultiple(event) {
    const name = event.target.name;
    const value = event.target.value;
    const selected = this.state[name];

    if (!selected[value]) {
      selected[value] = value;
    } else {
      delete selected[value];
    }

    this.setState({
      [name]: selected,
    });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleInfluences() {
    const influence = this.state.influence;
    const updatedInfluences = this.state.influences;

    if (!updatedInfluences[influence]) {
      updatedInfluences[influence] = influence;
      this.setState({
        influences: updatedInfluences,
        influence: '',
      });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.send}>
          <FirstNameInput value={this.state.first} onChange={this.handleChange} />
          <LastNameInput value={this.state.last} onChange={this.handleChange} />
          <ZipCodeInput value={this.state.zipCode} onChange={this.handleChange} />
          <AgeInput value={this.state.age} onChange={this.handleChange} />
          <GenderInput onChange={this.handleChange} />
          <BiographyTextArea bio={this.state.bio} onChange={this.handleChange} />
          <InfluencesInput
            influence={this.state.influence}
            influences={this.state.influences}
            handleChange={this.handleChange}
            onClick={this.handleInfluences}
          />
          <UserInstrumentsInput
            instruments={this.state.instruments}
            onChange={this.handleSelectMultiple}
          />
          <UserGenresInput
            onChange={this.handleSelectMultiple}
            genres={this.state.genres}
          />
          <SongInput song={this.state.song} onChange={this.handleChange} />
          <VideoInput video={this.state.video} onChange={this.handleChange} />
          <SearchRadiusInput radius={this.state.searchRadius} onChange={this.handleChange} />
          <PreferredGenresInput
            genres={this.state.preferred_genres}
            onChange={this.handleSelectMultiple}
          />
          <PreferredInstrumentsInput
            instruments={this.state.preferred_instruments}
            onChange={this.handleSelectMultiple}
          />
          <p>
            <input type="submit" value="Submit" />
          </p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => (
  { userId: state.auth.userId }
);

export default withRouter(connect(mapStateToProps)(Signup));
