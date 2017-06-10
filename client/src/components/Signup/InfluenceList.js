import React, { Component } from 'react';
import Chip from 'material-ui/Chip';
import { Card, CardHeader } from 'material-ui/Card';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

class InfluenceList extends Component {
  constructor(props) {
    super(props);
    this.handleChipDelete = this.handleChipDelete.bind(this);
  }

  handleChipDelete(item) {
    this.props.handleChip(item);
  }

  render() {
    // return (
    //   <div style={styles.wrapper}>
    //     {this.props.selectedItems.length ?
    //         this.props.selectedItems.map(item => (
    //           <Chip
    //             style={styles.chip}
    //             key={item.name}
    //             id={item.name}
    //             onRequestDelete={() => this.handleChipDelete(item.name)}
    //           >
    //             {item.name}
    //           </Chip>),
    //     ) : null}
    //   </div>
    // );
    return (
      <div style={styles.wrapper}>
        {this.props.selectedItems.length ?
            this.props.selectedItems.map(item => (
              <Card style={{ marginRight: '5px' }} key={item.name}>
                <CardHeader style={{ padding: '16px 0px 16px 16px', display: 'inline-block' }} titleStyle={{ verticalAlign: 'middle' }} title={item.name} avatar={item.img} />
                <div onClick={() => this.handleChipDelete(item.name)} className="remove-div">
                  <i className="material-icons remove-button">clear</i>
                </div>
              </Card>),
        ) : null}
      </div>
    );
  }
}

export default InfluenceList;